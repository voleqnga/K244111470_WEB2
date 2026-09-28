import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Homework } from './homework/homework';
import { Ex18CustomerGroup } from './ex18-customer-group/ex18-customer-group';

@NgModule({
  declarations: [
    App,
    Homework,
    Ex18CustomerGroup
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(), provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
