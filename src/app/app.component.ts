import { Component } from '@angular/core';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import { parse } from 'url';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'joyride-test-ui';



  isClicked = false;
  status;
  LStatus: boolean
  statusLogin;


  public activated: {
    about: boolean;
    terms: boolean;
    contact: boolean;
  };

  constructor(private route: ActivatedRoute) {

    this.statusLogin = sessionStorage.getItem('loginStatus');
    console.log(this.statusLogin);
    this.LStatus = Boolean(JSON.parse(this.statusLogin));
    console.log(this.LStatus);

  }



  ngOnInit() {
    let status = parseInt(this.route.snapshot.paramMap.get('status'))
    this.status = status;
    

  }

  openNav() {
    document.getElementById("mySidenav").style.width = "150px";
  }

}
