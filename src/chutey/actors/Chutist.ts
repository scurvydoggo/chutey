import { Actor } from './Actor'
import Boat from './Boat';

type Land = (c: Chutist) => void

export default class Chutist extends Actor {
    private readonly boat: Boat;
    private readonly landingHeight: number;
    private readonly onSave: Land;
    private readonly onLose: Land;

    constructor(sprite: HTMLImageElement, x: number, y: number, boat: Boat, onSave: Land, onLose: Land) {
        super(sprite, x, y);

        this.boat = boat;
        this.landingHeight = this.boat.center().y - 28;
        this.onSave = onSave;
        this.onLose = onLose;
    }

    update(): void {
        this.y++;
        this.checkLanding();
    }

    checkLanding() {
        const me = this.center();

        if (me.y >= this.landingHeight) {
            if (me.x >= this.boat.x && me.x <= this.boat.x + this.boat.sprite.width) {
                this.onSave(this);
            } else {
                this.onLose(this);
            }
        }
    }
}
