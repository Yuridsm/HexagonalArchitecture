import Checkin from "../src/Checkin";
import Checkout from "../src/Checkout";
import GetParkedCars from "../src/GetParkedCars";
import IParkedCarRepository from "../src/IParkedCarRepository";
import ParkedCarRepository from "../src/ParkedCarRepository";
import IConnection from "../src/IConnection";
import PostgreSQLAdapter from "../src/PostgreSQLAdapter";

test("Deve fazer um checkin", async function () {
    const connection: IConnection = new PostgreSQLAdapter();
    const parkedCarRepository: IParkedCarRepository = new ParkedCarRepository(connection);
    // const parkedCarRepository: IParkedCarRepository = new ParkedCarInMemoryRepository();

    const checkin = new Checkin(parkedCarRepository);
    const inputCheckin = {
        plate: "AAA-9999",
        checkinDate: "2023-04-24T10:00:00-03:00"
    };

    await checkin.execute(inputCheckin);

    const getParkedCars = new GetParkedCars(parkedCarRepository);
    const parkedCars = await getParkedCars.execute();
    expect(parkedCars).toHaveLength(1);

    const inputCheckout = {
        plate: "AAA-9999",
        checkoutDate: "2023-04-24T12:00:00-03:00"
    };

    const checkout = new Checkout(parkedCarRepository);
    const ticket = await checkout.execute(inputCheckout);
    expect(ticket.period).toBe(2);
    expect(ticket.price).toBe(20);

    await connection.close();
})