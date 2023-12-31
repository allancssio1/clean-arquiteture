import PartkingLotAdapter from '../../adapter/PartkingLotAdapter'
import ParkingLot from '../../core/entities/ParkingLot'
import { ParkingLotRepository } from '../../core/repositories/ParkingLotRepository'

export default class ParkingLotInMemory implements ParkingLotRepository {
  parkingLots = [
    {
      code: 'shopping',
      capacity: 5,
      open_hour: 8,
      close_hour: 22,
    },
  ]
  parkedCars = []

  async getParkingLot(code: string): Promise<ParkingLot> {
    const parkingLotData = this.parkingLots.find((item) => item.code === code)

    const occupiedSpaces = this.parkedCars.length

    const parkingLot = PartkingLotAdapter.create(
      parkingLotData.code,
      parkingLotData.capacity,
      parkingLotData.open_hour,
      parkingLotData.close_hour,
      occupiedSpaces,
    )

    return Promise.resolve(parkingLot)
  }

  async saveParkedCar(code: string, plate: string, date: Date): Promise<void> {
    this.parkedCars.push({ code, plate, date })
  }
}
