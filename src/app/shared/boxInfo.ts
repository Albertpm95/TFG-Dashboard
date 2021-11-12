import { DetallesAire } from './detallesAire';

export class BoxInfo {
  idBox!: string;
  tituloBox!: string;
  temperaturaActual!: number;
  humedadActual!: number;
  ruidoActual!: number;

  calidadAireActual!:
    | 'muy mala'
    | 'mala'
    | 'regular'
    | 'buena'
    | 'muy buena'
    | 'sin datos';
  detallesAire!: DetallesAire;
}
