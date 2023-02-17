"use strict";
exports.__esModule = true;
exports.Link = void 0;
var mongoose_1 = require("mongoose");
exports.Link = (0, mongoose_1.model)('Link', new mongoose_1.Schema({
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
}));
