import { Router } from "@angular/router";
import { Injectable, EventEmitter } from "@angular/core";
import { User } from "./pages/model/User";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class AuthService {
  private static authenticated;
  authUser: string;
  isUserAdmin: boolean;
  loginUrl = "http://localhost:3000/users";
  constructor(private router: Router, private httpClient: HttpClient) {
    console.log("Initialising again Authservice");
  }

  signIn(user: User) {
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
