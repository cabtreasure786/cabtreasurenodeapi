"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bookingController_1 = require("../controllers/bookingController");
class Routes {
    constructor() {
        this.bookingController = new bookingController_1.BookingController();
    }
    routes(app) {
        //call for server running or not
        app.route('/')
            .get((req, res) => {
            res.status(200).send('Cab Treasure is listening your request!!!');
        });
        //add a new booking
        app.route('/addbooking').post(this.bookingController.addBooking);
        // update a specific booking
        app.route('/updatebooking/:bookingId').put(this.bookingController.updateBooking);
        // delete a specific booking
        app.route('/deletebooking/:bookingId').delete(this.bookingController.deleteBooking);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=bookingRoutes.js.map