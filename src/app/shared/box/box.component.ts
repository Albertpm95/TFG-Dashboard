import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
})
export class BoxComponent implements OnInit {
  @Input() id!: string;
  temperaturaActual = 50;
  ruidoActual = 100;
  iluminosidadActual = 500;
  humedadActual = 60;
  calidadAireActual = 'Mala';
  satisfaccionMedia = 'Regular';
  warningTemp = 'none';
  warningHumidity = 'none';
  warningDB = 'none';
  warningLux = 'none';
  warningAirQuality = 'none';

  constructor() { }

  ngOnInit(): void { this.load() }

  load(): void {
    this.comprobarWarnings();
  }

  comprobarWarnings(): void {
    if (this.temperaturaActual >= 30) this.warningTemp = 'warning';
    else this.warningTemp = 'none';
    if (this.ruidoActual >= 60) this.warningDB = 'warning_amber';
    else this.warningDB = 'none';
    if (this.iluminosidadActual <= 300) this.warningLux = 'warning';
    else this.warningLux = 'none';
    if (this.humedadActual >= 60) this.warningHumidity = 'warning_amber';
    else this.warningHumidity = 'none';
    if (this.calidadAireActual = 'Mala') this.warningAirQuality = 'warning_amber';
    else this.warningAirQuality = 'none';
  }
}
