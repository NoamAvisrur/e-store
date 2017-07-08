var app = angular.module('store', []);

app.filter('unsafe', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
});

function scaleImg(src){
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

