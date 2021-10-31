/*
//using three event listeners
const btn_decrease = document.querySelector(".decrease");
const btn_increase= document.querySelector(".increase");
const btn_reset = document.querySelector(".reset");
const currValue = document.querySelector("#value");

btn_decrease.addEventListener("click", function() {
    console.log(currValue);
    currValue.textContent = parseInt(currValue.textContent) - 1;
});

btn_increase.addEventListener("click", function() {
    console.log(currValue);
    currValue.textContent = parseInt(currValue.textContent) + 1;
});

btn_reset.addEventListener("click", function() {
    console.log(currValue);
    currValue.textContent = 0;
});*/


//using for each loop instead of three event listener
let value = 0;
const btn = document.querySelectorAll(".btn");
const currValue = document.querySelector("#value");

btn.forEach(function(items) {
    items.addEventListener("click", function(e) {
        //This style variable will return list of all classes present in current button
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease"))
            value -= 1;
        else if(styles.contains("increase"))
            value +=  1;
        else if(styles.contains("reset"))
            value = 0;
        currValue.textContent = value;
    })
})