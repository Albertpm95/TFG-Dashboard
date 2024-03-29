import { Component, Input, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { BoxInfo } from '../boxInfo';
import { Feedback } from '../Feedback';
import { Oficina } from '../mockInfo';

@Component({
  selector: 'app-box-detailed',
  templateUrl: './box-detailed.component.html',
  styleUrls: ['./box-detailed.component.scss'],
})
export class BoxDetailedComponent implements OnInit {
  @Input() nombre!: string;
  @Input() idBox!: string;
  @Input() feedbacks!: Feedback[];
  oficina = Oficina;
  boxInfo: BoxInfo = new BoxInfo();

  satisfaccionMedia = 'Sin datos recientes';
  satisfaccionMediaLuminica = 0;
  satisfaccionMediaTermica = 0;
  satisfaccionMediaAcustica = 0;

  constructor() {}

  ngOnInit() {
    let boxInf = this.oficina.find((i) => i.idBox === this.idBox);

    if (boxInf != null) {
      this.boxInfo = boxInf;
    }
  }

  ngAfterViewInit() {
    this.load();
  }
  ngOnChanges() {
    this.calcularSatisfaccionMedia();
  }

  load() {
    this.comprobarWarnings();
  }

  comprobarWarnings() {
    this.warningTemp();
    this.warningDB();
    this.warningHumidity();
    this.warningAirQuality();
  }

  calcularSatisfaccionMedia() {
    if (this.feedbacks.length != 0) {
      for (let feed of this.feedbacks) {
        this.satisfaccionMediaAcustica += +feed.acustico;

        this.satisfaccionMediaLuminica += +feed.luminico;

        this.satisfaccionMediaTermica += +feed.termico;
      }

      this.satisfaccionMediaAcustica =
        +this.satisfaccionMediaAcustica / +this.feedbacks.length;
      this.satisfaccionMediaLuminica =
        +this.satisfaccionMediaLuminica / +this.feedbacks.length;
      this.satisfaccionMediaTermica =
        +this.satisfaccionMediaTermica / +this.feedbacks.length;

      let temp =
        (+this.satisfaccionMediaAcustica +
          +this.satisfaccionMediaLuminica +
          +this.satisfaccionMediaTermica) /
        3;

      switch (Math.round(temp)) {
        case 1:
          this.satisfaccionMedia = 'Muy malo';
          break;
        case 2:
          this.satisfaccionMedia = 'Malo';
          break;
        case 3:
          this.satisfaccionMedia = 'Regular';
          break;
        case 4:
          this.satisfaccionMedia = 'Bueno';
          break;
        case 5:
          this.satisfaccionMedia = 'Muy bueno';
          break;
      }
    }
  }

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
