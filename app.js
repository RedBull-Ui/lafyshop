const express = require('express');
const ejs = require('ejs');
const app = express();
const mysql = require('mysql');
const uuid = require('uuid'); 



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


// Route pour récupérer les données depuis la table articlesvisiter
app.get('/recupererArticlesvisiter', function (req, res) {
  const query = 'SELECT * FROM articlesvisiter';
  
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des données : ' + err.message);
      res.status(500).send('Erreur lors de la récupération des données articlesvisiter');
    } else {
      // Envoyez les données récupérées au client
      res.json(results);
    }
  });
});

app.get('/recupererArticlesvisiter', function (req, res) {
  const mesRedmiDonnees = JSON.parse(localStorage.getItem('articlesvisiter'));
  res.json(mesarticlesvisiterDonnees);
});
// Route pour récupérer les données depuis la table articlesvisiter

// Route pour récupérer les données depuis la table recupererTelSlider
app.get('/recuperertelSlider', function (req, res) {
  const query = 'SELECT * FROM telSlider';
  
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des données : ' + err.message);
      res.status(500).send('Erreur lors de la récupération des données telSlider');
    } else {
      // Envoyez les données récupérées au client
      res.json(results);
    }
  });
});

app.get('/recupererTelSlider', function (req, res) {
  const telSliderDonnees = JSON.parse(localStorage.getItem('telSlider'));
  res.json(telSliderDonnees);
});
// Route pour récupérer les données depuis la table recupererTelSlider

// Route pour récupérer les données depuis la table recupererMoment
app.get('/recupererMoment', function (req, res) {
  const query = 'SELECT * FROM moment';
  
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des données : ' + err.message);
      res.status(500).send('Erreur lors de la récupération des données moment');
    } else {
      // Envoyez les données récupérées au client
      res.json(results);
    }
  });
});

app.get('/recupererMoment', function (req, res) {
  const momentDonnees = JSON.parse(localStorage.getItem('moment'));
  res.json(momentDonnees);
});
// Route pour récupérer les données depuis la table recupererMoment

// Route pour récupérer les données depuis la table recupererBigCard
app.get('/recupererBigCard', function (req, res) {
  const query = 'SELECT * FROM bigcard';
  
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des données : ' + err.message);
      res.status(500).send('Erreur lors de la récupération des données recupererBigCard');
    } else {
      // Envoyez les données récupérées au client
      res.json(results);
    }
  });
});

app.get('/recupererBigCard', function (req, res) {
  const bigCardDonnees = JSON.parse(localStorage.getItem('promo'));
  res.json(bigCardDonnees);
});
// Route pour récupérer les données depuis la table recupererBigCard


// Route pour récupérer les données depuis la table recupererPromo
app.get('/recupererPromo', function (req, res) {
  const query = 'SELECT * FROM promo';
  
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des données : ' + err.message);
      res.status(500).send('Erreur lors de la récupération des données recupererPromo');
    } else {
      // Envoyez les données récupérées au client
      res.json(results);
    }
  });
});

app.get('/recupererPromo', function (req, res) {
  const promoDonnees = JSON.parse(localStorage.getItem('promo'));
  res.json(promoDonnees);
});
// Route pour récupérer les données depuis la table recupererPromo

// Route pour récupérer les données depuis la table recupererHf
app.get('/recupererHf', function (req, res) {
  const query = 'SELECT * FROM hf';
  
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des données : ' + err.message);
      res.status(500).send('Erreur lors de la récupération des données recupererHf');
    } else {
      // Envoyez les données récupérées au client
      res.json(results);
    }
  });
});

app.get('/recupererHf', function (req, res) {
  const hfDonnees = JSON.parse(localStorage.getItem('hf'));
  res.json(hfDonnees);
});
// Route pour récupérer les données depuis la table recupererHf

// Route pour récupérer les données depuis la table recupererElectro
app.get('/recupererElectro', function (req, res) {
  const query = 'SELECT * FROM electro';
  
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des données : ' + err.message);
      res.status(500).send('Erreur lors de la récupération des données recupererElectro');
    } else {
      // Envoyez les données récupérées au client
      res.json(results);
    }
  });
});

app.get('/recupererElectro', function (req, res) {
  const electroDonnees = JSON.parse(localStorage.getItem('electro'));
  res.json(electroDonnees);
});
// Route pour récupérer les données depuis la table recupererElectro


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
app.get('/chichastore', function (req, res) {
  res.render('chichaStore.ejs'); 
});
app.get('/montres', function (req, res) {
  res.render('montres.ejs'); 
});
// menu routes menu

// les pages pour montre & bijoux

app.get('/montresPage', function (req, res) {
  const sql = 'SELECT * FROM montres';
  
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des données : ' + err.message);
      res.status(500).send('Erreur lors de la récupération des données montresPage');
    } else {
      // Envoyez les données récupérées au client
      res.render('montresPage.ejs', { montres: results });
    }
  });
});

app.get('/montresCoPage', function (req, res) {
  const sql = 'SELECT * FROM montresco';
  
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des données : ' + err.message);
      res.status(500).send('Erreur lors de la récupération des données montresCo');
    } else {
      // Envoyez les données récupérées au client
      res.render('montresCoPage.ejs', { montresco: results });
    }
  });
});
app.get('/bague', function (req, res) {
  const sql = 'SELECT * FROM bagues';
  
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des données : ' + err.message);
      res.status(500).send('Erreur lors de la récupération des données bague');
    } else {
      // Envoyez les données récupérées au client
      res.render('bague.ejs', { bagues: results });
    }
  });
});

app.get('/chaine', function (req, res) {
  const sql = 'SELECT * FROM chaines';
  
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des données : ' + err.message);
      res.status(500).send('Erreur lors de la récupération des données chaine');
    } else {
      // Envoyez les données récupérées au client
      res.render('chaine.ejs', { chaines: results });
    }
  });
});
// les pages pour montre & bijoux

// les pages pour tel & pc 
// Exemple spécifique pour la catégorie "iphone"
app.get('/iphone', function (req, res) {
  const sql = 'SELECT * FROM iphones';
  
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des données : ' + err.message);
      res.status(500).send('Erreur lors de la récupération des données iphone');
    } else {
      // Envoyez les données récupérées au client
      res.render('iphonePage.ejs', { iphones: results });
    }
  });
});
// Exemple pour la catégorie "samsung"
app.get('/samsung', function (req, res) {
  const sql = 'SELECT * FROM samsung';
  
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des données : ' + err.message);
      res.status(500).send('Erreur lors de la récupération des données samsung');
    } else {
      // Envoyez les données récupérées au client
      res.render('samsungPage.ejs', { samsungs: results });
    }
  });
});
// Exemple pour la catégorie "oppo"
app.get('/oppo', function (req, res) {
  const sql = 'SELECT * FROM oppo';
  
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des données : ' + err.message);
      res.status(500).send('Erreur lors de la récupération des données oppo');
    } else {
      // Envoyez les données récupérées au client
      res.render('oppoPage.ejs', { oppos: results });
    }
  });
});
// Exemple pour la catégorie "tecno"
app.get('/tecno', function (req, res) {
  const sql = 'SELECT * FROM tecno';
  
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des données : ' + err.message);
      res.status(500).send('Erreur lors de la récupération des données tecno');
    } else {
      // Envoyez les données récupérées au client
      res.render('tecnoPage.ejs', { tecnos: results });
    }
  });
});

app.get('/redmi', function (req, res) {
  const sql = 'SELECT * FROM redmi';
  
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des données : ' + err.message);
      res.status(500).send('Erreur lors de la récupération des données redmi');
    } else {
      // Envoyez les données récupérées au client
      res.render('redmiPage.ejs', { redmis: results });
    }
  });
});

// Exemple pour la catégorie "itel"
app.get('/itel', function (req, res) {
  const sql = 'SELECT * FROM itel';
  
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des données : ' + err.message);
      res.status(500).send('Erreur lors de la récupération des données itel');
    } else {
      // Envoyez les données récupérées au client
      res.render('itelPage.ejs', { itels: results });
    }
  });
});

// Exemple pour la catégorie "infinix"
app.get('/infinix', function (req, res) {
  const sql = 'SELECT * FROM infinix';
  
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des données : ' + err.message);
      res.status(500).send('Erreur lors de la récupération des données infinix');
    } else {
      // Envoyez les données récupérées au client
      res.render('infinixPage.ejs', { infinixs: results });
    }
  });
});
// Exemple pour la catégorie "mac"
app.get('/mac', function (req, res) {
  const sql = 'SELECT * FROM mac';
  
  db.query(sql, (err, results) => {
    if (err) {
      console.error(`Erreur lors de la récupération des données : ${err.message}`);
      res.status(500).send(`Erreur lors de la récupération des données mac`);
    } else {
      res.render('macPage.ejs', { macs: results });
    }
  });
});

// Exemple pour la catégorie "dell"
app.get('/dell', function (req, res) {
  const sql = 'SELECT * FROM dell';
  
  db.query(sql, (err, results) => {
    if (err) {
      console.error(`Erreur lors de la récupération des données : ${err.message}`);
      res.status(500).send(`Erreur lors de la récupération des données dell`);
    } else {
      res.render('dellPage.ejs', { dells: results });
    }
  });
});

// Exemple pour la catégorie "hp"
app.get('/hp', function (req, res) {
  const sql = 'SELECT * FROM hp';
  
  db.query(sql, (err, results) => {
    if (err) {
      console.error(`Erreur lors de la récupération des données : ${err.message}`);
      res.status(500).send(`Erreur lors de la récupération des données hp`);
    } else {
      res.render('hpPage.ejs', { hps: results });
    }
  });
});

// Exemple pour la catégorie "telTools"
app.get('/telTools', function (req, res) {
  const sql = 'SELECT * FROM telTools';
  
  db.query(sql, (err, results) => {
    if (err) {
      console.error(`Erreur lors de la récupération des données : ${err.message}`);
      res.status(500).send(`Erreur lors de la récupération des données telTools`);
    } else {
      res.render('telTools.ejs', { telTools: results });
    }
  });
});

// Exemple pour la catégorie "pcTools"
app.get('/pcTools', function (req, res) {
  const sql = 'SELECT * FROM pcTools';
  
  db.query(sql, (err, results) => {
    if (err) {
      console.error(`Erreur lors de la récupération des données : ${err.message}`);
      res.status(500).send(`Erreur lors de la récupération des données pcTools`);
    } else {
      res.render('pcTools.ejs', { pcTools: results });
    }
  });
});


// Exemple pour la catégorie "chicha"
app.get('/chicha', function (req, res) {
  const sql = 'SELECT * FROM chicha';
  
  db.query(sql, (err, results) => {
    if (err) {
      console.error(`Erreur lors de la récupération des données : ${err.message}`);
      res.status(500).send(`Erreur lors de la récupération des données chicha`);
    } else {
      res.render('chicha.ejs', { chichas: results });
    }
  });
});

// Exemple pour la catégorie "puff"
app.get('/puff', function (req, res) {
  const sql = 'SELECT * FROM puff';
  
  db.query(sql, (err, results) => {
    if (err) {
      console.error(`Erreur lors de la récupération des données : ${err.message}`);
      res.status(500).send(`Erreur lors de la récupération des données puff`);
    } else {
      res.render('puff.ejs', { puffs: results });
    }
  });
});

// Exemple pour la catégorie "charbon"
app.get('/charbon', function (req, res) {
  const sql = 'SELECT * FROM charbon';
  
  db.query(sql, (err, results) => {
    if (err) {
      console.error(`Erreur lors de la récupération des données : ${err.message}`);
      res.status(500).send(`Erreur lors de la récupération des données charbon`);
    } else {
      res.render('charbon.ejs', { charbons: results });
    }
  });
});

// Exemple pour la catégorie "arome"
app.get('/arome', function (req, res) {
  const sql = 'SELECT * FROM arome';
  
  db.query(sql, (err, results) => {
    if (err) {
      console.error(`Erreur lors de la récupération des données : ${err.message}`);
      res.status(500).send(`Erreur lors de la récupération des données arome`);
    } else {
      res.render('arome.ejs', { aromes: results });
    }
  });
});

// vetements hommes 
// Exemple pour la catégorie "sacH"
app.get('/sacH', function (req, res) {
  const sql = 'SELECT * FROM sacH';
  
  db.query(sql, (err, results) => {
    if (err) {
      console.error(`Erreur lors de la récupération des données : ${err.message}`);
      res.status(500).send(`Erreur lors de la récupération des données sacH`);
    } else {
      res.render('sacHPage.ejs', { sacH: results });
    }
  });
});

// Copiez et adaptez ce bloc pour chaque catégorie de vêtements pour hommes
// Exemple pour la catégorie "chaussuresH"
app.get('/chaussuresH', function (req, res) {
  const sql = 'SELECT * FROM chaussures';
  
  db.query(sql, (err, results) => {
    if (err) {
      console.error(`Erreur lors de la récupération des données : ${err.message}`);
      res.status(500).send(`Erreur lors de la récupération des données chaussuresH`);
    } else {
      res.render('chaussuresHPage.ejs', { chaussuresH: results });
    }
  });
});

// Copiez et adaptez ce bloc pour chaque catégorie de vêtements pour hommes
// Exemple pour la catégorie "chaussetteH"
app.get('/chaussetteH', function (req, res) {
  const sql = 'SELECT * FROM chaussettes';
  
  db.query(sql, (err, results) => {
    if (err) {
      console.error(`Erreur lors de la récupération des données : ${err.message}`);
      res.status(500).send(`Erreur lors de la récupération des données chaussetteH`);
    } else {
      res.render('chaussetteHPage.ejs', { chaussetteH: results });
    }
  });
});


// Exemple pour la catégorie "chapeau"
app.get('/chapeau', function (req, res) {
  const sql = 'SELECT * FROM chapeau';
  
  db.query(sql, (err, results) => {
    if (err) {
      console.error(`Erreur lors de la récupération des données : ${err.message}`);
      res.status(500).send(`Erreur lors de la récupération des données chapeau`);
    } else {
      res.render('chapeauPage.ejs', { chapeaux: results });
    }
  });
});

// Exemple pour la catégorie "outfith"
app.get('/outfitH', function (req, res) {
  const sql = 'SELECT * FROM outfitf';
  
  db.query(sql, (err, results) => {
    if (err) {
      console.error(`Erreur lors de la récupération des données : ${err.message}`);
      res.status(500).send(`Erreur lors de la récupération des données outfitH`);
    } else {
      res.render('outfitHPage.ejs', { outfitsH: results });
    }
  });
});

// Exemple pour la catégorie "ceintureH"
app.get('/ceintureH', function (req, res) {
  const sql = 'SELECT * FROM ceintureH';
  
  db.query(sql, (err, results) => {
    if (err) {
      console.error(`Erreur lors de la récupération des données : ${err.message}`);
      res.status(500).send(`Erreur lors de la récupération des données ceintureH`);
    } else {
      res.render('ceintureHPage.ejs', { ceinturesH: results });
    }
  });
});

// vetements hommes 

// vetements femmes 
// Catégorie pour les femmes - "sacF"
app.get('/sacF', function (req, res) {
  const sql = 'SELECT * FROM sacf';
  
  db.query(sql, (err, results) => {
    if (err) {
      console.error(`Erreur lors de la récupération des données : ${err.message}`);
      res.status(500).send(`Erreur lors de la récupération des données sacF`);
    } else {
      res.render('sacFPage.ejs', { sacFs: results });
    }
  });
});

// Catégorie pour les femmes - "chaussuresF"
app.get('/chaussuresF', function (req, res) {
  const sql = 'SELECT * FROM chaussuresF';
  
  db.query(sql, (err, results) => {
    if (err) {
      console.error(`Erreur lors de la récupération des données : ${err.message}`);
      res.status(500).send(`Erreur lors de la récupération des données chaussuresF`);
    } else {
      res.render('chaussuresFPage.ejs', { chaussuresF: results });
    }
  });
});

// Catégorie pour les femmes - "chaussetteF"
app.get('/chaussetteF', function (req, res) {
  const sql = 'SELECT * FROM chaussettesF';
  
  db.query(sql, (err, results) => {
    if (err) {
      console.error(`Erreur lors de la récupération des données : ${err.message}`);
      res.status(500).send(`Erreur lors de la récupération des données chaussetteF`);
    } else {
      res.render('chaussetteFPage.ejs', { chaussetteF: results });
    }
  });
});

// Catégorie pour les femmes - "chapeauF"
app.get('/chapeauF', function (req, res) {
  const sql = 'SELECT * FROM chapeauF';
  
  db.query(sql, (err, results) => {
    if (err) {
      console.error(`Erreur lors de la récupération des données : ${err.message}`);
      res.status(500).send(`Erreur lors de la récupération des données chapeauF`);
    } else {
      res.render('chapeauFPage.ejs', { chapeauFs: results });
    }
  });
});

// Catégorie pour les femmes - "outfitF"
app.get('/outfitF', function (req, res) {
  const sql = 'SELECT * FROM outfitF';
  
  db.query(sql, (err, results) => {
    if (err) {
      console.error(`Erreur lors de la récupération des données : ${err.message}`);
      res.status(500).send(`Erreur lors de la récupération des données outfitF`);
    } else {
      res.render('outfitFPage.ejs', { outfitsF: results });
    }
  });
});

// Catégorie pour les femmes - "ceintureF"
app.get('/ceintureF', function (req, res) {
  const sql = 'SELECT * FROM ceintureF';
  
  db.query(sql, (err, results) => {
    if (err) {
      console.error(`Erreur lors de la récupération des données : ${err.message}`);
      res.status(500).send(`Erreur lors de la récupération des données ceintureF`);
    } else {
      res.render('ceintureFPage.ejs', { ceintureFs: results });
    }
  });
});

// Catégories de meubles et décoration :
// "meublePage"
app.get('/meublePage', function (req, res) {
  const sql = 'SELECT * FROM meubles';
  
  db.query(sql, (err, results) => {
    if (err) {
      console.error(`Erreur lors de la récupération des données : ${err.message}`);
      res.status(500).send(`Erreur lors de la récupération des données meublePage`);
    } else {
      res.render('meublePage.ejs', { meublesPage: results });
    }
  });
});
// Catégories de meubles et décoration :
// "decoPage"
app.get('/decoPage', function (req, res) {
  const sql = 'SELECT * FROM deco';
  
  db.query(sql, (err, results) => {
    if (err) {
      console.error(`Erreur lors de la récupération des données : ${err.message}`);
      res.status(500).send(`Erreur lors de la récupération des données decoPage`);
    } else {
      res.render('decoPage.ejs', { decos: results });
    }
  });
});

// Catégories de véhicules, appartements, enfants et beauté :
// "enfant"
app.get('/enfant', function (req, res) {
  const sql = 'SELECT * FROM enfants';
  
  db.query(sql, (err, results) => {
    if (err) {
      console.error(`Erreur lors de la récupération des données : ${err.message}`);
      res.status(500).send(`Erreur lors de la récupération des données enfant`);
    } else {
      res.render('enfant.ejs', { enfants: results });
    }
  });
});

// Catégories de véhicules, appartements, enfants et beauté :
// "appartement"
app.get('/appartement', function (req, res) {
  const sql = 'SELECT * FROM appartement';
  
  db.query(sql, (err, results) => {
    if (err) {
      console.error(`Erreur lors de la récupération des données : ${err.message}`);
      res.status(500).send(`Erreur lors de la récupération des données appartement`);
    } else {
      res.render('appartement.ejs', { appartements: results });
    }
  });
});

// Catégories de véhicules, appartements, enfants et beauté :
// "vehicule"
app.get('/vehicule', function (req, res) {
  const sql = 'SELECT * FROM vehicule';
  
  db.query(sql, (err, results) => {
    if (err) {
      console.error(`Erreur lors de la récupération des données : ${err.message}`);
      res.status(500).send(`Erreur lors de la récupération des données vehicule`);
    } else {
      res.render('vehicule.ejs', { vehicules: results });
    }
  });
});

// Catégories de véhicules, appartements, enfants et beauté :
// "beauter"
app.get('/beauter', function (req, res) {
  const sql = 'SELECT * FROM beauter';
  
  db.query(sql, (err, results) => {
    if (err) {
      console.error(`Erreur lors de la récupération des données : ${err.message}`);
      res.status(500).send(`Erreur lors de la récupération des données beauter`);
    } else {
      res.render('beauter.ejs', { beauters: results });
    }
  });
});

// Catégorie d'électroménagers :
// "electro"
app.get('/electro', function (req, res) {
  const sql = 'SELECT * FROM electro';
  
  db.query(sql, (err, results) => {
    if (err) {
      console.error(`Erreur lors de la récupération des données : ${err.message}`);
      res.status(500).send(`Erreur lors de la récupération des données electro`);
    } else {
      res.render('electroMenager.ejs', { electros: results });
    }
  });
});

// Catégorie d'électroménagers :
// "fours"
app.get('/fours', function (req, res) {
  const sql = 'SELECT * FROM fours';
  
  db.query(sql, (err, results) => {
    if (err) {
      console.error(`Erreur lors de la récupération des données : ${err.message}`);
      res.status(500).send(`Erreur lors de la récupération des données fours`);
    } else {
      res.render('fours.ejs', { fours: results });
    }
  });
});

// Catégorie d'électroménagers :
// "mixeurs"
app.get('/mixeurs', function (req, res) {
  const sql = 'SELECT * FROM mixeurs';
  
  db.query(sql, (err, results) => {
    if (err) {
      console.error(`Erreur lors de la récupération des données : ${err.message}`);
      res.status(500).send(`Erreur lors de la récupération des données mixeurs`);
    } else {
      res.render('mixeurs.ejs', { mixeurs: results });
    }
  });
});

// Catégorie d'électroménagers :
// "cusinieres"
app.get('/cusinieres', function (req, res) {
  const sql = 'SELECT * FROM cusinieres';
  
  db.query(sql, (err, results) => {
    if (err) {
      console.error(`Erreur lors de la récupération des données : ${err.message}`);
      res.status(500).send(`Erreur lors de la récupération des données cusinieres`);
    } else {
      res.render('cusinieres.ejs', { cusinieres: results });
    }
  });
});

// Catégorie d'électroménagers :
// "frigideres"
app.get('/frigideres', function (req, res) {
  const sql = 'SELECT * FROM frigideres';
  
  db.query(sql, (err, results) => {
    if (err) {
      console.error(`Erreur lors de la récupération des données : ${err.message}`);
      res.status(500).send(`Erreur lors de la récupération des données frigideres`);
    } else {
      res.render('frigideres.ejs', { frigideres: results });
    }
  });
});

// Catégorie d'électroménagers :
// "cafetieres"
app.get('/cafetieres', function (req, res) {
  const sql = 'SELECT * FROM cafetieres';
  
  db.query(sql, (err, results) => {
    if (err) {
      console.error(`Erreur lors de la récupération des données : ${err.message}`);
      res.status(500).send(`Erreur lors de la récupération des données cafetieres`);
    } else {
      res.render('cafetieres.ejs', { cafetieres: results });
    }
  });
});

// Catégorie d'électroménagers :
// "grillesPains"
app.get('/grillesPains', function (req, res) {
  const sql = 'SELECT * FROM grillepain';
  
  db.query(sql, (err, results) => {
    if (err) {
      console.error(`Erreur lors de la récupération des données : ${err.message}`);
      res.status(500).send(`Erreur lors de la récupération des données grillesPains`);
    } else {
      res.render('grillesPains.ejs', { grillesPains: results });
    }
  });
});


// ajoute dans le panier 

// Nous allons créer un tableau pour stocker les produits ajoutés côté client
const produitsDansLePanier = [];

// Lorsqu'un produit est ajouté côté client, nous l'ajoutons au tableau
app.post('/ajouter-au-panier', (req, res) => {

  const produitId = req.body.produitId;
  // Vous pouvez ajouter d'autres informations sur le produit ici, si nécessaire

  // Recherchez le produit par son ID (vous devez implémenter cette recherche)
  const produit = /* Recherchez le produit par son ID dans la base de données */

  // Ajoutez le produit au tableau des produits dans le panier
  produitsDansLePanier.push(produit);

  // Envoyez une réponse pour indiquer le succès de l'ajout
  res.json({ success: true });
});

// ajoute dans le panier 

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


// les details iphones views ici //
app.get('/iphone/:id', function(req, res) {
  const productId = req.params.id;

  // Effectuez une requête à la base de données pour trouver le produit par ID
  db.query('SELECT * FROM iphones WHERE id = ?', [productId], function(error, results, fields) {
    if (error) {
      // Gérez les erreurs de requête à la base de données
      console.error(error);
      res.status(500).send('Erreur interne du serveur');
    } else {
      if (results.length > 0) {
        // Si le produit est trouvé, affichez la vue de détails avec les données du produit
        res.render('Detail.ejs', { product: results[0] });
      } else {
        // Sinon, redirigez vers une page d'erreur ou une autre page par défaut
        res.redirect('/iphone');
      }
    }
  });
});

// N'oubliez pas de fermer la connexion à la base de données lorsque votre application se termine
process.on('exit', function() {
  connection.end();
});
// les details views ici iphones //

// les details samsung views ici //
app.get('/samsung/:id', function(req, res) {
  const productId = req.params.id;

  // Effectuez une requête à la base de données pour trouver le produit par ID
  db.query('SELECT * FROM samsung WHERE id = ?', [productId], function(error, results, fields) {
    if (error) {
      // Gérez les erreurs de requête à la base de données
      console.error(error);
      res.status(500).send('Erreur interne du serveur');
    } else {
      if (results.length > 0) {
        // Si le produit est trouvé, affichez la vue de détails avec les données du produit
        res.render('Detail.ejs', { product: results[0] });
      } else {
        // Sinon, redirigez vers une page d'erreur ou une autre page par défaut
        res.redirect('/samsung');
      }
    }
  });
});

// N'oubliez pas de fermer la connexion à la base de données lorsque votre application se termine
process.on('exit', function() {
  connection.end();
});
// les details views ici samsung //

// les details oppo views ici //
app.get('/oppo/:id', function(req, res) {
  const productId = req.params.id;

  // Effectuez une requête à la base de données pour trouver le produit par ID
  db.query('SELECT * FROM oppo WHERE id = ?', [productId], function(error, results, fields) {
    if (error) {
      // Gérez les erreurs de requête à la base de données
      console.error(error);
      res.status(500).send('Erreur interne du serveur');
    } else {
      if (results.length > 0) {
        // Si le produit est trouvé, affichez la vue de détails avec les données du produit
        res.render('Detail.ejs', { product: results[0] });
      } else {
        // Sinon, redirigez vers une page d'erreur ou une autre page par défaut
        res.redirect('/oppo');
      }
    }
  });
});

// N'oubliez pas de fermer la connexion à la base de données lorsque votre application se termine
process.on('exit', function() {
  connection.end();
});
// les details views ici oppo //

// les details redmi views ici //
app.get('/redmi/:id', function(req, res) {
  const productId = req.params.id;

  // Effectuez une requête à la base de données pour trouver le produit par ID
  db.query('SELECT * FROM redmi WHERE id = ?', [productId], function(error, results, fields) {
    if (error) {
      // Gérez les erreurs de requête à la base de données
      console.error(error);
      res.status(500).send('Erreur interne du serveur');
    } else {
      if (results.length > 0) {
        // Si le produit est trouvé, affichez la vue de détails avec les données du produit
        res.render('Detail.ejs', { product: results[0] });
      } else {
        // Sinon, redirigez vers une page d'erreur ou une autre page par défaut
        res.redirect('/redmi');
      }
    }
  });
});

// N'oubliez pas de fermer la connexion à la base de données lorsque votre application se termine
process.on('exit', function() {
  connection.end();
});
// les details views ici redmi //

// les details tecno views ici //
app.get('/tecno/:id', function(req, res) {
  const productId = req.params.id;

  // Effectuez une requête à la base de données pour trouver le produit par ID
  db.query('SELECT * FROM tecno WHERE id = ?', [productId], function(error, results, fields) {
    if (error) {
      // Gérez les erreurs de requête à la base de données
      console.error(error);
      res.status(500).send('Erreur interne du serveur');
    } else {
      if (results.length > 0) {
        // Si le produit est trouvé, affichez la vue de détails avec les données du produit
        res.render('Detail.ejs', { product: results[0] });
      } else {
        // Sinon, redirigez vers une page d'erreur ou une autre page par défaut
        res.redirect('/tecno');
      }
    }
  });
});

// N'oubliez pas de fermer la connexion à la base de données lorsque votre application se termine
process.on('exit', function() {
  connection.end();
});
// les details views ici tecno //

// les details infinix views ici //
app.get('/infinix/:id', function(req, res) {
  const productId = req.params.id;

  // Effectuez une requête à la base de données pour trouver le produit par ID
  db.query('SELECT * FROM infinix WHERE id = ?', [productId], function(error, results, fields) {
    if (error) {
      // Gérez les erreurs de requête à la base de données
      console.error(error);
      res.status(500).send('Erreur interne du serveur');
    } else {
      if (results.length > 0) {
        // Si le produit est trouvé, affichez la vue de détails avec les données du produit
        res.render('Detail.ejs', { product: results[0] });
      } else {
        // Sinon, redirigez vers une page d'erreur ou une autre page par défaut
        res.redirect('/infinix');
      }
    }
  });
});

// N'oubliez pas de fermer la connexion à la base de données lorsque votre application se termine
process.on('exit', function() {
  connection.end();
});
// les details views ici infinix //

// les details itel views ici //
app.get('/itel/:id', function(req, res) {
  const productId = req.params.id;

  // Effectuez une requête à la base de données pour trouver le produit par ID
  db.query('SELECT * FROM itel WHERE id = ?', [productId], function(error, results, fields) {
    if (error) {
      // Gérez les erreurs de requête à la base de données
      console.error(error);
      res.status(500).send('Erreur interne du serveur');
    } else {
      if (results.length > 0) {
        // Si le produit est trouvé, affichez la vue de détails avec les données du produit
        res.render('Detail.ejs', { product: results[0] });
      } else {
        // Sinon, redirigez vers une page d'erreur ou une autre page par défaut
        res.redirect('/itel');
      }
    }
  });
});

// N'oubliez pas de fermer la connexion à la base de données lorsque votre application se termine
process.on('exit', function() {
  connection.end();
});
// les details views ici itel //

// les details dell views ici //
app.get('/dell/:id', function(req, res) {
  const productId = req.params.id;

  // Effectuez une requête à la base de données pour trouver le produit par ID
  db.query('SELECT * FROM dell WHERE id = ?', [productId], function(error, results, fields) {
    if (error) {
      // Gérez les erreurs de requête à la base de données
      console.error(error);
      res.status(500).send('Erreur interne du serveur');
    } else {
      if (results.length > 0) {
        // Si le produit est trouvé, affichez la vue de détails avec les données du produit
        res.render('Detail.ejs', { product: results[0] });
      } else {
        // Sinon, redirigez vers une page d'erreur ou une autre page par défaut
        res.redirect('/dell');
      }
    }
  });
});

// N'oubliez pas de fermer la connexion à la base de données lorsque votre application se termine
process.on('exit', function() {
  connection.end();
});
// les details views ici dell //

// les details mac views ici //
app.get('/mac/:id', function(req, res) {
  const productId = req.params.id;

  // Effectuez une requête à la base de données pour trouver le produit par ID
  db.query('SELECT * FROM mac WHERE id = ?', [productId], function(error, results, fields) {
    if (error) {
      // Gérez les erreurs de requête à la base de données
      console.error(error);
      res.status(500).send('Erreur interne du serveur');
    } else {
      if (results.length > 0) {
        // Si le produit est trouvé, affichez la vue de détails avec les données du produit
        res.render('Detail.ejs', { product: results[0] });
      } else {
        // Sinon, redirigez vers une page d'erreur ou une autre page par défaut
        res.redirect('/mac');
      }
    }
  });
});

// N'oubliez pas de fermer la connexion à la base de données lorsque votre application se termine
process.on('exit', function() {
  connection.end();
});
// les details views ici mac //
// les details mac views ici //
app.get('/mac/:id', function(req, res) {
  const productId = req.params.id;

  // Effectuez une requête à la base de données pour trouver le produit par ID
  db.query('SELECT * FROM mac WHERE id = ?', [productId], function(error, results, fields) {
    if (error) {
      // Gérez les erreurs de requête à la base de données
      console.error(error);
      res.status(500).send('Erreur interne du serveur');
    } else {
      if (results.length > 0) {
        // Si le produit est trouvé, affichez la vue de détails avec les données du produit
        res.render('Detail.ejs', { product: results[0] });
      } else {
        // Sinon, redirigez vers une page d'erreur ou une autre page par défaut
        res.redirect('/mac');
      }
    }
  });
});

// N'oubliez pas de fermer la connexion à la base de données lorsque votre application se termine
process.on('exit', function() {
  connection.end();
});
// les details views ici mac //

// les details hp views ici //
app.get('/hp/:id', function(req, res) {
  const productId = req.params.id;

  // Effectuez une requête à la base de données pour trouver le produit par ID
  db.query('SELECT * FROM hp WHERE id = ?', [productId], function(error, results, fields) {
    if (error) {
      // Gérez les erreurs de requête à la base de données
      console.error(error);
      res.status(500).send('Erreur interne du serveur');
    } else {
      if (results.length > 0) {
        // Si le produit est trouvé, affichez la vue de détails avec les données du produit
        res.render('Detail.ejs', { product: results[0] });
      } else {
        // Sinon, redirigez vers une page d'erreur ou une autre page par défaut
        res.redirect('/hp');
      }
    }
  });
});

// N'oubliez pas de fermer la connexion à la base de données lorsque votre application se termine
process.on('exit', function() {
  connection.end();
});
// les details views ici hp //

// les details pctools views ici //
app.get('/pctools/:id', function(req, res) {
  const productId = req.params.id;

  // Effectuez une requête à la base de données pour trouver le produit par ID
  db.query('SELECT * FROM pctools WHERE id = ?', [productId], function(error, results, fields) {
    if (error) {
      // Gérez les erreurs de requête à la base de données
      console.error(error);
      res.status(500).send('Erreur interne du serveur');
    } else {
      if (results.length > 0) {
        // Si le produit est trouvé, affichez la vue de détails avec les données du produit
        res.render('Detail.ejs', { product: results[0] });
      } else {
        // Sinon, redirigez vers une page d'erreur ou une autre page par défaut
        res.redirect('/pctools');
      }
    }
  });
});

// N'oubliez pas de fermer la connexion à la base de données lorsque votre application se termine
process.on('exit', function() {
  connection.end();
});
// les details views ici pctools //

// les details teltools views ici //
app.get('/teltools/:id', function(req, res) {
  const productId = req.params.id;

  // Effectuez une requête à la base de données pour trouver le produit par ID
  db.query('SELECT * FROM teltools WHERE id = ?', [productId], function(error, results, fields) {
    if (error) {
      // Gérez les erreurs de requête à la base de données
      console.error(error);
      res.status(500).send('Erreur interne du serveur');
    } else {
      if (results.length > 0) {
        // Si le produit est trouvé, affichez la vue de détails avec les données du produit
        res.render('Detail.ejs', { product: results[0] });
      } else {
        // Sinon, redirigez vers une page d'erreur ou une autre page par défaut
        res.redirect('/teltools');
      }
    }
  });
});

// N'oubliez pas de fermer la connexion à la base de données lorsque votre application se termine
process.on('exit', function() {
  connection.end();
});
// les details views ici teltools //

// les details montresCo views ici //
app.get('/montresCoPage/:id', function(req, res) {
  const productId = req.params.id;

  // Effectuez une requête à la base de données pour trouver le produit par ID
  db.query('SELECT * FROM montresco WHERE id = ?', [productId], function(error, results, fields) {
    if (error) {
      // Gérez les erreurs de requête à la base de données
      console.error(error);
      res.status(500).send('Erreur interne du serveur');
    } else {
      if (results.length > 0) {
        // Si le produit est trouvé, affichez la vue de détails avec les données du produit
        // res.render('montresCoDetail.ejs', { product: results[0] });
        res.render('Detail.ejs', { product: results[0] });
      } else {
        // Sinon, redirigez vers une page d'erreur ou une autre page par défaut
        res.redirect('/montresCoPage');
      }
    }
  });
});

// N'oubliez pas de fermer la connexion à la base de données lorsque votre application se termine
process.on('exit', function() {
  connection.end();
});
// les details views ici montresCo //




app.listen(3333, () => {
  console.log('Le serveur est lancé sur le port 3333 !');
});
