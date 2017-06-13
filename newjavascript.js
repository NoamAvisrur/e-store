function getData(url){
    return fetch(url).then(function(response) {
         return response.json();
    });
}

data = getData('data.json')
.then(function(data) {
    var products = new Product(data);
    products.buildProducts(data);
    products.enableImgScale();
    var prices = new Price();
    prices.setPrice(data);
    var specs = new Specs();
    specs.setSpecs(data);
    var review = new Review();
    review.setReview(data);
    
    document.querySelector('img[title="Bolivian currency"]').addEventListener('click', function(){
        prices.ChangeCurrency( 'bolivian', " Bp", data);
    })
    
    document.querySelector('img[title="Colombian currency"]').addEventListener('click', function(){
            prices.ChangeCurrency( 'colombian', " Cp", data);
    })

    document.querySelector('img[title="Peruvian currency"]').addEventListener('click', function(){
        prices.ChangeCurrency( 'peruvian', " Pp", data);
    })

    document.querySelector('img[title="US dollars currency"]').addEventListener('click', function(){
        prices.ChangeCurrency( 'us', "$", data);
    })
})


