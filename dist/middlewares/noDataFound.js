"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkDataMiddleware = (req, res, next) => {
    const send = res.send;
    res.send = function (body) {
        if (!body ||
            (Array.isArray(body) && body.length === 0) ||
            (typeof body === "object" && Object.keys(body).length === 0)) {
            return res.status(404).json({
                success: false,
                message: "No Data Found",
                data: [],
            });
        }
        return send.call(this, body);
    };
    next();
};
exports.default = checkDataMiddleware;
