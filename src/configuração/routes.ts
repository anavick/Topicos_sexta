import { Router } from "express";
import { ProdutoController } from "../controllers/produto.controller";


const router = Router();

//configurar todas as rotas/URLs/endpoints da aplicação
router.post("/", new ProdutoController().cadastrar);
router.get("/")
router.get("/:categoria/:produto")


export {router};