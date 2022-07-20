// define entire deck
const originalCards = [
  {name: "2", value: 2, suit: "Hearts", img: "/docs/assets/images/2hearts.png"},
  {name: "2", value: 2, suit: "Diamonds", img: "/docs/assets/images/2diamonds.png"},
  {name: "2", value: 2, suit: "Clubs", img: "/docs/assets/images/2clubs.png"},
  {name: "2", value: 2, suit: "Spades", img: "/docs/assets/images/2spades.png"},
  {name: "3", value: 3, suit: "Hearts", img: "/docs/assets/images/3hearts.png"},
  {name: "3", value: 3, suit: "Diamonds", img: "/docs/assets/images/3diamonds.png"},
  {name: "3", value: 3, suit: "Clubs", img: "/docs/assets/images/3clubs.png"},
  {name: "3", value: 3, suit: "Spades", img: "/docs/assets/images/3spades.png"},
  {name: "4", value: 4, suit: "Hearts", img: "/docs/assets/images/4hearts.png"},
  {name: "4", value: 4, suit: "Diamonds", img: "/docs/assets/images/4diamonds.png"},
  {name: "4", value: 4, suit: "Clubs", img: "/docs/assets/images/4clubs.png"},
  {name: "4", value: 4, suit: "Spades", img: "/docs/assets/images/4spades.png"},
  {name: "5", value: 5, suit: "Hearts", img: "/docs/assets/images/5hearts.png"},
  {name: "5", value: 5, suit: "Diamonds", img: "/docs/assets/images/5diamonds.png"},
  {name: "5", value: 5, suit: "Clubs", img: "/docs/assets/images/5clubs.png"},
  {name: "5", value: 5, suit: "Spades", img: "/docs/assets/images/5spades.png"},
  {name: "6", value: 6, suit: "Hearts", img: "/docs/assets/images/6hearts.png"},
  {name: "6", value: 6, suit: "Diamonds", img: "/docs/assets/images/6diamonds.png"},
  {name: "6", value: 6, suit: "Clubs", img: "/docs/assets/images/6clubs.png"},
  {name: "6", value: 6, suit: "Spades", img: "/docs/assets/images/6spades.png"},
  {name: "7", value: 7, suit: "Hearts", img: "/docs/assets/images/7hearts.png"},
  {name: "7", value: 7, suit: "Diamonds", img: "/docs/assets/images/7diamonds.png"},
  {name: "7", value: 7, suit: "Clubs", img: "/docs/assets/images/7clubs.png"},
  {name: "7", value: 7, suit: "Spades", img: "/docs/assets/images/7spades.png"},
  {name: "8", value: 8, suit: "Hearts", img: "/docs/assets/images/8hearts.png"},
  {name: "8", value: 8, suit: "Diamonds", img: "/docs/assets/images/8diamonds.png"},
  {name: "8", value: 8, suit: "Clubs", img: "/docs/assets/images/8clubs.png"},
  {name: "8", value: 8, suit: "Spades", img: "/docs/assets/images/8spades.png"},
  {name: "9", value: 9, suit: "Hearts", img: "/docs/assets/images/9hearts.png"},
  {name: "9", value: 9, suit: "Diamonds", img: "/docs/assets/images/9diamonds.png"},
  {name: "9", value: 9, suit: "Clubs", img: "/docs/assets/images/9clubs.png"},
  {name: "9", value: 9, suit: "Spades", img: "/docs/assets/images/9spades.png"},
  {name: "10", value: 10, suit: "Hearts", img: "/docs/assets/images/10hearts.png"},
  {name: "10", value: 10, suit: "Diamonds", img: "/docs/assets/images/10diamonds.png"},
  {name: "10", value: 10, suit: "Clubs", img: "/docs/assets/images/10clubs.png"},
  {name: "10", value: 10, suit: "Spades", img: "/docs/assets/images/10spades.png"},
  {name: "J", value: 11, suit: "Hearts", img: "/docs/assets/images/jhearts.png"},
  {name: "J", value: 11, suit: "Diamonds", img: "/docs/assets/images/jdiamonds.png"},
  {name: "J", value: 11, suit: "Clubs", img: "/docs/assets/images/jclubs.png"},
  {name: "J", value: 11, suit: "Spades", img: "/docs/assets/images/jspades.png"},
  {name: "Q", value: 12, suit: "Hearts", img: "/docs/assets/images/qhearts.png"},
  {name: "Q", value: 12, suit: "Diamonds", img: "/docs/assets/images/qdiamonds.png"},
  {name: "Q", value: 12, suit: "Clubs", img: "/docs/assets/images/qclubs.png"},
  {name: "Q", value: 12, suit: "Spades", img: "/docs/assets/images/qspades.png"},
  {name: "K", value: 13, suit: "Hearts", img: "/docs/assets/images/khearts.png"},
  {name: "K", value: 13, suit: "Diamonds", img: "/docs/assets/images/kdiamonds.png"},
  {name: "K", value: 13, suit: "Clubs", img: "/docs/assets/images/kclubs.png"},
  {name: "K", value: 13, suit: "Spades", img: "/docs/assets/images/kspades.png"},
  {name: "A", value: 14, suit: "Hearts", img: "/docs/assets/images/ahearts.png"}, 
  {name: "A", value: 14, suit: "Diamonds", img: "/docs/assets/images/adiamonds.png"}, 
  {name: "A", value: 14, suit: "Clubs", img: "/docs/assets/images/ace_of_clubs.png"}, 
  {name: "A", value: 14, suit: "Spades", img: "/docs/assets/images/aspades.png"} 
];

let originalDecks = [
  {x: 120, y:100, cards: []},
  {x: 420, y:100, cards: []},
  {x: 720, y:100, cards: []},
  {x: 120, y:275, cards: []},
  {x: 420, y:275, cards: []},
  {x: 720, y:275, cards: []},
  {x: 120, y:450, cards: []},
  {x: 420, y:450, cards: []},
  {x: 720, y:450, cards: []}
]

const cardsArray = [...originalCards];
const decksArray = [...originalDecks];
