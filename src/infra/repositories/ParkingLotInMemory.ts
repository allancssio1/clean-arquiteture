import { ParkedCar } from "../../core/entities/ParkedCar";
import { ParkingLot } from "../../core/entities/ParkingLot";
import { ParkingLotRepository } from "../../core/repositories/ParkingLotRepository";

export class ParkingLotInMemory  implements ParkingLotRepository{
  parkingLots: ParkingLot[] = [
    new ParkingLot({code: "shopping", capacity: 100, openHour: 8, closeHour: 22 })
  ]
  parkedCars: ParkedCar[] = []

  async getParkingLot(code: string): Promise<ParkingLot> {
    const parkingLot = await this.parkingLots.find(item => item.code === code)
    return parkingLot
  }

  async saveParkedCar(code: string, plate: string, date: Date): Promise<void> {
    this.parkedCars.push({code, date, plate})
  }
}