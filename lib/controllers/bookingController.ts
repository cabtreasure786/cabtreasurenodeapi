import { Request, Response, response } from 'express';

export class BookingController {
    public addBooking(req: Request, res: Response) {
        //let newBooking = this.mapClientBookingToCabTreausreBooking(req.body);

        res.status(200).send('Add request successfulll!!!');
    }

    public updateBooking(req: Request, res: Response) {
        //let newBooking = this.mapClientBookingToCabTreausreBooking(req.body);

        res.status(200).send('Update request successfulll!!!');
    }

    public deleteBooking(req: Request, res: Response) {
        res.status(200).send('Delete request successfulll!!!');
    }

    private mapClientBookingToCabTreausreBooking(bookingBO) {
		//mapping of object from client to cab treasure
    }
}