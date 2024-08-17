import express from "express";
import {
  createCliente,
  getAllClientes,
} from "../controllers/ClientesController";

const router = express.Router();

router.get("/clientes", getAllClientes);
router.post("/clientes/create", createCliente);

export default router;
