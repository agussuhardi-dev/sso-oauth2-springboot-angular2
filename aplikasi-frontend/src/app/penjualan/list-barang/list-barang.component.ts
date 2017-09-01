import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {BarangService} from "../penjualan-service/barang.service";
import {FormBarangComponent} from "../form-barang/form-barang.component";

import {Router} from "@angular/router";
import {ModalDirective} from "ngx-bootstrap";
import {UserService} from "../../shared/user.service";
import {WelcomeComponent} from "../../shared/welcome/welcome.component";
import {AuthService} from "../../shared/auth.service";

@Component({
  selector: 'app-list-barang',
  templateUrl: './list-barang.component.html',
  styleUrls: ['./list-barang.component.css']
})
export class ListBarangComponent implements OnInit {

  @ViewChild('childModal') public childModal:ModalDirective;

  dataBarang: any = {};
  data = {};

  userData:any = {};

  constructor(private barangService: BarangService, private userService : UserService, private auth:AuthService) {
    this.refresBarang();
  }

  ngOnInit() {
    this.refresBarang();

    this.userService.getUserData(this.auth.getUserInfo().username)
      .then(data=> this.userData=data)
      .catch(error=>console.log(error));


  }

  refresBarang(): void {
    this.barangService.getBarang()
      .then(data => this.dataBarang = data)
      .catch(error => console.log(error));
  }

  delete(kode): void {
    this.barangService.delete(kode);
    this.barangService.getBarang()
      .then(data => {
        this.dataBarang = data;
        this.refresBarang();
      })
      .catch(error => console.log(error));

  }

  simpan(){
    this.barangService.simpan(this.data);
    this.refresBarang();
    this.childModal.hide();
    console.log("load");
  }


  public showChildModal(b) {
    this.data=b;
    this.childModal.show();
  }



}
