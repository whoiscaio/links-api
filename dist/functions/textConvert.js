"use strict";
exports.__esModule = true;
function textConvert(text) {
    var newText = text.replace(/-/g, ' ');
    return newText.charAt(0).toUpperCase() + newText.substring(1);
}
exports["default"] = textConvert;
