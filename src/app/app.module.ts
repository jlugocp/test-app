import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { BlankComponent } from './blank/blank.component';
import { StoreModule } from '@ngrx/store';
import { peopleReducer } from './state/people.reducer';
import { collectionReducer } from './state/collection.reducer'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ people: peopleReducer, collection: collectionReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
