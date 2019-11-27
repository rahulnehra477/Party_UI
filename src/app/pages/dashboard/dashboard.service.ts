import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PartyDetails } from "../model/PartyDetails";
import { tap } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable()
export class DashboardService {
  url: string = "http://localhost:8102/party/partydetail?empId=673912&eventType=1"; //http://localhost:8081/parties
  constructor(private httpClient: HttpClient) {}

  public getUser(): Observable<PartyDetails[]> {
    console.log("inside getuser service");
    return this.httpClient
      .get<PartyDetails[]>(this.url)
      .pipe(tap(() => console.log("fetching..")));
  }
}
