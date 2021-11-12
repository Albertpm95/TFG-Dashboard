import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BoxInfo } from 'src/app/shared/boxInfo';

@Component({
  selector: 'app-info-extra',
  templateUrl: './info-extra.component.html',
  styleUrls: ['./info-extra.component.scss'],
})
export class InfoExtraComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.load();
  }
  ngAfterViewInit(): void {
    this.load();
  }
  ngOnChanges(): void {}
  load(): void {}
}
