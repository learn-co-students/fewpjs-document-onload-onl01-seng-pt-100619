// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    updateDOM()
  });

//   If you put the above code in index.js, 'The DOM has loaded' will not be logged immediately. 
//   In fact, you can confirm this yourself by putting a second console.log() outside of the event listener callback:



  function updateDOM() {
      document.getElementById( "text")
      .innerHTML = "This is really cool!";
  }