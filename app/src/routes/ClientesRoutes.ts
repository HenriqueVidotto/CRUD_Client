import express from "express";
import {
  createCliente,
  deleteCliente,
  editCliente,
  getAllClientes,
} from "../controllers/ClientesController";

const router = express.Router();

router.get("/clientes", getAllClientes);
router.post("/clientes/create", createCliente);
router.post("/clientes/edit/:id", editCliente);
router.post("/clientes/delete/:id", deleteCliente);

export default router;
