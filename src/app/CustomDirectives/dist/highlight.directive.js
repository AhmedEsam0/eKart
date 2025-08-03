"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HighlightDirective = void 0;
var core_1 = require("@angular/core");
var HighlightDirective = /** @class */ (function () {
    function HighlightDirective(elementReference, renderer) {
        this.elementReference = elementReference;
        this.renderer = renderer;
    }
    HighlightDirective.prototype.onHover = function () {
        this.renderer.addClass(this.elementReference.nativeElement, 'highlight');
    };
    HighlightDirective.prototype.onMouseOut = function () {
        this.renderer.removeClass(this.elementReference.nativeElement, 'highlight');
    };
    __decorate([
        core_1.HostListener('mouseover')
    ], HighlightDirective.prototype, "onHover");
    __decorate([
        core_1.HostListener('mouseout')
    ], HighlightDirective.prototype, "onMouseOut");
    HighlightDirective = __decorate([
        core_1.Directive({
            selector: '[appHighlight]',
            standalone: true
        })
    ], HighlightDirective);
    return HighlightDirective;
}());
exports.HighlightDirective = HighlightDirective;
