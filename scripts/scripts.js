//X => .grid-container__item--x
//O => .grid-container__item--o

// Change turns - variable
// Player X => turn = false
// Player O => turn = true
let turn;

// Choose "X" or "O" - methods
const startingPage = document.querySelector(".starting-page");
const boardPage = document.querySelector(".board-page");
const chooseButton = document.querySelectorAll(".starting-page__buttons-item");
const chooseSymbol = document.querySelector(".player");

// Add symbol to empty field - methods
const fields = document.querySelectorAll(".grid-container__item");

// All win-conditions - array
const winConditions = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[2, 4, 6],
	[0, 4, 8],
];

// Showing winner winddow - methods
const winnerPage = document.querySelector(".winner-page");
const winnerPlayer = document.querySelector(".winner-page__player");
const reset = document.querySelectorAll(".reset");

// Choose "X" or "O" - functions
chooseButton.forEach((item) => {
	item.addEventListener("click", () => {
		if (item.id === "X") {
			turn = false;
			chooseSymbol.innerHTML = `Player's turn: "X"`;
		} else {
			turn = true;
			chooseSymbol.innerHTML = `Player's turn: "O"`;
		}
		setTimeout(() => {
			startingPage.style.display = "none";
			boardPage.style.display = "flex";
			boardPage.style.animation = "fadeIn 1s";
		}, 200);
	});
});

// Add symbol to empty field - functions
fields.forEach((field) => {
	field.addEventListener("click", () => {
		if (turn === false) {
			field.classList.add("grid-container__item--x");
			field.style.animation = "fadeIn 1s";
			field.disabled = true;
			chooseSymbol.innerHTML = `Player's turn: "O"`;
			turn = true;
		} else {
			field.classList.add("grid-container__item--o");
			field.style.animation = "fadeIn 1s";
			field.disabled = true;
			chooseSymbol.innerHTML = `Player's turn: "X"`;
			turn = false;
		}
		winFunction();
		drawFunction();
	});
});

// Winning the game - function
const winFunction = () => {
	for (let i = 0; i < 8; i++) {
		let combinations = winConditions[i];
		if (
			fields[combinations[0]].classList.contains("grid-container__item--x") &&
			fields[combinations[1]].classList.contains("grid-container__item--x") &&
			fields[combinations[2]].classList.contains("grid-container__item--x")
		) {
			winnerPlayer.innerHTML = `Player "X" win the game!`;
			boardPage.style.display = "none";
			winnerPage.style.animation = "fadeIn 1s";
			winnerPage.style.display = "flex";
		} else if (
			fields[combinations[0]].classList.contains("grid-container__item--o") &&
			fields[combinations[1]].classList.contains("grid-container__item--o") &&
			fields[combinations[2]].classList.contains("grid-container__item--o")
		) {
			winnerPlayer.innerHTML = `Player "O" win the game!`;
			boardPage.style.display = "none";
			winnerPage.style.display = "flex";
		} else {
			continue;
		}
	}
};

// Draw - function
const drawFunction = () => {
	if (
		fields[0].disabled &&
		fields[1].disabled &&
		fields[2].disabled &&
		fields[3].disabled &&
		fields[4].disabled &&
		fields[5].disabled &&
		fields[6].disabled &&
		fields[7].disabled &&
		fields[8].disabled
	) {
		winnerPlayer.innerHTML = "There is a draw!";
		boardPage.style.display = "none";
		winnerPage.style.display = "flex";
	}
};

// Reset
reset.forEach((button) => {
	button.addEventListener("click", () => {
		window.location.reload(true);
	});
});
