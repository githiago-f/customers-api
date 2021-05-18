"use strict";
exports.__esModule = true;
exports.devConnection = exports.prodConnection = void 0;
var knex_1 = require("knex");
var path_1 = require("path");
var prodConnection = function () { return knex_1.knex({
    client: 'mysql2',
    connection: {
        host: process.env.DB_HOST || 'localhost',
        database: process.env.DB_NAME || 'application',
        password: process.env.DB_PASSWORD || '',
        user: process.env.DB_USERNAME || 'root'
    }
}); };
exports.prodConnection = prodConnection;
var devConnection = function () { return knex_1.knex({
    client: 'sqlite3',
    debug: true,
    connection: {
        filename: path_1.resolve(__dirname, '../../data/dev.sqlite3')
    },
    useNullAsDefault: true
}); };
exports.devConnection = devConnection;
