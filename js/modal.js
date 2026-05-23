/* =========================================
TURBO GÁS MODAL.JS
MODAL PREMIUM APP STYLE
========================================= */

/* =========================================
CRIAR MODAL
========================================= */

const modal = document.createElement('div');

modal.classList.add('tg-modal');

modal.innerHTML = `

<div class="tg-modal-overlay"></div>

<div class="tg-modal-box">

<button class="tg-close">
<i class="fa-solid fa-xmark"></i>
</button>

<div class="tg-modal-image">

<img
src="./assets/imagem/hero1.jpg"
alt="Turbo Gás">

</div>

<div class="tg-modal-content">

<div class="tg-badge">
Entrega rápida
</div>

<h2 id="tg-title">
Turbo Gás
</h2>

<p id="tg-description">
Entrega rápida e segura em Belo Horizonte e região.
</p>

<div class="tg-info-list">

<div class="tg-info">

<i class="fa-solid fa-clock"></i>

<span>
Entrega em até 60 minutos
</span>

</div>

<div class="tg-info">

<i class="fa-solid fa-shield-halved"></i>

<span>
Compra 100% segura
</span>

</div>

<div class="tg-info">

<i class="fa-solid fa-location-dot"></i>

<span>
Atendemos BH e região
</span>

</div>

</div>

<div class="tg-price">

<span>A partir de</span>

<h3 id="tg-price">
R$ 115,00
</h3>

</div>

<a
id="tg-whatsapp"
href="#"
target="_blank"
class="tg-modal-btn">

<i class="fa-brands fa-whatsapp"></i>

Pedir agora

</a>

</div>

</div>

`;

document.body.appendChild(modal);

/* =========================================
ESTILOS
========================================= */

const modalStyle = document.createElement('style');

modalStyle.innerHTML = `

.tg-modal{
position:fixed;
inset:0;

display:flex;
align-items:center;
justify-content:center;

z-index:99999;

opacity:0;
visibility:hidden;

transition:.35s ease;
}

.tg-modal.active{
opacity:1;
visibility:visible;
}

.tg-modal-overlay{
position:absolute;
inset:0;

background:rgba(0,0,0,.72);

backdrop-filter:blur(8px);
}

.tg-modal-box{
position:relative;

width:92%;
max-width:980px;

display:grid;
grid-template-columns:1fr 1fr;

background:#071737;

border-radius:34px;

overflow:hidden;

z-index:2;

box-shadow:
0 30px 80px rgba(0,0,0,.45);

transform:translateY(40px) scale(.96);

transition:.4s ease;
}

.tg-modal.active .tg-modal-box{
transform:translateY(0) scale(1);
}

.tg-modal-image{
position:relative;
height:100%;
min-height:580px;
overflow:hidden;
}

.tg-modal-image img{
width:100%;
height:100%;

object-fit:cover;
object-position:center;
}

.tg-modal-content{
padding:50px;
display:flex;
flex-direction:column;
justify-content:center;
}

.tg-badge{
display:inline-flex;
align-items:center;
justify-content:center;

width:max-content;

padding:10px 16px;

border-radius:50px;

background:rgba(255,152,0,.14);

color:#ff9800;

font-size:.80rem;
font-weight:700;

margin-bottom:20px;
}

.tg-modal-content h2{
font-size:3rem;
font-weight:900;
line-height:.95;

margin-bottom:18px;

font-family:'Montserrat',sans-serif;
}

.tg-modal-content p{
font-size:1rem;
line-height:1.8;
color:#d0d7ef;

margin-bottom:28px;
}

.tg-info-list{
display:flex;
flex-direction:column;
gap:16px;

margin-bottom:34px;
}

.tg-info{
display:flex;
align-items:center;
gap:14px;

padding:14px 18px;

border-radius:18px;

background:rgba(255,255,255,.05);

border:1px solid rgba(255,255,255,.06);
}

.tg-info i{
color:#ff9800;
font-size:1rem;
}

.tg-info span{
font-size:.92rem;
font-weight:600;
color:#fff;
}

.tg-price{
margin-bottom:30px;
}

.tg-price span{
display:block;
font-size:.85rem;
color:#aeb9dc;
margin-bottom:8px;
}

.tg-price h3{
font-size:2.6rem;
font-weight:900;
color:#ff9800;
}

.tg-modal-btn{
width:100%;

display:flex;
align-items:center;
justify-content:center;
gap:12px;

padding:20px;

border-radius:20px;

background:
linear-gradient(
135deg,
#ff9800,
#ffae00
);

color:#fff;

font-size:1rem;
font-weight:800;

transition:.35s;

box-shadow:
0 0 30px rgba(255,152,0,.28);
}

.tg-modal-btn:hover{
transform:translateY(-4px);
}

.tg-close{
position:absolute;

top:18px;
right:18px;

width:46px;
height:46px;

border:none;
outline:none;
cursor:pointer;

border-radius:50%;

background:rgba(255,255,255,.10);

color:#fff;

font-size:1.2rem;

z-index:10;

transition:.35s;
}

.tg-close:hover{
background:#ff9800;
transform:rotate(90deg);
}

/* =========================================
RESPONSIVO
========================================= */

@media(max-width:900px){

.tg-modal-box{
grid-template-columns:1fr;
max-height:92vh;
overflow-y:auto;
}

.tg-modal-image{
min-height:300px;
}

.tg-modal-content{
padding:30px;
}

.tg-modal-content h2{
font-size:2.2rem;
}

}

@media(max-width:520px){

.tg-modal{
padding:14px;
}

.tg-modal-box{
border-radius:24px;
}

.tg-modal-image{
min-height:240px;
}

.tg-modal-content{
padding:24px;
}

.tg-modal-content h2{
font-size:1.9rem;
}

.tg-modal-content p{
font-size:.92rem;
line-height:1.7;
}

.tg-modal-btn{
padding:18px;
font-size:.92rem;
border-radius:16px;
}

.tg-price h3{
font-size:2rem;
}

}

`;

document.head.appendChild(modalStyle);

/* =========================================
ABRIR MODAL
========================================= */

function abrirModal(produto, preco, imagem){

const title =
document.getElementById('tg-title');

const price =
document.getElementById('tg-price');

const image =
document.querySelector('.tg-modal-image img');

const whatsapp =
document.getElementById('tg-whatsapp');

title.innerText = produto;

price.innerText = preco;

image.src = imagem;

const mensagem =
`Olá, vim pelo site da Turbo Gás e quero pedir ${produto}.`;

whatsapp.href =
`https://wa.me/5531997044271?text=${encodeURIComponent(mensagem)}`;

modal.classList.add('active');

document.body.style.overflow = 'hidden';

}

/* =========================================
FECHAR MODAL
========================================= */

function fecharModal(){

modal.classList.remove('active');

document.body.style.overflow = 'auto';

}

const closeBtn =
document.querySelector('.tg-close');

const overlay =
document.querySelector('.tg-modal-overlay');

closeBtn.addEventListener(
'click',
fecharModal
);

overlay.addEventListener(
'click',
fecharModal
);

/* =========================================
ABRIR PELOS CARDS
========================================= */

const productButtons =
document.querySelectorAll('.btn-product');

productButtons.forEach((button) => {

button.addEventListener('click', (e) => {

e.preventDefault();

const card =
button.closest('.product-card');

const produto =
card.querySelector('h3').innerText;

const preco =
card.querySelector('h2').innerText;

const imagem =
card.querySelector('img').src;

abrirModal(
produto,
preco,
imagem
);

});

});

/* =========================================
ESC FECHAR
========================================= */

document.addEventListener('keydown', (e) => {

if(e.key === 'Escape'){

fecharModal();

}

});
