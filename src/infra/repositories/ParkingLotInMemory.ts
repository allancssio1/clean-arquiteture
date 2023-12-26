import ParkingLot from "../../core/entities/ParkingLot";
import { ParkingLotRepository } from "../../core/repositories/ParkingLotRepository";

export default class ParkingLotInMemory implements ParkingLotRepository{
  parkingLots = [
    new ParkingLot('shopping', 5, 8, 22)
  ]
  parkedCars = []

  async getParkingLot(code: string): Promise<ParkingLot> {
    return Promise.resolve(this.parkingLots.find(item => item.code === code)) 
  }

  async saveParkedCar(code: string, plate: string, date: Date): Promise<void> {
    this.parkedCars.push({code, plate, date})
  }
  
}