import Actor from './Actor'

export default class Plane extends Actor {
    spawnX: number;
    spawnY: number;

    constructor(sprite: HTMLImageElement, spawnX: number, spawnY: number) {
        super(sprite, spawnX, spawnY);

        this.spawnX = spawnX;
        this.spawnY = spawnY;
    }

    update(): void {
        this.x--;
    }
}
