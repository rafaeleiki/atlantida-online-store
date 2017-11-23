export interface CreateClientRequest {
  username: string;
  name: string;
  password: string;
  phone: string;
  cpf: string;
  email: string;
}

export interface CreateClientResponse {
  payload: {
    id: string;
    token: string;
  }
}

export interface AuthenticationRequest {
  cpf: string;
  password: string;
}

export interface AuthenticationResponse {
  payload?: {
    id: string;
    token: string;
  }
  error_code?: string;
}

export interface UserResponse {
  payload: {
    name: string;
    phone: string;
    password: string;
    cpf: string;
    email: string;
    username: string;
    id: string;
  }
}
