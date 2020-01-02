import { Component, OnInit, Inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators, ControlContainer } from "@angular/forms";
import { CONSTANTS } from '../../constants/constants';
import { HttpClient } from '@angular/common/http';
import { User } from '../../model/User';
import { UserService } from 'src/app/user.service';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: "app-add-party-expense-dialog",
  templateUrl: "./add-party-expense-dialog.component.html",
  styleUrls: ["./add-party-expense-dialog.component.scss"]
})
export class AddPartyExpenseDialogComponent implements OnInit {
  expenseForm: FormGroup;
  submitted = false;
  userList : any[];
  selectedUserList : any=[];
  userDropdownSettings = {};  
  saveExpenseUrl = CONSTANTS.BASE_URL + CONSTANTS.PORT + CONSTANTS.SAVE_EXPENSE

  constructor(private fb: FormBuilder, 
    private httpClient: HttpClient, 
    private userService: UserService, 
    @Inject(MAT_DIALOG_DATA) public data: any,
    private toastr: ToastrService) {}
  
  ngOnInit() {  
    this.expenseForm = this.fb.group({
      attendee: ["", Validators.required],
      expense:["", Validators.required]
    });

    this.userService.getUserList().subscribe(
      (response : User[])  => {
      console.log(response);
      this.userList = response;
    });

    for (let i of this.data.dataKey.empId) {
      console.log('value of i:'+i);
      this.selectedUserList.push({empId: String(i)});
      }

   console.log('selected user list:'+this.selectedUserList);

    this.userDropdownSettings = {
      singleSelection: false,
      idField: 'empId',
      textField: 'username',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

    
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  onSubmit() {
    this.submitted = true;
    console.log("FORMddddd: ", this.expenseForm);
    
    if (this.expenseForm.invalid) {
      console.log("FORM is Invalid: ");
      return;
    }
    this.data.dataKey.empId = this.userService.extractEmpId(this.expenseForm.value.attendee);
    this.data.dataKey.expense = this.expenseForm.value.expense;
    return this.httpClient.post(this.saveExpenseUrl, this.data.dataKey).subscribe(
      (response: Response) => {
        console.log("Updated Expense");
        this.toastr.success('Updated Successfully');        
      },
      error => {
        console.log("Saving Expense Issue");
        this.toastr.error('Something Wrong');        
      }
    );

    console.log("FORM DATA: ", this.expenseForm.value);


  }

  
}
