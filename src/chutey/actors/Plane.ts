import Actor from './Actor'
import Chutist from './Chutist';

// Have a chutist jump
type Jump = (x: number, y: number) => void

export default class Plane extends Actor {
    readonly jump: Jump;
    readonly spawnX: number;

    constructor(sprite: HTMLImageElement, spawnX: number, spawnY: number, jump: Jump) {
        super(sprite, spawnX, spawnY);

        this.spawnX = spawnX;
        this.jump = jump;
    }

    update(): void {
        this.x--;
        if (this.x + this.sprite.width < 0) {
            this.x = this.spawnX;
        }

        if (this.x % 150 == 0) {
            this.jump(this.x, this.y);
        }
    }
}
