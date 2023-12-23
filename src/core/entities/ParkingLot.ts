interface ParkingLotProps  {
  code: string
  capacity: number
  openHour: number
  openClose: number
}

export class ParkingLot {
  code: string
  capacity: number
  openHour: number
  openClose: number
  
  constructor({code, capacity, openHour, openClose}: ParkingLotProps) {
    this.code = code
    this.capacity = capacity
    this.openHour = openHour
    this.openClose = openClose
  }
}