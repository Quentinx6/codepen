document.addEventListener("DOMContentLoaded", function() {
    let area = document.getElementById('show');
    let text = document.getElementById('text');
    let ib = document.getElementById('i');
    let limit = 200;
    let valeur = 0;
    let gb = document.getElementById('g');
    let image = document.getElementById('chargement');
    let body = document.body;
    let max = document.getElementById('limite');
    let charge = document.getElementById('file');
    let pourcent = limit /2 ;
    let rouge = 0.8 * limit;
    let css = document.getElementById('textcss');
    let prog = document.getElementById('prog');
    let i = '<i></i>';
    let g = '<b></b>';
    max.innerHTML= valeur + `/${limit}`;
    image.style.visibility="hidden";
    text.addEventListener('keyup', function(){
        limite();
    })
    ib.addEventListener('click', function(){
        //Au clique je veux qu'il intègre la variable i dans ma variable text
        text.value += i;
    })
    gb.addEventListener('click', function(){
        //Au clique je veux qu'il intégre la variable g dans ma variable text
        text.value += g;
    })
    //contour + image de chargement
        text.onfocus = function(){
            image.style.visibility="visible";
            text.classList.add('contour');
        }
        text.onblur = function(){
            image.style.visibility="hidden";
            text.classList.remove('contour');
        }
        css.onfocus = function(){
            image.style.visibility="visble";
            css.classList.add('contour');
        }
        css.onblur = function(){
            image.style.visibility="hidden";
            css.classList.remove('contour');
        }
    //Fin pour contour
    function limite(){
        text.value = text.value.substring(0,limit);
        area.innerHTML = text.value;
        valeur = area.textContent.length;
        max.innerHTML = valeur + `/${limit}`;
        charge.setAttribute('value', `${valeur}`)
        charge.setAttribute('max', `${limit}`)
        //Changement de couleur pour la barre de progression
        if (valeur < pourcent){
            charge.classList.remove('red');
            charge.classList.remove('moitier');
            charge.classList.add('vert');
        }
        else if (pourcent <= valeur && valeur < rouge){
            charge.classList.remove('red');
            charge.classList.add('moitier');
        }
        else {
            charge.classList.remove('moitier');
            charge.classList.add('red');
        }

    }

})