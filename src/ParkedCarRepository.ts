import IParkedCarRepository from "./IParkedCarRepository";
import ParkedCar from "./ParkedCar";
import pgp from "pg-promise";


export default class ParkedCarRepository implements IParkedCarRepository {

    async save(parkedCar: ParkedCar): Promise<void> {
        const connection = pgp()("postgres://postgres:fagote123@localhost:5432/hexagonal_architecture_db")

        await connection.query("insert into yurischeme.parked_car (plate, checkin_date) values ($1, $2)", [parkedCar.plate, parkedCar.checkinDate]);
    
        await connection.$pool.end();
    }

    async update(parkedCar: ParkedCar): Promise<void> {
        const connection = pgp()("postgres://postgres:fagote123@localhost:5432/hexagonal_architecture_db")
    
        await connection.query("update yurischeme.parked_car set checkout_date = now() where plate = $1", [parkedCar.plate]);

        await connection.$pool.end();
    }

    async list(): Promise<ParkedCar[]> {
        const connection = pgp()("postgres://postgres:fagote123@localhost:5432/hexagonal_architecture_db")

        const parkedCarsData = await connection.query("select * from yurischeme.parked_car where checkout_date is null", []);

        await connection.$pool.end();

        const parkedCars: ParkedCar[] = [];

        for (const parkedCarData of parkedCarsData) {
            parkedCars.push(new ParkedCar(parkedCarData.plate, new Date(parkedCarData.checkin_date)));
        }

        return parkedCars;
    }

    async get(plate: string): Promise<ParkedCar> {
        const connection = pgp()("postgres://postgres:fagote123@localhost:5432/hexagonal_architecture_db")
    
        const parkedCarData = await connection.one("select * from yurischeme.parked_car where plate = $1 and checkout_date is null", [plate]);
        
        await connection.$pool.end();

        const parkedCar = new ParkedCar(parkedCarData.plate, new Date(parkedCarData.checkin_date));

        return parkedCar;
    }

}
