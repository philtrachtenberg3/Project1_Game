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
        this.ctx.fillText(`${lastCard.name} : ${lastCard.suit}. Count: ${deck.cards.length}`, deck.x, deck.y)
        // this.ctx.drawImage(this.lastCard.img, deck.x, deck.y);

        // console.log(lastCard.img)
    })
}

remainingCards() {
    const remainingCards = this.cardsArray.length;
    ctx.font = 'bold 16px sans-serif';
    ctx.fillStyle = 'black';
    this.ctx.fillText(`Remaining Cards: ${remainingCards}`, 700, 30);
}

reset() {
    let selected = -1;
    this.decksArray.forEach((deck, index) => {
    if(selected === index){
        this.ctx.fillStyle = 'green';
    } else{
        this.ctx.fillStyle = 'red';
    }
    
    this.ctx.fillRect(deck.x, deck.y, 80, 120)
}) 
}

start = () => {
    this.reset();
    this.shuffleDeck();
    this.returnFirst9Cards();
    this.printCards();
    this.remainingCards();
    console.log(this.cardsArray);
    console.log(this.decksArray);
}



}