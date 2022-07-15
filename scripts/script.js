const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const cardArray = [
    {name: "2", value: 2, suit: "Hearts", img: ""},
    {name: "2", value: 2, suit: "Diamonds", img: ""},
    {name: "2", value: 2, suit: "Clubs", img: ""},
    {name: "2", value: 2, suit: "Spades", img: ""},
    {name: "3", value: 3, suit: "Hearts", img: ""},
    {name: "3", value: 3, suit: "Diamonds", img: ""},
    {name: "3", value: 3, suit: "Clubs", img: ""},
    {name: "3", value: 3, suit: "Spades", img: ""},
    {name: "4", value: 4, suit: "Hearts", img: ""},
    {name: "4", value: 4, suit: "Diamonds", img: ""},
    {name: "4", value: 4, suit: "Clubs", img: ""},
    {name: "4", value: 4, suit: "Spades", img: ""},
    {name: "5", value: 5, suit: "Hearts", img: ""},
    {name: "5", value: 5, suit: "Diamonds", img: ""},
    {name: "5", value: 5, suit: "Clubs", img: ""},
    {name: "5", value: 5, suit: "Spades", img: ""},
    {name: "6", value: 6, suit: "Hearts", img: ""},
    {name: "6", value: 6, suit: "Diamonds", img: ""},
    {name: "6", value: 6, suit: "Clubs", img: ""},
    {name: "6", value: 6, suit: "Spades", img: ""},
    {name: "7", value: 7, suit: "Hearts", img: ""},
    {name: "7", value: 7, suit: "Diamonds", img: ""},
    {name: "7", value: 7, suit: "Clubs", img: ""},
    {name: "7", value: 7, suit: "Spades", img: ""},
    {name: "8", value: 8, suit: "Hearts", img: ""},
    {name: "8", value: 8, suit: "Diamonds", img: ""},
    {name: "8", value: 8, suit: "Clubs", img: ""},
    {name: "8", value: 8, suit: "Spades", img: ""},
    {name: "9", value: 9, suit: "Hearts", img: ""},
    {name: "9", value: 9, suit: "Diamonds", img: ""},
    {name: "9", value: 9, suit: "Clubs", img: ""},
    {name: "9", value: 9, suit: "Spades", img: ""},
    {name: "10", value: 10, suit: "Hearts", img: ""},
    {name: "10", value: 10, suit: "Diamonds", img: ""},
    {name: "10", value: 10, suit: "Clubs", img: ""},
    {name: "10", value: 10, suit: "Spades", img: ""},
    {name: "J", value: 11, suit: "Hearts", img: ""},
    {name: "J", value: 11, suit: "Diamonds", img: ""},
    {name: "J", value: 11, suit: "Clubs", img: ""},
    {name: "J", value: 11, suit: "Spades", img: ""},
    {name: "Q", value: 12, suit: "Hearts", img: ""},
    {name: "Q", value: 12, suit: "Diamonds", img: ""},
    {name: "Q", value: 12, suit: "Clubs", img: ""},
    {name: "Q", value: 12, suit: "Spades", img: ""},
    {name: "K", value: 13, suit: "Hearts", img: ""},
    {name: "K", value: 13, suit: "Diamonds", img: ""},
    {name: "K", value: 13, suit: "Clubs", img: ""},
    {name: "K", value: 13, suit: "Spades", img: ""},
    {name: "A", value: 14, suit: "Hearts", img: ""}, 
    {name: "A", value: 14, suit: "Diamonds", img: ""}, 
    {name: "A", value: 14, suit: "Clubs", img: "/docs/assets/images/ace_of_clubs.png"}, 
    {name: "A", value: 14, suit: "Spades", img: ""} 
]

ctx.font = 'bold 16px sans-serif';
ctx.fillStyle = 'black';
ctx.fillText('Remaining Cards: ', 700, 30);

gridDisplay = document.querySelector("#grid");

// draw placeholders
ctx.fillStyle = 'red';
ctx.fillRect(70, 400, 50, 50);


