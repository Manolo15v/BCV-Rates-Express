import axios from "axios";
import https from "https";

const httpsAgent = new https.Agent({  
  rejectUnauthorized: false
});

export async function getHTML (url:string): Promise<string> {
	try {
		const res = await axios.get(url,   {
			httpsAgent: httpsAgent,
      		headers: {
        	'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      		}
		});
	
        return res.data;
	
	} catch (error) {
		throw new Error(`Failed to get HTML from url: ${error instanceof Error ? error.message : 'Unknown error'}`);
	}
}