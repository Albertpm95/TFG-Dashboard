import { detallesAire } from "./detallesAire"

export interface BoxInfo {
    idBox: string
    tituloBox: string
    temperaturaActual: number
    humedadActual: number
    ruidoActual: number
    luminosidadActual: number
    calidadAireActual: "muy mala" | "mala" | "regular" | "buena" | "muy buena" | "sin datos"
    detallesAire: detallesAire
}