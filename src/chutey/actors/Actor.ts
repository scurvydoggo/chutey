import Scene from "../Scene";

export default abstract class Actor {
    readonly sprite: HTMLImageElement;

    x: number;
    y: number;

    constructor(sprite: HTMLImageElement, x: number, y: number) {
        this.sprite = sprite;
        this.x = x;
        this.y = y;
    }

    // Step the simulation
    update(): void {
    }

    // Draw the actor
    draw(ctx: CanvasRenderingContext2D): void {
        ctx.drawImage(this.sprite, this.x, this.y);
    }
}
