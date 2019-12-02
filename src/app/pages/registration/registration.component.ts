import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  userdetails: FormGroup;
  RegisForm = this.fb.group({
    smoke: new FormControl('No'),
    drink:new FormControl('No'),
    food:new FormControl('veg'),
    married: new FormControl(false),
    admin: new FormControl(false),
    profile:[''],
    firstname: ['',Validators.required],
    lastname: [null],
    password: [null],
    empId:[null,[Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
    emailId:[null,[Validators.required,Validators.pattern("[^ @]*@[^ @]*")]],
    address:[null]

  });
  imageSrc:any;
  constructor(private userService : UserService, private fb: FormBuilder,private snackbar:MatSnackBar) {}

  ngOnInit() {
    
      
  }
  public errorHandling = (control: string, error: string) => {
    return this.RegisForm.controls[control].hasError(error);
  }
  onFileSelected(event){
    let fileToUpload: File = null;
    if(event.target.files.length >0){
      fileToUpload = event.target.files.item(0);
  
      this.RegisForm.get('profile').setValue(fileToUpload);
      const reader = new FileReader();
        reader.onload = e => this.imageSrc = reader.result;

        reader.readAsDataURL(fileToUpload);
// const file=event.target.files[0];
// this.RegisForm.get('profile').setValue(file);
    }
   
  }

  submitform() {
    if (this.RegisForm.valid) {
      this.userdetails =this.RegisForm.value;
      this.userService.SaveUsers(this.userdetails).subscribe(data => {
        // this.snackbar.open('User Registration Sucessfully',null,{
        //   duration: 2000,
        // });
        alert('User Registration Successful');
        this.RegisForm.markAsUntouched();   
      }, Error => {
        this.snackbar.open('Some error occured.', '', {
          duration: 2000
        });
      });
      console.log( this.userdetails);
      this.RegisForm.reset({
        married: false
      });
      //this.RegisForm.reset(this.RegisForm.value);

      }

        // console.log("within on submit method"+this.RegisForm.value);
        // this.authService.signIn(this.RegisForm.value);
      
  }
  
}
