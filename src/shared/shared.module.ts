import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { HeaderComponent } from './app-layout/header/header.component';
import { FooterComponent } from './app-layout/footer/footer.component';

@NgModule({
  declarations: [AppLayoutComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    RouterModule
  ],
  exports: [
    HttpClientModule,
    BrowserModule,
    AppLayoutComponent,
    HeaderComponent,
    FooterComponent,
    RouterModule
  ]
})
export class SharedModule { }
