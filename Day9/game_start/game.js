const hands = [...document.querySelectorAll('img')];
const letsPlay = document.querySelector('.start');
const options = ['kamień', 'papier', 'nożyczki'];


const game = {
    yourChoice: "",
    computerChoice: "",
}
let gameSummary = {
    games: 0,
    wins: 0,
    losses: 0,
    draws: 0
}
const HandSelection = function () {
    game.yourChoice = this.dataset.option;
    console.log("Player " + game.yourChoice);
    hands.forEach(hand => hand.style.boxShadow = "")
    this.style.boxShadow = "0 0 4px red"
}

hands.forEach(function (hand) {
    hand.addEventListener('click', HandSelection)
});
const computerSelection = () => {
    const index = (Math.floor(Math.random() * hands.length));
    game.computerChoice = options[index];
    return game.computerChoice;
}
const addSummary = () => {
    if (game.computerChoice == game.yourChoice) {
        gameSummary.draws++;
        console.log("Remis");
        document.querySelector('p.draws span').textContent=gameSummary.draws;
        
    } else if ((game.computerChoice == "nożyczki" && game.yourChoice == "papier") || (game.computerChoice == "papier" && game.yourChoice == "kamień") || (game.computerChoice == "kamień" && game.yourChoice == "nożyczki")) {
        gameSummary.losses++;
              console.log("Przegrałeś");
              document.querySelector('p.losses span').textContent=gameSummary.losses;

    } else {
        gameSummary.wins++;
              console.log("Wygraleś");
               document.querySelector('p.wins span').textContent=gameSummary.wins;
    }
}

const showSummary = ()=>{
    console.log(`Wygrane: ${gameSummary.wins}, Przegrane: ${gameSummary.losses}, Remisy: ${gameSummary.draws} `)
}
const startGame = () => {
    if (game.yourChoice == "") {
        alert("Nic nie wybrales");
        return;
    }
    gameSummary.games++;
    document.querySelector('p.numbers span').textContent=gameSummary.games;
    game.computerChoice = computerSelection();
    console.log("Komputer " + game.computerChoice);
    addSummary();
    showSummary();
    hands.forEach(hand => hand.style.boxShadow = "")
}
letsPlay.addEventListener('click', startGame)