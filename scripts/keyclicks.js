// Press 'd' to move right
document.addEventListener('keypress', (e) => {
    if(e.code === 'KeyD'){
        selected = (selected + 1) % 9
        decksArray.forEach((deck, index) => {
            if(selected === index){
                ctx.fillStyle = 'green';
            } else {
                ctx.fillStyle = 'red';
            }
            
            ctx.fillRect(deck.x, deck.y, 80, 120)
        })
    }
})


// Press 's' to bring up the higher/lower/even pop-up
let popUpDisplay = document.getElementById("popUp");
document.addEventListener('keydown', (e) => {
    ctx.font = '18px serif'
    ctx.fillStyle = 'black'
    if(e.code === 'KeyS'){
        // bring up the popup after pressing 's'
        const element = document.getElementById("popUp");
        element.classList.toggle("hidden");

        // create Higher button
        let higherButton = document.getElementById('higherButton')
        higherButton.onclick = function () {
            let selectedPile = decksArray[selected];
            // push next card in array to the selected deck
            selectedPile.cards.push(cardsArray[0]);
            cardsArray.shift();
            // move popup after click on an option
            setTimeout(() => element.classList.toggle("hidden"), 100);
            //add the next card in the deck to the selected pile
            let lastCard = selectedPile.cards[selectedPile.cards.length - 1];
            ctx.fillText(`${lastCard.name} : ${lastCard.suit}. Count: ${selectedPile.cards.length}`, selectedPile.x, selectedPile.y)
            
            // compare the new card to the previous card and return a message
            if (selectedPile.cards[selectedPile.cards.length - 1].value > selectedPile.cards[selectedPile.cards.length - 2].value) {
                console.log('you are right!');
                ctx.font = '36px serif'
                ctx.fillStyle = 'green'
                ctx.fillText('NICE!', 200, 50)
            } else if (selectedPile.cards[selectedPile.cards.length - 1].value < selectedPile.cards[selectedPile.cards.length - 2].value) {
                console.log('nope, it is lower!')
                ctx.font = '36px serif'
                ctx.fillStyle = 'red'
                ctx.fillText('Nooope', 200, 50)
            } else {
                console.log('nope, it is the same!')
                ctx.font = '36px serif'
                ctx.fillStyle = 'red'
                ctx.fillText('OMG it was the same!', 200, 50)
            }

        }

        // create Lower button
        let lowerButton = document.getElementById('lowerButton')
        lowerButton.onclick = function () {
            // push next card in array to the selected deck
            decksArray[selected].cards.push(cardsArray[0]);
            cardsArray.shift();
            setTimeout(() => element.classList.toggle("hidden"), 100)
        }

        // create Even button
        let evenButton = document.getElementById('evenButton')
        evenButton.onclick = function () {
            // push next card in array to the selected deck
            decksArray[selected].cards.push(cardsArray[0]);
            cardsArray.shift();
            setTimeout(() => element.classList.toggle("hidden"), 100)
    }
  }
});