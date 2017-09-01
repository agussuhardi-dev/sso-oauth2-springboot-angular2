import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registrasi',
  templateUrl: './registrasi.component.html',
  styleUrls: ['./registrasi.component.css']
})
export class RegistrasiComponent implements OnInit {

  username: string;
  password: string;
  permission: string;
  fullname: string;



  constructor(private userSevice: UserService, private router: Router) { }

  ngOnInit() {
  }



  simpan() : void {
    this.userSevice.simpan(this.username, this.password, this.permission, this.fullname)
      .then(hasil => {
        console.log("Sukses : "+hasil);

        this.router.navigate(['/login']);
      });
  }


}
