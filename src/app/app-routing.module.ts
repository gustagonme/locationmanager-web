import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateLocationComponent } from './create-location/create-location.component';
import { LocationDashboardComponent } from './location-dashboard/location-dashboard.component';

const routes: Routes = [
  { path: '', component: LocationDashboardComponent},
  { path: 'create-location', component: CreateLocationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
