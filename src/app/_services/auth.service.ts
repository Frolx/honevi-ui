import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TokenStorageService } from '../_services/token-storage.service';


const AUTH_API = 'http://localhost:8080/';

const httpOptions = {
  //headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  observe: "response" as "body"
};



@Injectable({
  providedIn: 'root'
})
export class AuthService {



  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      email,
      password
    }, httpOptions);
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password
    }, httpOptions);
  }

  public isAuthenticated(): boolean {
    const jwtHelper = new JwtHelperService()
    const token = this.tokenStorage.getToken()
    // Check whether the token is expired and return
    // true or false
    return !jwtHelper.isTokenExpired(token);
  }

}
