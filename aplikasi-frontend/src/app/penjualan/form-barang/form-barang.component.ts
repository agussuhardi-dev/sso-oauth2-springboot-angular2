import { Component, OnInit } from '@angular/core';
import {BarangService} from "../penjualan-service/barang.service";
import {ListBarangComponent} from "../list-barang/list-barang.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-form-barang',
  templateUrl: './form-barang.component.html',
  styleUrls: ['./form-barang.component.css']
})
export class FormBarangComponent implements OnInit {

  data={};

  dataList: any = {};
  constructor(private barangService: BarangService, private router:Router) { }

  ngOnInit() {
  }





  simpan():void{
    console.log(this.data);
    this.barangService.simpan(this.data);
    this.router.navigate(['/barang/list']);
  }



}
