function creaTabellone() {
    let tabella = document.getElementById('tabellone-body');
    let numeroCella = 1;

    for (let riga = 1; riga <= 4; riga++) {
      let tr = document.createElement('tr');

      for (let colonna = 1; colonna <= 19; colonna++) {
        let td = document.createElement('td');
        td.textContent = numeroCella;
        tr.appendChild(td);
        numeroCella++;
      }
        tabella.appendChild(tr);
    }
}
creaTabellone();


function numeroRandom(){
    let btn = document.querySelector('#button');
    btn.addEventListener("click", () => {
        let n = Math.floor((Math.random() * 75) + 1);
        console.log(n);
    }) 
}
numeroRandom();

/* let cella = document.querySelectorAll('#cellaNumero');
function colorCella(){
     let numberRandom = numeroRandom();
    if(cella === numberRandom){
        cella.className = 'colorCella';
    }
} */