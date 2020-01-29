import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { LoginComponent } from './modules/login/login.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './modules/home/home.component';
import { FramePageComponent } from './core/frame-page/frame-page.component';
import { FramelessPageComponent } from './core/frameless-page/frameless-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    FramePageComponent,
    FramelessPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
