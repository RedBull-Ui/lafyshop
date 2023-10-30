const burger = document.getElementById('burger-nav');
const x = document.getElementById('x');
const right = document.getElementById('rigth');
var bx = document.getElementById('bx-menu');
var menu_link= document.getElementById('menu-link');
var mon_panier = document.getElementById('monPanier');
var body = document.getElementById('body');
burger.style.width = '0%'; // Vous pouvez ajuster la largeur souhaitée ici
x.style.display = 'none'; // Vous pouvez ajuster la largeur souhaitée ici

function menu(){
    burger.style.width = '90%'; // Vous pouvez ajuster la largeur souhaitée ici
    x.style.display = 'block'; // Vous pouvez ajuster la largeur souhaitée ici
    menu_link.style.display = 'block'; // Vous pouvez ajuster la largeur souhaitée ici
   
}

// mon_panier.style.width= '0%';
// right.style.display = 'none'; 

function panier(){
    mon_panier.style.width = '100%'; // Vous pouvez ajuster la largeur souhaitée ici
    // right.style.display = 'block'; 
    body.classList.add('scroll-annule');
   
}
function close_panier(){
    mon_panier.style.width = '0%'; // Vous pouvez ajuster la largeur souhaitée ici
    // right.style.display = 'none'; 
    body.classList.remove('scroll-annule');

}

// swiper here
// swiper here



function icon_x(){
    
    burger.style.width = '0%'; // Vous pouvez ajuster la largeur souhaitée ici
    // x.style.display = 'none'; 
    // menu_link.style.display = 'none'; 

}
// menu link ici 
function accueil(){
    window.location.href='/'
}
function habitsH(){
    window.location.href='/habitsH'
}
function habitsF(){
    window.location.href='/habitsF'
}
function phone(){
    window.location.href='/phone'
}
function maison(){
    window.location.href='/maison'
}
function frigo(){
    window.location.href='/frigo'
}

// menu link ici 


// tel & pc page link ici
function itel(){
    window.location.href='/itel'
}
function iphone(){
    window.location.href='/iphone'
}
function redmi(){
    window.location.href='/redmi'
}
function samsung(){
    window.location.href='/samsung'
}
function mac(){
    window.location.href='/mac'
}
function hp(){
    window.location.href='/hp'
}
function infinix(){
    window.location.href='/infinix'
}
function tecno(){
    window.location.href='/tecno'
}
function oppo(){
    window.location.href='/oppo'
}
function telTools(){
    window.location.href='/telTools'
}
function pcTools(){
    window.location.href='/pcTools'
}
function dell(){
    window.location.href='/dell'
}
// tel & pc page link ici

// vetements hommes ici 
function sacH(){
    window.location.href='/sacH'
}
function outfitH(){
    window.location.href='/outfitH'
}
function ceintureH(){
    window.location.href='/ceintureH'
}
function chaussetteH(){
    window.location.href='/chaussetteH'
}
function chaussuresH(){
    window.location.href='/chaussuresH'
}
function chapeau(){
    window.location.href='/chapeau'
}
// vetements hommes ici 

// vetements femmes ici 
function sacF(){
    window.location.href='/sacF'
}
function outfitF(){
    window.location.href='/outfitF'
}
function ceintureF(){
    window.location.href='/ceintureF'
}
function chaussetteF(){
    window.location.href='/chaussetteF'
}
function chaussuresF(){
    window.location.href='/chaussuresF'
}
function chapeauF(){
    window.location.href='/chapeauF'
}
// vetements femmes ici 

// montres & bijoux ici 
function montresCoPage(){
    window.location.href='/montresCoPage'
}
function montresPage(){
    window.location.href='/montresPage'
}
function chaine(){
    window.location.href='/chaine'
}
function bague(){
    window.location.href='/bague'
}
function montres(){
    window.location.href='/montres'
}
// montres & bijoux ici 

// meuble & deco 
function meublePage(){
    window.location.href='/meublePage'
}
function decoPage(){
    window.location.href='/decoPage'
}

// vehicule & appart

function beauter(){
    window.location.href='/beauter'
}
function enfant(){
    window.location.href='/enfant'
}
function vehicule(){
    window.location.href='/vehicule'
}
function appartement(){
    window.location.href='/appartement'
}

// vehicule & appart

//commander 
function commander(){
    window.location.href='/commander'
}
//commander 
