import { Scene, NextScene } from "../Scene";
import Assets from "../Assets";

export default class HomeScene extends Scene {
    private readonly onClick: EventListener;   

    constructor(assets: Assets, backgroundId: string, width: number, height: number, nextScene: NextScene) {
        super(assets, backgroundId, width, height, nextScene)

        this.onClick = () => this.nextScene();
        this.assets.canvas.addEventListener("click", this.onClick);
    }

    finalize(): void {
        this.assets.canvas.removeEventListener("click", this.onClick);
    }

    draw(ctx: CanvasRenderingContext2D): void {
        super.draw(ctx);

        ctx.font = "bold 64pt Calibri";
        ctx.fillStyle = "gray"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText(
            "Chutey!",
            (this.width) / 2,
            (this.height) / 2
        );
    }
}
