import Boat from "./actors/Boat";
import Chutist from "./actors/Chutist";
import Plane from "./actors/Plane";
import Sea from "./actors/Sea";
import Assets from "./Assets";

export default class Scene {
    readonly width: number;
    readonly height: number;
    readonly bg: HTMLImageElement;
    readonly chutistImg: HTMLImageElement;

    readonly sea: Sea;
    readonly boat: Boat;
    readonly plane: Plane;
    readonly chutists: Chutist[] = [];

    constructor(assets: Assets, width: number, height: number) {
        this.width = width;
        this.height = height;
        this.bg = assets.image("background");

        // Sea
        const seaImg = assets.image("sea");
        this.sea = new Sea(seaImg, 0, height - seaImg.height);

        // Boat
        const boatImg = assets.image("boat");
        this.boat = new Boat(boatImg, width / 2, this.sea.y);

        // Plane
        this.plane = new Plane(
            assets.image("plane"),
            width + 10,
            height * 0.1,
            (x, y) => this.spawnChutist(x, y)
        );

        // Chutist
        this.chutistImg = assets.image("chutist");
    }

    // Step the simulation
    update(): void {
        this.boat.update();
        this.plane.update();
        for (var c of this.chutists) {
            c.update();
        }
    }

    // Draw the world
    draw(ctx: CanvasRenderingContext2D): void {
        ctx.drawImage(this.bg, 0, 0, this.width, this.height);

        this.sea.draw(ctx);
        this.boat.draw(ctx);
        this.plane.draw(ctx);
        for (var c of this.chutists) {
            c.draw(ctx);
        }
    }

    spawnChutist(x: number, y: number): void {
        this.chutists.push(
            new Chutist(this.chutistImg, x, y)
        )
    }
}
