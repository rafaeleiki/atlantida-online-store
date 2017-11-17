export interface Check {
  message: string;
  preco: number;
  tempo: number;
}

export interface Response {
  message: string;
  status: string;
}

export interface Activity {
  id: number;
  id_pacote: number;
  descricao: string;
}

export interface ShippingInc {
  id: number;
  nome: string;
}

export interface PlaceInfo {
  id: number;
  cep: number;
  numero: number;
  estado: string;
  cidade: string;
  endereco: string;
}

export interface Store {
  id: number;
  nome: string;
  email: string;
  id_endereco: number;
}

export interface Delivery {
  id: number;
  id_transportadora: number;
  id_site: number;
  id_partida: number;
  id_destino: number;
  status: number;
  destinatario: string;
  atividades: [Activity];
  transportadora: ShippingInc;
  partida: PlaceInfo;
  destino: PlaceInfo;
  site: {
    id: Store;
  }
}

export interface PackageStatus {
  id: number;
  status: number;
  status_atual: {
    id: number;
    id_pacote: number;
    descricao: string;
    created: string;
  }
}
