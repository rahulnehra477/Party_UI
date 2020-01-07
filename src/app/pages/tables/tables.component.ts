import { Component, OnInit, ViewChild } from "@angular/core";
import { DashboardService } from "../dashboard/dashboard.service";
import { MatTableDataSource, MatDialog } from "@angular/material";
import { AddPartyExpenseDialogComponent } from "./add-party-expense-dialog/add-party-expense-dialog.component";
import { AuthService } from "src/app/auth.service";
import {MatSort} from '@angular/material/sort';

@Component({
  selector: "app-tables",
  templateUrl: "tables.component.html",
  styleUrls: ["./tables.component.scss"]
})
export class TablesComponent implements OnInit {
  displayedColumns: string[] = [
    "party_title",
    "select_project",
    "party_place",
    "approved_by",
    "date_time"
  ];

  data = [];
  isAdmin = true;
  todaysdate: Date;


  dataSource: MatTableDataSource<any>;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private dashboardService: DashboardService,
    private authService: AuthService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.todaysdate = new Date();
    this.dashboardService.getUser().subscribe(parties => {
      console.log("parties:", parties);
      this.isAdmin = this.authService.isUserAdmin;
      this.dataSource = new MatTableDataSource(parties);
    });
  }

  onAdd(data: any) {    
    this.data = data;
    this.openDialog();
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddPartyExpenseDialogComponent, {
      height: "700px",
      width: "600px",
      data: {
        dataKey: this.data
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngAfterViewInit() {}

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
