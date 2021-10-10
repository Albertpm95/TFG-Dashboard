import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './core/principal/principal.component';
import { QRComponent } from './core/qr/qr.component';
import { InfoExtraComponent } from './core/info-extra/info-extra.component';

import { QRCodeModule } from 'angular2-qrcode';
import { FormsModule } from '@angular/forms';
import { OficinaComponent } from './core/oficina/oficina.component';
import { FeedbackComponent } from './core/feedback/feedback.component';

import { MatIconModule } from '@angular/material/icon';
import { BoxComponent } from './shared/box/box.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    QRComponent,
    InfoExtraComponent,
    OficinaComponent,
    FeedbackComponent,
    BoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QRCodeModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
