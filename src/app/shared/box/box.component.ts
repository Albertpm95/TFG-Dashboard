import { isDelegatedFactoryMetadata } from '@angular/compiler/src/render3/r3_factory';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
})
export class BoxComponent implements OnInit {
  @Input() nombre!: String;
  @Input() id!: String;

  temperaturaActual = 20;
  ruidoActual = 100;
  iluminosidadActual = 500;
  humedadActual = 60;
  calidadAireActual = 'Mala';
  satisfaccionMedia = 'Regular';

  constructor() { }

  ngOnInit(): void { this.load() }

  ngAfterViewInit() {
    this.load();
  }

  load(): void {
    this.comprobarWarnings();
  }

  comprobarWarnings(): void {

    this.warningTemp();
    this.warningDB();
    this.warningHumidity();
    this.warningLux();
    this.warningAirQuality();
  }

  warningTemp() {
    var warningTempIcon = document.getElementById(this.id + 'warningTemp');

    if (warningTempIcon != null) {

      if (this.temperaturaActual >= 35) {
        console.log("Rojo")
        warningTempIcon.style.display = 'inline';
        warningTempIcon.style.color = 'red';
      }
      else if (this.temperaturaActual >= 30 && this.temperaturaActual < 35) {
        warningTempIcon.style.display = 'inline';
        warningTempIcon.style.color = 'yellow';
        console.log("Amarillo")
      }
      else
        warningTempIcon.style.visibility = 'hidden';
    }
  }
  warningDB() {
    var warningDBIcon = document.getElementById(this.id + 'warningDB');
    if (warningDBIcon != null) {
      if (this.ruidoActual >= 60) {
        warningDBIcon.style.display = 'inline';
        warningDBIcon.style.color = 'red';
      }
      else if (this.ruidoActual >= 40 && this.ruidoActual < 60) {
        warningDBIcon.style.display = 'inline';
        warningDBIcon.style.color = 'yellow';
      }
      else
        warningDBIcon.style.visibility = 'hidden';
    }
  }
  warningAirQuality() {
    var warningAirQualitycon = document.getElementById(this.id + 'warningAirQuality');

    if (warningAirQualitycon != null) {
      if (this.calidadAireActual == 'Mala') {
        warningAirQualitycon.style.display = 'inline';
        warningAirQualitycon.style.color = 'red';
      }
      else if (this.calidadAireActual == 'Regular') {
        warningAirQualitycon.style.display = 'inline';
        warningAirQualitycon.style.color = 'yellow';
      }
      else
        warningAirQualitycon.style.visibility = 'hidden';
    }
  }
  warningLux() {
    var warningLuxIcon = document.getElementById(this.id + 'warningLux');

    if (warningLuxIcon != null) {
      if (this.iluminosidadActual >= 600) {
        warningLuxIcon.style.display = 'inline';
        warningLuxIcon.style.color = 'red';

      }
      else if (this.iluminosidadActual >= 400 && this.iluminosidadActual < 600) {
        warningLuxIcon.style.display = 'inline';
        warningLuxIcon.style.color = 'yellow';
      }
      else
        warningLuxIcon.style.visibility = 'hidden';
    }
  }
  warningHumidity() {
    var warningHumidityIcon = document.getElementById(this.id + 'warningHumidity');

    if (warningHumidityIcon != null) {
      if (this.ruidoActual >= 35) {
        warningHumidityIcon.style.display = 'inline';
        warningHumidityIcon.style.color = 'red';
      }
      else if (this.ruidoActual >= 30 && this.ruidoActual < 35) {
        warningHumidityIcon.style.display = 'inline';
        warningHumidityIcon.style.color = 'yellow';
      }
      else
        warningHumidityIcon.style.visibility = 'hidden';
    }
  }
}
