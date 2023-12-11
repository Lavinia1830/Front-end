//Chiamate Ajax
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://striveschool-api.herokuapp.com/books');
xhr.send(); //settre la chiamata e attando la risposta

xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        //console.log('The operation is complete');
        let json = xhr.responseText;
        //console.log(json);
        let obj = JSON.parse(json); //trasformo in un array di oggetti
        //console.log(obj);
        
        obj.forEach(e => { //quando dobbiamo scrivere i comadi in HTML
            let card = document.querySelector('#books-wrapper');
            
            card.innerHTML +=
            `<div class="col">
                <div class="card shadow-sm h-100">
                    <img src="${e.img}" class="card-img-top" alt="${e.title}">
                    <div class="card-body">
                        <h5 class="card-title">${e.title}</h5>
                        <p class="card-text badge rounded-pill text-bg-dark">${e.category}</p>
                        <p class="fs-4">${e.price}</p> <!--fs: font-size = misura del font--> 
                        <div>
                            <a href="#" class="btn btn-primary">Compra ora</a>
                            <a class="btn btn-outline-danger" onclick="skip(event)">Scarta</a>
                        </div>
                    </div>
                </div>
            </div>`
        });
    }
    
}
const skip = (event) => { /*Questa funzione con il 
    parametro evento quando fai click sull'a che 
    abbiamo trasformato in un pulsante scarta lui lo rimuove dalla lista*/
    event.target.closest('.col').remove() 
}


