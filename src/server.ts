import express, { json } from "express";
import cors from "cors";
import morgan from "morgan";

import { ratesJob } from "./jobs/ratesCron";
import ratesRouter from "./routes/rates.routes";
import docsRouter from "./routes/docs.routes";
import notFound from "./middlewares/notFound";


const app = express();

app.use(json());
app.use(cors());
app.use(morgan("dev"));

ratesJob.start();

app.use("/api/rates/", ratesRouter);
app.use("/docs/", docsRouter);

app.use(notFound);

app.get("/" , (req, res) => {
    res.json({ message: "Rates API is working"})
})

app.listen(3000, () => {
    console.log(`Listening in http://localhost:3000`)
    console.log(`API Documentation available at http://localhost:3000/docs`);
});
