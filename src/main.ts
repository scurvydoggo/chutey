window.addEventListener('load', function() {
  const canvas = this.document.getElementById("game-container") as HTMLCanvasElement;
  const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;
  canvas.width = 500;
  canvas.height = 500;
});
