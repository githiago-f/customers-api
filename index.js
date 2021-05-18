"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
process.env.UV_THREAD_POOL = '1';
var express_1 = __importStar(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var city_controller_1 = require("./controller/city-controller");
var company_controller_1 = require("./controller/company-controller");
var customer_controller_1 = require("./controller/customer-controller");
var connections_1 = require("./util/connections");
var is_production_1 = require("./util/is-production");
var conn = is_production_1.isProduction() ? connections_1.prodConnection() : connections_1.devConnection();
var app = express_1["default"]();
app.use(morgan_1["default"](is_production_1.isProduction() ? 'short' : 'dev'));
app.use(cors_1["default"]());
app.use(express_1["default"].json());
app.use('/city', city_controller_1.CityController(express_1.Router(), conn));
app.use('/company', company_controller_1.CompanyController(express_1.Router(), conn));
app.use('/customer', customer_controller_1.CustomerController(express_1.Router(), conn));
app.listen(8080, function () {
    console.log('Listening at 8080');
});
