Array.from(document.querySelectorAll(".letter")).forEach(el => {
   el.innerText = randomLetter();
});

function randomLetter(){
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}


function mode(){
    var element = document.body;
    element.classList.toggle('darkMode');
}
//The increment and loop is achieved using ++c % tot
// The angryCat boolean flag helps to know it the auto()
// already started (mouse was there!),
// in that case it will return;
// (exit) the function preventing the creation
// of additional overlapping intervals on subsequent
// mouseenter (which was your main issue).
//document.getElementById("myimage").addEventListener("mouseenter", auto, false);


// let order = document.querySelectorAll('.poke');
// let button = document.querySelectorAll('.poke')
// order.forEach(function (){
//    this.hover(function (){
//       this.closest('.poke').toggle();
//    });
// });

window.addEventListener('scroll', function(e) {

    const target = document.querySelectorAll('.scroll');


    var index = 0, length = target.length;
    for (index; index < length; index++) {
        var pos = window.pageYOffset * target[index].dataset.rate;

        if(target[index].dataset.direction === 'vertical') {
            target[index].style.transform = 'translate3d(0px,'+pos+'px, 0px)';
        } else {
            var posX = window.pageYOffset * target[index].dataset.ratex;
            var posY = window.pageYOffset * target[index].dataset.ratey;

            target[index].style.transform = 'translate3d('+posX+'px, '+posY+'px, 0px)';
        }
    }


});
