import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {AuthService} from "../auth.service";
import {BarangService} from "../../penjualan/penjualan-service/barang.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

title="IMPLEMENTASI SSO (SINGLE SIGN ON) MENGGUNAKAN PROTOKOL OAUTH 2.0";
  dataBarang: any = {};

  constructor(private barangService: BarangService) { }



  ngOnInit() {

    this.barangService.getBarangPublic()
      .then(data => this.dataBarang = data)
      .catch(error => console.log(error));

    }



}
