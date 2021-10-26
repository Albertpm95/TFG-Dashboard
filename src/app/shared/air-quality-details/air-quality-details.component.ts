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
      this.comprobarWarnings();
    }
  }
  ngOnInit(): void {}

  ngAfterViewInit() {
    if (this.idBoxFocus != null && this.idBoxFocus != undefined) {
      this.load();
    }
  }

  load(): void {
    var boxInfo = this.oficina.find((i) => i.idBox === this.idBoxFocus);

    if (boxInfo != undefined) {
      this.boxInfo = boxInfo;

      if (boxInfo.detallesAire != undefined) {
        this.detallesAire = boxInfo.detallesAire;
      }
    }
  }

  comprobarWarnings(): void {
    this.warningPM10();
    this.warningPM25();
    this.warningO3();
    this.warningNO2();
    this.warningSO2();
  }

  warningSO2() {
    var warningIcon = document.getElementById(
      this.idBoxFocus + 'warningAzufre'
    );

    if (warningIcon != null) {
      console.log(warningIcon);
      if (
        this.detallesAire.dioxidoAzufre > 50 &&
        this.detallesAire.dioxidoAzufre < 1200
      ) {
        warningIcon.style.display = 'inline';
        warningIcon.style.color = 'red';
      } else if (
        this.detallesAire.dioxidoAzufre >= 36 &&
        this.detallesAire.dioxidoAzufre <= 50
      ) {
        warningIcon.style.display = 'inline';
        warningIcon.style.color = 'orange';
      } else warningIcon.style.visibility = 'hidden';
    }
  }
  warningNO2() {
    var warningIcon = document.getElementById(
      this.idBoxFocus + 'warningNitrogeno'
    );

    if (warningIcon != null) {
      console.log(warningIcon);
      if (
        this.detallesAire.dioxidoNitrogeno > 200 &&
        this.detallesAire.dioxidoNitrogeno <= 1000
      ) {
        warningIcon.style.display = 'inline';
        warningIcon.style.color = 'red';
      } else if (
        this.detallesAire.dioxidoNitrogeno > 100 &&
        this.detallesAire.dioxidoNitrogeno <= 200
      ) {
        warningIcon.style.display = 'inline';
        warningIcon.style.color = 'orange';
      } else warningIcon.style.visibility = 'hidden';
    }
  }

  warningO3() {
    var warningIcon = document.getElementById(this.idBoxFocus + 'warningOzono');

    if (warningIcon != null) {
      console.log(warningIcon);
      if (this.detallesAire.ozono > 180 && this.detallesAire.ozono < 600) {
        warningIcon.style.display = 'inline';
        warningIcon.style.color = 'red';
      } else if (
        this.detallesAire.ozono > 121 &&
        this.detallesAire.ozono <= 180
      ) {
        warningIcon.style.display = 'inline';
        warningIcon.style.color = 'orange';
      } else warningIcon.style.visibility = 'hidden';
    }
  }

  warningPM10() {
    var warningIcon = document.getElementById(
      this.idBoxFocus + 'warningRespirables'
    );
    console.log(this.idBoxFocus + 'warningRespirables');

    if (warningIcon != null) {
      console.log(warningIcon);
      if (
        this.detallesAire.particulasRespirables > 50 &&
        this.detallesAire.particulasRespirables < 1200
      ) {
        warningIcon.style.display = 'inline';
        warningIcon.style.color = 'red';
      } else if (
        this.detallesAire.particulasRespirables >= 36 &&
        this.detallesAire.particulasRespirables <= 50
      ) {
        warningIcon.style.display = 'inline';
        warningIcon.style.color = 'orange';
      } else warningIcon.style.visibility = 'hidden';
    }
  }

  warningPM25() {
    var warningIcon = document.getElementById(this.idBoxFocus + 'warningFinas');

    if (warningIcon != null) {
      if (
        this.detallesAire.particulasFinas > 25 &&
        this.detallesAire.particulasFinas < 800
      ) {
        warningIcon.style.display = 'inline';
        warningIcon.style.color = 'red';
      } else if (
        this.detallesAire.particulasFinas >= 21 &&
        this.detallesAire.particulasFinas <= 25
      ) {
        warningIcon.style.display = 'inline';
        warningIcon.style.color = 'orange';
      } else warningIcon.style.visibility = 'hidden';
    }
    return warningIcon;
  }
}
