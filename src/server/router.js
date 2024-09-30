import express from "express";
import dotenv from 'dotenv';
const router = express.Router();

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

// Configura o middleware para analisar o corpo das requisições
router.use(express.json());

// Inicial Rote
router.get('/', (req, res) => {
    res.status(200);
    res.render('index');
});

router.post('/', (req, res) => {
    res.status(200);
    res.redirect('/about');
});

router.get('/about', (req, res) => {
    res.status(200);
    res.render('about');
});

router.get('/dashboard', (req, res) => {
    res.status(200);
    res.render('dashboard');
});

router.get('/profile:id', (req, res) => {
    res.status(200);
    res.render('profile', { id: req.params.id });
});

export default router;