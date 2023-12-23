import { ParkingLot } from "../entities/ParkingLot";

export interface ParkingLotRepository {
  getParkingLot(code : string) : Promise<ParkingLot>
}