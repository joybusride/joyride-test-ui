import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebnav-dashboard',
  templateUrl: './sidebnav-dashboard.component.html',
  styleUrls: ['./sidebnav-dashboard.component.css']
})
export class SidebnavDashboardComponent implements OnInit {


  opened = true;
  LStatus: boolean
  statusLogin;
  // toggleSlidebar(){
  //   this.opened=!this.opened;
  // }
  constructor() {

    this.statusLogin = sessionStorage.getItem('loginStatus');
    console.log(this.statusLogin);
    this.LStatus = Boolean(JSON.parse(this.statusLogin));
    console.log(this.LStatus);
   }

  ngOnInit(): void {
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "150px";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

}
