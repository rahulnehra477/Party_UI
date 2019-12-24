import { Component, OnInit } from "@angular/core";
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: "app-user",
  templateUrl: "user.component.html"
})
export class UserComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {}
}
