const express = require(`express`);
const path = require('path');
const router = express.Router();
const bodyParser = require('body-parser');
const { error } = require('console');

// Carrega as variáveis de ambiente do arquivo .env
require('dotenv').config();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// Configura o middleware para analisar o corpo das requisições
router.use(express.json());

// Configura o middleware para servir arquivos estáticos da pasta 'public'
router.use('/static', express.static(path.join(__dirname, '..', 'static')));

// Inicial Rote
router.get('/', (req, res) => {
    res.status(200);
    res.render(`index`);
});

// Using /:param can get param  :: Forms Rote
router.post(`/login/:user/:pass`, (req, res) => { // :param? -> Optional Param
    let arrLogin = [];
    arrLogin.push(req.params.user, req.params.pass);
});

router.get(`/about`, (req, res) => {
    res.status(200);
    res.render(`about`);
});

router.get(`/dashboard`, (req, res) => {
    res.status(200);
    res.render(`dashboard`);
});

router.get(`/profile`, (req, res) => {
    if (res.statusCode === 200 && res.body != {error}) {
        res.status(200);
        res.render(`profile`);
    } else {
        res.errored(error => (
            res.render(JSON.stringify(error.message))
        ));
    }
});

module.exports = router;