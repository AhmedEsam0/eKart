"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SearchComponent = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
        this.searchText = '';
        this.searchValue = new core_1.EventEmitter();
    }
    SearchComponent.prototype.setSearchText = function () {
        console.log('BtnClicked');
        this.searchText = this.searchInputEl.nativeElement.value;
        this.searchValue.emit(this.searchText);
    };
    SearchComponent.prototype.EnterKeyClick = function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            this.setSearchText();
        }
    };
    __decorate([
        core_1.ViewChild('searchInputEl')
    ], SearchComponent.prototype, "searchInputEl");
    __decorate([
        core_1.Output()
    ], SearchComponent.prototype, "searchValue");
    SearchComponent = __decorate([
        core_1.Component({
            selector: 'app-search',
            standalone: true,
            imports: [forms_1.FormsModule, common_1.CommonModule],
            templateUrl: './search.component.html',
            styleUrl: './search.component.css'
        })
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
