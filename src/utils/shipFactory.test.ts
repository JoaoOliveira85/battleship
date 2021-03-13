import { Ship } from "./shipFactory";
import { ShipInterface } from "./shipFactory.d";

let testCarrier: ShipInterface;

beforeEach(() => {
    testCarrier = Ship({ type: "carrier" });
    testCarrier.place(2, 5, 180);
});

test("shipFactory creates carrier", () => {
    expect(testCarrier.size).toBe(4);
});

test("carrier position is correct", () => {
    expect(testCarrier.position).toEqual([52, 62, 72, 82]);
});

//TODO: Test ship placement out of canvas;
//TODO: Test ship placement on top of other ship;
//TODO: Test ship takes hit;
//TODO: Test ship sinks;

export {};
