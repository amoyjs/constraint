(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.constraint = factory());
}(this, function () { 'use strict';

    function getSize(target) {
        var scaleX = target.scale.x;
        var scaleY = target.scale.y;
        var width = target.isStage ? target.game.view.width : scaleX === 1 ? target.width : target.width / scaleX;
        var height = target.isStage ? target.game.view.height : scaleY === 1 ? target.height : target.height / scaleY;
        return { width: width, height: height };
    }

    function putCenter(offsetX, offsetY) {
        var _this = this;
        if (offsetX === void 0) { offsetX = 0; }
        if (offsetY === void 0) { offsetY = 0; }
        var executable = function () {
            var _a = getSize(_this.parent), parentWidth = _a.width, parentHeight = _a.height;
            _this.x = (parentWidth - _this.width) / 2 + offsetX;
            _this.y = (parentHeight - _this.height) / 2 + offsetY;
            if (_this.anchor) {
                _this.anchor.set(.5);
                _this.x += _this.width * _this.anchor.x;
                _this.y += _this.height * _this.anchor.y;
            }
            else {
                _this.pivot.x = _this.width / 2;
                _this.pivot.y = _this.height / 2;
                _this.x += _this.pivot.x;
                _this.y += _this.pivot.y;
            }
        };
        this.on('added', function () { return executable(); });
        if (this.parent)
            executable();
    }
    function putCenterX(offsetX) {
        var _this = this;
        if (offsetX === void 0) { offsetX = 0; }
        var executable = function () {
            var parentWidth = getSize(_this.parent).width;
            _this.x = (parentWidth - _this.width) / 2 + offsetX;
            if (_this.anchor) {
                _this.anchor.x = .5;
                _this.x += _this.width * _this.anchor.x;
            }
            else {
                _this.pivot.x = _this.width / 2;
                _this.x += _this.pivot.x;
            }
        };
        this.on('added', function () { return executable(); });
        if (this.parent)
            executable();
    }
    function putCenterY(offsetY) {
        var _this = this;
        if (offsetY === void 0) { offsetY = 0; }
        var executable = function () {
            var parentHeight = getSize(_this.parent).height;
            _this.y = (parentHeight - _this.height) / 2 + offsetY;
            if (_this.anchor) {
                _this.anchor.y = .5;
                _this.y += _this.width * _this.anchor.y;
            }
            else {
                _this.pivot.y = _this.height / 2;
                _this.y += _this.pivot.y;
            }
        };
        this.on('added', function () { return executable(); });
        if (this.parent)
            executable();
    }
    function putLeft(offsetX) {
        var _this = this;
        if (offsetX === void 0) { offsetX = 0; }
        this.on('added', function () {
            _this.x = offsetX;
            if (_this.anchor) {
                _this.anchor.x = .5;
                _this.x += _this.width * _this.anchor.x;
            }
            else {
                _this.pivot.x = _this.width / 2;
                _this.x += _this.pivot.x;
            }
        });
        if (this.parent)
            this.x = offsetX;
    }
    function putTop(offsetY) {
        var _this = this;
        if (offsetY === void 0) { offsetY = 0; }
        this.on('added', function () {
            _this.y = offsetY;
            if (_this.anchor) {
                _this.anchor.y = .5;
                _this.y += _this.width * _this.anchor.y;
            }
            else {
                _this.pivot.y = _this.height / 2;
                _this.y += _this.pivot.y;
            }
        });
        if (this.parent)
            this.y = offsetY;
    }
    function putRight(offsetX) {
        var _this = this;
        if (offsetX === void 0) { offsetX = 0; }
        var executable = function () {
            var parentWidth = getSize(_this.parent).width;
            _this.x = parentWidth - _this.width - offsetX;
            if (_this.anchor) {
                _this.anchor.x = .5;
                _this.x += _this.width * _this.anchor.x;
            }
            else {
                _this.pivot.x = _this.width / 2;
                _this.x += _this.pivot.x;
            }
        };
        this.on('added', function () { return executable(); });
        if (this.parent)
            executable();
    }
    function putBottom(offsetY) {
        var _this = this;
        if (offsetY === void 0) { offsetY = 0; }
        var executable = function () {
            var parentHeight = getSize(_this.parent).height;
            _this.y = parentHeight - _this.height - offsetY;
            if (_this.anchor) {
                _this.anchor.y = .5;
                _this.y += _this.width * _this.anchor.y;
            }
            else {
                _this.pivot.y = _this.height / 2;
                _this.y += _this.pivot.y;
            }
        };
        this.on('added', function () { return executable(); });
        if (this.parent)
            executable();
    }

    var constraint = /*#__PURE__*/Object.freeze({
        putCenter: putCenter,
        putCenterX: putCenterX,
        putCenterY: putCenterY,
        putLeft: putLeft,
        putTop: putTop,
        putRight: putRight,
        putBottom: putBottom
    });

    function index (_a) {
        var Container = _a.Container;
        for (var key in constraint) {
            Container.prototype[key] = constraint[key];
        }
    }

    return index;

}));
//# sourceMappingURL=constraint.js.map
