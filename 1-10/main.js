const gameSelecter = document.getElementById(`game-selecter`);
const gameContainer = document.getElementById(`game-container`);

gameContainer.textContent="こっぷんかー"

gameSelecter.addEventListener("change",function(){
    gameContainer.innerHTML="";
    switch(gameSelecter.value){
        case "none":
            gameContainer.textContent="こっぷんかー"
            break;
        case"click-counter":
            ClickCounterGame();
            break;
            case "number-guess":
                NumberGuessGame();
                break;
                case "RPS":
                    RPS();
                break;
    }
})


