const express = require('express');

//criando um servidor web atraves do express
const app = express();

//configurar a aplicação para receber dados no formato json
app.use(express.json());

//configurando uma requisição com o metodo get para a raiz da aplicação
app.get("/", function(req,response){
    console.log("primeira requisição recebida");
    response.status(200).json({message: "resposta enviada em json"});
});

//podemos ter dois metodos com o mesmo nome mas a rota nao pode ser a mesma, tem que diferenciar

//metodo get pega os dados
app.get("/:categoria/:produto", (request, response) =>{
    //pegando os parametros e colocando em uma variavel, para futuramente fazer uso
    //const cetagoria = request.params.categoria;
    //const produto = request.params.produto;

    //outra forma de pegar parametros e colocar em uma variavel
    const {categoria, produto} = request.params
    response.status(200).json({categoria, produto});
    //console.log(categoria, produto);
});

//metodo post salva os dados 
app.post("/", (request, response) => {
    console.log(request.body);
    //retornando um status e uma mensagem em json 
    response.status(201).json
    (
        {message: " categoria cadastrada! ", categoria : request.body}
    );
});  

//o comando listem roda a aplicação
app.listen(3000, function(){
    console.clear();
    console.log("Aplicação rodando na porta 3000");
});