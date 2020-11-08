import { Bus } from './bus'
import { Passenger } from './passenger'

export class BusBookingDetail{
    bus:Bus
    passengerList:Passenger[]
    amount:number
    email:string
    paymentType:PaymentType
    
}

export enum PaymentType{ 
    wallet, card
}