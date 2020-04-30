// Your code goes here
const textId = document.getElementById("text")


function changeText(){
    return textId.textContent = "This is really cool!"
}

// debugger


document.addEventListener("DOMContentLoaded", function(){
        console.log("The DOM has loaded");
        changeText()
    });
    

console.log("This console.log() fires when index.js loads - before DOMContentLoaded is triggered ")
