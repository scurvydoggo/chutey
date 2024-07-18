import { Actor } from './Actor'

export default class Boat extends Actor {
    constructor(sprite: HTMLImageElement, x: number, y: number) {
        super(sprite, x, y);
    }
}
