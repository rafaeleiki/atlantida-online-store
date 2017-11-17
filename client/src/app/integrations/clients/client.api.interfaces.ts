export interface CreateClientRequest {
  payload: {
    username: string;
    name: string;
    password: string;
    phone: string;
    CPF: string;
    email: string;
  }
}

export interface CreateClientResponse {
  payload: {
    id: string;
    token: {
      id: string;
      cpf: string;
      password: string;
    }
  }
}
