import { Injectable } from "@angular/core";
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from "@angular/router";
import { Observable, of, EMPTY } from "rxjs";
import { mergeMap, take } from "rxjs/operators";
import { DashboardService } from "./dashboard.service";

// import { CrisisService }  from './crisis.service';
// import { Crisis } from './crisis';

@Injectable()
export class DashboardDataResolverService implements Resolve<any> {
  constructor(
    private dashboardService: DashboardService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Observable<never> {
    return this.dashboardService.getPartyCountAndExpenses().pipe(
      take(1),
      mergeMap(data => {
        if (data) {
          return of(data);
        } else {
          return EMPTY;
        }
      })
    );
  }
}
