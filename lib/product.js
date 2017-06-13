class Product{
    constructor (data){
        this.data =data;
    }    
    
        buildProducts (arr) {   
            arr.forEach(function(val, i) {
                var product_container = document.createElement('div');
                product_container.className = 'product_container';
                var title = document.createElement('h2');
                title.textContent = val.name;
                product_container.appendChild(title);
                var img = document.createElement('img');
                img.src = val.img;
                product_container.appendChild(img);
                var price_button = document.createElement('button');
                price_button.textContent = "Price"
                price_button.id = "price_button";
                product_container.appendChild(price_button);
                var specs_button = document.createElement('button');
                specs_button.textContent = "Specs"
                specs_button.id = "specs_button";  
                product_container.appendChild(specs_button);
                var review_button = document.createElement('button');
                review_button.textContent = "Review"
                review_button.id = "review_button";
                product_container.appendChild(review_button);
                document.querySelector('main').appendChild(product_container);
        })      
    } 
    enableImgScale(){
        var images = document.querySelectorAll('.product_container img');
        for (let i = 0; i < images.length; i++){
            images[i].addEventListener('click', function(e){
                var img = e.target.cloneNode(true);
                var bg = document.createElement ('div');
                bg.className = 'bg';
                bg.appendChild(img);
                var button = document.createElement('button');
                button.className = "close_button";
                button.innerHTML = "&#10006;"
                button.addEventListener('click', function(){
                    document.querySelector('.bg').remove();    
                });
                bg.appendChild(button);
                document.body.appendChild(bg);
            })
        }    
    }
}
