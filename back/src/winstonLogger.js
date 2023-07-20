import winston from "winston";
import winstonDaily from "winston-daily-rotate-file";

const { combine, timestamp, label, printf } = winston.format;
const logDir = 'log';

const logFormat = printf(({ level, message, label, timestamp}) =>{
    return `${timestamp} [${label}] ${level}: ${message}`;
});

const logger = winston.createLogger({
    format: combine(
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        label({ label: '포트폴리오 사이트'}),
        logFormat,
    ),
    
    transports: [
        new winstonDaily({
            level: 'info', //info 레벨 에서
            datePattern: 'YYYY-MM-DD', //파일 날짜 형식
            dirname: logDir, //파일 경로
            filename: `%DATE%.log`, //파일 이름
            maxFiles: 30, //최대 30개까지 보관 가능
        }),
        new winstonDaily({
            level: 'error', //error 레벨 에서
            datePattern: 'YYYY-MM-DD', //파일 날짜 형식
            dirname: logDir + '/error', //파일 경로
            filename: `%DATE%.error.log`, //파일 이름
            maxFiles: 30, //최대 30개까지 보관 가능
        })
    ],

    exceptionHandlers: [
        new winstonDaily({
            level: 'error',
            datePattern: 'YYYY-MM-DD',
            dirname: logDir,
            filename: `%DATE%.exception.log`,
            maxFiles: 30,
        })
    ]
});

if (process.env.NODE_ENV !== 'production') {
    logger.add(
       new winston.transports.Console({
          format: winston.format.combine(
             winston.format.colorize(), // log level별로 색상 적용하기
             winston.format.simple(), // `${info.level}: ${info.message} JSON.stringify({ …rest })` 포맷으로 출력
          ),
       }),
    );
 }
 

export { logger };