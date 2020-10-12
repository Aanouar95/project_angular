import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemComponent } from './item/item.component';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CollectionsComponent } from './collections/collections.component'; 

@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    ItemComponent,
    NavBarComponent,
    CollectionsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
