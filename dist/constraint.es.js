function putCenter(offsetX, offsetY) {
    var _this = this;
    if (offsetX === void 0) { offsetX = 0; }
    if (offsetY === void 0) { offsetY = 0; }
    var executable = function () {
        var parent = _this.parent;
        var scaleX = parent.scale.x;
        var scaleY = parent.scale.y;
        var parentWidth = parent.isStage ? parent.game.view.width : scaleX === 1 ? parent.width : parent.width / scaleX;
        var parentHeight = parent.isStage ? parent.game.view.height : scaleY === 1 ? parent.height : parent.height / scaleY;
        _this.x = (parentWidth - _this.width) / 2 + offsetX;
        _this.y = (parentHeight - _this.height) / 2 + offsetY;
    };
    this.on('added', function () { return executable(); });
    if (this.parent)
        executable();
}
function putCenterX(offsetX) {
    var _this = this;
    if (offsetX === void 0) { offsetX = 0; }
    var executable = function () {
        var parent = _this.parent;
        var scaleX = parent.scale.x;
        var parentWidth = parent.isStage ? parent.game.view.width : scaleX === 1 ? parent.width : parent.width / scaleX;
        _this.x = (parentWidth - _this.width) / 2 + offsetX;
    };
    this.on('added', function () { return executable(); });
    if (this.parent)
        executable();
}
function putCenterY(offsetY) {
    var _this = this;
    if (offsetY === void 0) { offsetY = 0; }
    var executable = function () {
        var parent = _this.parent;
        var scaleY = parent.scale.y;
        var parentHeight = parent.isStage ? parent.game.view.height : scaleY === 1 ? parent.height : parent.height / scaleY;
        _this.y = (parentHeight - _this.height) / 2 + offsetY;
    };
    this.on('added', function () { return executable(); });
    if (this.parent)
        executable();
}
function putLeft(offsetX) {
    var _this = this;
    if (offsetX === void 0) { offsetX = 0; }
    this.on('added', function () { return _this.x = offsetX; });
    if (this.parent)
        this.x = offsetX;
}
function putTop(offsetY) {
    var _this = this;
    if (offsetY === void 0) { offsetY = 0; }
    this.on('added', function () { return _this.y = offsetY; });
    if (this.parent)
        this.y = offsetY;
}
function putRight(offsetX) {
    var _this = this;
    if (offsetX === void 0) { offsetX = 0; }
    var executable = function () {
        var parent = _this.parent;
        var scaleX = parent.scale.x;
        var parentWidth = parent.isStage ? parent.game.view.width : scaleX === 1 ? parent.width : parent.width / scaleX;
        _this.x = parentWidth - _this.width - offsetX;
    };
    this.on('added', function () { return executable(); });
    if (this.parent)
        executable();
}
function putBottom(offsetY) {
    var _this = this;
    if (offsetY === void 0) { offsetY = 0; }
    var executable = function () {
        var parent = _this.parent;
        var scaleY = parent.scale.y;
        var parentHeight = parent.isStage ? parent.game.view.height : scaleY === 1 ? parent.height : parent.height / scaleY;
        _this.y = parentHeight - _this.height - offsetY;
    };
    this.on('added', function () { return executable(); });
    if (this.parent)
        executable();
}

var constrain = /*#__PURE__*/Object.freeze({
    putCenter: putCenter,
    putCenterX: putCenterX,
    putCenterY: putCenterY,
    putLeft: putLeft,
    putTop: putTop,
    putRight: putRight,
    putBottom: putBottom
});

function index (_a) {
    var Sprite = _a.Sprite, Text = _a.Text, Graphics = _a.Graphics, Container = _a.Container;
    var components = [Sprite, Text, Graphics, Container];
    components.map(function (component) {
        for (var key in constrain) {
            component.prototype[key] = constrain[key];
        }
    });
}

export default index;
//# sourceMappingURL=constraint.es.js.map
