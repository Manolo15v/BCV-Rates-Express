import * as cheerio from "cheerio";
import { getHTML } from "./getHTML";
import type { DolarRateType } from "src/model/rate.types";

async function scrapeRate():Promise<DolarRateType> {
    try {
        const bcvHTML: string = await getHTML("https://www.bcv.org.ve/");
        const $ = cheerio.load(bcvHTML);

        const date:string = $("[property=dc:date]")[0].attribs.content;
        const rate:string = $("#dolar  strong").text().trim();

        const dolarRate:DolarRateType = {
            date: new Date(date),
            rate: parseFloat(rate)
        }

        return dolarRate;
        
    } catch (error) {
        throw(error);
    }
}



export default scrapeRate;