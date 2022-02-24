import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { BoxInfo } from '../boxInfo';
import { Oficina } from '../mockInfo';
import { Feedback } from '../Feedback';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
})
export class BoxComponent implements OnInit {
  @Input() nombre!: string;
  @Input() idBox!: string;
  @Input() feedbacks!: Feedback[];

  oficina = Oficina;
  boxInfo: BoxInfo = new BoxInfo();

  satisfaccionMedia = 'Sin datos recientes';
  satisfaccionMediaLuminica: number = 0;
  satisfaccionMediaTermica: number = 0;
  satisfaccionMediaAcustica: number = 0;

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
        this.satisfaccionMediaAcustica += feed.Acustico;

        this.satisfaccionMediaLuminica += feed.Luminico;

        this.satisfaccionMediaTermica += feed.Termico;
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
