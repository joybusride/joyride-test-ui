import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-home-page',
  templateUrl: './login-home-page.component.html',
  styleUrls: ['./login-home-page.component.css']
})
export class LoginHomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  title = 'joyride-test-ui';

  Contact:any[] = [
    { firstName: 'Jane', lastName: 'Doe', phoneNumber: 7808009097 },
    { firstName: 'John', lastName: 'Doe', phoneNumber:  7808009097},
    { firstName: 'Sam', lastName: 'Curran', phoneNumber: 7808009097 },
    { firstName: 'Kane', lastName: 'Williamnson', phoneNumber:7808009097  },
    { firstName: 'Chris', lastName: 'Morris', phoneNumber:7808009097 },

  ];

  isClicked=false;

  public activated: {
		about: boolean;
		terms: boolean;
		contact: boolean;
  };

  openNav() {
    document.getElementById("mySidenav").style.width = "150px";
  }


}
