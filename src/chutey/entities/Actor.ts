import { Scenery } from "./Scenery";

export abstract class Actor extends Scenery {
    // Step the simulation
    step(): void {
    }

    // Determine the distance between actor midpoints
    distanceTo(other: Actor): number {
        const us = this.center();
        const them = other.center();

        return Math.hypot(us.x - them.x, us.y - them.y);
    }
}
