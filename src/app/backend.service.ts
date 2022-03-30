import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, pipe, throwError, UnaryFunction } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private token = '';
  private readonly backendUrl = 'https://localhost:44308'

  constructor(private httpClient: HttpClient) { }

  login(username: string, mail: string) {
    const headerDict = {
      'Accept': 'application/json',
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };

    this.httpClient.post(`${this.backendUrl}/auth/gettoken?username=${username}&email=${mail}`, {}, requestOptions).subscribe((resp: string) => {
      console.log("Logged in");
      this.token = 'Bearer ' + resp
    });
  }

  get(url: string, headers?: HttpHeaders): Observable<any> {
    return this.httpClient.get(url, { headers: headers }).pipe(
      catchError((error) => {
        console.log('error is intercept')
        console.error(error);
        alert(JSON.stringify(error));
        return error
      })
    )
  }

  delete(url: string, auth: boolean, headers: HttpHeaders = new HttpHeaders()): Observable<any> {
    if (auth) {
      headers = headers.append('Authorization', this.token)
    }
    
    return this.httpClient.delete(url, { headers: headers }).pipe(
      // catchError((error) => {
      //   console.log('error is intercept')
      //   console.error(error);
      //   alert(JSON.stringify(error));
      //   return error
      // })
      this.handleResponse()
      )
  }

  private handleResponse(): UnaryFunction<Observable<any>, Observable<any>> {
    return pipe(
      catchError((response: HttpErrorResponse) => {
        console.log('error is intercept')
        console.error(response);
        alert(JSON.stringify(response));
        return throwError(response);
      })
    );
  }
}
