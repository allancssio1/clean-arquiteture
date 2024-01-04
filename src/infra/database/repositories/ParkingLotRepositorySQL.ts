import PartkingLotAdapter from '../../../adapter/PartkingLotAdapter'
import ParkingLot from '../../../core/entities/ParkingLot'
import { ParkingLotRepository } from '../../../core/repositories/ParkingLotRepository'
import db from '../database'

export default class ParkingLotRepositorySQL implements ParkingLotRepository {
  async getParkingLot(code: string): Promise<ParkingLot> {
    const parkingLot = await db.oneOrNone(
      'select *, (select count(*) from parked_car pc where pc.code = pl.code) :: int from parking_lot pl where pl.code = $1',
      [code],
    )

    return PartkingLotAdapter.create(
      parkingLot.code,
      parkingLot.capacity,
      parkingLot.open_hour,
      parkingLot.close_hour,
      parkingLot.count,
    )
  }

  async saveParkedCar(code: string, plate: string, date: Date): Promise<void> {
    await db.none(
      `insert into parked_car (code, plate, date) values ($1, $2, $3)`,
      [code, plate, date],
    )
  }
}
