
// local memes
const memes = [
    {
        img: "./images/1.jpg",
        info: "#1:"
    },
    {
        img: "./images/2.jpg",
        info: "#2:"
    },
    {
        img: "./images/3.jpg",
        info: "#3:"
    },
    {
        img: "./images/4.jpeg",
        info: "#4:"
    },
    {
        img: "./images/5.jpg",
        info: "#5:"
    },
    {
        img: "./images/6.jpg",
        info: "#6:"
    },
    {
        img: "./images/7.jpeg",
        info: "#7:"
    },
    {
        img: "./images/8.jpeg",
        info: "#8:"
    },
    {
        img: "./images/9.jpeg",
        info: "#9:"
    },
    {
        img: "./images/10.jpeg",
        info: "#10:"
    },
    {
        img: "./images/11.jpg",
        info: "#11:"
    },
    {
        img: "./images/12.jpg",
        info: "#12:"
    },
    {
        img: "./images/13.png",
        info: "#13:"
    }
];

const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const randomBtn = document.querySelector(".random-btn");
const img = document.querySelector(".img");
const info = document.querySelector(".info");

let currentItem = 0;

//change meme function
function changeMeme(x) {
    const item = memes[x];
    img.src = item.img;
    info.textContent = item.info;
}

//show next meme
nextBtn.addEventListener("click", function(){
    currentItem++;
    if(currentItem > memes.length-1){currentItem=0;}
    changeMeme(currentItem);
});
  
//show previous meme
prevBtn.addEventListener("click", function(){
    currentItem--;
    if(currentItem < 0){currentItem=memes.length-1;}
    changeMeme(currentItem);
});

// show random meme
randomBtn.addEventListener("click", function(){
    currentItem = Math.floor(Math.random()*memes.length);
    changeMeme(currentItem);
});
