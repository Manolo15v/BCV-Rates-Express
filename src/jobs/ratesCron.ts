import { CronJob } from "cron";
import { crearteRate } from "src/model/rates.model";
import scrapeRate from "src/utils/scrapeRate";

export const ratesJob = CronJob.from({
	cronTime: '00 1 16 * * 1-5', // Este trabajo se ejecuta de lunes a viernes a las 4:01 PM
	onTick: saveRate,
	start: false,
	timeZone: 'America/Caracas'
});

async function saveRate() {
	try {
		const dolarRate = await scrapeRate();
		await crearteRate(dolarRate);
		
	} catch (error) {
		console.error("Error", error);
	}
}