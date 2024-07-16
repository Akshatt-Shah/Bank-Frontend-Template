import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastService, AngularToastifyModule } from 'angular-toastify';
import { interceptor } from './core/interceptor/interceptor.interceptor';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularToastifyModule,
  ],
  providers: [ToastService, interceptor],
  bootstrap: [AppComponent],
})
export class AppModule {}
