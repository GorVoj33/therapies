import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ReservationsResponseModel } from 'src/app/models/ReservationsResponse.model';



@Component({
  selector: 'app-all-reservations',
  templateUrl: './all-reservations.component.html',
  styleUrls: ['./all-reservations.component.css']
})
export class AllReservationsComponent implements OnInit {

  constructor() { }

  getAllReservationObservable: Subscription;
   reservationsArray: ReservationsResponseModel[]=[];
  ngOnInit() {
    this.getAllReservations();
  }


  getAllReservations(){

  }
}
