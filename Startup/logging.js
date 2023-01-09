const { createLogger, transports, format } = require('winston');require('winston-mongodb');
require('express-async-errors');

module.exports = function () {
    createLogger({
        transports: [
            new transports.File({ filename: 'logfile.log' }),
            new transports.MongoDB({
                db: 'mongodb://127.0.0.1:27017/zoe',
                level: 'info'
            }),
        ],
        exceptionHandlers: [
            new transports.Console({
                format: format.combine(
                    format.colorize({all: true}),
                    format.prettyPrint(),
                ),
            }),
            new transports.File({ filename: 'uncaughtExceptions.log' })
        ],
        rejectionHandlers: [
            new transports.File({ filename: 'unhandledrejection.log' })
        ],
    });
}