import { Component, OnInit } from '@angular/core';
import { UserServices } from './user.services';
import { User } from '../model/User';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';0
import { from } from 'rxjs';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
    
 food : string;
 drink : string;
 smoke : string;
 status : string;
 profile_pic : string;
 imageSrc: any; 
 userObj : User;

  constructor(private userService: UserServices, 
    private toastr: ToastrService) {}

  dropdownOptions_food =[];
  dropdownOptions_drink =[];
  dropdownOptions_smoke =[];
  dropdownOptions_maritalStatus =[];
  
  ngOnInit() {
    console.log('Initializing');
    this.userService.getUserObj().subscribe(
      (response : User)  => {
        console.log(response);
      console.log('password:'+response.password);
      this.userObj = response;
      this.food =this.userObj.food_pref;
      this.drink=this.userObj.drink;
      this.smoke=this.userObj.smoke;
      this.status=this.userObj.marital_status;      
      this.profile_pic=this.userObj.profile_pic;
    });
    

    this.dropdownOptions_food =[
      'Veg',
      'Non Veg',
      'Strict Veg'
    ];

    this.dropdownOptions_drink =[
      'Yes',
      'No'
    ];

    this.dropdownOptions_smoke =[
      'Yes',
      'No'
    ];

    this.dropdownOptions_maritalStatus =[
      'Married',
      'Un-married'
    ];

  
}

onFileSelected(event) {
  let fileToUpload: File = null;
  if (event.target.files.length > 0) {
    fileToUpload = event.target.files.item(0);

    const reader = new FileReader();
    reader.onload = e => (this.imageSrc = reader.result);

    reader.readAsDataURL(fileToUpload);
    // const file=event.target.files[0];
    // this.RegisForm.get('profile').setValue(file);
  }
}

save(form:NgForm){
  console.log('Saving party info'+form.value);
  this.userService.saveUser(form.value)
  .subscribe(
    (response => {
      console.log(response);
      this.toastr.success('Updated Successfully');
      }),
      (error) => {
        console.log(error);
        this.toastr.error('Something Wrong');
      }
  );

}
}