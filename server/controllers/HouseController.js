import { housesService } from "../services/HousesService.js";
import BaseController from "../utils/BaseController.js";
import { logger } from "../utils/Logger.js";

export class HouseController extends BaseController {
    constructor() {
        super('api/houses')
        this.router
            .post('', this.createHouse)
            .get('', this.getHouses)
    }

    async createHouse(request, response, next) {
        try {
            logger.log('creating house', request.body)
            const house = await housesService.createHouse(request.body)
        } catch (error) {
            next(error)
        }
    }
    async getHouses(request, response, next) {
        try {
            logger.log(request)
            const houses = await housesService.getHouses()
            response.send(houses)
        } catch (error) {
            next(error)
        }
    }

}