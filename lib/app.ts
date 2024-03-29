import * as express from "express"
import * as bodyParser from "body-parser"
import { Routes } from  "./routes/bookingRoutes"

class App {
    public app: express.Application;
    public routeBooking: Routes = new Routes();

    constructor() {
        this.app = express();
        this.config();
        this.routeBooking.routes(this.app);
    }

    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());

        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}

export default new App().app;