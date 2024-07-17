import Scene from './chutey/Scene'

window.addEventListener('load', function() {
  const canvas = this.document.getElementById("game-container") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d")!;

  const scene: Scene = new Scene(canvas, this.document.getElementById("background") as HTMLImageElement);

  scene.draw(ctx);
});
