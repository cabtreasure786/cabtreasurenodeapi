import { Request, Response } from "express"
import { BookingController } from "../controllers/bookingController";

export class Routes {
    public bookingController: BookingController = new BookingController();

    public routes(app): void {
		//call for server running or not
        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send('Cab Treasure is listening your request!!!');
            })

		//add a new booking
        app.route('/addbooking').post(this.bookingController.addBooking);

		// update a specific booking
        app.route('/updatebooking/:bookingId').put(this.bookingController.updateBooking)

		// delete a specific booking
        app.route('/deletebooking/:bookingId').delete(this.bookingController.deleteBooking)
    }
}