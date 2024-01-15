let btn = document.querySelector('#invia');

btn.addEventListener('click', () => {
    //console.log("Click btn")
    let input = document.querySelector("form input");
    //console.log(input);
    //console.dir(input.value);
    let task = input.value.trim();
    if(task.length > 2){
        //console.log(task);
        let li = document.createElement('li');
        //li.innerHTML = '<span>' + task + '</span>' ; //contanenare task con span
        let span = document.createElement('span'); //creare uno span
        span.innerText = task; //equivalente a riga 12
        span.addEventListener('click', function (e) { //equivale alla funzione taskCompletato 
            e.target.className = e.target.className === 'completato' ? '' : 'completato';
        })
        li.appendChild(span); //appeso lo span al li
        let btn = document.createElement('button');
        btn.innerText = 'x';
        btn.addEventListener('click', (e) => {
            //console.log(e.target.parentNode);
            let li = e.target.parentNode;
            li.remove(); //rinuovere un elemento della lista
        })
        li.appendChild(btn);
        //console.log(li);
        let ul = document.querySelector('#lista ul');
        ul.appendChild(li);
        input.value = ""; //pulisci il campo
    }
    //taskCompletato();
})


/* function taskCompletato(){
    let li = document.querySelectorAll('#lista ul li');
    //console.log(li);
    for(let i=0; i<li.length; i++){
        li[i].addEventListener('click', function (e) {
            //console.log(this.className);
            //this.classList.toggle('completato'); //inserire una classe e toglie la classe
            //e.target.className = 'completato'; //ci applica la classe completato
            //console.log(e.target);
            e.target.className = e.target.className === 'completato' ? '' : 'completato' //operatore ternario if veloce
        })
    }
} */

