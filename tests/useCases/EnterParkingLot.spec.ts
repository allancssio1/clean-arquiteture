import {expect, test} from "vitest"
import { EnterParkingLot } from "../../src/core/useCases/EnterParkingLot"
import { ParkingLotInMemory } from "../../src/infra/repositories/ParkingLotInMemory"
import { GetParkingLot } from "../../src/core/useCases/GetParkingLot"

  test("Should be to able create enter parking lot with car", async () => {
    const code = "shopping"
    const parkingLotInMemory = new ParkingLotInMemory()
    const enterParckingLot = new EnterParkingLot(parkingLotInMemory)
    const getParkingLot = new GetParkingLot(parkingLotInMemory)
    const parkingLotBeforeEnter = await getParkingLot.execute(code)
    expect(parkingLotBeforeEnter.occupiedSpaces).toBe(0)

    await enterParckingLot.execute(code, "SMN-0001", new Date("2023-12-20T10:00:00"))
    const parkingLotafterEnter = await getParkingLot.execute(code)
    expect(parkingLotafterEnter.occupiedSpaces).toBe(1)
  })