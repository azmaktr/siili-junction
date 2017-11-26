webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/allprods/allprods.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/allprods/allprods.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Browse All Products:</h2>\n<p *ngIf=\"!results\">Loading...\n\t<img width=\"80px\" src=\"https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif\" />\n</p>\n<div *ngIf=\"results\" class=\"row\">\n\t<div class=\"col-3 animated fadeIn\" *ngFor=\"let result of results; let i=index\">\n\t\t<div class=\"card card-{{i}}\">\n\t\t\t<a href=\"/product/{{result.objectid}}\" class=\"card-img-holder\">\n\t\t\t\t<img class=\"card-img-top \" onError=\"this.src='https://www.salkunrakentaja.fi/wp-content/uploads/2014/12/siili-perushahmo.png';\"\n\t\t\t\tsrc=\"{{result.images}}\" alt=\"Card image cap\" />\t\t\t\t\n\t\t\t\t<div class=\"card-price-holder\"> {{result.price|currency}}</div>\n\t\t\t</a>\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<h4 class=\"card-title\">{{result.objname}}</h4>\n\t\t\t\t<p class=\"card-text\">{{result.objinfo}}</p>\n\t\t\t\t<a href=\"/product/{{result.objectid}}\" class=\"btn btn-primary\">Buy Now!</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/allprods/allprods.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllprodsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__allresult_service__ = __webpack_require__("../../../../../src/app/allresult.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AllprodsComponent = (function () {
    function AllprodsComponent(activatedRoute, resultServ) {
        this.activatedRoute = activatedRoute;
        this.resultServ = resultServ;
    }
    AllprodsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resultServ.getResults().subscribe(function (results) {
            _this.results = results;
            console.log(results);
        });
    };
    AllprodsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-allprods',
            template: __webpack_require__("../../../../../src/app/allprods/allprods.component.html"),
            styles: [__webpack_require__("../../../../../src/app/allprods/allprods.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__allresult_service__["a" /* AllresultService */]])
    ], AllprodsComponent);
    return AllprodsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/allresult.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllresultService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Statics

// Operators






var API_ENDPOINT = "http://junction-backendapp-01.azurewebsites.net/objects";
var API_ENDPOINT_SINGLE = "http://junction-backendapp-01.azurewebsites.net/objectbyid?objectid=";
var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJRCI6IjViNzBkYTY1LTlkMzQtNDQzNS1iODE3LWQ2YmU5ZGZjYTYwZCJ9LCJpYXQiOjE1MTE2MzE0NjQsImV4cCI6MTUxMTgwNDI2NH0.yHkmU9pFo0Q4mkHevJtHqhJ0Raa7tSxjlCclhR0nfyw";
var AllresultService = (function () {
    function AllresultService(http) {
        this.http = http;
    }
    AllresultService.prototype.getResults = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            token: token,
            "content-type": "application/json",
            accept: "application/json"
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(API_ENDPOINT, options).map(function (res) { return res.json(); });
    };
    AllresultService.prototype.search = function (query, results) {
        return results.filter(function (result) {
            var concat = result.objinfo + " " + result.objname;
            return concat.toLowerCase().includes(query.toLowerCase());
        });
    };
    AllresultService.prototype.searchStuff = function (searchStr) {
        var _this = this;
        if (searchStr === void 0) { searchStr = ""; }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            token: token,
            "content-type": "application/json",
            accept: "application/json"
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(API_ENDPOINT, options).map(function (res) {
            return _this.search(searchStr, res.json());
        });
    };
    AllresultService.prototype.searchQty = function (searchStr, qty) {
        var _this = this;
        if (searchStr === void 0) { searchStr = ""; }
        if (qty === void 0) { qty = 4; }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            token: token,
            "content-type": "application/json",
            accept: "application/json"
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(API_ENDPOINT, options).map(function (res) {
            return _this.search(searchStr, res.json()).slice(0, qty);
        });
    };
    AllresultService.prototype.searchOne = function (searchId) {
        if (searchId === void 0) { searchId = ""; }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            token: token,
            "content-type": "application/json",
            accept: "application/json"
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .get(API_ENDPOINT_SINGLE + searchId, options)
            .map(function (res) { return res.json(); });
    };
    AllresultService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AllresultService);
    return AllresultService;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<app-header></app-header>\n<div class=\"page-container\" style=\"padding-top: 20px; padding-bottom:20px\">\n  <router-outlet></router-outlet>\n</div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__search_component__ = __webpack_require__("../../../../../src/app/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__four_ohfour_four_ohfour_component__ = __webpack_require__("../../../../../src/app/four-ohfour/four-ohfour.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__registration_registration_component__ = __webpack_require__("../../../../../src/app/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__product_product_component__ = __webpack_require__("../../../../../src/app/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__allresult_service__ = __webpack_require__("../../../../../src/app/allresult.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__allprods_allprods_component__ = __webpack_require__("../../../../../src/app/allprods/allprods.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var appRoutes = [
    {
        path: "search/:id",
        component: __WEBPACK_IMPORTED_MODULE_9__search_component__["a" /* SearchComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_12__services_auth_guard_service__["a" /* AuthGuardService */]]
    },
    {
        path: "explore",
        component: __WEBPACK_IMPORTED_MODULE_18__allprods_allprods_component__["a" /* AllprodsComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_12__services_auth_guard_service__["a" /* AuthGuardService */]]
    },
    { path: "", component: __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */] },
    {
        path: "dashboard",
        component: __WEBPACK_IMPORTED_MODULE_13__dashboard_dashboard_component__["a" /* DashboardComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_12__services_auth_guard_service__["a" /* AuthGuardService */]]
    },
    { path: "register", component: __WEBPACK_IMPORTED_MODULE_14__registration_registration_component__["a" /* RegistrationComponent */] },
    { path: "product/:id", component: __WEBPACK_IMPORTED_MODULE_16__product_product_component__["a" /* ProductComponent */] },
    { path: "404", component: __WEBPACK_IMPORTED_MODULE_10__four_ohfour_four_ohfour_component__["a" /* FourOhfourComponent */] },
    { path: "**", redirectTo: "/404" }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_10__four_ohfour_four_ohfour_component__["a" /* FourOhfourComponent */],
                __WEBPACK_IMPORTED_MODULE_13__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_14__registration_registration_component__["a" /* RegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_16__product_product_component__["a" /* ProductComponent */],
                __WEBPACK_IMPORTED_MODULE_18__allprods_allprods_component__["a" /* AllprodsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_15__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_12__services_auth_guard_service__["a" /* AuthGuardService */], __WEBPACK_IMPORTED_MODULE_17__allresult_service__["a" /* AllresultService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\nFirst, we set the `box-sizing` value as `border-box` so ...\nwe could easily expand this element to 100% width without worrying about\nthe `padding` and `border-width` calculation.\n*/\n\n.searchForm input {\n  box-sizing: border-box;\n}\n\n/*\ncreate the room for the button using `margin`\n*/\n\n.searchForm > div {\n  position: relative;\n  margin-right: 110px; /* same with `button width` + `button distance from search field` */\n}\n\n/*\nSEARCH FIELD: the `box-sizing` value for this element already set as `border-box`\nand the right margin value also already set with the correct value\nto make the room for the button, so now we could safely\nexpand this element to 100% width!\n*/\n\n.searchForm input[type=\"text\"] {\n  display: block;\n  width: 100%;\n}\n\n/*\nSEARCH BUTTON: the last step is to make the button pushed to the right by using absolute position\n(you could use `float:right` for this but you have to put the button markup before the text field,\nso if the CSS is disabled, destroyed or whatever, the search box appearance will looks ugly because\nthe search button appears before the search field!!!)\n*/\n\n.searchForm input[type=\"button\"] {\n  display: block;\n  width: 100px; /* this is the `button width` */\n  position: absolute;\n  top: 0;\n  left: 100%; /* push to the right! */\n  margin-left: 10px; /* this is the `button distance from search field` */\n  background-color: white;\n  color: black;\n}\n\n.input-txt {\n  height: 38px;\n  width: 91%;\n}\n\n.search-box {\n  padding: 40px;\n  background-color: #f48342;\n  color: white ;\n}\n\n.search-box h4{\n  color: white ;\n  \n}\n.store-help a {\n  color: #d62d20;\n}\n.store-help{\n  margin-bottom: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Howdy {{data.name}}!</h1>\n<form>\n  <div class=\"row animated fadeInLeft\">\n    <div class=\" col-md-12\">\n      <div class=\" search-box\">\n        <h4>You can start by searching the stuff you need!</h4>\n\n        <form #searchForm=\"ngForm\" (submit)=\"onSubmit(searchForm)\">\n          <input placeholder=\"Search for stuff you want to buy.\" class=\"input-txt\" name=\"id\" type=\"text\" ngModel>\n          <button class=\"btn btn-success\" style=\"background-color:#F4A842;border:#F4A842;\" type=\"submit\" value=\"Search\">Search</button>\n        </form>\n      </div>\n    </div>\n\n  </div>\n</form>\n<br />\n<br />\n\n<!-- start slipsum code -->\n<div class=\"row\">\n  <div class=\"col-12\">\n    <div class=\"store-help\">\n      <h3>Want your ad in here?</h3>\n      <p>Do you have stuff laying around in your basement? you can use our service to rent/sell it. We provide a platform which\n        reduces the carbon footprint in the world by connecting buyers who can manage their basement storage by using our\n        application and additionally sell/rent the stuff which they don't need right away. Sounds interesting? </p>\n      <a href=\"/about-us\">This is how you can do it!</a>\n    </div>\n  </div>\n</div>\n\n<!-- end slipsum code -->\n\n<h2>Your last search results:</h2>\n<p *ngIf=\"!searched\">You haven't searched anything yet.</p>\n  <p *ngIf=\"searched && !results\">Loading...\n    <img width=\"80px\" src=\"https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif\" />\n  </p>\n  <div *ngIf=\"searched && results\" class=\"row\">\n    <div class=\"col-3 animated fadeIn\" *ngFor=\"let result of results; let i=index\">\n      <div class=\"card card-{{i}}\">\n        <a href=\"/product/{{result.objectid}}\" class=\"card-img-holder\">\n          <img class=\"card-img-top \" onError=\"this.src='https://www.salkunrakentaja.fi/wp-content/uploads/2014/12/siili-perushahmo.png';\"\n            src=\"{{result.images}}\" alt=\"Card image cap\" />\n          <div class=\"card-price-holder\"> {{result.price|currency}}</div>\n        </a>\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">{{result.objname}}</h4>\n          <p class=\"card-text\">{{result.objinfo}}</p>\n          <a href=\"/product/{{result.objectid}}\" class=\"btn btn-primary\">Buy Now!</a>\n        </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__allresult_service__ = __webpack_require__("../../../../../src/app/allresult.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(router, allResults) {
        this.router = router;
        this.allResults = allResults;
        this.results = [];
    }
    DashboardComponent.prototype.onSubmit = function (form) {
        var id = form.value.id;
        this.router.navigate(["search/" + id]);
        location.reload();
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data = JSON.parse(localStorage.getItem('token'));
        this.lastSearch = localStorage.getItem('lastsearch');
        this.searched = !!this.lastSearch;
        if (!!this.lastSearch) {
            this.allResults.searchQty(this.lastSearch, 4).subscribe(function (results) {
                _this.results = results;
            });
        }
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__allresult_service__["a" /* AllresultService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".full {\n    width: 100%;  \n    margin-bottom: 9px;\n    height: 38px;\n}\n.gap {\n  height: 30px;\n  width: 100%;\n  clear: both;\n  display: block;\n}\n.footer {\n  background: #EDEFF1;\n  height: auto;\n  padding-bottom: 30px;\n  position: relative;\n  width: 100%;\n  border-bottom: 1px solid #CCCCCC;\n  border-top: 1px solid #DDDDDD;\n}\n.footer p {\n  margin: 0;\n}\n.footer img {\n  max-width: 100%;\n}\n.footer h3 {\n  border-bottom: 1px solid #BAC1C8;\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 27px;\n  padding: 40px 0 10px;\n  text-transform: uppercase;\n}\n.footer ul, .footer p {\n  font-size: 13px;\n  list-style-type: none;\n  margin-left: 0;\n  padding-left: 0;\n  margin-top: 15px;\n  color: #d62d20;\n}\n.footer ul li a {\n  padding: 0 0 5px 0;\n  display: block;\n}\n.footer a {\n  color: #d62d20;\n}\n.supportLi h4 {\n  font-size: 20px;\n  font-weight: lighter;\n  line-height: normal;\n  margin-bottom: 0 !important;\n  padding-bottom: 0;\n}\n.newsletter-box input#appendedInputButton {\n  background: #FFFFFF;\n  display: inline-block;\n  float: left;\n  height: 30px;\n  clear: both;\n  width: 100%;\n}\n.newsletter-box .btn {\n  border: medium none;\n  border-radius: 3px;\n  display: inline-block;\n  height: 40px;\n  padding: 0;\n  width: 100%;\n  color: #fff;\n  font-weight:bold;\n  background-color: #f48342;\n}\n.newsletter-box {\n  overflow: hidden;\n}\n.bg-gray {\n  background-image: -moz-linear-gradient(center bottom, #BBBBBB 0%, #F0F0F0 100%);\n  box-shadow: 0 1px 0 #B4B3B3;\n}\n.social li {\n  background: none repeat scroll 0 0 #f48342;\n  border: 2px solid #d62d20;\n  border-radius: 50%;\n  float: left;\n  height: 36px;\n  line-height: 36px;\n  margin: 0 8px 0 0;\n  padding: 0;\n  text-align: center;\n  width: 36px;\n  transition: all 0.5s ease 0s;\n  -moz-transition: all 0.5s ease 0s;\n  -webkit-transition: all 0.5s ease 0s;\n  -ms-transition: all 0.5s ease 0s;\n  -o-transition: all 0.5s ease 0s;\n}\n.social li:hover {\n  transform: scale(1.15) rotate(360deg);\n  -webkit-transform: scale(1.1) rotate(360deg);\n  -moz-transform: scale(1.1) rotate(360deg);\n  -ms-transform: scale(1.1) rotate(360deg);\n  -o-transform: scale(1.1) rotate(360deg);\n}\n.social li a {\n  color: #EDEFF1;\n}\n.social li:hover {\n  border: 2px solid #2c3e50;\n  background: #2c3e50;\n}\n.social li a i {\n  font-size: 16px;\n  margin: 0 0 0 5px;\n  color: #EDEFF1 !important;\n}\n.footer-bottom {\n  background: #E3E3E3;\n  border-top: 1px solid #DDDDDD;\n  padding-top: 10px;\n  padding-bottom: 44px;\n  padding-left: 10px;\n  font-size: 13px;\n}\n.footer-bottom p.pull-left {\n  padding-top: 6px;\n}\n.payments {\n  font-size: 1.5em; \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css\" rel=\"stylesheet\">\n<footer>\n    <div class=\"footer\" id=\"footer\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-4\">\n                    <h3> About Us. </h3>\n                    <!-- start slipsum code -->\n\n                    <p>Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! </p>\n\n                    <!-- end slipsum code -->\n                </div>\n                <div class=\"col-4 \">\n                    <h3> Contact Us </h3>\n                    <ul>\n                        <li>\n                                DieSachbearbeiter\n                        </li>\n                        <li>\n                                Choriner Straße 49\n                                \n                        </li>\n                        <li>\n                                10435 Berlin\n                                \n                        </li>\n                        <li>\n                                E-Mail: moinsen@blindtextgenerator.com\n                                \n                        </li>\n                    </ul>\n                </div>\n                \n                <div class=\"col-4\">\n                    <h3> Get treasure in your eamil! </h3>\n                    <ul>\n                        <li>\n                            <div class=\"input-append newsletter-box text-center\">\n                                <input type=\"text\" class=\"full text-center\" placeholder=\"Email \">\n                                <button class=\"btn  bg-gray\" type=\"button\"> Subscribe to get offers in email.\n                                    <i class=\"fa fa-long-arrow-right\"> </i>\n                                </button>\n                            </div>\n                        </li>\n                    </ul>\n                    <ul class=\"social\">\n                        <li>\n                            <a href=\"#\">\n                                <i class=\" fa fa-facebook\">   </i>\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"#\">\n                                <i class=\"fa fa-twitter\">   </i>\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"#\">\n                                <i class=\"fa fa-google-plus\">   </i>\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"#\">\n                                <i class=\"fa fa-pinterest\">   </i>\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"#\">\n                                <i class=\"fa fa-youtube\">   </i>\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n            <!--/.row-->\n        </div>\n        <!--/.container-->\n    </div>\n    <!--/.footer-->\n\n    <div class=\"footer-bottom\">\n            <p class=\"pull-left\"> Copyright © Siili store Plugin 2017. All right reserved. </p>\n    </div>\n    <!--/.footer-bottom-->\n</footer>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/four-ohfour/four-ohfour.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/four-ohfour/four-ohfour.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 align=\"center\">\n  Ah Snap!, its the good old 404!\n</h3>\n\n<p>We really don't want to tell that you are wrong but the URL you have tried probably is. </p>"

/***/ }),

/***/ "../../../../../src/app/four-ohfour/four-ohfour.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FourOhfourComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FourOhfourComponent = (function () {
    function FourOhfourComponent() {
    }
    FourOhfourComponent.prototype.ngOnInit = function () {
    };
    FourOhfourComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-four-ohfour',
            template: __webpack_require__("../../../../../src/app/four-ohfour/four-ohfour.component.html"),
            styles: [__webpack_require__("../../../../../src/app/four-ohfour/four-ohfour.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FourOhfourComponent);
    return FourOhfourComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".logo img {\n    width: 200px;\n    padding: 10px 0px;\n}\n.bg-dark{\n\tbackground: whitesmoke !important;\n}\n.nav > li {\n    padding: 8px;\n    color: black !important;\n}\n.nav-link{\n    color: #f48342;\n    font-weight: bold;\n}\n.label,.glyphicon { margin-right:5px; }\n.page-container{ \n    padding: 0px 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <div class=\"logo row\">\n    <div class=\"col\">\n      <a href=\"/\">\n        <img class = \"animated fadeInRight\" src=\"assets/logo-2.png\" />\n      </a>\n    </div>\n  </div>\n  <nav class=\"navbar navbar-expand-sm bg-dark\">\n    <ul class=\"navbar-nav\">\n        <li class=\"nav-item\" *ngIf=\"!isLoggedin\" >\n          <a class=\"nav-link\" href=\"/\">Login</a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"isLoggedin\" >\n          <a class=\"nav-link\" href=\"/dashboard\">Home</a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"isLoggedin\" >\n          <a class=\"nav-link\" href=\"/explore\">Browse All</a>\n        </li>\n      <li class=\"nav-item pull-right\" *ngIf=\"isLoggedin\">\n        <a class=\"nav-link float-right\" (click)=\"logout()\" href=\"#\">Logout</a>\n      </li>\n    </ul>\n  </nav>\n</div>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(router) {
        this.router = router;
    }
    HeaderComponent.prototype.logout = function () {
        window.localStorage.removeItem('token');
        this.router.navigate(['/']);
        location.reload();
    };
    HeaderComponent.prototype.ngOnInit = function () {
        this.isLoggedin = !!window.localStorage.getItem('token');
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n * Specific styles of signin component\n */\n/*\n * General styles\n */\n.card-container.card {\n    max-width: 350px;\n    padding: 40px 40px;\n}\n\n.btn {\n    font-weight: 700;\n    height: 36px;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n        user-select: none;\n    cursor: default;\n}\n\n/*\n * Card component\n */\n.card {\n    background-color: #F7F7F7;\n    /* just in case there no content*/\n    padding: 20px 25px 30px;\n    margin: 0 auto 25px;\n    margin-top: 50px;\n    /* shadows and rounded borders */\n    border-radius: 2px;\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n}\n\n.profile-img-card {\n    width: 96px;\n    height: 96px;\n    margin: 0 auto 10px;\n    display: block;\n    border-radius: 50%;\n}\n\n/*\n * Form styles\n */\n.profile-name-card {\n    font-size: 16px;\n    font-weight: bold;\n    text-align: center;\n    margin: 10px 0 0;\n    min-height: 1em;\n}\n\n.reauth-email {\n    display: block;\n    color: #404040;\n    line-height: 2;\n    margin-bottom: 10px;\n    font-size: 14px;\n    text-align: center;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    box-sizing: border-box;\n}\n\n.form-signin #inputEmail,\n.form-signin #inputPassword {\n    direction: ltr;\n    height: 44px;\n    font-size: 16px;\n}\n\n.form-signin input[type=email],\n.form-signin input[type=password],\n.form-signin input[type=text],\n.form-signin button {\n    width: 100%;\n    display: block;\n    margin-bottom: 10px;\n    z-index: 1;\n    position: relative;\n    box-sizing: border-box;\n}\n\n.form-signin .form-control:focus {\n    border-color: #d62d20;\n    outline: 0;\n    box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);\n}\n\n.btn.btn-signin {\n    /*background-color: #4d90fe; */\n    background-color: #d62d20;\n    /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\n    padding: 0px;\n    font-weight: 700;\n    font-size: 14px;\n    height: 36px;\n    border-radius: 3px;\n    border: none;\n    transition: all 0.218s;\n}\n\n.btn.btn-signin:hover,\n.btn.btn-signin:active,\n.btn.btn-signin:focus {\n    background-color: rgb(12, 97, 33);\n}\n\n.forgot-password:hover,\n.forgot-password:active,\n.forgot-password:focus{\n    color: rgb(12, 97, 33);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n    you can substitue the span of reauth email for a input with the email and\n    include the remember me checkbox\n    -->\n    \n    <div class=\"container\">\n        <div class = \"row\">\n            <div style = \"padding-top: 150px\" class =\"animated slideInLeft col-md-8\">\n                <h2>One man's trash is another man's treasure</h2>\n                <p >\n                    Our Data-Based Design Thinking approach recognizes the customer's expectations and business goals. By combining business and service design, user experience and user interface design, we deliver delightful customer experiences and valuable services.Our Data-Based Design Thinking approach recognizes the customer's expectations and business goals.\n                </p>\n                <h3>Start by signing in!</h3>\n            </div>\n            <div class = \"col-md-4\">\n        <div class=\"card card-container\">\n            <!-- <img class=\"profile-img-card\" src=\"//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120\" alt=\"\" /> -->\n            <img id=\"profile-img\" class=\"profile-img-card\" src=\"//ssl.gstatic.com/accounts/ui/avatar_2x.png\" />\n            <p id=\"profile-name\" class=\"profile-name-card\"></p>\n            <form (submit)=\"submit()\" class=\"form-signin\">\n                <span id=\"reauth-email\" class=\"reauth-email\"></span>\n                <input type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required autofocus>\n                <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required>\n                <div id=\"remember\" class=\"checkbox\">\n                    <label>\n                        <input type=\"checkbox\" value=\"remember-me\"> Remember me\n                    </label>\n                </div>\n                <button class=\"btn btn-lg btn-primary btn-block btn-signin\" type=\"submit\">Sign in</button>\n            </form><!-- /form -->\n            <a href=\"#\" class=\"forgot-password\">\n                Forgot the password?\n            </a>\n        </div><!-- /card-container -->\n            </div>\n        </div>\n    </div><!-- /container -->"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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
    function LoginComponent(router) {
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.isLoggedIn = window.localStorage.getItem('token');
        if (this.isLoggedIn) {
            this.router.navigate(['/dashboard']);
        }
    };
    LoginComponent.prototype.submit = function () {
        window.localStorage.setItem('token', JSON.stringify({ name: 'Rafay Khan' }));
        console.log("submit works");
        this.router.navigate(['/dashboard']);
        location.reload();
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/product/product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul > li{margin-right:25px;font-weight:lighter;cursor:pointer}\nli.active{border-bottom:3px solid silver;}\n\n.item-photo{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-right:1px solid #f6f6f6;}\n.menu-items{list-style-type:none;font-size:11px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;margin-bottom:0;margin-top:20px}\n.btn-success{width:100%;border-radius:0;}\n.section{width:100%;margin-left:-15px;padding:2px;padding-left:15px;padding-right:15px;background:#f8f9f9}\n.title-price{margin-top:30px;margin-bottom:0;color:black}\n.title-attr{margin-top:0;margin-bottom:0;color:black;}\n.btn-minus{cursor:pointer;font-size:7px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:5px;padding-left:10px;padding-right:10px;border:1px solid gray;border-radius:2px;border-right:0;}\n.btn-plus{cursor:pointer;font-size:7px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:5px;padding-left:10px;padding-right:10px;border:1px solid gray;border-radius:2px;border-left:0;}\ndiv.section > div {width:100%;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;}\ndiv.section > div > input {margin:0;padding-left:5px;font-size:10px;padding-right:5px;max-width:18%;text-align:center;}\n.attr,.attr2{cursor:pointer;margin-right:5px;height:20px;font-size:10px;padding:2px;border:1px solid gray;border-radius:2px;}\n.attr.active,.attr2.active{ border:1px solid orange;}\n\n@media (max-width: 426px) {\n    .container {margin-top:0px !important;}\n    .container > .row{padding:0 !important;}\n    .container > .row > .col-xs-12.col-sm-5{\n        padding-right:0 ;    \n    }\n    .container > .row > .col-xs-12.col-sm-9 > div > p{\n        padding-left:0 !important;\n        padding-right:0 !important;\n    }\n    .container > .row > .col-xs-12.col-sm-9 > div > ul{\n        padding-left:10px !important;\n        \n    }            \n    .section{width:104%;}\n    .menu-items{padding-left:0;}\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <p *ngIf=\"!result\">Loading...\n        <img width=\"80px\" src=\"https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif\" />\n    </p>\n    <div *ngIf=\"result\"  class=\"row\">\n        <div class=\"col-6\">\n            <h2>{{result.objname}}</h2>\n            <p>Description: {{result.objinfo}}</p>\n            <p>Price: {{result.price|currency}}</p>\n            <button class=\"btn btn-success\" style=\"background-color: #F4A842; border: #F4A842;\">Buy Now!</button>\n        </div>\n        <div class=\"col-6 center\">\n            <img class=\"card-img-top \" onError=\"this.src='https://www.salkunrakentaja.fi/wp-content/uploads/2014/12/siili-perushahmo.png';\"\n                src=\"{{result.images}}\" alt=\"\" />\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__allresult_service__ = __webpack_require__("../../../../../src/app/allresult.service.ts");
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
    function ProductComponent(results, activatedRoute) {
        this.results = results;
        this.activatedRoute = activatedRoute;
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.searchId = params["id"];
            _this.results.searchOne(_this.searchId).subscribe(function (result) {
                _this.result = result.pop();
            });
        });
    };
    ProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-product",
            template: __webpack_require__("../../../../../src/app/product/product.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__allresult_service__["a" /* AllresultService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "../../../../../src/app/registration/registration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\n\tpadding: 0px;\n}\n.sub-button{\n\tmargin:5px !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"col-lg-12 well\">\n\t<div class=\"row\">\n\t\t\t\t<form>\n\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-sm-6 form-group\">\n\t\t\t\t\t\t\t\t<label>First Name</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Enter First Name Here..\" class=\"form-control\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-6 form-group\">\n\t\t\t\t\t\t\t\t<label>Last Name</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Enter Last Name Here..\" class=\"form-control\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label>Address</label>\n\t\t\t\t\t\t\t<textarea placeholder=\"Enter Address Here..\" rows=\"3\" class=\"form-control\"></textarea>\n\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-sm-4 form-group\">\n\t\t\t\t\t\t\t\t<label>City</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Enter City Name Here..\" class=\"form-control\">\n\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t\t<div class=\"col-sm-4 form-group\">\n\t\t\t\t\t\t\t\t<label>State</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Enter State Name Here..\" class=\"form-control\">\n\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t\t<div class=\"col-sm-4 form-group\">\n\t\t\t\t\t\t\t\t<label>Zip</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Enter Zip Code Here..\" class=\"form-control\">\n\t\t\t\t\t\t\t</div>\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-sm-6 form-group\">\n\t\t\t\t\t\t\t\t<label>Title</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Enter Designation Here..\" class=\"form-control\">\n\t\t\t\t\t\t\t</div>\t\t\n\t\t\t\t\t\t\t<div class=\"col-sm-6 form-group\">\n\t\t\t\t\t\t\t\t<label>Company</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Enter Company Name Here..\" class=\"form-control\">\n\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t</div>\t\t\t\t\t\t\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label>Phone Number</label>\n\t\t\t\t\t\t<input type=\"text\" placeholder=\"Enter Phone Number Here..\" class=\"form-control\">\n\t\t\t\t\t</div>\t\t\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label>Email Address</label>\n\t\t\t\t\t\t<input type=\"text\" placeholder=\"Enter Email Address Here..\" class=\"form-control\">\n\t\t\t\t\t</div>\t\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label>Website</label>\n\t\t\t\t\t\t<input type=\"text\" placeholder=\"Enter Website Name Here..\" class=\"form-control\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<button type=\"button\" class=\"sub-btn btn btn-lg btn-info\">Submit</button>\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</form> \n\t\t\t\t</div>\n\t</div>\n\t</div>"

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegistrationComponent = (function () {
    function RegistrationComponent() {
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-registration',
            template: __webpack_require__("../../../../../src/app/registration/registration.component.html"),
            styles: [__webpack_require__("../../../../../src/app/registration/registration.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-product{\n\twidth: 100%;\n}\n.left{\n\tfloat:left !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Search results for {{searchId}}:</h2>\n<p *ngIf=\"!results\">Loading...\n\t<img width=\"80px\" src=\"https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif\" />\n</p>\n<div *ngIf=\"results\" class=\"row\">\n\t<div class=\"col-3 animated fadeIn\" *ngFor=\"let result of results; let i=index\">\n\t\t<div class=\"card card-{{i}}\">\n\t\t\t<a href=\"/product/{{result.objectid}}\" class=\"card-img-holder\">\n\t\t\t\t<img class=\"card-img-top \" onError=\"this.src='https://www.salkunrakentaja.fi/wp-content/uploads/2014/12/siili-perushahmo.png';\"\n\t\t\t\t src=\"{{result.images}}\" alt=\"Card image cap\" />\n\t\t\t\t<div class=\"card-price-holder\"> {{result.price|currency}}</div>\n\t\t\t</a>\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<h4 class=\"card-title\">{{result.objname}}</h4>\n\t\t\t\t<p class=\"card-text\">{{result.objinfo}}</p>\n\t\t\t\t<a href=\"/product/{{result.objectid}}\" class=\"btn btn-primary\">Buy Now!</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__allresult_service__ = __webpack_require__("../../../../../src/app/allresult.service.ts");
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
    function SearchComponent(activatedRoute, resultServ) {
        this.activatedRoute = activatedRoute;
        this.resultServ = resultServ;
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.searchId = params["id"];
            localStorage.setItem("lastsearch", _this.searchId);
            _this.resultServ.searchStuff(_this.searchId).subscribe(function (results) {
                _this.results = results;
                console.log(results);
            });
        });
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-search",
            template: __webpack_require__("../../../../../src/app/search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__allresult_service__["a" /* AllresultService */]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this.auth.isAuthenticated()) {
            this.router.navigate(['']);
            return false;
        }
        return true;
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthService = (function () {
    function AuthService() {
    }
    AuthService.prototype.isAuthenticated = function () {
        return !!localStorage.getItem("token");
    };
    AuthService.prototype.login = function (email, password) {
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: true
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map