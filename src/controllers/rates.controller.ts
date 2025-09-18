import { Request, Response } from "express"
import { DolarRateType } from "src/model/rate.types";
import { readCurrentRate, readHistoryRate } from "src/model/rates.model"

export async function getRateCurrent (req: Request, res: Response) {
    try {
        const dolarRate = await readCurrentRate();

        const { date, rate } = dolarRate[0];

        res.json({
            "date": date.toISOString().substring(0, 10),
            "rate": rate
        })
        
    } catch (error) {
        console.error("Error", error);
        
        res.status(500).json({message: "Internal Server Error"});
    }
} 

export async function getRateHistory(req: Request, res: Response) {
    try {
        const { start_date, end_date } = req.query;

        const dolarRates: DolarRateType[] = await readHistoryRate(start_date, end_date);
    

        const dolarRatesFormat = dolarRates.map(item => ({
            ...item,
            date: item.date.toISOString().substring(0, 10)
        }));
        
        res.json(dolarRatesFormat)
        
    } catch (error) {
       console.error("Error", error);

        res.status(500).json({message: "Internal Server Error"});
    }
} 