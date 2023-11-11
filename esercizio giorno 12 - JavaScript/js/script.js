
function tabella (){
    let tabella = document.querySelector('#numberTombola'); 
    /*let tabellaNumeri = document.createElement('table'); */
    for(let i=1; i<=76; i++){
        let cella = document.createElement('div');
        cella.innerHTML = [i];
        tabella.appendChild(cella);
        cella.className = 'cellaNumber';
    }
}
tabella();


function numeroRandom(){
    let btn = document.querySelector('#button');
    btn.addEventListener("click", () => {
        let n = Math.floor((Math.random() * 75) + 1);
        
        console.log(n);
    })
    
}
numeroRandom();

let cella = document.querySelectorAll('#cellaNumero');
function colorCella(){
     let numberRandom = numeroRandom();
    if(cella === numberRandom){
        cella.className = 'colorCella';
    }
}

