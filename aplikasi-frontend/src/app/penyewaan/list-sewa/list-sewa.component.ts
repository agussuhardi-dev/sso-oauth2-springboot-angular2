import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalDirective} from "ngx-bootstrap";
import {SewaService} from "../penyewaan-service/sewa.service";
import {UserService} from "../../shared/user.service";
import {AuthService} from "../../shared/auth.service";

@Component({
  selector: 'app-list-sewa',
  templateUrl: './list-sewa.component.html',
  styleUrls: ['./list-sewa.component.css']
})
export class ListSewaComponent implements OnInit {

  @ViewChild('childModal') public childModal:ModalDirective;

  dataSewa: any = {};
  data = {};

  userData:any = {};

  constructor(private barangService: SewaService, private userService : UserService, private auth:AuthService) {
    this.refresBarang();
  }

  ngOnInit() {
    this.refresBarang();

    this.userService.getUserData(this.auth.getUserInfo().username)
      .then(data=> this.userData=data)
      .catch(error=>console.log(error));
  }

  refresBarang(): void {
    this.barangService.getSewa()
      .then(data => this.dataSewa = data)
      .catch(error => console.log(error));
  }

  delete(kode): void {
    this.barangService.delete(kode);
    this.barangService.getSewa()
      .then(data => {
        this.dataSewa = data;
        this.refresBarang();
      })
      .catch(error => console.log(error));

  }

  simpan(){
    this.barangService.simpan(this.data);
    this.refresBarang();
    this.childModal.hide();
  }


  public showChildModal(s) {
    this.data=s;
    this.childModal.show();
  }

}
