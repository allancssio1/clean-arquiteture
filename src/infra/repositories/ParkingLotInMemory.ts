import { ParkingLotAdapter } from "../../adapter/PartkingLotAdapter";
import { ParkedCar } from "../../core/entities/ParkedCar";
import { ParkingLot, ParkingLotProps } from "../../core/entities/ParkingLot";
import { ParkingLotRepository } from "../../core/repositories/ParkingLotRepository";

export class ParkingLotInMemory  implements ParkingLotRepository{
  parkingLots = [
    {
      code: "shopping",
      capacity: 100,
      openHour: 8,
      closeHour: 22,
      occupiedSpaces: 0,
    }
  ]
  parkedCars: ParkedCar[] = []

  async getParkingLot(code: string) {
    const parkingLotData = await this.parkingLots.find(item => item.code === code)
    const parkingLot = ParkingLotAdapter.create(parkingLotData.code, parkingLotData.capacity, parkingLotData.closeHour, parkingLotData.closeHour, parkingLotData.occupiedSpaces)
    parkingLot.occupiedSpaces = this.parkedCars.length
    return Promise.resolve(parkingLot)
  }

  async saveParkedCar(code: string, plate: string, date: Date){
    this.parkedCars.push({code, date, plate})
  }
}