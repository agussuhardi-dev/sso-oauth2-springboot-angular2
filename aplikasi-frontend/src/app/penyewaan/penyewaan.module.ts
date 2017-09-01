import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthGuardService} from "../shared/auth-guard.service";
import {RouterModule, Routes} from "@angular/router";
import { FormSewaComponent } from './form-sewa/form-sewa.component';
import { ListSewaComponent } from './list-sewa/list-sewa.component';
import {FormsModule} from "@angular/forms";
import {ModalModule} from "ngx-bootstrap";

const routingPenjualan: Routes = [
  {path: 'sewa/form', component:FormSewaComponent, canActivate:[AuthGuardService]},
  {path: 'sewa/list', component:ListSewaComponent, canActivate:[AuthGuardService]}
];


@NgModule({
  imports: [
    ModalModule.forRoot(),
    CommonModule,
    FormsModule,
    RouterModule.forChild(routingPenjualan)
  ],
  declarations: [FormSewaComponent, ListSewaComponent]
})
export class PenyewaanModule { }
