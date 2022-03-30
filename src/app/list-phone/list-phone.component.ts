import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, pipe, throwError, UnaryFunction } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-list-phone',
  templateUrl: './list-phone.component.html',
  styleUrls: ['./list-phone.component.scss']
})
export class ListPhoneComponent implements OnInit {

  constructor(private backendservice: BackendService) { }
  phoneList = [
    // {
    //   "id": 1,
    //   "model": "OnePlus"
    // },
    // {
    //   "id": 2,
    //   "model": "iPhone"
    // },
    // {
    //   "id": 3,
    //   "model": "Xiaomi"
    // }
  ]

  ngOnInit(): void {
  }

  getPhones() {
    this.backendservice.get('https://localhost:44308/Store/GetPhones').subscribe({
      next: (v) => {
        console.log(v);
        this.phoneList = v;
      },
      error: (e) => alert(e),
      complete: () => console.info('complete') 
  });
  }

  deletePhone(id: number) {
    // const headerDict = {
    //   'Authorization': this.token
    // }
    
    // const requestOptions = {                                                                                                                                                                                 
    //   headers: new HttpHeaders(headerDict), 
    // };
    // this.httpClient.delete(`https://localhost:44308/Store/DeletePhone/1`, requestOptions).subscribe(resp => {
    //   console.log(resp);
    // });
    this.backendservice.delete('https://localhost:44308/Store/DeletePhone/'+ id, true).subscribe(x => {
      this.getPhones();
    }
    );
  }

  private handleResponse(): UnaryFunction<Observable<any>, Observable<any>> {
    return pipe(
      tap((response: any) => {
        if (response.error) {
          throw new HttpErrorResponse({ status: -1, error: response });
        }
      }),
      catchError((response: HttpErrorResponse) => {
        console.log(response)
        return throwError(response);
      })
    );
  }

}
