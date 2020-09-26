import { Component, OnInit } from '@angular/core';
import { CallBrokerUser } from 'src/app/services/callBroker/call-broker-user.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
  panelOpenState = false;
  constructor(private callBrokerUser: CallBrokerUser) { }

  ngOnInit() {
  }
  decline(id) {
    // na osnovu ID rezervacije pozivas metod na bekendu koji ce rezervaciju sa tim ID da oznaci kao odbijenu
    // (da stavi denied = true i da sacuvas to u bazu)

    this.callBrokerUser.declineReservation(id).subscribe(
      response => {

      },
      error => {
        console.log('error - decline reservation. . . ')
      }
    )
  }

  accept(id) {

  }
}
