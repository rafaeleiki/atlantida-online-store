export interface OrangoPagConsultTransactionRequest {
  id_trans: number;
  cnpj_loja: number;
  format: string;
  api_key: string;
}

export interface OrangoPagConsultTransactionListRequest {
  cnpj_loja: number;
  format: string;
  api_key: string;

  // optional parameters
  data_inicial: number;
  data_final: number;
  estado_transacao: string;
  tipo_transacao: string;
  valor_max: number;
  valor_min: number;
  numero_cartao: number;
}

export interface OrangoPagConsultTransactionReturn {
  ID: string;
  estado_transacao: string;
  tipo_pagamento: string;
  data: string;
  valor_total: number;
  numero_cartao: number;
  nome_sacado: string;
  cpf_sacado: number;
}

export interface OrangoPagBoletoTransactionRequest {
  valor_total: number;
  cnpj_loja: number;
  format: string;
  api_key: string;
  tipo_trans: number;
  nome_sacado: string;
  cpf_sacado: number;
}

export interface OrangoPagCreditTransactionRequest {
  valor_total: number;
  cnpj_loja: number;
  format: string;
  api_key: string;
  tipo_trans: number;
  nome_sacado: string;
  cpf_sacado: number;
  numero_cartao: number;
  nome_cartao: string;
  data_expiracao: number;
  codigo_verificaccao: number;
  tipo_cartao: string;
  n_parcelas: number;
  valor_parcela: number;
}

export interface OrangoPagDebitTransactionRequest {
  valor_total: number;
  cnpj_loja: number;
  format: string;
  api_key: string;
  tipo_trans: number;
  nome_sacado: string;
  cpf_sacado: number;
  numero_cartao: number;
  nome_cartao: string;
  data_expiracao: number;
  codigo_verificaccao: number;
  tipo_cartao: string;
}

export interface OrangoPagCreateTransactionReturn {
  msg: string;
  dados: string;
  extra: string;
}

export interface ConsultTransactionRequest {
  id_trans: number;
  store_cnpj: number;
  format: string;
  api_key: string;
}

export interface ConsultTransactionReturn {
  id: string;
  transaction_state: string;
  payment_type: string;
  date: string;
  total_value: number;
  card_number: number;
  withdraw_name: string;
  withdraw_cpf: number;
}

export interface ConsultTransactionListRequest {
  store_cnpj: number;
  format: string;
  api_key: string;

  // Optional parameters
  initial_date: number;
  final_date: number;
  transaction_state: string;
  transaction_type: string;
  max_value: number;
  min_value: number;
  card_number: number;
}

export interface BoletoTransactionRequest {
  total_value: number;
  store_cnpj: number;
  format: string;
  api_key: string;
  transfer_type: number;
  withdraw_name: string;
  withdraw_cpf: number;
}

export interface CreditTransactionRequest {
  total_value: number;
  store_cnpj: number;
  format: string;
  api_key: string;
  transfer_type: number;
  withdraw_name: string;
  withdraw_cpf: number;
  card_number: number;
  card_name: string;
  expiration_date: number;
  verification_code: number;
  card_type: string;
  n_parcel: number;
  parcel_value: number;
}

export interface DebitTransactionRequest {
  total_value: number;
  store_cnpj: number;
  format: string;
  api_key: string;
  transfer_type: number;
  withdraw_name: string;
  withdraw_cpf: number;
  card_number: number;
  card_name: string;
  expiration_date: number;
  verification_code: number;
  card_type: string;
}

export interface CreateTransactionReturn {
  message: string;
  data: string;
  extra: string;
}
