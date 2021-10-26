import { Component, Input, OnInit } from '@angular/core';
import { Oficina } from '../mockInfo';
import { BoxInfo } from '../boxInfo';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
})
export class BoxComponent implements OnInit {
  @Input() nombre!: string;
  @Input() idBox!: string;

  oficina = Oficina;
  boxInfo: BoxInfo = new BoxInfo();
  satisfaccionMedia!: string;
  constructor() {}

  ngOnInit(): void {
    this.load();
  }

  ngAfterViewInit() {
    this.load();
  }

  load(): void {
    let boxInfo = this.oficina.find((i) => i.idBox === this.idBox);

    if (boxInfo != null) {
      this.boxInfo = boxInfo;
    }

    this.comprobarWarnings();
  }

  comprobarWarnings(): void {
    this.warningTemp();
    this.warningDB();
    this.warningHumidity();
    this.warningLux();
    this.warningAirQuality();
  }
  calcularSatisfaccionMedia(): void {}

  warningTemp() {
    var warningTempIcon = document.getElementById(this.idBox + 'warningTemp');

    if (warningTempIcon != null) {
      if (this.boxInfo.temperaturaActual >= 35) {
        warningTempIcon.style.display = 'inline';
        warningTempIcon.style.color = 'red';
      } else if (
        this.boxInfo.temperaturaActual >= 30 &&
        this.boxInfo.temperaturaActual < 35
      ) {
        warningTempIcon.style.display = 'inline';
        warningTempIcon.style.color = 'orange';
      } else warningTempIcon.style.visibility = 'hidden';
    }
  }
  warningDB() {
    var warningDBIcon = document.getElementById(this.idBox + 'warningDB');
    if (warningDBIcon != null) {
      if (this.boxInfo.ruidoActual >= 60) {
        warningDBIcon.style.display = 'inline';
        warningDBIcon.style.color = 'red';
      } else if (
        this.boxInfo.ruidoActual >= 40 &&
        this.boxInfo.ruidoActual < 60
      ) {
        warningDBIcon.style.display = 'inline';
        warningDBIcon.style.color = 'orange';
      } else warningDBIcon.style.visibility = 'hidden';
    }
  }
  warningAirQuality() {
    var warningAirQualitycon = document.getElementById(
      this.idBox + 'warningAirQuality'
    );

    if (warningAirQualitycon != null) {
      if (this.boxInfo.calidadAireActual == 'mala') {
        warningAirQualitycon.style.display = 'inline';
        warningAirQualitycon.style.color = 'red';
      } else if (this.boxInfo.calidadAireActual == 'regular') {
        warningAirQualitycon.style.display = 'inline';
        warningAirQualitycon.style.color = 'orange';
      } else warningAirQualitycon.style.visibility = 'hidden';
    }
  }
  warningLux() {
    var warningLuxIcon = document.getElementById(this.idBox + 'warningLux');

    if (warningLuxIcon != null) {
      if (this.boxInfo.luminosidadActual >= 600) {
        warningLuxIcon.style.display = 'inline';
        warningLuxIcon.style.color = 'red';
      } else if (
        this.boxInfo.luminosidadActual >= 400 &&
        this.boxInfo.luminosidadActual < 600
      ) {
        warningLuxIcon.style.display = 'inline';
        warningLuxIcon.style.color = 'orange';
      } else warningLuxIcon.style.visibility = 'hidden';
    }
  }
  warningHumidity() {
    var warningHumidityIcon = document.getElementById(
      this.idBox + 'warningHumidity'
    );

    if (warningHumidityIcon != null) {
      if (this.boxInfo.ruidoActual >= 35) {
        warningHumidityIcon.style.display = 'inline';
        warningHumidityIcon.style.color = 'red';
      } else if (
        this.boxInfo.ruidoActual >= 30 &&
        this.boxInfo.ruidoActual < 35
      ) {
        warningHumidityIcon.style.display = 'inline';
        warningHumidityIcon.style.color = 'orange';
      } else warningHumidityIcon.style.visibility = 'hidden';
    }
  }
}
