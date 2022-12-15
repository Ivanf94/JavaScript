function randomNumber(){
    
    let random = Math.floor(Math.random() * 13) + 1;
    if(random === 1){
        return 11;
    }
    else if(random > 10){
        return 11;
    }
    else{
        return random;
    }

}

player = {
    name: "Ivan",
    chips: 1440,
    predstava: function(){
        return "My name is Ivan";
    }
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let messageEl = document.getElementById("message-el");

function startGame(){
    isAlive = true;
    cards.push(randomNumber());
    cards.push(randomNumber());
    sum = cards[0] + cards[1];
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
    if(isAlive && !hasBlackJack){
        cards.push(randomNumber());
        sum += cards[cards.length - 1];
        renderGame();
    }
}