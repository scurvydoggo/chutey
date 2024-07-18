import Game from './chutey/Game';
import Assets from './chutey/Assets';

window.addEventListener('load', function() {
  const assets = new Assets(this.document)

  // Set the canvas size to match the background image
  const bg = assets.image("background");
  assets.canvas.width = bg.width;
  assets.canvas.height = bg.height;

  // Run the game
  new Game(assets.canvas.getContext("2d")!, assets);
});
