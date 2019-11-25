"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BookingController {
    addBooking(req, res) {
        //let newBooking = this.mapClientBookingToCabTreausreBooking(req.body);
        res.status(200).send('Add request successfulll!!!');
    }
    updateBooking(req, res) {
        //let newBooking = this.mapClientBookingToCabTreausreBooking(req.body);
        res.status(200).send('Update request successfulll!!!');
    }
    deleteBooking(req, res) {
        res.status(200).send('Delete request successfulll!!!');
    }
    mapClientBookingToCabTreausreBooking(bookingBO) {
        //mapping of object from client to cab treasure
    }
}
exports.BookingController = BookingController;
//# sourceMappingURL=bookingController.js.map