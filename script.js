let stars = document.getElementById('stars')
let moon = document.getElementById('moon')
let mountains3 = document.getElementById('mountains3')
let mountains4 = document.getElementById('mountains4')
let boat = document.getElementById('boat')
let txt= document.querySelector('.txt')

window.onscroll= function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value *2 + 'px';
    mountains3.style.top = value *0.8 + 'px';
    boat.style.top = value *0.5 + 'px';
    boat.style.left = value *2 + 'px';
    txt.style.fontSize = value+ 'px';
    if(scrollY>=130){
        txt.style.fontSize = 100 +'px'
        txt.style.position =    'fixed'
        
       

    }

    





}




