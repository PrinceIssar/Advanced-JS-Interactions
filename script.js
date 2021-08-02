Array.from(document.querySelectorAll(".letter")).forEach(el => {
   el.innerText = randomLetter();
});

function randomLetter(){
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}

var content = document.querySelectorAll('.image');
const button = document.querySelectorAll('.mode');

button.onClick = function (){
    if (content.)
}



// getComputedStyle()
// getPropertyValue
