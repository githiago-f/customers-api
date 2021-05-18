"use strict";
exports.__esModule = true;
exports.InternalError = void 0;
var InternalError = function (res, e) {
    return res.status(500).json({
        message: e.message
    });
};
exports.InternalError = InternalError;
