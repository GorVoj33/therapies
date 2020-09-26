import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { NavbarComponent } from './components/dashboard/navbar/navbar.component';
import { AddArrangementComponent } from './components/dashboard/add-arrangement/add-arrangement.component';
import { AllReservationsComponent } from './components/dashboard/all-reservations/all-reservations.component';
import { FirstPageComponent } from './components/dashboard/first-page/first-page.component';
import { RegisterTherapistComponent } from './components/register-therapist/register-therapist.component';
import { CreateReservationComponent } from './components/dashboard/create-reservation/create-reservation.component';
import { TherapistDetailComponent } from './components/dashboard/therapist-detail/therapist-detail.component';
import { ReservationsComponent } from './components/dashboard/reservations/reservations.component';


const appRoutes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent, children: [

      // { path: '', component: LoginComponent },
      { path: 'navbar', component: NavbarComponent },
      { path: 'addArrangement', component: AddArrangementComponent},
      { path: 'allReservations', component: AllReservationsComponent},
      { path: 'reservations/1', component: ReservationsComponent},
      { path: 'firstPage', component: FirstPageComponent},
      { path: 'create-reservation', component: CreateReservationComponent },
      { path: 'therapist', component: TherapistDetailComponent }


    ]
  },
  { path: 'log-in', component: LogInComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'register-therapist', component: RegisterTherapistComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: LogInComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
