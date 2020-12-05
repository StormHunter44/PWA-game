export default class View {
    constructor(root) {
        this.root = root;
        //document.getElementById("tic-tac-toe").innerHTML = ` `;

        this.onTileClick = undefined;
        this.onRestartClick = undefined;

        this.root.querySelectorAll(".board__tile").forEach(tile => {
            tile.addEventListener("click", () => {
                this.onTileClick(tile.dataset.index);
            });
        })

        this.root.querySelector(".header__restart").addEventListener("click", () => {
            if (this.onRestartClick) {
                this.onRestartClick();
            }
        })
    }

    update(game) {
        this.updateTurn(game);
        this.updateStatus(game);
        this.updateBoard(game);
    }

    updateStatus(game) {
        let status = "In progress";

        if (game.findWinningCombination()) {
            status = `${game.turn} is the winner!`;
        } else if (!game.isInProgress()) {
            status = "It's a tie!";
        }

        this.root.querySelector(".header__status").textContent = status;
    }

    updateTurn(game) {
        this.root.querySelector(".header__turn").textContent = `${game.turn}'s turn`;
    }

    updateBoard(game) {
        const findWinningCombination = game.findWinningCombination();

        for (let i = 0; i < game.board.length; i++) {
            const tile = this.root.querySelector(`.board__tile[data-index="${i}"]`);

            tile.classList.remove("board__tile--winner");
            tile.textContent = game.board[i];

            if (findWinningCombination && findWinningCombination.includes(i)) {
                tile.classList.add("board__tile--winner");
            }
        }
    }
}