interface ParkingLotProps  {
  code: string
  capacity: number
  openHour: number
  closeHour: number
}

export class ParkingLot {
  code: string
  capacity: number
  openHour: number
  closeHour: number
  
  constructor({code, capacity, openHour, closeHour}: ParkingLotProps) {
    this.code = code
    this.capacity = capacity
    this.openHour = openHour
    this.closeHour = closeHour
  }

  isOpen(date: Date) {
    const hour = date.getHours()
    return (hour >= this.openHour && hour <= this.closeHour)
  }
}