const express = require(`express`);
const path = require('path');
const app = express();
const port = process.env.PORT || 3330;
// Carrega as variáveis de ambiente do arquivo .env
require('dotenv').config();

// Configura o mecanismo de visualização EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'views'));

app.use(require(`./router`));

// server listen at PORT
app.listen(port, () => {
    console.log(`Server is running!! On localhost:${port}`);
});

module.exports = app;