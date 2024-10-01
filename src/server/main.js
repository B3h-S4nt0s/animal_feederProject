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
app.set('imgs', path.resolve('src/imgs'));
app.set('css', path.resolve('src/css'));
app.set('js', path.resolve('src/js'));
app.use(express.static(path.resolve('src/'))); // User defined static types

// Use the router
app.use(router);

// server listen at PORT
app.listen(port, () => {
    console.log(`Server is running!! On localhost:${port}`);
});

export default app;