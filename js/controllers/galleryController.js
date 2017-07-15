app.controller('galleryController', function(scaleImg){
    
    this.scale = function(src){
        scaleImg.scale(src);
    };
    
    this.i = 0;
    
    this.selectImg = function(index){
        this.i = index;
    }      
});

app.service('scaleImg', function() {
    this.scale = function(src){
        var img = document.createElement('img');
        img.src = src; 
        var bg = document.createElement('div');
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
    }    
})