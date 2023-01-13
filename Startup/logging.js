const { createLogger, transports, format } = require('winston');require('winston-mongodb');
require('express-async-errors');
const config = require('config');


module.exports = function () {
    const db = config.get('db');

    createLogger({
        transports: [
            new transports.File({ filename: 'logfile.log' }),
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