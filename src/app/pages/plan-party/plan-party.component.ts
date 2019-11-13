import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PlanPartyServices } from './plan-party.services';
import { User } from '../model/User';
// import { Response } from '@angular/http';
// import * as XLSX from 'xlsx';
import { AuthService } from 'src/app/auth.service';
// import * as XLSX from 'ts-xlsx';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-plan-party',
  templateUrl: './plan-party.component.html',
  styleUrls: ["./plan-party.component.css"]
  
})
export class PlanPartyComponent implements OnInit {
  partyTitle='';
  partyPlace='';
  attendance='';
  time='';
  
  constructor(private planPartyService:PlanPartyServices, private authService:AuthService, private toastr: ToastrService){
    console.log("inside party constructor"+this.authService.authUser);
  }
  
  projectList = [];
  userList : User[];
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  userDropdownSettings = {};
  approverIdSettings = {};
  ngOnInit() {
    console.log('Initializing');
    this.planPartyService.getProjectList().subscribe(
      project => {
      console.log(project);
      this.projectList = project;
      }
    );

    this.planPartyService.getUserList().subscribe(
        (response : User[])  => {
        console.log(response);
        this.userList = response;
      });

    this.userDropdownSettings = {
      singleSelection: false,
      idField: 'empId',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

    this.approverIdSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'empName',
      allowSearchFilter: true
    };
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  
  save(form:NgForm){
    console.log('Saving party info')
    let tempVar = form.value.empId;
    form.value.empId = [];
    tempVar.forEach(function (value) {
      form.value.empId.push(value.empId);
      
  });
  form.value.userId = this.authService.authUser;
    this.planPartyService.savePlanParty(form.value)
    .subscribe(
      (response => {
        console.log(response);
        this.toastr.success('Saved Successfully');
        form.reset();
        }),
      (error) => {
        console.log(error);
        this.toastr.error('Something Wrong');
      }
    );
    
  }

  


  OnEmployeeSelected(item : any){
    console.log(item);
  }


  

}
