"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
const winston_daily_rotate_file_1 = __importDefault(require("winston-daily-rotate-file"));
exports.default = winston_1.default.createLogger({
    level: "info",
    format: winston_1.default.format.combine(winston_1.default.format.timestamp({
        format: "DD-MM-YYYY::HH:mm:ss",
    }), winston_1.default.format.json()),
    transports: [
        new winston_1.default.transports.Console({
            format: winston_1.default.format.combine(winston_1.default.format.colorize(), winston_1.default.format.printf((info) => `[${info.timestamp}] [${info.level}]: [${info.message}]`)),
        }),
        // new winston.transports.File({ filename: 'combined.log' })
        new winston_daily_rotate_file_1.default({
            filename: `./logs/%DATE%.log`,
            maxSize: "1g",
            // maxDays: "3d",
            zippedArchive: true,
            datePattern: "DD-MM-YYYY",
        }),
    ],
});
