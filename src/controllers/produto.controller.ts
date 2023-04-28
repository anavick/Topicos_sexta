import { Request, Response } from "express";
import { Produto } from "../models/produto.model";

let produtos: Produto[] = [];

export class ProdutoController {
  listar(request: Request, response: Response): Response {
    return response.status(200).json({ message: "ok", dados: produtos });
  }

  buscar(request: Request, response: Response): Response {
    const { nome } = request.params;

    //pode ser feito com qualquaer laço.
    for (let produtoCadastrado of produtos) {
      if (produtoCadastrado.nome == nome) {
        return response.status(200).json({ produtoCadastrado });
      }
    }
    return response.status(404).json({ message: "Produto nao encontrado" });
  }

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
