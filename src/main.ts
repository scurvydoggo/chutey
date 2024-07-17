import Game from './chutey/Game';

window.addEventListener('load', function() {
  // Get the assets
  const canvas = this.document.getElementById("game-container") as HTMLCanvasElement;
  const bg = this.document.getElementById("background") as HTMLImageElement;

  // Run the game
  new Game(canvas, bg);
});
