// Get assets without exposing Document itself; encapsulation and testability
export default class Assets {
    private readonly document: Document;

    constructor(document: Document) {
        this.document = document;
    }

    image(id: string): HTMLImageElement {
        return this.document.getElementById(id) as HTMLImageElement;
    }
}
