import { getAll, createClientes } from "../models/ClientModel";

export const getAllClientes = async (req: any, res: any) => {
  const reste = await getAll();

  return res.status(200).json(reste);
};

export const createCliente = async (req: any, res: any) => {
  const createdCliente = await createClientes(req.body);

  return res.status(200).json([createdCliente]);
};
