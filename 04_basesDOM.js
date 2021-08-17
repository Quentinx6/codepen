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
    let limcss = document.getElementById('lim');
    let charge = document.getElementById('file');
    let chargement = document.getElementById('prog');
    let pourcent = limit /2 ;
    let rouge = 0.8 * limit;
    let css = document.getElementById('textcss');
    let i = '<i></i>';
    let g = '<b></b>';
    //Limite afficher au chargement
    max.innerHTML= valeur + `/${limit}`;
    limcss.innerHTML = valeur + `/${limit}`;
    //Image en hidden au chargement
    image.style.visibility="hidden";
    text.addEventListener('keyup', function(){
        limite();
    })
    ib.addEventListener('click', function(){
        text.value += i;
    })
    gb.addEventListener('click', function(){
        text.value += g;
    })
    //contour + image de chargement
        css.onfocus = function(){
            image.style.visibility="visible";
            css.classList.add('contour');
        }
        css.onblur = function(){
            image.style.visibility="hidden";
            css.classList.remove('contour');
        }
        text.onfocus = function(){
            image.style.visibility="visible";
            text.classList.add('contour');
        }
        text.onblur = function(){
            image.style.visibility="hidden";
            text.classList.remove('contour');
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
    css.addEventListener('keyup', function(){
        limitecss();
    })
    function limitecss(){
        css.value = css.value.substring(0,limit);
        area.innerHTML = css.value;
        valeur = area.textContent.length;
        limcss.innerHTML = valeur + `/${limit}`;
        chargement.setAttribute('value', `${valeur}`)
        chargement.setAttribute('max', `${limit}`)
        if (valeur < pourcent){
            chargement.classList.remove('red');
            chargement.classList.remove('moitier');
            chargement.classList.add('vert');
        }
        else if (pourcent <= valeur && valeur < rouge){
            chargement.classList.remove('red');
            chargement.classList.add('moitier');
        }
        else {
            chargement.classList.remove('moitier');
            chargement.classList.add('red');
        }
    }

})