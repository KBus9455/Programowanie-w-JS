const hands = [...document.querySelectorAll('img')];
const letsPlay = document.querySelector('.start');
const options = ['kamień', 'papier', 'nożyczki'];
const yourChoice = document.querySelector('[data-summary="your-choice"]')
const computerChoice = document.querySelector('[data-summary="ai-choice"]')
const whoWin = document.querySelector('[data-summary="who-win"]')


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
   return options[(Math.floor(Math.random() * hands.length))];
}
const addSummary = () => {
    if (game.computerChoice == game.yourChoice) {
        gameSummary.draws++;
        document.querySelector('p.draws span').textContent=gameSummary.draws++;
        whoWin.textContent = "REMIS";
    } else if ((game.computerChoice == "nożyczki" && game.yourChoice == "papier") || (game.computerChoice == "papier" && game.yourChoice == "kamień") || (game.computerChoice == "kamień" && game.yourChoice == "nożyczki")) {
        gameSummary.losses++;
              console.log("Przegrałeś");
              document.querySelector('p.losses span').textContent=gameSummary.losses;
whoWin.textContent = "KOMPUTER";
    } else {
        gameSummary.wins++;
              console.log("Wygraleś");
               document.querySelector('p.wins span').textContent=gameSummary.wins;
               whoWin.textContent = "TY! Gratulacje ";
    }
}

const showSummary = ()=>{
 //   console.log(`Wygrane: ${gameSummary.wins}, Przegrane: $//{gameSummary.losses}, Remisy: ${gameSummary.draws} `)
yourChoice.textContent = game.yourChoice;
computerChoice.textContent=game.computerChoice;

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