import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ex18CustomerGroup } from './ex18/ex18-customer-group/ex18-customer-group';
import { ServiceProductImageEvent } from './ex13/service-product-image-event/service-product-image-event';
import { ServiceProductImageEventDetail } from './ex13/service-product-image-event-detail/service-product-image-event-detail';

const routes: Routes = [
  { path: 'app-ex18-customer-group', component:Ex18CustomerGroup },
  { path: 'products', component: ServiceProductImageEvent },
  { path: 'products/:id', component: ServiceProductImageEventDetail },
  { path: 'app-service-product-image-event', component:ServiceProductImageEvent },
  { path: 'app-service-product-image-event-detail', component:ServiceProductImageEventDetail },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
