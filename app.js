var app = require('./config/app_config');
var db = require('./config/db_config');
var Aluno = require('./models/aluno');
var Curso = require('./models/curso');
var Matricula = require('./models/matricula');
var alunoController = require('./controllers/alunoController');
var cursoController = require('./controllers/cursoController');
var matriculaController = require('./controllers/matriculaController');
var alunos = require('./routes/alunoRouter');
var curso = require('./routes/cursoRouter');
var matriculas = require('./routes/matriculaRouter');

app.get('/', function(req, res){
    res.end("Bem vindo a API");
});

app.use('/alunos', alunos);
app.use('/cursos', curso);
app.use('/matriculas', matriculas);
