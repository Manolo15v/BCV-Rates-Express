import { pool } from "src/config/db";
import type { DolarRateType } from "./rate.types";
import { RowDataPacket } from "mysql2";

export async function readCurrentRate(): Promise<DolarRateType[]> {
    try {
        const [rows] = await pool.query<RowDataPacket[]> (`SELECT date, rate FROM dolar_rates ORDER BY rate_id DESC LIMIT 1`);

        const typedRows = rows as DolarRateType[]

        return typedRows;
        
    } catch (error) {
        throw new Error(`Failed to read dollar rates: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}

export async function readHistoryRate(startDate?: any, endDate?: any): Promise<DolarRateType[]> {
    try {
        let query = 'SELECT date, rate FROM dolar_rates';
        const params: any[] = [];
        
        if (startDate && endDate) {
            query += ' WHERE date BETWEEN ? AND ?';
            params.push(new Date(startDate), new Date(endDate));
        } else if (startDate) {
            query += ' WHERE date >= ?';
            params.push(new Date(startDate));
        } else if (endDate) {
            query += ' WHERE date <= ?';
            params.push(new Date(endDate));
        }
        
        query += ' ORDER BY date DESC';
        
        const [rows] = await pool.query<RowDataPacket[]>(query, params);

        const typedRows = rows as DolarRateType[]

        return typedRows;

    } catch (error) {
        throw new Error(`Failed to read dollar rates: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}

export async function crearteRate(dolarRate: DolarRateType): Promise<void> {
    try {
        const { date, rate } = dolarRate;
        
        await pool.query<RowDataPacket[]>(`
            INSERT INTO dolar_rates (date, rate) 
            VALUES (?, ?)
            `,
            [date, rate]
        );

    } catch (error) {
        throw new Error(`Failed to write dollar rate: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}