import { Component, OnInit, ViewEncapsulation} from "@angular/core";
import { AuthService } from 'src/app/auth.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: "app-signin",
  templateUrl: "signin.component.html",
  styleUrls: ["./signin.component.css"],
  encapsulation: ViewEncapsulation.None
  
})
export class SigninComponent implements OnInit {
  loginForm = this.fb.group({
    empId: [null],
    password: [null]
  });

  constructor(private authService : AuthService, private fb: FormBuilder) {}

  ngOnInit() {
    console.log('hiiiiiiiiiiiiiiiiiiiiiiiiiii');
      
  }
  
  submitform() {
        console.log("within on submit method"+this.loginForm.value);
        this.authService.signIn(this.loginForm.value);
      
  }
  
}
  

