import { Actor } from './Actor'
import Boat from './Boat';

export default class Chutist extends Actor {
    private readonly boat: Boat;
    private readonly landingHeight: number;

    constructor(sprite: HTMLImageElement, x: number, y: number, boat: Boat) {
        super(sprite, x, y);

        this.boat = boat;
        this.landingHeight = this.boat.center().y - 28;
    }

    update(): void {
        this.y++;
        this.checkLanding();
    }

    checkLanding() {
        const me = this.center();

        if (me.y >= this.landingHeight) {
            if (me.x >= this.boat.x && me.x <= this.boat.x + this.boat.sprite.width) {
                console.log("On boat!");
            } else {
                console.log("In sea!");
            }
        }
    }
}
