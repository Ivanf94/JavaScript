function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let cards = [];
cards.push(randomNumber(2, 11));
cards.push(randomNumber(2, 11));

let sum = cards[0] + cards[1];
let hasBlackJack = false;
let isAlive = true;
let message = "";

let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let messageEl = document.getElementById("message-el");

function startGame(){
    renderGame();
}

function renderGame(){

        cardsEl.textContent = "Cards:";
        let i = 0;
        while(i < cards.length){
            cardsEl.textContent += " " + cards[i];
            i++;
        }
        sumEl.textContent = "Sum: " + sum;


        if(sum <= 20){
            message = "Do you want a new card?";
        }
        else if(sum === 21){
            message = "BlackJack!!!";
            hasBlackJack = true;
        }
        else{
            message = "You lose!";
            isAlive = false;
        }

        messageEl.textContent = message;
    
}

function newCard(){
    if(isAlive){
        cards.push(randomNumber(2, 11));
        sum += cards[cards.length - 1];
        renderGame();
    }
}