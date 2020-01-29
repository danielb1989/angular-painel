import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './modules/login/login.component';
import { HomeComponent } from './modules/home/home.component';

import { FramePageComponent } from './core/frame-page/frame-page.component';
import { FramelessPageComponent } from './core/frameless-page/frameless-page.component';

const routes: Routes = [
  {
    path: '',
    component: FramelessPageComponent,
    children: [
      { path: '', component: LoginComponent }
    ]
  },
  {
    path: 'home',
    component: FramePageComponent,
    children: [
      { path: '', component: HomeComponent }
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { 


}
