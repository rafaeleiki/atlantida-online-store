webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n  border: none;\n}\n\n.card-img-top {\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n  margin: auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"p-5\">\n  <h1>Atlantida</h1>\n  <h4>Os tesouros perdidos pelo preço de água salgada</h4>\n  <p class=\"mt-5\">\n    Atlantida é uma loja online que foi criada em 2017. Vendendo de\n    eletrodomésticos a variedades de itens para a sua vida, o objetivo\n    da Atlantida foi sempre o mesmo: oferecer o melhor serviço com\n    um preço justo.Começamos nossas atividades em 2017, quando os fundadores,\n    cientistas da computação interessados pelo mercado de varejo,\n    viu uma oportunidade de melhorar a venda de produtos de consumo duráveis.\n    Desde então, Atlantida foi criada para atender a população brasileira\n    através de um serviço escalável, de alta qualidade e preço acessível.\n  </p>\n  <h3 class=\"mt-5\">Fundadores</h3>\n  <div class=\"p-4 card-deck\">\n    <div *ngFor=\"let founder of founders\" class=\"card text-center m-2\">\n      <img class=\"card-img-top\" src=\"{{ founder.picture }}\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">{{ founder.name }}</h4>\n        <p class=\"card-text\">RA {{ founder.ra }}</p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
        this.founders = [
            { name: 'Guilherme Valarini', ra: '168891', picture: 'assets/img/guilherme.jpeg' },
            { name: 'Leila Zwanziger', ra: '171866', picture: 'assets/img/leila.jpeg' },
            { name: 'Rafael Eiki', ra: '176127', picture: 'assets/img/eiki.jpeg' },
            { name: 'Rafael Lamarques', ra: '176081', picture: 'assets/img/lamas.jpeg' },
            { name: 'Tales Lelo', ra: '177312', picture: 'assets/img/tales.jpeg' },
        ];
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer {\n  background-color: #17adff;\n  padding: 2em;\n  text-align: center;\n  color: #fff;\n}\n\n/* Sticky footer styles\n-------------------------------------------------- */\n/*html {\n position: relative;\n min-height: 100%;\n}\nbody {\n margin-bottom: 60px;\n}\n.footer {\n position: absolute;\n bottom: 0;\n width: 100%;\n height: 60px;\n line-height: 60px;\n background-color: #17adff;\n}\n\n.footer div {\n  text-align: center;\n  color: #fff;\n}*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n\n<router-outlet></router-outlet>\n\n<footer class=\"footer\">\n  <div class=\"container\">\n    <label class=\"mb-0\">Atlantida 2017. Todos os direitos reservados.</label>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nav_bar_nav_bar_component__ = __webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__help_help_component__ = __webpack_require__("../../../../../src/app/help/help.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__integrations_mewketing_mewketing_service__ = __webpack_require__("../../../../../src/app/integrations/mewketing/mewketing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__integrations_clients_client_service__ = __webpack_require__("../../../../../src/app/integrations/clients/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__user_user_module__ = __webpack_require__("../../../../../src/app/user/user.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__integrations_products_products_service__ = __webpack_require__("../../../../../src/app/integrations/products/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__integrations_serasa_serasa_service__ = __webpack_require__("../../../../../src/app/integrations/serasa/serasa.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__integrations_cep_cep_service__ = __webpack_require__("../../../../../src/app/integrations/cep/cep.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__product_product_component__ = __webpack_require__("../../../../../src/app/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__product_stars_stars_component__ = __webpack_require__("../../../../../src/app/product/stars/stars.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__search_search_component__ = __webpack_require__("../../../../../src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__product_pics_product_pics_component__ = __webpack_require__("../../../../../src/app/product-pics/product-pics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shopcart_shopcart_component__ = __webpack_require__("../../../../../src/app/shopcart/shopcart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shopcart_shopcart_service__ = __webpack_require__("../../../../../src/app/shopcart/shopcart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__integrations_payments_payments_service__ = __webpack_require__("../../../../../src/app/integrations/payments/payments.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__payments_payment_component__ = __webpack_require__("../../../../../src/app/payments/payment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__server_server_service__ = __webpack_require__("../../../../../src/app/server/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__integrations_delivery_delivery_service__ = __webpack_require__("../../../../../src/app/integrations/delivery/delivery.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_23__login_login_component__["a" /* LoginComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_7__about_about_component__["a" /* AboutComponent */] },
    { path: 'help', component: __WEBPACK_IMPORTED_MODULE_8__help_help_component__["a" /* HelpComponent */] },
    { path: 'products', redirectTo: '/search/*', pathMatch: 'full' },
    { path: 'shopcart', component: __WEBPACK_IMPORTED_MODULE_21__shopcart_shopcart_component__["a" /* ShopCartComponent */] },
    { path: 'products/:id', component: __WEBPACK_IMPORTED_MODULE_16__product_product_component__["a" /* ProductComponent */] },
    { path: 'search/:searchQuery', component: __WEBPACK_IMPORTED_MODULE_18__search_search_component__["a" /* SearchComponent */] },
    { path: 'shopcart', component: __WEBPACK_IMPORTED_MODULE_21__shopcart_shopcart_component__["a" /* ShopCartComponent */] },
    { path: 'payment', component: __WEBPACK_IMPORTED_MODULE_26__payments_payment_component__["a" /* PaymentComponent */] },
    { path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__nav_bar_nav_bar_component__["a" /* NavBarComponent */],
            __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_7__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_8__help_help_component__["a" /* HelpComponent */],
            __WEBPACK_IMPORTED_MODULE_21__shopcart_shopcart_component__["a" /* ShopCartComponent */],
            __WEBPACK_IMPORTED_MODULE_16__product_product_component__["a" /* ProductComponent */],
            __WEBPACK_IMPORTED_MODULE_17__product_stars_stars_component__["a" /* StarsComponent */],
            __WEBPACK_IMPORTED_MODULE_18__search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_20__product_pics_product_pics_component__["a" /* ProductPicsComponent */],
            __WEBPACK_IMPORTED_MODULE_23__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_26__payments_payment_component__["a" /* PaymentComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_19__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_12__user_user_module__["a" /* UserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_19__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_24__shared_shared_module__["a" /* SharedModule */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_25__integrations_payments_payments_service__["a" /* PaymentsService */],
            __WEBPACK_IMPORTED_MODULE_11__integrations_clients_client_service__["a" /* ClientService */],
            __WEBPACK_IMPORTED_MODULE_13__integrations_products_products_service__["a" /* ProductsService */],
            __WEBPACK_IMPORTED_MODULE_15__integrations_cep_cep_service__["a" /* CepService */],
            __WEBPACK_IMPORTED_MODULE_22__shopcart_shopcart_service__["a" /* ShopCartService */],
            __WEBPACK_IMPORTED_MODULE_14__integrations_serasa_serasa_service__["a" /* SerasaService */],
            __WEBPACK_IMPORTED_MODULE_27__server_server_service__["a" /* ServerService */],
            __WEBPACK_IMPORTED_MODULE_28__integrations_delivery_delivery_service__["a" /* DeliveryService */],
            __WEBPACK_IMPORTED_MODULE_10__integrations_mewketing_mewketing_service__["a" /* MewketingService */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/help/faq.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FAQ; });
var FAQ = [
    {
        question: 'Como faço a compra?',
        answer: 'Você escolhe seu produto, adicione ele ao carrinho e finalize sua compra!'
    },
    {
        question: 'Como posso entrar em contato com o SAC?',
        answer: 'Ligue para 0800-000-000'
    },
    {
        question: 'Não consigo fazer o cadastro no sistema!',
        answer: 'O nosso sistema usa o serviço X. Para problemas no cadastro, contate o X.'
    },
    {
        question: "Eu tinha um produto no meu carrinho, mas quando fui finalizar a compra,\n               o sistema disse que o produto estava indispon\u00EDvel!",
        answer: "Isso pode ocorrer quando possu\u00EDmos pouca disponibilidade do produto em estoque.\n             Quando voc\u00EA foi finalizar a compra, o estoque do produto havia se esgotado. \n             Lamentamos por essa inconveni\u00EAncia!"
    },
];
//# sourceMappingURL=faq.js.map

/***/ }),

/***/ "../../../../../src/app/help/help.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/help/help.component.html":
/***/ (function(module, exports) {

module.exports = "<ngb-accordion *ngFor=\"let questionAnswer of faq\"\n               #acc=\"ngbAccordion\">\n  <ngb-panel title=\"{{ questionAnswer.question }}\">\n    <ng-template ngbPanelContent>{{ questionAnswer.answer }}</ng-template>\n  </ngb-panel>\n</ngb-accordion>\n"

/***/ }),

/***/ "../../../../../src/app/help/help.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__faq__ = __webpack_require__("../../../../../src/app/help/faq.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var HelpComponent = (function () {
    function HelpComponent() {
        this.faq = __WEBPACK_IMPORTED_MODULE_1__faq__["a" /* FAQ */];
    }
    return HelpComponent;
}());
HelpComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-help',
        template: __webpack_require__("../../../../../src/app/help/help.component.html"),
        styles: [__webpack_require__("../../../../../src/app/help/help.component.css")]
    })
], HelpComponent);

//# sourceMappingURL=help.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".highlight-products {\n  height: 300px;\n}\n\n.banner{\n  height: 200px;\n  width: 70%;\n  display: block;\n  margin: auto;\n}\n\n.caption {\n  color: white;\n  text-shadow: 2px 2px 1px black;\n}\n\n.highlight-products img {\n  display: block;\n  max-height: 300px;\n  width: auto;\n  margin: auto;\n}\n\n.card-img-top {\n  width: 200px;\n  height: 200px;\n  background-color: red;\n  margin: auto;\n}\n\n.card-group {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n\n.card {\n  min-width: 300px;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  border: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loading-icon *ngIf=\"!productsGrid; else products\"></app-loading-icon>\n\n<ng-template #products>\n  <img src='assets/img/banner.png' class=\"banner\">\n  <ngb-carousel class=\"highlight-products\">\n    <ng-template ngbSlide *ngFor=\"let item of productsCarousel; let i = index\">\n      <a routerLink=\"/products/{{item._id}}\">\n        <img src=\"{{item.img[0]}}\">\n        <div class=\"carousel-caption caption\">\n          <p><b>{{item.name}}</b></p>\n        </div>\n      </a>\n    </ng-template>\n  </ngb-carousel>\n\n  <ul class=\"card-group mt-4\">\n    <li *ngFor=\"let item of productsGrid\"\n        class=\"card text-center m-2\">\n      <app-product-pics [product]=\"item\" [link]=\"true\" [height]=\"240\"></app-product-pics>\n      <div class=\"card-body\">\n        <a routerLink=\"/products/{{item._id}}\">\n          <h4 class=\"card-title\">{{ item.name }}</h4>\n          <p class=\"card-text\">{{ item.price | currency:'BRL':'R$' }}</p>\n        </a>\n      </div>\n    </li>\n  </ul>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__integrations_products_products_service__ = __webpack_require__("../../../../../src/app/integrations/products/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(route, productsService) {
        this.route = route;
        this.productsService = productsService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productsService.getHighlightedProducts()
            .then(function (products) {
            _this.productsGrid = products;
            var s = Math.floor(Math.random() * (products.length - 3));
            _this.productsCarousel = products.slice(s, s + 3);
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__integrations_products_products_service__["a" /* ProductsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__integrations_products_products_service__["a" /* ProductsService */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/integrations/cep/cep.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CepService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import {  } from '@angular/common/http';

var CepService = (function () {
    function CepService(http) {
        this.http = http;
        this.url = 'https://mc437-cep.herokuapp.com/';
        this.getAddressURI = this.url + 's/cep/';
        this.authToken = 'PGC924rdhDluB21Uq9kMrkT51WvBrRm5kr9k1PrlNaBogF6oXMkclgtbpbAcbwQb';
        // this.http.post(
        //   this.url+'user', {
        //     name: 'Tales',
        //     document: '12037279680'
        //   })
        //   .subscribe(response => this.authToken = response);
    }
    CepService.prototype.getAddress = function (cep) {
        var header = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Headers */]({
                'auth-token': this.authToken
            })
        };
        return this.http.get(this.getAddressURI + cep, header)
            .toPromise()
            .then(function (response) { return response.json().value; })
            .catch(function (error) {
            console.error('Error on get cep', error);
            return Promise.reject(error.message || error);
        });
    };
    CepService.prototype.getCEP = function (address) {
        throw new Error("Feature not implemented");
    };
    return CepService;
}());
CepService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object])
], CepService);

var _a;
//# sourceMappingURL=cep.service.js.map

/***/ }),

/***/ "../../../../../src/app/integrations/clients/client.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AUTH_ERRORS; });
/* unused harmony export ADDRESS_ERRORS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


function getStorage() { return window.localStorage; }
var TOKEN_KEY = 'token_key';
var AUTH_ERRORS = {
    INVALID_CPF: 'INVALID_CPF',
    NOT_FOUND: 'NOT_FOUND'
};
var ADDRESS_ERRORS = {
    ADDRESS_NOT_FOUND: 'ADDRESS_NOT_FOUND'
};
var ClientService = (function () {
    function ClientService(http) {
        this.http = http;
        this.url = 'http://mc437.ddns.net:5001/';
        this.authToken = getStorage().getItem(TOKEN_KEY);
    }
    ClientService.prototype.signUp = function (data) {
        return this.http.post(this.url + 'client', data)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) {
            console.error('Error trying to sign up client', error);
            return Promise.reject(error.message || error);
        });
    };
    ClientService.prototype.getAccessHeader = function () {
        if (!this.authToken) {
            throw Error('Need to authenticate before getting user info');
        }
        return {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'X-Access-Token': this.authToken })
        };
    };
    ClientService.prototype.authenticate = function (data) {
        var _this = this;
        return this.http.post(this.url + 'client/auth', data)
            .toPromise()
            .then(function (res) {
            var response = res.json();
            var result = response;
            if (response.error_code) {
                result = Promise.reject(response.error_code);
            }
            else {
                _this.setToken(response);
            }
            return result;
        })
            .catch(function (error) {
            console.error("Error trying to authenticate client '" + data.cpf + "'", error);
            return Promise.reject(error.message || error);
        });
    };
    ClientService.prototype.getUserInfo = function (clientId) {
        if (!this.authToken) {
            throw Error('Need to authenticate before getting user info');
        }
        return this.http.get(this.url + ("client/" + clientId), this.getAccessHeader())
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    ClientService.prototype.getUserAddresses = function (clientId) {
        if (!this.authToken) {
            throw Error('Need to authenticate before getting user info');
        }
        return this.http.get(this.url + ("address/" + clientId), this.getAccessHeader())
            .toPromise()
            .then(function (res) {
            var response = res.json();
            if (response.error_code) {
                // throw new Error(response.error_code);
                return [];
            }
            else {
                return response.payload.addresses;
            }
        })
            .catch(function (error) {
            console.error("Error trying to retrieve address", error);
            return Promise.reject(error.message || error);
        });
    };
    ClientService.prototype.removeAddress = function (addrId) {
        if (!this.authToken) {
            throw Error('Need to authenticate before getting user info');
        }
        return this.http.delete(this.url + ("address/" + addrId), this.getAccessHeader())
            .toPromise().then(function () { });
    };
    ClientService.prototype.addAddress = function (clientId, cep, houseNumber) {
        if (!this.authToken) {
            throw Error('Need to authenticate before getting user info');
        }
        return this.http.post(this.url + ("address/" + clientId), { cep: cep, number: houseNumber }, this.getAccessHeader())
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    ClientService.prototype.setToken = function (response) {
        this.authToken = response.payload.token;
        getStorage().setItem(TOKEN_KEY, this.authToken);
    };
    return ClientService;
}());
ClientService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ClientService);

var _a;
//# sourceMappingURL=client.service.js.map

/***/ }),

/***/ "../../../../../src/app/integrations/delivery/delivery.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliveryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GROUP_ID = 4;
var DeliveryService = (function () {
    function DeliveryService(http) {
        this.http = http;
        this.url = "http://site-env.mxvnckfmbb.us-east-2.elasticbeanstalk.com/api";
    }
    DeliveryService.prototype.getAllPackages = function () {
        return this.http.get(this.url + "/envio")
            .toPromise()
            .then(function (response) { return response.json()
            .filter(function (singlePackage) { return singlePackage.id_site === GROUP_ID; }); })
            .catch(function (error) {
            console.log(error);
            return Promise.reject(error.message || error);
        });
    };
    DeliveryService.prototype.getPriceDate = function (deliveryInfo) {
        deliveryInfo["id_site"] = GROUP_ID;
        return this.http.get(this.url + "/consulta", { params: deliveryInfo })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(function (error) {
            console.log(error);
            return Promise.reject(error.message || error);
        });
    };
    DeliveryService.prototype.postPackage = function (packageInfo) {
        var param = "id_site=" + GROUP_ID + "&" +
            ['destinatario', 'volume', 'volume', 'destino_cep', 'destino_numero',
                'destino_estado', 'destino_cidade', 'destino_endereco']
                .map(function (key) { return key + "=" + packageInfo[key]; }).join('&');
        return this.http.post(this.url + "/envio?" + param, {})
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(function (error) {
            console.log(error);
            return Promise.reject(error.message || error);
        });
    };
    DeliveryService.prototype.cancelPackage = function (package_id) {
        return this.http.put(this.url + ("/envio/" + package_id + "/cancela"), {})
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(function (error) {
            console.log(error);
            return Promise.reject(error.message || error);
        });
    };
    DeliveryService.prototype.getStatusPackage = function (package_id) {
        return this.http.get(this.url + ("/envio/" + package_id))
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(function (error) {
            console.log(error);
            return Promise.reject(error.message || error);
        });
    };
    return DeliveryService;
}());
DeliveryService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], DeliveryService);

var _a;
//# sourceMappingURL=delivery.service.js.map

/***/ }),

/***/ "../../../../../src/app/integrations/mewketing/mewketing.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MewketingService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MewketingService = (function () {
    function MewketingService(http) {
        this.http = http;
        this.sender_email = 'atlantida@store.com.br';
        this.sender_password = '12345';
        this.url = 'http://mewketing.herokuapp.com/api';
    }
    MewketingService.prototype.sendEmail = function (date, title, template_name, groups, vars) {
        return this.http.post(this.url + "/email/schedule_template", {
            sender_email: this.sender_email,
            sender_password: this.sender_password,
            schedule: date,
            title: title,
            template: template_name,
            vars: vars,
            groups: groups
        })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(function (error) {
            console.error("Error on sending " + title + " from template " + template_name + " to groups " + groups.join(' '), error);
            return Promise.reject(error.message || error);
        });
    };
    MewketingService.prototype.exitGroup = function (group_name, receiver) {
        return this.http.post(this.url + "/group/remove_receiver", {
            sender_email: this.sender_email,
            sender_password: this.sender_password,
            group_name: group_name,
            receiver_email: receiver
        })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(function (error) {
            console.error("Error on removing " + receiver + " from group " + group_name, error);
            return Promise.reject(error.message || error);
        });
    };
    MewketingService.prototype.joinGroup = function (group_name, receiver) {
        return this.http.post(this.url + "/group/add_receiver", {
            sender_email: this.sender_email,
            sender_password: this.sender_password,
            group_name: group_name,
            receiver_email: receiver
        })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(function (error) {
            console.error("Error on adding " + receiver + " to group " + group_name, error);
            return Promise.reject(error.message || error);
        });
    };
    MewketingService.prototype.createReceiver = function (receiver_name, receiver_email) {
        return this.http.post(this.url + "/receiver/add", {
            sender_email: this.sender_email,
            sender_password: this.sender_password,
            name: receiver_name,
            email: receiver_email
        })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(function (error) {
            console.error("Error on creating " + receiver_name, error);
            return Promise.reject(error.message || error);
        });
    };
    MewketingService.prototype.removeReceiver = function (receiver_name) {
        return this.http.post(this.url + "/receiver/remove", {
            sender_email: this.sender_email,
            sender_password: this.sender_password,
            name: receiver_name
        })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(function (error) {
            console.error("Error on removing " + receiver_name, error);
            return Promise.reject(error.message || error);
        });
    };
    MewketingService.prototype.updateReceiver = function (original_receiver_name, new_receiver_name, new_receiver_email) {
        return this.http.post(this.url + "/receiver/add", {
            sender_email: this.sender_email,
            sender_password: this.sender_password,
            original_name: original_receiver_name,
            name: new_receiver_name,
            email: new_receiver_email
        })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(function (error) {
            console.error("Error on updating " + original_receiver_name, error);
            return Promise.reject(error.message || error);
        });
    };
    return MewketingService;
}());
MewketingService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], MewketingService);

var _a;
//# sourceMappingURL=mewketing.service.js.map

/***/ }),

/***/ "../../../../../src/app/integrations/payments/payments.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaymentsService = (function () {
    function PaymentsService(http) {
        this.http = http;
        this.url = 'https://orangopag.herokuapp.com/index.php/api/Transacoes';
    }
    PaymentsService.prototype.getTransaction = function (transaction) {
        return this.http.get(this.url, { params: transaction })
            .toPromise()
            .then(function (response) {
            var orangoPagConsultTransactionReturn = response.json();
            return {
                id: orangoPagConsultTransactionReturn.ID,
                transaction_state: orangoPagConsultTransactionReturn.estado_transacao,
                payment_type: orangoPagConsultTransactionReturn.tipo_pagamento,
                date: orangoPagConsultTransactionReturn.data,
                total_value: orangoPagConsultTransactionReturn.valor_total,
                card_number: orangoPagConsultTransactionReturn.numero_cartao,
                withdraw_name: orangoPagConsultTransactionReturn.nome_sacado,
                withdraw_cpf: orangoPagConsultTransactionReturn.cpf_sacado
            };
        })
            .catch(function (error) {
            console.error('Error on getting the transaction', error);
            return Promise.reject(error.message || error);
        });
    };
    PaymentsService.prototype.getTransactions = function (transaction) {
        return this.http.get(this.url, { params: transaction })
            .toPromise()
            .then(function (response) {
            var transactionsList = response.json();
            return transactionsList.map(function (transactionElement) { return ({
                id: transactionElement.ID,
                transaction_state: transactionElement.estado_transacao,
                payment_type: transactionElement.tipo_pagamento,
                date: transactionElement.data,
                total_value: transactionElement.valor_total,
                card_number: transactionElement.numero_cartao,
                withdraw_name: transactionElement.nome_sacado,
                withdraw_cpf: transactionElement.cpf_sacado
            }); });
        });
    };
    PaymentsService.prototype.postBoleto = function (transaction) {
        return this.http.post(this.url, transaction)
            .toPromise()
            .then(function (response) {
            var orangoPagCreateTransactionReturn = response.json();
            return {
                message: orangoPagCreateTransactionReturn.msg,
                data: orangoPagCreateTransactionReturn.dados,
                extra: orangoPagCreateTransactionReturn.extra
            };
        })
            .catch(function (error) {
            console.error('Error on posting the Boleto', error);
            return Promise.reject(error.message || error);
        });
    };
    PaymentsService.prototype.postCredit = function (transaction) {
        return Promise.resolve({
            message: 'Transação realizada com sucesso!',
            data: {
                cnpj: '123412341234',
                estado_transacao: 'Finalizado',
                tipo_pagamento: '2',
                data_horario_criacao: '2012-03-03',
                valor_total: '100',
                id_transacao: 123
            },
            extra: ''
        });
        // return this.http.post(this.url, transaction)
        //   .toPromise()
        //   .then(response => {
        //     const orangoPagCreateTransactionReturn = response.json() as OrangoPagCreateTransactionReturn;
        //     return {
        //       message: orangoPagCreateTransactionReturn.msg,
        //       data: orangoPagCreateTransactionReturn.dados,
        //       extra: orangoPagCreateTransactionReturn.extra
        //     };
        //   })
        //   .catch((error) => {
        //     console.error('Error on posting the Credit Card', error);
        //     return Promise.reject(error.message || error);
        //   });
    };
    PaymentsService.prototype.postDebit = function (transaction) {
        return this.http.post(this.url, { params: transaction })
            .toPromise()
            .then(function (response) {
            var orangoPagCreateTransactionReturn = response.json();
            return {
                message: orangoPagCreateTransactionReturn.msg,
                data: orangoPagCreateTransactionReturn.dados,
                extra: orangoPagCreateTransactionReturn.extra
            };
        })
            .catch(function (error) {
            console.error('Error on posting the Credit Card', error);
            return Promise.reject(error.message || error);
        });
    };
    return PaymentsService;
}());
PaymentsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], PaymentsService);

var _a;
//# sourceMappingURL=payments.service.js.map

/***/ }),

/***/ "../../../../../src/app/integrations/products/products.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GROUP_ID = '3';
var ProductsService = (function () {
    function ProductsService(http) {
        this.http = http;
        this.url = 'http://ec2-54-207-63-160.sa-east-1.compute.amazonaws.com:3000/products';
    }
    ProductsService.prototype.getProducts = function () {
        return this.http.get(this.url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .then(function (products) { return products.filter(function (product) { return product.group === GROUP_ID; }); })
            .catch(function (error) {
            console.error('Error on get products', error);
            return Promise.reject(error.message || error);
        });
    };
    ProductsService.prototype.getProduct = function (id) {
        return this.http.get(this.url + ("/" + id))
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(function (error) {
            console.error("Error on get product with ID " + id, error);
            var promise;
            if (error.status) {
                promise = Promise.resolve(null);
            }
            else {
                promise = Promise.reject(error.message || error);
            }
            return promise;
        });
    };
    ProductsService.prototype.searchProducts = function (query) {
        var _this = this;
        query = query.toLowerCase();
        return this.getProducts()
            .then(function (products) { return _this.searchByQuery(query, products); });
    };
    ProductsService.prototype.getFilteredProducts = function (filter, query) {
        var _this = this;
        query = query.toLowerCase();
        var queryParams = filter.map(function (f) {
            var values = [];
            f.values.forEach(function (value) {
                if (value.include) {
                    values.push(f.attribute + "=" + value.name);
                }
            });
            return values.join('&');
        });
        return this.http.get(this.url + '?' + queryParams.join('&'))
            .toPromise()
            .then(function (response) { return response.json(); })
            .then(function (products) { return _this.searchByQuery(query, products); })
            .catch(function (error) {
            console.error("Error on get filtered products", error);
            var promise;
            if (error.status) {
                promise = Promise.resolve(null);
            }
            else {
                promise = Promise.reject(error.message || error);
            }
            return promise;
        });
    };
    ProductsService.prototype.getHighlightedProducts = function () {
        return this.getProducts()
            .then(function (products) { return products.filter(function (product) { return product.highlighted; }); });
    };
    ProductsService.prototype.updateStock = function (productId, amount) {
        return this.http.put(this.url + ("/" + productId + "/increase/stock/" + -amount), {})
            .toPromise()
            .then(function () { });
    };
    ProductsService.prototype.queryMatches = function (query, product) {
        return product.group === GROUP_ID &&
            product.name.toLowerCase().indexOf(query) >= 0;
    };
    ProductsService.prototype.searchByQuery = function (query, products) {
        var _this = this;
        if (query !== '*') {
            products = products.filter(function (product) { return _this.queryMatches(query, product); });
        }
        return products;
    };
    return ProductsService;
}());
ProductsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ProductsService);

var _a;
//# sourceMappingURL=products.service.js.map

/***/ }),

/***/ "../../../../../src/app/integrations/serasa/serasa.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SerasaService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SerasaService = (function () {
    function SerasaService(http) {
        this.http = http;
        this.url = 'http://mc437.viniciusfabri.com';
    }
    SerasaService.prototype.getScore = function (cpf) {
        return this.http.get(this.url + ("/sc/api/score/mc437_key_2017/" + cpf))
            .toPromise()
            .then(function (response) { return ({ score: +response.json().score }); })
            .catch(function (error) {
            var promise = Promise.resolve({ score: 1 });
            // if (error.status === 404) {
            //   promise = Promise.resolve({ score: 1 });
            // } else {
            //   console.error(`Error on get score of CPF ${cpf}`, error);
            //   promise = Promise.reject(error.message || error);
            // }
            return promise;
        });
    };
    return SerasaService;
}());
SerasaService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], SerasaService);

var _a;
//# sourceMappingURL=serasa.service.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"container p-5\">\n\n  <div *ngIf=\"message\" class=\"alert alert-warning\">\n    <strong>Atenção!</strong> {{ message }}\n  </div>\n\n  <div class=\"form-group row\">\n    <label class=\"col-sm-2 col-form-label\">CPF</label>\n    <input type=\"text\" name=\"cpf\" [(ngModel)]=\"cpf\" class=\"col-sm-10 form-control\">\n  </div>\n\n  <div class=\"form-group row\">\n    <label class=\"col-sm-2 col-form-label\">Senha</label>\n    <input type=\"password\" name=\"password\" [(ngModel)]=\"password\" class=\"col-sm-10 form-control\"/>\n  </div>\n\n  <button (click)=\"login()\"\n          type=\"submit\"\n          class=\"btn btn-primary\"\n          [disabled]=\"!password || !cpf\">\n    Entrar\n  </button>\n\n  <button onclick=\"window.open('http://mc437.ddns.net:3000/#/signup','_blank')\"\n          type=\"button\"\n          class=\"btn btn-primary\">\n    Criar conta\n  </button>\n\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_user_service__ = __webpack_require__("../../../../../src/app/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__integrations_clients_client_service__ = __webpack_require__("../../../../../src/app/integrations/clients/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__integrations_mewketing_mewketing_service__ = __webpack_require__("../../../../../src/app/integrations/mewketing/mewketing.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(userService, router, emailService) {
        this.userService = userService;
        this.router = router;
        this.emailService = emailService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.userService.login(this.cpf, this.password)
            .then(function (user) {
            _this.emailService.createReceiver(user.username, user.email);
            _this.router.navigate(['/home']);
        })
            .catch(function (error) {
            if (error == 'ADDRESS_NOT_FOUND')
                _this.router.navigate(['/home']);
            _this.message = error;
            if (error.indexOf(__WEBPACK_IMPORTED_MODULE_3__integrations_clients_client_service__["b" /* AUTH_ERRORS */].INVALID_CPF) >= 0) {
                _this.message = 'CPF inválido';
            }
            else if (error.indexOf(__WEBPACK_IMPORTED_MODULE_3__integrations_clients_client_service__["b" /* AUTH_ERRORS */].NOT_FOUND) >= 0) {
                _this.message = 'Combinação inválida de usuário / senha';
            }
            else {
                _this.message = 'Ocorreu um erro; tente novamente';
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__integrations_mewketing_mewketing_service__["a" /* MewketingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__integrations_mewketing_mewketing_service__["a" /* MewketingService */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\n  background-color: #17adff;\n  padding: 0;\n}\n\n.navbar-brand {\n  padding: 0.5em;\n}\n\n.links {\n  padding: 0;\n}\n\n.links li {\n  padding: 0.5em;\n}\n\n.search-container {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  padding: 0 1em;\n}\n\n.search {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\n.search-container input {\n  border-right: none;\n}\n\n.search-container button {\n  height: 38px;\n  background-color: white;\n  border: 1px solid #ced4da;\n  border-left: none;\n}\n\n.material-icons {\n  vertical-align: middle;\n}\n\n.dropdown-link {\n  background-color: transparent;\n  border: none;\n}\n\n.special-link {\n  background-color: rgba(0, 0, 0, 0.2);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark\">\n  <a class=\"navbar-brand\" href=\"/home\">Atlantida</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\">\n    <ul class=\"navbar-nav mr-5 links\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/home\" routerLinkActive=\"active\">Home <span class=\"sr-only\">(atual)</span></a>\n      </li>\n      <li class=\"nav-item\" ngbDropdown>\n        <button class=\"nav-link dropdown-link\"\n                ngbDropdownToggle\n                aria-haspopup=\"true\"\n                aria-expanded=\"false\"\n                type=\"button\">\n          Produtos\n        </button>\n        <div ngbDropdownMenu>\n          <a class=\"dropdown-item\" routerLink=\"/search/celular\">Celulares</a>\n          <a class=\"dropdown-item\" routerLink=\"/search/computador\">Computadores</a>\n          <div class=\"dropdown-divider\"></div>\n\n          <a class=\"dropdown-item\" routerLink=\"/search/geladeira\">Geladeiras</a>\n          <a class=\"dropdown-item\" routerLink=\"/search/fogão\">Fogões</a>\n          <div class=\"dropdown-divider\"></div>\n\n          <a class=\"dropdown-item\" href=\"/products/\">Ver todas as categorias</a>\n        </div>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/about\" routerLinkActive=\"active\">Quem somos</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/help\" routerLinkActive=\"active\">Ajuda</a>\n      </li>\n    </ul>\n\n    <div class=\"input-group form-inline my-2 my-lg-0 search-container\">\n      <input [(ngModel)]=\"query\"\n             class=\"form-control\"\n             placeholder=\"Nome do produto\"\n             (keyup.enter)=\"searchProducts()\">\n      <span class=\"input-group-btn\">\n        <button (click)=\"searchProducts()\"  class=\"btn btn-light my-2 my-sm-0\">\n          <i class=\"material-icons\">search</i>\n        </button>\n      </span>\n    </div>\n\n    <ul class=\"navbar-nav mr-3 links\">\n      <li class=\"nav-item special-link\">\n        <a *ngIf=\"user; else notLoggedIn\"\n           class=\"nav-link\"\n           routerLink=\"/user\"\n           routerLinkActive=\"active\">\n          Meu perfil\n        </a>\n        <ng-template #notLoggedIn>\n          <a class=\"nav-link\"\n             routerLink=\"/login\"\n             routerLinkActive=\"active\">\n            Entrar\n          </a>\n        </ng-template>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link \" role=\"button\"  routerLink=\"/shopcart\" href=\"#\" ngbTooltip=\"Meu carrinho\"  placement=\"bottom\">\n          <span class=\"badge badge-primary\">{{shopCartAmount}}</span>\n          <i class=\"material-icons \">shopping_cart</i>\n        </a>\n      </li>\n  </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shopcart_shopcart_service__ = __webpack_require__("../../../../../src/app/shopcart/shopcart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user_service__ = __webpack_require__("../../../../../src/app/user/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavBarComponent = (function () {
    function NavBarComponent(router, scs, userService) {
        this.router = router;
        this.scs = scs;
        this.userService = userService;
    }
    NavBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.scs.shopCartAmount.subscribe(function (shopCartAmount) {
            _this.shopCartAmount = shopCartAmount;
        });
        this.userSubscription = this.userService.getUserObservable()
            .subscribe(function (user) { return _this.user = user; });
    };
    NavBarComponent.prototype.searchProducts = function () {
        this.router.navigate(['/search/', this.query]);
    };
    NavBarComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    };
    return NavBarComponent;
}());
NavBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-nav',
        template: __webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shopcart_shopcart_service__["a" /* ShopCartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shopcart_shopcart_service__["a" /* ShopCartService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_user_service__["a" /* UserService */]) === "function" && _c || Object])
], NavBarComponent);

var _a, _b, _c;
//# sourceMappingURL=nav-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/payments/payment.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/payments/payment.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" class=\"alert alert-warning\">\n  {{ message }}\n</div>\n\n<form *ngIf=\"score == 0\" class=\"container p-5\">\n  <div class=\"form-group row\">\n    <label class=\"col-sm-2 col-form-label\">CPF</label>\n    <input type=\"text\"\n           name=\"cpf\"\n           placeholder=\"12345678900\"\n           [(ngModel)]=\"boleto.cpf_sacado\"\n           class=\"col-sm-10 form-control\">\n  </div>\n  <div class=\"form-group row\">\n    <label class=\"col-sm-2 col-form-label\">Nome</label>\n    <input type=\"text\"\n           name=\"nome\"\n           placeholder=\"Insira seu nome\"\n           [(ngModel)]=\"boleto.nome_sacado\"\n           class=\"col-sm-10 form-control\">\n  </div>\n  <button (click)=\"createBoletoTransaction()\"\n          type=\"button\"\n          class=\"btn btn-primary\"\n          [disabled]=\"!boleto.nome_sacado && !boleto.cpf_sacado\">\n    Confirmar boleto\n  </button>\n</form>\n\n<form *ngIf=\"score == 1\" class=\"container p-5\">\n  <ngb-tabset>\n    <ngb-tab title=\"Boleto\">\n      <ng-template ngbTabContent>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">CPF</label>\n          <input type=\"text\"\n                 name=\"cpf\"\n                 placeholder=\"12345678900\"\n                 [(ngModel)]=\"boleto.cpf_sacado\"\n                 class=\"col-sm-10 form-control\">\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Nome</label>\n          <input type=\"text\"\n                 name=\"nome\"\n                 placeholder=\"Insira seu nome\"\n                 [(ngModel)]=\"boleto.nome_sacado\"\n                 class=\"col-sm-10 form-control\">\n        </div>\n        <button (click)=\"createBoletoTransaction()\"\n                type=\"button\"\n                class=\"btn btn-primary\"\n                [disabled]=\"!boleto.cpf_sacado || !boleto.nome_sacado\">\n          Confirmar boleto\n        </button>\n      </ng-template>\n    </ngb-tab>\n\n    <ngb-tab title=\"Cartão de credito\">\n      <ng-template ngbTabContent>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Numero do cartão de crédito</label>\n          <input type=\"text\"\n                 name=\"numero_cartao\"\n                 placeholder=\"1234 1234 1234 1234\"\n                 [(ngModel)]=\"credit.numero_cartao\"\n                 class=\"col-sm-10 form-control\">\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Nome no cartão</label>\n          <input type=\"text\"\n                 name=\"Nome no cartão\"\n                 placeholder=\"Nome\"\n                 [(ngModel)]=\"credit.nome_cartao\"\n                 class=\"col-sm-10 form-control\">\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Código de segurança</label>\n          <input type=\"text\"\n                 name=\"codigo de verificacao\"\n                 placeholder=\"código atrás do cartão\"\n                 [(ngModel)]=\"credit.codigo_verificaccao\"\n                 class=\"col-sm-10 form-control\">\n        </div>\n        <form class=\"form-inline\">\n          <div class=\"form-group\">\n            <div class=\"input-group\">\n              <label class=\"col-sm-2 col-form-label\">Data de expiração</label>\n              <input class=\"form-control\"\n                     placeholder=\"yyyy-mm-dd\"\n                     name=\"dp\"\n                     [(ngModel)]=\"credit.data_expiracao\"\n                     ngbDatepicker #d=\"ngbDatepicker\">\n              <button class=\"input-group-addon\" (click)=\"d.toggle()\" type=\"button\">\n                <img src=\"img/calendar-icon.svg\"\n                     style=\"width: 1.2rem;\n                     height: 1rem;\n                     cursor: pointer;\"/>\n              </button>\n            </div>\n          </div>\n        </form>\n        <div class=\"row\">\n          <div class=\"col\">\n            <div ngbDropdown class=\"d-inline-block\">\n              <button class=\"btn btn-outline-primary\"\n                      id=\"dropdownBasic1\"\n                      ngbDropdownToggle>Numero de parcelas</button>\n              <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n                <button class=\"dropdown-item\">1</button>\n                <button class=\"dropdown-item\">2</button>\n                <button class=\"dropdown-item\">3</button>\n                <button class=\"dropdown-item\">4</button>\n                <button class=\"dropdown-item\">5</button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <p class=\"\">Preço da parcela: R${{parcel_value}}</p>\n        <button (click)=\"createCreditTransaction()\"\n                type=\"button\"\n                class=\"btn btn-primary\"\n                [disabled]=\"!credit.data_expiracao ||\n                            !credit.codigo_verificaccao ||\n                            !credit.nome_cartao ||\n                            !credit.numero_cartao\">\n          Confirmar cartão de crédito\n        </button>\n      </ng-template>\n    </ngb-tab>\n\n    <ngb-tab title=\"Cartão de débito\">\n      <ng-template ngbTabContent>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Numero do cartão de crédito</label>\n          <input type=\"text\"\n                 name=\"numero_cartao\"\n                 placeholder=\"1234 1234 1234 1234\"\n                 [(ngModel)]=\"debit.numero_cartao\"\n                 class=\"col-sm-10 form-control\">\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Nome no cartão</label>\n          <input type=\"text\"\n                 name=\"Nome no cartão\"\n                 placeholder=\"Nome\"\n                 [(ngModel)]=\"debit.nome_cartao\"\n                 class=\"col-sm-10 form-control\">\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Código de segurança</label>\n          <input type=\"text\"\n                 name=\"codigo de verificacao\"\n                 placeholder=\"código de 3 dígitos\"\n                 [(ngModel)]=\"debit.codigo_verificaccao\"\n                 class=\"col-sm-10 form-control\">\n        </div>\n        <form class=\"form-inline\">\n          <div class=\"form-group\">\n            <div class=\"input-group\">\n              <label class=\"col-sm-2 col-form-label\">Data de expiração</label>\n              <input class=\"form-control\"\n                     placeholder=\"yyyy-mm-dd\"\n                     name=\"dp\"\n                     [(ngModel)]=\"debit.data_expiracao\"\n                     ngbDatepicker #d=\"ngbDatepicker\">\n              <button class=\"input-group-addon\" (click)=\"d.toggle()\" type=\"button\">\n                <img src=\"img/calendar-icon.svg\"\n                     style=\"width: 1.2rem;\n                     height: 1rem;\n                     cursor: pointer;\"/>\n              </button>\n            </div>\n          </div>\n        </form>\n        <button (click)=\"createDebitTransaction()\"\n                type=\"button\"\n                class=\"btn btn-primary\"\n                [disabled]=\"!debit.data_expiracao ||\n                            !debit.codigo_verificaccao ||\n                            !debit.nome_cartao ||\n                            !debit.numero_cartao\">\n          Confirmar cartão de débito\n        </button>\n      </ng-template>\n    </ngb-tab>\n  </ngb-tabset>\n</form>\n\n"

/***/ }),

/***/ "../../../../../src/app/payments/payment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__integrations_payments_payments_service__ = __webpack_require__("../../../../../src/app/integrations/payments/payments.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__integrations_serasa_serasa_service__ = __webpack_require__("../../../../../src/app/integrations/serasa/serasa.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user_service__ = __webpack_require__("../../../../../src/app/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__server_server_service__ = __webpack_require__("../../../../../src/app/server/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shopcart_shopcart_service__ = __webpack_require__("../../../../../src/app/shopcart/shopcart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__integrations_delivery_delivery_service__ = __webpack_require__("../../../../../src/app/integrations/delivery/delivery.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__integrations_mewketing_mewketing_service__ = __webpack_require__("../../../../../src/app/integrations/mewketing/mewketing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__integrations_products_products_service__ = __webpack_require__("../../../../../src/app/integrations/products/products.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var apiKey = '5e2d5ed388d629742072abd528460bf2';
var cnpj = '57414735000189';
var json = 'JSON';
var boleto = '1';
var credit = '2';
var debit = '3';
var PaymentComponent = (function () {
    function PaymentComponent(paymentService, serasaService, userService, serverService, shopCartService, deliveryService, mailService, productsService) {
        this.paymentService = paymentService;
        this.serasaService = serasaService;
        this.userService = userService;
        this.serverService = serverService;
        this.shopCartService = shopCartService;
        this.deliveryService = deliveryService;
        this.mailService = mailService;
        this.productsService = productsService;
    }
    PaymentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shopcart = this.shopCartService.getShopCartList();
        this.boleto = {};
        this.credit = {
            valor_total: this.getTotalCost().toString(10),
            cnpj_loja: '',
            format: 'JSON',
            api_key: apiKey,
            tipo_trans: credit,
            nome_sacado: '',
            cpf_sacado: '',
            numero_cartao: '',
            nome_cartao: '',
            data_expiracao: '',
            codigo_verificacao: '',
            tipo_cartao: '',
            n_parcelas: '',
            valor_parcela: '',
        };
        this.debit = {};
        this.userService.getCurrentUser()
            .then(function (user) {
            _this.user = user;
            _this.serasaService.getScore(user.cpf)
                .then(function (response) { return _this.score = response.score; });
        });
    };
    PaymentComponent.prototype.createCreditTransaction = function () {
        var _this = this;
        this.paymentService.postCredit(this.credit)
            .then(function (res) {
            _this.createPayment(res);
            _this.message = res.message;
        });
    };
    PaymentComponent.prototype.createBoletoTransaction = function () {
        var _this = this;
        this.paymentService.postBoleto(this.boleto)
            .then(function (res) {
            _this.createPayment(res);
            _this.message = res.message;
        });
    };
    PaymentComponent.prototype.createDebitTransaction = function () {
        var _this = this;
        this.paymentService.postDebit(this.debit)
            .then(function (res) {
            _this.createPayment(res);
            _this.message = res.message;
        });
    };
    PaymentComponent.prototype.getTotalCost = function () {
        return this.shopcart.reduce(function (cost, item) { return cost + item.price * item.amount; }, 0);
        ;
    };
    PaymentComponent.prototype.createPayment = function (response) {
        var _this = this;
        var totalCost = this.getTotalCost();
        var packageInfo = {
            destinatario: this.user.name,
            destino_cep: +this.user.address[0].CEP,
            destino_numero: +this.user.address[0].number,
            destino_estado: this.user.address[0].state,
            destino_cidade: this.user.address[0].city,
            destino_endereco: this.user.address[0].street,
            volume: this.shopcart.reduce(function (vol, item) { return item.volume + vol; }, 0),
        };
        this.mailService.sendEmail(new Date().toISOString(), 'Compra efetuada em Atlantida', 'compra', [this.user.username], {
            vars: ['email', 'products', 'price'],
            values: [{
                    email: this.user.email,
                    products: this.shopcart.map(function (item) { return item.name; }).join(', '),
                    price: totalCost.toString()
                }]
        }).then(function () {
            var promises = [];
            _this.shopcart.forEach(function (item) {
                promises.push(_this.productsService.updateStock(item.productId, item.amount));
            });
            Promise.all(promises).then(function () { return _this.shopCartService.clearShopCart(); });
        });
        this.deliveryService.postPackage(packageInfo)
            .then(function (deliveryResponse) {
            _this.serverService.createPayment({
                cpf: _this.user.cpf,
                products: _this.shopcart.slice(),
                sale_date: new Date(),
                total_cost: totalCost,
                payment_id: response.data.id_transacao,
                delivery_id: deliveryResponse.id,
                shipping_cost: _this.shippingCost,
            }).then(function () {
                _this.message = 'Compra efetuada com suceso!';
            });
        });
    };
    return PaymentComponent;
}());
PaymentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-payment',
        template: __webpack_require__("../../../../../src/app/payments/payment.component.html"),
        styles: [__webpack_require__("../../../../../src/app/payments/payment.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__integrations_payments_payments_service__["a" /* PaymentsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__integrations_payments_payments_service__["a" /* PaymentsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__integrations_serasa_serasa_service__["a" /* SerasaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__integrations_serasa_serasa_service__["a" /* SerasaService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__server_server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__server_server_service__["a" /* ServerService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__shopcart_shopcart_service__["a" /* ShopCartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shopcart_shopcart_service__["a" /* ShopCartService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__integrations_delivery_delivery_service__["a" /* DeliveryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__integrations_delivery_delivery_service__["a" /* DeliveryService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__integrations_mewketing_mewketing_service__["a" /* MewketingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__integrations_mewketing_mewketing_service__["a" /* MewketingService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__integrations_products_products_service__["a" /* ProductsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__integrations_products_products_service__["a" /* ProductsService */]) === "function" && _h || Object])
], PaymentComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=payment.component.js.map

/***/ }),

/***/ "../../../../../src/app/product-pics/product-pics.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".product-pic {\n  width: auto;\n  height: 100%;\n  display: block;\n  margin: auto;\n}\n\n.product-pic-empty {\n  background-color: #666;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product-pics/product-pics.component.html":
/***/ (function(module, exports) {

module.exports = "<ngb-carousel *ngIf=\"product?.img.length > 0; else noPic\">\n  <ng-template ngbSlide *ngFor=\"let picture of product.img\">\n    <div [ngStyle]=\"{ 'height': height + 'px' }\">\n      <a *ngIf=\"link; else noLink\" routerLink=\"/products/{{ product._id }}\">\n        <img src=\"{{picture}}\" class=\"product-pic\" />\n      </a>\n      <ng-template #noLink>\n        <img src=\"{{picture}}\" class=\"product-pic\" />\n      </ng-template>\n    </div>\n  </ng-template>\n</ngb-carousel>\n<ng-template #noPic>\n  <img class=\"product-pic product-pic-empty\" [ngStyle]=\"{ 'height': maxHeight + 'px' }\">\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/product-pics/product-pics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductPicsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductPicsComponent = (function () {
    function ProductPicsComponent() {
        this.height = 500;
    }
    ProductPicsComponent.prototype.ngOnInit = function () {
    };
    return ProductPicsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], ProductPicsComponent.prototype, "product", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Boolean)
], ProductPicsComponent.prototype, "link", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], ProductPicsComponent.prototype, "height", void 0);
ProductPicsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-product-pics',
        template: __webpack_require__("../../../../../src/app/product-pics/product-pics.component.html"),
        styles: [__webpack_require__("../../../../../src/app/product-pics/product-pics.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProductPicsComponent);

//# sourceMappingURL=product-pics.component.js.map

/***/ }),

/***/ "../../../../../src/app/product/product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".image-box {\n  width:45%;\n  margin-right:2%;\n  float: left;\n  height: 500px;\n}\n\n.row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-bottom: 20px;\n}\n\n.product-box {\n  padding: 20px;\n  background-color: #e6e6e6;\n  width:50%;\n  float: left;\n}\n\n.product-title {\n  margin-bottom: 1em;\n}\n\n.btn-add-to {\n  background-color: #0066cc;\n  color: white;\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.btn-add-to:hover {\n  background-color: white;\n  color: #737373;\n}\n\n.clearfix {\n    clear:both\n}\n\n.price {\n  margin-left: 50px;\n  font-size: 30px;\n  font-weight: bold;\n}\n\n.review-user {\n  opacity: 0.5;\n  float: right;\n  padding-right: 20px;\n}\n\n.review-box {\n  margin: 5px;\n  border: 1px solid grey;\n  border-radius: 5px;\n}\n\n.review-box-header {\n  padding: 8px;\n  background-color: #e6e6e6;\n  border-bottom: solid 1px grey;\n}\n\n.review-title {\n  font-weight: bold;\n}\n\n.review-box-body {\n  padding: 8px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loading-icon *ngIf=\"product === undefined\"></app-loading-icon>\n\n<div *ngIf=\"product === null\" class=\"p-5\">\n  <h2>Produto não encontrado</h2>\n  <p>\n    Parece que a página que você está tentando acessar\n    não existe ou não está mais disponível.\n  </p>\n</div>\n\n<div *ngIf=\"product\" class=\"p-5\">\n  <div class=\"row\">\n    <div class=\"image-box\">\n      <app-product-pics [product]=\"product\"></app-product-pics>\n    </div>\n    <div class = \"product-box\">\n      <h2 class=\"product-title\">{{ product.name }}\n        <app-stars [amount]=\"averageReview\" [max]=\"5\"></app-stars>\n      </h2>\n\n      <label class=\"price\">Por {{ product.price | currency:'BRL':'R$' }}</label>\n      <div *ngIf=\"product.stock > 0\" class=\"p-5\">\n        <div class=\"row\">\n          <label class=\"col-5 mt-1\">Selecione a quantidade:</label>\n          <select class=\"form-control col-2\" [(ngModel)]=\"selectedAmount\" (change)=\"onChange($event)\" >\n            <option *ngFor=\"let amount of amountPossibilities\" [ngValue]=\"amount\">\n              {{amount}}\n            </option>\n          </select>\n        </div>\n        <div *ngIf=\"shopCartContains() > 0; then updateCartButton; else addToCartButton\"></div>\n        <ng-template #updateCartButton>\n          <button  type=\"button\" class=\"btn btn-default btn-add-to mt-4 mb-4\" (click)=add() ngbTooltip=\"{{shopCartContains()}} no carrinho\">Atualizar o Carrinho</button>\n        </ng-template>\n        <ng-template #addToCartButton >\n          <button type=\"button\" class=\"btn btn-default btn-add-to mt-4 mb-4\" (click)=add()>Colocar no Carrinho</button>\n        </ng-template>\n\n\n\n\n        <ngb-alert  *ngIf=\"successMessage\" type=\"success\" (close)=\"successMessage = null\">{{ successMessage }}</ngb-alert>\n      </div>\n\n      <div *ngIf=\"product.stock === 0\" class=\"p-5\">\n        Produto Indisponível\n      </div>\n    </div>\n  </div>\n\n  <div class=\"clearfix\"></div>\n\n  <h3>Informações</h3>\n  <ul>\n    <li>Marca: {{ product.brand }}</li>\n    <li>Modelo: {{ product.model }}</li>\n    <li>Cor: {{ product.color }}</li>\n    <li>Ano: {{ product.year }}</li>\n    <li>Peso: {{ product.weight }} Kg</li>\n    <li>Altura: {{ product.dimensions[2] }}m</li>\n    <li>Largura: {{ product.dimensions[1] }}m</li>\n    <li>Comprimento: {{ product.dimensions[0] }}m</li>\n  </ul>\n  <h3>Avaliações ({{ reviews.length }})\n    <app-stars [amount]=\"averageReview\" [max]=\"5\"></app-stars>\n  </h3>\n\n  <div class=\"review-box\" *ngFor=\"let review of reviews\">\n    <div class=\"review-box-header\">\n      <label class=\"review-title\">{{review.title}}</label>\n      <app-stars [amount]=\"review.review\" [max]=\"5\"></app-stars>\n      <div class=\"review-user\"> {{review.user}}</div></div>\n    <div class=\"review-box-body\">{{review.body}}</div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_debounceTime__ = __webpack_require__("../../../../rxjs/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__integrations_products_products_service__ = __webpack_require__("../../../../../src/app/integrations/products/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shopcart_shopcart_service__ = __webpack_require__("../../../../../src/app/shopcart/shopcart.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductComponent = (function () {
    function ProductComponent(route, productsService, scs) {
        this.route = route;
        this.productsService = productsService;
        this.scs = scs;
        this.amountPossibilities = [];
        this.reviews = [
            { user: "leila", title: "achei um lixo", body: "muito bom amei", review: 5 },
            { user: "eiki", title: "gostei", body: "que tiroooo pisa menos 10/10", review: 4 },
        ];
        this.selectedAmount = 1;
        this._success = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) { return _this.productsService.getProduct(params.get('id')); })
            .subscribe(function (product) {
            _this.product = product;
            _this.setReviews();
        });
        this._success.subscribe(function (message) { return _this.successMessage = message; });
        __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_debounceTime__["debounceTime"].call(this._success, 5000).subscribe(function () { return _this.successMessage = null; });
    };
    ProductComponent.prototype.setReviews = function () {
        var arraySize = Math.min(this.product.stock, 10);
        this.amountPossibilities = Array(arraySize).fill(0).map(function (val, i) { return i + 1; });
        var sum = this.reviews.reduce(function (sum, review) { return sum + review.review; }, 0);
        this.averageReview = sum / this.reviews.length;
    };
    ProductComponent.prototype.add = function () {
        this.scs.addToCart(this.product, this.selectedAmount);
        this._success.next("Carrinho atualizado");
    };
    ProductComponent.prototype.shopCartContains = function () {
        var shopCart = this.scs.getShopCart();
        return shopCart[this.product._id] ? shopCart[this.product._id].amount : 0;
    };
    return ProductComponent;
}());
ProductComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-product',
        template: __webpack_require__("../../../../../src/app/product/product.component.html"),
        styles: [__webpack_require__("../../../../../src/app/product/product.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__integrations_products_products_service__["a" /* ProductsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__integrations_products_products_service__["a" /* ProductsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__shopcart_shopcart_service__["a" /* ShopCartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shopcart_shopcart_service__["a" /* ShopCartService */]) === "function" && _c || Object])
], ProductComponent);

;
var _a, _b, _c;
//# sourceMappingURL=product.component.js.map

/***/ }),

/***/ "../../../../../src/app/product/stars/stars.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".stars {\n  display: inline-block;\n}\n\n.star-filled {\n  font-size: 1.5rem;\n  color: #0066cc;\n}\n\n.star-empty {\n  font-size: 1.5rem;\n  color: #b0c4de;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/stars/stars.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let star of stars\" class=\"stars\">\n  <div *ngIf=\"star; else noStar\" class=\"star-filled\">&#9733;</div>\n  <ng-template #noStar><div class=\"star-empty\">&#9733;</div></ng-template>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/product/stars/stars.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StarsComponent = (function () {
    function StarsComponent() {
    }
    StarsComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        this.stars = Array(this.max).fill(false).map(function (v, i) { return i < _this.amount; });
    };
    return StarsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], StarsComponent.prototype, "amount", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], StarsComponent.prototype, "max", void 0);
StarsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-stars',
        template: __webpack_require__("../../../../../src/app/product/stars/stars.component.html"),
        styles: [__webpack_require__("../../../../../src/app/product/stars/stars.component.css")]
    }),
    __metadata("design:paramtypes", [])
], StarsComponent);

//# sourceMappingURL=stars.component.js.map

/***/ }),

/***/ "../../../../../src/app/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.filters {\n  min-width: 200px;\n  background-color: #ddd;\n  padding: 1em;\n  list-style: none;\n  overflow: auto;\n}\n\n.division {\n  margin: 1em 0;\n  border-bottom: #aaa 1px solid;\n}\n\n.result {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\n.card-img-top {\n  height: 240px;\n  width: 240px;\n  background-color: #1b1e21;\n  display: block;\n  margin: auto;\n}\n\n.card {\n  min-width: 250px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"filters\">\n  <li class=\"division\">\n    <label>Ordenar por:</label>\n    <select [(ngModel)]=\"ordering\" (change)=\"orderBy()\">\n      <option value=\"sortAsc\">A-Z</option>\n      <option value=\"sortDsc\">Z-A</option>\n      <option value=\"sortAscVal\">Menor preço</option>\n      <option value=\"sortDscVal\">Maior preço</option>\n    </select>\n  </li>\n  <li *ngFor=\"let attribute of attributes\" class=\"division\">\n    <label>{{ translate(attribute.attribute) }}</label>\n    <div *ngFor=\"let value of attribute.values\">\n      <input type=\"checkbox\" [(ngModel)]=\"value.include\" (change)=\"filter()\" />\n      <label>{{ value.name }}</label>\n    </div>\n  </li>\n</ul>\n\n<app-loading-icon *ngIf=\"searchResults === undefined\"></app-loading-icon>\n\n<div class=\"results\">\n  <div *ngIf=\"searchResults && searchResults.length === 0\" class=\"p-5\">\n    <h2>Sua busca não retornou resultados</h2>\n    <p>\n      Verifique se o nome digitado está correto.\n    </p>\n  </div>\n\n  <div *ngIf=\"searchResults && searchResults.length > 0\" class=\"p-5\">\n    <ul class=\"card-group mt-4\">\n      <li *ngFor=\"let item of products\"\n          class=\"card text-center m-2\">\n        <app-product-pics [product]=\"item\" [link]=\"true\" [height]=\"240\"></app-product-pics>\n        <div class=\"card-body\">\n          <a routerLink=\"/products/{{item._id}}\">\n            <h4 class=\"card-title\">{{ item.name }}</h4>\n            <p class=\"card-text\">{{ item.price | currency:'BRL':'R$' }}</p>\n          </a>\n        </div>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__integrations_products_products_service__ = __webpack_require__("../../../../../src/app/integrations/products/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = (function () {
    function SearchComponent(productService, route) {
        this.productService = productService;
        this.route = route;
        this.productAttributes = ['brand', 'year'];
        this.attributesTranslation = ['Marca', 'Ano'];
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) {
            _this.query = params.get('searchQuery') || '*';
            return _this.productService.searchProducts(_this.query);
        })
            .subscribe(function (products) {
            _this.searchResults = products;
            _this.products = products;
            _this.attributes = _this.productAttributes.map(function (attribute) {
                var values = Array.from(new Set(products.map(function (p) { return p[attribute]; })));
                values = values.map(function (value) { return ({ name: value, include: true }); });
                return {
                    attribute: attribute,
                    values: values,
                };
            });
        });
    };
    SearchComponent.prototype.orderBy = function () {
        if (this[this.ordering]) {
            this[this.ordering]();
        }
    };
    SearchComponent.prototype.filter = function () {
        var _this = this;
        this.productService.getFilteredProducts(this.attributes, this.query)
            .then(function (products) { return _this.products = products; });
    };
    SearchComponent.prototype.translate = function (value) {
        return this.attributesTranslation[this.productAttributes.indexOf(value)];
    };
    SearchComponent.prototype.sortAsc = function () {
        this.products = this.products.sort(function (a, b) { return a.name.localeCompare(b.name); });
    };
    SearchComponent.prototype.sortDsc = function () {
        this.products = this.products.sort(function (a, b) { return b.name.localeCompare(a.name); });
    };
    SearchComponent.prototype.sortAscVal = function () {
        this.products = this.products.sort(function (a, b) { return a.price - b.price; });
    };
    SearchComponent.prototype.sortDscVal = function () {
        this.products = this.products.sort(function (a, b) { return b.price - a.price; });
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-search',
        template: __webpack_require__("../../../../../src/app/search/search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/search/search.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__integrations_products_products_service__["a" /* ProductsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__integrations_products_products_service__["a" /* ProductsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], SearchComponent);

var _a, _b;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/app/server/server.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerService; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServerService = (function () {
    function ServerService(http) {
        this.http = http;
        this.url = '/api/payments';
    }
    ServerService.prototype.createPayment = function (payment) {
        var params = __assign({}, payment, { products: JSON.stringify(payment.products) });
        return this.http.post(this.url, params)
            .toPromise()
            .then(function (response) { });
    };
    ServerService.prototype.getPayments = function (cpf) {
        return this.http.get(this.url)
            .toPromise()
            .then(function (res) {
            var payments = res.json();
            return payments.filter(function (payment) { return payment.cpf === cpf; })
                .map(function (payment) { return (__assign({}, payment, { products: JSON.parse(payment.products) })); });
        });
    };
    return ServerService;
}());
ServerService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ServerService);

var _a;
//# sourceMappingURL=server.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/loading-icon/loading-icon.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".loading-icon {\n  font-size: 3em;\n  text-align: center;\n  padding: 3em;\n  -webkit-animation: rotate 2s infinite;\n          animation: rotate 2s infinite;\n  display: block;\n}\n\n.loading-icon.mini {\n  padding: 0.2em;\n  font-size: 1em;\n  display: inline-block;\n}\n\n@-webkit-keyframes rotate {\n  0%   { -webkit-transform: rotate(0); transform: rotate(0);      }\n  50%  { -webkit-transform: rotate(180deg); transform: rotate(180deg); }\n  100% { -webkit-transform: rotate(0); transform: rotate(0);      }\n}\n\n@keyframes rotate {\n  0%   { -webkit-transform: rotate(0); transform: rotate(0);      }\n  50%  { -webkit-transform: rotate(180deg); transform: rotate(180deg); }\n  100% { -webkit-transform: rotate(0); transform: rotate(0);      }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/loading-icon/loading-icon.component.html":
/***/ (function(module, exports) {

module.exports = "<i [class]=\"'material-icons loading-icon ' + (mini ? 'mini' : '')\">cached</i>\n"

/***/ }),

/***/ "../../../../../src/app/shared/loading-icon/loading-icon.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingIconComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingIconComponent = (function () {
    function LoadingIconComponent() {
    }
    LoadingIconComponent.prototype.ngOnInit = function () {
    };
    return LoadingIconComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Boolean)
], LoadingIconComponent.prototype, "mini", void 0);
LoadingIconComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-loading-icon',
        template: __webpack_require__("../../../../../src/app/shared/loading-icon/loading-icon.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/loading-icon/loading-icon.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LoadingIconComponent);

//# sourceMappingURL=loading-icon.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loading_icon_loading_icon_component__ = __webpack_require__("../../../../../src/app/shared/loading-icon/loading-icon.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__loading_icon_loading_icon_component__["a" /* LoadingIconComponent */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__loading_icon_loading_icon_component__["a" /* LoadingIconComponent */],
        ]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/app/shopcart/shopcart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".shopcart-table {\n  width: 60%;\n}\n\n.btn-circle {\n  width: 30px;\n  height: 30px;\n  text-align: center;\n  padding: 2px 0;\n  font-size: 12px;\n  line-height: 1.428571429;\n  border-radius: 15px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shopcart/shopcart.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Lista de produtos -->\n<div class=\"p-5\">\n    <div *ngIf=\"shopCartList.length > 0\" >\n      <h2>Meu Carrinho</h2>\n\n      <div class=\"d-flex justify-content-center\">\n        <table class=\"table shopcart-table\">\n            <thead>\n                <tr>\n                    <th scope=\"col\">Quantidade</th>\n                    <th scope=\"col\">Produto</th>\n                    <th scope=\"col\">Preço</th>\n                    <th scope=\"col\"></th><!-- Remover -->\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let item of shopCartList; let i = index\">\n                    <td>\n                        <button type=\"button\" (click)=\"decrease(item)\" class=\"btn btn-danger btn-circle\"\n                                  ngbTooltip=\"Limite atingido\" triggers=\"manual\" #decreaseTooltip=\"ngbTooltip\"><i class=\"material-icons\">remove_circle_outline</i></button>\n                        <span>{{item.amount | number }}</span>\n                        <button type=\"button\" (click)=\"increase(item)\" class=\"btn btn-primary btn-circle\"\n                                  ngbTooltip=\"Limite atingido\" triggers=\"manual\" #increaseTooltip=\"ngbTooltip\"><i class=\"material-icons\">add_circle_outline</i></button>\n                    </td>\n                    <td>{{item.name}}</td>\n                    <td>{{item.price | currency:'BRL':'R$'}}</td>\n                    <td><button class=\"btn \" (click)=\"remove(item, i)\"><i class=\"material-icons\">remove_shopping_cart</i></button></td>\n                </tr>\n            </tbody>\n        </table>\n      </div>\n    </div>\n    <h2 *ngIf=\"shopCartList.length == 0\">Carrinho vazio :(</h2>\n</div>\n\n<div class=\"text-center my-5\">\n  <a class=\"btn btn-primary\" routerLink=\"/payment\">\n    Finalizar compra\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shopcart/shopcart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shopcart_shopcart_service__ = __webpack_require__("../../../../../src/app/shopcart/shopcart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopCartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShopCartComponent = (function () {
    function ShopCartComponent(scs) {
        this.scs = scs;
        this.storage = '';
    }
    ShopCartComponent.prototype.increase = function (item) {
        var _this = this;
        this.scs.getStock(item.productId).then(function (stock) {
            if (item.amount < stock)
                _this.scs.increase(item);
            else {
                _this.increaseTooltip.open();
                setTimeout(function () { return _this.decreaseTooltip.close(); }, 3000);
            }
        });
    };
    ShopCartComponent.prototype.decrease = function (item) {
        var _this = this;
        if (item.amount == 1) {
            this.decreaseTooltip.open();
            setTimeout(function () { return _this.decreaseTooltip.close(); }, 3000);
        }
        else {
            this.scs.decrease(item);
        }
    };
    ShopCartComponent.prototype.remove = function (item, i) {
        this.scs.remove(item);
        this.shopCartList.splice(i, 1);
    };
    ShopCartComponent.prototype.ngOnInit = function () {
        this.shopCartList = this.scs.getShopCartList();
    };
    return ShopCartComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ViewChild */])('decreaseTooltip'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbTooltip */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbTooltip */]) === "function" && _a || Object)
], ShopCartComponent.prototype, "decreaseTooltip", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ViewChild */])('increaseTooltip'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbTooltip */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbTooltip */]) === "function" && _b || Object)
], ShopCartComponent.prototype, "increaseTooltip", void 0);
ShopCartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-shopcart',
        template: __webpack_require__("../../../../../src/app/shopcart/shopcart.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shopcart/shopcart.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__shopcart_shopcart_service__["a" /* ShopCartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shopcart_shopcart_service__["a" /* ShopCartService */]) === "function" && _c || Object])
], ShopCartComponent);

var _a, _b, _c;
//# sourceMappingURL=shopcart.component.js.map

/***/ }),

/***/ "../../../../../src/app/shopcart/shopcart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__integrations_products_products_service__ = __webpack_require__("../../../../../src/app/integrations/products/products.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopCartService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SHOPCART_ID = "ShopCartItems";
var ShopCartService = (function () {
    function ShopCartService(productsService) {
        this.productsService = productsService;
        var shopCart = this.getShopCart();
        this.shopCartAmount = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](Object.keys(shopCart).length);
    }
    ShopCartService.prototype.addToCart = function (product, amount) {
        // Tries to load shopCart items from localStorage
        var shopCart = this.getShopCart();
        // If the product exists, updates its amount
        if (shopCart[product._id]) {
            shopCart[product._id].amount = amount;
        }
        else {
            // Sets expire date to tomorrow
            var expiryDate = new Date();
            expiryDate.setDate(expiryDate.getDate() + 1);
            // Adds it to the storage
            shopCart[product._id] = {
                productId: product._id,
                name: product.name,
                amount: amount,
                price: product.price,
                expires: expiryDate,
                volume: product.dimensions.reduce(function (vol, d) { return vol * d; }, 1),
            };
            this.shopCartAmount.next(Object.keys(shopCart).length);
        }
        this.saveShopCart(shopCart);
    };
    ShopCartService.prototype.getStock = function (productId) {
        return this.productsService.getProduct(productId)
            .then(function (res) { return res.stock; });
    };
    ShopCartService.prototype.changeAmount = function (item, amount) {
        var shopCart = this.getShopCart();
        if (shopCart[item.productId]) {
            item.amount += amount;
            shopCart[item.productId].amount += amount;
            this.saveShopCart(shopCart);
        }
    };
    ShopCartService.prototype.increase = function (item) {
        this.changeAmount(item, +1);
    };
    ShopCartService.prototype.decrease = function (item) {
        this.changeAmount(item, -1);
    };
    ShopCartService.prototype.remove = function (item) {
        var shopCart = this.getShopCart();
        delete shopCart[item.productId];
        this.saveShopCart(shopCart);
        this.shopCartAmount.next(Object.keys(shopCart).length);
    };
    ShopCartService.prototype.saveShopCart = function (shopCart) {
        getWindow().localStorage.setItem(SHOPCART_ID, JSON.stringify(shopCart));
    };
    ShopCartService.prototype.getShopCartList = function () {
        var shopCart = this.getShopCart();
        return Object.keys(shopCart).map(function (key) { return shopCart[key]; });
    };
    ShopCartService.prototype.getShopCart = function () {
        var json = getWindow().localStorage.getItem(SHOPCART_ID);
        return json ? JSON.parse(json) : {};
    };
    ShopCartService.prototype.clearShopCart = function () {
        getWindow().localStorage.setItem(SHOPCART_ID, '{}');
    };
    return ShopCartService;
}());
ShopCartService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__integrations_products_products_service__["a" /* ProductsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__integrations_products_products_service__["a" /* ProductsService */]) === "function" && _a || Object])
], ShopCartService);

function getWindow() {
    return window;
}
var _a;
//# sourceMappingURL=shopcart.service.js.map

/***/ }),

/***/ "../../../../../src/app/user/address/address.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".address-box{\n  width: 23%;\n  border: 1px solid rgba(0,0,0,.125);\n  border-radius: .25rem;\n  background-color: #efefef;\n  margin-bottom: 5px;\n  margin-left: 3px;\n  padding: 5px;\n}\n\n.sidebtn{\n  float: right;\n}\n\nh1{\n  font-size: 20px;\n  font-style: bold;\n}\n.row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.btn-circle {\n  width: 30px;\n  height: 30px;\n  text-align: center;\n  padding: 2px 0;\n  font-size: 12px;\n  line-height: 1.428571429;\n  border-radius: 15px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/address/address.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"user\">\n  <div class=\"address-box\" *ngFor= \"let address of user.address\" >\n    <h1>Endereço <button type=\"button\" class=\"btn btn-circle sidebtn\" (click)=removeAddress(address.id)><i class=\"material-icons\">remove_circle_outline</i></button></h1>\n    <br>\n    <p><b> CEP:   </b> {{address.cep}}    </p>\n    <p><b> Rua:   </b> {{address.street}} </p>\n    <p><b> Número:</b> {{address.number}} </p>\n    <p><b> Cidade:</b> {{address.city}}   </p>\n    <p><b> Estado:</b> {{address.state}}  </p>\n  </div>\n  <div class=\"address-box\">\n    <h1>Novo Endereço\n      <button type=\"submit\" class=\"btn btn-circle btn-primary sidebtn\" (click)=addAddress()>\n      <i class=\"material-icons\">add_circle_outline</i></button>\n    </h1>\n    <b> CEP:</b>\n    <input type=\"text\" [(ngModel)]=\"cep\" name=\"cep\" class=\"input-group\">\n    <b> Número:</b>\n    <input type=\"text\" [(ngModel)]=\"num\" name=\"num\" class=\"input-group\">\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/user/address/address.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__integrations_clients_client_service__ = __webpack_require__("../../../../../src/app/integrations/clients/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/user/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddressComponent = (function () {
    function AddressComponent(userService, clientService) {
        this.userService = userService;
        this.clientService = clientService;
    }
    AddressComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getCurrentUser()
            .then(function (user) { _this.user = user; });
    };
    AddressComponent.prototype.removeAddress = function (id) {
        var _this = this;
        this.clientService.removeAddress(id).then(function () {
            return _this.userService.updateAdressess(_this.user);
        });
    };
    AddressComponent.prototype.addAddress = function () {
        var _this = this;
        this.clientService.addAddress(this.user.id, this.cep, this.num)
            .then(function (address) {
            if (address.error_code)
                alert("CEP inexistente");
            _this.userService.updateAdressess(_this.user);
        });
    };
    return AddressComponent;
}());
AddressComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-address',
        template: __webpack_require__("../../../../../src/app/user/address/address.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/address/address.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__integrations_clients_client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__integrations_clients_client_service__["a" /* ClientService */]) === "function" && _b || Object])
], AddressComponent);

var _a, _b;
//# sourceMappingURL=address.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/auth/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AuthGuard = (function () {
    function AuthGuard() {
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        return true;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], AuthGuard);

//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/user/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\n.container {\n  width: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<form *ngIf=\"user\" name='editProfile' class=\"container\">\n\n  <div class=\"form-group row\">\n    <label class=\"col-sm-2 col-form-label\">Nome Completo</label>\n    <input type=\"text\" class=\"col-sm-10 form-control\" value=\"{{user.name}}\"/>\n  </div>\n\n  <div class=\"form-group row\">\n    <label class=\"col-sm-2 col-form-label\">Nickname</label>\n    <input type=\"text\" class=\"col-sm-10 form-control\" value=\"{{user.username}}\"/>\n  </div>\n\n  <div class=\"form-group row\">\n    <label class=\"col-sm-2 col-form-label\">CPF</label>\n    <input type=\"text\" readonly class=\"form-control-plaintext\" value=\"{{user.cpf}}\">\n  </div>\n\n  <div class=\"form-group row\">\n    <label class=\"col-sm-2 col-form-label\">Email</label>\n    <input type=\"email\" class=\"col-sm-10 form-control\" value=\"{{user.email}}\"/>\n  </div>\n\n  <div class=\"form-group row\">\n    <label class=\"col-sm-2 col-form-label\">Telefone</label>\n    <input type=\"tel\" class=\"col-sm-10 form-control\" value=\"{{user.phone}}\"/>\n  </div>\n<!--\n  <div class=\"form-group row\">\n    <label class=\"col-sm-2 col-form-label\">CEP</label>\n    <input type=\"text\"\n           class=\"col-sm-10 form-control\"\n           (blur)=\"getAddress()\"\n           [(ngModel)]=\"user.cep\"\n           name=\"editProfile\">\n\n  </div>\n\n  <div class=\"form-group row\">\n    <label class=\"col-sm-2 col-form-label\">\n      Endereço\n      <app-loading-icon *ngIf=\"loading\" [mini]=\"true\"></app-loading-icon>\n    </label>\n    <input type=\"text\"\n           name=\"address\"\n           class=\"col-sm-10 form-control\"\n           [(ngModel)]=\"user.address.endereco\" />\n  </div>\n-->\n\n  <button type=\"submit\" class=\"btn btn-primary\">Salvar</button>\n\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__integrations_cep_cep_service__ = __webpack_require__("../../../../../src/app/integrations/cep/cep.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(userService, cepService) {
        this.userService = userService;
        this.cepService = cepService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getCurrentUser()
            .then(function (user) { _this.user = user; });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/user/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__integrations_cep_cep_service__["a" /* CepService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__integrations_cep_cep_service__["a" /* CepService */]) === "function" && _b || Object])
], ProfileComponent);

var _a, _b;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/shopping-history/shopping-history.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\n.sale {\n  margin: 1em;\n}\n\n.sale-header {\n  display: block;\n}\n\n.sale-title {\n  font-weight: bold;\n}\n\n.sale-date {\n  font-size: 0.8em;\n  color: #444;\n  float: right;\n}\n\n.sale-info {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-left: 1em;\n}\n\n.sale-items-pics {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\n.item-picture {\n  width: 40px;\n  height: 40px;\n  margin: 1px;\n  border: 1px rgba(0,0,0,0.18) solid;\n}\n\n.sale-cost {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  text-align: right;\n}\n\n.status {\n  margin: 1em 1em 2em 1em;\n}\n\n.status-header {\n  display: block;\n  text-align: center;\n  margin: 1em 0;\n}\n\n.status-bar {\n  display: block;\n  margin: 1em;\n  text-align: center;\n}\n\n.status-circle {\n  display: inline-block;\n  border-radius: 25px;\n  width: 40px;\n  height: 40px;\n}\n\n.status-icon {\n  padding: 7px;\n  display: block;\n}\n\n.connection-bar {\n  display: inline-block;\n  height: 5px;\n  width: 75px;\n  vertical-align: text-top;\n}\n\n.not-done{\n  background-color: #b9b8b5;\n}\n\n.done{\n  background-color: #28a745;\n}\n\n.items-table {\n  margin: 1em;\n}\n\n.sale-info {\n  margin: 0 1em 0 1em;\n}\n\n.info {\n  margin-left: 0.6em;\n  font-weight: bold;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/shopping-history/shopping-history.component.html":
/***/ (function(module, exports) {

module.exports = "<ngb-accordion [closeOthers]=\"true\" #acc=\"ngbAccordion\" class=\"pre-scrollable\">\n  <ngb-panel *ngFor=\"let sale of history\" class=\"sale\">\n\n    <ng-template ngbPanelTitle>\n      <div class=\"sale-header\">\n        <label class=\"sale-title\">Compra #{{ sale.id }}</label>\n        <label class=\"sale-date\">Comprado em {{ sale.date | date:'dd/MM/yyyy' }}</label>\n      </div>\n\n      <div class=\"sale-info\">\n        <div class=\"sale-items-pics\">\n          <div class=\"row\">\n            <div *ngFor=\"let item of sale.products; let i = index\" class=\"col-sm-0\">\n              <div *ngIf=\"i < 3; else tooMuchItems\">\n                <img *ngIf=\"item.picture; else noPicture\"\n                     src=\"{{ item.picture }}\"\n                     class=\"item-picture\" />\n\n                <ng-template #noPicture>\n                  <img src=\"/assets/img/no-picture.png\" class=\"item-picture\" />\n                </ng-template>\n              </div>\n\n              <ng-template #tooMuchItems>\n                <div *ngIf=\"i === 3\">\n                  <img src=\"/assets/img/more-pictures.png\" class=\"item-picture\" />\n                </div>\n              </ng-template>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"sale-cost\">{{ sale.totalCost | currency:'BRL':'symbol' }}</div>\n      </div>\n    </ng-template>\n\n    <ng-template ngbPanelContent>\n\n      <!--Sale status-->\n      <div class=\"status\">\n        <div class=\"status-header\">Status da compra</div>\n        <div class=\"status-bar\">\n          <div class=\"status-circle done\" title=\"Compra efetuada\">\n            <i class=\"material-icons status-icon\">local_mall</i>\n          </div>\n\n          <ng-container *ngFor=\"let status of salesStatusBar\">\n            <div class=\"connection-bar\" [ngClass]=\"saleStatus(sale, status.percentage)\"></div>\n            <div class=\"status-circle\"\n                 [ngClass]=\"saleStatus(sale, status.percentage)\"\n                 title=\"{{ status.status }}\">\n              <i class=\"material-icons status-icon\">{{ status.icon }}</i>\n            </div>\n          </ng-container>\n        </div>\n      </div>\n\n      <!--Sale items-->\n      <table class=\"table table-hover table-responsive-sm items-table\">\n        <thead>\n        <tr>\n          <th scope=\"col\">Itens</th>\n          <th scope=\"col\">Nome</th>\n          <th scope=\"col\" class=\"text-right\">Quant.</th>\n          <th scope=\"col\" class=\"text-right\">Preço un.</th>\n          <th scope=\"col\" class=\"text-right\">Total</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let product of sale.products\">\n          <td class=\"align-middle\">\n            <img *ngIf=\"product.picture; else noPicture\"\n                 src=\"{{ product.picture }}\"\n                 class=\"item-picture\" />\n            <ng-template #noPicture>\n              <img src=\"/assets/img/no-picture.png\" class=\"item-picture\"/>\n            </ng-template>\n          </td>\n          <td class=\"align-middle\">{{ product.name }}</td>\n          <td class=\"align-middle text-right\">{{ product.amount }}</td>\n          <td class=\"align-middle text-right\">{{ product.price | currency:'BRL':'symbol' }}</td>\n          <td class=\"align-middle text-right\">{{ product.totalCost | currency:'BRL':'symbol' }}</td>\n        </tr>\n        <tr>\n          <td colspan=\"4\" class=\"align-middle text-right\"><b>Preço frete</b></td>\n          <td class=\"align-middle text-right\">{{ sale.deliveryCost | currency:'BRL':'symbol' }}</td>\n        </tr>\n        <tr>\n          <td colspan=\"4\" class=\"align-middle text-right\"><b>Preço total</b></td>\n          <td class=\"align-middle text-right\">{{ sale.totalCost | currency:'BRL':'symbol' }}</td>\n        </tr>\n        </tbody>\n      </table>\n\n      <!--Sale info-->\n      <p class=\"sale-info\">Método de pagamento:\n        <span class=\"info\">{{ sale.paymentMethod }}</span>\n      </p>\n      <p class=\"sale-info\">Data de estimada de entrega:\n        <span class=\"info\">{{ sale.expectedDelivery | date:'dd/MM/yyyy' }}</span>\n      </p>\n      <p class=\"sale-info\">Local de entrega:\n        <span class=\"info\">{{ sale.deliveryPlace }}</span>\n      </p>\n    </ng-template>\n\n  </ngb-panel>\n</ngb-accordion>\n"

/***/ }),

/***/ "../../../../../src/app/user/shopping-history/shopping-history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingHistoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShoppingHistoryComponent = (function () {
    function ShoppingHistoryComponent(userService) {
        this.userService = userService;
        this.salesStatusBar = [
            { percentage: 25, icon: 'local_atm', status: 'Pagamento recebido' },
            { percentage: 50, icon: 'store_mall_directory', status: 'Empacotado' },
            { percentage: 75, icon: 'local_shipping', status: 'Pacote enviado' },
            { percentage: 100, icon: 'done_all', status: 'Entregue' },
        ];
    }
    ShoppingHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getShoppingHistory()
            .then(function (history) { return _this.history = history; });
    };
    ShoppingHistoryComponent.prototype.saleStatus = function (sale, percentage) {
        var done = sale.statusPercentage >= percentage;
        return {
            'done': done,
            'not-done': !done
        };
    };
    return ShoppingHistoryComponent;
}());
ShoppingHistoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-shopping-history',
        template: __webpack_require__("../../../../../src/app/user/shopping-history/shopping-history.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/shopping-history/shopping-history.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object])
], ShoppingHistoryComponent);

var _a;
//# sourceMappingURL=shopping-history.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.panel-menu {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  border-right: #e8ebef solid thin;\n}\n\n.user-icon {\ndisplay: block;\n}\n\n.user-icon-pic {\n  display: block;\n  width: 80px;\n  height: 80px;\n  margin: 0 auto;\n  border-radius: 50%;\n}\n\n.user-nick {\ndisplay: block;\ntext-align: center;\n}\n\n.user-options{\n  padding: 0.5em;\n  border-top: #e8ebef solid thin;\n}\n\n.panel-item {\n  -webkit-box-flex: 4;\n      -ms-flex: 4;\n          flex: 4;\n  padding-left: 1em;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user; else loadingUser\" class=\"p-4\">\n\n  <div class=\"panel-container\">\n    <div class=\"panel-menu\">\n      <div class=\"user-icon\">\n        <img src=\"{{ user.picture }}\" class=\"user-icon-pic\" />\n        <label class=\"user-nick\">{{user.username}}</label>\n      </div>\n\n      <div class=\"nav flex-column nav-pills user-options\">\n        <a class=\"nav-link\" routerLink=\"history\" routerLinkActive=\"active\">Minhas compras</a>\n        <a class=\"nav-link\" routerLink=\"address\" routerLinkActive=\"active\">Meus endereços</a>\n        <a class=\"nav-link\" routerLink=\"profile\" routerLinkActive=\"active\">Editar perfil</a>\n        <button class=\"btn btn-warning\" (click)=\"logout()\">Sair</button>\n      </div>\n    </div>\n\n    <div class=\"panel-item\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n\n</div>\n\n<ng-template #loadingUser>\n  <app-loading-icon></app-loading-icon>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserComponent = (function () {
    function UserComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getCurrentUser()
            .then(function (user) { return _this.user = user; });
    };
    UserComponent.prototype.logout = function () {
        this.userService.logout();
        this.router.navigate(['/home']);
    };
    return UserComponent;
}());
UserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-user',
        template: __webpack_require__("../../../../../src/app/user/user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/user.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], UserComponent);

var _a, _b;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile_component__ = __webpack_require__("../../../../../src/app/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_auth_guard__ = __webpack_require__("../../../../../src/app/user/auth/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_service__ = __webpack_require__("../../../../../src/app/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shopping_history_shopping_history_component__ = __webpack_require__("../../../../../src/app/user/shopping-history/shopping-history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__address_address_component__ = __webpack_require__("../../../../../src/app/user/address/address.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__integrations_clients_client_service__ = __webpack_require__("../../../../../src/app/integrations/clients/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__integrations_cep_cep_service__ = __webpack_require__("../../../../../src/app/integrations/cep/cep.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    {
        path: 'user',
        component: __WEBPACK_IMPORTED_MODULE_6__user_component__["a" /* UserComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__auth_auth_guard__["a" /* AuthGuard */]],
        children: [
            { path: 'history', component: __WEBPACK_IMPORTED_MODULE_7__shopping_history_shopping_history_component__["a" /* ShoppingHistoryComponent */] },
            { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_2__profile_profile_component__["a" /* ProfileComponent */] },
            { path: 'address', component: __WEBPACK_IMPORTED_MODULE_8__address_address_component__["a" /* AddressComponent */] },
            { path: '', redirectTo: 'history', pathMatch: 'full' }
        ]
    },
];
var UserModule = (function () {
    function UserModule() {
    }
    return UserModule;
}());
UserModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_6__user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_7__shopping_history_shopping_history_component__["a" /* ShoppingHistoryComponent */],
            __WEBPACK_IMPORTED_MODULE_8__address_address_component__["a" /* AddressComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forChild(routes),
            __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_11__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_13__shared_shared_module__["a" /* SharedModule */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__auth_auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_5__user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_10__integrations_clients_client_service__["a" /* ClientService */],
            __WEBPACK_IMPORTED_MODULE_12__integrations_cep_cep_service__["a" /* CepService */]
        ],
    })
], UserModule);

//# sourceMappingURL=user.module.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__integrations_clients_client_service__ = __webpack_require__("../../../../../src/app/integrations/clients/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__server_server_service__ = __webpack_require__("../../../../../src/app/server/server.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var USER_KEY = 'user_info';
function getStorage() { return window.localStorage; }
var UserService = (function () {
    function UserService(clientService, serverService) {
        this.clientService = clientService;
        this.serverService = serverService;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        var json = getStorage().getItem(USER_KEY);
        this.user = json ? JSON.parse(json) : null;
        this.subject.next(this.user);
    }
    UserService.prototype.login = function (cpf, password) {
        var _this = this;
        return this.clientService.authenticate({ cpf: cpf, password: password })
            .then(function (auth) { return _this.getUserInfo(auth.payload.id); });
    };
    UserService.prototype.logout = function () {
        this.user = null;
        getStorage().removeItem(USER_KEY);
        this.subject.next(this.user);
    };
    UserService.prototype.getCurrentUser = function () {
        return Promise.resolve(this.user);
    };
    UserService.prototype.getShoppingHistory = function () {
        return this.serverService.getPayments(this.user.cpf)
            .then(function (payments) { return payments.map(function (payment) {
            return {
                id: payment.payment_id,
                statusLabel: 'Entregue',
                statusPercentage: 100,
                date: payment.sale_date,
                expectedDelivery: payment.sale_date,
                deliveryPlace: 'Instituto de Computação',
                deliveryCost: payment.shipping_cost,
                productsCost: payment.total_cost - payment.shipping_cost,
                totalCost: payment.total_cost,
                paymentMethod: 'Crédito',
                products: payment.products.map(function (product) {
                    return __assign({}, product, { totalCost: product.price * product.amount, picture: '' });
                })
            };
        }); });
    };
    UserService.prototype.getUserObservable = function () {
        return this.subject.asObservable();
    };
    UserService.prototype.getUserInfo = function (clientId) {
        var _this = this;
        return this.clientService.getUserInfo(clientId)
            .then(function (user) { return _this.setUser(user); });
    };
    UserService.prototype.updateAdressess = function (user) {
        var _this = this;
        return this.clientService.getUserAddresses(user.id)
            .then(function (address) {
            _this.user.address = address;
            getStorage().setItem(USER_KEY, JSON.stringify(_this.user));
            return _this.user;
        });
    };
    UserService.prototype.setUser = function (user) {
        var _this = this;
        return this.clientService.getUserAddresses(user.payload.id)
            .then(function (address) {
            _this.user = {
                name: user.payload.name,
                username: user.payload.username,
                email: user.payload.email,
                phone: user.payload.phone,
                cpf: user.payload.cpf,
                address: address,
                id: user.payload.id,
            };
            getStorage().setItem(USER_KEY, JSON.stringify(_this.user));
            _this.subject.next(_this.user);
            return _this.user;
        });
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__integrations_clients_client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__integrations_clients_client_service__["a" /* ClientService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__server_server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__server_server_service__["a" /* ServerService */]) === "function" && _b || Object])
], UserService);

var _a, _b;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map