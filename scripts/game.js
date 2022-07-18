
class Game {
    constructor(cardsArray, decksArray, ctx) {
        this.cardsArray = cardsArray;
        this.decksArray = decksArray;
        this.ctx = ctx;
    }


shuffleDeck() {
    let deck = this.cardsArray;
    for (let i = 0 ; i < this.cardsArray.length - 1 ; i++) {
        let tempCard = this.cardsArray[i];
        let randomIndex = Math.floor(Math.random() * 52) + 1;
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
        this.ctx.fillText(`${lastCard.name} : ${lastCard.suit}`, deck.x, deck.y)
        
    })
}

start = () => {
    this.shuffleDeck();
    this.returnFirst9Cards();
    this.printCards();
    console.log(this.cardsArray);
    console.log(this.decksArray);
}

}