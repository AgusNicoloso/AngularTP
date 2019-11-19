import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserCredentials } from '../models/user-credentials';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'https://utn2019-avanzada2-tp9.herokuapp.com/';
  token = undefined;
  redirectUrl: string;

  constructor(private http: HttpClient, private router: Router) {

  }

  login(user: UserCredentials): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const observable = this.http.post(this.url + 'login', user, httpOptions);
    observable.subscribe(next => {
        this.token = next['jwt'];
        localStorage.setItem('token', this.token);
        this.router.navigate(['listitems']).then();
        console.log('Token: ' + this.token);
      },
      () => {
      });
    return observable;
  }
  logout(): void {
    this.token = undefined;
    localStorage.setItem('token', this.token);
  }
}
