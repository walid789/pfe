import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ServiseComponent } from './servise/servise.component';
import { FormComponent } from './form/form.component';
import { FooterComponent } from './footer/footer.component';
import { GoogleMapsModule } from '@angular/google-maps';
import {HttpClientModule} from '@angular/common/http';
import { ExempleComponent } from './exemple/exemple.component';
import { NavComponent } from './nav/nav.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { DescComponent } from './desc/desc.component';
import { FootersComponent } from './footers/footers.component';
import { HomeComponent } from './home/home.component';
import { DetaileComponent } from './detaile/detaile.component'

import { FormsModule } from "@angular/forms"; 


@NgModule({
  declarations: [
  
    AppComponent,
    WelcomeComponent,
    ServiseComponent,
    FormComponent,
    FooterComponent,
    ExempleComponent,
    NavComponent,
    AcceuilComponent,
    DescComponent,
    FootersComponent,
    HomeComponent,
    DetaileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    HttpClientModule,
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
