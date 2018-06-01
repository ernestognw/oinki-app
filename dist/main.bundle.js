webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".invisible-bars {\n    display: none;\n  }\n  "

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div [ngClass]=\"{'invisible-bars':userdataService.showbars === false}\" class=\"sidebar\" data-color=\"purple\" data-background-color=\"white\" data-image=\"../assets/img/sidebar-3.jpg\">\n        <app-sidebar></app-sidebar>\n        <div class=\"sidebar-background\" style=\"background-image: url(../assets/img/sidebar-1.jpg)\"></div>\n    </div>\n    <div [ngClass]=\"{'main-panel':userdataService.showbars === true}\">\n        <app-navbar *ngIf=\"userdataService.showbars\"></app-navbar>\n        <router-outlet (activate)=\"userdataService.barsOrNot()\"></router-outlet>\n        <app-footer *ngIf=\"userdataService.showbars\"></app-footer>\n    </div>\n  </div>\n  \n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_userdata_service__ = __webpack_require__("./src/app/services/userdata.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(location, router, userdataService) {
        this.location = location;
        this.router = router;
        this.userdataService = userdataService;
        this.title = 'Oinkii';
        this.yScrollStack = [];
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__services_userdata_service__["a" /* UserdataService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__sidebar_sidebar_component__ = __webpack_require__("./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__navbar_navbar_component__ = __webpack_require__("./src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__balance_balance_component__ = __webpack_require__("./src/app/balance/balance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_userdata_service__ = __webpack_require__("./src/app/services/userdata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_balancedata_service__ = __webpack_require__("./src/app/services/balancedata.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var firebaseConfig = {
    apiKey: 'AIzaSyA2pxoxjhqzfQymUyfRFEK2RSLQ6eP4EcQ',
    authDomain: 'oinkiimx.firebaseapp.com',
    databaseURL: 'https://oinkiimx.firebaseio.com',
    projectId: 'oinkiimx',
    storageBucket: 'oinkiimx.appspot.com',
    messagingSenderId: '1016216695880'
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_12__sidebar_sidebar_component__["b" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_13__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_14__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_15__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_16__balance_balance_component__["a" /* BalanceComponent */],
                __WEBPACK_IMPORTED_MODULE_17__login_login_component__["a" /* LoginComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["c" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["b" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["d" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_9__app_routing__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["b" /* AngularFireAuthModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_18__services_userdata_service__["a" /* UserdataService */], __WEBPACK_IMPORTED_MODULE_19__services_balancedata_service__["a" /* BalancedataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__balance_balance_component__ = __webpack_require__("./src/app/balance/balance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'profile/:id', component: __WEBPACK_IMPORTED_MODULE_5__profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'balance', component: __WEBPACK_IMPORTED_MODULE_6__balance_balance_component__["a" /* BalanceComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(routes)
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/balance/balance.component.css":
/***/ (function(module, exports) {

module.exports = "input {\n    width: 100%;\n}\n\n.table > tbody > tr > td {\n    padding: 4px 8px;\n}"

/***/ }),

/***/ "./src/app/balance/balance.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-success card-header-icon\">\n                        <div class=\"card-icon\">\n                            <i class=\"material-icons\">assignment</i>\n                        </div>\n                        <h4 class=\"card-title \">Ingresos</h4>\n                    </div>\n                    <div class=\"card-body\">\n                        <p *ngIf=\"userdataService.listaGastos === null\" class=\"card-text\">Aún no tienes gastos en tu\n                            <strong>Oinkii</strong>\n                        </p>\n                        <div class=\"table-responsive\" *ngIf=\"userdataService.listaGastos !== null\">\n                            <table class=\"table\">\n                                <thead class=\"text-primary\">\n                                    <th>\n                                        Fecha\n                                    </th>\n                                    <th>\n                                        Concepto\n                                    </th>\n                                    <th>\n                                        Cant.\n                                    </th>\n                                    <th>\n                                    </th>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let ingreso of userdataService.listaIngresos; let i = index\">\n                                        <td *ngIf=\"ingreso.id\">\n                                            {{ ingreso.id | date:'mediumDate' }}\n                                            <br> {{ ingreso.id | date:'shortTime' }}\n                                        </td>\n                                        <td *ngIf=\"ingreso.id && userdataService.editListaIngresos[i] === false\">\n                                            {{ ingreso.concept }}\n                                        </td>\n                                        <td class=\"text-primary\" *ngIf=\"ingreso.id && userdataService.editListaIngresos[i] === false\">\n                                            ${{ ingreso.quantity }}\n                                        </td>\n                                        <td *ngIf=\"ingreso.id && userdataService.editListaIngresos[i] === true\">\n                                            <input class=\"form-control\" placeholder=\"Concepto\" type=\"text\" [(ngModel)]=\"ingreso.concept\" >\n                                        </td>\n                                        <td class=\"text-primary\" *ngIf=\"ingreso.id && userdataService.editListaIngresos[i] === true\">\n                                            <input class=\"form-control\" placeholder=\"Cantidad\" type=\"number\" [(ngModel)]=\"ingreso.quantity\" >\n                                        </td>\n                                        <td class=\"td-actions text-right\" *ngIf=\"ingreso.id\">\n\n                                            <button mat-raised-button=\"\" type=\"button\" class=\"btn btn-link btn-info\" (click)=\"saveOldValueIngresos(i, ingreso.quantity)\" *ngIf=\"userdataService.editListaIngresos[i] === false\">\n                                                <span class=\"mat-button-wrapper\">\n                                                    <i class=\"material-icons\">edit</i>\n                                                </span>\n                                            </button>\n\n                                            <button mat-raised-button=\"\" type=\"button\" class=\"btn btn-link btn-success\" (click)=\"editRecordIngresos(i)\" *ngIf=\"userdataService.editListaIngresos[i] === true\">\n                                                <span class=\"mat-button-wrapper\">\n                                                    <i class=\"material-icons\">done</i>\n                                                </span>\n                                            </button>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-danger card-header-icon\">\n                        <div class=\"card-icon\">\n                            <i class=\"material-icons\">assignment</i>\n                        </div>\n                        <h4 class=\"card-title \">Gastos</h4>\n                    </div>\n                    <div class=\"card-body\">\n                        <p *ngIf=\"userdataService.listaGastos === null\" class=\"card-text\">Aún no tienes gastos en tu\n                            <strong>Oinkii</strong>\n                        </p>\n                        <div class=\"table-responsive\" *ngIf=\"userdataService.listaGastos !== null\">\n                            <table class=\"table\">\n                                <thead class=\"text-primary\">\n                                    <th>\n                                        Fecha\n                                    </th>\n                                    <th>\n                                        Concepto\n                                    </th>\n                                    <th>\n                                        Cant.\n                                    </th>\n                                    <th>\n                                    </th>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let gasto of userdataService.listaGastos; let i = index\">\n                                        <td *ngIf=\"gasto.id\">\n                                            {{ gasto.id | date:'mediumDate' }}\n                                            <br> {{ gasto.id | date:'shortTime' }}\n                                        </td>\n                                        <td *ngIf=\"gasto.id && userdataService.editListaGastos[i] === false\">\n                                            {{ gasto.concept }}\n                                        </td>\n                                        <td class=\"text-primary\" *ngIf=\"gasto.id && userdataService.editListaGastos[i] === false\">\n                                            ${{ gasto.quantity }}\n                                        </td>\n                                        <td *ngIf=\"gasto.id && userdataService.editListaGastos[i] === true\">\n                                            <input class=\"form-control\" placeholder=\"Concepto\" type=\"text\" [(ngModel)]=\"gasto.concept\" >\n                                        </td>\n                                        <td class=\"text-primary\" *ngIf=\"gasto.id && userdataService.editListaGastos[i] === true\">\n                                            <input class=\"form-control\" placeholder=\"Cantidad\" type=\"number\" [(ngModel)]=\"gasto.quantity\" >\n                                        </td>\n                                        <td class=\"td-actions text-right\" *ngIf=\"gasto.id\">\n\n                                            <button mat-raised-button=\"\" type=\"button\" class=\"btn btn-link btn-info\" (click)=\"saveOldValueGastos(i, gasto.quantity)\" *ngIf=\"userdataService.editListaGastos[i] === false\">\n                                                <span class=\"mat-button-wrapper\">\n                                                    <i class=\"material-icons\">edit</i>\n                                                </span>\n                                            </button>\n\n                                            <button mat-raised-button=\"\" type=\"button\" class=\"btn btn-link btn-success\" (click)=\"editRecordGastos(i)\" *ngIf=\"userdataService.editListaGastos[i] === true\">\n                                                <span class=\"mat-button-wrapper\">\n                                                    <i class=\"material-icons\">done</i>\n                                                </span>\n                                            </button>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/balance/balance.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BalanceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_userdata_service__ = __webpack_require__("./src/app/services/userdata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_balancedata_service__ = __webpack_require__("./src/app/services/balancedata.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BalanceComponent = (function () {
    function BalanceComponent(userdataService, afDB, balancedataService) {
        this.userdataService = userdataService;
        this.afDB = afDB;
        this.balancedataService = balancedataService;
    }
    BalanceComponent.prototype.ngOnInit = function () { };
    BalanceComponent.prototype.saveOldValueIngresos = function (i, value) {
        this.balancedataService.saveOldValueIngresos(i, value);
    };
    BalanceComponent.prototype.saveOldValueGastos = function (i, value) {
        this.balancedataService.saveOldValueGastos(i, value);
    };
    BalanceComponent.prototype.editRecordIngresos = function (i) {
        this.balancedataService.editIncomeRecord(i);
    };
    BalanceComponent.prototype.editRecordGastos = function (i) {
        this.balancedataService.editExpensesRecord(i);
    };
    BalanceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-balance',
            template: __webpack_require__("./src/app/balance/balance.component.html"),
            styles: [__webpack_require__("./src/app/balance/balance.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_userdata_service__["a" /* UserdataService */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3__services_balancedata_service__["a" /* BalancedataService */]])
    ], BalanceComponent);
    return BalanceComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = "h4.goal-title {\n    display: inline;\n}\n\n.badge {\n    font-size: 100%;\n    float: right;\n    margin-left: 5px;\n}\n\n.btn-sm {\n  padding: 5px 10px;\n  margin-bottom: 10px;\n}\n\n.btn i {\n  top: 0px !important;\n}\n\n.btn p {\n  display: inline;\n  font-size: 12px;\n  position: relative;\n  top: 2px;\n}\n\n.card-primary {\n    padding-bottom: 12px;\n}\n\n.card-category {\n    padding-top: 15px;\n}\n\n.card-title {\n  display: inline;\n}\n\n.card .card-footer {\n  margin: 0 20px;\n  padding-top: 0px;\n}\n\n.card-title strong {\n    font-weight: 700;\n    color: #000;\n    margin-bottom: 10px;\n}\n\n.card-header {\n    margin: 0px 20px 0;\n}\n\n.card-header .currency {\n    color: #000;\n}\n\nh5 {\n    font-size: 1.25em !important;\n    margin-bottom: 15px !important;\n}\n\n.progress {\n  overflow: hidden;\n  margin-top: 11px;\n}\n\n.progress-bar {\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n}\n\n.progress-bar {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n}\n\n.progress,\n.progress-bar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n}\n\n.progress {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 0.75rem;\n  background-color: #e9ecef;\n}\n\n.progress-bar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  color: #fff;\n  text-align: center;\n  background-color: #2196f3;\n  -webkit-transition: width 0.6s ease;\n  transition: width 0.6s ease;\n}\n\n.progress {\n  height: 4px;\n  border-radius: 0;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background: #ddd;\n  margin-bottom: 20px;\n}\n\n.progress .progress-bar {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n\n.progress .progress-bar.progress-bar-primary {\n  background: #9c27b0 !important;\n}\n\n.progress .progress-bar.progress-bar-info {\n  background: #00bcd4;\n}\n\n.progress .progress-bar.progress-bar-success {\n  background: #4caf50;\n}\n\n.progress .progress-bar.progress-bar-warning {\n  background: #ff9800;\n}\n\n.progress .progress-bar.progress-bar-danger {\n  background: #f44336;\n}\n\n.progress.progress-line-primary {\n  background: rgba(156, 39, 176, 0.2);\n}\n\n.progress.progress-line-info {\n  background: rgba(0, 188, 212, 0.2);\n}\n\n.progress.progress-line-success {\n  background: rgba(76, 175, 80, 0.2);\n}\n\n.progress.progress-line-warning {\n  background: rgba(255, 152, 0, 0.2);\n}\n\n.progress.progress-line-danger {\n  background: rgba(244, 67, 54, 0.2);\n}\n\nstrong {\n    font-weight: 700;\n}\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n\n      <div class=\"col-md-4 col-sm-12\">\n        <div class=\"card card-stats card-primary\">\n          <div class=\"card-header card-header-primary card-header-icon\">\n            <div class=\"card-icon\">\n              <i class=\"material-icons\">face</i>\n            </div>\n            <h5 class=\"card-category\">Ahorro\n              <strong>total</strong>\n              <br> en tu\n              <strong>Oinkii</strong>\n            </h5>\n            <h1 *ngIf=\"userdataService.balance\" class=\"card-title\">\n              <strong>${{ userdataService.balance.totalSavings }}</strong>\n            </h1>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-md-4 col-sm-6\">\n        <div class=\"card card-stats\">\n          <div class=\"card-header card-header-success card-header-icon\">\n            <div class=\"card-icon\">\n              <i class=\"material-icons\">attach_money</i>\n            </div>\n            <p class=\"card-category\">Ingresos</p>\n            <h2 class=\"card-title currency\">${{ userdataService.balance.income.totalIncome }}</h2>\n          </div>\n          <div class=\"card-footer\">\n            <button class=\"btn btn-success btn-block btn-sm\" type=\"button\" data-toggle=\"modal\" data-target=\"#incomeModal\">\n              <i class=\"material-icons\">add_circle</i>\n              <p>Nuevo</p>\n            </button>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-md-4 col-sm-6\">\n        <div class=\"card card-stats\">\n          <div class=\"card-header card-header-warning card-header-icon\">\n            <div class=\"card-icon\">\n              <i class=\"material-icons\">money_off</i>\n            </div>\n            <p class=\"card-category\">Gastos</p>\n            <h2 class=\"card-title currency\">${{ userdataService.balance.expenses.totalExpenses }}</h2>\n          </div>\n          <div class=\"card-footer\">\n            <button class=\"btn btn-warning btn-block btn-sm\" type=\"button\" data-toggle=\"modal\" data-target=\"#expensesModal\">\n              <i class=\"material-icons\">remove_circle</i>\n              <p>Nuevo</p>\n            </button>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"row\">\n\n      <div class=\"col-md-8 col-sm-12\">\n        <div class=\"card\">\n          <div class=\"card-header card-header-info\">\n            <i class=\"material-icons\">equalizer</i>\n            <h5 class=\"card-title\">Metas</h5>\n          </div>\n          <div class=\"card-body\">\n            <h4 class=\"goal-title\">Meta 1</h4>                        \n                <span class=\"badge badge-pill badge-secondary\">Jun 18, 2018</span>\n                <span class=\"badge badge-pill badge-secondary\">25%</span>\n            <div class=\"progress\">\n                <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\"\n                aria-valuemax=\"100\"></div>\n            </div> \n            <h4 class=\"goal-title\">Meta 2</h4>                        \n                <span class=\"badge badge-pill badge-secondary\">Jun 18, 2018</span>\n                <span class=\"badge badge-pill badge-secondary\">50%</span>\n            <div class=\"progress\">\n                <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\"\n                aria-valuemax=\"100\"></div>\n            </div> \n          </div>\n          <div class=\"card-footer\">\n            <button class=\"btn btn-info btn-block btn-sm\" type=\"button\" data-toggle=\"modal\" data-target=\"#goalsModal\">\n              <i class=\"material-icons\">flag</i>\n              <p>Nueva Meta</p>\n            </button>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-md-4 col-sm-12\">\n        <div class=\"card\">\n          <div class=\"card-header card-header-danger\">\n            <i class=\"material-icons\">book</i>\n            <h4 class=\"card-title\">¿Quieres aprender más sobre el dinero?</h4>\n            <p class=\"category\">Accede a tu e-book de Oinkii</p>\n          </div>\n          <div class=\"card-body\">\n            <p class=\"card-text\">Repasa los conceptos relacionados con el dinero de tu libro.</p>\n            <button type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#exampleModal\">Ver libro</button>\n          </div>\n        </div>\n      </div>\n\n\n    </div>\n  </div>\n</div>\n\n<!-- Income Modal -->\n\n<div class=\"modal fade\" id=\"incomeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\">Añade un nuevo\n                    <strong>ingreso</strong>\n                </h5>\n                <button class=\"close\" type=\"button\" data-dismiss=\"modal\">\n                    <i class=\"material-icons\">clear</i>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"col-md-8\">\n                        <div class=\"input-group\">\n                            <span class=\"input-group-addon\">\n                                <i class=\"material-icons\">short_text</i>\n                            </span>\n                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"amount.concept\" placeholder=\"Concepto\">\n                        </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <div class=\"input-group\">\n                            <span class=\"input-group-addon\">\n                                <i class=\"material-icons\">attach_money</i>\n                            </span>\n                            <input type=\"number\" class=\"form-control\" [(ngModel)]=\"amount.quantity\" placeholder=\"Cantidad\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer text-center\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                <button type=\"button\" data-dismiss=\"modal\" (click)=\"recordIncome()\" class=\"btn btn-success\">Save changes</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- Expenses Modal -->\n\n<div class=\"modal fade\" id=\"expensesModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Añade un nuevo\n          <strong>gasto</strong>\n        </h5>\n        <button class=\"close\" type=\"button\" data-dismiss=\"modal\">\n          <i class=\"material-icons\">clear</i>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"row\">\n          <div class=\"col-md-8\">\n            <div class=\"input-group\">\n              <span class=\"input-group-addon\">\n                <i class=\"material-icons\">short_text</i>\n              </span>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"amount.concept\" placeholder=\"Concepto\">\n            </div>\n          </div>\n          <div class=\"col-md-4\">\n            <div class=\"input-group\">\n              <span class=\"input-group-addon\">\n                <i class=\"material-icons\">attach_money</i>\n              </span>\n              <input type=\"number\" class=\"form-control\" [(ngModel)]=\"amount.quantity\" placeholder=\"Cantidad\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer text-center\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" (click)=\"recordExpenses()\" class=\"btn btn-warning\" data-dismiss=\"modal\">Save changes</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_balancedata_service__ = __webpack_require__("./src/app/services/balancedata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_userdata_service__ = __webpack_require__("./src/app/services/userdata.service.ts");
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
    function DashboardComponent(balancedataService, userdataService) {
        this.balancedataService = balancedataService;
        this.userdataService = userdataService;
        this.amount = {};
    }
    DashboardComponent.prototype.recordIncome = function () {
        this.amount.id = Date.now();
        this.balancedataService.incomeRecord(this.amount);
        this.amount = {};
    };
    DashboardComponent.prototype.recordExpenses = function () {
        this.amount.id = Date.now();
        this.balancedataService.expensesRecord(this.amount);
        this.amount = {};
    };
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_balancedata_service__["a" /* BalancedataService */], __WEBPACK_IMPORTED_MODULE_2__services_userdata_service__["a" /* UserdataService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <div class=\"container-fluid\">\n      <nav class=\"pull-left\">\n          <ul>\n              <li>\n                  <a href=\"#\">\n                      Home\n                  </a>\n              </li>\n              <li>\n                  <a href=\"#\">\n                      Company\n                  </a>\n              </li>\n              <li>\n                  <a href=\"#\">\n                      Portfolio\n                  </a>\n              </li>\n              <li>\n                  <a href=\"#\">\n                     Blog\n                  </a>\n              </li>\n          </ul>\n      </nav>\n      <p class=\"copyright pull-right\">\n            <a routerLink=\"dashboard\">Oinkii</a> &copy; {{test | date: 'yyyy'}}\n      </p>\n  </div>\n</footer>\n    "

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
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
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "img {\n  width: 140px;\n  height: auto;\n  margin-top: 20px;\n}\n\nh4 {\n  margin-top: 20px;\n}\n\n/* .fa {\n  margin-right: 10px;\n}\n\n.btn-info {\n  background-color: #4267b2;\n}\n\n.btn-info:hover {\n  background-color: #4267b2;\n  box-shadow: 0 2px 2px 0 rgb(97, 159, 212), 0 3px 1px -2px rgba(97, 159, 212), 0 1px 5px 0 rgba(97, 159, 212);\n}\n\n.btn-info:active {\n  background-color: #547ac7 !important;\n  box-shadow: 0 2px 2px 0 rgb(97, 159, 212), 0 3px 1px -2px rgba(97, 159, 212), 0 1px 5px 0 rgba(97, 159, 212);\n}\n\n.btn-info:focus {\n  background-color: #547ac7 !important;\n  box-shadow: 0 2px 2px 0 rgb(97, 159, 212), 0 3px 1px -2px rgba(97, 159, 212), 0 1px 5px 0 rgba(97, 159, 212);\n} */\n\n.page-header {\n  height: 100vh;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-position: 50% top;\n}\n\n.section-signup .card-signup .card-body .input-group {\n  padding-bottom: 7px;\n  margin: 27px 0 0;\n}\n\n.card-signup {\n  margin-top: 20vh;\n  min-width: 300px;\n}\n\n.card-signup .card-body {\n  padding: 0 30px 0 10px;\n}\n\n.text-divider {\n  margin-top: 30px;\n  margin-bottom: 0px;\n  text-align: center;\n}\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3\">\n      <div class=\"card card-signup\">\n        <form class=\"form\" method=\"\" action=\"\">\n          <div class=\"card-header text-center\" data-background-color=\"purple\">\n            <img src=\"./assets/img/logo-oinkii-blanco.svg\" alt=\"oinki-logo\">\n            <h4>Inicia Sesión</h4>\n          </div>\n          <p class=\"text-divider\">O hazlo de la forma tradicional ;)</p>\n          <div class=\"content\">\n\n            <div class=\"input-group\">\n              <span class=\"input-group-addon\">\n                <i class=\"material-icons\">email</i>\n              </span>\n              <input type=\"email\" class=\"form-control\" placeholder=\"Correo Electrónico...\">\n            </div>\n\n            <div class=\"input-group\">\n              <span class=\"input-group-addon\">\n                <i class=\"material-icons\">lock_outline</i>\n              </span>\n              <input type=\"password\" class=\"form-control\" placeholder=\"Contraseña...\">\n            </div>\n\n          </div>\n          <div class=\"footer text-center\">\n            <a href=\"#pablo\" class=\"btn btn-round btn-primary\">Get Started</a>\n            <a (click)=\"facebookLogin()\" class=\"btn btn-round btn-info\">\n              <i class=\"fa fa-facebook-square\"></i>FB LOGIN</a>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div> -->\n\n<div class=\"section section-signup page-header\" style=\"background-image: url('./assets/img/city.jpg');\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-4 ml-auto mr-auto\">\n                <div class=\"card card-signup\">\n                    <form class=\"form\" method=\"\" action=\"\">\n                        <div class=\"card-header card-header-primary text-center\">\n                            <img src=\"./assets/img/logo-oinkii-blanco.svg\" alt=\"oinki-logo\">\n                            <h4>Inicia Sesión</h4>\n                            <div class=\"social-line\">\n                                <a (click)=\"facebookLogin()\" class=\"btn btn-link btn-just-icon\">\n                                    <i class=\"fa fa-facebook-square\"></i>\n                                </a>\n                                <a href=\"#pablo\" class=\"btn btn-link btn-just-icon\">\n                                    <i class=\"fa fa-twitter\"></i>\n                                </a>\n                                <a href=\"#pablo\" class=\"btn btn-link btn-just-icon\">\n                                    <i class=\"fa fa-google-plus\"></i>\n                                </a>\n                            </div>\n                        </div>\n                        <p class=\"text-divider\">O hazlo de la manera tradicional ;)</p>\n                        <div class=\"card-body\">\n\n                            <span class=\"bmd-form-group\">\n                                <div class=\"input-group\">\n                                    <div class=\"input-group-prepend\">\n                                        <span class=\"input-group-text\">\n                                            <i class=\"material-icons\">face</i>\n                                        </span>\n                                    </div>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Nombre\">\n                                </div>\n                            </span>\n\n                            <span class=\"bmd-form-group\">\n                                <div class=\"input-group\">\n                                    <div class=\"input-group-prepend\">\n                                        <span class=\"input-group-text\">\n                                            <i class=\"material-icons\">email</i>\n                                        </span>\n                                    </div>\n                                    <input type=\"email\" class=\"form-control\" placeholder=\"Correo Electrónico\">\n                                </div>\n                            </span>\n\n                            <span class=\"bmd-form-group\">\n                                <div class=\"input-group\">\n                                    <div class=\"input-group-prepend\">\n                                        <span class=\"input-group-text\">\n                                            <i class=\"material-icons\">lock_outline</i>\n                                        </span>\n                                    </div>\n                                    <input type=\"password\" class=\"form-control\" placeholder=\"Contraseña\">\n                                </div>\n                            </span>\n                            <!-- If you want to add a checkbox to this form, uncomment this code\n\n                <div class=\"form-check\">\n                    <label class=\"form-check-label\">\n                        <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                        Subscribe to newsletter\n                        <span class=\"form-check-sign\">\n                            <span class=\"check\"></span>\n                        </span>\n                    </label>\n                </div> -->\n                        </div>\n                        <div class=\"card-footer justify-content-center\">\n                            <a href=\"#pablo\" class=\"btn btn-link btn-primary btn-lg\">Entrar</a>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_userdata_service__ = __webpack_require__("./src/app/services/userdata.service.ts");
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
    function LoginComponent(userdataService) {
        this.userdataService = userdataService;
    }
    LoginComponent.prototype.facebookLogin = function () {
        this.userdataService.facebookLogin();
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_userdata_service__["a" /* UserdataService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = "p {\n  margin-bottom: 0;\n}\n\n.navbar {\n  -webkit-box-shadow: 0 8px 10px -5px rgba(0, 0, 0, 0.12);\n          box-shadow: 0 8px 10px -5px rgba(0, 0, 0, 0.12);\n}\n\n.highlight {\n  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);\n  background-color: rgba(240, 240, 240, 0.5);\n}\n\n.material-icons {\n  font-size: 18px;\n  padding: 2px;\n  margin-right: 2px;\n}\n\n.navbar .navbar-collapse .navbar-nav .nav-item .nav-link p {\n    display: inline-block;\n}\n\n.navbar .collapse .navbar-nav .nav-item .nav-link {\n    padding: 15px 15px;\n}\n\n.navbar-light .navbar-toggler {\n    color: rgba(0, 0, 0, 0.5);\n    border-color: rgba(0, 0, 0, 0);\n    -webkit-box-shadow: none;\n            box-shadow: none;\n}\n\n.profile-name {\n  text-transform: none;\n  padding: 0 1rem;\n}\n\n\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light navbar-absolute fixed-top\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-wrapper\">\n            <a class=\"navbar-brand\">{{getTitle()}}</a>\n        </div>\n        <button class=\"navbar-toggler\" type=\"button\" (click)=\"sidebarToggle()\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\n            <!-- <form class=\"navbar-form\">\n                <div class=\"input-group no-border\">\n                    <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\n                    <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n                        <i class=\"material-icons\">search</i>\n                        <div class=\"ripple-container\"></div>\n                    </button>\n                </div>\n            </form> -->\n            <ul *ngIf=\"!userdataService.loggedIn\" class=\"navbar-nav\">\n                <!-- <li>\n                  <a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                      <i class=\"material-icons\">dashboard</i>\n                      <p class=\"hidden-lg hidden-md\">Dashboard</p>\n                  </a>\n              </li>\n              <li class=\"dropdown\">\n                  <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                      <i class=\"material-icons\">notifications</i>\n                      <span class=\"notification\">5</span>\n                      <p class=\"hidden-lg hidden-md\">Notifications</p>\n                  </a>\n                  <ul class=\"dropdown-menu\">\n                      <li><a href=\"#\">Mike John responded to your email</a></li>\n                      <li><a href=\"#\">You have 5 new tasks</a></li>\n                      <li><a href=\"#\">You're now friend with Andrew</a></li>\n                      <li><a href=\"#\">Another Notification</a></li>\n                      <li><a href=\"#\">Another One</a></li>\n                  </ul>\n              </li> -->\n                <li class=\"nav-item\">\n                    <a routerLink=\"login\" class=\"nav-link\">\n                        <i class=\"material-icons\">account_circle</i>\n                        <p>Login</p>\n                    </a>\n                </li>\n\n                <li class=\"nav-item highlight\">\n                    <a routerLink=\"register\" class=\"nav-link\">\n                        <i class=\"material-icons\">person_add</i>\n                        <p>Regístrate</p>\n                    </a>\n                </li>\n            </ul>\n\n            <ul *ngIf=\"userdataService.loggedIn\" class=\"navbar-nav\">\n\n                <li class=\"dropdown nav-item highlight\">\n                    <a class=\"profile-photo nav-link\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                        <img *ngIf=\"userdataService.currentUser.photoURL\" width=\"30\" height=\"30\" src=\"{{ userdataService.currentUser.photoURL }}\" alt=\"Circle Image\" class=\"rounded-circle img-fluid\">\n                        <p class=\"profile-name\">{{ userdataService.currentUser.displayName }}</p>\n                        <br>\n                    </a>\n\n                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\n                        <h6 class=\"dropdown-header\">{{ userdataService.currentUser.displayName }}</h6>\n                        <a routerLink=\"/profile/{{ userdataService.uid }}\" class=\"dropdown-item\">\n                            <i class=\"material-icons\">face</i>Perfil de Usuario</a>\n                        <a (click)=\"logout()\" routerLink=\"\" class=\"dropdown-item\">\n                            <i class=\"material-icons\">exit_to_app</i>Salir de mi cuenta</a>\n                    </div>\n                </li>\n\n            </ul>\n        </div>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__ = __webpack_require__("./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_userdata_service__ = __webpack_require__("./src/app/services/userdata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavbarComponent = (function () {
    function NavbarComponent(location, element, router, userdataService) {
        var _this = this;
        this.element = element;
        this.router = router;
        this.userdataService = userdataService;
        this.mobile_menu_visible = 0;
        this.location = location;
        this.sidebarVisible = false;
        this.userdataService.isLogged()
            .subscribe(function (result) {
            if (result && result.uid) {
                console.log(result);
                _this.userdataService.loggedIn = true;
                _this.userdataService.currentUser = _this.userdataService.getUserData();
            }
            else {
                _this.userdataService.loggedIn = false;
            }
        }, function (error) {
            _this.userdataService.loggedIn = false;
        });
    }
    NavbarComponent.prototype.logout = function () {
        this.userdataService.logout();
    };
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listTitles = __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__["a" /* ROUTES */].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        this.router.events.subscribe(function (event) {
            _this.sidebarClose();
            var $layer = document.getElementsByClassName('close-layer')[0];
            if ($layer) {
                $layer.remove();
                _this.mobile_menu_visible = 0;
            }
        });
    };
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
        var body = document.getElementsByTagName('body')[0];
        if (this.mobile_menu_visible === 1) {
            // $('html').removeClass('nav-open');
            body.classList.remove('nav-open');
            var $layer = document.getElementsByClassName('close-layer')[0];
            if ($layer) {
                $layer.remove();
            }
            setTimeout(function () {
                $toggle.classList.remove('toggled');
            }, 400);
            this.mobile_menu_visible = 0;
        }
        else {
            setTimeout(function () {
                $toggle.classList.add('toggled');
            }, 430);
            var $layer_1 = document.createElement('div');
            $layer_1.setAttribute('class', 'close-layer');
            if (body.querySelectorAll('.main-panel')) {
                document.getElementsByClassName('main-panel')[0].appendChild($layer_1);
            }
            else if (body.classList.contains('off-canvas-sidebar')) {
                document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer_1);
            }
            setTimeout(function () {
                $layer_1.classList.add('visible');
            }, 100);
            $layer_1.onclick = function () {
                body.classList.remove('nav-open');
                this.mobile_menu_visible = 0;
                $layer_1.classList.remove('visible');
                setTimeout(function () {
                    $layer_1.remove();
                    $toggle.classList.remove('toggled');
                }, 400);
            }.bind(this);
            body.classList.add('nav-open');
            this.mobile_menu_visible = 1;
        }
    };
    ;
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(2);
        }
        titlee = titlee.split('/').pop();
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__services_userdata_service__["a" /* UserdataService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <div class=\"card card-profile\">\n                    <div class=\"card-avatar\">\n                        <a href=\"#pablo\">\n                            <img class=\"img\" src=\"{{ profile.photoURL }}\" />\n                        </a>\n                    </div>\n\n                    <div class=\"card-body\">\n                        <h6 class=\"card-category text-gray\">CEO / Co-Founder</h6>\n                        <h4 class=\"card-title\">{{ profile.name }}</h4>\n                        <p class=\"card-description\">\n                            Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye\n                            I love Rick Owens’ bed design but the back is...\n                        </p>\n                        <a href=\"#pablo\" class=\"btn btn-danger btn-round\">Follow</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-8\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-danger\">\n                        <h4 class=\"card-title\">Edit Profile</h4>\n                        <p class=\"card-category\">Complete your profile</p>\n                    </div>\n                    <div class=\"card-body\">\n                        <form>\n                            <div class=\"row\">\n                                <div class=\"col-md-4\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"Primer Nombre\" type=\"text\" value=\"{{ profile.first_name }}\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-4\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"Segundo Nombre\" type=\"text\" value=\"{{ profile.middle_name }}\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-4\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"Apellido\" type=\"text\" value=\"{{ profile.last_name }}\">\n                                    </mat-form-field>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"Correo Electrónico\" type=\"email\" value=\"{{ profile.email }}\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"Fecha de Nacimiento\" type=\"text\">\n                                    </mat-form-field>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-md-4\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"Ciudad\" type=\"text\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-4\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"País\" type=\"text\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-4\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"Código Postal\" type=\"number\">\n                                    </mat-form-field>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"Dirección\" type=\"text\">\n                                    </mat-form-field>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <div class=\"form-group\">\n                                        <label>About Me</label>\n                                        <div class=\"form-group\">\n                                            <label class=\"control-label\"> Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.</label>\n                                            <textarea class=\"form-control\" rows=\"2\"></textarea>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <button type=\"submit\" class=\"btn btn-danger pull-right\">Update Profile</button>\n                            <div class=\"clearfix\"></div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_userdata_service__ = __webpack_require__("./src/app/services/userdata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
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
    function ProfileComponent(userdataService, route) {
        var _this = this;
        this.userdataService = userdataService;
        this.route = route;
        this.id = null;
        this.profile = {};
        this.id = this.route.snapshot.params['id'];
        this.profile = this.userdataService.getProfileData(this.id)
            .valueChanges().subscribe(function (profile) {
            _this.profile = profile;
            console.log(profile);
            _this.profile.photoURL = 'https://graph.facebook.com/v3.0/' + _this.profile.id + '/picture?type=large';
        });
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_userdata_service__["a" /* UserdataService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/services/balancedata.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BalancedataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__userdata_service__ = __webpack_require__("./src/app/services/userdata.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BalancedataService = (function () {
    function BalancedataService(afDB, userdataService) {
        this.afDB = afDB;
        this.userdataService = userdataService;
    }
    BalancedataService.prototype.incomeRecord = function (income) {
        var uid = this.userdataService.getUserData().uid;
        this.userdataService.balance.income.totalIncome = this.userdataService.balance.income.totalIncome + income.quantity;
        this.userdataService.balance.totalSavings = this.userdataService.balance.totalSavings + income.quantity;
        this.afDB.database.ref('users/' + uid + '/app_data/income/' + income.id).set(income);
        this.afDB.database.ref('users/' + uid + '/app_data/totalSavings').set(this.userdataService.balance.totalSavings);
        this.afDB.database.ref('users/' + uid + '/app_data/income/totalIncome').set(this.userdataService.balance.income.totalIncome);
        alert('Ingreso registrado correctamente');
    };
    BalancedataService.prototype.expensesRecord = function (expenses) {
        var uid = this.userdataService.getUserData().uid;
        this.userdataService.balance.expenses.totalExpenses = this.userdataService.balance.expenses.totalExpenses + expenses.quantity;
        this.userdataService.balance.totalSavings = this.userdataService.balance.totalSavings - expenses.quantity;
        this.afDB.database.ref('users/' + uid + '/app_data/expenses/' + expenses.id).set(expenses);
        this.afDB.database.ref('users/' + uid + '/app_data/totalSavings').set(this.userdataService.balance.totalSavings);
        this.afDB.database.ref('users/' + uid + '/app_data/expenses/totalExpenses').set(this.userdataService.balance.expenses.totalExpenses);
        alert('Gasto registrado correctamente');
    };
    BalancedataService.prototype.editIncomeRecord = function (i) {
        if (this.userdataService.listaIngresos[i].quantity !== this.userdataService.oldValueIngresos[i]) {
            var uid = this.userdataService.getUserData().uid;
            this.userdataService.balance.income.totalIncome =
                this.userdataService.balance.income.totalIncome -
                    this.userdataService.oldValueIngresos[i] +
                    this.userdataService.listaIngresos[i].quantity;
            this.userdataService.balance.totalSavings =
                this.userdataService.balance.totalSavings -
                    this.userdataService.oldValueIngresos[i] +
                    this.userdataService.listaIngresos[i].quantity;
            this.afDB.database
                .ref('users/' + uid + '/app_data/income/' + this.userdataService.listaIngresos[i].id)
                .set(this.userdataService.listaIngresos[i]);
            alert('Ingreso editado con éxito');
            this.afDB.database.ref('users/' + uid + '/app_data/totalSavings').set(this.userdataService.balance.totalSavings);
            this.afDB.database.ref('users/' + uid + '/app_data/income/totalIncome').set(this.userdataService.balance.income.totalIncome);
        }
        else {
            alert('Cambio no realizado');
        }
        this.userdataService.editListaIngresos[i] = false;
    };
    BalancedataService.prototype.editExpensesRecord = function (i) {
        if (this.userdataService.listaGastos[i].quantity !== this.userdataService.oldValueGastos[i]) {
            var uid = this.userdataService.getUserData().uid;
            this.userdataService.balance.expenses.totalExpenses =
                this.userdataService.balance.expenses.totalExpenses -
                    this.userdataService.oldValueGastos[i] +
                    this.userdataService.listaGastos[i].quantity;
            this.userdataService.balance.totalSavings =
                this.userdataService.balance.totalSavings +
                    this.userdataService.oldValueGastos[i] -
                    this.userdataService.listaGastos[i].quantity;
            this.afDB.database
                .ref('users/' + uid + '/app_data/expenses/' + this.userdataService.listaGastos[i].id)
                .set(this.userdataService.listaGastos[i]);
            alert('Ingreso editado con éxito');
            this.afDB.database.ref('users/' + uid + '/app_data/totalSavings').set(this.userdataService.balance.totalSavings);
            // tslint:disable-next-line:max-line-length
            this.afDB.database.ref('users/' + uid + '/app_data/expenses/totalExpenses').set(this.userdataService.balance.expenses.totalExpenses);
        }
        else {
            alert('Cambio no realizado');
        }
        this.userdataService.editListaGastos[i] = false;
    };
    BalancedataService.prototype.saveOldValueIngresos = function (i, value) {
        this.userdataService.oldValueIngresos[i] = value;
        console.log(value);
        this.userdataService.editListaIngresos[i] = true;
    };
    BalancedataService.prototype.saveOldValueGastos = function (i, value) {
        this.userdataService.oldValueGastos[i] = value;
        console.log(value);
        this.userdataService.editListaGastos[i] = true;
    };
    BalancedataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__userdata_service__["a" /* UserdataService */]])
    ], BalancedataService);
    return BalancedataService;
}());

// this.uid = this.userdataService.getUserData().uid;
// // var totalAmount is retrieves null
// // when something is changed manually in Firebase Databse
// this.currentUser = this.userdataService.getProfileData(this.uid)
//   .valueChanges().subscribe(profile => {
//     this.totalAmount = profile;
//     this.totalAmount = this.totalAmount.app_data.income.totalIncome;
//   });
//   console.log(this.totalAmount);
//   this.totalAmount = this.totalAmount + income.quantity;
//   this.afDB.database.ref('users/' + this.uid + '/app_data/income/' + income.id).set(income);
//   this.afDB.database.ref('users/' + this.uid + '/app_data/income/totalIncome').set(this.totalAmount);
// alert('Ingreso registrado correctamente');


/***/ }),

/***/ "./src/app/services/userdata.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserdataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__("./node_modules/firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserdataService = (function () {
    function UserdataService(afDB, router, angularFireAuth) {
        var _this = this;
        this.afDB = afDB;
        this.router = router;
        this.angularFireAuth = angularFireAuth;
        this.API_ENDPOINT = 'https://oinkiimx.firebaseio.com/';
        this.showbars = true;
        this.currentUser = {};
        this.uid = null;
        this.balance = {};
        this.listaIngresos = null;
        this.listaGastos = null;
        this.editListaIngresos = [];
        this.editListaGastos = [];
        this.oldValueGastos = [];
        this.oldValueIngresos = [];
        // Set Dashboard Balance Info
        this.setBalanceToZero();
        this.setRecordsToNull();
        this.isLogged()
            .subscribe(function (result) {
            if (result && result.uid) {
                _this.currentUser = _this.getUserData();
                _this.uid = _this.currentUser.uid;
                _this.getBalance(_this.uid)
                    .valueChanges().subscribe(function (balance) {
                    _this.setBalanceToUserData(balance);
                });
                // Set savings records
                _this.getRegistroIngresos(_this.uid)
                    .valueChanges().subscribe(function (registro) {
                    console.log(registro);
                    _this.listaIngresos = registro;
                    var i = 0;
                    _this.listaIngresos.forEach(function (element) {
                        _this.editListaIngresos[i] = false;
                        _this.oldValueIngresos[i] = 0;
                        _this.oldValueGastos[i] = 0;
                        i++;
                    });
                    console.log(_this.editListaGastos);
                });
                _this.getRegistroGastos(_this.uid)
                    .valueChanges().subscribe(function (registro) {
                    console.log(registro);
                    _this.listaGastos = registro;
                    var i = 0;
                    _this.listaGastos.forEach(function (element) {
                        _this.editListaGastos[i] = false;
                        i++;
                    });
                    console.log(_this.editListaGastos);
                });
            }
            else {
            }
        }, function (error) {
            _this.setBalanceToZero();
        });
    }
    UserdataService.prototype.facebookLogin = function () {
        var _this = this;
        this.angularFireAuth.auth
            .signInWithPopup(new __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].FacebookAuthProvider())
            .then(function (result) {
            _this.showbars = true;
            console.log(result);
            alert('Usuario loggeado con Facebook');
            if (result.additionalUserInfo.isNewUser) {
                _this.saveNewUserData(result);
            }
            _this.router.navigate(['dashboard']);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    UserdataService.prototype.isLogged = function () {
        return this.angularFireAuth.authState;
    };
    UserdataService.prototype.logout = function () {
        this.angularFireAuth.auth.signOut();
        alert('Sesión cerrada');
        this.router.navigate(['dashboard']);
        this.balance.totalSavings = 0;
        this.setBalanceToZero();
        this.setRecordsToNull();
    };
    UserdataService.prototype.getUserData = function () {
        return this.angularFireAuth.auth.currentUser;
    };
    UserdataService.prototype.getProfileData = function (id) {
        return this.afDB.object('users/' + id);
    };
    UserdataService.prototype.barsOrNot = function () {
        if (this.router.url === '/login') {
            this.showbars = false;
        }
        else {
            this.showbars = true;
        }
    };
    UserdataService.prototype.getBalance = function (uid) {
        return this.afDB.object('users/' + uid + '/app_data/');
    };
    // Private Functions
    UserdataService.prototype.setBalanceToZero = function () {
        this.balance.totalSavings = 0;
        this.balance.income = {
            totalIncome: 0,
        },
            this.balance.expenses = {
                totalExpenses: 0,
            };
    };
    UserdataService.prototype.setRecordsToNull = function () {
        this.listaGastos = null;
        this.listaIngresos = null;
        this.editListaGastos = [];
        this.editListaIngresos = [];
    };
    UserdataService.prototype.setBalanceToUserData = function (balance) {
        balance.totalSavings =
            balance.income.totalIncome -
                balance.expenses.totalExpenses;
        this.balance = balance;
    };
    UserdataService.prototype.saveNewUserData = function (result) {
        result.additionalUserInfo.profile.app_data = {
            income: {
                totalIncome: 0
            },
            expenses: {
                totalExpenses: 0
            }
        },
            result.additionalUserInfo.profile.uid = result.user.uid;
        result.additionalUserInfo.profile.app_data.totalSavings = 0;
        this.afDB.database.ref('users/' + result.user.uid).set(result.additionalUserInfo.profile);
    };
    UserdataService.prototype.getRegistroIngresos = function (uid) {
        return this.afDB.list('users/' + uid + '/app_data/income');
    };
    UserdataService.prototype.getRegistroGastos = function (uid) {
        return this.afDB.list('/users/' + uid + '/app_data/expenses/');
    };
    UserdataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], UserdataService);
    return UserdataService;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/***/ (function(module, exports) {

module.exports = ".nav-mobile-menu {\n    margin-top: 15px;\n}\n\n.logo-img > img {\n  width: 120px;\n  top: 16px;\n  vertical-align: middle;\n  position: static;\n}\n\n.logo-img {\n    display: inline-block;\n    width: auto;\n}\n\n.highlight {\n    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);\n    background-color: rgba(240, 240, 240, 0.5);\n}\n\n.profile-name {\n    text-transform: none;\n    padding: 1rem;\n    display: inline !important;\n}"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\">\n    <a routerLink=\"/\" class=\"simple-text\">\n        <div class=\"logo-img\">\n            <img src=\"./assets/img/logo-oinkii.svg\" class=\"oinkii-logo\" />\n        </div>\n    </a>\n</div>\n<div class=\"sidebar-wrapper\">\n    <div *ngIf=\"isMobileMenu()\">\n        <!-- <form class=\"navbar-form\">\n      <span class=\"bmd-form-group\">\n        <div class=\"input-group no-border\">\n          <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\n          <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n            <i class=\"material-icons\">search</i>\n            <div class=\"ripple-container\"></div>\n          </button>\n        </div>\n      </span>\n    </form> -->\n        <ul *ngIf=\"!userdataService.loggedIn\" class=\"nav navbar-nav nav-mobile-menu\">\n            <li class=\"nav-item\">\n                <a routerLink=\"login\" class=\"nav-link\">\n                    <i class=\"material-icons\">account_circle</i>\n                    <p>Login</p>\n                </a>\n            </li>\n\n            <li class=\"nav-item highlight\">\n                <a routerLink=\"register\" class=\"nav-link\">\n                    <i class=\"material-icons\">person_add</i>\n                    <p>Regístrate</p>\n                </a>\n            </li>\n        </ul>\n\n        <ul *ngIf=\"userdataService.loggedIn\" class=\"nav navbar-nav nav-mobile-menu\">\n            <li class=\"dropdown nav-item highlight\">\n                <a class=\"profile-photo nav-link\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    <img *ngIf=\"userdataService.currentUser.photoURL\" width=\"30\" height=\"30\" src=\"{{ userdataService.currentUser.photoURL }}\"\n                        alt=\"Circle Image\" class=\"rounded-circle img-fluid\">\n                    <p class=\"profile-name\">{{ userdataService.currentUser.displayName }}</p>\n                    <br>\n                </a>\n\n                <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\n                    <h6 class=\"dropdown-header\">{{ userdataService.currentUser.displayName }}</h6>\n                    <a routerLink=\"/profile/{{ userdataService.uid }}\" class=\"dropdown-item\">\n                        <i class=\"material-icons\">face</i>Perfil de Usuario</a>\n                    <a (click)=\"logout()\" class=\"dropdown-item\">\n                        <i class=\"material-icons\">exit_to_app</i>Salir de mi cuenta</a>\n                </div>\n            </li>\n        </ul>\n    </div>\n    <ul class=\"nav\">\n        <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems\" class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"[menuItem.path]\">\n                <i class=\"material-icons\">{{menuItem.icon}}</i>\n                <p>{{menuItem.title}}</p>\n            </a>\n        </li>\n    </ul>\n</div>"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_userdata_service__ = __webpack_require__("./src/app/services/userdata.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ROUTES = [
    { path: 'dashboard', title: 'Dashboard', icon: 'dashboard' },
    { path: 'balance', title: 'Registro de Ahorro', icon: 'content_paste' },
];
var SidebarComponent = (function () {
    function SidebarComponent(userdataService) {
        this.userdataService = userdataService;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ;
    SidebarComponent.prototype.logout = function () {
        this.userdataService.logout();
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sidebar',
            template: __webpack_require__("./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("./src/app/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_userdata_service__["a" /* UserdataService */]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map