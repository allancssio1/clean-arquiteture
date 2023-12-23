import {expect, test} from "vitest"
import { EnterParkingLot } from "../src/core/useCases/EnterParkingLot"
import { ParkingLotInMemory } from "../src/infra/repositories/ParkingLotInMemory"

  test("Should be to able create enter parking lot with car", async () => {
    const parkingLotInMemory = new ParkingLotInMemory()
    const enterParckingLot = new EnterParkingLot(parkingLotInMemory)
    const {props} = enterParckingLot.execute()

    expect(props.code).toBe("shopping")
  })