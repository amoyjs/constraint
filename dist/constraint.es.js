/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

var width = window.innerWidth, height = window.innerHeight;
var ScreenSize = {
    width: width,
    height: height,
};
function getSize(target, global) {
    if (global === void 0) { global = false; }
    if (target.clone)
        target = target.clone();
    var scaleX = target.scale.x;
    var scaleY = target.scale.y;
    var width = target.isStage || global ? ScreenSize.width : target.width / scaleX;
    var height = target.isStage || global ? ScreenSize.height : target.height / scaleY;
    return {
        width: width,
        height: height,
    };
}
function fix(target) {
    target.x += target.pivot.x * target.scale.x;
    target.y += target.pivot.y * target.scale.y;
    if (target.anchor) {
        target.x += target.width * target.anchor.x;
        target.y += target.height * target.anchor.y;
    }
}
function fixX(target) {
    target.x += target.pivot.x * target.scale.x;
    if (target.anchor)
        target.x += target.width * target.anchor.x;
}
function fixY(target) {
    target.y += target.pivot.y * target.scale.y;
    if (target.anchor)
        target.y += target.height * target.anchor.y;
}

function putCenter(target, offsetX, offsetY, global) {
    if (offsetX === void 0) { offsetX = 0; }
    if (offsetY === void 0) { offsetY = 0; }
    if (global === void 0) { global = false; }
    if (typeof offsetX === 'boolean') {
        global = offsetX;
        offsetX = 0;
        offsetY = 0;
    }
    var executable = function () {
        var _a = getSize(target.parent, global), parentWidth = _a.width, parentHeight = _a.height;
        target.x = (parentWidth - target.width) / 2 + offsetX;
        target.y = (parentHeight - target.height) / 2 + offsetY;
        fix(target);
    };
    target.on('added', function () { return executable(); });
    if (target.parent)
        executable();
}
function putCenterX(target, offsetX, global) {
    if (offsetX === void 0) { offsetX = 0; }
    if (global === void 0) { global = false; }
    if (typeof offsetX === 'boolean') {
        global = offsetX;
        offsetX = 0;
    }
    var executable = function () {
        var parentWidth = getSize(target.parent, global).width;
        target.x = (parentWidth - target.width) / 2 + offsetX;
        fixX(target);
    };
    target.on('added', function () { return executable(); });
    if (target.parent)
        executable();
}
function putCenterY(target, offsetY, global) {
    if (offsetY === void 0) { offsetY = 0; }
    if (global === void 0) { global = false; }
    if (typeof offsetY === 'boolean') {
        global = offsetY;
        offsetY = 0;
    }
    var executable = function () {
        var parentHeight = getSize(target.parent, global).height;
        target.y = (parentHeight - target.height) / 2 + offsetY;
        fixY(target);
    };
    target.on('added', function () { return executable(); });
    if (target.parent)
        executable();
}
function putLeft(target, offsetX, global) {
    if (offsetX === void 0) { offsetX = 0; }
    if (typeof offsetX === 'boolean') {
        offsetX = 0;
    }
    target.on('added', function () {
        target.x = offsetX;
        fixX(target);
    });
    if (target.parent)
        target.x = offsetX;
}
function putTop(target, offsetY, global) {
    if (offsetY === void 0) { offsetY = 0; }
    if (typeof offsetY === 'boolean') {
        offsetY = 0;
    }
    target.on('added', function () {
        target.y = offsetY;
        fixY(target);
    });
    if (target.parent)
        target.y = offsetY;
}
function putRight(target, offsetX, global) {
    if (offsetX === void 0) { offsetX = 0; }
    if (global === void 0) { global = false; }
    if (typeof offsetX === 'boolean') {
        global = offsetX;
        offsetX = 0;
    }
    var executable = function () {
        var parentWidth = getSize(target.parent, global).width;
        target.x = parentWidth - target.width - offsetX;
        fixX(target);
    };
    target.on('added', function () { return executable(); });
    if (target.parent)
        executable();
}
function putBottom(target, offsetY, global) {
    if (offsetY === void 0) { offsetY = 0; }
    if (global === void 0) { global = false; }
    if (typeof offsetY === 'boolean') {
        global = offsetY;
        offsetY = 0;
    }
    var executable = function () {
        var parentHeight = getSize(target.parent, global).height;
        target.y = parentHeight - target.height - offsetY;
        fixY(target);
    };
    target.on('added', function () { return executable(); });
    if (target.parent)
        executable();
}

var _constraint = /*#__PURE__*/Object.freeze({
    putCenter: putCenter,
    putCenterX: putCenterX,
    putCenterY: putCenterY,
    putLeft: putLeft,
    putTop: putTop,
    putRight: putRight,
    putBottom: putBottom
});

var constraints = _constraint;
function constraint(_a) {
    var Container = _a.Container;
    var _loop_1 = function (key) {
        Container.prototype[key] = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            constraints[key].apply(constraints, __spreadArrays([this], args));
        };
    };
    for (var key in constraints) {
        _loop_1(key);
    }
}
function createConstraint(width, height) {
    ScreenSize.width = width;
    ScreenSize.height = height;
    return constraint;
}

export default constraint;
export { constraints, createConstraint, fix, fixX, fixY };
//# sourceMappingURL=constraint.es.js.map
