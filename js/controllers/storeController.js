app.controller('StoreController', function(DataService){
    
    this.name = 'Our Producs';

    this.items = 0;
    
    DataService.getServerData()
		.then(function (data) {
			this.products = data
	}.bind(this))

    this.sort = 'name';

    this.sortByElement = function(element){
        this.sort = element;
    }
    
    this.productsInCart = DataService.productsInCart;
    
    this.addToCart = function(product){
        console.log(product);
        DataService.productsInCart.push(product);
        console.log(DataService.productsInCart)
    }
});

app.service('DataService', function($http) {   
		this.getServerData = function(){
			return $http({
				url: "data/products.json"
			})
			.then(function (response) {
				return response.data;
			});
        }
        
        this.productsInCart = [];
});