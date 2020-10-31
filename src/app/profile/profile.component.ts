import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  doEdit=true
  constructor() { }

  ngOnInit(): void {
  }

  isEdited(){
    this.doEdit=false
  }

}
