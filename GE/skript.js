let zakázNUMS =[];
let prohazovac = 1;
let lekceURC = 7;
let progressNUM = 0;
let addonka;
document.addEventListener("DOMContentLoaded", function all() {
    document.documentElement.style.setProperty('--indexka', `-50` );
    progressNUM = 0;
    document.documentElement.style.setProperty('--color', "gainsboro" );
    randomak = Math.floor(Math.random() * lekce[lekceURC]["počet"]);
    zakázNUMS.push(randomak);
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
    if(addonka === undefined){
        randomak = Math.floor(Math.random() * lekce[lekceURC]["počet"]);
    }else{
        randomak = Math.floor(Math.random() * lekce["slovesa"][lekceURC]["počet"]);
    }
    let pocet;
    if(addonka === undefined){
        pocet  = lekce[lekceURC]["počet"];
    }else{
        pocet = lekce["slovesa"][lekceURC]["počet"];
    }
    if(zakázNUMS.length === pocet) {
        if(spatneNUMS.length === 0){
            document.querySelector('.aaa').textContent = `Dokončeno. Klikni na restart nebo změň lekci`;
        }else{
            randomak = Math.floor(Math.random() * spatneNUMS.length);

            if(prohazovac === 1){
                if(addonka === undefined){
                    document.querySelector('.lekce').textContent = `Lekce ${lekceURC}`;
                    document.querySelector('.aaa').textContent = `${lekce[lekceURC][spatneNUMS[randomak]][0]}`;
                    document.querySelector('.bbb').textContent = `${lekce[lekceURC][spatneNUMS[randomak]][1]}`;
                }else{
                    document.querySelector('.lekce').textContent = `Lekce ${lekceURC} - slovesa`;
                    document.querySelector('.aaa').textContent = `${lekce["slovesa"][lekceURC][spatneNUMS[randomak]][0]}`;
                    document.querySelector('.bbb').textContent = `${lekce["slovesa"][lekceURC][spatneNUMS[randomak]][1]}`;
                }

            }else{
                if(addonka === undefined){
                    document.querySelector('.lekce').textContent = `Lekce ${lekceURC}`;
                    document.querySelector('.aaa').textContent = `${lekce[lekceURC][spatneNUMS[randomak]][1]}`;
                    document.querySelector('.bbb').textContent = `${lekce[lekceURC][spatneNUMS[randomak]][0]}`;
                }else{
                    document.querySelector('.lekce').textContent = `Lekce ${lekceURC} - slovesa`;
                    document.querySelector('.aaa').textContent = `${lekce["slovesa"][lekceURC][spatneNUMS[randomak]][1]}`;
                    document.querySelector('.bbb').textContent = `${lekce["slovesa"][lekceURC][spatneNUMS[randomak]][0]}`;
                }
            }
            console.log(zakázNUMS.length);
            console.log(zakázNUMS);
            console.log(spatneNUMS);
            if(addonka === undefined){
                progressNUM = ((zakázNUMS.length - spatneNUMS.length) / lekce[lekceURC]["počet"] * 100).toFixed(0) ;
            }else{
                progressNUM = ((zakázNUMS.length - spatneNUMS.length) / lekce["slovesa"][lekceURC]["počet"] * 100).toFixed(0) ;
            }
            document.querySelector('.progress').textContent = `${progressNUM}%`;
            document.documentElement.style.setProperty('--length_progress', `${progressNUM}%` );
        }
    }else{
        while(zakázNUMS.includes(randomak)){
            if(addonka === undefined){
                randomak = Math.floor(Math.random() * lekce[lekceURC]["počet"]);
            }else{
                randomak = Math.floor(Math.random() * lekce["slovesa"][lekceURC]["počet"]);
            }
        }
        zakázNUMS.push(randomak);

        if(prohazovac === 1){
            if(addonka === undefined){
                document.querySelector('.lekce').textContent = `Lekce ${lekceURC}`;
                document.querySelector('.aaa').textContent = `${lekce[lekceURC][randomak][0]}`;
                document.querySelector('.bbb').textContent = `${lekce[lekceURC][randomak][1]}`;
            }else{
                document.querySelector('.lekce').textContent = `Lekce ${lekceURC} - slovesa`;
                document.querySelector('.aaa').textContent = `${lekce["slovesa"][lekceURC][randomak][0]}`;
                document.querySelector('.bbb').textContent = `${lekce["slovesa"][lekceURC][randomak][1]}`;
            }
        }else{
            if(addonka === undefined){
                document.querySelector('.lekce').textContent = `Lekce ${lekceURC}`;
                document.querySelector('.aaa').textContent = `${lekce[lekceURC][randomak][1]}`;
                document.querySelector('.bbb').textContent = `${lekce[lekceURC][randomak][0]}`;
            }else{
                document.querySelector('.lekce').textContent = `Lekce ${lekceURC} - slovesa`;
                document.querySelector('.aaa').textContent = `${lekce["slovesa"][lekceURC][randomak][1]}`;
                document.querySelector('.bbb').textContent = `${lekce["slovesa"][lekceURC][randomak][0]}`;
            }
        }
        console.log(zakázNUMS.length);
        console.log(zakázNUMS);
        console.log(spatneNUMS);
        if(addonka === undefined){
            progressNUM = ((zakázNUMS.length - spatneNUMS.length) / lekce[lekceURC]["počet"] * 100).toFixed(0) ;
        }else{
            progressNUM = ((zakázNUMS.length - spatneNUMS.length) / lekce["slovesa"][lekceURC]["počet"] * 100).toFixed(0) ;
        }
        document.querySelector('.progress').textContent = `${progressNUM}%`;
        document.documentElement.style.setProperty('--length_progress', `${progressNUM}%` );
    }
}
function dobre(){
    if(addonka === undefined){
        if(zakázNUMS.length === lekce[lekceURC]["počet"]) {
            if(spatneNUMS.length != 0){
                spatneNUMS.splice(randomak,1);
                progressNUM = ((zakázNUMS.length - spatneNUMS.length) / lekce[lekceURC]["počet"] * 100).toFixed(0) ;
                document.querySelector('.progress').textContent = `${progressNUM}%`;
                document.documentElement.style.setProperty('--length_progress', `${progressNUM}%` );
            }
        }
    }else{
        if(zakázNUMS.length === lekce["slovesa"][lekceURC]["počet"]) {
            if(spatneNUMS.length != 0){
                spatneNUMS.splice(randomak,1);
                progressNUM = ((zakázNUMS.length - spatneNUMS.length) / lekce["slovesa"][lekceURC]["počet"] * 100).toFixed(0) ;
                document.querySelector('.progress').textContent = `${progressNUM}%`;
                document.documentElement.style.setProperty('--length_progress', `${progressNUM}%` );
            }
        }
    }
    dalsi();
}
function spatne(){
    if(addonka === undefined){
        if(zakázNUMS.length != lekce[lekceURC]["počet"]) {
            spatneNUMS.push(zakázNUMS[zakázNUMS.length - 1]);
        }
    }else{
        if(zakázNUMS.length != lekce ["slovesa"][lekceURC]["počet"]) {
            spatneNUMS.push(zakázNUMS[zakázNUMS.length - 1]);
        }
    }
    dalsi();
}
let spatneNUMS = [];

function zmenaAddonky(addon, num){
    addonka = addon;
    lekceURC = num;
    zakázNUMS =[];
    spatneNUMS = [];
    document.querySelector('.pocetslov').textContent = `Budoucí popis lekce (počet slov:${lekce["slovesa"][lekceURC]["počet"]})`;
    zmizeniVyberLekci();
    dalsi();
}





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
    document.documentElement.style.setProperty('--indexka', `50` );
    let lekceNUM = 1;
    let zobrazko;
    if((lekceURC === lekceNUM)&&(addonka === undefined)){
        zobrazko = `<div class="divkoLekce" onclick="nastaveniLekce(${lekceNUM})" style="background-color: yellow;">${lekceNUM}. všeobecná lekce [${lekce[lekceNUM]["počet"]} slov]</div>`;
    }else{
        zobrazko = `<div class="divkoLekce" onclick="nastaveniLekce(${lekceNUM})" >${lekceNUM}. všeobecná lekce [${lekce[lekceNUM]["počet"]} slov]</div>`;
    }

    while (lekceNUM < 10){
        lekceNUM = lekceNUM + 1;
        if((lekceURC === lekceNUM)&&(addonka === undefined)){
            zobrazko = zobrazko + `<div class="divkoLekce" onclick="nastaveniLekce(${lekceNUM})" style="background-color: yellow;">${lekceNUM}. všeobecná lekce [${lekce[lekceNUM]["počet"]} slov]</div>`;
        }else{
            zobrazko = zobrazko + `<div class="divkoLekce" onclick="nastaveniLekce(${lekceNUM})" >${lekceNUM}. všeobecná lekce [${lekce[lekceNUM]["počet"]} slov]</div>`;
        }
    }
    lekceNUM = 1;
    let addon = 1;
    if((lekceURC === lekceNUM)&&(addonka === addon)){
        zobrazko = zobrazko + `<div class="divkoLekce" onclick="zmenaAddonky(${addon}, ${lekceNUM})" style="background-color: yellow;">${lekceNUM}. lekce (slovesa) [${lekce["slovesa"][lekceNUM]["počet"]} slov]</div>`;
    }else{
        zobrazko = zobrazko + `<div class="divkoLekce" onclick="zmenaAddonky(${addon}, ${lekceNUM})" >${lekceNUM}. lekce (slovesa) [${lekce["slovesa"][lekceNUM]["počet"]} slov]</div>`;
    }
    while (lekceNUM < 11){
        lekceNUM = lekceNUM + 1;
        if(lekceNUM != 11){
            if((lekceURC === lekceNUM)&&(addonka === addon)){
                zobrazko = zobrazko + `<div class="divkoLekce" onclick="zmenaAddonky(${addon}, ${lekceNUM})" style="background-color: yellow;">${lekceNUM}. lekce (slovesa) [${lekce["slovesa"][lekceNUM]["počet"]} slov]</div>`;
            }else{
                zobrazko = zobrazko + `<div class="divkoLekce" onclick="zmenaAddonky(${addon}, ${lekceNUM})" >${lekceNUM}. lekce (slovesa) [${lekce["slovesa"][lekceNUM]["počet"]} slov]</div>`;
            }
        }else{
            if((lekceURC === lekceNUM)&&(addonka === addon)){
                zobrazko = zobrazko + `<div class="divkoLekce" onclick="zmenaAddonky(${addon}, ${lekceNUM})" style="background-color: yellow;">Všechny lekce (slovesa) [${lekce["slovesa"][lekceNUM]["počet"]} slov]</div>`;
            }else{
                zobrazko = zobrazko + `<div class="divkoLekce" onclick="zmenaAddonky(${addon}, ${lekceNUM})" >Všechny lekce (slovesa) [${lekce["slovesa"][lekceNUM]["počet"]} slov]</div>`;
            }
        }
    }
    document.querySelector(".lekcovna").innerHTML = `<div class="krizek" onclick="zmizeniVyberLekci()"><strong>×</strong></div>${zobrazko}`;
}
function restart(){
    zakázNUMS =[];
    spatneNUMS = [];
    dalsi();
}
function zmizeniVyberLekci(){
    document.documentElement.style.setProperty('--indexka', `-50` );
}
function nastaveniLekce(num){
    addonka = undefined;
    lekceURC = num;
    zakázNUMS =[];
    spatneNUMS = [];
    document.querySelector('.pocetslov').textContent = `Budoucí popis lekce (počet slov:${lekce[lekceURC]["počet"]})`;
    zmizeniVyberLekci();
    dalsi();
}