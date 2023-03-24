const express = require('express');
//criando um servidor web atraves do express
const app = express();

//configurando uma requisição com o metodo get para a raiz da aplicação
app.get("/", function(req,response){
    console.log("primeira requisição recebida");
    response.status(200).json({message: "resposta enviada em json"});
});

//o comando listem roda a aplicação
app.listen(3000, function(){
    console.clear();
    console.log("Aplicação rodando na porta 3000");
});