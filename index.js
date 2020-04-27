// Your code goes here

document.addEventListener("DOMContentLoaded", function() {
    let text = document.getElementById("text");
    text.innerHTML = "This is really cool!"
  });

  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );

  // add a callback when the dom content is loaded by using the DOMContentLoaded even listener, using a multiple line function as the second parameter