class Price {
    setPrice(arr){
    var price_buttons = document.querySelectorAll('#price_button');
        for (let i = 0; i < price_buttons.length; i++){
            var price_container = document.createElement('div');
            price_container.id = "price_container";
            price_container.className = "info_container";
            var span = document.createElement('span');
            span.textContent = arr[i].price + "$";
            price_container.appendChild(span);
            price_buttons[i].parentNode.appendChild(price_container);
            price_buttons[i].parentNode.querySelector('#price_button').classList.add("active");
            price_buttons[i].addEventListener('click', function(e){
                Price.prototype.buildPrice(arr[i].price, e.target, e.target.parentNode);
            })
        } 
    }
    
    buildPrice(price, button, parent){
        var price_container = parent.querySelector('.info_container');
        price_container.innerHTML = "";
        price_container.id = "price_container";
        var span = document.createElement('span');
        span.textContent = price + "$";
        price_container.appendChild(span);
        Price.prototype.buttonActivate(button, '#specs_button', '#review_button', parent);
    }
    
    buttonActivate(pressedB, unpressdB1, unpressdB2, parent){
        pressedB.className = "active";
        parent.querySelector(unpressdB1).classList.remove("active");
        parent.querySelector(unpressdB2).classList.remove("active");
    }
    
    ChangeCurrency(coin, sign, arr){
        var price = document.querySelectorAll('#price_container span');
        for(var i = 0; i < price.length; i++){
            if(coin !== "us"){
                price[i].textContent = arr[i].currency[0][coin] + sign;
            }else{
                price[i].textContent = arr[i].price + sign;
            }       
        } 
    }
}
    