import { Time } from '@angular/common';

export class Bus{
    busId:number;	
	busName:string;
	noOfSeats:number;
	seatsLeft:number;
	dateOfJourney:Date;
	source:string;
	destination:string;	
	departTime:Time;
    arrivalTime:Time;
	fare:number;
	distance:number;

}