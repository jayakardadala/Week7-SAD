import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module'; // Import AppRoutingModule if available

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { TransactionComponent } from './transaction/transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    TransactionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]), // Import RouterModule.forRoot() here
    AppRoutingModule // Import AppRoutingModule if available
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
