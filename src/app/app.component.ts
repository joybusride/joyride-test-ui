import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'joyride-test-ui';

  Contact:any[] = [
    { firstName: 'Jane', lastName: 'Doe', phoneNumber: 7808009097 },
    { firstName: 'John', lastName: 'Doe', phoneNumber:  7808009097},
    { firstName: 'Sam', lastName: 'Curran', phoneNumber: 7808009097 },
    { firstName: 'Kane', lastName: 'Williamnson', phoneNumber:7808009097  },
    { firstName: 'Chris', lastName: 'Morris', phoneNumber:7808009097 },

  ];

  isClicked=false;

}
