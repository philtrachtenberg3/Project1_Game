const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// create the position for all piles of cards

let game;

// start game
const startBtn = document.getElementById('start');
window.onload = (() => {
    startBtn.addEventListener('click', () => {
          if(!game) {
              game = new Game(cardsArray, decksArray, ctx);
              game.start();
          } else {
            game.reset();
          }
        });
})

// ability to select each pile of cards
let selected = -1;
decksArray.forEach((deck, index) => {
    if(selected === index){
        ctx.strokeStyle = 'green';
    } else{
        ctx.strokeStyle = 'red';
    }
    
    ctx.strokeRect(deck.x, deck.y, 90, 130)
}) 

// console.log(typeof cardsArray[1].img);
// ctx.drawImage(cardsArray[1].img, 50, 50);
