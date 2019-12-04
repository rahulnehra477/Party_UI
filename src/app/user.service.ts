import { Router } from "@angular/router";
import { Injectable, EventEmitter } from "@angular/core";
import { User } from "./pages/model/User";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class UserService {
  
  SaveUrl = "http://localhost:3000/party/user";
  constructor( private httpClient: HttpClient) {
  }
  SaveUsers(data) {
    return this.httpClient.post<any>(this.SaveUrl, data);
}

  
}
