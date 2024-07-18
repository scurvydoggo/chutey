import Assets from "./Assets";
import Scene from "./Scene";

export default class Game {
    private readonly ctx: CanvasRenderingContext2D;
    private readonly scene: Scene;

    constructor(ctx: CanvasRenderingContext2D, assets: Assets) {
        this.ctx = ctx;
        this.scene = new Scene(assets, ctx.canvas.width, ctx.canvas.height);

        // Kick off the game loop
        this.gameloop();
    }

    gameloop(): void {
        this.scene.update();
        this.scene.draw(this.ctx);

        requestAnimationFrame(() => this.gameloop());
    }
}
