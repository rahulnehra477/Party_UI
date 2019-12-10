import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PartyDetails } from "../model/PartyDetails";
import { tap, map } from "rxjs/operators";
import { Observable, forkJoin } from "rxjs";
import { CONSTANTS } from "../constants/constants";
import { AuthService } from "src/app/auth.service";

@Injectable()
export class DashboardService {
  //url: string = "http://localhost:8102/party/partydetail?empId=673912&eventType=1"; //http://localhost:8081/parties
  url: string = CONSTANTS.BASE_URL + CONSTANTS.PORT + CONSTANTS.PARTY_DETAILS;
  partyCountUrl: string =
    CONSTANTS.BASE_URL + CONSTANTS.PORT + CONSTANTS.PARTY_COUNT;
  expenseCountUrl: string =
    CONSTANTS.BASE_URL + CONSTANTS.PORT + CONSTANTS.EXPENSE_COUNT;
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
            partyDate: new Date(partydetails.partyDate)
          }))
        )
      );
  }

  getPartyCountAndExpenses(): Observable<any[]> {
    let getPartyCountUrl =
      this.partyCountUrl +
      "/" +
      this.authService.authUser +
      "/" +
      CONSTANTS.ALL;

    const partyApiResp = this.httpClient.get<any[]>(getPartyCountUrl);

    let getExpenseCountUrl =
      this.expenseCountUrl +
      "/" +
      this.authService.authUser +
      "/" +
      CONSTANTS.ALL;

    const expenseApiResp = this.httpClient.get<any[]>(getExpenseCountUrl);
    return forkJoin([partyApiResp, expenseApiResp]);
  }

  getMonths() {
    var today = new Date();

    var aMonth = today.getMonth();
    var months = [];
    var i: number;
    var month = new Array(
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    );
    for (i = 0; i < 12; i++) {
      months.push(month[aMonth]);
      aMonth--;
      if (aMonth < 0) {
        aMonth = 11;
      }
    }

    return months;
  }
}
