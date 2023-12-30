import { expect, test } from 'vitest'
import EnterParkingLot from '../../src/core/useCases/EnterParkingLot'
import ParkingLotInMemory from '../../src/infra/repositories/ParkingLotInMemory'
import { GetParkingLot } from '../../src/core/useCases/GetParkingLot'

test('Should be able enter pargking lot', async () => {
  const parkingLotRepository = new ParkingLotInMemory()

  const enterParkingLot = new EnterParkingLot(parkingLotRepository)
  const getParkingLot = new GetParkingLot(parkingLotRepository)

  const parkingLotBeforeEnter = await getParkingLot.execute('shopping')
  expect(parkingLotBeforeEnter.occupiedSpaces).toBe(0)

  await enterParkingLot.execute(
    'shopping',
    'MMM-0001',
    new Date('2023-12-01T10:00:00'),
  )

  const parkingLotAfterEnter = await getParkingLot.execute('shopping')
  expect(parkingLotAfterEnter.occupiedSpaces).toBe(1)
})

test.skip('Should be closed pargking lot', async () => {
  const parkingLotRepository = new ParkingLotInMemory()

  const enterParkingLot = new EnterParkingLot(parkingLotRepository)
  const getParkingLot = new GetParkingLot(parkingLotRepository)

  const parkingLotBeforeEnter = await getParkingLot.execute('shopping')
  expect(parkingLotBeforeEnter.occupiedSpaces).toBe(0)

  await enterParkingLot.execute(
    'shopping',
    'MMM-0001',
    new Date('2023-12-01T23:00:00'),
  )

  const parkingLotAfterEnter = await getParkingLot.execute('shopping')
  expect(parkingLotAfterEnter).rejects.toBeInstanceOf(Error)
})

test.skip('Should be full pargking lot', async () => {
  const parkingLotRepository = new ParkingLotInMemory()

  const enterParkingLot = new EnterParkingLot(parkingLotRepository)
  const getParkingLot = new GetParkingLot(parkingLotRepository)

  const parkingLotBeforeEnter = await getParkingLot.execute('shopping')
  expect(parkingLotBeforeEnter.occupiedSpaces).toBe(0)

  await enterParkingLot.execute(
    'shopping',
    'MMM-0001',
    new Date('2023-12-01T10:00:00'),
  )
  await enterParkingLot.execute(
    'shopping',
    'MMM-0002',
    new Date('2023-12-01T10:00:00'),
  )
  await enterParkingLot.execute(
    'shopping',
    'MMM-0003',
    new Date('2023-12-01T10:00:00'),
  )
  await enterParkingLot.execute(
    'shopping',
    'MMM-0004',
    new Date('2023-12-01T10:00:00'),
  )
  await enterParkingLot.execute(
    'shopping',
    'MMM-0005',
    new Date('2023-12-01T10:00:00'),
  )
  await enterParkingLot.execute(
    'shopping',
    'MMM-0006',
    new Date('2023-12-01T10:00:00'),
  )

  const parkingLotAfterEnter = await getParkingLot.execute('shopping')
  expect(parkingLotAfterEnter.isFull).rejects
})
