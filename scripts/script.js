const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// create the position for all piles of cards

// let game = new Game(cardsArray, decksArray, ctx)

// start game
const startBtn = document.getElementById('start');
startBtn.addEventListener('click', () => {
      game = new Game(cardsArray, decksArray, ctx);
      game.start();
    });

// ability to select each pile of cards
let selected = -1;
decksArray.forEach((deck, index) => {
    if(selected === index){
        ctx.fillStyle = 'green';
    } else{
        ctx.fillStyle = 'red';
    }
    
    ctx.fillRect(deck.x, deck.y, 80, 120)
}) 
