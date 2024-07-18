import Boat from "./actors/Boat";
import Chutist from "./actors/Chutist";
import Plane from "./actors/Plane";
import Sea from "./actors/Sea";
import Assets from "./Assets";

export default class Scene {
    readonly width: number;
    readonly height: number;

    private readonly bg: HTMLImageElement;
    private readonly chutistImg: HTMLImageElement;
    private readonly sea: Sea;
    private readonly boat: Boat;
    private readonly plane: Plane;
    private readonly chutists: Chutist[] = [];

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
        // TODO: `Scene.actors` array - cherry picking variables is error prone
        this.sea.update();
        this.boat.update();
        this.plane.update();
        for (var c of this.chutists) {
            c.update();
        }
    }

    // Draw the world
    draw(ctx: CanvasRenderingContext2D): void {
        ctx.drawImage(this.bg, 0, 0, this.width, this.height);

        // TODO: `Scene.actors` array - cherry picking variables is error prone
        this.sea.draw(ctx);
        this.boat.draw(ctx);
        this.plane.draw(ctx);
        for (var c of this.chutists) {
            c.draw(ctx);
        }
    }

    spawnChutist(x: number, y: number): void {
        this.chutists.push(
            new Chutist(
                this.chutistImg, x, y, this.boat,
                c => this.saveChutist(c), c => this.loseChutist(c)
            )
        );
    }

    saveChutist(chutist: Chutist): void {
        this.removeChutist(chutist);
        console.log("Rescued!")
    }

    loseChutist(chutist: Chutist): void {
        this.removeChutist(chutist);
        console.log("Lost one!")
    }

    private removeChutist(chutist: Chutist): void {
        this.chutists.splice(this.chutists.findIndex(c => c == chutist), 1);
    }
}
