const express = require('express');
const ejs = require('ejs'); // Importez EJS correctement
const app = express();

// Définissez EJS comme moteur de modèle
app.set('view engine', 'ejs');
// Utilisation de express.static pour servir des fichiers statiques depuis le répertoire "public"
app.use(express.static(__dirname + '/public'));

// Le chemin absolu vers le répertoire "public" doit correspondre à l'endroit où se trouve votre fichier CSS

// menu routes
app.get('/', function (req, res) {
  res.render('index.ejs'); 
});
app.get('/habitsH', function (req, res) {
  res.render('habitsH.ejs'); 
});
app.get('/habitsF', function (req, res) {
  res.render('habitsF.ejs'); 
});
app.get('/phone', function (req, res) {
  res.render('phone.ejs'); 
});
app.get('/maison', function (req, res) {
  res.render('maison.ejs'); 
});
app.get('/frigo', function (req, res) {
  res.render('frigo.ejs'); 
});
// menu routes

// les pages pour montre & bijoux
app.get('/montres', function (req, res) {
  res.render('montres.ejs'); 
});
app.get('/montresPage', function (req, res) {
  res.render('montresPage.ejs'); 
});
app.get('/montresCoPage', function (req, res) {
  res.render('montresCoPage.ejs'); 
});
app.get('/bague', function (req, res) {
  res.render('bague.ejs'); 
});
app.get('/chaine', function (req, res) {
  res.render('chaine.ejs'); 
});
// les pages pour montre & bijoux

// les pages pour tel & pc 
app.get('/iphone', function (req, res) {
  res.render('iphonePage.ejs'); 
});
app.get('/samsung', function (req, res) {
  res.render('samsungPage.ejs'); 
});
app.get('/oppo', function (req, res) {
  res.render('oppoPage.ejs'); 
});
app.get('/tecno', function (req, res) {
  res.render('tecnoPage.ejs'); 
});
app.get('/redmi', function (req, res) {
  res.render('redmiPage.ejs'); 
});
app.get('/itel', function (req, res) {
  res.render('itelPage.ejs'); 
});
app.get('/infinix', function (req, res) {
  res.render('infinixPage.ejs'); 
});
app.get('/mac', function (req, res) {
  res.render('macPage.ejs'); 
});
app.get('/dell', function (req, res) {
  res.render('dellPage.ejs'); 
});
app.get('/hp', function (req, res) {
  res.render('hpPage.ejs'); 
});
app.get('/telTools', function (req, res) {
  res.render('telTools.ejs'); 
});
app.get('/pcTools', function (req, res) {
  res.render('pcTools.ejs'); 
});

// les pages pour tel & pc 

// vetements hommes 
app.get('/sacH', function (req, res) {
  res.render('sacHPage.ejs'); 
});
app.get('/chaussuresH', function (req, res) {
  res.render('chaussuresHPage.ejs'); 
});
app.get('/chaussetteH', function (req, res) {
  res.render('chaussetteHPage.ejs'); 
});
app.get('/chapeau', function (req, res) {
  res.render('chapeauPage.ejs'); 
});
app.get('/outfitH', function (req, res) {
  res.render('outfitHPage.ejs'); 
});
app.get('/ceintureH', function (req, res) {
  res.render('ceintureHPage.ejs'); 
});


// vetements hommes 

// vetements femmes 
app.get('/sacF', function (req, res) {
  res.render('sacFPage.ejs'); 
});
app.get('/chaussuresF', function (req, res) {
  res.render('chaussuresFPage.ejs'); 
});
app.get('/chaussetteF', function (req, res) {
  res.render('chaussetteFPage.ejs'); 
});
app.get('/chapeauF', function (req, res) {
  res.render('chapeauFPage.ejs'); 
});
app.get('/outfitF', function (req, res) {
  res.render('outfitFPage.ejs'); 
});
app.get('/ceintureF', function (req, res) {
  res.render('ceintureFPage.ejs'); 
});


// vetements femmes 




app.listen(3333, () => {
  console.log('Le serveur est lancé sur le port 3333 !');
});
