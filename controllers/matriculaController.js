var Matricula = require("../models/matricula");

exports.save = function (aluno, curso, callback) {
    new Matricula({
        'aluno': aluno,
        'curso': curso
    }).save(function (error, curso){
        if(error){
            callback({error: 'Não foi possivel inserir'});
        } else{
            callback(curso);
        }
    })
};

exports.list = function (callback) {
    Matricula.find({}, function (error, matricula) {
        if(error){
            callback({error: 'Não foi possivel listar'});
        } else{
            callback(matricula);
        }
    }).populate('aluno').populate('curso')

};

exports.delete = function (id, callback) {
    Matricula.findById(id, function (error, matricula) {
        if(error){
            callback({error: 'Não foi possivel deletar'});
        } else{
            matricula.remove(function (error) {
                if(!error){
                    callback({resposta: "Matricula excluido com sucesso"})
                }
            })
        }
    })
}

exports.find = function(id, callback){
    Matricula.find({"_id": id}, function (error, matricula) {
        if(error){
            callback({error: 'Não foi possivel listar'});
        } else{
            callback(matricula);
        }
    }).populate('aluno').populate('curso')

}


exports.update = function (id, aluno, curso, callback) {
    Matricula.updateOne({"_id": id }, { $set: {
            'aluno': aluno,
            'curso': curso
        }
    }, function (error, matricula){
        if(error){
            callback({error: 'Não foi possivel editar'});
        } else{
            callback(matricula);
        }
    })
};