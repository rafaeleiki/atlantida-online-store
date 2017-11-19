export interface Address {
  cep: string;
  estado: string;
  cidade: string;
  bairro: string;
  endereco: string;
  numeros: {
    min:string;
    max:string;
  };
}
