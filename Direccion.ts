export class Direccion {
    
    private Calle: string;
    private Numero: number;
    private Piso: number;
    private Letra: string;
    private CodigoPostal: number;
    private Poblacion: string;
    private Provincia: string;

    constructor(calle: string, numero: number, piso: number, letra: string, codigoPostal: number, poblacion: string, provincia: string) {
      this.Calle = calle;
      this.Numero = numero;
      this.Piso = piso;
      this.Letra = letra;
      this.CodigoPostal = codigoPostal;
      this.Poblacion = poblacion;
      this.Provincia = provincia;
    }

    public get calle(): string {
      return this.Calle;
    }
    public set calle(value: string) {
      this.Calle = value;
    }
    public get numero(): number {
      return this.Numero;
    }
    public set numero(value: number) {
      this.Numero = value;
    }
    public get piso(): number {
        return this.Piso;
    }
      public set piso(value: number) {
        this.Piso = value;
    }
    public get letra(): string {
      return this.Letra;
    }
    public set letra(value: string) {
      this.Letra = value;
    }
    public get codigoPostal(): number {
      return this.CodigoPostal;
    }
    public set codigoPostal(value: number) {
      this.CodigoPostal = value;
    }
    public get poblacion(): string {
      return this.Poblacion;
    }
    public set poblacion(value: string) {
      this.Poblacion = value;
    }
    public get provincia(): string {
      return this.Provincia;
    }
    public set provincia(value: string) {
      this.Provincia = value;
    }
  }