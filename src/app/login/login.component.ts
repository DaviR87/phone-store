import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/operators';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formUser: FormGroup;
  public token = '';

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private backendservice: BackendService) {
    this.formUser = new FormGroup({
      'username': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  submitData() {
    // console.log(this.formUser.value)
    this.backendservice.login(this.formUser.value.username, this.formUser.value.password)
  }





  private setToken(token: string): void {
    // if (!tokenIssue) { return; }
    // localStorage.setItem(localStorageToken, tokenIssue.token);
    // localStorage.setItem(localStorageClaims, JSON.stringify(tokenIssue.claims));

    // const clientExpiration = Math.floor(Date.now() / 1000) + tokenIssue.claims.validitySeconds;
    // localStorage.setItem(localStorageClientExpiration, JSON.stringify(clientExpiration));

    // this.authStatus.next(AuthStatusEnum.Authorized);
  }

}
