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
        console.log(selected);
    }
})


// Press 's' to bring up the higher/lower/even pop-up
let popUpDisplay = document.getElementById("popUp");
document.addEventListener('keydown', (e) => {
    if(e.code === 'KeyS'){
        // bring up the popup after pressing 's'
        const element = document.getElementById("popUp");
        element.classList.toggle("hidden");
        
        // create text for the popup
        let popUpText = document.createElement('p');
        popUpText.innerHTML = 'How will the next number compare?';
        popUpDisplay.appendChild(popUpText);

        // create Higher button
        let higherButton = document.createElement('button')
        higherButton.innerHTML = 'Higher';
        popUpDisplay.appendChild(higherButton);
        higherButton.className = "higherButton";
        console.log(higherButton);
        higherButton.onclick = function () {
            console.log('higher button clicked')
        }

        // create Lower button
        let lowerButton = document.createElement('button')
        lowerButton.innerHTML = 'Lower';
        popUpDisplay.appendChild(lowerButton);
        lowerButton.className = "lowerButton";
        lowerButton.onclick = function () {
            console.log('lower button clicked')
        }

        // create Even button
        let evenButton = document.createElement('button')
        evenButton.innerHTML = 'Even';
        popUpDisplay.appendChild(evenButton);
        evenButton.className = "evenButton";
        evenButton.onclick = function () {
            console.log('even button clicked')
        }
    }
})


// TEST: press 'w' to display next card onto a pile
document.addEventListener('keypress', (e) => {
    if(e.code === 'KeyW'){
        decksArray[selected].cards.push(cardsArray[0]);
        cardsArray.shift();
        console.log(cardsArray)
        console.log(decksArray)

        
        
    }
})