var Lamp = /** @class */ (function () {
    function Lamp() {
        this.imgOn = document.querySelector('#on');
        this.imgOff = document.querySelector('#off');
        this.powerOff();
    }
    Lamp.prototype.powerOn = function () {
        this.imgOn.style.display = 'block';
        this.imgOff.style.display = 'none';
    };
    Lamp.prototype.powerOff = function () {
        this.imgOff.style.display = 'block';
        this.imgOn.style.display = 'none';
    };
    Lamp.prototype.mouseListener = function () {
        var _this = this;
        this.imgOff.addEventListener('mouseover', function () {
            _this.powerOn();
        });
        this.imgOn.addEventListener('mouseout', function () {
            _this.powerOff();
        });
    };
    return Lamp;
}());
var lamp = new Lamp();
window.addEventListener('load', function () {
    lamp.mouseListener();
});
