
// local memes
const memes = [
    {
        img: "./images/1.png",
        info: "#1:"
    },
    {
        img: "./images/2.png",
        info: "#2:"
    },
    {
        img: "./images/3.png",
        info: "#3:"
    },
    {
        img: "./images/4.png",
        info: "#4:"
    },
    {
        img: "./images/5.png",
        info: "#5:"
    },
    {
        img: "./images/6.png",
        info: "#6:"
    },
    {
        img: "./images/7.png",
        info: "#7:"
    },
    {
        img: "./images/8.png",
        info: "#8:"
    },
    {
        img: "./images/9.png",
        info: "#9:"
    },
    {
        img: "./images/10.png",
        info: "#10:"
    },
    {
        img: "./images/11.png",
        info: "#11:"
    },
    {
        img: "./images/12.png",
        info: "#12:"
    },
    {
        img: "./images/13.png",
        info: "#13:"
    },
    {
        img: "./images/14.png",
        info: "#14:"
    },
    {
        img: "./images/15.png",
        info: "#15:"
    },
    {
        img: "./images/16.png",
        info: "#16:"
    },
    {
        img: "./images/17.png",
        info: "#17:"
    },
    {
        img: "./images/18.png",
        info: "#18:"
    },
    {
        img: "./images/19.png",
        info: "#19:"
    },
    {
        img: "./images/20.png",
        info: "#20:"
    },
    {
        img: "./images/21.png",
        info: "#21:"
    },
    {
        img: "./images/22.png",
        info: "#22:"
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
