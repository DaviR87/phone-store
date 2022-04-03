import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  formUser: FormGroup;
  public token = '';

  constructor(
    private backendservice: BackendService) {
    this.formUser = new FormGroup({
      'username': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required, Validators.email])
    })
  }

  submitData() {
    this.backendservice.login(this.formUser.value.username, this.formUser.value.email)
  }

}
