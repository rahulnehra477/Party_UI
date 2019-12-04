import { Router } from "@angular/router";
import { Injectable, EventEmitter } from "@angular/core";
import { User } from "./pages/model/User";
import { HttpClient } from "@angular/common/http";
import { CONSTANTS } from "./pages/constants/constants";

@Injectable()
export class AuthService {
  private static authenticated;
  authUser: string;
  isUserAdmin: boolean;
  redirectUrl: string;
  //loginUrl = "http://localhost:8102/party/login";
  loginUrl = CONSTANTS.BASE_URL + CONSTANTS.PORT + CONSTANTS.LOGIN;
  constructor(private router: Router, private httpClient: HttpClient) {
    console.log("Initialising again Authservice");
  }

  signIn(user: User) {
    if (!(user.empId && user.password)) return;
    return this.httpClient.post(this.loginUrl, user).subscribe(
      (response: Response) => {
        console.log("Login Successfully");

        this.setAuthenticated(true);
        this.authUser = user.empId;
        console.log("authenticated----:" + this.isAuthenticated());
        if ((<any>response).admin) {
          this.isUserAdmin = (<any>response).admin;
          this.router.navigate(["/dashboard"]);
        } else {
          this.router.navigate(["/tables"]);
        }
      },

      error => {
        console.log("Login failed");
        this.setAuthenticated(false);
      }
    );
  }
  isAuthenticated() {
    console.log("authenticated:" + AuthService.authenticated);
    return AuthService.authenticated;
  }

  setAuthenticated(authenticated) {
    AuthService.authenticated = authenticated;
  }
}
