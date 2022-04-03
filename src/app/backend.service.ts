import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, pipe, throwError, UnaryFunction } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private token = '';
  private readonly backendUrl = 'https://localhost:44308'

  constructor(
    private httpClient: HttpClient,
    private router: Router) { }

  login(username: string, mail: string) {
    const headerDict = {
      'Accept': 'application/json',
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    this.httpClient.post(`${this.backendUrl}/auth/gettoken?username=${username}&email=${mail}`, {}, requestOptions).pipe(
      this.handleResponse()
    ).subscribe((resp: string) => {
      console.log("Logged in");
      this.token = 'Bearer ' + resp;
      alert('Login succesful!');
      this.router.navigate(['/list-phone']);
    });
  }

  get(url: string, headers?: HttpHeaders): Observable<any> {
    return this.httpClient.get(url, { headers: headers }).pipe(
      this.handleResponse()
    )
  }

  delete(url: string, auth: boolean, headers: HttpHeaders = new HttpHeaders()): Observable<any> {
    if (auth) {
      headers = headers.append('Authorization', this.token)
    }

    return this.httpClient.delete(url, { headers: headers }).pipe(
      this.handleResponse()
    )
  }

  post(url: string, body: any, auth: boolean, headers: HttpHeaders = new HttpHeaders()): Observable<any> {
    headers = headers.set('Accept', 'application/json')
    if (auth) {
      headers = headers.append('Authorization', this.token)
    }

    return this.httpClient.post(url, body, { headers: headers }).pipe(
      this.handleResponse()
    )
  }

  private handleResponse(): UnaryFunction<Observable<any>, Observable<any>> {
    return pipe(
      catchError((response: HttpErrorResponse) => {
        console.error(response);
        alert('Error');
        return throwError(() => response);
      })
    );
  }
}
