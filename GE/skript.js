let zakázNUMS =[];
let prohazovac = 1;
let lekceURC = 7;
let progressNUM = 0;
document.addEventListener("DOMContentLoaded", function all() {
    progressNUM = 0;
    document.documentElement.style.setProperty('--color', "gainsboro" );
    randomak = Math.floor(Math.random() * lekce[lekceURC]["počet"]);
    while(zakázNUMS.includes(randomak)){
        randomak = Math.floor(Math.random() * lekce[lekceURC]["počet"]);
    }
    document.querySelector('.lekce').textContent = `Lekce ${lekceURC}`;
    document.querySelector('.pocetslov').textContent = `Budoucí popis lekce (počet slov:${lekce[lekceURC]["počet"]})`;
    document.querySelector('.aaa').textContent = `${lekce[lekceURC][randomak][0]}`;
    document.querySelector('.bbb').textContent = `${lekce[lekceURC][randomak][1]}`;
    document.querySelector('.progress').textContent = `${progressNUM}%`;
    document.documentElement.style.setProperty('--length_progress', `${progressNUM}%` );
})
let randomak;
function dalsi(){
    document.documentElement.style.setProperty('--color', "gainsboro" );
    randomak = Math.floor(Math.random() * lekce[lekceURC]["počet"]);
    if(zakázNUMS.length === lekce[lekceURC]["počet"]) {
        if(spatneNUMS.length === 0){
            document.querySelector('.aaa').textContent = `Dokončeno. Klikni na restart`;
        }else{
            randomak = Math.floor(Math.random() * spatneNUMS.length);

            if(prohazovac === 1){
                document.querySelector('.lekce').textContent = `Lekce ${lekceURC}`;
                document.querySelector('.aaa').textContent = `${lekce[lekceURC][spatneNUMS[randomak]][0]}`;
                document.querySelector('.bbb').textContent = `${lekce[lekceURC][spatneNUMS[randomak]][1]}`;
            }else{
                document.querySelector('.lekce').textContent = `Lekce ${lekceURC}`;
                document.querySelector('.aaa').textContent = `${lekce[lekceURC][spatneNUMS[randomak]][1]}`;
                document.querySelector('.bbb').textContent = `${lekce[lekceURC][spatneNUMS[randomak]][0]}`;
            }
            console.log(zakázNUMS.length);
            console.log(zakázNUMS);
            console.log(spatneNUMS);
            progressNUM = ((zakázNUMS.length - spatneNUMS.length) / lekce[lekceURC]["počet"] * 100).toFixed(0) ;
            document.querySelector('.progress').textContent = `${progressNUM}%`;
            document.documentElement.style.setProperty('--length_progress', `${progressNUM}%` );
        }
    }else{
        while(zakázNUMS.includes(randomak)){
            randomak = Math.floor(Math.random() * lekce[lekceURC]["počet"]);
        }
        zakázNUMS.push(randomak);

        if(prohazovac === 1){
            document.querySelector('.lekce').textContent = `Lekce ${lekceURC}`;
            document.querySelector('.aaa').textContent = `${lekce[lekceURC][randomak][0]}`;
            document.querySelector('.bbb').textContent = `${lekce[lekceURC][randomak][1]}`;
        }else{
            document.querySelector('.lekce').textContent = `Lekce ${lekceURC}`;
            document.querySelector('.aaa').textContent = `${lekce[lekceURC][randomak][1]}`;
            document.querySelector('.bbb').textContent = `${lekce[lekceURC][randomak][0]}`;
        }
        console.log(zakázNUMS.length);
        console.log(zakázNUMS);
        console.log(spatneNUMS);
        progressNUM = ((zakázNUMS.length - spatneNUMS.length) / lekce[lekceURC]["počet"] * 100).toFixed(0) ;
        document.querySelector('.progress').textContent = `${progressNUM}%`;
        document.documentElement.style.setProperty('--length_progress', `${progressNUM}%` );
    }
}
function dobre(){
    if(zakázNUMS.length === lekce[lekceURC]["počet"]) {
        if(spatneNUMS.length != 0){
            spatneNUMS.splice(randomak,1);
            progressNUM = ((zakázNUMS.length - spatneNUMS.length) / lekce[lekceURC]["počet"] * 100).toFixed(0) ;
            document.querySelector('.progress').textContent = `${progressNUM}%`;
            document.documentElement.style.setProperty('--length_progress', `${progressNUM}%` );
        }
    }
    dalsi();
}
function spatne(){
    if(zakázNUMS.length != lekce[lekceURC]["počet"]) {
        spatneNUMS.push(zakázNUMS[zakázNUMS.length - 1]);
    }
    dalsi();
}
let spatneNUMS = [];







function dalsien(){
    if(prohazovac === 1){
        prohazovac=2;
    }else{
        prohazovac=1;
    }
    zakázNUMS =[];
    spatneNUMS = [];
    dalsi();
}
function odpověď(){
    document.documentElement.style.setProperty('--color', "black" );
}
function zmenalekc(){
    if(lekceURC === 10){
        lekceURC = 1;}
    else{
        lekceURC = lekceURC + 1;
    }
    zakázNUMS =[];
    spatneNUMS = [];
    document.querySelector('.pocetslov').textContent = `Budoucí popis lekce (počet slov:${lekce[lekceURC]["počet"]})`;
    dalsi();
}
function restart(){
    zakázNUMS =[];
    spatneNUMS = [];
    dalsi();
}