import { Request, Response } from "express";
import { Produto } from "../models/produto.model";

let produtos: Produto[] = [];

export class ProdutoController {
  cadastrar(request: Request, response: Response): Response {
    //criando objetos e passando informaçoes pelo corpo da requisição
    let produto: Produto = new Produto();

    //atribuindo valor as variaveis criadas acima
    produto.nome = request.body.nome;
    produto.preco = request.body.preco;

    //adicionando os produtos no array
    produtos.push(produto);

    return response
      .status(201)
      .json({ mensagem: "Produto cadastrado!", dados: produtos });
  }
}
