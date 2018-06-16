var express = require('express');
var router = express.Router();
var cursoController = require('../controllers/cursoController');

router.get('/', function (req, res) {
    cursoController.list(function (response) {
        res.json(response);
    })
});

router.get('/buscar/:id', function (req, res) {

    var id =req.params.id;

    cursoController.find(id, function (response) {
        res.json(response);
    })
});

router.post('/cadastrar', function (req, res) {

    var titulo = req.body.titulo;
    var descricao = req.body.descricao

    cursoController.save(titulo, descricao, function (response) {
        res.json(response);
    })
});

router.post('/editar', function (req, res) {

    var titulo = req.body.titulo;
    var descricao = req.body.descricao
    var id = req.body.id;

    cursoController.update(id, titulo, descricao, function (response) {
        res.json(response);
    })
});

router.delete('/deleta/:id', function (req, res) {
    var id =req.params.id;
    cursoController.delete(id, function (response) {
        res.json(response);
    })
});

module.exports = router;