import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oficina',
  templateUrl: './oficina.component.html',
  styleUrls: ['./oficina.component.scss'],
})
export class OficinaComponent implements OnInit {
  norte = 'norte';
  sur = 'sur';
  este = 'este';
  oeste = 'oeste';
  plaza = 'plaza';
  constructor() {}

  ngOnInit(): void {}
}
