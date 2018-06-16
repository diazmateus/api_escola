var Aluno = require("../models/aluno");

exports.save = function (nome, email, data_nascimento, callback) {
    new Aluno({
        'nome': nome,
        'email': email,
        'data_nascimento': data_nascimento
    }).save(function (error, aluno){
        if(error){
            callback({error: 'Não foi possivel inserir'});
        } else{
          callback(aluno);
        }
    })
};

exports.list = function (callback) {
    Aluno.find({}, function (error, aluno) {
        if(error){
            callback({error: 'Não foi possivel listar'});
        } else{
            callback(aluno);
        }
    })

};

exports.delete = function (id, callback) {
    Aluno.findById(id, function (error, aluno) {
        if(error){
            callback({error: 'Não foi possivel deletar'});
        } else{
            aluno.remove(function (error) {
                if(!error){
                    callback({resposta: "Produto excluido com sucesso"})
                }
            })
        }
    })
}

exports.find = function(id, callback){
    Aluno.find({"_id": id}, function (error, aluno) {
        if(error){
            callback({error: 'Não foi possivel listar'});
        } else{
            callback(aluno);
        }
    })

}


exports.update = function (id, nome, email, data_nascimento, callback) {
   Aluno.updateOne({"_id": id }, { $set: {
           'nome': nome,
           'email': email,
           'data_nascimento': data_nascimento
       }
   }, function (error, aluno){
        if(error){
            callback({error: 'Não foi possivel editar'});
        } else{
            callback(aluno);
        }
    })
};