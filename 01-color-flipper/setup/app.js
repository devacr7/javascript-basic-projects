const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
var prevColorIdx = 0;

btn.addEventListener("click", function(prevColorIdx) {
    prevColorIdx = colors.indexOf(document.body.style.backgroundColor);
    console.log(prevColorIdx);
    const randomNumber = getRandomNumber();
    color.textContent = colors[randomNumber];
    document.body.style.backgroundColor = colors[randomNumber];
});

function getRandomNumber(prevColorIdx) {
    let currColorIdx = Math.floor((Math.random() * 10) % colors.length);
    if(currColorIdx == prevColorIdx)
        getRandomNumber(prevColorIdx);
    else 
        return currColorIdx; 
}
