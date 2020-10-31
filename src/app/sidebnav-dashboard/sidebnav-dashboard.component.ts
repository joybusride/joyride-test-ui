import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebnav-dashboard',
  templateUrl: './sidebnav-dashboard.component.html',
  styleUrls: ['./sidebnav-dashboard.component.css']
})
export class SidebnavDashboardComponent implements OnInit {

   
  opened=true;

  // toggleSlidebar(){
  //   this.opened=!this.opened;
  // }
  constructor() { }

  ngOnInit(): void {
  }

   openNav() {
    document.getElementById("mySidenav").style.width = "150px";
  }
  
   closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

}
