class Game {
    constructor(cardsArray, decksArray, ctx) {
        this.cardsArray = cardsArray;
        this.decksArray = decksArray;
        this.ctx = ctx;
    }

    shuffleDeck() {
    let deck = this.cardsArray;
    for (let i = 0 ; i < this.cardsArray.length ; i++) {
        let tempCard = this.cardsArray[i];
        let randomIndex = Math.floor(Math.random() * 52);
        deck[i] = deck[randomIndex];
        deck[randomIndex] = tempCard;
    }
    this.cardsArray = deck;
}

returnFirst9Cards = () => {
    for (let i = 0 ; i < 9 ; i++) {
        this.decksArray[i].cards.push(this.cardsArray[i])
    }
    this.cardsArray.splice(0, 9)
}

printCards = () => {
    this.ctx.font = '18px serif'
    this.ctx.fillStyle = 'black'
    this.decksArray.forEach((deck) => {     
        let lastCard = deck.cards[deck.cards.length-1]   
        console.log(deck)
        this.ctx.fillText(`${lastCard.name} : ${lastCard.suit}. Count: ${deck.cards.length}`, deck.x, deck.y)
    })
}

remainingCards() {
    const remainingCards = this.cardsArray.length;
    ctx.font = 'bold 16px sans-serif';
    ctx.fillStyle = 'black';
    this.ctx.fillText(`Remaining Cards: ${remainingCards}`, 700, 30);
}

/* turnOffPopUp() {
    let popUpDisplay = document.getElementById("popUp");
    popUpDisplay.classList.remove("popUp");
} */

start = () => {
    this.shuffleDeck();
    this.returnFirst9Cards();
    this.printCards();
    this.remainingCards();
    // this.turnOffPopUp()
    console.log(this.cardsArray);
    console.log(this.decksArray);
}



displayNextCard() {
    let selected = -1;
    decksArray.forEach((deck, index) => {
    if(selected === index){
        ctx.fillStyle = 'green';
    } else{
        ctx.fillStyle = 'red';
    }
    
    ctx.fillRect(deck.x, deck.y, 80, 120)
}) 
}



}