import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetaileComponent } from './detaile/detaile.component'
import { MoreComponent } from './more/more.component'; 
import { LoginComponent } from './login/login.component'; 
import { HomeComponent } from './home/home.component';
import { RegistreComponent } from './registre/registre.component'; ;
const routes: Routes = [
  {path:'accueil', component:HomeComponent},
  {path:'produit/:id', component:DetaileComponent},
  {path:'more/:cat', component:MoreComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:RegistreComponent},

  {path:'', redirectTo:'accueil', pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
