import IParkedCarRepository from "./IParkedCarRepository";
import ParkedCar from "./ParkedCar";

export default class Checkin {
    constructor (readonly parkedCarRepository: IParkedCarRepository) {

    }

    async execute(input: Input): Promise<void> {
        await this.parkedCarRepository.save(new ParkedCar(input.plate, new Date(input.checkinDate)));
    }
}

type Input = {
    plate: string,
    checkinDate: string
}