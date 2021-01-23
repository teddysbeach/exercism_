"use strict";
exports.__esModule = true;
exports.ResistorColor = void 0;
var ResistorColor = /** @class */ (function () {
    function ResistorColor(colors) {
        var _this = this;
        this.value = function () {
            var res = '';
            _this.colors.forEach(function (inputed) { return res += String(['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'].indexOf(inputed)); });
            return Number(res);
        };
        colors = colors.slice(0, 2);
        if (colors.length != 2)
            throw 'At least two colors need to be present';
        this.colors = colors;
    }
    return ResistorColor;
}());
exports.ResistorColor = ResistorColor;
