import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-oficina',
  templateUrl: './oficina.component.html',
  styleUrls: ['./oficina.component.scss'],
})
export class OficinaComponent implements OnInit {
  @Output() boxFocus = new EventEmitter<string>();

  norte = {
    id: 'boxNorte', nombre: 'OFICINA NORTE'
  };
  sur = {
    id: 'boxSur', nombre: 'OFICINA SUR'
  };
  este = {
    id: 'boxEste', nombre: 'OFICINA ESTE'
  };
  oeste = {
    id: 'boxOeste', nombre: 'OFICINA OESTE'
  };
  plaza = {
    id: 'boxPlaza', nombre: 'PLAZA'
  };

  constructor() { }

  ngOnInit(): void { }

  abrirDetalles(id: string) {
    const boxes = document.getElementsByClassName('container-box');

    this.cambiarFocus(id);

    for (var i = 0; i < boxes.length; i++) {
      if (id != boxes[i].id) {
        let box = document.getElementById(boxes[i].id);
        if (box != null)
          box.style.backgroundColor = 'gray';
      }
      else {
        let boxFocus = document.getElementById(id);
        if (boxFocus != null)
          boxFocus.style.backgroundColor = 'white';
      }

    }
  }
  cambiarFocus(id: string) {
    this.boxFocus.emit(id);
  }
}
