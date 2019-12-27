import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from '../model/User';
import { Observable } from 'rxjs';

@Injectable()
export class UserServices{
    userObjUrl = 'http://localhost:8102/party/user/673912';
    
    getUserObj(): Observable<User>{
        return this.httpClient.get<User>(this.userObjUrl);
      }

      constructor(private httpClient: HttpClient){}
}