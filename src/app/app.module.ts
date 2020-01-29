import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LoginComponent } from './modules/login/login.component';
import { HomeComponent } from './modules/home/home.component';
import { UsuariosComponent } from './modules/usuarios/usuarios.component';

import { FramePageComponent } from './core/frame-page/frame-page.component';
import { FramelessPageComponent } from './core/frameless-page/frameless-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FramePageComponent,
    FramelessPageComponent,
    LoginComponent,
    HomeComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
