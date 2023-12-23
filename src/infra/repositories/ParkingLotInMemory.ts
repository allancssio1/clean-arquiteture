import { ParkingLot } from "../../core/entities/ParkingLot";
import { ParkingLotRepository } from "../../core/repositories/ParkingLotRepository";

const items: ParkingLot[] = []

export class ParkingLotInMemory  implements ParkingLotRepository{
  async getParkingLot(code: string): Promise<ParkingLot> {
    const parkingLot = await items.find(item => item.props.code === code)
    return parkingLot
  }
}