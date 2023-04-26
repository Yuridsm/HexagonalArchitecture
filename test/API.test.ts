import axios from "axios";

/**
 * Tests must be FIRST
 * 
 * F - Fast
 * I - Independent
 * R - Repeatable
 * S - Self-Validating
 * T - Timely
*/

test.skip("Deve executar o checkin de um carro", async function () {
    await axios({
        url: "http://localhost:3000/checkin",
        method: "post",
        data: {
            plate: "AAA-9999",
            checkinDate: "2023-04-24T10:00:00-03:00"
        }
    });

    const responseGetParkedCars = await axios({
        url: "http://localhost:3000/parked_cars",
        method: "get",
    });

    const parkedCars = responseGetParkedCars.data;

    expect(parkedCars).toHaveLength(1);

    const responseCheckout = await axios({
        url: "http://localhost:3000/checkout",
        method: "post",
        data: {
            plate: "AAA-9999",
            checkoutDate: "2023-04-24T13:00:00-03:00"
        }
    });

    const ticket = responseCheckout.data;

    expect(ticket.period).toBe(3);
    expect(ticket.price).toBe(30);
});
