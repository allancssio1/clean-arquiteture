import { ParkingLot } from "../entities/ParkingLot";

export interface ParkingLotRepository {
  getParkingLot(code : string) : Promise<ParkingLot>
  saveParkedCar(code: string, plate: string, date: Date): Promise<void>
}