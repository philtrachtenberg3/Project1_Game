class Game {
  constructor(cardsArray, decksArray, ctx) {
    this.cardsArray = cardsArray;
    this.decksArray = decksArray;
    this.ctx = ctx;
    this.isRunning = false;
  }

  shuffleDeck() {
    let deck = this.cardsArray;
    for (let i = 0; i < this.cardsArray.length; i++) {
      let tempCard = this.cardsArray[i];
      let randomIndex = Math.floor(Math.random() * 52);
      deck[i] = deck[randomIndex];
      deck[randomIndex] = tempCard;
    }
    this.cardsArray = deck;
  }

  returnFirst9Cards = () => {
    for (let i = 0; i < 9; i++) {
      this.decksArray[i].cards.push(this.cardsArray[i]);
    }
    this.cardsArray.splice(0, 9);
  };

  printCards = () => {
    //this.ctx.font = '18px serif'
    //this.ctx.fillStyle = 'black'
    this.decksArray.forEach((deck)  => {
      let lastCard = deck.cards[deck.cards.length - 1];
      
    const img = new Image();
    img.src = lastCard.img
    
    img.onload = () => {
        this.ctx.drawImage(img, deck.x, deck.y, 80, 120);
     }; 
    });
  };
  
  remainingCards() {
    const remainingCards = this.cardsArray.length;
    ctx.font = "bold 16px sans-serif";
    ctx.fillStyle = "black";
    this.ctx.clearRect(0, 0, 900, 100);
    this.ctx.fillText(`Remaining Cards: ${remainingCards}`, 700, 30);
  }

  reset = () => {
    this.ctx.clearRect(0, 0, 900, 600);

    this.cardsArray = [...originalCards];
    this.decksArray = [...originalDecks];
    console.log(this.decksArray);

    let selected = -1;
    this.decksArray.forEach((deck, index) => {
    if(selected === index){
        this.ctx.fillStyle = 'green';
    } else{
        this.ctx.fillStyle = 'red';
    }
    
    this.ctx.fillRect(deck.x, deck.y, 80, 120)

}) 

this.start();

} 

  start = () => {
    this.shuffleDeck();
    this.returnFirst9Cards();
    this.printCards();
    this.remainingCards();
    console.log(this.cardsArray);
    console.log(this.decksArray);
  };

  winCheck() {
    if (cardsArray.length === 0) {
        this.ctx.clearRect(0, 0, 900, 600);
        this.ctx.fillStyle = 'green';
        ctx.font = "bold 42px sans-serif";
        this.ctx.fillText(`YOU WIN!!!`, 350, 80);
    }
}

lossCheck() {
  if (lossTracker === 0) {
        this.ctx.clearRect(0, 0, 900, 600);
        this.ctx.fillStyle = 'red';
        ctx.font = "bold 42px sans-serif";
        this.ctx.fillText(`YOU LOSE MOTHERFUCKER!!!`, 150, 80);
  }
}

winOrLose = () => {
    this.winCheck();
    this.lossCheck();
}

}
