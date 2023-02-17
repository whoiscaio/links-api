"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var routes_1 = __importDefault(require("./routes"));
var cors_1 = __importDefault(require("cors"));
var port = 8080;
var mongodb_port = 27017;
mongoose_1["default"].set('strictQuery', true);
mongoose_1["default"].connect("mongodb://ec2-54-233-244-136.sa-east-1.compute.amazonaws.com:".concat(mongodb_port))
    .then(function () {
    var app = (0, express_1["default"])();
    app.use((0, cors_1["default"])({
        origin: '*'
    }));
    app.use(express_1["default"].json());
    app.use(routes_1["default"]);
    app.listen(port, function () {
        console.log("Server started at http://localhost:".concat(port));
    });
})["catch"](function () { return console.log('connection error'); });
