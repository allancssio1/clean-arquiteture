import Hapi from '@hapi/hapi'
import HapiAdapter from '../../adapter/HapiAdapter'
import ParkingLotController from '../../controllers/ParkingLotController'

const server = Hapi.server({
  port: 3333,
  host: 'localhost',
})

server.route({
  method: 'GET',
  path: '/parking-lot/{code}',
  handler: HapiAdapter.create(ParkingLotController.getParkingLot),
})

server.start()
