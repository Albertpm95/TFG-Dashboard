export interface Weather {
  ciudad: string;
  hoy: Hoy;
  icono: string;
  prevision_tres_dias: PrevisionTresDias;
}

export interface Hoy {
  temperatura: Temperatura;
  presion_atm: number;
  humedad: number;
  viento: Viento;
  nubes: number;
}

export interface Temperatura {
  temperatura_actual: number;
  sensacion_termica: number;
}

export interface Viento {
  velocidad: number;
  direccion_viento: string;
}

export interface PrevisionTresDias {
  dia_uno: string;
  dia_dos: string;
  dia_tres: string;
}
