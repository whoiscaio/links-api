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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var getDevGoData_1 = __importDefault(require("../functions/getDevGoData"));
var LinkRepository_1 = __importDefault(require("../repository/LinkRepository"));
var LinkController = /** @class */ (function () {
    function LinkController() {
    }
    LinkController.prototype.getAll = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var links;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, LinkRepository_1["default"].getAll()];
                    case 1:
                        links = _a.sent();
                        response.json(links);
                        return [2 /*return*/];
                }
            });
        });
    };
    LinkController.prototype.create = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, url, title, newLink, link;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, url = _a.url, title = _a.title;
                        newLink = {
                            url: url,
                            title: title
                        };
                        return [4 /*yield*/, LinkRepository_1["default"].create(newLink)];
                    case 1:
                        link = _b.sent();
                        response.status(201).json(link);
                        return [2 /*return*/];
                }
            });
        });
    };
    LinkController.prototype.update = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var updatedLink, linkId, link;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        updatedLink = request.body;
                        linkId = request.params.linkId;
                        return [4 /*yield*/, LinkRepository_1["default"].update(updatedLink, linkId)];
                    case 1:
                        link = _a.sent();
                        response.json(link);
                        return [2 /*return*/];
                }
            });
        });
    };
    LinkController.prototype["delete"] = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var linkId, link;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        linkId = request.params.linkId;
                        return [4 /*yield*/, LinkRepository_1["default"]["delete"](linkId)];
                    case 1:
                        link = _a.sent();
                        response.status(200).json(link);
                        return [2 /*return*/];
                }
            });
        });
    };
    LinkController.prototype.scrap = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, getDevGoData_1["default"])()];
                    case 1:
                        _a.sent();
                        response.status(200).json({
                            message: 'scrap from devGo successful'
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    return LinkController;
}());
exports["default"] = new LinkController();
