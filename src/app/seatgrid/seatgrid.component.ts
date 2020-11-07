import { Component, Output } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Passenger } from '../passenger';
import * as $ from "jquery";

import { exit, hasUncaughtExceptionCaptureCallback } from 'process';
@Component({
    selector: 'app-seatgrid',
    templateUrl: './seatgrid.component.html',
    styleUrls: ['./seatgrid.component.css']
})
export class SeatgridComponent {

    // @Output() seatsList:EventEmitter<string[]> = new EventEmitter<string[]>();

    state;
    navigationExtras: NavigationExtras
    //variable declarations
    showPassengers = false;
    lengthOfSelectedSeats: number = 0;
    selectedSeats: string[] = [];

    rows: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    colsleft: number[] = [1, 2];
    colsright: number[] = [3, 4, 5];

    reserved: string[] = ['A2', 'A3', 'F5', 'F1', 'F2', 'H1', 'H2', 'H3', 'H4'];
    selected: string[] = [];

    ticketPrice: number = 120;
    convFee: number = 30;
    totalPrice: number = 0;
    currency: string = "Rs";

    constructor(private router: Router) {

        let navigation = this.router.getCurrentNavigation();
        this.state = navigation.extras.state as Passenger
        console.log("This is SEAT GRID COMPONENT")
        console.log(this.state)
        console.log(this.state.length)
    }


    //return status of each seat
    getStatus = function (seatPos: string) {
        if (this.reserved.indexOf(seatPos) !== -1) {
            return 'reserved';
        } else if (this.selected.indexOf(seatPos) !== -1) {
            return 'selected';
        }
    }
    //clear handler
    clearSelected = function () {
        this.selected = [];
    }
    //click handler
    seatClicked = function (seatPos: string) {

        if (this.selected.length == this.state.length) {
            console.log(this.selected.length);

            // $("#seatSelector").css('display', 'none');
            // $("#seatHeader1").css('display', 'none');
            // $("#seatHeader2").css('display', 'none');
            this.hideElements();
            for (var i = 0; i < this.selected.length; i++) {
                this.selectedSeats.push(this.selected[i]);
                console.log(this.selected[i]);
            }
            this.selected = this.selectedSeats;
            this.bookSeats();
            return;

            // $("#seatSelector *").attr("disabled", "disabled").off('click');
        }

        var index = this.selected.indexOf(seatPos);

        if (index !== -1) {
            // seat already selected, remove
            this.selected.splice(index, 1)
        } else {
            //push to selected array only if it is not reserved
            if (this.reserved.indexOf(seatPos) === -1)
                this.selected.push(seatPos);
        }
    }
    // Buy button handler
    showSelected = function () {
        if (this.selected.length > 0) {
            alert("Selected Seats: " + this.selected + "\nTotal: " + (this.ticketPrice * this.selected.length + this.convFee));
        } else {
            alert("No seats selected!");
        }
    }

    continue() {

        // this.router.navigate(['/card-payment'])
        this.navigationExtras={state:this.state};
        this.router.navigate(['/pay'],this.navigationExtras);
    }
    bookSeats() {

        // $("#seatSelector").css('display', 'none');
        // $("#seatHeader1").css('display', 'none');
        // $("#seatHeader2").css('display', 'none');
        this.hideElements();
        for (var i = 0; i < this.selected.length; i++) {

            console.log(this.state[i].seatNumber);
            this.state[i].seatNumber=this.selected[i];

        }
        this.showPassengers = true;

    }

    hideElements(){
        $("#seatSelector").css('display', 'none');
        $("#seatHeader1").css('display', 'none');
        $("#seatHeader2").css('display', 'none');
        $("#buttons").css('display', 'none');
    }

}
