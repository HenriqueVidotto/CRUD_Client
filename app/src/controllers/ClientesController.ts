import {
  getAll,
  createClientes,
  EditClientes,
  DeleteClientes,
} from "../models/ClientModel";

export const getAllClientes = async (req: any, res: any) => {
  const reste = await getAll();

  return res.status(200).json(reste);
};

export const createCliente = async (req: any, res: any) => {
  const createdCliente = await createClientes(req.body);

  return res.status(200).json([createdCliente]);
};
export const editCliente = async (req: any, res: any) => {
  const id = req.params.id;
  const createdCliente = await EditClientes(id, req.body);

  return res.status(200).json([createdCliente]);
};

export const deleteCliente = async (req: any, res: any) => {
  const { id } = req.params;
  const createdCliente = await DeleteClientes(id);

  return res.status(200).json([createdCliente]);
};
