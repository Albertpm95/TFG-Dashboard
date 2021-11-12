import { Component, Input, OnInit } from '@angular/core';
import { BoxInfo } from '../boxInfo';
import { Oficina } from '../mockInfo';

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

  ngOnInit() {
    this.load();
  }

  ngAfterViewInit() {
    this.load();
  }

  load() {
    let boxInfo = this.oficina.find((i) => i.idBox === this.idBox);

    if (boxInfo != null) {
      this.boxInfo = boxInfo;
    }

    this.comprobarWarnings();
  }

  comprobarWarnings() {
    this.warningTemp();
    this.warningDB();
    this.warningHumidity();
    this.warningAirQuality();
  }

  calcularSatisfaccionMedia(): void {}

  warningTemp() {
    var warningTempIcon = document.getElementById(this.idBox + '-warningTemp');

    if (warningTempIcon != null) {
      if (this.boxInfo.temperaturaActual >= 35)
        warningTempIcon.style.color = 'red';
      else if (
        this.boxInfo.temperaturaActual >= 30 &&
        this.boxInfo.temperaturaActual < 35
      )
        warningTempIcon.style.color = 'orange';
      else warningTempIcon.style.color = 'green';
    }
  }

  warningDB(): void {
    var warningDBIcon = document.getElementById(this.idBox + '-warningDB');
    if (warningDBIcon != null) {
      if (this.boxInfo.ruidoActual >= 60) warningDBIcon.style.color = 'red';
      else if (this.boxInfo.ruidoActual >= 40 && this.boxInfo.ruidoActual < 60)
        warningDBIcon.style.color = 'orange';
      else warningDBIcon.style.color = 'green';
    }
  }

  warningAirQuality(): void {
    var warningAirQualitycon = document.getElementById(
      this.idBox + '-warningAirQuality'
    );

    if (warningAirQualitycon != null) {
      if (
        this.boxInfo.calidadAireActual == 'mala' ||
        this.boxInfo.calidadAireActual == 'muy mala'
      )
        warningAirQualitycon.style.color = 'red';
      else if (this.boxInfo.calidadAireActual == 'regular')
        warningAirQualitycon.style.color = 'orange';
      else warningAirQualitycon.style.color = 'green';
    }
  }

  warningHumidity() {
    var warningHumidityIcon = document.getElementById(
      this.idBox + '-warningHumidity'
    );

    if (warningHumidityIcon != null) {
      if (this.boxInfo.ruidoActual >= 35)
        warningHumidityIcon.style.color = 'red';
      else if (this.boxInfo.ruidoActual >= 30 && this.boxInfo.ruidoActual < 35)
        warningHumidityIcon.style.color = 'orange';
      else warningHumidityIcon.style.color = 'green';
    }
  }
}
