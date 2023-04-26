import IParkedCarRepository from "./IParkedCarRepository";

export default class Checkout {
    constructor(readonly parkedCarRepository: IParkedCarRepository) {}

    async execute(input: Input): Promise<Output> {

        const parkedCar = await this.parkedCarRepository.get(input.plate);

        parkedCar.checkout(input.checkoutDate);

        await this.parkedCarRepository.update(parkedCar);
        
        return {
            price: parkedCar.price,
            period: parkedCar.diff
        };
    }
}

type Input = {
    plate: string,
    checkoutDate: string
};

type Output = {
    price?: number,
    period?: number
};