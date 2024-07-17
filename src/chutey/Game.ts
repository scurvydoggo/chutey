import Scene from "./Scene";

export default class Game {
    ctx: CanvasRenderingContext2D;
    scene: Scene;

    constructor(canvas: HTMLCanvasElement, bg: HTMLImageElement) {
        this.ctx = canvas.getContext("2d")!;
        this.scene = new Scene(canvas, bg);

        // Kick off the game loop
        this.gameloop();
    }

    gameloop() {
        this.scene.update();
        this.scene.draw(this.ctx);
        requestAnimationFrame(this.gameloop);
    }
}
