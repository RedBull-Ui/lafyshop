const express = require('express');
const ejs = require('ejs');
const app = express();
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
const TelegramBot = require('node-telegram-bot-api');
const { v4: uuidv4 } = require('uuid'); // Importe uuid


app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));


// Configuration de la connexion à la base de données 

const serviceAccount = require('./lafyshop.json'); // Remplacez par le chemin vers votre fichier de configuration Firebase

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();


// Route pour récupérer les données depuis la table articlesvisiter
app.get('/', async (req, res) => {
  try {
    // Récupérer les données depuis la collection 'articlesvisiter'
    const visiterSnapshot = await db.collection('articlesvisiter').get();
    const visiter = visiterSnapshot.docs.map((doc) => {
      const produitData = doc.data();
      return {
        ...produitData,
        id: uuidv4(), // Ajoute un nouvel ID unique à chaque produit
      };
    });

    // Récupérer les données depuis la collection 'telephone'
    const telSnapshot = await db.collection('telephone').get();
    const tel = telSnapshot.docs.map((doc) => {
      const produitData = doc.data();
      return {
        ...produitData,
        id: uuidv4(), // Ajoute un nouvel ID unique à chaque produit
      };
    });

    // Récupérer les données depuis la collection 'moment'
    const momentSnapshot = await db.collection('moment').get();
    const moment = momentSnapshot.docs.map((doc) => {
      const produitData = doc.data();
      return {
        ...produitData,
        id: uuidv4(), // Ajoute un nouvel ID unique à chaque produit
      };
    });

    // Récupérer les données depuis la collection 'bigCard'
    const bigCardSnapshot = await db.collection('bigCard').get();
    const bigCard = bigCardSnapshot.docs.map((doc) => {
      const produitData = doc.data();
      return {
        ...produitData,
        id: uuidv4(), // Ajoute un nouvel ID unique à chaque produit
      };
    });

    // Récupérer les données depuis la collection 'femme'
    const femmeSnapshot = await db.collection('femme').get();
    const femme = femmeSnapshot.docs.map((doc) => {
      const produitData = doc.data();
      return {
        ...produitData,
        id: uuidv4(), // Ajoute un nouvel ID unique à chaque produit
      };
    });

    // Récupérer les données depuis la collection 'electro'
    const electroSnapshot = await db.collection('electro').get();
    const electro = electroSnapshot.docs.map((doc) => {
      const produitData = doc.data();
      return {
        ...produitData,
        id: uuidv4(), // Ajoute un nouvel ID unique à chaque produit
      };
    });

    // Rendre la vue en utilisant les données récupérées
    res.render('index.ejs', { visiter, tel, moment, bigCard, femme, electro });

  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error);
    res.status(500).json({ error: 'Erreur de base de données' });
  }
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

app.get('/montresPage', async (req, res)=> {

  // Récupérer les données depuis la collection 'montre'
 const montreSnapshot = await db.collection('montres').get();
 const montre = montreSnapshot.docs.map((doc) => {
   const produitData = doc.data();
   return {
     ...produitData,
     id: uuidv4(), // Ajoute un nouvel ID unique à chaque produit
   };
 });

 // Rendre la vue en utilisant les données récupérées
 res.render('montresPage.ejs', { montre });

});

app.get('/montresCoPage', async (req, res)=> {

  // Récupérer les données depuis la collection 'montresCo'
 const montresCoSnapshot = await db.collection('montresco').get();
 const montresCo = montresCoSnapshot.docs.map((doc) => {
   const produitData = doc.data();
   return {
     ...produitData,
     id: uuidv4(), // Ajoute un nouvel ID unique à chaque produit
   };
 });

 // Rendre la vue en utilisant les données récupérées
 res.render('montresCoPage.ejs', { montresCo });

});
app.get('/bague', async (req, res)=> {

  // Récupérer les données depuis la collection 'bague'
 const bagueSnapshot = await db.collection('bagues').get();
 const bague = bagueSnapshot.docs.map((doc) => {
   const produitData = doc.data();
   return {
     ...produitData,
     id: uuidv4(), // Ajoute un nouvel ID unique à chaque produit
   };
 });

 // Rendre la vue en utilisant les données récupérées
 res.render('bague.ejs', { bague });

});

app.get('/chaine', async (req, res)=> {

  // Récupérer les données depuis la collection 'chaine'
 const chaineSnapshot = await db.collection('chaines').get();
 const chaine = chaineSnapshot.docs.map((doc) => {
   const produitData = doc.data();
   return {
     ...produitData,
     id: uuidv4(), // Ajoute un nouvel ID unique à chaque produit
   };
 });

 // Rendre la vue en utilisant les données récupérées
 res.render('chaine.ejs', { chaine });

});
// les pages pour montre & bijoux

// les pages pour tel & pc 
// Exemple spécifique pour la catégorie "iphone"
app.get('/iphone', async (req, res)=> {

  // Récupérer les données depuis la collection 'iphone'
 const iphoneSnapshot = await db.collection('iphone').get();
 const iphone = iphoneSnapshot.docs.map((doc) => {
   const produitData = doc.data();
   return {
     ...produitData,
     id: uuidv4(), // Ajoute un nouvel ID unique à chaque produit
   };
 });

 // Rendre la vue en utilisant les données récupérées
 res.render('iphonePage.ejs', { iphone });

});
// Exemple pour la catégorie "samsung"
app.get('/samsung', async (req, res)=> {
  // Récupérer les données depuis la collection 'samsung'
 const samsungSnapshot = await db.collection('samsung').get();
 const samsung = samsungSnapshot.docs.map((doc) => {
   const produitData = doc.data();
   return {
     ...produitData,
     id: uuidv4(), // Ajoute un nouvel ID unique à chaque produit
   };
 });

 // Rendre la vue en utilisant les données récupérées
 res.render('samsungPage.ejs', { samsung });

});
// Exemple pour la catégorie "oppo"
app.get('/oppo', async (req, res)=> {

  // Récupérer les données depuis la collection 'oppo'
 const oppoSnapshot = await db.collection('oppo').get();
 const oppo = oppoSnapshot.docs.map((doc) => {
   const produitData = doc.data();
   return {
     ...produitData,
     id: uuidv4(), // Ajoute un nouvel ID unique à chaque produit
   };
 });

 // Rendre la vue en utilisant les données récupérées
 res.render('oppoPage.ejs', { oppo });

});
// Exemple pour la catégorie "tecno"
app.get('/tecno', async (req, res)=> {

  // Récupérer les données depuis la collection 'tecno'
 const tecnoSnapshot = await db.collection('tecno').get();
 const tecno = tecnoSnapshot.docs.map((doc) => {
   const produitData = doc.data();
   return {
     ...produitData,
     id: uuidv4(), // Ajoute un nouvel ID unique à chaque produit
   };
 });

 // Rendre la vue en utilisant les données récupérées
 res.render('tecnoPage.ejs', { tecno });

});
app.get('/redmi', async (req, res)=> {

  // Récupérer les données depuis la collection 'redmi'
 const redmiSnapshot = await db.collection('redmi').get();
 const redmi = redmiSnapshot.docs.map((doc) => {
   const produitData = doc.data();
   return {
     ...produitData,
     id: uuidv4(), // Ajoute un nouvel ID unique à chaque produit
   };
 });

 // Rendre la vue en utilisant les données récupérées
 res.render('redmiPage.ejs', { redmi });

});

// Exemple pour la catégorie "itel"
app.get('/itel', async (req, res)=> {

  // Récupérer les données depuis la collection 'itel'
 const itelSnapshot = await db.collection('itel').get();
 const itel = itelSnapshot.docs.map((doc) => {
   const produitData = doc.data();
   return {
     ...produitData,
     id: uuidv4(), // Ajoute un nouvel ID unique à chaque produit
   };
 });

 // Rendre la vue en utilisant les données récupérées
 res.render('itelPage.ejs', { itel });

});

// Exemple pour la catégorie "infinix"
app.get('/infinix', async (req, res)=> {

 // Récupérer les données depuis la collection 'infinix'
 const infinixSnapshot = await db.collection('infinix').get();
 const infinix = infinixSnapshot.docs.map((doc) => {
   const produitData = doc.data();
   return {
     ...produitData,
     id: uuidv4(), // Ajoute un nouvel ID unique à chaque produit
   };
 });

 // Rendre la vue en utilisant les données récupérées
 res.render('infinixPage.ejs', { infinix });

});
// Exemple pour la catégorie "mac"
app.get('/mac', async (req, res)=> {

  // Récupérer les données depuis la collection 'mac'
 const macSnapshot = await db.collection('mac').get();
 const mac = macSnapshot.docs.map((doc) => {
   const produitData = doc.data();
   return {
     ...produitData,
     id: uuidv4(), // Ajoute un nouvel ID unique à chaque produit
   };
 });

 // Rendre la vue en utilisant les données récupérées
 res.render('macPage.ejs', { mac });

});

// Exemple pour la catégorie "dell"
app.get('/dell', async (req, res)=> {

  // Récupérer les données depuis la collection 'dell'
 const dellSnapshot = await db.collection('dell').get();
 const dell = dellSnapshot.docs.map((doc) => {
   const produitData = doc.data();
   return {
     ...produitData,
     id: uuidv4(), // Ajoute un nouvel ID unique à chaque produit
   };
 });

 // Rendre la vue en utilisant les données récupérées
 res.render('dellPage.ejs', { dell });

});

// Exemple pour la catégorie "hp"
app.get('/hp', async (req, res)=> {

  // Récupérer les données depuis la collection 'hp'
 const hpSnapshot = await db.collection('hp').get();
 const hp = hpSnapshot.docs.map((doc) => {
   const produitData = doc.data();
   return {
     ...produitData,
     id: uuidv4(), // Ajoute un nouvel ID unique à chaque produit
   };
 });

 // Rendre la vue en utilisant les données récupérées
 res.render('hpPage.ejs', { hp });

});

// Exemple pour la catégorie "telTools"
app.get('/telTools', async (req, res)=> {

  // Récupérer les données depuis la collection 'telTools'
 const telToolsSnapshot = await db.collection('teltools').get();
 const telTools = telToolsSnapshot.docs.map((doc) => {
   const produitData = doc.data();
   return {
     ...produitData,
     id: uuidv4(), // Ajoute un nouvel ID unique à chaque produit
   };
 });

 // Rendre la vue en utilisant les données récupérées
 res.render('telTools.ejs', { telTools });

});

// Exemple pour la catégorie "pcTools"
app.get('/pcTools', async (req, res)=> {

  // Récupérer les données depuis la collection 'pcTools'
 const pcToolsSnapshot = await db.collection('pcTools').get();
 const pcTools = pcToolsSnapshot.docs.map((doc) => {
   const produitData = doc.data();
   return {
     ...produitData,
     id: uuidv4(), // Ajoute un nouvel ID unique à chaque produit
   };
 });

 // Rendre la vue en utilisant les données récupérées
 res.render('pcTools.ejs', { pcTools });

});


// Exemple pour la catégorie "chicha"
app.get('/chicha', async (req, res)=> {

  // Récupérer les données depuis la collection 'chicha'
 const chichaSnapshot = await db.collection('chicha').get();
 const chicha = chichaSnapshot.docs.map((doc) => {
   const produitData = doc.data();
   return {
     ...produitData,
     id: uuidv4(), // Ajoute un nouvel ID unique à chaque produit
   };
 });

 // Rendre la vue en utilisant les données récupérées
 res.render('chicha.ejs', { chicha });

});

// Exemple pour la catégorie "puff"
app.get('/puff', async (req, res)=> {

  // Récupérer les données depuis la collection 'puff'
 const puffSnapshot = await db.collection('chausettesf').get();
 const puff = puffSnapshot.docs.map((doc) => {
   const produitData = doc.data();
   return {
     ...produitData,
     id: uuidv4(), // Ajoute un nouvel ID unique à chaque produit
   };
 });

 // Rendre la vue en utilisant les données récupérées
 res.render('puff.ejs', { puff });

});

// Exemple pour la catégorie "charbon"
app.get('/charbon', async (req, res)=> {

  // Récupérer les données depuis la collection 'charbon'
 const charbonSnapshot = await db.collection('charbon').get();
 const charbon = charbonSnapshot.docs.map((doc) => {
   const produitData = doc.data();
   return {
     ...produitData,
     id: uuidv4(), // Ajoute un nouvel ID unique à chaque produit
   };
 });

 // Rendre la vue en utilisant les données récupérées
 res.render('charbon.ejs', { charbon });

});

// Exemple pour la catégorie "arome"
app.get('/arome', async (req, res)=> {

  // Récupérer les données depuis la collection 'arome'
 const aromeSnapshot = await db.collection('arome').get();
 const arome = aromeSnapshot.docs.map((doc) => {
   const produitData = doc.data();
   return {
     ...produitData,
     id: uuidv4(), // Ajoute un nouvel ID unique à chaque produit
   };
 });

 // Rendre la vue en utilisant les données récupérées
 res.render('arome.ejs', { arome });

});

// vetements hommes 
// Exemple pour la catégorie "sacH"
app.get('/sacH', async (req, res)=> {

  // Récupérer les données depuis la collection 'sacH'
 const sacHSnapshot = await db.collection('sach').get();
 const sacH = sacHSnapshot.docs.map((doc) => {
   const produitData = doc.data();
   return {
     ...produitData,
     id: uuidv4(), // Ajoute un nouvel ID unique à chaque produit
   };
 });

 // Rendre la vue en utilisant les données récupérées
 res.render('sacHPage.ejs', { sacH });

});

// Copiez et adaptez ce bloc pour chaque catégorie de vêtements pour hommes
// Exemple pour la catégorie "chaussuresH"
app.get('/chaussuresH', async (req, res)=> {

  // Récupérer les données depuis la collection 'chaussuresH'
 const chaussuresHSnapshot = await db.collection('chaussures').get();
 const chaussuresH = chaussuresHSnapshot.docs.map((doc) => {
   const produitData = doc.data();
   return {
     ...produitData,
     id: uuidv4(), // Ajoute un nouvel ID unique à chaque produit
   };
 });

 // Rendre la vue en utilisant les données récupérées
 res.render('chaussuresHPage.ejs', { chaussuresH });

});

// Copiez et adaptez ce bloc pour chaque catégorie de vêtements pour hommes
// Exemple pour la catégorie "chaussetteH"
app.get('/chaussetteH', async (req, res)=> {

  // Récupérer les données depuis la collection 'chausetteH'
 const chausetteHSnapshot = await db.collection('chausettes').get();
 const chaussetteH = chausetteHSnapshot.docs.map((doc) => {
   const produitData = doc.data();
   return {
     ...produitData,
     id: uuidv4(), // Ajoute un nouvel ID unique à chaque produit
   };
 });

 // Rendre la vue en utilisant les données récupérées
 res.render('chaussetteHPage.ejs', { chaussetteH });

});


// Exemple pour la catégorie "outfith"
app.get('/outfitH', async (req, res)=> {

  // Récupérer les données depuis la collection 'outfitH'
 const outfitHSnapshot = await db.collection('chausettesf').get();
 const outfitH = outfitHSnapshot.docs.map((doc) => {
   const produitData = doc.data();
   return {
     ...produitData,
     id: uuidv4(), // Ajoute un nouvel ID unique à chaque produit
   };
 });

 // Rendre la vue en utilisant les données récupérées
 res.render('outfitHPage.ejs', { outfitH });

});


// vetements hommes 

// vetements femmes 
// Catégorie pour les femmes - "sacF"
app.get('/sacF', async (req, res)=> {

  // Récupérer les données depuis la collection 'sacF'
 const sacFSnapshot = await db.collection('chausettesf').get();
 const sacF = sacFSnapshot.docs.map((doc) => {
   const produitData = doc.data();
   return {
     ...produitData,
     id: uuidv4(), // Ajoute un nouvel ID unique à chaque produit
   };
 });

 // Rendre la vue en utilisant les données récupérées
 res.render('sacFPage.ejs', { sacF });

});

// Catégorie pour les femmes - "chaussetteF"
app.get('/chaussetteF', async (req, res)=> {

  // Récupérer les données depuis la collection 'chaussetteF'
 const chaussetteFSnapshot = await db.collection('chausettesf').get();
 const chaussetteF = chaussetteFSnapshot.docs.map((doc) => {
   const produitData = doc.data();
   return {
     ...produitData,
     id: uuidv4(), // Ajoute un nouvel ID unique à chaque produit
   };
 });

 // Rendre la vue en utilisant les données récupérées
 res.render('chaussetteFPage.ejs', { chaussetteF });

});

// Catégorie  - "chapeau"
app.get('/chapeau', async (req, res)=> {

  // Récupérer les données depuis la collection 'chapeau'
 const chapeauSnapshot = await db.collection('chapeau').get();
 const chapeau = chapeauSnapshot.docs.map((doc) => {
   const produitData = doc.data();
   return {
     ...produitData,
     id: uuidv4(), // Ajoute un nouvel ID unique à chaque produit
   };
 });

 // Rendre la vue en utilisant les données récupérées
 res.render('chapeauPage.ejs', { chapeau });

});

// Catégorie  - "outfitF"
app.get('/outfitF', async (req, res)=> {

  // Récupérer les données depuis la collection 'outfitF'
 const outfitFSnapshot = await db.collection('outfitF').get();
 const outfitF = outfitFSnapshot.docs.map((doc) => {
   const produitData = doc.data();
   return {
     ...produitData,
     id: uuidv4(), // Ajoute un nouvel ID unique à chaque produit
   };
 });

 // Rendre la vue en utilisant les données récupérées
 res.render('outfitFpage.ejs', { outfitF });

});

// Catégorie pour les femmes - "ceintureH"

app.get('/ceintureH', async (req, res)=> {

 // Récupérer les données depuis la collection 'ceintureH'
 const ceintureHSnapshot = await db.collection('ceintureh').get();
 const ceintureH = ceintureHSnapshot.docs.map((doc) => {
   const produitData = doc.data();
   return {
     ...produitData,
     id: uuidv4(), // Ajoute un nouvel ID unique à chaque produit
   };
 });

 // Rendre la vue en utilisant les données récupérées
 res.render('ceintureHpage.ejs', { ceintureH });

});

// Catégories de meubles et décoration :
// "meublePage"
app.get('/meublePage', async (req, res) => {
 
  // Récupérer les données depuis la collection 'meubleP'
  const meublePSnapshot = await db.collection('meubles').get();
  const meubleP = meublePSnapshot.docs.map((doc) => {
    const produitData = doc.data();
    return {
      ...produitData,
      id: uuidv4(), // Ajoute un nouvel ID unique à chaque produit
    };
  });

  // Rendre la vue en utilisant les données récupérées
  res.render('meublePage.ejs', { meubleP });


});
// Catégories de meubles et décoration :
// "decoPage"
app.get('/decoPage', async (req, res)=> {

  // Récupérer les données depuis la collection 'deco'
 const decoSnapshot = await db.collection('deco').get();
 const deco = decoSnapshot.docs.map((doc) => {
   const produitData = doc.data();
   return {
     ...produitData,
     id: uuidv4(), // Ajoute un nouvel ID unique à chaque produit
   };
 });

 // Rendre la vue en utilisant les données récupérées
 res.render('decoPage.ejs', { deco });

});

// Catégories de véhicules, appartements, enfants et beauté :
// "enfant"
app.get('/enfant', async (req, res)=> {

  // Récupérer les données depuis la collection 'enfant'
 const enfantSnapshot = await db.collection('enfants').get();
 const enfant = enfantSnapshot.docs.map((doc) => {
   const produitData = doc.data();
   return {
     ...produitData,
     id: uuidv4(), // Ajoute un nouvel ID unique à chaque produit
   };
 });

 // Rendre la vue en utilisant les données récupérées
 res.render('enfant.ejs', { enfant });

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
app.get('/vehicule', async (req, res)=> {

  // Récupérer les données depuis la collection 'vehicule'
 const vehiculeSnapshot = await db.collection('vehicule').get();
 const vehicule = vehiculeSnapshot.docs.map((doc) => {
   const produitData = doc.data();
   return {
     ...produitData,
     id: uuidv4(), // Ajoute un nouvel ID unique à chaque produit
   };
 });

 // Rendre la vue en utilisant les données récupérées
 res.render('vehicule.ejs', { vehicule });

});

// Catégories de véhicules, appartements, enfants et beauté :
// "beauter"
app.get('/beauter', async (req, res)=> {

  // Récupérer les données depuis la collection 'beauter'
 const beauterSnapshot = await db.collection('beauter').get();
 const beauter = beauterSnapshot.docs.map((doc) => {
   const produitData = doc.data();
   return {
     ...produitData,
     id: uuidv4(), // Ajoute un nouvel ID unique à chaque produit
   };
 });

 // Rendre la vue en utilisant les données récupérées
 res.render('beauter.ejs', { beauter });

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
app.get('/iphone/:id', function (req, res) {
  const productId = req.params.id;

  // Effectuez une requête à la base de données pour trouver le produit par ID
  db.query('SELECT * FROM iphones WHERE id = ?', [productId], function (error, results, fields) {
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
process.on('exit', function () {
  connection.end();
});
// les details views ici iphones //

// les details samsung views ici //
app.get('/samsung/:id', function (req, res) {
  const productId = req.params.id;

  // Effectuez une requête à la base de données pour trouver le produit par ID
  db.query('SELECT * FROM samsung WHERE id = ?', [productId], function (error, results, fields) {
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
process.on('exit', function () {
  connection.end();
});
// les details views ici samsung //

// les details oppo views ici //
app.get('/oppo/:id', function (req, res) {
  const productId = req.params.id;

  // Effectuez une requête à la base de données pour trouver le produit par ID
  db.query('SELECT * FROM oppo WHERE id = ?', [productId], function (error, results, fields) {
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
process.on('exit', function () {
  connection.end();
});
// les details views ici oppo //

// les details redmi views ici //
app.get('/redmi/:id', function (req, res) {
  const productId = req.params.id;

  // Effectuez une requête à la base de données pour trouver le produit par ID
  db.query('SELECT * FROM redmi WHERE id = ?', [productId], function (error, results, fields) {
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
process.on('exit', function () {
  connection.end();
});
// les details views ici redmi //

// les details tecno views ici //
app.get('/tecno/:id', function (req, res) {
  const productId = req.params.id;

  // Effectuez une requête à la base de données pour trouver le produit par ID
  db.query('SELECT * FROM tecno WHERE id = ?', [productId], function (error, results, fields) {
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
process.on('exit', function () {
  connection.end();
});
// les details views ici tecno //

// les details infinix views ici //
app.get('/infinix/:id', function (req, res) {
  const productId = req.params.id;

  // Effectuez une requête à la base de données pour trouver le produit par ID
  db.query('SELECT * FROM infinix WHERE id = ?', [productId], function (error, results, fields) {
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
process.on('exit', function () {
  connection.end();
});
// les details views ici infinix //

// les details itel views ici //
app.get('/itel/:id', function (req, res) {
  const productId = req.params.id;

  // Effectuez une requête à la base de données pour trouver le produit par ID
  db.query('SELECT * FROM itel WHERE id = ?', [productId], function (error, results, fields) {
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
process.on('exit', function () {
  connection.end();
});
// les details views ici itel //

// les details dell views ici //
app.get('/dell/:id', function (req, res) {
  const productId = req.params.id;

  // Effectuez une requête à la base de données pour trouver le produit par ID
  db.query('SELECT * FROM dell WHERE id = ?', [productId], function (error, results, fields) {
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
process.on('exit', function () {
  connection.end();
});
// les details views ici dell //

// les details mac views ici //
app.get('/mac/:id', function (req, res) {
  const productId = req.params.id;

  // Effectuez une requête à la base de données pour trouver le produit par ID
  db.query('SELECT * FROM mac WHERE id = ?', [productId], function (error, results, fields) {
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
process.on('exit', function () {
  connection.end();
});
// les details views ici mac //
// les details mac views ici //
app.get('/mac/:id', function (req, res) {
  const productId = req.params.id;

  // Effectuez une requête à la base de données pour trouver le produit par ID
  db.query('SELECT * FROM mac WHERE id = ?', [productId], function (error, results, fields) {
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
process.on('exit', function () {
  connection.end();
});
// les details views ici mac //

// les details hp views ici //
app.get('/hp/:id', function (req, res) {
  const productId = req.params.id;

  // Effectuez une requête à la base de données pour trouver le produit par ID
  db.query('SELECT * FROM hp WHERE id = ?', [productId], function (error, results, fields) {
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
process.on('exit', function () {
  connection.end();
});
// les details views ici hp //

// les details pctools views ici //
app.get('/pctools/:id', function (req, res) {
  const productId = req.params.id;

  // Effectuez une requête à la base de données pour trouver le produit par ID
  db.query('SELECT * FROM pctools WHERE id = ?', [productId], function (error, results, fields) {
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
process.on('exit', function () {
  connection.end();
});
// les details views ici pctools //

// les details teltools views ici //
app.get('/teltools/:id', function (req, res) {
  const productId = req.params.id;

  // Effectuez une requête à la base de données pour trouver le produit par ID
  db.query('SELECT * FROM teltools WHERE id = ?', [productId], function (error, results, fields) {
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
process.on('exit', function () {
  connection.end();
});
// les details views ici teltools //

// les details montresCo views ici //
app.get('/montresCoPage/:id', function (req, res) {
  const productId = req.params.id;

  // Effectuez une requête à la base de données pour trouver le produit par ID
  db.query('SELECT * FROM montresco WHERE id = ?', [productId], function (error, results, fields) {
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
process.on('exit', function () {
  connection.end();
});
// les details views ici montresCo //

app.use(bodyParser.json());



// Ajoutez une route pour recevoir les données du client
app.post('/envoyer-sur-telegram', bodyParser.json(), async (req, res) => {
  const { nom, tel, adresse } = req.body;

  // Construisez le message à envoyer sur Telegram en utilisant les données reçues
  const message = `🎀 Commande de ${nom} (${tel}) :\n\n` +
    produits.map((produit) => {
      return `${produit.nom} - ${produit.prix} CFA\nDescription : ${produit.description}\n`;
    }).join('\n');

  // Remplacez 'YOUR_BOT_TOKEN' et 'CHAT_ID' par les valeurs appropriées
  // const botToken = '5244781796:AAGCvFJnb8M6TcmUGidpMs4Ox8Rs72PVi-U';
  // const chatId = '1016981131';
  const botToken = '5244781796:AAGCvFJnb8M6TcmUGidpMs4Ox8Rs72PVi-U' ;
  const chatId = '1016981131';

  // Utilisez botToken et chatId dans votre code


  try {
    const response = await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`);

    if (response.status === 200) {
      res.json({ success: true });
    } else {
      console.error('Erreur lors de l\'envoi de la commande sur Telegram.');
      res.status(500).json({ error: 'Erreur lors de l\'envoi de la commande sur Telegram' });
    }
  } catch (error) {
    console.error('Erreur lors de l\'envoi de la commande sur Telegram :', error);
    res.status(500).json({ error: 'Erreur lors de l\'envoi de la commande sur Telegram' });
  }

});





app.listen(3333, () => {
  console.log('Le serveur est lancé sur le port 3333 !');
});
