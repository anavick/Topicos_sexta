//importando arquivos/bibliotecas 
import express from 'express';
import { router } from './configuração/routes';


//Criando um servidor web através do express
const app = express();

app.use(express.json());
app.use(router);

//criando variavel do tipo Produto
//let produto: Produto = new Produto();

//Configurar a aplicação para receber dados no formato JSON
app.use(express.json());







//const = constante
//let = variavel


//criando array de produtos

//let produtos : Produto[] = [];

// //Configurando uma requisição com o método GET para 
// //a raiz da aplicação 
// //tipando
// app.get("/", function( request : Request, response : Response ) : Response{
//    //
//    return response.status(200).json({ message : "ok", dados : produtos});
// });

// //EXERCÍCIO - Criar uma nova rota/funcionalidade para receber uma 
// //informação pela URL da requição
// app.get("/:categoria/:produto", ( request : Request, response : Response ) : Response => {
//     // const produto = request.params.produto;
//     // const categoria = request.params.categoria;
//     const { produto, categoria } = request.params;
    
//     return response.status(200).json({ categoria, produto });
// });

//O comando listen roda a aplicação
app.listen(3000, function(){
    console.clear();
    console.log("Aplicação rodando na porta 3000");
});


