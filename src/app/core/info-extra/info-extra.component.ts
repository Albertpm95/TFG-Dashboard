import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BoxInfo } from 'src/app/shared/boxInfo';
import { Oficina } from 'src/app/shared/mockInfo';

@Component({
  selector: 'app-info-extra',
  templateUrl: './info-extra.component.html',
  styleUrls: ['./info-extra.component.scss'],
})
export class InfoExtraComponent implements OnInit {
  @Input() idBoxFocus!: string;
  @Output() cerrado = new EventEmitter<boolean>();
  oficina = Oficina;
  boxInfo: BoxInfo = new BoxInfo();

  panelCerrado = true;

  temperaturaExteriorActual = 34;
  temperaturaActualAC = 27;
  humedadRelativaExterior = 20;

  constructor() {}

  ngOnInit(): void {
    this.load();
  }
  ngAfterViewInit(): void {
    this.load();
  }
  ngOnChanges(): void {
    if (this.idBoxFocus != null && this.idBoxFocus != '') {
      this.panelCerrado = false;
      this.load();
    }
  }
  load(): void {
    let boxInfoTemp = this.oficina.find((i) => i.idBox === this.idBoxFocus);

    if (boxInfoTemp != null) {
      this.boxInfo = boxInfoTemp;
    }
  }

  cerrar(): void {
    this.panelCerrado = true;
    this.cerrado.emit(this.panelCerrado);
  }
}
