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



// Route pour récupérer les données depuis la table redmi
app.get('/recupererRedmi', function (req, res) {
  const query = 'SELECT * FROM redmi';
  
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des données : ' + err.message);
      res.status(500).send('Erreur lors de la récupération des données redmi');
    } else {
      // Envoyez les données récupérées au client
      res.json(results);
    }
  });
});

app.get('/recupererRedmi', function (req, res) {
  const mesRedmiDonnees = JSON.parse(localStorage.getItem('redmi'));
  res.json(mesRedmiDonnees);
});
// Route pour récupérer les données depuis la table redmi

// Route pour récupérer les données depuis la table Tecno
app.get('/recupererTecno', function (req, res) {
  const query = 'SELECT * FROM tecno';
  
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des données : ' + err.message);
      res.status(500).send('Erreur lors de la récupération des données tecno');
    } else {
      // Envoyez les données récupérées au client
      res.json(results);
    }
  });
});

app.get('/recupererTecno', function (req, res) {
  const mesTecnoDonnees = JSON.parse(localStorage.getItem('tecno'));
  res.json(mesTecnoDonnees);
});
// Route pour récupérer les données depuis la table redmi

// Route pour récupérer les données depuis la table itel
app.get('/recupererItel', function (req, res) {
  const query = 'SELECT * FROM itel';
  
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des données : ' + err.message);
      res.status(500).send('Erreur lors de la récupération des données itel');
    } else {
      // Envoyez les données récupérées au client
      res.json(results);
    }
  });
});

app.get('/recupererItel', function (req, res) {
  const mesItelDonnees = JSON.parse(localStorage.getItem('itel'));
  res.json(mesItelDonnees);
});
// Route pour récupérer les données depuis la table itel

// Route pour récupérer les données depuis la table mac
app.get('/recupererMac', function (req, res) {
  const query = 'SELECT * FROM mac';
  
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des données : ' + err.message);
      res.status(500).send('Erreur lors de la récupération des données mac');
    } else {
      // Envoyez les données récupérées au client
      res.json(results);
    }
  });
});

app.get('/recupererMac', function (req, res) {
  const mesMacDonnees = JSON.parse(localStorage.getItem('mac'));
  res.json(mesMacDonnees);
});
// Route pour récupérer les données depuis la table mac

// Route pour récupérer les données depuis la table hp
app.get('/recupererHp', function (req, res) {
  const query = 'SELECT * FROM hp';
  
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des données : ' + err.message);
      res.status(500).send('Erreur lors de la récupération des données hp');
    } else {
      // Envoyez les données récupérées au client
      res.json(results);
    }
  });
});

app.get('/recupererHp', function (req, res) {
  const mesHpDonnees = JSON.parse(localStorage.getItem('hp'));
  res.json(mesHpDonnees);
});
// Route pour récupérer les données depuis la table hp

// Route pour récupérer les données depuis la table dell
app.get('/recupererDell', function (req, res) {
  const query = 'SELECT * FROM dell';
  
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des données : ' + err.message);
      res.status(500).send('Erreur lors de la récupération des données dell');
    } else {
      // Envoyez les données récupérées au client
      res.json(results);
    }
  });
});

app.get('/recupererDell', function (req, res) {
  const mesDellDonnees = JSON.parse(localStorage.getItem('dell'));
  res.json(mesDellDonnees);
});
// Route pour récupérer les données depuis la table dell

// Route pour récupérer les données depuis la table teltools
app.get('/recupererTeltools', function (req, res) {
  const query = 'SELECT * FROM teltools';
  
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des données : ' + err.message);
      res.status(500).send('Erreur lors de la récupération des données teltools');
    } else {
      // Envoyez les données récupérées au client
      res.json(results);
    }
  });
});

app.get('/recupererTeltools', function (req, res) {
  const mesTeltoolsDonnees = JSON.parse(localStorage.getItem('teltools'));
  res.json(mesTeltoolsDonnees);
});
// Route pour récupérer les données depuis la table teltools

// Route pour récupérer les données depuis la table teltools
app.get('/recupererPctools', function (req, res) {
  const query = 'SELECT * FROM pctools';
  
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des données : ' + err.message);
      res.status(500).send('Erreur lors de la récupération des données pc tools');
    } else {
      // Envoyez les données récupérées au client
      res.json(results);
    }
  });
});

app.get('/recupererPctools', function (req, res) {
  const mesPctoolsDonnees = JSON.parse(localStorage.getItem('pctools'));
  res.json(mesPctoolsDonnees);
});
// Route pour récupérer les données depuis la table teltools

// Route pour récupérer les données depuis la table samsung
app.get('/recupererOppo', function (req, res) {
  const query = 'SELECT * FROM oppo';
  
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des données : ' + err.message);
      res.status(500).send('Erreur lors de la récupération des données oppo');
    } else {
      // Envoyez les données récupérées au client
      res.json(results);
    }
  });
});

app.get('/recupererOppo', function (req, res) {
  const mesOppoDonnees = JSON.parse(localStorage.getItem('oppo'));
  res.json(mesOppoDonnees);
});
// Route pour récupérer les données depuis la table redmi

// Route pour récupérer les données depuis la table samsung
app.get('/recupererSamsung', function (req, res) {
  const query = 'SELECT * FROM samsung';
  
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des données : ' + err.message);
      res.status(500).send('Erreur lors de la récupération des données samsung');
    } else {
      // Envoyez les données récupérées au client
      res.json(results);
    }
  });
});

app.get('/recupererSamsung', function (req, res) {
  const mesInfinixDonnees = JSON.parse(localStorage.getItem('samsung'));
  res.json(mesInfinixDonnees);
});
// Route pour récupérer les données depuis la table samsung

// Route pour récupérer les données depuis la table infinix
app.get('/recupererInfinix', function (req, res) {
  const query = 'SELECT * FROM infinix';
  
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des données : ' + err.message);
      res.status(500).send('Erreur lors de la récupération des données infinix');
    } else {
      // Envoyez les données récupérées au client
      res.json(results);
    }
  });
});

app.get('/recupererInfinix', function (req, res) {
  const mesInfinixDonnees = JSON.parse(localStorage.getItem('infinix'));
  res.json(mesInfinixDonnees);
});
// Route pour récupérer les données depuis la table infinix

app.get('/recupererIphones', function (req, res) {
  const query = 'SELECT * FROM iphones';
  
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

app.get('/recupererIphones', function (req, res) {
  const mesIphonesDonnees = JSON.parse(localStorage.getItem('iphones'));
  res.json(mesIphoneDonnees);
});

// Route pour récupérer les données depuis la table iphones

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


// Route pour récupérer les données depuis la table telslider


// Route pour récupérer les données depuis la table moment 
app.get('/recupererMoment', function (req, res) {
  const query = 'SELECT * FROM moment';
  
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
app.get('/recupererMoment', function (req, res) {
  const momentDonnees = JSON.parse(localStorage.getItem('moment'));
  res.json(momentDonnees);
});


// Route pour récupérer les données depuis la table MOMENT

// Route pour récupérer les données depuis la table bigCard 
app.get('/recupererBigCard', function (req, res) {
  const query = 'SELECT * FROM bigCard';
  
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des données : ' + err.message);
      res.status(500).send('Erreur lors de la récupération des données bigCard');
    } else {
      // Envoyez les données récupérées au client
      res.json(results);
    }
  });
});

// Route pour récupérer les données stockées dans le localStorage
app.get('/recupererBigCard', function (req, res) {
  const bigCardDonnees = JSON.parse(localStorage.getItem('bigCard'));
  res.json(bigCardDonnees);
});


// Route pour récupérer les données depuis la table bigCard

// Route pour récupérer les données depuis la table hf
app.get('/recupererHf', function (req, res) {
  const query = 'SELECT * FROM hf'; // Assurez-vous d'utiliser le nom de votre table dans la base de données
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des données : ' + err.message);
      res.status(500).send('Erreur lors de la récupération des données h&m depuis la base de données');
    } else {
      // Envoyez les données récupérées au client depuis la base de données
      res.json(results);
    }
  });
});


// Route pour récupérer les données stockées dans le localStorage
app.get('/recupererHf', function (req, res) {
  const hmDonnees = JSON.parse(localStorage.getItem('hf'));
  res.json(hmDonnees);
});

// Route pour récupérer les données depuis la table electro
app.get('/recupererElectro', function (req, res) {
  const query = 'SELECT * FROM electro'; // Assurez-vous d'utiliser le nom de votre table dans la base de données
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des données : ' + err.message);
      res.status(500).send('Erreur lors de la récupération des données electro depuis la base de données');
    } else {
      // Envoyez les données récupérées au client depuis la base de données
      res.json(results);
    }
  });
});


// Route pour récupérer les données stockées dans le localStorage
app.get('/recupererElectro', function (req, res) {
  const electroDonnees = JSON.parse(localStorage.getItem('electro'));
  res.json(electroDonnees);
});


// Route pour récupérer les données depuis la table electro

// Route pour récupérer les données depuis la table montre connecter
app.get('/recupererMontresCo', function (req, res) {
  const query = 'SELECT * FROM montresco'; // Assurez-vous d'utiliser le nom de votre table dans la base de données
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des données : ' + err.message);
      res.status(500).send('Erreur lors de la récupération des données montresCo depuis la base de données');
    } else {
      // Envoyez les données récupérées au client depuis la base de données
      res.json(results);
    }
  });
});


// Route pour récupérer les données stockées dans le localStorage
app.get('/recupererMontresCo', function (req, res) {
  const montresCoDonnees = JSON.parse(localStorage.getItem('montresCo'));
  res.json(montresCoDonnees);
});


// Route pour récupérer les données depuis la table montresCo

// Route pour récupérer les données depuis la table montre 
app.get('/recupererMontres', function (req, res) {
  const query = 'SELECT * FROM montres'; // Assurez-vous d'utiliser le nom de votre table dans la base de données
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des données : ' + err.message);
      res.status(500).send('Erreur lors de la récupération des données montres depuis la base de données');
    } else {
      // Envoyez les données récupérées au client depuis la base de données
      res.json(results);
    }
  });
});


// Route pour récupérer les données stockées dans le localStorage
app.get('/recupererMontres', function (req, res) {
  const montresDonnees = JSON.parse(localStorage.getItem('montres'));
  res.json(montresDonnees);
});


// Route pour récupérer les données depuis la table montres

// Route pour récupérer les données depuis la table bague 
app.get('/recupererBagues', function (req, res) {
  const query = 'SELECT * FROM bagues'; // Assurez-vous d'utiliser le nom de votre table dans la base de données
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des données : ' + err.message);
      res.status(500).send('Erreur lors de la récupération des données montres depuis la base de données bagues');
    } else {
      // Envoyez les données récupérées au client depuis la base de données
      res.json(results);
    }
  });
});


// Route pour récupérer les données stockées dans le localStorage
app.get('/recupererBagues', function (req, res) {
  const baguesDonnees = JSON.parse(localStorage.getItem('bagues'));
  res.json(baguesDonnees);
});


// Route pour récupérer les données depuis la table bagues

// Route pour récupérer les données depuis la table chaines 
app.get('/recupererChaines', function (req, res) {
  const query = 'SELECT * FROM chaines'; // Assurez-vous d'utiliser le nom de votre table dans la base de données
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des données : ' + err.message);
      res.status(500).send('Erreur lors de la récupération des données chaines depuis la base de données bagues');
    } else {
      // Envoyez les données récupérées au client depuis la base de données
      res.json(results);
    }
  });
});


// Route pour récupérer les données stockées dans le localStorage
app.get('/recupererChaines', function (req, res) {
  const chainesDonnees = JSON.parse(localStorage.getItem('chaines'));
  res.json(chainesDonnees);
});


// Route pour récupérer les données depuis la table chaines

// Route pour récupérer les données depuis la table outfit H
app.get('/recupererOutfitH', function (req, res) {
  const query = 'SELECT * FROM outfitH'; // Assurez-vous d'utiliser le nom de votre table dans la base de données
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des données : ' + err.message);
      res.status(500).send('Erreur lors de la récupération des données outfitH');
    } else {
      // Envoyez les données récupérées au client depuis la base de données
      res.json(results);
    }
  });
});


// Route pour récupérer les données stockées dans le localStorage
app.get('/recupererOutfitH', function (req, res) {
  const outfitHDonnees = JSON.parse(localStorage.getItem('outfitH'));
  res.json(outfitHDonnees);
});

// Route pour récupérer les données depuis la table outfit H

// Route pour récupérer les données depuis la table outfit F
app.get('/recupereroutfitF', function (req, res) {
  const query = 'SELECT * FROM outfitF'; // Assurez-vous d'utiliser le nom de votre table dans la base de données
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des données : ' + err.message);
      res.status(500).send('Erreur lors de la récupération des données outfitF');
    } else {
      // Envoyez les données récupérées au client depuis la base de données
      res.json(results);
    }
  });
});


// Route pour récupérer les données stockées dans le localStorage
app.get('/recupereroutfitF', function (req, res) {
  const outfitFDonnees = JSON.parse(localStorage.getItem('outfitF'));
  res.json(outfitFDonnees);
});

// Route pour récupérer les données depuis la table Chaussures

// Route pour récupérer les données depuis la table chaussures F
app.get('/recupererchaussuresF', function (req, res) {
  const query = 'SELECT * FROM chaussuresF'; // Assurez-vous d'utiliser le nom de votre table dans la base de données
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des données : ' + err.message);
      res.status(500).send('Erreur lors de la récupération des données chaussuresF');
    } else {
      // Envoyez les données récupérées au client depuis la base de données
      res.json(results);
    }
  });
});

// Route pour récupérer les données stockées dans le localStorage
app.get('/recupererchaussuresF', function (req, res) {
  const chaussuresFDonnees = JSON.parse(localStorage.getItem('chaussuresF'));
  res.json(chaussuresFDonnees);
});

// Route pour récupérer les données depuis la table Chaussures F

// Route pour récupérer les données depuis la table chaussettes
app.get('/recupererchaussetteF', function (req, res) {
  const query = 'SELECT * FROM chaussettesF'; // Assurez-vous d'utiliser le nom de votre table dans la base de données
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des données : ' + err.message);
      res.status(500).send('Erreur lors de la récupération des données chaussetteF');
    } else {
      // Envoyez les données récupérées au client depuis la base de données
      res.json(results);
    }
  });
});

// Route pour récupérer les données stockées dans le localStorage
app.get('/recupererchaussetteF', function (req, res) {
  const chaussetteFDonnees = JSON.parse(localStorage.getItem('chaussetteF'));
  res.json(chaussetteFDonnees);
});

// Route pour récupérer les données depuis la table Chaussures

// Route pour récupérer les données depuis la table sac F
app.get('/recuperersacF', function (req, res) {
  const query = 'SELECT * FROM sacF'; // Assurez-vous d'utiliser le nom de votre table dans la base de données
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des données : ' + err.message);
      res.status(500).send('Erreur lors de la récupération des données sacF');
    } else {
      // Envoyez les données récupérées au client depuis la base de données
      res.json(results);
    }
  });
});

// Route pour récupérer les données stockées dans le localStorage
app.get('/recuperersacF', function (req, res) {
  const sacFDonnees = JSON.parse(localStorage.getItem('sacF'));
  res.json(sacFDonnees);
});

// Route pour récupérer les données depuis la table Chaussures

// Route pour récupérer les données depuis la table Enfants
app.get('/recupererenfants', function (req, res) {
  const query = 'SELECT * FROM enfants'; // Assurez-vous d'utiliser le nom de votre table dans la base de données
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des données : ' + err.message);
      res.status(500).send('Erreur lors de la récupération des données enfants');
    } else {
      // Envoyez les données récupérées au client depuis la base de données
      res.json(results);
    }
  });
});

// Route pour récupérer les données stockées dans le localStorage
app.get('/recupererenfants', function (req, res) {
  const enfantsDonnees = JSON.parse(localStorage.getItem('enfants'));
  res.json(enfantsDonnees);
});

// Route pour récupérer les données depuis la table enfants

// Route pour récupérer les données depuis la table Beauter
app.get('/recupererbeauter', function (req, res) {
  const query = 'SELECT * FROM beauter'; // Assurez-vous d'utiliser le nom de votre table dans la base de données
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des données : ' + err.message);
      res.status(500).send('Erreur lors de la récupération des données beauter');
    } else {
      // Envoyez les données récupérées au client depuis la base de données
      res.json(results);
    }
  });
});

// Route pour récupérer les données stockées dans le localStorage
app.get('/recupererbeauter', function (req, res) {
  const beauterDonnees = JSON.parse(localStorage.getItem('beauter'));
  res.json(beauterDonnees);
});

// Route pour récupérer les données depuis la table beauter

// Route pour récupérer les données depuis la table Meubles
app.get('/recuperermeubles', function (req, res) {
  const query = 'SELECT * FROM meubles'; // Assurez-vous d'utiliser le nom de votre table dans la base de données
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des données : ' + err.message);
      res.status(500).send('Erreur lors de la récupération des données meubles');
    } else {
      // Envoyez les données récupérées au client depuis la base de données
      res.json(results);
    }
  });
});

// Route pour récupérer les données stockées dans le localStorage
app.get('/recuperermeubles', function (req, res) {
  const meublesDonnees = JSON.parse(localStorage.getItem('meubles'));
  res.json(meublesDonnees);
});

// Route pour récupérer les données depuis la table Meubles

// Route pour récupérer les données depuis la table deco
app.get('/recupererdeco', function (req, res) {
  const query = 'SELECT * FROM deco'; // Assurez-vous d'utiliser le nom de votre table dans la base de données
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des données : ' + err.message);
      res.status(500).send('Erreur lors de la récupération des données deco');
    } else {
      // Envoyez les données récupérées au client depuis la base de données
      res.json(results);
    }
  });
});

// Route pour récupérer les données stockées dans le localStorage
app.get('/recupererdeco', function (req, res) {
  const decoDonnees = JSON.parse(localStorage.getItem('deco'));
  res.json(decoDonnees);
});

// Route pour récupérer les données depuis la table Deco

// Route pour récupérer les données depuis la table chaussures
app.get('/recupererchaussures', function (req, res) {
  const query = 'SELECT * FROM chaussures'; // Assurez-vous d'utiliser le nom de votre table dans la base de données
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des données : ' + err.message);
      res.status(500).send('Erreur lors de la récupération des données chaussures');
    } else {
      // Envoyez les données récupérées au client depuis la base de données
      res.json(results);
    }
  });
});


// Route pour récupérer les données stockées dans le localStorage
app.get('/recupererchaussures', function (req, res) {
  const chaussuresDonnees = JSON.parse(localStorage.getItem('chaussures'));
  res.json(chaussuresDonnees);
});

// Route pour récupérer les données depuis la table chaussures

// Route pour récupérer les données depuis la table ceintureH
app.get('/recupererceintureH', function (req, res) {
  const query = 'SELECT * FROM ceintureH'; // Assurez-vous d'utiliser le nom de votre table dans la base de données
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des données : ' + err.message);
      res.status(500).send('Erreur lors de la récupération des données ceintureH');
    } else {
      // Envoyez les données récupérées au client depuis la base de données
      res.json(results);
    }
  });
});


// Route pour récupérer les données stockées dans le localStorage
app.get('/recupererceintureH', function (req, res) {
  const ceintureHDonnees = JSON.parse(localStorage.getItem('ceintureH'));
  res.json(ceintureHDonnees);
});

// Route pour récupérer les données depuis la table chaussures

// Route pour récupérer les données depuis la table chaussette
app.get('/recupererchaussettes', function (req, res) {
  const query = 'SELECT * FROM chaussettes'; // Assurez-vous d'utiliser le nom de votre table dans la base de données
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des données : ' + err.message);
      res.status(500).send('Erreur lors de la récupération des données chaussettes');
    } else {
      // Envoyez les données récupérées au client depuis la base de données
      res.json(results);
    }
  });
});


// Route pour récupérer les données stockées dans le localStorage
app.get('/recupererchaussettes', function (req, res) {
  const chaussetteDonnees = JSON.parse(localStorage.getItem('chaussettes'));
  res.json(chaussetteDonnees);
});

// Route pour récupérer les données depuis la table chaussures

// Route pour récupérer les données depuis la table chaussette

app.get('/recupererchaussettes', function (req, res) {
  const query = 'SELECT * FROM chaussettes'; // Assurez-vous d'utiliser le nom de votre table dans la base de données
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des données : ' + err.message);
      res.status(500).send('Erreur lors de la récupération des données chaussettes');
    } else {
      // Envoyez les données récupérées au client depuis la base de données
      res.json(results);
    }
  });
});


// Route pour récupérer les données stockées dans le localStorage
app.get('/recupererchaussettes', function (req, res) {
  const chaussetteDonnees = JSON.parse(localStorage.getItem('chaussettes'));
  res.json(chaussetteDonnees);
});

// Route pour récupérer les données depuis la table Chaussette

// Route pour récupérer les données depuis la table sacH
app.get('/recuperersacH', function (req, res) {
  const query = 'SELECT * FROM sacH'; // Assurez-vous d'utiliser le nom de votre table dans la base de données
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des données : ' + err.message);
      res.status(500).send('Erreur lors de la récupération des données sacH');
    } else {
      // Envoyez les données récupérées au client depuis la base de données
      res.json(results);
    }
  });
});


// Route pour récupérer les données stockées dans le localStorage
app.get('/recuperersacH', function (req, res) {
  const sacHDonnees = JSON.parse(localStorage.getItem('sacH'));
  res.json(sacHDonnees);
});

// Route pour récupérer les données depuis la table SacH

// Route pour récupérer les données depuis la table chapeau
app.get('/recupererchapeau', function (req, res) {
  const query = 'SELECT * FROM chapeau'; // Assurez-vous d'utiliser le nom de votre table dans la base de données
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des données : ' + err.message);
      res.status(500).send('Erreur lors de la récupération des données chapeau');
    } else {
      // Envoyez les données récupérées au client depuis la base de données
      res.json(results);
    }
  });
});


// Route pour récupérer les données stockées dans le localStorage
app.get('/recuperersacH', function (req, res) {
  const sacHDonnees = JSON.parse(localStorage.getItem('sacH'));
  res.json(sacHDonnees);
});

// Route pour récupérer les données depuis la table SacH

// Route pour récupérer les données depuis la table chaussette
app.get('/recupererchaussettes', function (req, res) {
  const query = 'SELECT * FROM chaussettes'; // Assurez-vous d'utiliser le nom de votre table dans la base de données
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des données : ' + err.message);
      res.status(500).send('Erreur lors de la récupération des données chaussettes');
    } else {
      // Envoyez les données récupérées au client depuis la base de données
      res.json(results);
    }
  });
});


// Route pour récupérer les données stockées dans le localStorage
app.get('/recupererchaussettes', function (req, res) {
  const chaussetteDonnees = JSON.parse(localStorage.getItem('chaussettes'));
  res.json(chaussetteDonnees);
});

// Route pour récupérer les données depuis la table chaussures


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
