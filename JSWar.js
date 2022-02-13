// Create a Deck of cards with 4 suits and a number value attached to each suit.
const SUITS = ['♠', '♥', '♦', '♣']
const VALUES = ['A', '2','3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

const CARD_VALUE_MAP = {
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10,
    'J': 11,
    'Q': 12,
    'K': 13,
    'A': 14,
}

class Deck {
    constructor(cards = newDeck())  {
        this.cards = cards
    }
    get numOfCards() {
        return this.cards.length
    }
// Shuffles the deck randomly    
    shuffle() {
        for(let i = this.numOfCards -1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1))
            const oldValue = this.cards[newIndex]
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldValue

        }
    }
}


class Card {
    constructor(suit, value) {
        this.suit = suit
        this.value = value
    }
}

function newDeck() {
    return SUITS.flatMap(suit => {
    return VALUES.map(value => {
        return new Card(suit, value)
    })
    })
}
// Deals 26 cards or half the deck to each player. (Player vs Comp) or techincally (Comp vs Comp).
dealDeck()
function dealDeck() {
const deck = new Deck()
deck.shuffle()
const deckMidpoint = Math.ceil(deck.numOfCards / 2)
playerDeck = new Deck(deck.cards.slice(0, deckMidpoint))
compDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numOfCards))
    }
let hand1 = [];
    let hand2 = [];
    for (i = 0; i < 26; i++) {
        let x = Math.floor(Math.random()*13)+2;
        hand1.push(x);
    }
    console.log(hand1);
    for (i = 0; i < 26; i++) {
        let y = Math.floor(Math.random()*13)+2;
        hand2.push(y);
    }
    console.log(hand2);
    let win1 = 0, win2 = 0, tie = 0;
    for (i = 0; i < 26; i++) {
        if(hand1[i]>hand2[i])
            win1 += 1;
        else if(hand1[i]<hand2[i])
            win2 += 1;
        else
            tie += 1;
    }
    // Displays the number of winning hands for player and comp or in the case of a tie keeps tally of Ties
    console.log(playerDeck + " winning hands:" + win1);
    console.log(compDeck + " winning hands:" + win2);
    console.log("Number of ties:" + tie);
    if(win1 > win2)
        console.log(playerDeck + " wins");
    else if(win1 < win2)
        console.log(compDeck + " wins");
    else{
        var x = Math.floor(Math.random()*13)+2;
        var y = Math.floor(Math.random()*13)+2;
        if(x > y)
            console.log(playerDeck +" wins");
        else if(x < y)
            console.log(compDeck + " wins");
        else
            console.log("It's a tie");
    
}

console.log(dealDeck)

