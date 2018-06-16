const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MatriculaSchema = new Schema({
    aluno: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Aluno',
        require: true
    },
    curso: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Curso',
        require: true
    },
    data: {
        type: Date,
        default: Date.now
    }
});

const Matricula = mongoose.model('Matricula', MatriculaSchema);
module.exports = Matricula;