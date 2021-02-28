import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  observe: "response" as "body"
};
@Injectable({
  providedIn: 'root'
})
export class OnboardingService {
  constructor(private http: HttpClient) { }

  postOnboardCompany(email: string, type: string): Observable<any> {
    return this.http.post(API_URL + '/benefit/onboard/company', { email, type}, httpOptions);
  }

  postActivateCompany(email: string, password: string): Observable<any> {
    return this.http.post(API_URL + '/benefit/onboard/company/activate', {email, password}, httpOptions);
  }

  postSetCompanyProfile(name: string, cui: string, icon: string): Observable<any> {
    return this.http.post(API_URL + '/benefit/onboard/company/setup', {name, cui, icon}, httpOptions);
  }
}
