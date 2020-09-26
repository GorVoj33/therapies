import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class URLHelper {

    private baseUrl = 'http://localhost:8080/';
    public login = this.baseUrl + 'login';
    public registerUser = this.baseUrl + 'registerUser';
    public registerTherapist = this.baseUrl + 'registerTherapist';
    public declineReservation = this.baseUrl + 'decline';
    public acceptReservation = this.baseUrl + 'accept';
}
