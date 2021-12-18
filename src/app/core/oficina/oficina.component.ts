import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { Feedback } from 'src/app/shared/Feedback';

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

  feedbacks!: Feedback[];
  feedbacksNorte: Feedback[] = [];
  feedbacksPlaza: Feedback[] = [];
  feedbacksSur: Feedback[] = [];
  feedbacksEste: Feedback[] = [];
  feedbacksOeste: Feedback[] = [];
  completado = false;
  horaActual!: Date;

  characters$!: Observable<Feedback[]>;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.load();
  }

  load(): void {}
}
