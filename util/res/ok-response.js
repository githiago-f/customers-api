"use strict";
exports.__esModule = true;
exports.Ok = void 0;
var Ok = function (res, message) {
    return res.status(200).json(message);
};
exports.Ok = Ok;
