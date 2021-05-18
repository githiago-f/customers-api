"use strict";
exports.__esModule = true;
exports.Created = void 0;
var Created = function (res, createdEntity) {
    return res.status(201).json({
        message: 'Successful creation!',
        data: createdEntity
    });
};
exports.Created = Created;
