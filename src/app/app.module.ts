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
import { MoreComponent } from './more/more.component';
import { LoginComponent } from './login/login.component';
import { RegistreComponent } from './registre/registre.component';
import { PanierComponent } from './panier/panier.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { AjouterComponent } from './ajouter/ajouter.component'; 




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
    MoreComponent,
    LoginComponent,
    RegistreComponent,
    PanierComponent,
    DashbordComponent,
    AjouterComponent,
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    HttpClientModule,
    FormsModule,


  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
