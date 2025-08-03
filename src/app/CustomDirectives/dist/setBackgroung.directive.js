"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.setBackground = void 0;
var core_1 = require("@angular/core");
var setBackground = /** @class */ (function () {
    function setBackground(elementRefrence, renderer) {
        this.elementRefrence = elementRefrence;
        this.renderer = renderer;
        // @Input('backColor') backColor: string = '#36454f';
        // @Input() setTextColor: string = 'white';
        this.setBackgroundAndTextColors = { backgroundColor: '#36454f', color: 'White' };
    }
    setBackground.prototype.ngOnInit = function () {
        var element = this.elementRefrence.nativeElement;
        // element.style.backgroundColor = '#36454f';
        // element.style.color = 'white';
        this.renderer.setStyle(element, 'backgroundColor', this.setBackgroundAndTextColors.backgroundColor);
        this.renderer.setStyle(element, 'color', this.setBackgroundAndTextColors.color);
    };
    __decorate([
        core_1.Input('setBackground')
    ], setBackground.prototype, "setBackgroundAndTextColors");
    setBackground = __decorate([
        core_1.Directive({
            selector: '[setBackground]',
            standalone: true
        })
    ], setBackground);
    return setBackground;
}());
exports.setBackground = setBackground;
