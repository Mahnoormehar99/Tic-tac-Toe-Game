console.log("Welcome to Tic Tac Toe!");

let buttons = document.querySelectorAll(".cell");
let resetButton = document.getElementById("reset-button");


let turn0 = true; // true for X's turn, false for O's turn

const winningCombinations = [
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]
];

function checkWinner() {
    for (let combination of winningCombinations) {
        let posval1 = buttons[combination[0]].innerText;
        let posval2 = buttons[combination[1]].innerText;
        let posval3 = buttons[combination[2]].innerText;

    if (posval1 !== "" && posval2 !== "" && posval3 !== "" ) {
        if (posval1 === posval2 && posval1 === posval3) {
            console.log("Winner is: " + posval1);
        }
    }
    }
    return null;
}





buttons.forEach((button) => {
    button.addEventListener("click", () => {
        console.log("Button clicked");
        if(turn0) {
            button.innerText = "0";
            turn0 = false;

        } else {
            button.innerText = "X";
            turn0 = true;
        }
        button.disabled = true;
        checkWinner();
        
    });
});

const resetGame = () => {
    buttons.forEach((button) => {
        button.innerText = "";
        button.disabled = false;
    });
    turn0 = true;
};

resetButton.addEventListener("click", resetGame);
