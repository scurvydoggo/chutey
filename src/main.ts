import Game from './chutey/Game';
import Assets from './chutey/Assets';

window.addEventListener('load', function() {
  const assets = new Assets(this.document)

  // Set the canvas size to match the background image
  const canvas = this.document.getElementById("game-container") as HTMLCanvasElement;
  const bg = assets.image("background");
  canvas.width = bg.width;
  canvas.height = bg.height;

  // Run the game
  new Game(canvas.getContext("2d")!, assets);
});
