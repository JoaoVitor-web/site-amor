// DATA DO INICIO DO NAMORO
const inicio = new Date("2025-12-12T00:00:00");

// CONTADOR DE TEMPO
function atualizarTempo(){

const agora = new Date();
const diff = agora - inicio;

const contador = document.getElementById("contador");

if(!contador) return;

if(diff >= 0){

const dias = Math.floor(diff/(1000*60*60*24));
const horas = Math.floor((diff/(1000*60*60))%24);
const minutos = Math.floor((diff/(1000*60))%60);
const segundos = Math.floor((diff/1000)%60);

contador.innerHTML =
`Estamos juntos há ${dias} dias ${horas}h ${minutos}m ${segundos}s 💜`;

}else{

contador.innerHTML = "Contando os dias para 12/12/2025 💜";

}

}

setInterval(atualizarTempo,1000);
atualizarTempo();


// ABRIR CARTA
function abrirCarta(){

const envelope = document.getElementById("envelope");
const carta = document.getElementById("carta");

if(envelope){
envelope.classList.add("aberto");
}

if(carta){
carta.style.display = "block";
}


// TOCAR MUSICA
const musica = document.getElementById("musica");

if(musica){
musica.src =
"https://www.youtube.com/embed/LyaEnoiIwPs?autoplay=1&loop=1&playlist=LyaEnoiIwPs";
}


// CRIAR CORAÇÕES
for(let i=0;i<60;i++){

const heart = document.createElement("div");

heart.className = "heart";
heart.innerHTML = "💜";

heart.style.left = Math.random()*100 + "vw";
heart.style.top = "60vh";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},3000);

}

}