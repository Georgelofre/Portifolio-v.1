var img = document.getElementById('img_animado_part4'); 
var dados = {x: 50}
img.style.left = "50%";

setInterval( function oscilar(){
    var c = new Date();
    var seg = c.getSeconds();

    if (seg % 2){
        dados.x += 0.02;
        img.style.left = `${dados.x}%`;
    } else {
        dados.x -= 0.02;
        img.style.left = `${dados.x}%`;
    }

}, 10)
