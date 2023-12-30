import ParkingLot from '../core/entities/ParkingLot'

export default class PartkingLotAdapter {
  static create(
    code: string,
    capacity: number,
    openHour: number,
    closeHour: number,
    occupiedSpaces: number,
  ) {
    return new ParkingLot(code, capacity, openHour, closeHour, occupiedSpaces)
  }
}
