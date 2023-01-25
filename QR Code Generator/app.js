


const url = document.querySelector(".url");
const qrContainer = document.querySelector("#qr-code-container");
const btn = document.querySelector(".btn");

btn.addEventListener("click", ()=>{
    let text = url.value
    // console.log(text)
    clearContainer()
    generateQR(text)
})

function generateQR(url){
    new QRCode(document.getElementById("qr-code-container"), url);
    // var qrcode = new QRCode("qr-code-container", {
    //     text: url,
    //     colorDark : "#000000",
    //     // colorLight : "#ffffff",
    //     correctLevel : QRCode.CorrectLevel.H
    // });
}
function clearContainer(){
    qrContainer.innerHTML = "";
}