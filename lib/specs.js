class Specs {
    setSpecs(arr){
        var specs_buttons = document.querySelectorAll('#specs_button');
        for (let i = 0; i < specs_buttons.length; i++){
            specs_buttons[i].addEventListener('click', function(e){
                Specs.prototype.buildSpecs(arr[i].specs, e.target, e.target.parentNode);
            });
        }
    }   
    buildSpecs(specs,button, parent){
       var specs_container = parent.querySelector('.info_container');
       specs_container.innerHTML = "";
       specs_container.id = "specs_container";
        for(var key in specs[0]) {
            var div = document.createElement ('div');
            var spec = document.createElement ('span');
            spec.className = "key";
            spec.textContent = key;
            div.appendChild(spec);
            var value = document.createElement ('span');
            value.className = "value";
            value.textContent = specs[0][key];
            div.appendChild(value);
            specs_container.appendChild(div);
            Specs.prototype.buttonActivate(button, '#price_button', '#review_button', parent);
        }
    }
    
    buttonActivate(pressedB, unpressdB1, unpressdB2, parent){
        pressedB.className = "active";
        parent.querySelector(unpressdB1).classList.remove("active");
        parent.querySelector(unpressdB2).classList.remove("active");
    }
    
}