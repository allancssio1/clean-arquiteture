import {test} from "vitest"
import { EnterParkingLot } from "../../src/core/useCases/EnterParkingLot"
import { ParkingLotInMemory } from "../../src/infra/repositories/ParkingLotInMemory"

  test("Should be to able create enter parking lot with car", async () => {
    const parkingLotInMemory = new ParkingLotInMemory()
    const enterParckingLot = new EnterParkingLot(parkingLotInMemory)
    await enterParckingLot.execute("shopping", "SMN-0001", new Date("2023-12-20T10:00:00"))

  })