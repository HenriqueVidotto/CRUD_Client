export default interface ICliente {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  endereco: string;
  cidade: string;
  estado: string;
  cep: string;
  data_nascimento: Date;
  criado_em: Date;
  atualizado_em: Date;
}
