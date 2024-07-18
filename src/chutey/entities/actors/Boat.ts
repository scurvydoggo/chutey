import Assets from '../../Assets';
import { Actor } from '../Actor'

export default class Boat extends Actor {
    private readonly assets: Assets;   
    private readonly onMouseMove: EventListener;   

    constructor(assets: Assets, sprite: HTMLImageElement, x: number, y: number) {
        super(sprite, x, y);

        this.assets = assets;
        this.onMouseMove = e => this.mouseMoved(e);
        this.assets.canvas.addEventListener("mousemove", this.onMouseMove);
    }

    finalize(): void {
        this.assets.canvas.removeEventListener("mousemove", this.onMouseMove);
    }

    mouseMoved(e: Event): void {
    }
}
