import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AuthComponent} from "./auth/auth.component";
import {PanierComponent} from "./panier/panier.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: AuthComponent },
  { path: 'panier', component: PanierComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
