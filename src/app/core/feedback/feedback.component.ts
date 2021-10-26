import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent implements OnInit {
  sensacionTermica!: number;
  comfortActustico!: number;
  comfortLuminico!: number;

  constructor() {}

  ngOnInit(): void {}

  enviar() {
    console.log(
      'Sensacion termica ' +
        this.sensacionTermica +
        '\nComfort acustico ' +
        this.comfortActustico +
        '\nComfort luminico ' +
        this.comfortLuminico
    );
  }
}
