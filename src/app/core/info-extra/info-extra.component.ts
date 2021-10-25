import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-extra',
  templateUrl: './info-extra.component.html',
  styleUrls: ['./info-extra.component.scss'],
})
export class InfoExtraComponent implements OnInit {
  @Input() idBoxFocus!: string;

  temperaturaExteriorActual = 34;
  temperaturaActualAC = 27;
  humedadRelativaExterior = 20;
  boxFocused = "";

  cerrado = false;

  constructor() {

  }

  ngOnInit(): void { }

  cerrar(): void {
    this.cerrado = true;
  }

  ngOnChanges(): void {
    this.boxFocused = this.idBoxFocus;
  }
}
