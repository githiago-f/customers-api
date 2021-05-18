"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
exports.__esModule = true;
exports.CustomerRepositoryKNEX = void 0;
var paged_1 = require("../util/paged");
var exists_1 = require("./errors/exists");
/**
 * ### SOLID - L
 * @description Seguindo o principio de Liskov, onde as
 * implementações devem poder ser substituídas por suas
 * abstrações, decidi construir repositórios como interfaces
 * para permitir a mudança de repositórios apenas pela implementação.
 * @param connection {DBConnection}
 * @returns {CustomerRepository}
 */
var CustomerRepositoryKNEX = function (conn) {
    var self = {};
    var fields = [
        'customers.id',
        'customers.first_name',
        'customers.last_name',
        'customers.email',
        'customers.titulation'
    ];
    var customers = function () { return conn.table('customers'); };
    self.create = function (customer) { return __awaiter(void 0, void 0, void 0, function () {
        var trx, table, row, created, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, conn.transaction()];
                case 1:
                    trx = _a.sent();
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 6, , 8]);
                    table = trx.table('customers');
                    return [4 /*yield*/, table
                            .where('email', customer.email)
                            .count({ exists: 'id' })];
                case 3:
                    row = (_a.sent())[0];
                    if (row.exists > 0) {
                        throw new exists_1.Exists('Customer');
                    }
                    return [4 /*yield*/, table.insert(customer, '*')];
                case 4:
                    created = _a.sent();
                    return [4 /*yield*/, trx.commit()];
                case 5:
                    _a.sent();
                    return [2 /*return*/, created.shift()];
                case 6:
                    e_1 = _a.sent();
                    return [4 /*yield*/, trx.rollback()];
                case 7:
                    _a.sent();
                    throw e_1;
                case 8: return [2 /*return*/];
            }
        });
    }); };
    self.findAllPaged = function (page) {
        if (page === void 0) { page = 0; }
        return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, customers().select()
                            .limit(10)
                            .offset(paged_1.paged(page))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    self.findById = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, (_a = customers())
                        .select.apply(_a, __spreadArray(__spreadArray([], fields), ['cities.name as city', 'companies.name as company'])).leftJoin('cities', 'customers.city', 'cities.id')
                        .leftJoin('companies', 'customers.company', 'companies.id')
                        .where('customers.id', id)
                        .first()];
                case 1: return [2 /*return*/, _b.sent()];
            }
        });
    }); };
    self.findByCityPaged = function (city, page) {
        if (page === void 0) { page = 0; }
        return __awaiter(void 0, void 0, void 0, function () {
            var localCity;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!isNaN(city)) return [3 /*break*/, 2];
                        return [4 /*yield*/, conn.table('cities')
                                .select('id')
                                .where({ name: city })
                                .first()];
                    case 1:
                        localCity = _b.sent();
                        city = localCity.id;
                        _b.label = 2;
                    case 2: return [4 /*yield*/, (_a = customers())
                            .select.apply(_a, __spreadArray(__spreadArray([], fields), ['companies.name as company'])).leftJoin('companies', 'customers.company', 'companies.id')
                            .where('customers.city', city)
                            .limit(10)
                            .offset(paged_1.paged(page))];
                    case 3: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    self.totalByCity = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, customers()
                        .select('cities.name as city', 'cities.id as city_id')
                        .count('customers.id', { as: 'customers_total' })
                        .leftJoin('cities', 'cities.id', 'customers.city')
                        .groupBy('city')];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    return self;
};
exports.CustomerRepositoryKNEX = CustomerRepositoryKNEX;
