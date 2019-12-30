import { Component, OnInit } from '@angular/core';
import { UserServices } from './user.services';
import { User } from '../model/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
    
 serverID: number = 10; 
  constructor(private userService: UserServices) {}

  userObj : User;
  

  ngOnInit() {
    console.log('Initializing');
    this.userService.getUserObj().subscribe(
      (response : User)  => {
        console.log(response);
      console.log('password:'+response.password);
      this.userObj = response;
    });
  }
  

}
