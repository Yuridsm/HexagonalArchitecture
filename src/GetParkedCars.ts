import IParkedCarRepository from "./IParkedCarRepository";

export default class GetParkedCars {
    constructor(readonly parkedCarRepository: IParkedCarRepository) {}

    async execute(): Promise<Output[]> {

        const parkedCars = await this.parkedCarRepository.list();

        return parkedCars;
    }
}

type Output = {
    plate: string,
    checkinDate: Date
};