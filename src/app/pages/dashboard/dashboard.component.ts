import { Component, OnInit, ViewEncapsulation} from "@angular/core";
import { User } from '../model/User';
import { PartyDetails } from '../model/PartyDetails';
import { DashboardService } from './dashboard.service';
import { PlanPartyServices } from '../plan-party/plan-party.services';


@Component({
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
  encapsulation: ViewEncapsulation.None
  
})
export class DashboardComponent {
  userList : User[];
  userDropdownSettings = {};
  displayedColumns: string[] = ['party_title', 'select_project', 'party_place', 'approved_by', 'date_time'];
  dataSource: PartyDetails[];
  constructor(private dashboardService:DashboardService, private planPartyService : PlanPartyServices) { 
    console.log('consructor called');
  }

  ngOnInit() {
    console.log('ngOnInit called');
    this.dashboardService.getUser()
    .subscribe(parties => 
      {
        console.log("parties:"+parties)
        this.dataSource=parties
      });
      this.planPartyService.getUserList().subscribe(
        (response : User[])  => {
        console.log(response);
        this.userList = response;
      });
      
  }
  }