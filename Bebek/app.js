
const openBtn = document.querySelector(".open-button");
const sect = document.querySelector(".sect");

openBtn.addEventListener('click', function(){
    sect.style.display = 'block';
});

window.addEventListener('click', function(e){

    if(e.target === sect){
        sect.style.display = 'none';
    }
})