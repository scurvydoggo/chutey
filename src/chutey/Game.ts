import Assets from "./View";
import { Scene } from "./Scene";
import HomeScene from "./scenes/HomeScene";
import GameScene from "./scenes/GameScene";

export default class Game {
    private readonly ctx: CanvasRenderingContext2D;
    private readonly assets: Assets;

    // The current scene
    private scene: Scene;

    constructor(ctx: CanvasRenderingContext2D, assets: Assets) {
        this.ctx = ctx;
        this.assets = assets;

        // Set the scene
        this.scene = this.createNextScene();

        // Kick off the game loop
        this.gameloop();
    }

    // Forever step physics and animate
    gameloop(): void {
        this.scene.step();
        this.scene.draw(this.ctx);

        requestAnimationFrame(() => this.gameloop());
    }

    // Create an instance of the next scene
    createNextScene(): Scene {
        const changeScene = () => {
            this.scene.finalize();
            this.scene = this.createNextScene()
        };

        if (this.scene instanceof HomeScene) {
            return new GameScene(
                this.assets, "background", this.ctx.canvas.width, this.ctx.canvas.height, changeScene
            );
        } else {
            return new HomeScene(
                this.assets, "background", this.ctx.canvas.width, this.ctx.canvas.height, changeScene
            );
        }
    }
}
