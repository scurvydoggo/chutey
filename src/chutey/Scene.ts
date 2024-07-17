export default class Scene {
    canvas: HTMLCanvasElement;
    bg: HTMLImageElement;

    constructor(canvas: HTMLCanvasElement, bg: HTMLImageElement) {
        this.canvas = canvas;
        this.bg = bg;

        canvas.width = bg.width;
        canvas.height = bg.height;
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.drawImage(this.bg, 0, 0, this.bg.width, this.bg.height);
    }
}
