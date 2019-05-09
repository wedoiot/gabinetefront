import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { LoginComponent } from './generic/security/login/login.component';
import { RouterModule } from '@angular/router';
import { LoginService } from './generic/security/login/shared/login.service';
import { HttpClientModule } from '@angular/common/http';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ComponentsModule } from './components/components.module';
import { ForgotPasswordComponent } from './generic/security/forgotpassword/forgotpassword.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    AdminLayoutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    NgbModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    ComponentsModule,
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
