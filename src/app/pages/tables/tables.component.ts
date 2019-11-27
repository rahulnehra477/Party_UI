import { Component, OnInit, ViewChild } from "@angular/core";
import { DashboardService } from "../dashboard/dashboard.service";
import { MatTableDataSource, MatDialog } from "@angular/material";
import { AddPartyExpenseDialogComponent } from "./add-party-expense-dialog/add-party-expense-dialog.component";

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

  isAdmin = true;
  todaysdate:Date;

  dataSource: MatTableDataSource<any>;

  constructor(
    private dashboardService: DashboardService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.todaysdate=new Date();
    this.dashboardService.getUser().subscribe(parties => {
      console.log("parties:", parties);
      this.dataSource = new MatTableDataSource(parties);
    });
  }

  onAdd(data: any) {
    this.openDialog();
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddPartyExpenseDialogComponent, {
      height: "400px",
      width: "600px"
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
