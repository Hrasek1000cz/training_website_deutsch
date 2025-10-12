let lekceAktualni = 3;
document.addEventListener("DOMContentLoaded", function all() {
    for(let x = 0; x < lekce["lekce"].length; x++){
        document.querySelector('.showerlista').innerHTML += `<div onclick="changeLekce(${x})">${lekce["lekce"][x][0][0]} | ${lekce["lekce"][x][1].length} slov</div>`;
    }
    udajeHry = [];
    for(let x = 0; x < lekce["lekce"][lekceAktualni][1].length; x++){
        udajeHry.push(lekce["lekce"][lekceAktualni][1][x]);
    }
    document.getElementById('info').innerHTML = `(${lekce["lekce"][lekceAktualni][0][0]})`;
   
    udajeHryPromena =  [];
    while(udajeHry.length > 0){
        let randomak = Math.floor(Math.random() * udajeHry.length);
        udajeHryPromena.push(udajeHry[randomak]);
        udajeHry.splice(randomak, 1);
    }
        udajeHry = udajeHryPromena;
        show();
});


let udajeHry = ['Textík 1', 'Textík 2', 'Textík 3', 'Textík 4'];
let spatneHry = [];
let prohaz = 0;


let isDragging = false;
let firstX = 0;
let aktualX = 0;

function startDrag(e) {
    isDragging = true;
    firstX = (e.type === 'touchstart') ? e.touches[0].clientX : e.clientX;
    karta.style.transition = 'none';
}

function onDrag(e) {
    if (!isDragging) return;
    const clientX = (e.type === 'touchmove') ? e.touches[0].clientX : e.clientX;
    aktualX = clientX - firstX;
    const rotation = Math.max(-50, Math.min(50, aktualX / 10));
    karta.style.transform = `translateX(${aktualX}px) rotate(${rotation}deg)`;
    if (aktualX < -20) {
    karta.style.boxShadow = `-5px 0 10px red`;
    } else if (aktualX > 20) {
    karta.style.boxShadow = `5px 0 10px green`;
    } else {
    karta.style.boxShadow = `0 0 0 5px transparent`;
    }
}
let isRight = 0;
function endDrag() {
    if (!isDragging) return;
    isDragging = false;
    karta.style.transition = 'transform 0.3s ease, box-shadow 0.2s ease';

    const threshold = 100;
    if (Math.abs(aktualX) > threshold) {
    karta.style.transform = `translateX(${aktualX > 0 ? 500 : -500}px) rotate(${aktualX > 0 ? 50 : -50}deg)`;
    if(aktualX > threshold){
        spravne();
    }else if(aktualX < -threshold){
        if(isRight === 1){
            spatne();
        }else if (isRight === 0){
            reseni();
        }
    }
    } else {
    karta.style.transform = 'translateX(0) rotate(0deg)';
    karta.style.boxShadow = `0 0 0 5px transparent`;
    }
}
function spravne(){
    isRight = 0;defaultreset();
    
    if(udajeHry.length > 0){
        udajeHry.splice(0, 1);
        
        if(udajeHry.length === 0 && spatneHry.length > 0){
            udajeHry = [];
            for(let x = 0; x < spatneHry.length; x++){
                udajeHry.push(spatneHry[x]);
            }
            udajeHryPromena =  [];
            while(udajeHry.length > 0){
                let randomak = Math.floor(Math.random() * udajeHry.length);
                udajeHryPromena.push(udajeHry[randomak]);
                udajeHry.splice(randomak, 1);
            }
            udajeHry = udajeHryPromena;
            spatneHry = [];
        }
    }
    show();
}
function reseni(){
    isRight = 1;defaultreset();
    
    if(udajeHry.length > 0){
        if(prohaz === 0){
            karta.innerHTML = `${printer(udajeHry[0][0])}<a>-</a>${udajeHry[0][1]}`;
        }else if(prohaz === 1){
            karta.innerHTML = `${udajeHry[0][1]}<a>-</a>${printer(udajeHry[0][0])}`;
        }
    }

}
function spatne(){
    isRight = 0;defaultreset();
    
    if(udajeHry.length > 0){
        spatneHry.push(udajeHry[0]);
        udajeHry.splice(0, 1);
        if(udajeHry.length === 0 && spatneHry.length > 0){
            udajeHry = [];
            for(let x = 0; x < spatneHry.length; x++){
                udajeHry.push(spatneHry[x]);
            }
            udajeHryPromena =  [];
            while(udajeHry.length > 0){
                let randomak = Math.floor(Math.random() * udajeHry.length);
                udajeHryPromena.push(udajeHry[randomak]);
                udajeHry.splice(randomak, 1);
            }
            udajeHry = udajeHryPromena;
            spatneHry = [];
        }
    }
    show();
}

function show(){
    procentBar();
    if(udajeHry.length > 0){
        if(prohaz === 0){
            karta.innerHTML = printer(udajeHry[0][0]);
        }else if(prohaz === 1){
            karta.innerHTML = printer(udajeHry[0][1]);
        }

    }else{
        karta.innerHTML = "Všechna slovíčka hotova";

    }
}
function startNew(){    
    udajeHry = [];
    for(let x = 0; x < lekce["lekce"][lekceAktualni][1].length; x++){
        udajeHry.push(lekce["lekce"][lekceAktualni][1][x]);
    }
    udajeHryPromena =  [];
    while(udajeHry.length > 0){
        let randomak = Math.floor(Math.random() * udajeHry.length);
        udajeHryPromena.push(udajeHry[randomak]);
        udajeHry.splice(randomak, 1);
    }
    udajeHry = udajeHryPromena;
    document.getElementById('info').innerHTML = `(${lekce["lekce"][lekceAktualni][0][0]})`;
    show();
}


function defaultreset(){
        karta.style.transition = 'none';
        karta.style.transform = 'translateX(0) rotate(0deg)';
        karta.style.boxShadow = `0 0 0 5px transparent`;
}
function printer(text){
    if (text.startsWith("die ")) {
        return `<a><strong><span style="color: red;">die</span></strong> ${text.slice(3)}</a>`;
    } else if (text.startsWith("das ")) {
        return `<a><strong><span style="color: green;">das</span></strong> ${text.slice(3)}</a>`;
    } else if (text.startsWith("der ")) {
        return `<a><strong><span style="color: blue;">der</span></strong> ${text.slice(3)}</a>`;
    }
    return `<a>${text}</a>`;
}

function prohozeni() {
    if(prohaz === 0){
        prohaz = 1;

    }else{
        prohaz = 0;
    }
    startNew();
}
function procentBar(){
    let progressNUM = ((lekce["lekce"][lekceAktualni][1].length - udajeHry.length -spatneHry.length)/lekce["lekce"][lekceAktualni][1].length*100).toFixed(0);
    document.querySelector('.progress').textContent = `${progressNUM}%`;
    document.documentElement.style.setProperty('--length_progress', `${progressNUM}%` );
}

function zmenalekce(){
    document.documentElement.style.setProperty('--leave', `flex` );
    
}
function changeLekce(lekce){
    lekceAktualni = lekce;
    startNew();
    document.documentElement.style.setProperty('--leave', `none` );
}
function leave(){
    document.documentElement.style.setProperty('--leave', `none` );
}
document.documentElement.style.setProperty('--leave', `none` );