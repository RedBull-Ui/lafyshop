const burger = document.getElementById('burger-nav')
const x = document.getElementById('x');
var bx = document.getElementById('bx-menu');
var menu_link= document.getElementById('menu-link');

burger.style.width = '0%'; // Vous pouvez ajuster la largeur souhaitée ici
x.style.display = 'none'; // Vous pouvez ajuster la largeur souhaitée ici

function menu(){
    burger.style.width = '90%'; // Vous pouvez ajuster la largeur souhaitée ici
    x.style.display = 'block'; // Vous pouvez ajuster la largeur souhaitée ici
    menu_link.style.display = 'block'; // Vous pouvez ajuster la largeur souhaitée ici
   
}

// swiper here
// swiper here



function icon_x(){
    
    burger.style.width = '0%'; // Vous pouvez ajuster la largeur souhaitée ici
    x.style.display = 'none'; // Vous pouvez ajuster la largeur souhaitée ici
    menu_link.style.display = 'none'; // Vous pouvez ajuster la largeur souhaitée ici

}
function accueil(){
    window.location.href='/'
}
function montres(){
    window.location.href='/montres'
}
function montresPage(){
    window.location.href='/montresPage'
}
function montresCoPage(){
    window.location.href='/montresCoPage'
}
function chaine(){
    window.location.href='/chaine'
}
function bague(){
    window.location.href='/bague'
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