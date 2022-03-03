import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Feedback } from 'src/app/shared/Feedback';
import { FeedbackService } from 'src/app/core/oficina/feedback.service';

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

  feedbacksNorte: Array<Feedback> = [];
  feedbacksPlaza: Array<Feedback> = [];
  feedbacksSur: Feedback[] = [];
  feedbacksEste: Feedback[] = [];
  feedbacksOeste: Feedback[] = [];

  completado = false;

  constructor(private feedbackService: FeedbackService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.load();
  }

  load(): void {
    this.feedbackService.getFeedback().subscribe((respuesta: Feedback[]) => {
      if (respuesta != null) {
        for (let feed of respuesta) {
          switch (feed.ubicacion) {
            case 'Box Norte':
              this.feedbacksNorte.push(feed);
              break;
            case 'Box Este':
              this.feedbacksEste.push(feed);
              break;
            case 'Plaza':
              this.feedbacksPlaza.push(feed);
              break;
            case 'Box Sur':
              this.feedbacksSur.push(feed);
              break;
            case 'Box Oeste':
              this.feedbacksOeste.push(feed);
              break;
            default:
              break;
          }
        }
        this.completado = true;
      }
    });
  }
}
