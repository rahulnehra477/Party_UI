import { Router } from "@angular/router";
import { Injectable, EventEmitter } from "@angular/core";
import { User } from "./pages/model/User";
import { HttpClient } from "@angular/common/http";
import { CONSTANTS } from "./pages/constants/constants";
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthService {
  private static authenticated;
  authUser: string;
  isUserAdmin: boolean;
  redirectUrl: string;
  //loginUrl = "http://localhost:8102/party/login";
  loginUrl = CONSTANTS.BASE_URL + CONSTANTS.PORT + CONSTANTS.LOGIN;
  constructor(private router: Router, private httpClient: HttpClient, private toastr: ToastrService) {
    console.log("Initialising again Authservice");
  }

  signIn(user: User) {
    if (!(user.empId && user.password)) return;
    return this.httpClient.post(this.loginUrl, user).subscribe(
      (response: Response) => {
        console.log("Login Successfully");

        this.setAuthenticated(true);
        this.authUser = user.empId;
        console.log("authenticated----:" + this.isAuthenticated() + "UID=="+this.authUser);
        this.isUserAdmin = (<any>response).admin;
        if ((<any>response).admin) {
          this.router.navigate(["/dashboard"]);
        } else {
          this.router.navigate(["/tables"]);
        }
      },

      error => {
        this.toastr.error('Incorrect Id Password Combination');
        console.log("Login failed");
        this.setAuthenticated(false);
      }
    );
  }
  isAuthenticated() {
    return AuthService.authenticated;
  }

  setAuthenticated(authenticated) {
    AuthService.authenticated = authenticated;
  }
}
