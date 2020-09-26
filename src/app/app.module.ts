import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { AddArrangementComponent } from './components/dashboard/add-arrangement/add-arrangement.component';
import { AllReservationsComponent } from './components/dashboard/all-reservations/all-reservations.component';
import { NavbarComponent } from './components/dashboard/navbar/navbar.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ResponseInterceptor } from './interceptors/response.interceptor';
import { UpdateArrangementModalComponent } from './modals/update-arrangement-modal/update-arrangement-modal.component';
import { FirstPageComponent } from './components/dashboard/first-page/first-page.component';
import { AddNewTherapistComponent } from './components/dashboard/add-new-therapist/add-new-therapist.component';
import { RegisterTherapistComponent } from './components/register-therapist/register-therapist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateReservationComponent } from './components/dashboard/create-reservation/create-reservation.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import { TherapistDetailComponent } from './components/dashboard/therapist-detail/therapist-detail.component';
import { CommentComponent } from './components/dashboard/therapist-detail/comment/comment.component';
import { RatingModule } from 'ngx-bootstrap';
import { ReservationsComponent } from './components/dashboard/reservations/reservations.component';
import {MatExpansionModule} from '@angular/material/expansion';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddArrangementComponent,
    AllReservationsComponent,
    NavbarComponent,
    LogInComponent,
    RegistrationComponent,
    UpdateArrangementModalComponent,
    FirstPageComponent,
    AddNewTherapistComponent,
    RegisterTherapistComponent,
    CreateReservationComponent,
    TherapistDetailComponent,
    CommentComponent,
    ReservationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatExpansionModule,
    RatingModule.forRoot(),


  ],
  exports: [
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
