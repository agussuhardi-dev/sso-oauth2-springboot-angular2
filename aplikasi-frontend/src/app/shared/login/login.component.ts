import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;


  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(){
    console.log("Username : "+ this.username);
    console.log("Password : "+ this.password);


    this.auth.login(this.username, this.password)
      .then(sukses => {
        if(sukses) {
          console.log("Login berhasil");
          this.router.navigate(['/profile']);
        } else {
          console.log("Login gagal");
        }})
      .catch(error => {
        console.log(error);
      });
  }



}
