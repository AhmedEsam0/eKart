"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductDetailComponent = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var app_hover_directive_1 = require("../../CustomDirectives/app-hover.directive");
var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(renderer) {
        this.renderer = renderer;
        this.textColor = 'Yellow';
        this.closeEvent = new core_1.EventEmitter();
        this.selectedColor = '';
    }
    ProductDetailComponent.prototype.close = function () {
        this.closeEvent.emit();
    };
    ProductDetailComponent.prototype.sizeSelected = function (size) {
        //console.log(element);
        this.selectedSize = size;
        //console.log(this.selectedSize);
    };
    ProductDetailComponent.prototype.selectColor = function (color) {
        this.selectedColor = color;
    };
    __decorate([
        core_1.Input()
    ], ProductDetailComponent.prototype, "selectedProduct");
    __decorate([
        core_1.Output()
    ], ProductDetailComponent.prototype, "closeEvent");
    ProductDetailComponent = __decorate([
        core_1.Component({
            selector: 'product-detail',
            standalone: true,
            imports: [common_1.CommonModule, app_hover_directive_1.AppHoverDirective],
            templateUrl: './product-detail.component.html',
            styleUrl: './product-detail.component.css'
        })
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());
exports.ProductDetailComponent = ProductDetailComponent;
