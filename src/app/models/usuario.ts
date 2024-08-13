import { Cargo } from "./cargo"

export interface Usuario{
    userId?:number,
    nombreCompleto?:string,
    correo?:string,
    contraseña?:string,
    idCargo?:number,
    cargo?:string,
}