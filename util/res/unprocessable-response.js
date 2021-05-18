"use strict";
exports.__esModule = true;
exports.Unprocessable = void 0;
var Unprocessable = function (res, e) {
    return res.status(422)
        .json({
        name: e.name,
        message: e.message
    });
};
exports.Unprocessable = Unprocessable;
