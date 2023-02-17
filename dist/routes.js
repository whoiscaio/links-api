"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var LinkController_1 = __importDefault(require("./controllers/LinkController"));
var router = (0, express_1.Router)();
router.get('/', function (request, response) {
    response.status(200).json({
        message: 'server up'
    });
});
router.get('/links', LinkController_1["default"].getAll);
router.post('/links', LinkController_1["default"].create);
router.put('/links/:linkId', LinkController_1["default"].update);
router["delete"]('/links/:linkId', LinkController_1["default"]["delete"]);
router.get('/scrap', LinkController_1["default"].scrap);
exports["default"] = router;
