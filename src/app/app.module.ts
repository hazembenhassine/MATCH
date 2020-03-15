import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChoiceComponent } from './pages/choice/choice.component';
import {NgProgressModule} from 'ngx-progressbar';
import { LoginComponent } from './pages/login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthService} from './services/authentification/auth-service.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ApiHeaderInterceptor} from './services/api-header.interceptor';

@NgModule({
  declarations: [
      AppComponent,
      ChoiceComponent,
      LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgProgressModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    {provide: HTTP_INTERCEPTORS, useClass: ApiHeaderInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
