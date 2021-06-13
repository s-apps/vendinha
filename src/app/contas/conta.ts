export interface Conta {
  includes(filterValue: Conta): unknown;
  id: number;
  nome: string;
  cpf: string;
  telefone: string;
  data_nascimento: string;
  idade: string;
}
