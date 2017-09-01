import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {UserService} from "../user.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userData:any = {};

  constructor(private userService : UserService, private auth:AuthService) { }

  ngOnInit() {
    this.userService.getUserData(this.auth.getUserInfo().username)
      .then(data=> this.userData=data)
      .catch(error=>console.log(error));


  }

}
