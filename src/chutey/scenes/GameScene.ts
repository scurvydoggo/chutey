import { Scene, NextScene } from "../Scene";
import Assets from "../Assets";
import Boat from "../entities/actors/Boat";
import Chutist from "../entities/actors/Chutist";
import Plane from "../entities/actors/Plane";
import Sea from "../entities/scenery/Sea";

const initialLives = 3;
const pointsPerRescue = 10;

class Score {
    lives: number;
    score: number;

    private readonly x: number;
    private readonly y: number;
    private readonly spacing: number;

    constructor(x: number, y: number, spacing: number) {
        this.x = x;
        this.y = y;
        this.spacing = spacing;

        this.lives = initialLives;
        this.score = 0;
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.font = "bold 18pt Calibri";
        ctx.fillStyle = "gray"
        ctx.textAlign = "left"
        ctx.textBaseline = "middle"
        ctx.fillText(`Score: ${this.score}`, this.x, this.y);
        ctx.fillText(`Lives: ${this.lives}`, this.x, this.y + this.spacing);
    }
}

export default class GameScene extends Scene {
    private readonly score: Score;
    private readonly sea: Sea;
    private readonly boat: Boat;
    private readonly plane: Plane;
    private readonly chutists: Chutist[] = [];
    private readonly chutistImg: HTMLImageElement;

    constructor(assets: Assets, backgroundId: string, width: number, height: number, nextScene: NextScene) {
        super(assets, backgroundId, width, height, nextScene);

        this.score = new Score(20, 30, 30);

        const seaImg = assets.image("sea");
        this.sea = new Sea(seaImg, 0, height - seaImg.height);

        const boatImg = assets.image("boat");
        this.boat = new Boat(assets, boatImg, width / 2, this.sea.y);

        this.plane = new Plane(
            assets.image("plane"),
            width + 10,
            height * 0.1,
            (x, y) => this.spawnChutist(x, y)
        );

        this.chutistImg = assets.image("chutist");
    }

    // Clean up event handlers
    finalize(): void {
        this.boat.finalize();
    }

    // Step the simulation
    step(): void {
        super.step();

        // FIXME: This is error prone - use actor array with Z-depth instead
        this.boat.step();
        this.plane.step();
        for (var c of this.chutists) {
            c.step();
        }
    }

    // Draw the scene
    draw(ctx: CanvasRenderingContext2D): void {
        super.draw(ctx);

        // FIXME: This is error prone - use actor array with Z-depth instead
        this.sea.draw(ctx);
        this.boat.draw(ctx);
        this.plane.draw(ctx);
        for (var c of this.chutists) {
            c.draw(ctx);
        }

        // UI widgets float above the game
        this.score.draw(ctx);
    }

    spawnChutist(x: number, y: number): void {
        this.chutists.push(
            new Chutist(
                this.chutistImg, x, y, this.boat,
                c => this.rescueChutist(c),
                c => this.drownChutist(c)
            )
        );
    }

    rescueChutist(chutist: Chutist): void {
        this.removeChutist(chutist);

        this.score.score += pointsPerRescue;
        console.log(`${chutist} rescued!`)
    }

    drownChutist(chutist: Chutist): void {
        this.removeChutist(chutist);

        this.score.lives--;
        if (this.score.lives == 0) {
            // TODO: Make this a UI widget
            alert(`Game over! You scored ${this.score.score}.`)
            this.nextScene();
        }
    }

    private removeChutist(chutist: Chutist): void {
        const idx = this.chutists.findIndex(c => c == chutist);
        if (idx >= 0) {
            this.chutists.splice(idx, 1);
        } else {
            throw new RangeError(`Cannot find chutist to remove: ${chutist}`)
        }
    }
}
