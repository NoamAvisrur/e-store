app.controller('ReviewsController', function(){

    this.comment = {};

    this.star = '&#9734;'

    this.push = function(product){
        product.review.push({
              comment: this.comment.comment,
              rate: this.comment.rate,
              date: this.getDate()
        });
	this.comment = {};
        console.log(product);
    }

    this.getDate = function(){
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1;
        var yyyy = today.getFullYear();
        if(dd<10){
            dd='0'+dd;
        } 
        if(mm<10){
            mm='0'+mm;
        }
        var CommentDate = ' ('+dd+'/'+mm+'/'+yyyy+')';
        return CommentDate;
    }

})