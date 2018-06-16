const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AlunoSchema = new Schema({
    nome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    data_nascimento: {
        type: String
    }
});

const Aluno = mongoose.model('Aluno', AlunoSchema);
module.exports = Aluno;