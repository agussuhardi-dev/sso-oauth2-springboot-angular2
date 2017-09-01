import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./shared/login/login.component";
import {RegistrasiComponent} from "./shared/registrasi/registrasi.component";
import {AuthService} from "./shared/auth.service";
import {PenjualanModule} from "./penjualan/penjualan.module";
import {AuthGuardService} from "./shared/auth-guard.service";
import {WelcomeComponent} from "./shared/welcome/welcome.component";
import {BarangService} from "./penjualan/penjualan-service/barang.service";
import {ProfileComponent} from "./shared/profile/profile.component";
import {PenyewaanModule} from "./penyewaan/penyewaan.module";
import {SewaService} from "./penyewaan/penyewaan-service/sewa.service";



const routingApplikasi:Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'registrasi', component:RegistrasiComponent},
  {path: 'profile', component:ProfileComponent, pathMatch: 'full'},
  {path: 'penjualan', redirectTo:'penjualan', pathMatch: 'full'},
  {path: 'penyewaan', redirectTo: 'penyewaan', pathMatch: 'full'},
  {path: '**', component: WelcomeComponent}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routingApplikasi),
    SharedModule,
    PenjualanModule,
    PenyewaanModule
  ],
  providers: [AuthService, AuthGuardService, BarangService, SewaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
