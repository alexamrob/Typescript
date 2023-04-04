export class Mail {
    
    private Tipo: string;
    private Direccion: string;

    constructor(tipo: string, direccion: string) {
      this.Tipo = tipo;
      this.Direccion = direccion;
    }

    public get tipo(): string {
      return this.Tipo;
    }
    public set tipo(value: string) {
        this.Tipo = value;
    }
    public get direccion(): string {
      return this.Direccion;
    }
    public set direccion(value: string) {
        this.Direccion = value;
      }
  }