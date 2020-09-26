
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  Inject,
  OnDestroy
} from '@angular/core';
import {MatCalendar} from '@angular/material/datepicker';
import {DateAdapter, MAT_DATE_FORMATS, MatDateFormats} from '@angular/material/core';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import { FormControl, Validators } from '@angular/forms';
import { TherapistWithTherapies } from 'src/app/models/TherapistWithTherapies.model';
interface Time {
  value: string;
}
@Component({
  selector: 'app-create-reservation',
  templateUrl: './create-reservation.component.html',
  styleUrls: ['./create-reservation.component.css']
})
export class CreateReservationComponent implements OnInit {
  formControlDate = new FormControl('', Validators.required);

  formControlStartTime = new FormControl('', Validators.required);
  formControlEndTime = new FormControl('', Validators.required);



  endTime: string;
  endTimes: Time[] = [];
  therapists: TherapistWithTherapies[] = [];
  times: Time[] = [
    {value: "8:00h"},
    {value: "9:00h"},
    {value: "10:00h"},
    {value: "11:00h"},
    {value: "12:00h"},
    {value: "13:00h"},
    {value: "14:00h"},
    {value: "15:00h"},

  ];
  dateFilter = date => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  }

  constructor() { }

  ngOnInit() {

  }

  setStartTime(event, time) {
    if(event.isUserInput){

      var startTime = +time.split(':')[0];
      this.formControlEndTime.setValue('');
      this.endTime = (startTime + 1) + ":00h";
      this.endTimes = [];
      this.endTimes.push({value: this.endTime});
   }


  }
  setEndTime(time) {

  }

  createReservation() {
    console.log(this.formControlDate.value);
    console.log(this.formControlStartTime.value);
    console.log(this.formControlEndTime.value);
  }
}
