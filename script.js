Array.from(document.querySelectorAll(".letter")).forEach(el => {
   el.innerText = randomLetter();
});

function randomLetter(){
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}

const box = document.querySelectorAll('.lightMode');
const  boxStyles = getComputedStyle(box);
const boxMainColor = boxStyles.getPropertyValue('color');
console.log(boxMainColor);
