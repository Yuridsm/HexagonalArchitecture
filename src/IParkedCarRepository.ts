import ParkedCar from "./ParkedCar";

export default interface IParkedCarRepository {
    save (parkedCar: ParkedCar): Promise<void>;
    update (parkedCar: ParkedCar): Promise<void>;
    list (): Promise<ParkedCar[]>;
    get (plate: string): Promise<ParkedCar>;
}
