import express, { Router } from 'express'
import ExpressAdapter from '../../adapter/ExpressAdapter'
import ParkingLotController from '../../controllers/ParkingLotController'

export const app = express()

const routes = Router()

app.use(routes)

app.get(
  '/parking-lot/:code',
  ExpressAdapter.create(ParkingLotController.getParkingLot),
)

app.listen(3333, () => console.log('serving'))
