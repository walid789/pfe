import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetaileComponent } from './detaile/detaile.component'

import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {path:'accueil', component:HomeComponent},
  {path:'produit/:id', component:DetaileComponent},
  {path:'', redirectTo:'accueil', pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
