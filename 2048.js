class Game2048 {
	constructor() {
		this.tiles = Array(16).fill(null);
		this.gameBoard = document.getElementById("game-board");
		this.scoreDisplay = document.getElementById("score");
		this.restart = document.getElementById("restart");
		this.initGame();
	}

	initGame() {
		this.score = 0;
		this.addRandomTile();
		this.addRandomTile();
		this.renderBoard();
	}

	setupEventListeners() {}

	renderBoard() {
		this.gameBoard.innerHTML = "";
		this.tiles.forEach((tile) => {
			const tileElement = document.createElement("div");
			tileElement.classList.add("tile");
			if (tile !== null) {
				tileElement.classList.add(`tile-${tile}`);
				tileElement.textContent = tile;
			}
			this.gameBoard.appendChild(tileElement);
		});
		this.scoreDisplay.textContent = `Score: ${this.score}`;
	}

	addRandomTile() {
		const emptyTiles = this.tiles
			.map((tile, index) => (tile === null ? index : null))
			.filter((index) => index !== null);

		if (emptyTiles.length === 0) return;
		const randomIndex =
			emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
		this.tiles[randomIndex] = Math.random() < 0.9 ? 2 : 4;
	}
}

document.addEventListener("DOMContentLoaded", () => new Game2048());
