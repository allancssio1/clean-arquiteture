import {expect, test} from "vitest"
import { EnterParkingLot } from "../src/core/useCases/EnterParkingLot"
import { ParkingLotInMemory } from "../src/infra/repositories/ParkingLotInMemory"

  test("Should be to able create enter parking lot with car", async () => {
    const parkingLotInMemory = new ParkingLotInMemory()
    const enterParckingLot = new EnterParkingLot(parkingLotInMemory)
    const parkingLot = await enterParckingLot.execute("shopping")

    expect(parkingLot.code).toBe("shopping")
  })