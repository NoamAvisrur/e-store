function getData(url){
    return fetch(url).then(function(response) {
         return response.json();
    });
}

mydata = getData('data.json')
.then(function(data) {
    var products = new Product(data);
    products.buildProducts(data);
    products.enableImgScale();
    var prices = new Price();
    prices.setPrice(data);
    prices.setCurrency(data);
    var specs = new Specs();
    specs.setSpecs(data);
    var review = new Review();
    review.setReview(data);
    return promise = new Promise(function(resolve,reject){
         resolve(data);
    });
}).then(function(data){
    sortByPrice(data);
});

function sortByPrice(data){
    document.querySelector('#sort_price').addEventListener('click', function(){
        dataPrice = data.sort(function(a, b){
            return a.price-b.price;
        });
        document.querySelector('main').innerHTML = "";
        var SortedProducts = new Product(data);
        SortedProducts.buildProducts(data);
        SortedProducts.enableImgScale();
        var sortedPrices = new Price();
        sortedPrices.setPrice(data);
        var sortedSpecs = new Specs();
        sortedSpecs.setSpecs(data);
        var SortedReview = new Review();
        SortedReview.setReview(data);
 
    });
}    