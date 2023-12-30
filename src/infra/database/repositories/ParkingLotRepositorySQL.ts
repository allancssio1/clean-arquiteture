import PartkingLotAdapter from '../../../adapter/PartkingLotAdapter'
import ParkingLot from '../../../core/entities/ParkingLot'
import { ParkingLotRepository } from '../../../core/repositories/ParkingLotRepository'
import db from '../database'

export default class ParkingLotRepositorySQL implements ParkingLotRepository {
  async getParkingLot(code: string): Promise<ParkingLot> {
    const parkingLot = await db.oneOrNone(
      'select * from example.parking_log where code = $1',
      [code],
    )
    return PartkingLotAdapter.create(
      parkingLot.code,
      parkingLot.capacity,
      parkingLot.open_Hour,
      parkingLot.close_Hour,
    )
  }
  saveParkedCar(code: string, plate: string, date: Date): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
