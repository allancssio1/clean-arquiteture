import {expect, test} from "vitest";
import EnterParkingLot from "../../src/core/useCases/EnterParkingLot";
import ParkingLotInMemory from "../../src/infra/repositories/ParkingLotInMemory";

test("Should be able enter pargking lot", async () => {
  const parkingLotRepository = new ParkingLotInMemory()

  const enterParkingLot = new EnterParkingLot(parkingLotRepository)
  const parkingLot = await enterParkingLot.execute("shopping", "MMM-0001", new Date("2023-12-01T10:00:00"))

  // expect(parkingLot.code).toBe("shopping")
})