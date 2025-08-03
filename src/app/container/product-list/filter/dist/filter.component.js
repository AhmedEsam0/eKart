"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FilterComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var FilterComponent = /** @class */ (function () {
    function FilterComponent() {
        this.All = 0;
        this.outOfStock = 0;
        this.selectedRadioBtn = 'All';
        this.newChangeEvent = new core_1.EventEmitter();
    }
    FilterComponent.prototype.radioChanged = function () {
        this.newChangeEvent.emit(this.selectedRadioBtn);
    };
    __decorate([
        core_1.Input()
    ], FilterComponent.prototype, "All");
    __decorate([
        core_1.Input()
    ], FilterComponent.prototype, "inStock");
    __decorate([
        core_1.Input()
    ], FilterComponent.prototype, "outOfStock");
    __decorate([
        core_1.Output()
    ], FilterComponent.prototype, "newChangeEvent");
    FilterComponent = __decorate([
        core_1.Component({
            selector: 'app-filter',
            standalone: true,
            imports: [forms_1.FormsModule],
            templateUrl: './filter.component.html',
            styleUrl: './filter.component.css'
        })
    ], FilterComponent);
    return FilterComponent;
}());
exports.FilterComponent = FilterComponent;
