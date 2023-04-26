import express, {Request, Response } from "express";
import Checkin from "./Checkin";
import GetParkedCars from "./GetParkedCars";
import Checkout from "./Checkout";
import IParkedCarRepository from "./IParkedCarRepository";
import ParkedCarRepository from "./ParkedCarRepository";

const app = express();

app.use(express.json());

const parkedCarRepository: IParkedCarRepository = new ParkedCarRepository();

app.post("/checkin", async function(request: Request, response: Response) {
    const checkin = new Checkin(parkedCarRepository);

    await checkin.execute({
        plate: request.body.plate,
        checkinDate: request.body.checkinDate
    });
    
    response.end();
});

app.get("/parked_cars", async function(request: Request, response: Response) {
    const getParkedCars = new GetParkedCars(parkedCarRepository);

    const parkedCars = await getParkedCars.execute();

    response.json(parkedCars);
});

app.post("/checkout", async function(request: Request, response: Response) {
    const checkout = new Checkout(parkedCarRepository);

    const ticket = await checkout.execute({
        plate: request.body.plate,
        checkoutDate: request.body.checkoutDate
    });

    response.json(ticket);
});

app.listen(3000);
