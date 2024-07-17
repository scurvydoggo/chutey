import Plane from "./actors/Plane";
import Sea from "./actors/Sea";
import Assets from "./Assets";

export default class Scene {
    readonly width: number;
    readonly height: number;
    readonly bg: HTMLImageElement;

    readonly plane: Plane;
    readonly sea: Sea;

    constructor(assets: Assets, width: number, height: number) {
        this.width = width;
        this.height = height;
        this.bg = assets.image("background");

        // Plane
        this.plane = new Plane(assets.image("plane"), width + 10, height * 0.1);

        // Sea
        const seaImg = assets.image("sea");
        this.sea = new Sea(seaImg, 0, height - seaImg.height);
    }

    // Step the simulation
    update(): void {
        this.plane.update();
    }

    // Draw the world
    draw(ctx: CanvasRenderingContext2D): void {
        ctx.drawImage(this.bg, 0, 0, this.width, this.height);

        this.plane.draw(ctx);
        this.sea.draw(ctx);
    }
}
