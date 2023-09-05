import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class HousesService {
    constructor() {

    }

    async createHouse(houseData) {
        const house = await dbContext.Houses.create(houseData)
        return house
    }
    async getHouses() {
        const houses = await dbContext.Houses.find()
        return houses
    }

    async deleteHouse(houseId) {
        const houseToRemove = await dbContext.Houses.findById(houseId)
        if (!houseToRemove) {
            throw new BadRequest("no house ad the id " + houseId)
        }
        await houseToRemove.remove()
        return `removed the ${houseToRemove}`
    }
}

export const housesService = new HousesService()