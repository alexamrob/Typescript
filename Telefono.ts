export class Telefono {

    private Tipo: string;
    private Numero: number;

    constructor(tipo: string, numero: number) {
      this.Tipo = tipo;
      this.Numero = numero;
    }

    public get tipo(): string {
        return this.Tipo;
    }
    public set tipo(tipo: string) {
      this.Tipo = tipo;
    }
    public get numero(): number {
        return this.Numero;
    }
    public set numero(numero: number) {
      this.Numero = numero;
    }
  }