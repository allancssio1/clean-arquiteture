type ParkingLotProps =  {
  code: string
  capacity: number
  openHour: number
  openClose: number
}

export class ParkingLot {
  props: ParkingLotProps
  constructor(props: ParkingLotProps) {
    this.props = props

  }
}