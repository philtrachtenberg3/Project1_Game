let selectedPileIndicator;
let lossTracker = 9;

// Press 'd' to move right
document.addEventListener('keypress', (e) => {
    if(e.code === 'KeyD'){
        selected = (selected + 1) % 9
        decksArray.forEach((deck, index) => {
            if(selected === index){
                ctx.lineWidth = 3;
                ctx.strokeStyle = 'green';
            } else {
                ctx.strokeStyle = '#000';
                ctx.setLineDash([]);
                ctx.lineWidth = 0;
                ctx.strokeStyle = 'red';
            }
            ctx.strokeRect(deck.x, deck.y, 90, 130)
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
            game.remainingCards();
            // remove popup after click on an option
            setTimeout(() => element.classList.toggle("hidden"), 100);
            //add the next card in the deck to the selected pile
            let lastCard = selectedPile.cards[selectedPile.cards.length - 1];
            const img = new Image();
            img.src = lastCard.img
            img.onload = () => {
                ctx.drawImage(img, (selectedPile.x + 2), selectedPile.y, 80, 120);
            }; 
            
            // compare the new card to the previous card and return a message
            if (selectedPile.cards[selectedPile.cards.length - 1].value > selectedPile.cards[selectedPile.cards.length - 2].value) {
                //return "positive" message
                console.log('you are right!');
                ctx.font = '36px serif'
                ctx.fillStyle = 'white'
                ctx.fillRect(200,20,200,50)
                ctx.fillStyle = 'green'
                ctx.fillText('NICE!', 200, 50)
            } else if (selectedPile.cards[selectedPile.cards.length - 1].value < selectedPile.cards[selectedPile.cards.length - 2].value) {
                //return "negative" message
                ctx.clearRect((selectedPile.x + 2), selectedPile.y, 80, 120)
                ctx.font = '36px serif'
                ctx.fillStyle = 'white'
                ctx.fillRect(200,20,200,50)
                ctx.fillStyle = 'red'
                ctx.fillText('Nooope', 200, 50)

                selectedPileIndicator = -1;
                lossTracker -= 1;

                // remove pile
                setTimeout(() => {
                const imgBackOfCard = new Image();
                imgBackOfCard.src = "./docs/assets/images/backOfCard_blue.png"
                    imgBackOfCard.onload = () => {
                    ctx.drawImage(imgBackOfCard, (selectedPile.x + 2), selectedPile.y, 80, 120);

                } }, 1000);
                
            } else {
                decksArray.slice(selectedPile, 1);
                ctx.clearRect((selectedPile.x + 2), selectedPile.y, 80, 120);
                //return "negative" message
                console.log('nope, it is the same!')
                ctx.font = '36px serif'
                ctx.fillStyle = 'white'
                ctx.fillRect(200,20,200,50)
                ctx.fillStyle = 'red'
                ctx.fillText('OMG it was the same!', 200, 50)

                selectedPileIndicator = -1;
                lossTracker -= 1;

                // remove pile
                setTimeout(() => {
                    const imgBackOfCard = new Image();
                    imgBackOfCard.src = "./docs/assets/images/backOfCard_blue.png"
                        imgBackOfCard.onload = () => {
                        ctx.drawImage(imgBackOfCard, (selectedPile.x + 2), selectedPile.y, 80, 120);
    
                    } }, 1000);
            }

            console.log(`the original value is: ${selectedPile.cards[selectedPile.cards.length - 2].value}`);
            console.log(`the new value is: ${selectedPile.cards[selectedPile.cards.length - 1].value}`);
            game.winOrLose();
        }

        // create Lower button
        let lowerButton = document.getElementById('lowerButton')
        lowerButton.onclick = function () {
            let selectedPile = decksArray[selected];
            // push next card in array to the selected deck
            selectedPile.cards.push(cardsArray[0]);
            cardsArray.shift();
            game.remainingCards();
            // move popup after click on an option
            setTimeout(() => element.classList.toggle("hidden"), 100);
            //add the next card in the deck to the selected pile
            let lastCard = selectedPile.cards[selectedPile.cards.length - 1];
            const img = new Image();
            img.src = lastCard.img
            img.onload = () => {
                ctx.drawImage(img, (selectedPile.x + 2), selectedPile.y, 80, 120);
            }; 
            
            // compare the new card to the previous card and return a message
            if (selectedPile.cards[selectedPile.cards.length - 1].value < selectedPile.cards[selectedPile.cards.length - 2].value) {
                // return "positive" message
                console.log('you are right!');
                ctx.font = '36px serif'
                ctx.fillStyle = 'white'
                ctx.fillRect(200,20,200,50)
                ctx.fillStyle = 'green'
                ctx.fillText('NICE!', 200, 50)
            } else if (selectedPile.cards[selectedPile.cards.length - 1].value > selectedPile.cards[selectedPile.cards.length - 2].value) {
                // return "negative" message
                console.log('nope, it is higher!')
                ctx.font = '36px serif'
                ctx.fillStyle = 'white'
                ctx.fillRect(200,20,200,50)
                ctx.fillStyle = 'red'
                ctx.fillText('Nooope', 200, 50)

                selectedPileIndicator = -1;
                lossTracker -= 1;

                // remove pile
                setTimeout(() => {
                    const imgBackOfCard = new Image();
                    imgBackOfCard.src = "./docs/assets/images/backOfCard_blue.png"
                        imgBackOfCard.onload = () => {
                        ctx.drawImage(imgBackOfCard, (selectedPile.x + 2), selectedPile.y, 80, 120);
    
                    } }, 1000);
            } else {
                // return "negative" message
                
                console.log('nope, it is the same!')
                ctx.font = '36px serif'
                ctx.fillStyle = 'white'
                ctx.fillRect(200,20,200,50)
                ctx.fillStyle = 'red'
                ctx.fillText('OMG it was the same!', 200, 50)

                selectedPileIndicator = -1;
                lossTracker -= 1;

                // remove pile
                setTimeout(() => {
                    const imgBackOfCard = new Image();
                    imgBackOfCard.src = "./docs/assets/images/backOfCard_blue.png"
                        imgBackOfCard.onload = () => {
                        ctx.drawImage(imgBackOfCard, (selectedPile.x + 2), selectedPile.y, 80, 120);
    
                    } }, 1000);
            }

            console.log(`the original value is: ${selectedPile.cards[selectedPile.cards.length - 2].value}`);
            console.log(`the new value is: ${selectedPile.cards[selectedPile.cards.length - 1].value}`);
            game.winOrLose();
        }


        // create Even button
        let evenButton = document.getElementById('evenButton')
        evenButton.onclick = function () {
            let selectedPile = decksArray[selected];
            // push next card in array to the selected deck
            selectedPile.cards.push(cardsArray[0]);
            cardsArray.shift();
            game.remainingCards();
            // move popup after click on an option
            setTimeout(() => element.classList.toggle("hidden"), 100);
            //add the next card in the deck to the selected pile
            let lastCard = selectedPile.cards[selectedPile.cards.length - 1];
            const img = new Image();
            img.src = lastCard.img
            img.onload = () => {
                ctx.drawImage(img, (selectedPile.x + 2), selectedPile.y, 80, 120);
            }; 
            
            // compare the new card to the previous card and return a message
            if (selectedPile.cards[selectedPile.cards.length - 1].value === selectedPile.cards[selectedPile.cards.length - 2].value) {
                // return "positive" message
                console.log('you are right!');
                ctx.font = '36px serif'
                ctx.fillStyle = 'white'
                ctx.fillRect(200,20,200,50)
                ctx.fillStyle = 'green'
                ctx.fillText('Are you serious?!', 200, 50)
            } else {
                // return "negative" message
                ctx.font = '36px serif'
                ctx.fillStyle = 'white'
                ctx.fillRect(200,20,200,50)
                ctx.fillStyle = 'red'
                ctx.fillText("lol nope, it's not the same", 200, 50)

                selectedPileIndicator = -1;
                lossTracker -= 1;

                // remove pile
                setTimeout(() => {
                    const imgBackOfCard = new Image();
                    imgBackOfCard.src = "./docs/assets/images/backOfCard_blue.png"
                        imgBackOfCard.onload = () => {
                        ctx.drawImage(imgBackOfCard, (selectedPile.x + 2), selectedPile.y, 80, 120);
    
                    } }, 1000);
            }
            console.log(`the original value is: ${selectedPile.cards[selectedPile.cards.length - 2].value}`);
            console.log(`the new value is: ${selectedPile.cards[selectedPile.cards.length - 1].value}`);
            game.winOrLose();
        }        

  }

});