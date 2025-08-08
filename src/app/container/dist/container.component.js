"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ContainerComponent = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var search_component_1 = require("./search/search.component");
var product_list_component_1 = require("./product-list/product-list.component");
var product_detail_component_1 = require("./product-detail/product-detail.component");
var featured_brands_component_1 = require("./featured-brands/featured-brands.component");
var ContainerComponent = /** @class */ (function () {
    function ContainerComponent() {
        this.searchText = '';
        this.NewArrivalBrands = ['Nike', 'Adidas', 'Puma', 'Nizza'];
    }
    ContainerComponent.prototype.searchValue = function (event) {
        this.searchText = event;
    };
    ContainerComponent.prototype.onCloseProductDetail = function () {
        this.productListComponent.selectedProduct = null;
    };
    __decorate([
        core_1.ViewChild('productListComponent')
    ], ContainerComponent.prototype, "productListComponent");
    ContainerComponent = __decorate([
        core_1.Component({
            selector: 'app-container',
            standalone: true,
            imports: [
                product_list_component_1.ProductListComponent,
                search_component_1.SearchComponent,
                common_1.CommonModule,
                product_detail_component_1.ProductDetailComponent,
                featured_brands_component_1.FeaturedBrandsComponent,
            ],
            templateUrl: './container.component.html',
            styleUrl: './container.component.css'
        })
    ], ContainerComponent);
    return ContainerComponent;
}());
exports.ContainerComponent = ContainerComponent;
