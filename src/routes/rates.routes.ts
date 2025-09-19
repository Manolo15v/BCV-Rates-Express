import { Router } from "express";
import { getRateCurrent, getRateHistory} from "../controllers/rates.controller"
import dateValidator from "src/middlewares/dateValidator";

const ratesRouter = Router();

ratesRouter.get("/current", getRateCurrent);
ratesRouter.get("/history",  dateValidator, getRateHistory);


export default ratesRouter;