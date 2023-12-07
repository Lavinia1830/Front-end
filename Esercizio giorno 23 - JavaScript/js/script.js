//Chiamate Ajax
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://striveschool-api.herokuapp.com/books');
xhr.send();

xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        //console.log('The operation is complete');
        let json = xhr.responseText;
        //console.log(json);
        let obj = JSON.parse(json);
        //console.log(obj);
        
        obj.forEach(e => { //quando dobbiamo scrivere i comadi in HTML
            let div = document.querySelector('#containerCard');
            let card = document.createElement('div');
            div.appendChild(card);

            card.innerHTML =
            `
            <div class="card m-2 my-5" style="width: 18rem;">
                <img src="${e.img}" class="card-img-top" alt="Immagine dei libri">
                <div class="card-body">
                    <div>
                        <h5 class="card-title">${e.title}</h5>
                        <span class="badge rounded-pill text-bg-dark">${e.category}</span>
                    </div>
                    <div>
                        <p class="card-text">${e.price}</p>
                        <a href="#" class="btn btn-primary">Compra ora</a>
                        <a href="#" class="btn btn-danger">Scarta</a>
                    </div>
                </div>
            </div>`
        });
    }
    
}



