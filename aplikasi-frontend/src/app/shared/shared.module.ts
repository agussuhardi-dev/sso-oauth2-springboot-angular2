import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegistrasiComponent } from './registrasi/registrasi.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {AuthService} from "./auth.service";
import { WelcomeComponent } from './welcome/welcome.component';

import { HttpModule, Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import {UserService} from "./user.service";
import {BarangService} from "../penjualan/penjualan-service/barang.service";
import {FormBarangComponent} from "../penjualan/form-barang/form-barang.component";
import { ProfileComponent } from './profile/profile.component';
import {FormSewaComponent} from "../penyewaan/form-sewa/form-sewa.component";
import {SewaService} from "../penyewaan/penyewaan-service/sewa.service";


export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'access_token'
  }), http, options);
}


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpModule
  ],

  providers:[AuthService, UserService, BarangService, FormBarangComponent, WelcomeComponent, FormSewaComponent, SewaService,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ],
  declarations: [NavbarComponent, LoginComponent, RegistrasiComponent, FooterComponent, WelcomeComponent, ProfileComponent],
  exports: [NavbarComponent, FooterComponent]
})
export class SharedModule { }
