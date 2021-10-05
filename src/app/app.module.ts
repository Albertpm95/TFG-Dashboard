import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './core/principal/principal.component';
import { QRComponent } from './core/qr/qr.component';
import { InfoExtraComponent } from './core/info-extra/info-extra.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    QRComponent,
    InfoExtraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
