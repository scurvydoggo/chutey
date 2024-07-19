import { Actor } from '../Actor'

// The max number of chutists to spawn per flight across the screen
const maxJumpsPerRun = 2;

// Have a chutist jump
type Jump = (x: number, y: number) => void

export default class Plane extends Actor {
    private readonly spawnX: number;
    private readonly jump: Jump;

    private jumpPoints: number[];

    constructor(sprite: HTMLImageElement, spawnX: number, spawnY: number, jump: Jump) {
        super(sprite, spawnX, spawnY);

        this.spawnX = spawnX;
        this.jump = jump;

        this.jumpPoints = this.generateJumpPoints();
    }

    step(): void {
        this.x -= 10; // Move quick

        // Reset the plane and generate some new points
        if (this.x + this.sprite.width < 0) {
            this.x = this.spawnX;
            this.jumpPoints = this.generateJumpPoints();
        }

        // See if we've reached a jump point (the array is sorted)
        if (this.jumpPoints.length >= 0 && this.x <= this.jumpPoints[0]) {
            this.jump(this.x, this.y);
            this.jumpPoints.splice(0, 1);
        }
    }

    // Generate a random list of X points to jump
    // TODO: Avoid generating clumps
    generateJumpPoints(): number[] {
        const halfWidth = this.sprite.width / 2;

        const num = Math.ceil(Math.random() * maxJumpsPerRun);
        const points: number[] = new Array(num);
        for (var i = 0; i < num; i++) {
            points[i] = halfWidth + Math.random() * (this.spawnX - halfWidth);
        }
        points.sort().reverse();
        return points;
    }
}
