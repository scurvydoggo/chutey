import Actor from './Actor'

export default class Plane extends Actor {
    readonly spawnX: number;

    constructor(sprite: HTMLImageElement, spawnX: number, spawnY: number) {
        super(sprite, spawnX, spawnY);

        this.spawnX = spawnX;
    }

    update(): void {
        this.x--;
        if (this.x + this.sprite.width < 0) {
            this.x = this.spawnX;
        }
    }
}
