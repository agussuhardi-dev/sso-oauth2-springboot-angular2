import { Component, OnInit } from '@angular/core';
import {SewaService} from "../penyewaan-service/sewa.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-form-sewa',
  templateUrl: './form-sewa.component.html',
  styleUrls: ['./form-sewa.component.css']
})
export class FormSewaComponent implements OnInit {

  data={};
  dataList: any = {};
  constructor(private sewaService: SewaService, private router:Router) { }

  ngOnInit() {
  }

  simpan():void{
    console.log(this.data);
    this.sewaService.simpan(this.data);
    this.router.navigate(['/sewa/list']);
  }

}
