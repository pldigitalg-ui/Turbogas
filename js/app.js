/* =========================================
TURBO GÁS APP.JS
PREMIUM APP EXPERIENCE
========================================= */

/* =========================================
MENU MOBILE
========================================= */

const menuMobile = document.getElementById('menu-mobile');
const navbar = document.getElementById('navbar');

if(menuMobile){

menuMobile.addEventListener('click', () => {

navbar.classList.toggle('active');

menuMobile.innerHTML = navbar.classList.contains('active')
? '<i class="fa-solid fa-xmark"></i>'
: '<i class="fa-solid fa-bars"></i>';

});

}

/* =========================================
HEADER SCROLL
========================================= */

const header = document.getElementById('header');

window.addEventListener('scroll', () => {

if(window.scrollY > 30){

header.classList.add('scrolled');

}else{

header.classList.remove('scrolled');

}

});

/* =========================================
SCROLL REVEAL
========================================= */

const reveals = document.querySelectorAll(
'.product-card, .info-item, .feature-card, .section-header, .maps-top'
);

function revealOnScroll(){

const triggerBottom =
window.innerHeight * 0.88;

reveals.forEach(item => {

const boxTop =
item.getBoundingClientRect().top;

if(boxTop < triggerBottom){

item.classList.add('active');
item.classList.add('reveal');

}

});

}

window.addEventListener(
'scroll',
revealOnScroll
);

revealOnScroll();

/* =========================================
SLIDER INFINITO
========================================= */

const sliderTrack =
document.querySelector('.slider-track');

if(sliderTrack){

const cards =
sliderTrack.innerHTML;

sliderTrack.innerHTML += cards;

}

/* =========================================
PARALLAX HERO
========================================= */

const heroImage =
document.querySelector('.hero-image img');

window.addEventListener('mousemove', (e) => {

if(!heroImage) return;

const x =
(window.innerWidth / 2 - e.pageX) / 90;

const y =
(window.innerHeight / 2 - e.pageY) / 90;

heroImage.style.transform =
`translate(${x}px, ${y}px)`;

});

/* =========================================
BOTÃO PEDIR
========================================= */

function pedirGas(produto){

const numero = '5531997044271';

const mensagem =
`Olá, vim pelo site da Turbo Gás e quero pedir ${produto}.`;

window.open(
`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`,
'_blank'
);

}

/* =========================================
SCROLL SUAVE
========================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener('click', function(e){

const destino =
document.querySelector(this.getAttribute('href'));

if(destino){

e.preventDefault();

destino.scrollIntoView({
behavior:'smooth'
});

if(navbar.classList.contains('active')){

navbar.classList.remove('active');

menuMobile.innerHTML =
'<i class="fa-solid fa-bars"></i>';

}

}

});

});

/* =========================================
HOVER CARD 3D
========================================= */

const cards3d =
document.querySelectorAll(
'.product-card, .feature-card'
);

cards3d.forEach(card => {

card.addEventListener('mousemove', (e) => {

const rect =
card.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

const centerX =
rect.width / 2;

const centerY =
rect.height / 2;

const rotateX =
((y - centerY) / 18);

const rotateY =
((centerX - x) / 18);

card.style.transform =
`rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-6px)`;

});

card.addEventListener('mouseleave', () => {

card.style.transform =
'rotateX(0) rotateY(0) translateY(0)';

});

});

/* =========================================
EFEITO DIGITAÇÃO HERO
========================================= */

const heroTitle =
document.querySelector('.hero-content h1');

if(heroTitle){

heroTitle.style.opacity = '0';

window.addEventListener('load', () => {

setTimeout(() => {

heroTitle.style.transition =
'.8s ease';

heroTitle.style.opacity = '1';

}, 200);

});

}

/* =========================================
PRELOAD HERO
========================================= */

window.addEventListener('load', () => {

document.body.classList.add('loaded');

});

/* =========================================
SLIDER PAUSE MOBILE
========================================= */

if(window.innerWidth < 768){

sliderTrack.style.animationDuration = '40s';

}

/* =========================================
EFEITO GLOW MOUSE
========================================= */

const hero = document.querySelector('.hero');

hero.addEventListener('mousemove', (e) => {

const x = e.clientX;
const y = e.clientY;

hero.style.background = `
radial-gradient(circle at ${x}px ${y}px,
rgba(255,140,0,.10),
transparent 18%),

linear-gradient(
135deg,
#02134d 0%,
#002b8f 45%,
#00154f 100%
)
`;

});

/* =========================================
BOTÃO WHATSAPP PULSE
========================================= */

const whatsappBtn =
document.querySelector('.floating-whatsapp');

setInterval(() => {

if(whatsappBtn){

whatsappBtn.classList.add('pulse');

setTimeout(() => {

whatsappBtn.classList.remove('pulse');

}, 900);

}

}, 4000);

/* =========================================
MENU MOBILE STYLE
========================================= */

const mobileCSS = document.createElement('style');

mobileCSS.innerHTML = `

@media(max-width:1200px){

.navbar{

position:fixed;
top:88px;
left:0;

width:100%;

background:
rgba(2,11,38,.98);

backdrop-filter:blur(18px);

padding:30px 6%;

display:flex;
flex-direction:column;
align-items:flex-start;
gap:22px;

transform:translateY(-120%);
opacity:0;
pointer-events:none;

transition:.4s;

z-index:998;
}

.navbar.active{

transform:translateY(0);
opacity:1;
pointer-events:auto;
}

.navbar a{
font-size:1rem;
width:100%;
padding-bottom:10px;
border-bottom:
1px solid rgba(255,255,255,.06);
}

}

`;

document.head.appendChild(mobileCSS);
