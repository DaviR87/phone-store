import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPhoneComponent } from './add-phone/add-phone.component';
import { ListPhoneComponent } from './list-phone/list-phone.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'list-phone', component: ListPhoneComponent },
  { path: 'add-phone', component: AddPhoneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
