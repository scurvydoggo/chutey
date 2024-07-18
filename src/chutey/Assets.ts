// Get assets without exposing Document itself; encapsulation and testability
export default class Assets {
    // Be careful using this; event handlers can lead to memory leaks
    readonly canvas: HTMLCanvasElement;

    private readonly document: Document;

    constructor(document: Document) {
        this.document = document;
        this.canvas = document.getElementById("game-container") as HTMLCanvasElement;
    }

    image(id: string): HTMLImageElement {
        return this.document.getElementById(id) as HTMLImageElement;
    }
}
