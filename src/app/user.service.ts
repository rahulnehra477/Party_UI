import { Router } from "@angular/router";
import { Injectable, EventEmitter } from "@angular/core";
import { User } from "./pages/model/User";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class UserService {
  
  SaveUrl = "http://localhost:3000/party/user";
  userUrl:string='http://localhost:8102/party/user';
  constructor( private httpClient: HttpClient) {
  }
  SaveUsers(data) {
    return this.httpClient.post<any>(this.SaveUrl, data);
}

getUserList(): Observable<User[]> {
  return this.httpClient.get<User[]>(this.userUrl);
}

extractEmpId(formPartValue){
  var tempVar = formPartValue;    
  formPartValue = [];
  tempVar.forEach(function (value) {
      formPartValue.push(value.empId);
    
});
return formPartValue;
}

  
}
