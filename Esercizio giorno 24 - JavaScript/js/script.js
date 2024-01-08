const apiKey = 'gp8e3KrscTL8mMNFMHsy06nYZ8rFDXpk0RgnbHXeiHu1A3eAPed9XDYi';

document.addEventListener('DOMContentLoaded', () => {
    document 
        .querySelector('main section.jumbotron button.btn-primary')
        .addEventListener('click', () => {getPhotos('cat', 1, 15)});
})


function getPhotos (query, page = 1, size = 15) {
    let url = `https://api.pexels.com/v1/search/?page=${page}&per_page=${size}&query=${query}`;
    fetch(url, {
        method: 'GET',
        headers: { Authorization: apiKey }
    })
    .then(response => response.json())
    .then(json => {
        //console.log(json);
        createPhotosCard(json);
    })
    .catch(error => console.log(error))
}

function createPhotosCard(data){
    console.log(data);
    let album = document.querySelector ('div.album div.row');
    album.innerHTML = '';
    data.forEach(photo => {
        console.log(photo);
        let card = 
        `<div class="col-md-4">
        <div class="card shadow-sm">
            <img src="${photo.src.portrait}" class="card-img-top" alt="${photo.alt}">
            <div class="card-body">
                <h5 class="card-title">Lorem Ipsum</h5>
                <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                </p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">
                            View
                        </button>
                        <button type="button" class="btn btn-sm btn-outline-secondary">
                            Edit
                        </button>
                    </div>
                    <small class="text-muted">9 mins</small>
                </div>
            </div>
        </div>
    </div>`;
    album.innerHTML += card;
    })
    
}
