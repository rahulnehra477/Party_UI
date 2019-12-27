import { Component, OnInit } from "@angular/core";
import { AuthService } from 'src/app/auth.service';

import { User } from '../model/User';
import { UserServices } from './user.services';


@Component({
  selector: "app-user",
  templateUrl: "user.component.html"
})
export class UserComponent implements OnInit {
  constructor(private userService: UserServices) {}

  userObj : User;
  

  ngOnInit() {
    console.log('Initializing');
    this.userService.getUserObj().subscribe(
      (response : User)  => {
      console.log('password:'+response.password);
      this.userObj = response;
    });
  }


}
