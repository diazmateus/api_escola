var mongoose = require('mongoose');

var urlString = 'mongodb://localhost/API_T';

mongoose.connect(urlString, function (erro, res){
    if (erro){
        console.log("Falha ao conectar")
    } else{
        console.log("Conectado com sucesso.")
    }
});