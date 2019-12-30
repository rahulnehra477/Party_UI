import { Component, OnInit } from '@angular/core';
import { UserServices } from './user.services';
import { User } from '../model/User';

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

  dropdownList = [];
  dropdownList1 = [];
  dropdownList2 = [];
  dropdownList3 = [];
  userDropdownSettings={};
  userDropdownSettings1={};
  userDropdownSettings2={};
  userDropdownSettings3={};

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

    this.dropdownList = [
      {  item_text: 'Veg' },
      {  item_text: 'Non Veg' },
      {  item_text: 'Strict Veg' },
    ];

    this.dropdownList1 = [
      {  item_text: 'Yes' },
      {  item_text: 'No' },
    ];

    this.dropdownList2 = [
      {  item_text: 'Yes' },
      {  item_text: 'No' },
    ];

    this.dropdownList3 = [
      {  item_text: 'Married' },
      {  item_text: 'Un-married' },
    ];

    this.userDropdownSettings = {
      singleSelection: true,
      idField: 'item_text',
      textField: 'item_text',
      itemsShowLimit: 3,
    };

    this.userDropdownSettings1 = {
      singleSelection: true,
      idField: 'item_text',
      textField: 'item_text',
      itemsShowLimit: 2,
    };

    this.userDropdownSettings2 = {
      singleSelection: true,
      idField: 'item_text',
      textField: 'item_text',
      itemsShowLimit: 2,
    };

    this.userDropdownSettings3 = {
      singleSelection: true,
      idField: 'item_text',
      textField: 'item_text',
      itemsShowLimit: 2,
    };




    }
  

}
