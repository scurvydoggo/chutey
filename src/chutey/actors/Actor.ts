export type Point = {
    x: number
    y: number
}

export abstract class Actor {
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

    // Determine the distance between actor midpoints
    distanceTo(other: Actor): number {
        const us = this.center();
        const them = other.center();

        return Math.hypot(us.x - them.x, us.y - them.y);
    }

    // The center coordinates of the sprite
    center(): Point {
        return {
            x: this.x + this.sprite.width / 2,
            y: this.y + this.sprite.height / 2
        };
    }
}
