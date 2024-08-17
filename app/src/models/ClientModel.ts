import ICliente from "../Interfaces/ClienteInterface";
import connection from "./Connection";

export const getAll = async (): Promise<ICliente[]> => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM clientes", (err: any, result: any[]) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

export const createClientes = async (cliente: ICliente): Promise<ICliente> => {
  console.log(cliente);
  return new Promise((resolve, reject) => {
    const query =
      "insert into clientes(nome,email,telefone,endereco,cidade,estado,cep,data_nascimento) values (?,?,?,?,?,?,?,?)";

    connection.query(
      query,
      [
        cliente.nome,
        cliente.email,
        cliente.telefone,
        cliente.endereco,
        cliente.cidade,
        cliente.estado,
        cliente.cep,
        cliente.data_nascimento,
      ],
      (err: any, result: any) => {
        if (err) {
          reject(err);
        } else {
          console.log(result);
          resolve(result);
        }
      }
    );
  });
};
