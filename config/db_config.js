var mongoose = require('mongoose');

var urlString = 'mongodb://super:senha1702@ds163300.mlab.com:63300/thy8795l';
// var urlString = 'mongodb://localhost/API_T';

mongoose.connect(urlString, function (erro, res){
    if (erro){
        console.log("Falha ao conectar")
    } else{
        console.log("Conectado com sucesso.")
    }
});