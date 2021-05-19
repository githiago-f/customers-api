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
exports.__esModule = true;
exports.CompanyController = void 0;
var portfolio_domain_1 = require("portfolio-domain");
var company_repository_1 = require("../repository/company-repository");
var conflict_response_1 = require("../util/res/conflict-response");
var created_response_1 = require("../util/res/created-response");
var internal_response_1 = require("../util/res/internal-response");
var ok_response_1 = require("../util/res/ok-response");
var unprocessable_response_1 = require("../util/res/unprocessable-response");
var CompanyController = function (router, con) {
    var companyRepository = company_repository_1.CompanyRepositoryKNEX(con);
    router.get('/', function (_, res) {
        companyRepository.getAll()
            .then(function (all) { return ok_response_1.Ok(res, all); })["catch"](function (e) { return internal_response_1.InternalError(res, e); });
    });
    router.post('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var company, created, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    company = portfolio_domain_1.Company(req.body);
                    return [4 /*yield*/, companyRepository.create(company)];
                case 1:
                    created = _a.sent();
                    return [2 /*return*/, created_response_1.Created(res, created)];
                case 2:
                    e_1 = _a.sent();
                    if (/Invalid/.test(e_1.name)) {
                        return [2 /*return*/, unprocessable_response_1.Unprocessable(res, e_1)];
                    }
                    if (e_1.name === 'EntryConflict') {
                        return [2 /*return*/, conflict_response_1.Conflict(res, e_1)];
                    }
                    return [2 /*return*/, internal_response_1.InternalError(res, e_1)];
                case 3: return [2 /*return*/];
            }
        });
    }); });
    return router;
};
exports.CompanyController = CompanyController;