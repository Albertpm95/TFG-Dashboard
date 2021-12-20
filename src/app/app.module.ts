import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PrincipalComponent } from './core/principal/principal.component';
import { QRComponent } from './core/qr/qr.component';
import { OficinaComponent } from './core/oficina/oficina.component';
import { BoxComponent } from './shared/box/box.component';
import { AirQualityDetailsComponent } from './shared/air-quality-details/air-quality-details.component';

import { QRCodeModule } from 'angular2-qrcode';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { WeatherWidgetComponent } from './shared/weather-widget/weather-widget.component';

import { HttpClientModule } from '@angular/common/http';
import { BoxDetailedComponent } from './shared/box-detailed/box-detailed.component';
import { FeedbackService } from './feedback.service';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    QRComponent,
    OficinaComponent,
    BoxComponent,
    AirQualityDetailsComponent,
    WeatherWidgetComponent,
    BoxDetailedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QRCodeModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonToggleModule,
    MatDividerModule,
    MatButtonModule,
    HttpClientModule,
  ],
  providers: [FeedbackService],
  bootstrap: [AppComponent],
})
export class AppModule {}
