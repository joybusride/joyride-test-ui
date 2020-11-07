import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  rating:number;
  constructor() { }

  ngOnInit(): void {
  }
  checkRating(rate){
    this.rating=rate;
    console.log("Rating "+this.rating);
    document.getElementById('rate').innerText="You rated us "+rate;
    //  var rb= document.getElementsByName('rating')
    // rb[0].style.backgroundColor = 'red';
  }
}
