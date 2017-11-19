export interface OrangoPagConsultTransactionRequest {
  id_trans: number;
  cnpj_loja: number;
  format: string;
  api_key: string;
  ID: string;
  estado_transacao: string;
  tipo_pagamento: string;
  data: string;
  valor_total: number;
  numero_cartao: number;
  nome_sacado: string;
  cpf_sacado: number;
  data_inicial: number;
  data_final: number;
  tipo_transacao: string;
  valor_max: number;
  valor_min: number;
  transacoes: number;
  data_transacao: number;
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

export interface OrangoPagTransactionReturn {
  msg: string;
  dados: string;
  extra: string;
}

export interface TransactionRequest {
  id_trans: number;
  store_cnpj: number;
  format: string;
  api_key: string;
  id: string;
  transaction_state: string;
  payment_type: string;
  date: string;
  total_value: number;
  card_number: number;
  withdraw_name: string;
  withdraw_cpf: number;
  initial_date: number;
  final_date: number;
  transaction_type: string;
  max_value: number;
  min_value: number;
  transactions: number;
  transaction_date: number;
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

export interface TransactionReturn {
  message: string;
  data: string;
  extra: string;
}









export interface Payments {
  id_trans: number;
  cnpj: number;
  format: string;
  api_key: string;
  id: string;
  transaction_status: string;
  payment_type: string;
  date: string;
  total_amount: number;
  card_number: number;
  withdraw_name: string;
  withdraw_cpf: number;
  inicial_date: number;
  final_date: number;
  transaction_type: string;
  max_amount: number;
  min_amount: number;
  transactions: number;
  transaction_date: number;
  message: string;
  data: string;
  extra: string;
}

