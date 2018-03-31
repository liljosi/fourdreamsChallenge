$(document).ready(function(){
    $(window).scroll(function() { // check if scroll event happened
      if ($(document).scrollTop() > 800) { // check if user scrolled more than 800 from top of the browser window
        $(".fixed-top").css("background-color", "black"); // if yes, then change the color of class "fixed-top" to black 
      } else {
        $(".fixed-top").css("background-color", "transparent"); // if not, change it back to transparent
      }
    });
  });
  