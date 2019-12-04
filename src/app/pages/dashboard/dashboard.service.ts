import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PartyDetails } from "../model/PartyDetails";
import { tap, map } from "rxjs/operators";
import { Observable } from "rxjs";
import { CONSTANTS } from "../constants/constants";
import { AuthService } from "src/app/auth.service";

@Injectable()
export class DashboardService {
  //url: string = "http://localhost:8102/party/partydetail?empId=673912&eventType=1"; //http://localhost:8081/parties
  url: string = CONSTANTS.BASE_URL + CONSTANTS.PORT + CONSTANTS.PARTY_DETAILS;
  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}

  public getUser(): Observable<PartyDetails[]> {
    console.log("inside getuser service");
    var params = {
      empId: this.authService.authUser,
      eventType: CONSTANTS.EVENT_TYPE
    };
    return this.httpClient
      .get<PartyDetails[]>(this.url, { params: params })
      .pipe(
        tap(() => console.log("fetching..")),
        map(data =>
          data.map(partydetails => ({
            ...partydetails,
            date_time: new Date(partydetails.date_time)
          }))
        )
      );
  }
}
