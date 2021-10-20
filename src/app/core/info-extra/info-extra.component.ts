import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-extra',
  templateUrl: './info-extra.component.html',
  styleUrls: ['./info-extra.component.scss'],
})
export class InfoExtraComponent implements OnInit {
  @Input() idOficina!: string;
  abierto = false;

  constructor() {
    this.idOficina = 'norte';
  }

  ngOnInit(): void { }
}
