Array.from(document.querySelectorAll(".letter")).forEach(el => {
   el.innerText = randomLetter();
});

function randomLetter(){
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random() * alphabet.length)]

}


// crazy text
function changeText(obj, text){
    obj.innerText = text;
}



// Dark Mode
function mode(){
    var element = document.body;
    element.classList.toggle('darkMode');
}


// Hover text
function show(Id) {
    if (event.type === 'mouseover'){
        document.getElementById(Id).style.display="block";
    }if (event.type === 'mouseout'){
        document.getElementById(Id).style.display="inline";
    }
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

// Parallax Carousel
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

// Collage
const images = document.querySelectorAll(".images img");
const modal  = document.querySelector(".modal");
const modalImg  = document.querySelector(".modalImg");
const modalTxt = document.querySelector(".modalTxt");
const close = document.querySelector(".close");


images.forEach(images =>{
   images.addEventListener("click", ()=>{
     modalImg.src = images.src;
     modalTxt.innerHTML = images.alt;
      modal.classList.add("appear");

      close.addEventListener("click",()=>{
          modal.classList.remove("appear");
      });
   });
});

// Chaser

let chaser = document.querySelector('.chaser');
let chaserBox = document.getElementById('chaserBox');

chaserBox.addEventListener('mouseover', startChase);
chaserBox.addEventListener('mousemove', Chase);
chaserBox.addEventListener('mouseout', stopChase);

function startChase(){
    chaser.style.display = 'block';
}
function Chase(e){
    chaser.style.position = 'fixed';
    chaser.style.left = e.clientX + 'px';
    chaser.style.top = e.clientY + 'px';
}

function stopChase(){
    chaser.style.display = 'none'
}
// Runner

// const evilButton =  document.querySelector('.runner')
// const OFFSET =100;
//
// evilButton.addEventListener('click', ()=>{
//    alert('nice')
// });
//
// document.addEventListener('mouseover', (e)=>{
//     const x = e.pageX;
//     const y = e.pageY;
//     const buttonBox = evilButton.getBoundingClientRect();
// const horizontalDistanceFrom = distanceFromCenter(buttonBox.x, x, buttonBox.width);
// const verticalDistanceFrom = distanceFromCenter(buttonBox.y, y, buttonBox.height);
// const horizontalOffset = buttonBox.width / 2 + OFFSET
// const verticalOffset = buttonBox.height / 2 + OFFSET
//
//     if (Math.abs(horizontalDistanceFrom)<= horizontalOffset &&  Math.abs(verticalDistanceFrom)<= verticalOffset){
//         setButtonPosition(
//             buttonBox.x + horizontalOffset / horizontalDistanceFrom * 10,
//             buttonBox.y + verticalOffset / verticalDistanceFrom * 10,
//         )
//     }
// })
//
// function setButtonPosition(left,top){
//     const windowBox =  document.body.getBoundingClientRect()
//     const buttonBox =  evilButton.getBoundingClientRect()
//
//     if (distanceFromCenter(left, windowBox.left, buttonBox.width) < 0){
//         left = windowBox.right - buttonBox.width - OFFSET
//     }if (distanceFromCenter(left, windowBox.right, buttonBox.width) > 0){
//         left = windowBox.left + OFFSET
//     }if (distanceFromCenter(top, windowBox.top, buttonBox.height) < 0){
//         top = windowBox.bottom - buttonBox.height - OFFSET
//     }if (distanceFromCenter(top, windowBox.bottom, buttonBox.height) > 0){
//         top = windowBox.top + OFFSET
//     }
//
//
//     evilButton.style.left = `${left}px`
//     evilButton.style.top= `${top}px`
//
// }
// function distanceFromCenter(boxPosition, mousePosition, boxSize){
//     return boxPosition - mousePosition + boxSize / 2
// }




















