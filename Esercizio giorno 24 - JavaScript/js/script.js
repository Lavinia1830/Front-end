function loadImages() {
    let url = 'https://api.pexels.com/v1/search?query=cat'
    fetchImages(url);
}

function loadSecondaryImages() {
    let url = 'https://api.pexels.com/v1/search?query=dog'
    fetchImages(url);
}

function fetchImages (url) {
    fetch(url, {
        method: 'GET',
        headers: {
            Authorization: 'gp8e3KrscTL8mMNFMHsy06nYZ8rFDXpk0RgnbHXeiHu1A3eAPed9XDYi'
        }
    })
    .then(response => response.json())
    .then(json => {
        console.log(json);
        
        json.photos.forEach(photo => {
            let div = document.querySelector("#card-container");
            div.innerHTML += 
            `<div class="col-md-4 mb-5">
                <div class="card shadow-sm h-100">
                    <img src="${photo.src.small}" class="card-img-top" style="width:100%; height:200px" alt="${photo.alt}">
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
            </div>`
        });
    })
    .catch(error => console.log(error))
}


