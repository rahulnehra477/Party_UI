import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';
import { User } from './pages/model/User';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService{
     private authenticated=false;
    authUser :string;
    loginUrl = "http://localhost:8102/party/login";
    constructor(private router:Router, private httpClient:HttpClient){

    }

    signIn(user : User){
        return this.httpClient.post(this.loginUrl,user).subscribe(
            (response => {
                console.log('Login Successfully');
                this.authenticated=true;
                this.authUser = user.empId;
                this.router.navigate(['/dashboard']);
            }
                
            ),
            (error) => {
                console.log('Login failed');
                this.authenticated=false;
            }
        );
        if(user.empId==='tushar' && user.password==='tushar'){
            console.log('Login Successfully');
            this.authenticated=true;
            this.authUser = user.empId;
            this.router.navigate(['/dashboard']);
        }else{
            console.log('Login failed');
            this.authenticated=false;
        }

    }
    isAuthenticated(){
        return this.authenticated;
    }
    setAuthenticated(auth:boolean){
        this.authenticated=auth;

    }
}