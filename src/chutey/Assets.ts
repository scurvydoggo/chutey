// Get assets without exposing Document itself; encapsulation and testability
export default class Assets {
    private document: Document;

    constructor(document: Document) {
        this.document = document;
    }

    image(id: string): HTMLImageElement {
        return this.document.getElementById(id) as HTMLImageElement;
    }
}
