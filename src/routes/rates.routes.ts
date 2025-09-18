import { Router } from "express";
import { getRateCurrent, getRateHistory} from "../controllers/rates.controller"

const ratesRouter = Router();

ratesRouter.get("/current", getRateCurrent);
ratesRouter.get("/history", getRateHistory);


export default ratesRouter;