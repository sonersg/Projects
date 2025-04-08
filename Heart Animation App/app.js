
const openBtn = document.querySelector(".open-button");
const sect = document.querySelector(".sect");
const audio = document.querySelector(".audio");

openBtn.addEventListener('click', function(){
    sect.style.display = 'block';
    audio.innerHTML = `
    <audio loop autoplay>
            <source src="ayrılsak.mp3">
            Your browser doesn't support audio!
    </audio>
    `;
});

window.addEventListener('click', function(e){

    if(e.target === sect){
        sect.style.display = 'none';
        audio.innerHTML = ` `;
    }
})
