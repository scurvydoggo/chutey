export type Point = { x: number, y: number }

export abstract class Scenery {
    readonly sprite: HTMLImageElement;
    x: number;
    y: number;

    constructor(sprite: HTMLImageElement, x: number, y: number) {
        this.sprite = sprite;
        this.x = x;
        this.y = y;
    }

    // Draw the sprite
    draw(ctx: CanvasRenderingContext2D): void {
        ctx.drawImage(this.sprite, this.x, this.y);
    }

    // The center coordinates of the sprite
    center(): Point {
        return {
            x: this.x + this.sprite.width / 2,
            y: this.y + this.sprite.height / 2
        };
    }
}
