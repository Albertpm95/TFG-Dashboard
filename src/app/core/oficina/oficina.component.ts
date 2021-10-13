import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oficina',
  templateUrl: './oficina.component.html',
  styleUrls: ['./oficina.component.scss'],
})
export class OficinaComponent implements OnInit {
  norte = 'Oficina norte';
  sur = 'Oficina sur';
  este = 'Oficina este';
  oeste = 'Oficina oeste';
  plaza = 'Plaza';
  constructor() {}

  ngOnInit(): void {}
}
