import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

export default winston.createLogger({
    level: "info",
    format: winston.format.combine(
        winston.format.timestamp({
            format: "DD-MM-YYYY::HH:mm:ss",
        }),
        winston.format.json()
    ),
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.printf(
                    (info) =>
                        `[${info.timestamp}] [${info.level}]: [${info.message}]`
                )
            ),
        }),
        // new winston.transports.File({ filename: 'combined.log' })
        new DailyRotateFile({
            filename: `./logs/%DATE%.log`,
            maxSize: "1g",
            // maxDays: "3d",
            zippedArchive: true,
            datePattern: "DD-MM-YYYY",
        }),
    ],
});
