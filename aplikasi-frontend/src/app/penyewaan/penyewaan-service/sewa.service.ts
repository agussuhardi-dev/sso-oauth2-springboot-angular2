import { Injectable } from '@angular/core';
import {AuthHttp} from "angular2-jwt";

@Injectable()
export class SewaService {

  constructor(private authHttp: AuthHttp) { }



  getSewa():Promise<any>{
    return this.authHttp.get("penyewaan/api/sewa/").toPromise()
      .then(hasil=>{
        return hasil.json();
      }).catch(error=>{
        console.log(error);
        return error;
      });
  }

  simpan(user) : Promise<boolean> {
    let url = "penyewaan/api/sewa/save";
    if(user.id != null){
      return this.authHttp.post(url, user).toPromise()
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
    let url = "penyewaan/api/sewa/delete";
    return this.authHttp.post(url, user).toPromise()
      .then(sukses=>{return true;})
      .catch(error=>{return false;});
  }
}
