export interface OrangoPagConsultTransactionRequest {
  id_trans: number;
  cnpj_loja: string;
  format: string;
  api_key: string;
}

export interface OrangoPagConsultTransactionListRequest {
  cnpj_loja: string;
  format: string;
  api_key: string;

  // optional parameters
  data_inicial?: string;
  data_final?: string;
  estado_transacao?: string;
  tipo_transacao?: string;
  valor_max?: string;
  valor_min?: string;
  numero_cartao?: string;
}

export interface OrangoPagConsultTransactionReturn {
  ID: number;
  estado_transacao: string;
  tipo_pagamento: string;
  data: string;
  valor_total: string;
  numero_cartao: string;
  nome_sacado: string;
  cpf_sacado: string;
}

export interface OrangoPagBoletoTransactionRequest {
  valor_total: string;
  cnpj_loja: string;
  format: string;
  api_key: string;
  tipo_trans: string;
  nome_sacado: string;
  cpf_sacado: string;
}

export interface OrangoPagCreditTransactionRequest {
  valor_total: string;
  cnpj_loja: string;
  format: string;
  api_key: string;
  tipo_trans: string;
  nome_sacado: string;
  cpf_sacado: string;
  numero_cartao: string;
  nome_cartao: string;
  data_expiracao: string;
  codigo_verificaccao: string;
  tipo_cartao: string;
  n_parcelas: string;
  valor_parcela: string;
}

export interface OrangoPagDebitTransactionRequest {
  valor_total: string;
  cnpj_loja: string;
  format: string;
  api_key: string;
  tipo_trans: string;
  nome_sacado: string;
  cpf_sacado: string;
  numero_cartao: string;
  nome_cartao: string;
  data_expiracao: string;
  codigo_verificaccao: string;
  tipo_cartao: string;
}

export interface OrangoPagCreateTransactionReturn {
  msg: string;
  dados: string;
  extra: string;
}

export interface ConsultTransactionRequest {
  id_trans: number;
  store_cnpj: string;
  format: string;
  api_key: string;
}

export interface ConsultTransactionReturn {
  id: number;
  transaction_state: string;
  payment_type: string;
  date: string;
  total_value: string;
  card_number: string;
  withdraw_name: string;
  withdraw_cpf: string;
}

export interface ConsultTransactionListRequest {
  store_cnpj: string;
  format: string;
  api_key: string;

  // Optional parameters
  initial_date?: string;
  final_date?: string;
  transaction_state?: string;
  transaction_type?: string;
  max_value?: string;
  min_value?: string;
  card_number?: string;
}

export interface BoletoTransactionRequest {
  total_value: string;
  store_cnpj: string;
  format: string;
  api_key: string;
  transfer_type: string;
  withdraw_name: string;
  withdraw_cpf: string;
}

export interface CreditTransactionRequest {
  total_value: string;
  store_cnpj: string;
  format: string;
  api_key: string;
  transfer_type: string;
  withdraw_name: string;
  withdraw_cpf: string;
  card_number: string;
  card_name: string;
  expiration_date: string;
  verification_code: string;
  card_type: string;
  n_parcel: string;
  parcel_value: string;
}

export interface DebitTransactionRequest {
  total_value: string;
  store_cnpj: string;
  format: string;
  api_key: string;
  transfer_type: string;
  withdraw_name: string;
  withdraw_cpf: string;
  card_number: string;
  card_name: string;
  expiration_date: string;
  verification_code: string;
  card_type: string;
}

export interface CreateTransactionReturn {
  message: string;
  data: string;
  extra: string;
}
