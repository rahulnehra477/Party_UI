import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from '../model/User';
import { Observable } from 'rxjs';
import { CONSTANTS } from "../constants/constants";
import { AuthService } from 'src/app/auth.service';

@Injectable()
export class UserServices{
    
    userObjUrl: string = CONSTANTS.BASE_URL + CONSTANTS.PORT + CONSTANTS.GET_USER + this.authService.authUser;
    
    getUserObj(): Observable<User>{
        return this.httpClient.get<User>(this.userObjUrl);
      }

      constructor(private httpClient: HttpClient, private authService: AuthService){}
}