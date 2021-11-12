import { Component, Input, OnInit } from '@angular/core';
import { BoxInfo } from '../boxInfo';
import { DetallesAire } from '../detallesAire';
import { Oficina } from '../mockInfo';

@Component({
  selector: 'app-air-quality-details',
  templateUrl: './air-quality-details.component.html',
  styleUrls: ['./air-quality-details.component.scss'],
})
export class AirQualityDetailsComponent implements OnInit {
  @Input() idBoxFocus!: string;

  oficina = Oficina;
  boxInfo: BoxInfo = new BoxInfo();
  detallesAire: DetallesAire = new DetallesAire();

  constructor() {}

  ngOnChanges(): void {
    if (this.idBoxFocus != null && this.idBoxFocus != undefined) {
      this.load();
    }
  }
  ngOnInit(): void {}

  ngAfterViewInit() {
    this.load();
  }

  load(): void {
    var boxInfo = this.oficina.find((i) => i.idBox === this.idBoxFocus);

    if (boxInfo != null) {
      this.boxInfo = boxInfo;

      if (boxInfo.detallesAire != null) {
        this.detallesAire = boxInfo.detallesAire;
      }
    }
    this.comprobarWarnings();
  }

  comprobarWarnings() {
    this.warningPM10();
    this.warningPM25();
    this.warningO3();
    this.warningNO2();
    this.warningSO2();
  }

  warningSO2() {
    var warningIconSO2 = document.getElementById(
      this.idBoxFocus + 'warningAzufre'
    );
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
    var warningIconNO2 = document.getElementById(
      this.idBoxFocus + 'warningNitrogeno'
    );

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
    var warningIconO3 = document.getElementById(
      this.idBoxFocus + 'warningOzono'
    );

    if (warningIconO3 != null) {
      if (this.detallesAire.ozono > 180 && this.detallesAire.ozono < 600)
        warningIconO3.style.color = 'red';
      else if (this.detallesAire.ozono > 121 && this.detallesAire.ozono <= 180)
        warningIconO3.style.color = 'orange';
      else warningIconO3.style.color = 'green';
    }
  }

  warningPM10() {
    var warningIconPM10 = document.getElementById(
      this.idBoxFocus + 'warningRespirables'
    );

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
    var warningIconPM25 = document.getElementById(
      this.idBoxFocus + 'warningFinas'
    );

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
