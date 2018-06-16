var express = require('express');
var router = express.Router();
var alunoController = require('../controllers/alunoController');

router.get('/', function (req, res) {
    alunoController.list(function (response) {
        res.json(response);
    })
});

router.get('/buscar/:id', function (req, res) {

    var id =req.params.id;

    alunoController.find(id, function (response) {
        res.json(response);
    })
});

router.post('/cadastrar', function (req, res) {

    var nome = req.body.nome;
    var email = req.body.email;
    var data_nascimento = req.body.data_nascimento;

    alunoController.save(nome, email, data_nascimento, function (response) {
        res.json(response);
    })
});

router.post('/editar', function (req, res) {

    var nome = req.body.nome;
    var email = req.body.email;
    var data_nascimento = req.body.data_nascimento;
    var id = req.body.id;

    alunoController.update(id, nome, email, data_nascimento, function (response) {
        res.json(response);
    })
});

router.delete('/deleta/:id', function (req, res) {
    var id =req.params.id;
    alunoController.delete(id, function (response) {
        res.json(response);
    })
});

module.exports = router;