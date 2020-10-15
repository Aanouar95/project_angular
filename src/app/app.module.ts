import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemComponent } from './item/item.component';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import {Routes} from '@angular/router';
import {RouterModule} from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';
import {SingleAppareilComponent} from './single-appareil/single-appareil.component';
const appRoutes: Routes = [
  {path: 'authentification', component: AuthentificationComponent},
  {path: 'collections', component: ItemsListComponent},
  {path: '', component: AuthentificationComponent},
  {path: 'collections/:id', component: SingleAppareilComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    ItemComponent,
    NavBarComponent,
    AuthentificationComponent,
    SingleAppareilComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
