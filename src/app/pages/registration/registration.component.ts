import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  RegisForm = this.fb.group({
    smoke: new FormControl('', Validators.required),
    drink:new FormControl('', Validators.required),
    married: new FormControl(false),
    firstname: [null,Validators.required],
    lastname: [null,Validators.required],
    password: [null,Validators.required],
    empid:[null,Validators.required],
    email:[null,Validators.required],

  });

  constructor(private authService : AuthService, private fb: FormBuilder) {}

  ngOnInit() {
    
      
  }
  
  submitform() {
    alert("Registration Successfull");
        // console.log("within on submit method"+this.RegisForm.value);
        // this.authService.signIn(this.RegisForm.value);
      
  }
  
}
