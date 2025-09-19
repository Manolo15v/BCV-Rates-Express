import { Request, Response, NextFunction } from 'express';

const isValidDate = (dateStr: any): boolean => {
    if (typeof dateStr !== 'string') return false

    const regex = /^\d{4}-\d{2}-\d{2}$/;

    if (!regex.test(dateStr)) return false;

    const date = new Date(dateStr);

    return !isNaN(date.getTime());
};

export default function dateValidator ( req: Request, res: Response, next: NextFunction) {
    const { start_date, end_date } = req.query;

    if (start_date && !isValidDate(start_date)) {
        res.status(400).json({ message: 'Invalid start_date format. Use YYYY-MM-DD.' });
    }

    if (end_date && !isValidDate(end_date)) {
        res.status(400).json({ message: 'Invalid end_date format. Use YYYY-MM-DD.' });
    }

    next();
};