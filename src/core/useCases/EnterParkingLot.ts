import { ParkingLot } from "../entities/ParkingLot";
import { ParkingLotRepository } from "../repositories/ParkingLotRepository";

export class EnterParkingLot {
  parkingLotRepository: ParkingLotRepository

  constructor(parkingLotRepository: ParkingLotRepository) {
    this.parkingLotRepository = parkingLotRepository

  } 

  async execute(code: string) {
    const parkingLot = await this.parkingLotRepository.getParkingLot(code)
    return parkingLot
  }
}