import express from "express";
import dotenv from 'dotenv';
import path from 'path';
const __dirname = path.resolve();
const router = express.Router();

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

// Configura o middleware para analisar o corpo das requisições
router.use(express.json());

// Inicial Rote
router.get('/', (req, res) => {
    res.status(200);
    res.render('views/index');
});

export default router;