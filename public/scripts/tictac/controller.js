import Game from "./game.js";
import View from "./view.js";

let game = new Game();
let view = new View(document.getElementById("tic-tac-toe"));

view.onTileClick = function(i) {
    game.makeMove(i);
    view.update(game);
};

view.onRestartClick = function() {
    game = new Game();
    view.update(game);
};

view.update(game);


