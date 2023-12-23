import { ParkingLot } from "../entities/ParkingLot";
import { ParkingLotRepository } from "../repositories/ParkingLotRepository";

export class EnterParkingLot {
  parkingLotRepository: ParkingLotRepository

  constructor(parkingLotRepository: ParkingLotRepository) {
    this.parkingLotRepository = parkingLotRepository
  }

  execute() {
    const data = {
      capacity : 100,
      code : "shopping",
      openClose : 8,     
      openHour : 22,     
    }
        
    const parkingLot = new ParkingLot(data)
    return parkingLot
  }
}