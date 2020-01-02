import { Component, OnInit } from '@angular/core';
import { UserServices } from './user.services';
import { User } from '../model/User';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';

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
  constructor(private userService: UserServices) {}

  userObj : User;

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
save(form:NgForm){
  console.log('Saving party info'+form.value);
  this.userService.saveUser(form.value)
  .subscribe(
    (response => {
      console.log(response);
      }),
  );

}
}