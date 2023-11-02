const express = require('express');
const ejs = require('ejs');
const app = express();
const mysql = require('mysql');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'lafyshop_bd'
});

db.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données : ' + err.message);
  } else {
    console.log('Connecté à la base de données MySQL');
  }
});

// Route pour récupérer les données depuis la articlevisiter
app.get('/recupererArticlesVisiter', function (req, res) {
  const query = 'SELECT * FROM articlesVisiter';
  
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des données : ' + err.message);
      res.status(500).send('Erreur lors de la récupération des données');
    } else {
      // Envoyez les données récupérées au client
      res.json(results);
    }
  });
});

app.get('/recupererArticlesvisiter', function (req, res) {
  const mesDonnees = JSON.parse(localStorage.getItem('articlesVisiter'));
  res.json(mesDonnees);
});

// Route pour récupérer les données depuis la articlevisiter


// Route pour récupérer les données depuis la table promo
app.get('/recupererPromo', function (req, res) {
  const query = 'SELECT * FROM promo';
  
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des données : ' + err.message);
      res.status(500).send('Erreur lors de la récupération des données');
    } else {
      // Envoyez les données récupérées au client
      res.json(results);
    }
  });
});

// Route pour récupérer les données stockées dans le localStorage
app.get('/recupererPromo', function (req, res) {
  const mesDonnees = JSON.parse(localStorage.getItem('promo'));
  res.json(mesDonnees);
});

// Route pour récupérer les données depuis la table promo



// Route pour récupérer les données depuis la table telslider
app.get('/recupererTelSlider', function (req, res) {
  const query = 'SELECT * FROM telslider';
  
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des données : ' + err.message);
      res.status(500).send('Erreur lors de la récupération des données');
    } else {
      // Envoyez les données récupérées au client
      res.json(results);
    }
  });
});

// Route pour récupérer les données stockées dans le localStorage
app.get('/recupererTelSlider', function (req, res) {
  const mesDonnees = JSON.parse(localStorage.getItem('telSlider'));
  res.json(mesDonnees);
});

// Route pour récupérer les données stockées dans le localStorage

// Route pour récupérer les données depuis la table telslider


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

// chicha store 
app.get('/chichaStore', function (req, res) {
  res.render('chichaStore.ejs'); 
});

app.get('/chicha', function (req, res) {
  res.render('chicha.ejs'); 
});
app.get('/puff', function (req, res) {
  res.render('puff.ejs'); 
});
app.get('/charbon', function (req, res) {
  res.render('charbon.ejs'); 
});
app.get('/arome', function (req, res) {
  res.render('arome.ejs'); 
});
// chicha store 

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

// meuble & deco ici 
app.get('/meublePage', function (req, res) {
  res.render('meublePage.ejs'); 
});
app.get('/decoPage', function (req, res) {
  res.render('decoPage.ejs'); 
});
// meuble & deco ici 

// vehicule & appart & enfant & beauter
app.get('/enfant', function (req, res) {
  res.render('enfant.ejs'); 
});
app.get('/appartement', function (req, res) {
  res.render('appartement.ejs'); 
});
app.get('/vehicule', function (req, res) {
  res.render('vehicule.ejs'); 
});
app.get('/beauter', function (req, res) {
  res.render('beauter.ejs'); 
});
// vehicule & appart

//electro-menager
app.get('/electro', function (req, res) {
  res.render('electroMenager.ejs'); 
});
app.get('/fours', function (req, res) {
  res.render('fours.ejs'); 
});
app.get('/mixeurs', function (req, res) {
  res.render('mixeurs.ejs'); 
});
app.get('/cusinieres', function (req, res) {
  res.render('cusinieres.ejs'); 
});
app.get('/frigideres', function (req, res) {
  res.render('frigideres.ejs'); 
});
app.get('/cafetieres', function (req, res) {
  res.render('cafetieres.ejs'); 
});
app.get('/grillesPains', function (req, res) {
  res.render('grillesPains.ejs'); 
});
//electro-menager

//route page de commande 
app.get('/commander', function (req, res) {
  res.render('commander.ejs'); 
});
// route page de commande 
//route vers valider 
app.get('/valider', function (req, res) {
  res.render('valider.ejs'); 
});
// route vers valider 




app.listen(3333, () => {
  console.log('Le serveur est lancé sur le port 3333 !');
});
