document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('mysterybutton');
    
    const audio = new Audio("../mp3/dry-fart.mp3")
    
    button.addEventListener('click', function() {
      audio.play();
      confirm(`💨 ... Mais t'as pété ? 👀`);
    });

    // This code adds a click event on maximize button that plays Never Gonna Give You Up
    // Problem is, you can't turn it off lol.
    //  const button2 = document.querySelector('.maximize');
    //  const audio2 = new Audio("../mp3/never-gonna-give-you-up.m4a")
    
/*   button2.addEventListener('click', function() {
        audio2.play();
    }); */
});