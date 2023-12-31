import { it, expect } from 'vitest'
import ParkingLotInMemory from '../../src/infra/repositories/ParkingLotInMemory'
import { GetParkingLot } from '../../src/core/useCases/GetParkingLot'

it('Should be able get parkingLot', async () => {
  const parkingLotRepository = new ParkingLotInMemory()
  const getParkingLot = new GetParkingLot(parkingLotRepository)

  const parkingLot = await getParkingLot.execute('shopping')
  expect(parkingLot.code).toBe('shopping')
})
