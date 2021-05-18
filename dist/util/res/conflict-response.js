"use strict";
exports.__esModule = true;
exports.Conflict = void 0;
var Conflict = function (res, e) {
    return res.status(409).json({
        message: e.message
    });
};
exports.Conflict = Conflict;
