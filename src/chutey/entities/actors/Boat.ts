import Assets from '../../Assets';
import { Actor } from '../Actor'

// Movement properties
const boatAccel: number = 3;
const boatMaxSpeed: number = 15;

// Movement deadzone as the number of pixels from the center of the boat
const mouseDeadzone: number = 20;

export default class Boat extends Actor {
    private speed = 0;
    private mouseX = 0;

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

    step(): void {
        super.step();

        const boatX = this.center().x;
        if (this.mouseX < boatX - mouseDeadzone) {
            this.speed = Math.max(this.speed - boatAccel, -boatMaxSpeed);
            this.x += this.speed;
        } else if (this.mouseX > boatX + mouseDeadzone) {
            this.speed = Math.min(this.speed + boatAccel, boatMaxSpeed);
            this.x += this.speed;
        }
    }

    mouseMoved(e: MouseEventInit): void {
        const canvas = this.assets.canvas;
        const rect = canvas.getBoundingClientRect();

        const scaleX = canvas.width / rect.width;

        this.mouseX = (e.clientX! - rect.left) * scaleX;
    }
}
