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


//O comando listen roda a aplicação
app.listen(3000, function(){
    console.clear();
    console.log("Aplicação rodando na porta 3000");
});





