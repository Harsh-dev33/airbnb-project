import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/errors/app.error";

export const appErrorHandler = (err: AppError, req: Request, res: Response, next: NextFunction) => {
    console.log(err);

    if (!res.headersSent) {
        res.status(err.statusCode || 500).json({
            success: false,
            message: err.message || "An error occurred"
        });
    }
}

export const genericErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(err);

    if (!res.headersSent) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}