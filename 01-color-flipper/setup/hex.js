const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const btn_stop = document.getElementById("btn-stop");
const color = document.querySelector(".color");

btn.addEventListener("click", function createHexCode() {
    var hexCode = "#";
    var flag=true;
    for(let i=0;i<6;i++) {
        hexCode += hex[getRandomNumber()];
    }
    console.log(hexCode);
    color.textContent = hexCode;
    document.body.style.backgroundColor = hexCode;  
});
btn_stop.addEventListener("click", function() {
    flag=false;
});
if(flag==true)
    setInterval(function(){createHexCode();}, 3000);

function getRandomNumber() {
    let currColorIdx = Math.floor(Math.random() * hex.length);
    return currColorIdx; 
}