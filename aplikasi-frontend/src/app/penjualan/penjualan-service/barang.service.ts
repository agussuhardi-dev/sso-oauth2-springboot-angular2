import { Injectable } from '@angular/core';
import {AuthHttp} from "angular2-jwt";
import {Http} from "@angular/http";

@Injectable()
export class BarangService {

  constructor(private authHttp: AuthHttp, private http: Http) { }



  getBarangPublic():Promise<any>{
    return this.http.get("penjualan/api/barang/").toPromise()
      .then(hasil=>{
        // console.log(hasil);
        return hasil.json();
      }).catch(error=>{
        console.log(error);
        return error;
      });
  }



  getBarang():Promise<any>{
    return this.authHttp.get("penjualan/api/barang/").toPromise()
      .then(hasil=>{
        // console.log(hasil);
        return hasil.json();
      }).catch(error=>{
        console.log(error);
        return error;
      });
  }

  simpan(user) : Promise<boolean> {
    let url = "penjualan/api/barang/save";
    if(user.id != null){
      return this.authHttp.put(url, user).toPromise()
        .then(hasil => {
          return true;
        })
        .catch(error => {
          console.log(error);
          return false;
        });
    } else {
      return this.authHttp.post(url, user).toPromise()
        .then(hasil => {
          return true;
        })
        .catch(error => {
          console.log(error);
          return false;
        });
    }
  }

  delete(user):Promise<boolean>{
    let url = "penjualan/api/barang/delete";
    return this.authHttp.post(url, user).toPromise()
      .then(sukses=>{return true;})
      .catch(error=>{return false;});
  }
}
