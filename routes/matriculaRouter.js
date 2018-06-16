var express = require('express');
var router = express.Router();
var matriculaController = require('../controllers/matriculaController');

router.get('/', function (req, res) {
    matriculaController.list(function (response) {
        res.json(response);
    })
});

router.get('/buscar/:id', function (req, res) {

    var id =req.params.id;

    matriculaController.find(id, function (response) {
        res.json(response);
    })
});

router.post('/cadastrar', function (req, res) {

    var aluno = req.body.aluno;
    var curso = req.body.curso

    matriculaController.save(aluno, curso, function (response) {
        res.json(response);
    })
});

router.post('/editar', function (req, res) {

    var aluno = req.body.aluno;
    var curso = req.body.curso
    var id = req.body.id;

    matriculaController.update(id, aluno, curso, function (response) {
        res.json(response);
    })
});

router.delete('/deleta/:id', function (req, res) {
    var id =req.params.id;
    matriculaController.delete(id, function (response) {
        res.json(response);
    })
});

module.exports = router;