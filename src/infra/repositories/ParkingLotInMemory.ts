import { ParkingLot } from "../../core/entities/ParkingLot";
import { ParkingLotRepository } from "../../core/repositories/ParkingLotRepository";

const items: ParkingLot[] = [{
  code: "shopping",
  capacity: 100,
  openClose: 8,
  openHour: 22
}]

export class ParkingLotInMemory  implements ParkingLotRepository{
  async getParkingLot(code: string): Promise<ParkingLot> {
    const parkingLot = await items.find(item => item.code === code)
    return parkingLot
  }
}