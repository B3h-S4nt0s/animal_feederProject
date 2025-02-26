import express from 'express';
import path from 'path';
import router from './router.js';

// Load environment variables from .env file
const port = process.env.PORT || 3330;
const dirname = path.resolve("src");

const app = express(); // Initialize express app
// Configure view engine to EJS
app.set('view engine', 'ejs');
app.use('/public', express.static(path.resolve(dirname, 'public')));
app.set('views', path.resolve(dirname, 'views'));
app.set('imgs', path.resolve(dirname, 'public', 'imgs'));
app.set('css', path.resolve(dirname, 'public', 'css'));
app.set('js', path.resolve(dirname, 'public', 'js'));
app.set('assets', path.resolve(dirname, 'public', 'assets'))

// Use the router
app.use(router);

// Server listen at PORT
app.listen(port, () => {
  console.log(`Server is running!! On localhost:${port}`);
});

export default app;