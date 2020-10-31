import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bus-coach-list',
  templateUrl: './bus-coach-list.component.html',
  styleUrls: ['./bus-coach-list.component.css']
})
export class BusCoachListComponent implements OnInit {

  buslist:any[]=[
                  {name:"VRL Logistics",seats:50,costs:10000,type:"AC"},
                  {name:"NEETA Travels",seats:25,costs:30000,type:"Non-AC"},
                  {name:"Volvo Logistics",seats:35,costs:40000,type:"Non-AC"},
                  {name:"LTR Logistics",seats:50,costs:50000,type:"AC"},
                  {name:"NEETA Travels",seats:25,costs:30000,type:"Non-AC"},
                  {name:"Volvo Logistics",seats:35,costs:40000,type:"Non-AC"},
                  {name:"LTR Logistics",seats:50,costs:50000,type:"AC"},

                ]

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  coachInfo(){
    console.log("Hello World!!")
    this.router.navigate(['/coach-info'])

  }

}
