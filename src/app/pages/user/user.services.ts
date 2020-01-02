import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from '../model/User';
import { Observable } from 'rxjs';
import { CONSTANTS } from "../constants/constants";
import { AuthService } from 'src/app/auth.service';

@Injectable()
export class UserServices{
    
    userObjUrl: string = CONSTANTS.BASE_URL + CONSTANTS.PORT + CONSTANTS.GET_USER + this.authService.authUser;
     saveUserUrl:string = CONSTANTS.BASE_URL + CONSTANTS.PORT + CONSTANTS.UPDATE_USER;
    // saveUserUrl : string = "http://10.224.21.236:8102/party/user/updateUser";
    getUserObj(): Observable<User>{
        return this.httpClient.get<User>(this.userObjUrl);
      }

      saveUser(object: User) {
        console.log('firstName:'+object);
        return this.httpClient.post(this.saveUserUrl, object);
      }

      constructor(private httpClient: HttpClient, private authService: AuthService){}
}