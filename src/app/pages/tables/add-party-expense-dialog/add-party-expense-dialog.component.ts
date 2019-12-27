import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-add-party-expense-dialog",
  templateUrl: "./add-party-expense-dialog.component.html",
  styleUrls: ["./add-party-expense-dialog.component.scss"]
})
export class AddPartyExpenseDialogComponent implements OnInit {
  expenseForm: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder) {}
  
  ngOnInit() {
    this.expenseForm = this.fb.group({
      expense: ["", Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    console.log("FORMddddd: ", this.expenseForm);
    if (this.expenseForm.invalid) {
      console.log("FORM is Invalid: ");
      return;
    }

    console.log("FORM DATA: ", this.expenseForm.value);


  }
}
