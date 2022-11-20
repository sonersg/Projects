
const name = prompt("İsminiz?");

const myName = document.querySelector("#myName");

myName.innerHTML = name;

const myClock = document.getElementById("myClock");
const myDate = document.getElementById("myDate");

update();
setInterval(update, 1000);

function update(){

    let date = new Date();
    
    myClock.innerHTML = formatTime(date);
    myDate.innerHTML = date;

    function formatTime(date){
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let amOrPm = hours >= 12 ? "pm" : "am";

        hours = (hours % 12) || 12;

        hours = formatZeroes(hours);
        minutes = formatZeroes(minutes);
        seconds = formatZeroes(seconds);

        return hours+":"+minutes+":"+seconds+" "+amOrPm;
        //return '${hours}:${minutes}:${seconds} ${amOrPm}';
    }
    function formatZeroes(time){
        time = time.toString();
        return time.length < 2 ? "0"+time : time;
    }
}
