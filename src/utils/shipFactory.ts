import { GRID_SIZE } from "./rules";
import { ShipInterface } from "./shipFactory.d";

const Ship = ({ type }: { type: string }): ShipInterface => {
    let size = 0;
    switch (type) {
        case "sub":
            size = 3;
            break;
        case "battleship":
            size = 5;
            break;
        case "cruiser":
            size = 3;
            break;
        case "carrier":
            size = 4;
            break;
        default:
            size = 0;
            break;
    }

    const position = new Array(size);

    function place(posX: number, posY: number, angle: number) {
        if (!size) {
            return console.error("Cannot determine ship placement!");
        }

        for (let i = 0; i < size; i++) {
            position[i] =
                angle === 90
                    ? posY * GRID_SIZE + posX + i
                    : posY * GRID_SIZE + posX + i * GRID_SIZE;
        }
    }

    function hit(posX: number, posY: number) {
        return posX + posY;
    }

    return { position, place, size, hit };
};
export { Ship };
