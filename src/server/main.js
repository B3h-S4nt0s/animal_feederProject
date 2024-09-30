import express from 'express';
import path from 'path';
import dotenv from "dotenv";
import router from "./router.js";

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();
const port = process.env.PORT || 3330;

const app = express(); // Initialize express app
// Configura o mecanismo de visualização EJS
app.set('view engine', 'ejs');
app.set('views', path.resolve('src/views'));   // Pasta views
app.set('static', path.resolve('src/static')); // Pasta static

// Use the router
app.use(router);

// server listen at PORT
app.listen(port, () => {
    console.log(`Server is running!! On localhost:${port}`);
});

export default app;