import { BoxInfo } from './boxInfo';

export const Oficina: BoxInfo[] = [
  {
    idBox: 'boxOeste',
    tituloBox: 'Oficina Oeste',
    calidadAireActual: 'muy buena',
    humedadActual: 10,

    ruidoActual: 10,
    temperaturaActual: 10,
    detallesAire: {
      dioxidoAzufre: 0,
      dioxidoNitrogeno: 110,
      ozono: 120,
      particulasFinas: 130,
      particulasRespirables: 140,
    },
  },
  {
    idBox: 'boxNorte',
    tituloBox: 'Oficina Norte',
    calidadAireActual: 'mala',
    humedadActual: 22,

    ruidoActual: 33,
    temperaturaActual: 23,
    detallesAire: {
      dioxidoAzufre: 101,
      dioxidoNitrogeno: 223,
      ozono: 33,
      particulasFinas: 230,
      particulasRespirables: 240,
    },
  },
  {
    idBox: 'boxPlaza',
    tituloBox: 'Plaza',
    calidadAireActual: 'buena',
    humedadActual: 50,

    ruidoActual: 30,
    temperaturaActual: 30,
    detallesAire: {
      dioxidoAzufre: 201,
      dioxidoNitrogeno: 200,
      ozono: 100,
      particulasFinas: 600,
      particulasRespirables: 11,
    },
  },
  {
    idBox: 'boxSur',
    tituloBox: 'Oficina Sur',
    calidadAireActual: 'sin datos',
    humedadActual: 50,
    ruidoActual: 30,
    temperaturaActual: 30,
    detallesAire: {
      dioxidoAzufre: 351,
      dioxidoNitrogeno: 200,
      ozono: 100,
      particulasFinas: 600,
      particulasRespirables: 1000,
    },
  },
  {
    idBox: 'boxEste',
    tituloBox: 'Oficina Este',
    calidadAireActual: 'regular',
    humedadActual: 50,
    ruidoActual: 30,
    temperaturaActual: 30,
    detallesAire: {
      dioxidoAzufre: 501,
      dioxidoNitrogeno: 400,
      ozono: 100,
      particulasFinas: 800,
      particulasRespirables: 1200,
    },
  },
];
