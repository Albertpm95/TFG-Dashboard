import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
})
export class PrincipalComponent implements OnInit {
  constructor() {}

  idBoxFocus = '';
  cerrado!: boolean;

  ngOnInit(): void {}

  actualizarInfoExtra(id: string): void {
    this.idBoxFocus = id;
    this.cerrado = false;
  }
  cerrarInfoExtra(cerrado: boolean): void {
    this.cerrado = cerrado;
  }
}
