import { Component, Input, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { BoxInfo } from '../boxInfo';
import { DetallesAire } from '../detallesAire';
import { Oficina } from '../mockInfo';

@Component({
  selector: 'app-air-quality-details',
  templateUrl: './air-quality-details.component.html',
  styleUrls: ['./air-quality-details.component.scss'],
})
export class AirQualityDetailsComponent implements OnInit {
  oficina = Oficina;
  boxInfo: BoxInfo = new BoxInfo();
  detallesAire: DetallesAire = new DetallesAire();
  idBoxFocus = 'boxPlaza';

  constructor() {}

  ngOnChanges(): void {}
  ngOnInit(): void {
    let boxInf = this.oficina.find((i) => i.idBox === 'boxPlaza');

    if (boxInf != null) {
      this.boxInfo = boxInf;

      if (boxInf.detallesAire != null) {
        this.detallesAire = boxInf.detallesAire;
      }
    }
  }

  ngAfterViewInit() {
    delay(0);
    this.load();
  }

  load(): void {
    delay(0);
  }

  comprobarWarnings() {
    delay(0);
    this.warningPM10();
    this.warningPM25();
    this.warningO3();
    this.warningNO2();
    this.warningSO2();
  }

  warningSO2() {
    var warningIconSO2 = document.getElementById('boxPlazaWarningAzufre');

    console.log(warningIconSO2);
    if (warningIconSO2 != null) {
      if (
        this.detallesAire.dioxidoAzufre > 50 &&
        this.detallesAire.dioxidoAzufre < 1200
      )
        warningIconSO2.style.color = 'red';
      else if (
        this.detallesAire.dioxidoAzufre >= 36 &&
        this.detallesAire.dioxidoAzufre <= 50
      )
        warningIconSO2.style.color = 'orange';
      else warningIconSO2.style.color = 'green';
    }
  }
  warningNO2() {
    var warningIconNO2 = document.getElementById('boxPlazaWarningNitrogeno');

    console.log(warningIconNO2);

    if (warningIconNO2 != null) {
      if (
        this.detallesAire.dioxidoNitrogeno > 200 &&
        this.detallesAire.dioxidoNitrogeno <= 1000
      )
        warningIconNO2.style.color = 'red';
      else if (
        this.detallesAire.dioxidoNitrogeno > 100 &&
        this.detallesAire.dioxidoNitrogeno <= 200
      )
        warningIconNO2.style.color = 'orange';
      else warningIconNO2.style.color = 'green';
    }
  }

  warningO3() {
    var warningIconO3 = document.getElementById('boxPlazaWarningOzono');

    console.log(warningIconO3);

    if (warningIconO3 != null) {
      if (this.detallesAire.ozono > 180 && this.detallesAire.ozono < 600)
        warningIconO3.style.color = 'red';
      else if (this.detallesAire.ozono > 121 && this.detallesAire.ozono <= 180)
        warningIconO3.style.color = 'orange';
      else warningIconO3.style.color = 'green';
    }
  }

  warningPM10() {
    var warningIconPM10 = document.getElementById('boxPlazaWarningRespirables');

    console.log(warningIconPM10);

    if (warningIconPM10 != null) {
      if (
        this.detallesAire.particulasRespirables > 50 &&
        this.detallesAire.particulasRespirables < 1200
      )
        warningIconPM10.style.color = 'red';
      else if (
        this.detallesAire.particulasRespirables >= 36 &&
        this.detallesAire.particulasRespirables <= 50
      )
        warningIconPM10.style.color = 'orange';
      else warningIconPM10.style.color = 'green';
    }
  }

  warningPM25() {
    var warningIconPM25 = document.getElementById('boxPlazaWarningFinas');

    console.log(warningIconPM25);

    if (warningIconPM25 != null) {
      if (
        this.detallesAire.particulasFinas > 25 &&
        this.detallesAire.particulasFinas < 800
      )
        warningIconPM25.style.color = 'red';
      else if (
        this.detallesAire.particulasFinas >= 21 &&
        this.detallesAire.particulasFinas <= 25
      )
        warningIconPM25.style.color = 'orange';
      else warningIconPM25.style.color = 'green';
    }
  }
}
