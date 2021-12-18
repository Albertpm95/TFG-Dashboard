import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GoogleSheetsDbService } from 'ng-google-sheets-db';
import { Observable } from 'rxjs';
import { Feedback } from 'src/app/shared/Feedback';
import { environment } from 'src/environments/environment';

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

  constructor(private googleSheetsDbService: GoogleSheetsDbService) {}

  ngOnInit(): void {
    /*this.characters$ = this.googleSheetsDbService.getActive<Feedback>(
      environment.characters.spreadsheetId,
      environment.characters.worksheetName,
      feedbackMapping,
      'Active'
    );*/
  }

  ngAfterViewInit() {
    this.load();
  }

  load(): void {
    // 1NwwotXHGmG_8xYOJ5h52hVl0sWZSBh-9YOb93JEpF6A
    // SheetDB API Call https://sheetdb.io/api/v1/nc79grc6tr3om Limite alcanzado
    fetch('https://sheetdb.io/api/v1/nc79grc6tr3om')
      .then((respuesta) => respuesta.json())
      .then((data) => {
        if (data != null && data != undefined) {
          console.log(data);
          this.feedbacks = data;
          this.horaActual = new Date();
          for (let feedback of this.feedbacks) {
            let date = new Date(feedback.Timestamp);
            let diff = (this.horaActual.getTime() - date.getTime()) / 3600000;
            console.log(this.horaActual);
            console.log(date);
            if (diff < 24) {
              switch (feedback.Ubicacion) {
                case 'Box Oeste':
                  this.feedbacksOeste.push(feedback);
                  break;
                case 'Box Norte':
                  this.feedbacksNorte.push(feedback);
                  break;
                case 'Plaza':
                  this.feedbacksPlaza.push(feedback);
                  break;
                case 'Box Sur':
                  this.feedbacksSur.push(feedback);
                  break;
                case 'Box Este':
                  this.feedbacksEste.push(feedback);
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
