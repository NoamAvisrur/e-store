app.controller('ReviewsController', function(){

    this.comment = {};

    this.star = '&#9734;'

    this.push = function(product){
        product.review.push({
              comment: this.comment.comment,
              rate: this.comment.rate,
              date: new Date().getTime()
        });
	this.comment = {};
        console.log(product);
    }
})