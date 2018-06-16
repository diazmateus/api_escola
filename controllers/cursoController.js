var Curso = require("../models/curso");

exports.save = function (titulo, descricao, callback) {
    new Curso({
        'titulo': titulo,
        'descricao': descricao
    }).save(function (error, curso){
        if(error){
            callback({error: 'Não foi possivel inserir'});
        } else{
            callback(curso);
        }
    })
};

exports.list = function (callback) {
    Curso.find({}, function (error, curso) {
        if(error){
            callback({error: 'Não foi possivel listar'});
        } else{
            callback(curso);
        }
    })

};

exports.delete = function (id, callback) {
    Curso.findById(id, function (error, curso) {
        if(error){
            callback({error: 'Não foi possivel deletar'});
        } else{
            curso.remove(function (error) {
                if(!error){
                    callback({resposta: "Produto excluido com sucesso"})
                }
            })
        }
    })
}

exports.find = function(id, callback){
    Curso.find({"_id": id}, function (error, curso) {
        if(error){
            callback({error: 'Não foi possivel listar'});
        } else{
            callback(curso);
        }
    })

}


exports.update = function (id, titulo, descricao, callback) {
    Curso.updateOne({"_id": id }, { $set: {
            'titulo': titulo,
            'descricao': descricao
        }
    }, function (error, curso){
        if(error){
            callback({error: 'Não foi possivel editar'});
        } else{
            callback(curso);
        }
    })
};