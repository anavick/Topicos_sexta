//importando arquivos/bibliotecas 
import express, { Request, Response } from 'express';
import { Produto } from './entidades/produto.model';

//const = constante
//let = variavel

//Criando um servidor web através do express
const app = express();

//criando variavel do tipo Produto
let produto: Produto = new Produto();

//Configurar a aplicação para receber dados no formato JSON
app.use(express.json());

//criando array de produtos

let produtos : Produto[] = [];

//Configurando uma requisição com o método GET para 
//a raiz da aplicação 
//tipando
app.get("/", function( request : Request, response : Response ) : Response{
   //
   return response.status(200).json({ message : "ok", dados : produtos});
});

//EXERCÍCIO - Criar uma nova rota/funcionalidade para receber uma 
//informação pela URL da requição
app.get("/:categoria/:produto", ( request : Request, response : Response ) : Response => {
    // const produto = request.params.produto;
    // const categoria = request.params.categoria;
    const { produto, categoria } = request.params;
    
    return response.status(200).json({ categoria, produto });
});

//EXERCÍCIO - Criar uma nova rota/funcionalidade com método POST 
//para receber uma informação pelo corpo da requisição
//POSTMAN, INSOMNIA e RESTCLIENT
app.post("/", (request : Request, response : Response ) : Response => {
    //criando objetos e passando informaçoes pelo corpo da requisição
    let produto : Produto = new Produto();
    

    //atribuindo valor as variaveis criadas acima
    produto.nome = request.body.nome;
    produto.preco = request.body.preco; 

    //adicionando os produtos no array
    produtos.push(produto);

    return response.status(201).json
    (
        { mensagem : "Produto cadastrado!", dados : produtos }
    );
});

//ATIVIDADE PARA O DIA 28/04:
    //implementar as funcionalidades no vetor de busca, alteraçao e remoção
    //implementar o banco na apliacação (Prisma)




//O comando listen roda a aplicação
app.listen(3000, function(){
    console.clear();
    console.log("Aplicação rodando na porta 3000");
});

