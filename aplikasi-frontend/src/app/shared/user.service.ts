import { Injectable } from '@angular/core';
import {AuthHttp} from "angular2-jwt";
import {Http} from "@angular/http";

@Injectable()
export class UserService {


  constructor(private authHttp: AuthHttp, private http:Http) { }

  getUserData(username) : Promise<any> {
    let url = "/oauth/api/public/?username="+username;
    return this.authHttp.get(url).toPromise()
      .then(hasil => {
        return hasil.json();
      })
      .catch(error => {
        console.log("kesalahan "+error);
        return error;
      });
  }




    simpan(username, password, permission, fullname) : Promise<boolean> {
      let url="/oauth/api/public/user/?username="+username+"&password="+password+"&permission="+permission+"&fullname="+fullname;
            ///oauth/api/public/user
        return this.http.get(url).toPromise()
          .then(hasil => {
            return true;
          })
          .catch(error => {
            console.log(error);
            return false;
          });

      }


}

