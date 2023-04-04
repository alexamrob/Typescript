import { Direccion } from "./Direccion";
import { Telefono } from "./Telefono";
import { Mail } from "./Mail";

export class Persona {
  private Nombre: string;
  private Apellidos: string;
  private Edad: number;
  private DNI: string;
  private Cumpleaños: string;
  private ColorFavorito: string;
  private Sexo: string;
  private Direcciones: Direccion[] = [];
  private Mails: Mail[] = [];
  private Telefonos: Telefono[] = [];
  private Notas: string;

  constructor(
    nombre: string,
    apellidos: string,
    edad: number,
    dni: string,
    cumpleaños: string,
    colorFavorito: string,
    sexo: string,
    direcciones: Direccion,
    mails: Mail,
    telefonos: Telefono,
    notas: string
  ) {
    this.Nombre = nombre;
    this.Apellidos = apellidos;
    this.Edad = edad;
    this.DNI = dni;
    this.Cumpleaños = cumpleaños;
    this.ColorFavorito = colorFavorito;
    this.Sexo = sexo;
    this.Direcciones.push(direcciones);
    this.Mails.push(mails);
    this.Telefonos.push(telefonos);
    this.Notas = notas;
  }
  public set nombre(value: string) {
    this.Nombre = value;
  }
  public get nombre(): string {
    return this.Nombre;
  }
  public set apellidos(value: string) {
    this.Apellidos = value;
  }
  public get apellidos(): string {
    return this.Apellidos;
  }
  public set edad(value: number) {
    this.Edad = value;
  }
  public get edad(): number {
    return this.Edad;
  }
  public set dni(value: string) {
    this.DNI = value;
  }
  public get dni(): string {
    return this.DNI;
  }
  public set cumpleaños(value: string) {
    this.Cumpleaños = value;
  }
  public get cumpleaños(): string {
    return this.Cumpleaños;
  }
  public set colorFavorito(value: string) {
    this.ColorFavorito = value;
  }
  public get colorFavorito(): string {
    return this.ColorFavorito;
  }
  public get sexo(): string {
    return this.Sexo;
  }
  public set sexo(value: string) {
    this.Sexo = value;
  }
  public get direcciones(): Direccion[] {
    return this.Direcciones;
  }
  public set direcciones(value: Direccion[]) {
    this.Direcciones = value;
  }
  public get mails(): Mail[] {
    return this.Mails;
  }
  public set mails(value: Mail[]) {
    this.Mails = value;
  }
  public get telefonos(): Telefono[] {
    return this.Telefonos;
  }
  public set telefonos(value: Telefono[]) {
    this.Telefonos = value;
  }
  public get notas(): string {
    return this.Notas;
  }
  public set notas(value: string) {
    this.Notas = value;
  }
}
