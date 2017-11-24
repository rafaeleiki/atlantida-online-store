// Param structures
export interface GetPriceDateParam {
  destino_cep: number;
  destino_numero: number;
  destino_estado: string;
  destino_cidade: string;
  destino_endereco: string;
  volume: number;
}

export interface PostPackageParam {
  destinatario: string;
  destino_cep: number;
  destino_numero: number;
  destino_estado: string;
  destino_cidade: string;
  destino_endereco: string;
  volume: number;
}


// Return structures
export interface GetAllPackagesRes {
  id: number;
  id_transportadora: number;
  id_site: number;
  id_partida: number;
  id_destino: number;
  status: number;
  preco: number;
  destinatario: string;
  created: string;
  modified: string
}

export interface GetPriceDateRes {
  message: string;
  preco: number;
  tempo: number;
}

export interface PostPackageRes {
  message: string;
  id: number;
  preco: number;
}

export interface CancelPackageRes {
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

export interface GetStatusPackageRes {
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
  site: Store;
}
