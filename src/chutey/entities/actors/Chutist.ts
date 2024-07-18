import { Actor } from '../Actor'
import Boat from './Boat';

type Land = (c: Chutist) => void

export default class Chutist extends Actor {
    private readonly boat: Boat;
    private readonly landingHeight: number;
    private readonly speed: number;
    private readonly onRescue: Land;
    private readonly onDrown: Land;

    constructor(sprite: HTMLImageElement, x: number, y: number, boat: Boat, onRescue: Land, onDrown: Land) {
        super(sprite, x, y);

        this.boat = boat;

        // Randomise the fall speed for challenge
        this.speed = 1 + Math.ceil(Math.random() * 4);

        // The sprite is elongated so adjust the y
        this.landingHeight = this.boat.center().y - 28;

        this.onRescue = onRescue;
        this.onDrown = onDrown;
    }

    step(): void {
        this.y += this.speed;

        // Determine rescue once we reach the height of the boat deck
        const me = this.center();
        if (me.y >= this.landingHeight) {
            if (me.x >= this.boat.x && me.x <= this.boat.x + this.boat.sprite.width) {
                this.onRescue(this);
            } else {
                this.onDrown(this);
            }
        }
    }
}
