"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleDulicateError = (err) => {
    const match = err.message.match(/"([^"]*)"/);
    const extractedMessage = match && match[1];
    const errorSource = [
        {
            path: err.keyValue,
            message: `${extractedMessage} is already exists`,
        },
    ];
    const statusCode = 400;
    return {
        statusCode,
        message: "Duplicate entry",
        errorSources: errorSource,
    };
};
exports.default = handleDulicateError;
