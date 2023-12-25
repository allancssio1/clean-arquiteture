import { ParkingLot } from "../core/entities/ParkingLot";

export class ParkingLotAdapter{
  static create (code: string, capacity: number, openHour: number, closeHour: number) {
    return new ParkingLot({code, capacity, openHour, closeHour})
  }
}