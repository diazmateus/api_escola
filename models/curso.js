const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CursoSchema = new Schema({
    titulo: {
        type: String,
        require: true
    },
    descricao: {
        type: String
    }
});

const Curso = mongoose.model('Curso', CursoSchema);
module.exports = Curso;