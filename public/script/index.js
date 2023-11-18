

// Appeler la fonction pour afficher les produits lors du chargement de la page
document.addEventListener('DOMContentLoaded', function () {
      // Fonction pour mettre à jour le contenu du panier
      function updateCart() {
        // Récupérer l'élément du panier
        const panierElement = document.getElementById('monPanier');
  
        // Récupérer le panier depuis le localStorage
        const cart = JSON.parse(localStorage.getItem('lafyshop')) || [];
  
  
            // Sélectionner l'élément où vous souhaitez afficher les produits du panier
      const centerElement = panierElement.querySelector('.center');
      const footerTopElement = panierElement.querySelector('.footer-top');
  
        // Si le panier est vide, afficher un message approprié
        if (cart.length === 0) {
          centerElement.innerHTML = `
                      <div class="panier-vide shadow-sm" onclick="accueil()">
                          <h4>Votre panier est vide 🛒</h4> <br>
                          <p style="font-size: 0.7rem;">En manque d'inspiration ?</p>
                          <button>Voir les meilleures offres</button>
                      </div>
                  `;
                  footerTopElement.innerHTML = '';
        } else {
          // Si le panier n'est pas vide, construire le HTML pour chaque produit
          const cartHTML = cart.map(product => `
  
                  <div class="produit-panier" style=" padding: 10px; display: flex; border: 1px solid rgba(128, 128, 128, 0.173); margin: 10px;">
              <div class="img-box" style="width: 40%; ">
                  <img src="${product.url}" alt="${product.name}" width="70">
              </div>
              <div class="details-box" style="width: 60%;">
                  <p><strong>${product.name}</strong></p> 
                  <p>${product.info}</p> 
                  <i style="color: rgb(7, 192, 7);" class='bx bx-check-circle' ></i> <span>en stock</span>
                  <p>Quantite : ${product.quantity}</p>
                  <div style="display: flex; align-items: center; justify-content: space-between;">
                      <p style="color: rgb(159, 9, 9);"><strong>${product.price} CFA</strong></p>
                      <i style="font-size: 1.3rem;" class='bx bx-trash' onclick="removeFromCart('${product.Id}')" ></i>
                  </div>
              </div>
          </div>
  
                  `).join('');
  
          // Injecter le HTML dans l'élément du panier
          centerElement.innerHTML = cartHTML;
  
           // Mettre à jour le total et le nombre de produits
        const total = cart.reduce((acc, product) => acc + parseFloat(product.price) * parseInt(product.quantity), 0);
        const totalQuantity = cart.reduce((acc, product) => acc + parseInt(product.quantity), 0);
        footerTopElement.innerHTML = `<span><strong>Total: ${total.toFixed(2)} CFA</strong></span> <span>Nombre de produits: ${totalQuantity}</span>`;
    
        }
  
        // Mettre à jour d'autres éléments du panier (total, nombre de produits, etc.) si nécessaire
        // ...
  
        // Vous pouvez également ajouter des événements ou des fonctionnalités supplémentaires ici
      }
  
      // Appeler la fonction pour mettre à jour le panier au chargement de la page
      updateCart();
    
          
});



const burger = document.getElementById('burger-nav');
const x = document.getElementById('x');
const right = document.getElementById('rigth');
var bx = document.getElementById('bx-menu');
var menu_link = document.getElementById('menu-link');
var mon_panier = document.getElementById('monPanier');
var body = document.getElementById('body');
burger.style.width = '0%'; // Vous pouvez ajuster la largeur souhaitée ici
x.style.display = 'none'; // Vous pouvez ajuster la largeur souhaitée ici


// point_rouge 

// Récupérez la valeur de la clé point_rouge du localStorage
const pointRougeValue = localStorage.getItem('point_rouge');

// Récupérez l'élément point-rouge
const pointRouge = document.querySelector('.point-rouge');

// Vérifiez la valeur et définissez le style en conséquence
if (pointRougeValue === 'on') {
    pointRouge.style.display = 'block';
} else {
    pointRouge.style.display = 'none';
}

// point_rouge 



function menu() {
    burger.style.width = '90%'; // Vous pouvez ajuster la largeur souhaitée ici
    x.style.display = 'block'; // Vous pouvez ajuster la largeur souhaitée ici
    menu_link.style.display = 'block'; // Vous pouvez ajuster la largeur souhaitée ici

}

// mon_panier.style.width= '0%';
// right.style.display = 'none'; 

function panier() {
    mon_panier.style.width = '100%'; // Vous pouvez ajuster la largeur souhaitée ici
    // right.style.display = 'block'; 
    body.classList.add('scroll-annule');

}
function close_panier() {
    mon_panier.style.width = '0%'; // Vous pouvez ajuster la largeur souhaitée ici
    // right.style.display = 'none'; 
    body.classList.remove('scroll-annule');

}

// swiper here
// swiper here



function icon_x() {

    burger.style.width = '0%'; // Vous pouvez ajuster la largeur souhaitée ici
    // x.style.display = 'none'; 
    // menu_link.style.display = 'none'; 

}
// menu link ici 
function accueil() {
    window.location.href = '/'
}
function habitsH() {
    window.location.href = '/habitsH'
}
function habitsF() {
    window.location.href = '/habitsF'
}
function phone() {
    window.location.href = '/phone'
}
function maison() {
    window.location.href = '/maison'
}
function frigo() {
    window.location.href = '/frigo'
}

// menu link ici 


// tel & pc page link ici
function itel() {
    window.location.href = '/itel'
}
function iphone() {
    window.location.href = '/iphone'
}
function redmi() {
    window.location.href = '/redmi'
}
function samsung() {
    window.location.href = '/samsung'
}
function mac() {
    window.location.href = '/mac'
}
function hp() {
    window.location.href = '/hp'
}
function infinix() {
    window.location.href = '/infinix'
}
function tecno() {
    window.location.href = '/tecno'
}
function oppo() {
    window.location.href = '/oppo'
}
function telTools() {
    window.location.href = '/telTools'
}
function pcTools() {
    window.location.href = '/pcTools'
}
function dell() {
    window.location.href = '/dell'
}
// tel & pc page link ici

// vetements hommes ici 
function sacH() {
    window.location.href = '/sacH'
}
function outfitH() {
    window.location.href = '/outfitH'
}
function ceintureH() {
    window.location.href = '/ceintureH'
}
function chaussetteH() {
    window.location.href = '/chaussetteH'
}
function chaussuresH() {
    window.location.href = '/chaussuresH'
}
function chapeau() {
    window.location.href = '/chapeau'
}
// vetements hommes ici 

// vetements femmes ici 
function sacF() {
    window.location.href = '/sacF'
}
function outfitF() {
    window.location.href = '/outfitF'
}
function ceintureF() {
    window.location.href = '/ceintureF'
}
function chaussetteF() {
    window.location.href = '/chaussetteF'
}
function chaussuresF() {
    window.location.href = '/chaussuresF'
}
function chapeauF() {
    window.location.href = '/chapeauF'
}
// vetements femmes ici 

// montres & bijoux ici 
function montresCoPage() {
    window.location.href = '/montresCoPage'
}
function montresPage() {
    window.location.href = '/montresPage'
}
function chaine() {
    window.location.href = '/chaine'
}
function bague() {
    window.location.href = '/bague'
}
function montres() {
    window.location.href = '/montres'
}
// montres & bijoux ici 

// meuble & deco 
function meublePage() {
    window.location.href = '/meublePage'
}
function decoPage() {
    window.location.href = '/decoPage'
}

// vehicule & appart

function beauter() {
    window.location.href = '/beauter'
}
function enfant() {
    window.location.href = '/enfant'
}
function vehicule() {
    window.location.href = '/vehicule'
}
function appartement() {
    window.location.href = '/appartement'
}

// vehicule & appart

// electro-menager 
function fours() {
    window.location.href = '/fours'
}
function mixeurs() {
    window.location.href = '/mixeurs'
}
function cafetieres() {
    window.location.href = '/cafetieres'
}
function cusinieres() {
    window.location.href = '/cusinieres'
}
function frigidere() {
    window.location.href = '/frigideres'
}
function grille_pain() {
    window.location.href = '/grillesPains'
}
// electro-menager

// chicha store 
function chichaStore() {
    window.location.href = '/chichaStore'
}
function charbon() {
    window.location.href = '/charbon'
}
function puff() {
    window.location.href = '/puff'
}
function arome() {
    window.location.href = '/arome'
}
function chicha() {
    window.location.href = '/chicha'
}
// chicha store 


//commander 
function electroMenager() {
    window.location.href = '/electro'
}
//commander 

//commander 
function commander() {
    window.location.href = '/commander'
}
//commander 

//valider 
function valider() {
    window.location.href = '/valider'
}
//valider 

// retour 
function goBack() {
    window.history.back();
}
// retour

// details redirection ici
// document.addEventListener('DOMContentLoaded', function() {
//     const cards = document.querySelectorAll('.carte');

//     cards.forEach(card => {
//       card.addEventListener('click', function() {
//         const productId = card.dataset.productId; // Ajoutez un attribut data-product-id à chaque carte
//         window.location.href = `/iphone/${productId}`;
//       });
//     });
//   });
// details redirection ici 
