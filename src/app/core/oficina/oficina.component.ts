import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-oficina',
  templateUrl: './oficina.component.html',
  styleUrls: ['./oficina.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OficinaComponent implements OnInit {
  norte = {
    id: 'boxNorte',
    nombre: 'OFICINA NORTE',
  };

  sur = {
    id: 'boxSur',
    nombre: 'OFICINA SUR',
  };

  este = {
    id: 'boxEste',
    nombre: 'OFICINA ESTE',
  };

  oeste = {
    id: 'boxOeste',
    nombre: 'OFICINA OESTE',
  };

  plaza = {
    id: 'boxPlaza',
    nombre: 'PLAZA',
  };

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {}
}
