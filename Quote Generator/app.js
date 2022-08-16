
const quote = document.querySelector('.quote');
const person = document.querySelector('.person');
const btn = document.querySelector('.new-quote-btn');


// Quotes

const quotes = [
    {
        quote: "“A wise man can play the part of a clown but a clown can not play the part of a wise man!”",
        person: "Malcolm X"
    },
    {
        quote: "“If you really want somethings,you had better make some noise!”",
        person: "Malcolm X"
    },
    {
        quote: "“It is not a lack of love, but a lack of friendship that makes unhappy marriages.”",
        person: "Friedrich Nietzsche"
    },
    {
        quote: "It is better to be oppressed than being an oppressor!",
        person: "Sokrates"
    },
    {
        quote: "The only creature can think is human but this does not mean every human can think!",
        person: "Sigmund Freud"
    },
    {
        quote: "“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”",
        person: "Einstein"
    },
    {
        quote: "Capitalists left nothing to poors except God!",
        person: "Friedrich Nietzsche"
    },
    {
        quote: "No need to envy! Everyone lives in the same shabby world!",
        person: "Soner"
    },
    {
        quote: "Honesty and loyalty. \nTwo pillars of perfect relationship. \nThere's no perfect relationship: p",
        person: "Soner"
    },
    {
        quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        person: "Einstein"
    },
    {
        quote: "“Biz yenilirsek kalkar tekrar deneriz ama diktatörler yenilirse sonları olur!”",
        person: "Fidel Castro"
    },
    {
        quote: "“Be yourself; everyone else is already taken.”",
        person: "Oscar Wilde"
    }
];

btn.addEventListener('click', function(){

    let randNum = Math.floor(Math.random()*quotes.length);

    quote.innerText = quotes[randNum].quote;
    person.innerText = quotes[randNum].person;
});

