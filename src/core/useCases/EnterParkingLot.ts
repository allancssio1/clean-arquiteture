import { ParkedCar } from "../entities/ParkedCar";
import { ParkingLotRepository } from "../repositories/ParkingLotRepository";

export class EnterParkingLot {
  parkingLotRepository: ParkingLotRepository

  constructor(parkingLotRepository: ParkingLotRepository) {
    this.parkingLotRepository = parkingLotRepository

  } 

  async execute(code: string, plate: string, date: Date) {
    const parkingLot = await this.parkingLotRepository.getParkingLot(code)
    const parkedCar = new ParkedCar(code, plate, date)

    if(!parkingLot.isOpen(parkedCar.date)) {
      throw new Error('the parking lot is closed.')
    }

    this.parkingLotRepository.saveParkedCar(code, plate, date)

    return parkingLot
  }
}