app.controller('StoreController', function($http){
    this.name = 'Our Producs';

    $http.get("data/products.json")
    .then(function(response) {
        this.products = response.data;
    }.bind(this));
    
    this.tab = 1;

    this.sort = 'name';

    this.sortByElement = function(element){
        this.sort = element;
    }
   
    this.scale = function(src){
        scaleImg(src);
    }
});