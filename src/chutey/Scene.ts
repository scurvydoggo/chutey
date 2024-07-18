import Assets from "./Assets";

export type NextScene = () => void;

export abstract class Scene {
    readonly assets: Assets;
    readonly width: number;
    readonly height: number;
    readonly nextScene: NextScene;

    private readonly bg: HTMLImageElement;

    constructor(assets: Assets, backgroundId: string, width: number, height: number, nextScene: NextScene) {
        this.assets = assets;
        this.width = width;
        this.height = height;
        this.nextScene = nextScene;

        this.bg = assets.image(backgroundId);
    }

    // Remove any canvas event listeners to avoid memory leaks
    abstract finalize(): void

    // Step the simulation
    step(): void { }

    // Draw the scene
    draw(ctx: CanvasRenderingContext2D): void {
        ctx.drawImage(this.bg, 0, 0, this.width, this.height);
    }
}
