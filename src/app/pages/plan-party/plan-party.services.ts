import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../model/User";
import { PartyDetails } from "../model/PartyDetails";

@Injectable()
export class PlanPartyServices{
  userUrl:string='http://localhost:8102/party/users';
  // projectUrl:string='http://localhost:8102/party/projectdetails/user/673912';
  // userUrl:string='http://localhost:3000/users';
  projectUrl:string='http://localhost:8102/party/projectdetails/user/673912';

  getProjectList(): any {
    return this.httpClient.get(this.projectUrl);
  }

  getUserList(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.userUrl);
  }

    _url:string="http://localhost:8102/party/partydetail"; //http://localhost:8081/addParty
    // _url:string="http://localhost:3000/parties";

  constructor(private httpClient: HttpClient) {}

  savePlanParty(object: PartyDetails) {
    console.log(object.partyDate);
    return this.httpClient.post(this._url, object);
  }
}
