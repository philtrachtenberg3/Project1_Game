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


document.addEventListener('keypress', (e) => {
    if(e.code === 'KeyD'){
        selected = (selected + 1) % 9
        decksArray.forEach((deck, index) => {
            if(selected === index){
                ctx.fillStyle = 'green';
            } else{
                ctx.fillStyle = 'red';
            }
            
            ctx.fillRect(deck.x, deck.y, 80, 120)
        })
        console.log(selected);
    }
})

// IN PROGRESS: Start w/ HigherLowerSelector off

let HigherLowerSelectorDisplay = document.querySelector("#higherLowerSelector");
/* console.log(HigherLowerSelectorDisplay);
HigherLowerSelectorDisplay.classList.remove("higherLowerSelector"); */


// bring popup on key S for user to select higher, lower, even
function bringHigherLowerSelector() {
    
    // Declare variables to target each part of the pop-up
    let textSelector = document.querySelector("#higherLowerSelector p")
    let higherSelector = document.querySelector("#higherButton")
    let lowerSelector = document.querySelector("#lowerButton")
    let evenSelector = document.querySelector("#evenButton")

    // Bring text into popup
    textSelector.innerHTML = "How will the next number compare?";
    higherSelector.innerHTML = "Higher";
    lowerSelector.innerHTML = "Lower";
    evenSelector.innerHTML = "Even";
}


document.addEventListener('keydown', (e) => {
    if(e.code === 'KeyS'){
        bringHigherLowerSelector();
    }
})
