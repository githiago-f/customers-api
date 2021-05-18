"use strict";
exports.__esModule = true;
exports.paged = void 0;
var paged = function (page, perpage) {
    if (perpage === void 0) { perpage = 10; }
    if (page < 1)
        page = 1;
    var offset = (page - 1) * perpage;
    return offset;
};
exports.paged = paged;
