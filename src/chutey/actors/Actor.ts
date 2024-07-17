export default abstract class Actor {
    sprite: HTMLImageElement;
    x: number;
    y: number;

    constructor(sprite: HTMLImageElement, x: number, y: number) {
        this.sprite = sprite;
        this.x = x;
        this.y = y;
    }

    // Step the simulation
    abstract update(): void

    // Draw the actor
    draw(ctx: CanvasRenderingContext2D): void {
        ctx.drawImage(this.sprite, this.x, this.y);
    }
}
