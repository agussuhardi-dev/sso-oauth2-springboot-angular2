import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {AuthGuardService} from "../shared/auth-guard.service";
import { FormBarangComponent } from './form-barang/form-barang.component';
import { ListBarangComponent } from './list-barang/list-barang.component';
import { ModalModule } from 'ngx-bootstrap/modal';

const routingPenjualan: Routes = [
  {path: 'barang/form', component:FormBarangComponent, canActivate:[AuthGuardService]},
  {path: 'barang/list', component:ListBarangComponent, canActivate:[AuthGuardService]}
];


@NgModule({
  imports: [
    ModalModule.forRoot(),
    CommonModule,
    FormsModule,
    RouterModule.forChild(routingPenjualan)
  ],
  declarations: [FormBarangComponent, ListBarangComponent]
})
export class PenjualanModule { }
