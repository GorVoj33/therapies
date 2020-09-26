import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import {ThemePalette} from '@angular/material/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Therapy } from 'src/app/models/Therapy.model';
import { CallBrokerUser } from 'src/app/services/callBroker/call-broker-user.service';


export interface WorkArea {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Therapy[];
}
@Component({
  selector: 'app-register-therapist',
  templateUrl: './register-therapist.component.html',
  styleUrls: ['./register-therapist.component.css']
})
export class RegisterTherapistComponent implements OnInit {
  responseArrived: boolean = false;
  infoMessage: string;
  registrationForm = this.fb.group({
    name: ["", Validators.required],
    lastname: ["", Validators.required],
    // username: ["", Validators.required],
    // password: ["", Validators.required],
    email: ["", Validators.required],
    phoneNumber: ["", Validators.required],
    description: ["", Validators.required]

  });
  therapies: Therapy[] = [];
  selectedTherapies: number[] = [];
  noSelectedTherapiesError = false;
  registerTherapistObservable: Subscription;

  constructor(private fb: FormBuilder, private router: Router, private callBroker: CallBrokerUser) {
    var t1 = new Therapy(1, 'Fizikalna terapija', 'opissssssssssssss');
    var t2 = new Therapy(2, 'Kineziterapija', 'opissssssssssssss');
    var t3 = new Therapy(3, 'Kiropraktika', 'opissssssssssssss')
    var t4 = new Therapy(4, 'Shockwave terapija', 'opissssssssssssss')
    var t5 = new Therapy(5, 'Presoterapija', 'opissssssssssssss')
    var t6 = new Therapy(6, 'Kinesiotaping terapija', 'opissssssssssssss')
    this.therapies.push(t1);
    this.therapies.push(t2);
    this.therapies.push(t3);
    this.therapies.push(t4);
    this.therapies.push(t5);
    this.therapies.push(t6);
    console.log(this.therapies)

  }

  ngOnInit() {
  }


  onSubmit() {
    this.responseArrived = false;
    //this.noSelectedTherapiesError === false
    if(this.noSelectedTherapiesError === false && this.selectedTherapies.length === 0) {
      this.noSelectedTherapiesError = true;
      return;
    }
    if(this.selectedTherapies.length > 0) this.noSelectedTherapiesError = false;

    let name = this.registrationForm.get('name').value;
    let lastname = this.registrationForm.get('lastname').value;
    let email = this.registrationForm.get('email').value;
    let phoneNumber = this.registrationForm.get('phoneNumber').value;
    let description = this.registrationForm.get('description').value;

    console.log("PODDACI: ", name, lastname, email, phoneNumber, description, this.selectedTherapies);

    this.registerTherapistObservable = this.callBroker
    .registerTherapist(name, lastname, email, phoneNumber, description, this.selectedTherapies).subscribe((response: any) => {

      console.log("odgovor", response);
      this.responseArrived = true;
      this.registrationForm.reset();
      this.infoMessage = 'Your registration request is sent succesfully. Please, check your email to see your new password and then you can log into system!'
      this.router.navigate(['/dashboard/firstPage']);
    }, (err) => {
      console.log(err);
    });
  }

  selectTherapy(event: any, id: number) {
    if(event.target.checked) {
      this.selectedTherapies.push(id);
    }else {
      this.selectedTherapies = this.selectedTherapies.filter(therapy => therapy != id);
    }
  }
}
