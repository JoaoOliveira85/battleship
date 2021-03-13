export interface ShipInterface {
    size: number;
    position: number[];
    place: (posX: number, posY: number, angle: number) => void;
    hit: (posX: number, posY: number) => number;
}
