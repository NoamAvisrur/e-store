class Review{    
    constructor (){
        //var that = this;
    }
    setReview(arr){
        var reviews_buttons = document.querySelectorAll('#review_button');
        for (let i = 0; i < reviews_buttons.length; i++){
            reviews_buttons[i].addEventListener('click', function(e){
                Review.prototype.buildReview(arr[i].reviews, e.target, e.target.parentNode);
                Review.prototype.mouseEnterStars();
                Review.prototype.mouseLeaveStars();
                Review.prototype.rateStars();
                Review.prototype.submitReview();
            });
        }
    }
    buildReview(reviews, button, parent){   
        if(document.querySelector('#review_container')){
            var info = document.querySelector('#review_container'); 
            info.id = "info_container";
            info.innerHTML = "";
        }
        var review_container = parent.querySelector('.info_container');
        review_container.innerHTML = ""; 
        review_container.id = "review_container";
        var form = document.createElement ('form');
        var input = document.createElement ('input');
        input.type = "text";
        input.placeholder = "write a review for this product"
        var submit = document.createElement ('input');
        submit.type = "submit";
        submit.value = "Add";
        form.appendChild(input);
        form.appendChild(submit);
        review_container.appendChild(form);
        var div = document.createElement ('div');
        var rate = document.createElement ('span');
        rate.textContent = "Rate:";
        div.appendChild(rate);
        for(var i = 0; i < 5; i++){
            var star = document.createElement ('span');
            star.innerHTML = "&#9734";
            star.className = "review_star"
            div.appendChild(star);
        }
        review_container.appendChild(div);
        Review.prototype.buttonActivate(button, '#price_button', '#specs_button', parent);
    }
    
    mouseEnterStars(){
        var stars = document.querySelectorAll('.review_star');
        for(let i = 0; i < stars.length; i++){
            stars[i].addEventListener('mouseenter', function(e){
                var dex = Array.prototype.indexOf.call(stars, e.target);
                for(var idx = 0; idx < dex+1; idx++){
                    stars[idx].innerHTML = "&#9733;";
                }
            })    
        }
    }
    
    mouseLeaveStars(){
        var stars = document.querySelectorAll('.review_star');
        for(let i = 0; i < stars.length; i++){
            stars[i].addEventListener('mouseleave', function(e){
                for(let i = 0; i < stars.length; i++){
                  if (stars[i].className !== "review_star selected"){
                      stars[i].innerHTML = "&#9734;";  
                   }     
                } 
            })       
        }        
    } 
    
    rateStars(){
        var stars = document.querySelectorAll('.review_star');
        for(let i = 0; i < stars.length; i++){
            stars[i].addEventListener('click', function(e){
                Review.prototype.cleanStras(stars);
                Review.prototype.index = Array.prototype.indexOf.call(stars, e.target)
                for(var idx = 0; idx < Review.prototype.index+1; idx++){
                    stars[idx].innerHTML = "&#9733;";
                    stars[idx].classList.add("selected");
                }
            })    
        }        
    }
    
    cleanStras(stars){
        for(let i = 0; i < stars.length; i++){
            stars[i].innerHTML = "&#9734;";
            stars[i].classList.remove("selected");      
        }   
    }
    
    buttonActivate(pressedB, unpressdB1, unpressdB2, parent){
        pressedB.className = "active";
        parent.querySelector(unpressdB1).classList.remove("active");
        parent.querySelector(unpressdB2).classList.remove("active");
    }
    
    submitReview(){
        if(document.querySelector('form')){
            document.querySelector('form').addEventListener('submit', function(e){
                e.preventDefault(); 
                if (document.querySelector('input[type="text"]').value !== "" && typeof Review.prototype.index != 'undefined'){
                    var comment = document.querySelector('input[type="text"]').value;
                    var rate = Review.prototype.index+1;
                    Review.prototype.buildComments(comment, rate, e.target);
                    document.querySelector('input[type="text"]').value = "";
                    Review.prototype.cleanStras(document.querySelectorAll('.selected'));
                }    
            })      
        }
    }
    
    buildComments(comment, rate, parent){
        var review_container = document.createElement('div');
        review_container.className = "review_container";
        var text = document.createElement ('span');
        text.className = "comment";
        text.textContent = comment;
        review_container.appendChild(text);
        for(var i = 0; i < rate; i++){
            var star = document.createElement ('span');
            star.innerHTML = "&#9733";
            star.className = "star"
            review_container.appendChild(star);
        }    
        parent.parentNode.appendChild(review_container);
    }
}