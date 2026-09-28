import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Homework } from './homework/homework';
import { Ex18CustomerGroup } from './ex18/ex18-customer-group/ex18-customer-group';
import { ServiceProductImageEvent } from './ex13/service-product-image-event/service-product-image-event';
import { ServiceProductImageEventDetail } from './ex13/service-product-image-event-detail/service-product-image-event-detail';
import { CategoryProduct } from './ex14/category-product/category-product';

@NgModule({
  declarations: [
    App,
    Homework,
    Ex18CustomerGroup,
    ServiceProductImageEvent,
    ServiceProductImageEventDetail,
    CategoryProduct,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient()],
  bootstrap: [App],
})
export class AppModule {}
