import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListPhoneComponent } from './list-phone/list-phone.component';
import { AddPhoneComponent } from './add-phone/add-phone.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListPhoneComponent,
    AddPhoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    // Mandatory module for Reactive Form
    ReactiveFormsModule,
    // Mandatory module for Template Driven Form
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
