import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { LocationServices } from 'src/_service/location-service';
import { Endpoint } from 'src/_utils/endpoint';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationDashboardComponent } from './location-dashboard/location-dashboard.component';
import { CreateLocationComponent } from './create-location/create-location.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationDashboardComponent,
    CreateLocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    SweetAlert2Module.forRoot(),
    FormsModule,
  ],
  providers: [LocationServices, Endpoint],
  bootstrap: [AppComponent]
})
export class AppModule { }
