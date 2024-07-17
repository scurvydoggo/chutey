import Plane from "./actors/Plane";
import Assets from "./Assets";

export default class Scene {
    width: number;
    height: number;
    bg: HTMLImageElement;
    plane: Plane;

    constructor(assets: Assets, width: number, height: number) {
        this.width = width;
        this.height = height;

        this.bg = assets.image("background");
        this.plane = new Plane(assets.image("plane"), width + 10, height * 0.1);
    }

    // Step the simulation
    update(): void {
        this.plane.update();
    }

    // Draw the world
    draw(ctx: CanvasRenderingContext2D): void {
        ctx.drawImage(this.bg, 0, 0, this.width, this.height);

        this.plane.draw(ctx);
    }
}
