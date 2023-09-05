import { housesService } from "../services/HousesService.js";
import BaseController from "../utils/BaseController.js";
import { logger } from "../utils/Logger.js";

export class HouseController extends BaseController {
    constructor() {
        super('api/houses')
        this.router
            .post('', this.createHouse)
            .get('', this.getHouses)
            .delete('/:houseId', this.deleteHouse)
            .put('/:houseId', this.updateHouse)
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

    async deleteHouse(request, response, next) {
        try {
            logger.log(request)
            const message = await housesService.deleteHouse(request.params.houseId)
            response.send(message)
        } catch (error) {
            next(error)
        }
    }

    async updateHouse(request, response, next) {
        try {
            logger.log(request)
            const updatedHouse = await housesService.updateHouse(request.params.houseId, request.body)
            response.send(updatedHouse)
        } catch (error) {
            next(error)
        }
    }

}