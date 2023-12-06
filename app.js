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


// Route 
app.get('/', async (reeq, res) => {
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

// Route


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
app.get('/electro', function (req, res) {
  res.render('electroMenager.ejs');
});
// menu routes menu

// les pages pour montre & bijoux

app.get('/montresPage', async (req, res)=> {

  try {
    // Récupérer les données depuis la collection 'montres'
    const montresSnapshot = await db.collection('montres').get();
    const montres = montresSnapshot.docs.map((doc) => {
      const produitData = doc.data();
      return {
        ...produitData,
        id: doc.id, // Utilise l'ID réel du document dans Firestore
      };
    });
    // Rendre la vue en utilisant les données récupérées
    res.render('montresPage.ejs', { montres});
  } catch (error) {
    // Gérez les erreurs
    console.error('Erreur lors de la récupération des données montres :', error);
    res.status(500).send('Erreur interne du serveur');
  }

});

app.get('/montresCo', async (req, res)=> {

  try {
    // Récupérer les données depuis la collection 'montresCo'
    const montresCoSnapshot = await db.collection('montresCo').get();
    const montresCo = montresCoSnapshot.docs.map((doc) => {
      const produitData = doc.data();
      return {
        ...produitData,
        id: doc.id, // Utilise l'ID réel du document dans Firestore
      };
    });
    // Rendre la vue en utilisant les données récupérées
    res.render('montresCoPage.ejs', { montresCo});
  } catch (error) {
    // Gérez les erreurs
    console.error('Erreur lors de la récupération des données montresCo :', error);
    res.status(500).send('Erreur interne du serveur');
  }

});
app.get('/bague', async (req, res)=> {
  try {
    // Récupérer les données depuis la collection 'bague'
    const bagueSnapshot = await db.collection('bagues').get();
    const bague = bagueSnapshot.docs.map((doc) => {
      const produitData = doc.data();
      return {
        ...produitData,
        id: doc.id, // Utilise l'ID réel du document dans Firestore
      };
    });
    // Rendre la vue en utilisant les données récupérées
    res.render('bague.ejs', { bague});

  } catch (error) {
    // Gérez les erreurs
    console.error('Erreur lors de la récupération des données bague :', error);
    res.status(500).send('Erreur interne du serveur');
  }

});

app.get('/chaine', async (req, res)=> {

  try {
    // Récupérer les données depuis la collection 'chaine'
    const chaineSnapshot = await db.collection('chaines').get();
    const chaines = chaineSnapshot.docs.map((doc) => {
      const produitData = doc.data();
      return {
        ...produitData,
        id: doc.id, // Utilise l'ID réel du document dans Firestore
      };
    });
    // Rendre la vue en utilisant les données récupérées
    res.render('chaine.ejs', { chaines});
  } catch (error) {
    // Gérez les erreurs
    console.error('Erreur lors de la récupération des données chaine :', error);
    res.status(500).send('Erreur interne du serveur');
  }

});
// les pages pour montre & bijoux

// les pages pour tel & pc 

// Exemple spécifique pour la catégorie "iphone"
app.get('/iphone', async (req, res)=> {
  try {
    // Récupérer les données depuis la collection 'iphone'
    const iphoneSnapshot = await db.collection('iphones').get();
    const iphone = iphoneSnapshot.docs.map((doc) => {
      const produitData = doc.data();
      return {
        ...produitData,
        id: doc.id, // Utilise l'ID réel du document dans Firestore
      };
    });
    // Rendre la vue en utilisant les données récupérées
    res.render('iphonePage.ejs', { iphone});
  } catch (error) {
    // Gérez les erreurs
    console.error('Erreur lors de la récupération des données iPhone :', error);
    res.status(500).send('Erreur interne du serveur');
  }
});


// Exemple pour la catégorie "samsung"
app.get('/samsung', async (req, res)=> {

  try {
    // Récupérer les données depuis la collection 'samsung'
    const samsungSnapshot = await db.collection('samsung').get();
    const samsung = samsungSnapshot.docs.map((doc) => {
      const produitData = doc.data();
      return {
        ...produitData,
        id: doc.id, // Utilise l'ID réel du document dans Firestore
      };
    });
    // Rendre la vue en utilisant les données récupérées
    res.render('samsungPage.ejs', { samsung});
  } catch (error) {
    // Gérez les erreurs
    console.error('Erreur lors de la récupération des données samsung :', error);
    res.status(500).send('Erreur interne du serveur');
  }

});
// Exemple pour la catégorie "oppo"
app.get('/oppo', async (req, res)=> {

 try {
    // Récupérer les données depuis la collection 'oppo'
    const oppoSnapshot = await db.collection('oppo').get();
    const oppo = oppoSnapshot.docs.map((doc) => {
      const produitData = doc.data();
      return {
        ...produitData,
        id: doc.id, // Utilise l'ID réel du document dans Firestore
      };
    });
    // Rendre la vue en utilisant les données récupérées
    res.render('oppoPage.ejs', { oppo});
  } catch (error) {
    // Gérez les erreurs
    console.error('Erreur lors de la récupération des données oppo :', error);
    res.status(500).send('Erreur interne du serveur');
  }

});
// Exemple pour la catégorie "tecno"
app.get('/tecno', async (req, res)=> {

  try {
    // Récupérer les données depuis la collection 'tecno'
    const tecnoSnapshot = await db.collection('tecno').get();
    const tecno = tecnoSnapshot.docs.map((doc) => {
      const produitData = doc.data();
      return {
        ...produitData,
        id: doc.id, // Utilise l'ID réel du document dans Firestore
      };
    });
    // Rendre la vue en utilisant les données récupérées
    res.render('tecnoPage.ejs', { tecno});
  } catch (error) {
    // Gérez les erreurs
    console.error('Erreur lors de la récupération des données tecno :', error);
    res.status(500).send('Erreur interne du serveur');
  }

});

app.get('/redmi', async (req, res)=> {

  try {
    // Récupérer les données depuis la collection 'redmi'
    const redmiSnapshot = await db.collection('redmi').get();
    const redmi = redmiSnapshot.docs.map((doc) => {
      const produitData = doc.data();
      return {
        ...produitData,
        id: doc.id, // Utilise l'ID réel du document dans Firestore
      };
    });
    // Rendre la vue en utilisant les données récupérées
    res.render('redmiPage.ejs', { redmi});
  } catch (error) {
    // Gérez les erreurs
    console.error('Erreur lors de la récupération des données redmi :', error);
    res.status(500).send('Erreur interne du serveur');
  }


});

// Exemple pour la catégorie "itel"
app.get('/itel', async (req, res)=> {

  try {
    // Récupérer les données depuis la collection 'itel'
    const itelSnapshot = await db.collection('itel').get();
    const itel = itelSnapshot.docs.map((doc) => {
      const produitData = doc.data();
      return {
        ...produitData,
        id: doc.id, // Utilise l'ID réel du document dans Firestore
      };
    });
    // Rendre la vue en utilisant les données récupérées
    res.render('itelPage.ejs', { itel});
  } catch (error) {
    // Gérez les erreurs
    console.error('Erreur lors de la récupération des données itel :', error);
    res.status(500).send('Erreur interne du serveur');
  }


});

// Exemple pour la catégorie "infinix"
app.get('/infinix', async (req, res)=> {

  try {
    // Récupérer les données depuis la collection 'infinix'
    const infinixSnapshot = await db.collection('infinix').get();
    const infinix = infinixSnapshot.docs.map((doc) => {
      const produitData = doc.data();
      return {
        ...produitData,
        id: doc.id, // Utilise l'ID réel du document dans Firestore
      };
    });
    // Rendre la vue en utilisant les données récupérées
    res.render('infinixPage.ejs', { infinix});
  } catch (error) {
    // Gérez les erreurs
    console.error('Erreur lors de la récupération des données infinix :', error);
    res.status(500).send('Erreur interne du serveur');
  }


});
// Exemple pour la catégorie "mac"
app.get('/mac', async (req, res)=> {

  try {
    // Récupérer les données depuis la collection 'mac'
    const macSnapshot = await db.collection('mac').get();
    const mac = macSnapshot.docs.map((doc) => {
      const produitData = doc.data();
      return {
        ...produitData,
        id: doc.id, // Utilise l'ID réel du document dans Firestore
      };
    });
    // Rendre la vue en utilisant les données récupérées
    res.render('macPage.ejs', { mac});
  } catch (error) {
    // Gérez les erreurs
    console.error('Erreur lors de la récupération des données mac :', error);
    res.status(500).send('Erreur interne du serveur');
  }


});

// Exemple pour la catégorie "dell"
app.get('/dell', async (req, res)=> {

  try {
    // Récupérer les données depuis la collection 'dell'
    const dellSnapshot = await db.collection('dell').get();
    const dell = dellSnapshot.docs.map((doc) => {
      const produitData = doc.data();
      return {
        ...produitData,
        id: doc.id, // Utilise l'ID réel du document dans Firestore
      };
    });
    // Rendre la vue en utilisant les données récupérées
    res.render('dellPage.ejs', { dell});
  } catch (error) {
    // Gérez les erreurs
    console.error('Erreur lors de la récupération des données dell :', error);
    res.status(500).send('Erreur interne du serveur');
  }


});

// Exemple pour la catégorie "hp"
app.get('/hp', async (req, res)=> {

  try {
    // Récupérer les données depuis la collection 'hp'
    const hpSnapshot = await db.collection('hp').get();
    const hp = hpSnapshot.docs.map((doc) => {
      const produitData = doc.data();
      return {
        ...produitData,
        id: doc.id, // Utilise l'ID réel du document dans Firestore
      };
    });
    // Rendre la vue en utilisant les données récupérées
    res.render('hpPage.ejs', { hp});
  } catch (error) {
    // Gérez les erreurs
    console.error('Erreur lors de la récupération des données hp :', error);
    res.status(500).send('Erreur interne du serveur');
  }

});

// Exemple pour la catégorie "telTools"
app.get('/telTools', async (req, res)=> {

  try {
    // Récupérer les données depuis la collection 'teltools'
    const teltoolsSnapshot = await db.collection('teltools').get();
    const teltools = teltoolsSnapshot.docs.map((doc) => {
      const produitData = doc.data();
      return {
        ...produitData,
        id: doc.id, // Utilise l'ID réel du document dans Firestore
      };
    });
    // Rendre la vue en utilisant les données récupérées
    res.render('telTools.ejs', { teltools});
  } catch (error) {
    // Gérez les erreurs
    console.error('Erreur lors de la récupération des données teltools :', error);
    res.status(500).send('Erreur interne du serveur');
  }

});

// Exemple pour la catégorie "pcTools"
app.get('/pcTools', async (req, res)=> {

  try {
    // Récupérer les données depuis la collection 'pctools'
    const pctoolsSnapshot = await db.collection('pctools').get();
    const pctools = pctoolsSnapshot.docs.map((doc) => {
      const produitData = doc.data();
      return {
        ...produitData,
        id: doc.id, // Utilise l'ID réel du document dans Firestore
      };
    });
    // Rendre la vue en utilisant les données récupérées
    res.render('pcTools.ejs', { pctools});
  } catch (error) {
    // Gérez les erreurs
    console.error('Erreur lors de la récupération des données pctools :', error);
    res.status(500).send('Erreur interne du serveur');
  }


});


// Exemple pour la catégorie "chicha"
app.get('/chicha', async (req, res)=> {

  try {
    // Récupérer les données depuis la collection 'chicha'
    const chichaSnapshot = await db.collection('chicha').get();
    const chicha = chichaSnapshot.docs.map((doc) => {
      const produitData = doc.data();
      return {
        ...produitData,
        id: doc.id, // Utilise l'ID réel du document dans Firestore
      };
    });
    // Rendre la vue en utilisant les données récupérées
    res.render('chicha.ejs', { chicha});
  } catch (error) {
    // Gérez les erreurs
    console.error('Erreur lors de la récupération des données chicha :', error);
    res.status(500).send('Erreur interne du serveur');
  }


});

// Exemple pour la catégorie "puff"
app.get('/puff', async (req, res)=> {

  try {
    // Récupérer les données depuis la collection 'puff'
    const puffSnapshot = await db.collection('puff').get();
    const puff = puffSnapshot.docs.map((doc) => {
      const produitData = doc.data();
      return {
        ...produitData,
        id: doc.id, // Utilise l'ID réel du document dans Firestore
      };
    });
    // Rendre la vue en utilisant les données récupérées
    res.render('puff.ejs', { puff});
  } catch (error) {
    // Gérez les erreurs
    console.error('Erreur lors de la récupération des données puff :', error);
    res.status(500).send('Erreur interne du serveur');
  }


});

// Exemple pour la catégorie "charbon"
app.get('/charbon', async (req, res)=> {

  try {
    // Récupérer les données depuis la collection 'charbon'
    const charbonSnapshot = await db.collection('charbon').get();
    const charbon = charbonSnapshot.docs.map((doc) => {
      const produitData = doc.data();
      return {
        ...produitData,
        id: doc.id, // Utilise l'ID réel du document dans Firestore
      };
    });
    // Rendre la vue en utilisant les données récupérées
    res.render('charbon.ejs', { charbon});
  } catch (error) {
    // Gérez les erreurs
    console.error('Erreur lors de la récupération des données charbon :', error);
    res.status(500).send('Erreur interne du serveur');
  }


});

// Exemple pour la catégorie "arome"
app.get('/arome', async (req, res)=> {

  try {
    // Récupérer les données depuis la collection 'arome'
    const aromeSnapshot = await db.collection('arome').get();
    const arome = aromeSnapshot.docs.map((doc) => {
      const produitData = doc.data();
      return {
        ...produitData,
        id: doc.id, // Utilise l'ID réel du document dans Firestore
      };
    });
    // Rendre la vue en utilisant les données récupérées
    res.render('arome.ejs', { arome});
  } catch (error) {
    // Gérez les erreurs
    console.error('Erreur lors de la récupération des données arome :', error);
    res.status(500).send('Erreur interne du serveur');
  }

});

// vetements hommes 
// Exemple pour la catégorie "sacH"
app.get('/sacH', async (req, res)=> {

  try {
    // Récupérer les données depuis la collection 'sacH'
    const sacHSnapshot = await db.collection('sacH').get();
    const sacH = sacHSnapshot.docs.map((doc) => {
      const produitData = doc.data();
      return {
        ...produitData,
        id: doc.id, // Utilise l'ID réel du document dans Firestore
      };
    });
    // Rendre la vue en utilisant les données récupérées
    res.render('sacHPage.ejs', { sacH});
  } catch (error) {
    // Gérez les erreurs
    console.error('Erreur lors de la récupération des données sacH :', error);
    res.status(500).send('Erreur interne du serveur');
  }


});

// Copiez et adaptez ce bloc pour chaque catégorie de vêtements pour hommes

// Exemple pour la catégorie "chaussuresH"
app.get('/chaussuresH', async (req, res)=> {

  try {
    // Récupérer les données depuis la collection 'chaussuresH'
    const chaussuresHSnapshot = await db.collection('chaussuresH').get();
    const chaussuresH = chaussuresHSnapshot.docs.map((doc) => {
      const produitData = doc.data();
      return {
        ...produitData,
        id: doc.id, // Utilise l'ID réel du document dans Firestore
      };
    });
    // Rendre la vue en utilisant les données récupérées
    res.render('chaussuresHPage.ejs', { chaussuresH});
  } catch (error) {
    // Gérez les erreurs
    console.error('Erreur lors de la récupération des données chaussuresH :', error);
    res.status(500).send('Erreur interne du serveur');
  }

});

// Copiez et adaptez ce bloc pour chaque catégorie de vêtements pour hommes
// Exemple pour la catégorie "chaussetteH"
app.get('/chaussetteH', async (req, res)=> {

  try {
    // Récupérer les données depuis la collection 'chaussetteH'
    const chaussetteHSnapshot = await db.collection('chaussetteH').get();
    const chaussetteH = chaussetteHSnapshot.docs.map((doc) => {
      const produitData = doc.data();
      return {
        ...produitData,
        id: doc.id, // Utilise l'ID réel du document dans Firestore
      };
    });
    // Rendre la vue en utilisant les données récupérées
    res.render('chaussetteHPage.ejs', { chaussetteH});
  } catch (error) {
    // Gérez les erreurs
    console.error('Erreur lors de la récupération des données chaussetteH :', error);
    res.status(500).send('Erreur interne du serveur');
  }


});


// Exemple pour la catégorie "outfith"
app.get('/outfitH', async (req, res)=> {

  try {
    // Récupérer les données depuis la collection 'outfitH'
    const outfitHSnapshot = await db.collection('outfitH').get();
    const outfitH = outfitHSnapshot.docs.map((doc) => {
      const produitData = doc.data();
      return {
        ...produitData,
        id: doc.id, // Utilise l'ID réel du document dans Firestore
      };
    });
    // Rendre la vue en utilisant les données récupérées
    res.render('outfitHPage.ejs', { outfitH});
  } catch (error) {
    // Gérez les erreurs
    console.error('Erreur lors de la récupération des données outfitH :', error);
    res.status(500).send('Erreur interne du serveur');
  }

});

// vetements hommes 

// vetements femmes 
// Catégorie pour les femmes - "sacF"
app.get('/sacF', async (req, res)=> {
  try {
    // Récupérer les données depuis la collection 'sacF'
    const sacFSnapshot = await db.collection('sacF').get();
    const sacF = sacFSnapshot.docs.map((doc) => {
      const produitData = doc.data();
      return {
        ...produitData,
        id: doc.id, // Utilise l'ID réel du document dans Firestore
      };
    });
    // Rendre la vue en utilisant les données récupérées
    res.render('sacFPage.ejs', { sacF});
  } catch (error) {
    // Gérez les erreurs
    console.error('Erreur lors de la récupération des données sacF :', error);
    res.status(500).send('Erreur interne du serveur');
  }


});

// Catégorie pour les femmes - "chaussetteF"
app.get('/chaussetteF', async (req, res)=> {

  try {
    // Récupérer les données depuis la collection 'chaussetteF'
    const chaussetteFSnapshot = await db.collection('chaussetteF').get();
    const chaussetteF = chaussetteFSnapshot.docs.map((doc) => {
      const produitData = doc.data();
      return {
        ...produitData,
        id: doc.id, // Utilise l'ID réel du document dans Firestore
      };
    });
    // Rendre la vue en utilisant les données récupérées
    res.render('chaussetteFPage.ejs', { chaussetteF});
  } catch (error) {
    // Gérez les erreurs
    console.error('Erreur lors de la récupération des données chaussetteF :', error);
    res.status(500).send('Erreur interne du serveur');
  }


});

// Catégorie  - "chapeau"
app.get('/chapeau', async (req, res)=> {

  try {
    // Récupérer les données depuis la collection 'chapeau'
    const chapeauSnapshot = await db.collection('chapeau').get();
    const chapeau = chapeauSnapshot.docs.map((doc) => {
      const produitData = doc.data();
      return {
        ...produitData,
        id: doc.id, // Utilise l'ID réel du document dans Firestore
      };
    });
    // Rendre la vue en utilisant les données récupérées
    res.render('chapeauPage.ejs', { chapeau});
  } catch (error) {
    // Gérez les erreurs
    console.error('Erreur lors de la récupération des données chapeau :', error);
    res.status(500).send('Erreur interne du serveur');
  }


});

// Catégorie  - "outfitF"
app.get('/outfitF', async (req, res)=> {

  try {
    // Récupérer les données depuis la collection 'outfitF'
    const outfitFSnapshot = await db.collection('outfitF').get();
    const outfitF = outfitFSnapshot.docs.map((doc) => {
      const produitData = doc.data();
      return {
        ...produitData,
        id: doc.id, // Utilise l'ID réel du document dans Firestore
      };
    });
    // Rendre la vue en utilisant les données récupérées
    res.render('outfitFPage.ejs', { outfitF});

  } catch (error) {
    // Gérez les erreurs
    console.error('Erreur lors de la récupération des données outfitF :', error);
    res.status(500).send('Erreur interne du serveur');
  }


});

// Catégorie pour les femmes - "ceintureH"

app.get('/ceintureH', async (req, res)=> {
 
  try {
    // Récupérer les données depuis la collection 'ceintureH'
    const ceintureHSnapshot = await db.collection('ceintureH').get();
    const ceintureH = ceintureHSnapshot.docs.map((doc) => {
      const produitData = doc.data();
      return {
        ...produitData,
        id: doc.id, // Utilise l'ID réel du document dans Firestore
      };
    });
    // Rendre la vue en utilisant les données récupérées
    res.render('ceintureHPage.ejs', { ceintureH});
  } catch (error) {
    // Gérez les erreurs
    console.error('Erreur lors de la récupération des données ceintureH :', error);
    res.status(500).send('Erreur interne du serveur');
  }

});

// Catégories de meubles et décoration :
// "meublePage"
app.get('/meublePage', async (req, res) => {
 
  try {
    // Récupérer les données depuis la collection 'meuble'
    const meubleSnapshot = await db.collection('meuble').get();
    const meuble = meubleSnapshot.docs.map((doc) => {
      const produitData = doc.data();
      return {
        ...produitData,
        id: doc.id, // Utilise l'ID réel du document dans Firestore
      };
    });
    // Rendre la vue en utilisant les données récupérées
    res.render('meublePage.ejs', { meuble});
  } catch (error) {
    // Gérez les erreurs
    console.error('Erreur lors de la récupération des données meuble :', error);
    res.status(500).send('Erreur interne du serveur');
  }

});
// Catégories de meubles et décoration :
// "decoPage"
app.get('/decoPage', async (req, res)=> {

  try {
    // Récupérer les données depuis la collection 'deco'
    const decoSnapshot = await db.collection('deco').get();
    const deco = decoSnapshot.docs.map((doc) => {
      const produitData = doc.data();
      return {
        ...produitData,
        id: doc.id, // Utilise l'ID réel du document dans Firestore
      };
    });
    // Rendre la vue en utilisant les données récupérées
    res.render('decoPage.ejs', { deco});
  } catch (error) {
    // Gérez les erreurs
    console.error('Erreur lors de la récupération des données deco :', error);
    res.status(500).send('Erreur interne du serveur');
  }

});

// Catégories de véhicules, appartements, enfants et beauté :
// "enfant"
app.get('/enfant', async (req, res)=> {

  try {
    // Récupérer les données depuis la collection 'enfant'
    const enfantSnapshot = await db.collection('enfant').get();
    const enfant = enfantSnapshot.docs.map((doc) => {
      const produitData = doc.data();
      return {
        ...produitData,
        id: doc.id, // Utilise l'ID réel du document dans Firestore
      };
    });
    // Rendre la vue en utilisant les données récupérées
    res.render('enfantPage.ejs', { enfant});
  } catch (error) {
    // Gérez les erreurs
    console.error('Erreur lors de la récupération des données enfant :', error);
    res.status(500).send('Erreur interne du serveur');
  }

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

  try {
    // Récupérer les données depuis la collection 'vehicule'
    const vehiculeSnapshot = await db.collection('vehicule').get();
    const vehicule = vehiculeSnapshot.docs.map((doc) => {
      const produitData = doc.data();
      return {
        ...produitData,
        id: doc.id, // Utilise l'ID réel du document dans Firestore
      };
    });
    // Rendre la vue en utilisant les données récupérées
    res.render('vehiculePage.ejs', { vehicule});
  } catch (error) {
    // Gérez les erreurs
    console.error('Erreur lors de la récupération des données vehicule :', error);
    res.status(500).send('Erreur interne du serveur');
  }

});

// Catégories de véhicules, appartements, enfants et beauté :
// "beauter"
app.get('/beauter', async (req, res)=> {

  try {
    // Récupérer les données depuis la collection 'beauter'
    const beauterSnapshot = await db.collection('beauter').get();
    const beauter = beauterSnapshot.docs.map((doc) => {
      const produitData = doc.data();
      return {
        ...produitData,
        id: doc.id, // Utilise l'ID réel du document dans Firestore
      };
    });
    // Rendre la vue en utilisant les données récupérées
    res.render('beauterPage.ejs', { beauter});
  } catch (error) {
    // Gérez les erreurs
    console.error('Erreur lors de la récupération des données beauter :', error);
    res.status(500).send('Erreur interne du serveur');
  }

});

// Catégorie d'électroménagers :


// Catégorie d'électroménagers :
// "fours"
app.get('/fours', async (req, res)=> {

  try {
    // Récupérer les données depuis la collection 'fours'
    const foursSnapshot = await db.collection('fours').get();
    const fours = foursSnapshot.docs.map((doc) => {
      const produitData = doc.data();
      return {
        ...produitData,
        id: doc.id, // Utilise l'ID réel du document dans Firestore
      };
    });
    // Rendre la vue en utilisant les données récupérées
    res.render('foursPage.ejs', { fours});
  } catch (error) {
    // Gérez les erreurs
    console.error('Erreur lors de la récupération des données fours :', error);
    res.status(500).send('Erreur interne du serveur');
  }

});
// "fours"




// Catégorie d'électroménagers :
// "mixeurs"
app.get('/mixeurs', async (req, res)=> {

  try {
    // Récupérer les données depuis la collection 'mixeurs'
    const mixeursSnapshot = await db.collection('mixeurs').get();
    const mixeurs = mixeursSnapshot.docs.map((doc) => {
      const produitData = doc.data();
      return {
        ...produitData,
        id: doc.id, // Utilise l'ID réel du document dans Firestore
      };
    });
    // Rendre la vue en utilisant les données récupérées
    res.render('mixeursPage.ejs', { mixeurs});
  } catch (error) {
    // Gérez les erreurs
    console.error('Erreur lors de la récupération des données mixeurs :', error);
    res.status(500).send('Erreur interne du serveur');
  }

});

// Catégorie d'électroménagers :
// "cusinieres"
app.get('/cusinieres', async (req, res)=> {

  try {
    // Récupérer les données depuis la collection 'cusinieres'
    const cusinieresSnapshot = await db.collection('cusinieres').get();
    const cusinieres = cusinieresSnapshot.docs.map((doc) => {
      const produitData = doc.data();
      return {
        ...produitData,
        id: doc.id, // Utilise l'ID réel du document dans Firestore
      };
    });
    // Rendre la vue en utilisant les données récupérées
    res.render('cusinieresPage.ejs', { cusinieres});
  } catch (error) {
    // Gérez les erreurs
    console.error('Erreur lors de la récupération des données cusinieres :', error);
    res.status(500).send('Erreur interne du serveur');
  }

});

// Catégorie d'électroménagers :
// "frigideres"
app.get('/frigideres', async (req, res)=> {

  try {
    // Récupérer les données depuis la collection 'frigideres'
    const frigideresSnapshot = await db.collection('frigideres').get();
    const frigideres = frigideresSnapshot.docs.map((doc) => {
      const produitData = doc.data();
      return {
        ...produitData,
        id: doc.id, // Utilise l'ID réel du document dans Firestore
      };
    });
    // Rendre la vue en utilisant les données récupérées
    res.render('frigideresPage.ejs', { frigideres});
  } catch (error) {
    // Gérez les erreurs
    console.error('Erreur lors de la récupération des données frigideres :', error);
    res.status(500).send('Erreur interne du serveur');
  }

});

// Catégorie d'électroménagers :
// "cafetieres"
app.get('/cafetieres', async (req, res)=> {

  try {
    // Récupérer les données depuis la collection 'cafetieres'
    const cafetieresSnapshot = await db.collection('cafetieres').get();
    const cafetieres = cafetieresSnapshot.docs.map((doc) => {
      const produitData = doc.data();
      return {
        ...produitData,
        id: doc.id, // Utilise l'ID réel du document dans Firestore
      };
    });
    // Rendre la vue en utilisant les données récupérées
    res.render('cafetieresPage.ejs', { cafetieres});
  } catch (error) {
    // Gérez les erreurs
    console.error('Erreur lors de la récupération des données cafetieres :', error);
    res.status(500).send('Erreur interne du serveur');
  }

});

// Catégorie d'électroménagers :
// "grillesPains"
app.get('/grillesPains', async (req, res)=> {

  try {
    // Récupérer les données depuis la collection 'grillesPains'
    const grillesPainsSnapshot = await db.collection('grillesPains').get();
    const grillesPains = grillesPainsSnapshot.docs.map((doc) => {
      const produitData = doc.data();
      return {
        ...produitData,
        id: doc.id, // Utilise l'ID réel du document dans Firestore
      };
    });
    // Rendre la vue en utilisant les données récupérées
    res.render('grillesPainsPage.ejs', { grillesPains});
  } catch (error) {
    // Gérez les erreurs
    console.error('Erreur lors de la récupération des données grillesPains :', error);
    res.status(500).send('Erreur interne du serveur');
  }

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

app.get('/iphone/:id', async (req, res) => {
  const productId = req.params.id;

  try {
    // Récupérez les détails de l'iPhone depuis Firestore en utilisant l'ID
    const docRef = db.collection('iphones').doc(productId);
    const doc = await docRef.get();

    if (doc.exists) {
      // Si le document existe, récupérez les données et affichez la vue de détails
      const product = {
        id: doc.id,
        ...doc.data(),
      };

      res.render('Detail.ejs', { product });
    } else {
      // Si le document n'existe pas, redirigez vers une page d'erreur ou autre page par défaut
      res.redirect('/iphone');

    }
  } catch (error) {
    // Gérez les erreurs
    console.error(error);
    res.status(500).send('Erreur interne du serveur');
  }
});


// les details iphones views ici //


// les details samsung views ici //
app.get('/samsung/:id', async (req, res) => {
  const productId = req.params.id;

  try {
    // Récupérez les détails de l'iPhone depuis Firestore en utilisant l'ID
    const docRef = db.collection('samsung').doc(productId);
    const doc = await docRef.get();

    if (doc.exists) {
      // Si le document existe, récupérez les données et affichez la vue de détails
      const product = {
        id: doc.id,
        ...doc.data(),
      };

      res.render('Detail.ejs', { product });
    } else {
      // Si le document n'existe pas, redirigez vers une page d'erreur ou autre page par défaut
      res.redirect('/samsung');

    }
  } catch (error) {
    // Gérez les erreurs
    console.error(error);
    res.status(500).send('Erreur interne du serveur');
  }
});

// les details views ici samsung //

// les details oppo views ici //
app.get('/oppo/:id', async (req, res) =>{
  const productId = req.params.id;

  try {
    // Récupérez les détails de oppo depuis Firestore en utilisant l'ID
    const docRef = db.collection('oppo').doc(productId);
    const doc = await docRef.get();

    if (doc.exists) {
      // Si le document existe, récupérez les données et affichez la vue de détails
      const product = {
        id: doc.id,
        ...doc.data(),
      };

      res.render('Detail.ejs', { product });
    } else {
      // Si le document n'existe pas, redirigez vers une page d'erreur ou autre page par défaut
      res.redirect('/oppo');

    }
  } catch (error) {
    // Gérez les erreurs
    console.error(error);
    res.status(500).send('Erreur interne du serveur');
  }
 
});

// les details views ici oppo //

// les details redmi views ici //
app.get('/redmi/:id', async (req, res)=> {
  const productId = req.params.id;

  try {
    // Récupérez les détails de redmi depuis Firestore en utilisant l'ID
    const docRef = db.collection('redmi').doc(productId);
    const doc = await docRef.get();

    if (doc.exists) {
      // Si le document existe, récupérez les données et affichez la vue de détails
      const product = {
        id: doc.id,
        ...doc.data(),
      };

      res.render('Detail.ejs', { product });
    } else {
      // Si le document n'existe pas, redirigez vers une page d'erreur ou autre page par défaut
      res.redirect('/redmi');

    }
  } catch (error) {
    // Gérez les erreurs
    console.error(error);
    res.status(500).send('Erreur interne du serveur');
  }
});


// les details views ici redmi //

// les details tecno views ici //
app.get('/tecno/:id', async (req, res) => {
  const productId = req.params.id;

  try {
    // Récupérez les détails de tecno depuis Firestore en utilisant l'ID
    const docRef = db.collection('tecno').doc(productId);
    const doc = await docRef.get();

    if (doc.exists) {
      // Si le document existe, récupérez les données et affichez la vue de détails
      const product = {
        id: doc.id,
        ...doc.data(),
      };

      res.render('Detail.ejs', { product });
    } else {
      // Si le document n'existe pas, redirigez vers une page d'erreur ou autre page par défaut
      res.redirect('/tecno');

    }
  } catch (error) {
    // Gérez les erreurs
    console.error(error);
    res.status(500).send('Erreur interne du serveur');
  }
});

// les details views ici tecno //

// les details infinix views ici //
app.get('/infinix/:id', async (req, res) => {
  const productId = req.params.id;

  try {
    // Récupérez les détails de infinix depuis Firestore en utilisant l'ID
    const docRef = db.collection('infinix').doc(productId);
    const doc = await docRef.get();

    if (doc.exists) {
      // Si le document existe, récupérez les données et affichez la vue de détails
      const product = {
        id: doc.id,
        ...doc.data(),
      };

      res.render('Detail.ejs', { product });
    } else {
      // Si le document n'existe pas, redirigez vers une page d'erreur ou autre page par défaut
      res.redirect('/infinix');

    }
  } catch (error) {
    // Gérez les erreurs
    console.error(error);
    res.status(500).send('Erreur interne du serveur');
  }
});

// les details views ici infinix //

// les details itel views ici //
app.get('/itel/:id', async (req, res) => {
  const productId = req.params.id;

  try {
    // Récupérez les détails de itel depuis Firestore en utilisant l'ID
    const docRef = db.collection('itel').doc(productId);
    const doc = await docRef.get();

    if (doc.exists) {
      // Si le document existe, récupérez les données et affichez la vue de détails
      const product = {
        id: doc.id,
        ...doc.data(),
      };

      res.render('Detail.ejs', { product });
    } else {
      // Si le document n'existe pas, redirigez vers une page d'erreur ou autre page par défaut
      res.redirect('/itel');

    }
  } catch (error) {
    // Gérez les erreurs
    console.error(error);
    res.status(500).send('Erreur interne du serveur');
  }
});

// les details views ici itel //

// les details dell views ici //
app.get('/dell/:id', async (req, res) => {
  const productId = req.params.id;

  try {
    // Récupérez les détails de dell depuis Firestore en utilisant l'ID
    const docRef = db.collection('dell').doc(productId);
    const doc = await docRef.get();

    if (doc.exists) {
      // Si le document existe, récupérez les données et affichez la vue de détails
      const product = {
        id: doc.id,
        ...doc.data(),
      };

      res.render('Detail.ejs', { product });
    } else {
      // Si le document n'existe pas, redirigez vers une page d'erreur ou autre page par défaut
      res.redirect('/dell');

    }
  } catch (error) {
    // Gérez les erreurs
    console.error(error);
    res.status(500).send('Erreur interne du serveur');
  }
});

// les details views ici dell //

// les details mac views ici //
app.get('/mac/:id', async (req, res) => {
  const productId = req.params.id;

  // Effectuez une requête à la base de données pour trouver le produit par ID
  try {
    // Récupérez les détails de mac depuis Firestore en utilisant l'ID
    const docRef = db.collection('mac').doc(productId);
    const doc = await docRef.get();

    if (doc.exists) {
      // Si le document existe, récupérez les données et affichez la vue de détails
      const product = {
        id: doc.id,
        ...doc.data(),
      };

      res.render('Detail.ejs', { product });
    } else {
      // Si le document n'existe pas, redirigez vers une page d'erreur ou autre page par défaut
      res.redirect('/mac');

    }
  } catch (error) {
    // Gérez les erreurs
    console.error(error);
    res.status(500).send('Erreur interne du serveur');
  }
});

// les details views ici mac //

// les details hp views ici //
app.get('/hp/:id', async (req, res) => {
  const productId = req.params.id;

  try {
    // Récupérez les détails de hp depuis Firestore en utilisant l'ID
    const docRef = db.collection('hp').doc(productId);
    const doc = await docRef.get();

    if (doc.exists) {
      // Si le document existe, récupérez les données et affichez la vue de détails
      const product = {
        id: doc.id,
        ...doc.data(),
      };

      res.render('Detail.ejs', { product });
    } else {
      // Si le document n'existe pas, redirigez vers une page d'erreur ou autre page par défaut
      res.redirect('/hp');

    }
  } catch (error) {
    // Gérez les erreurs
    console.error(error);
    res.status(500).send('Erreur interne du serveur');
  }
});

// les details views ici hp //

// les details pctools views ici //
app.get('/pctools/:id', async (req, res) => {
  const productId = req.params.id;

  try {
    // Récupérez les détails de pctools depuis Firestore en utilisant l'ID
    const docRef = db.collection('pctools').doc(productId);
    const doc = await docRef.get();

    if (doc.exists) {
      // Si le document existe, récupérez les données et affichez la vue de détails
      const product = {
        id: doc.id,
        ...doc.data(),
      };

      res.render('Detail.ejs', { product });
    } else {
      // Si le document n'existe pas, redirigez vers une page d'erreur ou autre page par défaut
      res.redirect('/pctools');

    }
  } catch (error) {
    // Gérez les erreurs
    console.error(error);
    res.status(500).send('Erreur interne du serveur');
  }
  
});

// les details views ici pctools //

// les details teltools views ici //
app.get('/teltools/:id', async (req, res) => {
  const productId = req.params.id;

  try {
    // Récupérez les détails de teltools depuis Firestore en utilisant l'ID
    const docRef = db.collection('teltools').doc(productId);
    const doc = await docRef.get();

    if (doc.exists) {
      // Si le document existe, récupérez les données et affichez la vue de détails
      const product = {
        id: doc.id,
        ...doc.data(),
      };

      res.render('Detail.ejs', { product });
    } else {
      // Si le document n'existe pas, redirigez vers une page d'erreur ou autre page par défaut
      res.redirect('/telTools');

    }
  } catch (error) {
    // Gérez les erreurs
    console.error(error);
    res.status(500).send('Erreur interne du serveur');
  }
});

// les details views ici teltools //

// les details montresCo views ici //
app.get('/montresCo/:id', async (req, res) => {
  const productId = req.params.id;

  try {
    // Récupérez les détails de montresCo depuis Firestore en utilisant l'ID
    const docRef = db.collection('montresco').doc(productId);
    const doc = await docRef.get();

    if (doc.exists) {
      // Si le document existe, récupérez les données et affichez la vue de détails
      const product = {
        id: doc.id,
        ...doc.data(),
      };

      res.render('Detail.ejs', { product });
    } else {
      // Si le document n'existe pas, redirigez vers une page d'erreur ou autre page par défaut
      res.redirect('/montresCo');

    }
  } catch (error) {
    // Gérez les erreurs
    console.error(error);
    res.status(500).send('Erreur interne du serveur');
  }
});
// les details views ici montresCo //

// les details montresPage views ici //
app.get('/montresPage/:id', async (req, res) => {
  const productId = req.params.id;

  try {
    // Récupérez les détails de montresPage depuis Firestore en utilisant l'ID
    const docRef = db.collection('montres').doc(productId);
    const doc = await docRef.get();

    if (doc.exists) {
      // Si le document existe, récupérez les données et affichez la vue de détails
      const product = {
        id: doc.id,
        ...doc.data(),
      };

      res.render('Detail.ejs', { product });
    } else {
      // Si le document n'existe pas, redirigez vers une page d'erreur ou autre page par défaut
      res.redirect('/montresPage');

    }
  } catch (error) {
    // Gérez les erreurs
    console.error(error);
    res.status(500).send('Erreur interne du serveur');
  }
});
// les details views ici montres //

// les details bague views ici //
app.get('/bague/:id', async (req, res) => {
  const productId = req.params.id;

  try {
    // Récupérez les détails de bague depuis Firestore en utilisant l'ID
    const docRef = db.collection('bagues').doc(productId);
    const doc = await docRef.get();

    if (doc.exists) {
      // Si le document existe, récupérez les données et affichez la vue de détails
      const product = {
        id: doc.id,
        ...doc.data(),
      };

      res.render('Detail.ejs', { product });
    } else {
      // Si le document n'existe pas, redirigez vers une page d'erreur ou autre page par défaut
      res.redirect('/bague');

    }
  } catch (error) {
    // Gérez les erreurs
    console.error(error);
    res.status(500).send('Erreur interne du serveur');
  }
});
// les details views ici bague //

// les details chaine views ici //
app.get('/chaine/:id', async (req, res) => {
  const productId = req.params.id;

  try {
    // Récupérez les détails de chaine depuis Firestore en utilisant l'ID
    const docRef = db.collection('chaines').doc(productId);
    const doc = await docRef.get();

    if (doc.exists) {
      // Si le document existe, récupérez les données et affichez la vue de détails
      const product = {
        id: doc.id,
        ...doc.data(),
      };

      res.render('Detail.ejs', { product });
    } else {
      // Si le document n'existe pas, redirigez vers une page d'erreur ou autre page par défaut
      res.redirect('/chaine');

    }
  } catch (error) {
    // Gérez les erreurs
    console.error(error);
    res.status(500).send('Erreur interne du serveur');
  }
});
// les details views ici chaine //

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
