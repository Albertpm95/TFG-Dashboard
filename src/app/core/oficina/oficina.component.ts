import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { Feedback } from 'src/app/shared/Feedback';
import { FeedbackService } from 'src/app/feedback.service';
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

  feedbacks: any[][] = [];
  feedbacksNorte: Feedback[] = [];
  feedbacksPlaza: Feedback[] = [];
  feedbacksSur: Feedback[] = [];
  feedbacksEste: Feedback[] = [];
  feedbacksOeste: Feedback[] = [];
  feedbackTemp = new Feedback();
  completado = false;
  horaActual!: Date;

  constructor(private feedbackService: FeedbackService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.load();
  }

  load(): void {
    this.feedbackService.getFeedback().subscribe((respuesta) => {
      if (respuesta != null) {
        this.feedbacks[1] = respuesta;
        this.horaActual = new Date();
        

        for (let feed of this.feedbacks[1]) {
          let horaTemp = Date.parse(feed[4]);

          let ms = this.horaActual.getTime() - horaTemp;

          let H = ms / 3600000;

          if (Math.round(H) <= 3.5) {
            switch (feed[0]) {
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
        }
        this.completado = true;
      }
    });
  }
}
