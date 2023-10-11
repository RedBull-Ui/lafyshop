const express = require('express');
const ejs = require('ejs'); // Importez EJS correctement
const app = express();

// Définissez EJS comme moteur de modèle
app.set('view engine', 'ejs');
// Utilisation de express.static pour servir des fichiers statiques depuis le répertoire "public"
app.use(express.static(__dirname + '/public'));

// Le chemin absolu vers le répertoire "public" doit correspondre à l'endroit où se trouve votre fichier CSS


app.get('/', function (req, res) {
  res.render('index.ejs'); // Utilisez "render" au lieu de "rend"
});

app.get('/habits', function (req, res) {
  res.render('habits.ejs'); // Utilisez "render" au lieu de "rend"
});
app.get('/phone', function (req, res) {
  res.render('phone.ejs'); // Utilisez "render" au lieu de "rend"
});
app.get('/maison', function (req, res) {
  res.render('maison.ejs'); // Utilisez "render" au lieu de "rend"
});
app.get('/frigo', function (req, res) {
  res.render('frigo.ejs'); // Utilisez "render" au lieu de "rend"
});

app.listen(3333, () => {
  console.log('Le serveur est lancé sur le port 3333 !');
});
