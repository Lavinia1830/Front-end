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
            `<div class="card m-2 my-5 col" style="width: 18rem;">
                <img src="${e.img}" class="card-img-top" alt="Immagine dei libri">
                <div class="card-body ">
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


        /* for(let i = 0; i < 50; i++){
            //console.log(obj[i].img);
            let div = document.querySelector('.cardImage');
            let image = document.querySelector('img');
            let divBody = document.querySelector('.card-body');
            let title = document.querySelector('h5');
            image.src = obj[i].img;
            title = obj[i].title;
            //console.log(obj[i].title);
            div.appendChild(image);
            divBody.appendChild(title);
            
            
        }
        for (let i = 0; i < obj.length; i++){
            
            
            
        } */
        /* for(let i = 0; i < obj.length; i++){
            //console.log(obj[i].img);
            let card = document.querySelector('.card');
            let div = document.createElement('div');
            let divBody = document.createElement('div');
            div.classList.add("cardImage");
            divBody.classList.add("cardBody");
            let image = document.createElement('img');
            let title = document.createElement('p');
            let price = document.createElement('p');
            image.src = obj[i].img;
            title = obj[i].title;
            price = obj[i].price;
            card.appendChild(div);
            div.appendChild(image);
            divBody.appendChild(title);

        } */
    }
    
}



