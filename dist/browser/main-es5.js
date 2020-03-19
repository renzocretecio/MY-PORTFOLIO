(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div class=\"portfolio-container\">\r\n  <router-outlet (activate)=\"top($event)\"></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/body/about/about.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/body/about/about.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main start -->\n<main role=\"main\">\n  <div class=\"container\">\n    <article class=\"home-about\" data-nav=\"about\" id=\"about\" [ngStyle]=\"{opacity: isTrue === true ? '1' : '0'}\">\n      <header class=\"about-header\">\n        <h1 class=\"about-title\">ABOUT</h1>\n      </header>\n      <div class=\"content\">\n        <p>I am an aspiring full-stack developer currently living in Muntinlupa City. Professional experienced in making\n          RESTful API and Angular application. Familiar with object-oriented programming and MVC and also experienced in\n          making Spring boot and Angular application.</p>\n        <p>I use HTML, CSS, JAVASCRIPT often, usually with JQUERY and BOOTSTRAP with a foundation in problem-solving and\n          web layout design.\n        </p>\n        <p>Feel free to take a look at my projects on the <i>Projects</i> page.</p>\n      </div>\n\n\n    </article>\n  </div>\n</main>\n<!-- Main end -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/body/home/home.component.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/body/home/home.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Header start -->\r\n<div id=\"site-header\" class=\"showcase\" data-nav=\"home\">\r\n  <!-- Home title start -->\r\n  <div class=\"container\" id=\"home\">\r\n\r\n    <div class=\"home-title\">\r\n      <h1>RENZO R. CRETECIO</h1>\r\n      <h2>Your small business web solution</h2>\r\n    </div>\r\n    <!-- Home title end -->\r\n    <!-- Logo start -->\r\n    <div class=\"photo\" title=\"Hello, It's me!\">\r\n      <div class=\"content\">\r\n        <div id=\"photo-logo\">\r\n          <img class=\"face front\" src=\"{{img[0]}}\" alt=\"Renzo\">\r\n          <img style=\"object-fit: cover;\" class=\"face back\" src=\"{{img[1]}}\" height=\"529\"\r\n            sizes=\"(max-width: 529px) 100vw, 529px\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Logo end -->\r\n    <!-- Intro start -->\r\n\r\n    <div class=\"home-intro\">\r\n      <div class=\"intro-title\">\r\n        <div id=\"title\">\r\n          <p class=\"title-1\">FRONT-END DEVELOPER</p>\r\n          <p class=\"title-2\">BACK-END DEVELOPER</p>\r\n          <p class=\"title-3\">WEB DESIGNER</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"intro\">\r\n        <p id=\"text-effect\">Hi, I'm a web development enthusiast that is armed with experience, learning, and passion.\r\n        </p>\r\n      </div>\r\n      <div class=\"read-more\">\r\n\r\n      </div>\r\n    </div>\r\n    <!-- Intro end -->\r\n  </div>\r\n</div>\r\n<!-- Header end  -->\r\n\r\n<app-about></app-about>\r\n\r\n<footer>\r\n  <app-footer></app-footer>\r\n</footer>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/body/page-not-found/page-not-found.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/body/page-not-found/page-not-found.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main role=\"main\">\n  <div class=\"main-content\">\n    <div class=\"card\">\n      <div class=\"card-content\">\n        <div class=\"card-header\">\n          <h2>ERROR 404 PAGE NOT FOUND</h2>\n        </div>\n        <div class=\"card-text\">\n          <p>The page you were looking for doesn't exist</p>\n          <p><a id=\"back-home\" [routerLink]=\"['']\"><i class=\"fas fa-chevron-left\"></i> Back to our main site</a></p>\n        </div>\n      </div>\n    </div>\n  </div>\n</main>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/body/projects/projects.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/body/projects/projects.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main role=\"main\">\r\n  <div class=\"container\">\r\n    <div class=\"post-header\">\r\n      <h1 class=\"post-title\">PROJECTS</h1>\r\n    </div>\r\n    <div class=\"post-content\">\r\n      <h2 class=\"project-title\" style=\"text-align: center\">Human Resource Infomation System</h2>\r\n      <div class=\"carousel-container\">\r\n        <div class=\"glider-contain\" style=\"padding: 0;\">\r\n          <div class=\"glide\">\r\n            <ngx-slick-carousel class=\"carousel\" #slickModal=\"slick-carousel\" [config]=\"hrisConfig\">\r\n              <div ngxSlickItem *ngFor=\"let slide of hrisImages\" class=\"slide\">\r\n\r\n                <img src=\"{{ slide }}\" alt=\"\" sizes=\"(max-width: 500px) 100vw, 500px\" width=\"426\" height=\"320\">\r\n\r\n              </div>\r\n              <div ngxSlickItem *ngFor=\"let slide of hrisPortrait\" class=\"slide\">\r\n\r\n                <img src=\"{{ slide }}\" alt=\"\" sizes=\"(max-width: 261px) 100vw, 500px\" width=\"261\" height=\"320\">\r\n\r\n              </div>\r\n            </ngx-slick-carousel>\r\n            <a class=\"gallery-arrows hris-prev\" style=\"display: block;\"><i class=\"fas fa-chevron-left\"></i></a>\r\n            <a class=\"gallery-arrows hris-next\" style=\"display: block;\"><i class=\"fas fa-chevron-right\"></i></a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"text\">\r\n        <h3>Technical Sheet</h3>\r\n        <hr>\r\n        <div class=\"list\">\r\n          <ul class=\"list-items\">\r\n            <li>ANGULAR</li>\r\n            <li>CSS</li>\r\n            <li>JQUERY</li>\r\n            <li>RESPONSIVE DESIGN</li>\r\n            <li>SPRING BOOT</li>\r\n            <li>MYSQL</li>\r\n            <li>HIBERNATE</li>\r\n            <li>RESTFUL API</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n\r\n      <h2 class=\"project-title\" style=\"text-align: center\">eGovPay</h2>\r\n      <div class=\"carousel-container\">\r\n        <div class=\"glider-contain\" style=\"padding: 0;\">\r\n          <div class=\"glide\">\r\n            <ngx-slick-carousel class=\"carousel\" #slickModal=\"slick-carousel\" [config]=\"egovpayConfig\">\r\n              <div ngxSlickItem *ngFor=\"let slide of egovPayImages\" class=\"slide\">\r\n\r\n                <img src=\"{{ slide }}\" alt=\"\" sizes=\"(max-width: 500px) 100vw, 500px\" width=\"426\" height=\"320\">\r\n\r\n              </div>\r\n              <div ngxSlickItem *ngFor=\"let slide of egovPayPortrait\" class=\"slide\">\r\n\r\n                <img src=\"{{ slide }}\" alt=\"\" sizes=\"(max-width: 261px) 100vw, 261px\" width=\"261\" height=\"320\">\r\n\r\n              </div>\r\n            </ngx-slick-carousel>\r\n            <a class=\"gallery-arrows egovpay-prev\" style=\"display: block;\"><i class=\"fas fa-chevron-left\"></i></a>\r\n            <a class=\"gallery-arrows egovpay-next\" style=\"display: block;\"><i class=\"fas fa-chevron-right\"></i></a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"text\">\r\n        <h3>Technical Sheet</h3>\r\n        <hr>\r\n        <div class=\"list\">\r\n          <ul class=\"list-items\">\r\n            <li>FRONT-END DEVELOPMENT</li>\r\n            <li>ANGULAR 6</li>\r\n            <li>CSS</li>\r\n            <li>BOOTSTRAP 3</li>\r\n            <li>JQUERY</li>\r\n            <li>RESPONSIVE DESIGN</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>\r\n\r\n<footer>\r\n  <app-footer></app-footer>\r\n</footer>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/body/resume/resume.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/body/resume/resume.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main role=\"main\">\r\n  <div class=\"container\">\r\n    <div class=\"post-header\">\r\n      <h1 class=\"post-title\">RESUME</h1>\r\n    </div>\r\n    <div class=\"post-content\">\r\n      <h1 class=\"content-title\">EDUCATION</h1>\r\n      <h2 style=\"text-align: center;\">Pamantasan ng Lungsod ng Muntinlupa</h2>\r\n      <h3 class=\"school\" style=\"text-align: center;\">Bachelor of Science in Computer Science</h3>\r\n      <p style=\"text-align: center\">First place in thesis presentation during 3rd Annual Research Colloquium</p>\r\n      <p style=\"text-align: center\">Best Thesis awardee</p>\r\n      <p style=\"text-align: center\">2014-2018</p>\r\n      <h1 class=\"content-title\">TECHNICAL TOOLBOX</h1>\r\n      <h2 style=\"text-align: center; margin-bottom: 1em;\">Languages I speak</h2>\r\n      <h2 class=\"tech-title\" style=\"text-align: center;\">Front-end</h2>\r\n      <div class=\"first-row contain\">\r\n        <div class=\"tech-item\" *ngFor=\"let tech of firstItems; index as i;\">\r\n          <img src=\"{{tech}}\">\r\n          <p style=\"text-transform: uppercase; margin: 0;\">{{firstRow[i]}}</p>\r\n        </div>\r\n      </div>\r\n      <h2 class=\"tech-title\" style=\"text-align: center;\">Back-end</h2>\r\n      <div class=\"second-row contain\">\r\n        <div class=\"tech-item\" *ngFor=\"let tech of secondItems; index as i;\">\r\n          <img src=\"{{tech}}\">\r\n          <p style=\"text-transform: uppercase;margin: 0;\">{{secondRow[i]}}</p>\r\n        </div>\r\n      </div>\r\n      <h2 class=\"tech-title\" style=\"text-align: center;\">Dev tools</h2>\r\n      <div class=\"third-row contain\">\r\n        <div class=\"tech-item\" *ngFor=\"let tech of thirdItems; index as i;\">\r\n          <img src=\"{{tech}}\">\r\n          <p style=\"text-transform: uppercase;margin: 0;\">{{thirdRow[i]}}</p>\r\n        </div>\r\n      </div>\r\n      <h1 class=\"content-title\">EMPLOYMENT</h1>\r\n      <h2 style=\"text-align: center;\">BG The Printing Shop</h2>\r\n      <h3 style=\"text-align: center;\">Graphic Designer</h3>\r\n      <p style=\"text-align: center;\">T-shirt and Tarpaulin template design using Photoshop</p>\r\n      <p style=\"text-align: center;\">Design printing using a heat press machine</p>\r\n      <p style=\"text-align: center\">Jan - April 2018</p><br><br>\r\n      <h2 style=\"text-align: center;\">Ziaplex Inc.</h2>\r\n      <h3 style=\"text-align: center;\">Entry Level Java App Developer</h3>\r\n      <p style=\"text-align: center;\">Web Development | Software Development</p>\r\n      <p style=\"text-align: center;\">User Interface Design</p>\r\n      <p style=\"text-align: center\">Sept 25, 2018 - Mar 25, 2019</p>\r\n      <p style=\"text-align: center\"><a title=\"ziplex.biz\" href=\"http://www.ziaplex.biz\" target=\"_blank\"\r\n          rel=\"noopener\">View\r\n          website »</a></p>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</main>\r\n<footer>\r\n  <app-footer></app-footer>\r\n</footer>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer id=\"footer\">\r\n  <div class=\"footer-content\">\r\n    <div class=\"container\">\r\n      <div class=\"social-media\">\r\n        <div class=\"email\">\r\n          <a href=\"mailto:renzocretecio@gmail.com\" title=\"Email me\" target=\"_top\">\r\n            renzocretecio@gmail.com\r\n          </a>\r\n        </div>\r\n        <ul class=\"links\">\r\n          <li>\r\n            <a href=\"https://github.com/creteciorenzo\" title=\"creteciorenzo on github\" target=\"_blank\" rel=\"noopener\">\r\n              <i class=\"fab fa-github\"></i>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"https://www.messenger.com/t/creteciorenzo\" title=\"Renzo Cretecio on messenger\" target=\"_blank\"\r\n              rel=\"noopener\">\r\n              <i class=\"fab fa-facebook-messenger\"></i>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"https://www.twitter.com/@renzooorc\" title=\"@renzooorc on twitter\" target=\"_blank\" rel=\"noopener\">\r\n              <i class=\"fab fa-twitter\"></i>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"https://www.linkedin.com/in/renzo-cretecio-a0b96616b/\" title=\"Renzo Cretecio on Linkedin\"\r\n              target=\"_blank\" rel=\"noopener\">\r\n              <i class=\"fab fa-linkedin\"></i>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n\r\n        <div class=\"info\">\r\n          <p style=\"text-transform: uppercase;\">© 2019 Renzo r. Cretecio</p>\r\n        </div>\r\n        <button class=\"scroll-up\" type=\"button\" (click)=\"goTop()\">\r\n          <i class=\"fa fa-arrow-up\"></i>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navigation/navigation.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navigation/navigation.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav id=\"category\" class=\"fixed-header\" role=\"navigation\">\r\n\r\n  <div class=\"logo\">\r\n    <h1 class=\"circle\">R<span>C</span></h1>\r\n  </div>\r\n\r\n  <ul class=\"menu-primary\">\r\n    <li id=\"menu-item-1\" class=\"menu-item\">\r\n      <a title=\"home\" class=\"nav-item\" [routerLink]=\"['']\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:\r\n        true}\" (click)=\"goTop('Renzo R. Cretecio | Web Developer')\">Home</a>\r\n    </li>\r\n    <li id=\"menu-item-3\" class=\"menu-item\">\r\n      <a title=\"resume\" class=\"nav-item\" [routerLink]=\"['/resume']\" [routerLinkActive]=\"['active']\"\r\n        (click)=\"goTop('Renzo R. Cretecio | Resume')\">Resume</a>\r\n    </li>\r\n    <li id=\"menu-item-4\" class=\"menu-item\">\r\n      <a title=\"projects\" class=\"nav-item\" [routerLink]=\"['/projects']\" [routerLinkActive]=\"['active']\"\r\n        (click)=\"goTop('Renzo R. Cretecio | Projects')\">Projects</a>\r\n    </li>\r\n  </ul>\r\n</nav>\r\n\r\n<div [@routeAnimations]=\"o && o.activatedRouteData \r\n      && o.activatedRouteData['animation']\">\r\n  <router-outlet #o=\"outlet\"></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _body_resume_resume_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./body/resume/resume.component */ "./src/app/body/resume/resume.component.ts");
/* harmony import */ var _body_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./body/home/home.component */ "./src/app/body/home/home.component.ts");
/* harmony import */ var _body_projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./body/projects/projects.component */ "./src/app/body/projects/projects.component.ts");
/* harmony import */ var _body_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./body/page-not-found/page-not-found.component */ "./src/app/body/page-not-found/page-not-found.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");








var routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    {
        path: '', component: _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__["NavigationComponent"],
        children: [
            { path: '', component: _body_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], data: { animation: 'Home' } },
            { path: 'resume', component: _body_resume_resume_component__WEBPACK_IMPORTED_MODULE_3__["ResumeComponent"], data: { animation: 'Resume' } },
            { path: 'projects', component: _body_projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"], data: { animation: 'Projects' } },
        ]
    },
    { path: '**', component: _body_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                    anchorScrolling: "enabled", onSameUrlNavigation: 'reload',
                    scrollPositionRestoration: 'enabled', enableTracing: true, useHash: true,
                })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.browser.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.browser.module.ts ***!
  \***************************************/
/*! exports provided: AppBrowserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBrowserModule", function() { return AppBrowserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/fesm5/ngx-slick-carousel.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");







var AppBrowserModule = /** @class */ (function () {
    function AppBrowserModule() {
    }
    AppBrowserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_5__["SlickCarouselModule"],
                _app_module__WEBPACK_IMPORTED_MODULE_6__["AppModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserTransferStateModule"]
            ],
            providers: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppBrowserModule);
    return AppBrowserModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-toolkit/universal */ "./node_modules/@ng-toolkit/universal/fesm5/ng-toolkit-universal.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(window) {
        this.window = window;
    }
    AppComponent.prototype.top = function (event) {
        this.window.scroll(0, 0);
    };
    AppComponent.ctorParameters = function () { return [
        { type: Window, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_2__["WINDOW"],] }] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_2__["WINDOW"]))
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/fesm5/ngx-slick-carousel.js");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _body_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./body/home/home.component */ "./src/app/body/home/home.component.ts");
/* harmony import */ var _body_resume_resume_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./body/resume/resume.component */ "./src/app/body/resume/resume.component.ts");
/* harmony import */ var _body_projects_projects_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./body/projects/projects.component */ "./src/app/body/projects/projects.component.ts");
/* harmony import */ var _body_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./body/page-not-found/page-not-found.component */ "./src/app/body/page-not-found/page-not-found.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _nguniversal_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @nguniversal/common */ "./node_modules/@nguniversal/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-toolkit/universal */ "./node_modules/@ng-toolkit/universal/fesm5/ng-toolkit-universal.js");
/* harmony import */ var _body_about_about_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./body/about/about.component */ "./src/app/body/about/about.component.ts");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__["NavigationComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _body_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _body_resume_resume_component__WEBPACK_IMPORTED_MODULE_10__["ResumeComponent"],
                _body_projects_projects_component__WEBPACK_IMPORTED_MODULE_11__["ProjectsComponent"],
                _body_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__["PageNotFoundComponent"],
                _body_about_about_component__WEBPACK_IMPORTED_MODULE_17__["AboutComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__["SlickCarouselModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"],
                _nguniversal_common__WEBPACK_IMPORTED_MODULE_14__["TransferHttpCacheModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
                _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_16__["NgtUniversalModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]
            ],
            providers: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/body/about/about.component.css":
/*!************************************************!*\
  !*** ./src/app/body/about/about.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "main h1::after {\r\n  content: '';\r\n  display: block;\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 50%;\r\n  width: 16rem;\r\n  height: 4px;\r\n  margin-left: -8rem;\r\n  background-color: #525e65;\r\n}\r\n\r\n.home-about {\r\n  width: 28rem;\r\n  margin: 0 auto;\r\n  font-size: 1.2rem;\r\n  text-align: justify;\r\n  margin-top: 2rem;\r\n  margin-bottom: 2rem;\r\n  -webkit-transition: all 1s;\r\n  transition: all 1s;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9keS9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFNBQVM7RUFDVCxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQiwwQkFBa0I7RUFBbEIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYm9keS9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWFpbiBoMTo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHdpZHRoOiAxNnJlbTtcclxuICBoZWlnaHQ6IDRweDtcclxuICBtYXJnaW4tbGVmdDogLThyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUyNWU2NTtcclxufVxyXG5cclxuLmhvbWUtYWJvdXQge1xyXG4gIHdpZHRoOiAyOHJlbTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMXM7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/body/about/about.component.ts":
/*!***********************************************!*\
  !*** ./src/app/body/about/about.component.ts ***!
  \***********************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.isTrue = false;
    }
    AboutComponent.prototype.ngOnInit = function () {
        this.fadeIn();
    };
    AboutComponent.prototype.fadeIn = function () {
        var _this = this;
        jquery__WEBPACK_IMPORTED_MODULE_2__(window).scroll(function () {
            // let window = $(this).scrollTop() + $(this).innerHeight();
            // var objectBottom = $("#about").offset().top + $("#about").outerHeight();
            // if (window > 1000) {
            //   if ($("#about").css("opacity") == 0) { $("#about").fadeTo('slow', 1); }
            // }
            if (jquery__WEBPACK_IMPORTED_MODULE_2__(window).scrollTop() >= 600) {
                _this.isTrue = true;
                // alert('waw')
            }
            else if (jquery__WEBPACK_IMPORTED_MODULE_2__(window).scrollTop() === 0) {
                _this.isTrue = false;
            }
        });
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/index.js!./src/app/body/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/body/about/about.component.css")]
        })
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/body/home/home.component.css":
/*!**********************************************!*\
  !*** ./src/app/body/home/home.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#site-header {\r\n  /* margin: 0; */\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100vh;\r\n  min-height: 40rem;\r\n  padding-top: 3rem;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n}\r\n\r\n#site-header h1 {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.home-title {\r\n  position: relative;\r\n  padding: 2rem 0;\r\n  text-align: center;\r\n}\r\n\r\n.home-title h1 {\r\n  font-size: 3rem;\r\n  font-size: 9vw;\r\n  font-weight: 100;\r\n  line-height: 1;\r\n  margin: 0;\r\n}\r\n\r\n.home-title h2 {\r\n  font-family: \"Quicksand\", sans-serif;\r\n  font-size: 1rem;\r\n  font-weight: 700;\r\n  font-style: normal;\r\n  line-height: 1.5;\r\n  letter-spacing: 0.125em;\r\n  margin: 1em 0 0;\r\n}\r\n\r\n.photo {\r\n  position: relative;\r\n  width: 18em;\r\n  height: 12em;\r\n  margin: 0 auto;\r\n  cursor: pointer;\r\n}\r\n\r\n.photo .content {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\r\n  -webkit-perspective: 1000px;\r\n          perspective: 1000px;\r\n}\r\n\r\n#photo-logo {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  width: 9em;\r\n  height: 9em;\r\n  margin-top: -4.5em;\r\n  margin-left: -4.5em;\r\n  -webkit-transition: all 2s;\r\n  transition: all 2s;\r\n  -webkit-transform-style: preserve-3d;\r\n          transform-style: preserve-3d;\r\n}\r\n\r\n.content:hover #photo-logo {\r\n  -webkit-transform: rotateY(180deg);\r\n          transform: rotateY(180deg);\r\n}\r\n\r\n#photo-logo .front,\r\n#photo-logo .back {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: #2E3445;\r\n  border-radius: 50%;\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n}\r\n\r\n.back {\r\n  -webkit-transform: rotateY(180deg);\r\n          transform: rotateY(180deg);\r\n}\r\n\r\n.home-intro {\r\n  width: 28rem;\r\n  margin: 0 auto;\r\n  font-size: 1.2rem;\r\n  text-align: center;\r\n  margin-top: 2rem;\r\n  margin-bottom: 2rem;\r\n  -webkit-transition: all 1s;\r\n  transition: all 1s;\r\n}\r\n\r\n.intro-title {\r\n  position: relative;\r\n  width: 28rem;\r\n  margin: 0 auto;\r\n  height: 2em;\r\n}\r\n\r\n#title {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  width: 28rem;\r\n  margin-left: -14rem;\r\n  margin-top: -2em;\r\n}\r\n\r\n#title p {\r\n  font-family: 'Nunito', sans-serif;\r\n  font-weight: 700;\r\n  font-size: 1em;\r\n\r\n  position: absolute;\r\n  left: 0;\r\n  width: 100%;\r\n  margin-top: 0;\r\n\r\n  -webkit-animation-duration: 10s;\r\n\r\n          animation-duration: 10s;\r\n  -webkit-animation-timing-function: ease-in-out;\r\n          animation-timing-function: ease-in-out;\r\n  -webkit-animation-iteration-count: infinite;\r\n          animation-iteration-count: infinite;\r\n}\r\n\r\n.title-1 {\r\n  -webkit-animation-name: anim-1;\r\n          animation-name: anim-1;\r\n}\r\n\r\n.title-2 {\r\n  -webkit-animation-name: anim-2;\r\n          animation-name: anim-2;\r\n}\r\n\r\n.title-3 {\r\n  -webkit-animation-name: anim-3;\r\n          animation-name: anim-3;\r\n}\r\n\r\n@-webkit-keyframes anim-1 {\r\n\r\n  0%,\r\n  8.3% {\r\n    /* left: -100%; */\r\n    opacity: 0;\r\n  }\r\n\r\n  8.3%,\r\n  25% {\r\n    /* left: 25%; */\r\n    opacity: 1;\r\n  }\r\n\r\n  33.33%,\r\n  100% {\r\n    /* left: 110%; */\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes anim-1 {\r\n\r\n  0%,\r\n  8.3% {\r\n    /* left: -100%; */\r\n    opacity: 0;\r\n  }\r\n\r\n  8.3%,\r\n  25% {\r\n    /* left: 25%; */\r\n    opacity: 1;\r\n  }\r\n\r\n  33.33%,\r\n  100% {\r\n    /* left: 110%; */\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes anim-2 {\r\n\r\n  0%,\r\n  33.33% {\r\n    /* left: -100%; */\r\n    opacity: 0;\r\n  }\r\n\r\n  41.63%,\r\n  58.29% {\r\n    /* left: 25%; */\r\n    opacity: 1;\r\n  }\r\n\r\n  66.66%,\r\n  100% {\r\n    /* left: 110%; */\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes anim-2 {\r\n\r\n  0%,\r\n  33.33% {\r\n    /* left: -100%; */\r\n    opacity: 0;\r\n  }\r\n\r\n  41.63%,\r\n  58.29% {\r\n    /* left: 25%; */\r\n    opacity: 1;\r\n  }\r\n\r\n  66.66%,\r\n  100% {\r\n    /* left: 110%; */\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes anim-3 {\r\n\r\n  0%,\r\n  66.66% {\r\n    /* left: -100%; */\r\n    opacity: 0;\r\n  }\r\n\r\n  74.96%,\r\n  91.62% {\r\n    /* left: 25%; */\r\n    opacity: 1;\r\n  }\r\n\r\n  100% {\r\n    /* left: 110%; */\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes anim-3 {\r\n\r\n  0%,\r\n  66.66% {\r\n    /* left: -100%; */\r\n    opacity: 0;\r\n  }\r\n\r\n  74.96%,\r\n  91.62% {\r\n    /* left: 25%; */\r\n    opacity: 1;\r\n  }\r\n\r\n  100% {\r\n    /* left: 110%; */\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 320px) and (max-width: 480px) {\r\n\r\n  #site-header {\r\n    height: 100vh;\r\n  }\r\n\r\n  .home-intro,\r\n  .home-about {\r\n    max-width: 100%;\r\n  }\r\n\r\n  .home-title h1 {\r\n    font-size: 2.5rem;\r\n    font-size: 9vw;\r\n  }\r\n\r\n  .intro-title {\r\n    width: 100%;\r\n  }\r\n\r\n}\r\n\r\n@media only screen and (min-width: 481px) and (max-width: 767px) {\r\n  #site-header {\r\n    height: 100vh;\r\n  }\r\n\r\n  .home-title h1 {\r\n    font-size: 2.5rem;\r\n    font-size: 9vw;\r\n  }\r\n\r\n}\r\n\r\n@media only screen and (min-width: 768px) and (max-width: 1024px) {\r\n  #site-header {\r\n    height: 100vh;\r\n  }\r\n\r\n  .home-title h1 {\r\n    font-size: 4.5rem;\r\n    font-size: 9vw;\r\n  }\r\n\r\n  .about-title {\r\n    padding-top: 0;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 1025px) and (max-width: 1280px) {\r\n  #site-header {\r\n    height: 100vh;\r\n  }\r\n\r\n  .home-title h1 {\r\n    font-size: 6.75rem;\r\n\r\n  }\r\n}\r\n\r\n/* @media only screen and (max-width: 30rem) {\r\n\r\n  .home-intro,\r\n  .home-about {\r\n    width: 100%;\r\n  }\r\n\r\n  .home-title h1 {\r\n    font-size: 2.5rem;\r\n    font-size: 9vw;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 45rem) {\r\n\r\n  .home-title h1 {\r\n    font-size: 4.5rem;\r\n    font-size: 9vw;\r\n  }\r\n}\r\n*/\r\n\r\n@media only screen and (min-width: 75rem) {\r\n\r\n  .home-title h1 {\r\n    font-size: 6.75rem;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9keS9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0JBQXVCO1VBQXZCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFHQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWiwyQkFBbUI7VUFBbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLDBCQUFrQjtFQUFsQixrQkFBa0I7RUFDbEIsb0NBQTRCO1VBQTVCLDRCQUE0QjtBQUM5Qjs7QUFJQTtFQUNFLGtDQUEwQjtVQUExQiwwQkFBMEI7QUFDNUI7O0FBSUE7O0VBRUUsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLG1DQUFtQztFQUNuQywyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxrQ0FBMEI7VUFBMUIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsMEJBQWtCO0VBQWxCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixjQUFjOztFQUVkLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsV0FBVztFQUNYLGFBQWE7O0VBRWIsK0JBQXVCOztVQUF2Qix1QkFBdUI7RUFDdkIsOENBQXNDO1VBQXRDLHNDQUFzQztFQUN0QywyQ0FBbUM7VUFBbkMsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsOEJBQXNCO1VBQXRCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLDhCQUFzQjtVQUF0QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSw4QkFBc0I7VUFBdEIsc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFOztJQUVFLGlCQUFpQjtJQUNqQixVQUFVO0VBQ1o7O0VBRUE7O0lBRUUsZUFBZTtJQUNmLFVBQVU7RUFDWjs7RUFFQTs7SUFFRSxnQkFBZ0I7SUFDaEIsVUFBVTtFQUNaO0FBQ0Y7O0FBbkJBOztFQUVFOztJQUVFLGlCQUFpQjtJQUNqQixVQUFVO0VBQ1o7O0VBRUE7O0lBRUUsZUFBZTtJQUNmLFVBQVU7RUFDWjs7RUFFQTs7SUFFRSxnQkFBZ0I7SUFDaEIsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7O0VBRUU7O0lBRUUsaUJBQWlCO0lBQ2pCLFVBQVU7RUFDWjs7RUFFQTs7SUFFRSxlQUFlO0lBQ2YsVUFBVTtFQUNaOztFQUVBOztJQUVFLGdCQUFnQjtJQUNoQixVQUFVO0VBQ1o7QUFDRjs7QUFuQkE7O0VBRUU7O0lBRUUsaUJBQWlCO0lBQ2pCLFVBQVU7RUFDWjs7RUFFQTs7SUFFRSxlQUFlO0lBQ2YsVUFBVTtFQUNaOztFQUVBOztJQUVFLGdCQUFnQjtJQUNoQixVQUFVO0VBQ1o7QUFDRjs7QUFFQTs7RUFFRTs7SUFFRSxpQkFBaUI7SUFDakIsVUFBVTtFQUNaOztFQUVBOztJQUVFLGVBQWU7SUFDZixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsVUFBVTtFQUNaO0FBQ0Y7O0FBbEJBOztFQUVFOztJQUVFLGlCQUFpQjtJQUNqQixVQUFVO0VBQ1o7O0VBRUE7O0lBRUUsZUFBZTtJQUNmLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixVQUFVO0VBQ1o7QUFDRjs7QUFHQTs7RUFFRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTs7SUFFRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0FBRUY7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixjQUFjO0VBQ2hCOztBQUVGOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0Usa0JBQWtCOztFQUVwQjtBQUNGOztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQW9CQzs7QUFDRDs7RUFFRTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYm9keS9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzaXRlLWhlYWRlciB7XHJcbiAgLyogbWFyZ2luOiAwOyAqL1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIG1pbi1oZWlnaHQ6IDQwcmVtO1xyXG4gIHBhZGRpbmctdG9wOiAzcmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuI3NpdGUtaGVhZGVyIGgxIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmhvbWUtdGl0bGUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nOiAycmVtIDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLmhvbWUtdGl0bGUgaDEge1xyXG4gIGZvbnQtc2l6ZTogM3JlbTtcclxuICBmb250LXNpemU6IDl2dztcclxuICBmb250LXdlaWdodDogMTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmhvbWUtdGl0bGUgaDIge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjEyNWVtO1xyXG4gIG1hcmdpbjogMWVtIDAgMDtcclxufVxyXG5cclxuLnBob3RvIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDE4ZW07XHJcbiAgaGVpZ2h0OiAxMmVtO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnBob3RvIC5jb250ZW50IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBlcnNwZWN0aXZlOiAxMDAwcHg7XHJcbn1cclxuXHJcbiNwaG90by1sb2dvIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHdpZHRoOiA5ZW07XHJcbiAgaGVpZ2h0OiA5ZW07XHJcbiAgbWFyZ2luLXRvcDogLTQuNWVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAtNC41ZW07XHJcbiAgdHJhbnNpdGlvbjogYWxsIDJzO1xyXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbn1cclxuXHJcblxyXG5cclxuLmNvbnRlbnQ6aG92ZXIgI3Bob3RvLWxvZ28ge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG59XHJcblxyXG5cclxuXHJcbiNwaG90by1sb2dvIC5mcm9udCxcclxuI3Bob3RvLWxvZ28gLmJhY2sge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJFMzQ0NTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4uYmFjayB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbn1cclxuXHJcbi5ob21lLWludHJvIHtcclxuICB3aWR0aDogMjhyZW07XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMXM7XHJcbn1cclxuXHJcbi5pbnRyby10aXRsZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAyOHJlbTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBoZWlnaHQ6IDJlbTtcclxufVxyXG5cclxuI3RpdGxlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHdpZHRoOiAyOHJlbTtcclxuICBtYXJnaW4tbGVmdDogLTE0cmVtO1xyXG4gIG1hcmdpbi10b3A6IC0yZW07XHJcbn1cclxuXHJcbiN0aXRsZSBwIHtcclxuICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDFlbTtcclxuXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuXHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMHM7XHJcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XHJcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbn1cclxuXHJcbi50aXRsZS0xIHtcclxuICBhbmltYXRpb24tbmFtZTogYW5pbS0xO1xyXG59XHJcblxyXG4udGl0bGUtMiB7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGFuaW0tMjtcclxufVxyXG5cclxuLnRpdGxlLTMge1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBhbmltLTM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYW5pbS0xIHtcclxuXHJcbiAgMCUsXHJcbiAgOC4zJSB7XHJcbiAgICAvKiBsZWZ0OiAtMTAwJTsgKi9cclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG5cclxuICA4LjMlLFxyXG4gIDI1JSB7XHJcbiAgICAvKiBsZWZ0OiAyNSU7ICovXHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgMzMuMzMlLFxyXG4gIDEwMCUge1xyXG4gICAgLyogbGVmdDogMTEwJTsgKi9cclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGFuaW0tMiB7XHJcblxyXG4gIDAlLFxyXG4gIDMzLjMzJSB7XHJcbiAgICAvKiBsZWZ0OiAtMTAwJTsgKi9cclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG5cclxuICA0MS42MyUsXHJcbiAgNTguMjklIHtcclxuICAgIC8qIGxlZnQ6IDI1JTsgKi9cclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICA2Ni42NiUsXHJcbiAgMTAwJSB7XHJcbiAgICAvKiBsZWZ0OiAxMTAlOyAqL1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYW5pbS0zIHtcclxuXHJcbiAgMCUsXHJcbiAgNjYuNjYlIHtcclxuICAgIC8qIGxlZnQ6IC0xMDAlOyAqL1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcblxyXG4gIDc0Ljk2JSxcclxuICA5MS42MiUge1xyXG4gICAgLyogbGVmdDogMjUlOyAqL1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgLyogbGVmdDogMTEwJTsgKi9cclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcblxyXG4gICNzaXRlLWhlYWRlciB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gIH1cclxuXHJcbiAgLmhvbWUtaW50cm8sXHJcbiAgLmhvbWUtYWJvdXQge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmhvbWUtdGl0bGUgaDEge1xyXG4gICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICBmb250LXNpemU6IDl2dztcclxuICB9XHJcblxyXG4gIC5pbnRyby10aXRsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MXB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAjc2l0ZS1oZWFkZXIge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICB9XHJcblxyXG4gIC5ob21lLXRpdGxlIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgZm9udC1zaXplOiA5dnc7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICNzaXRlLWhlYWRlciB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gIH1cclxuXHJcbiAgLmhvbWUtdGl0bGUgaDEge1xyXG4gICAgZm9udC1zaXplOiA0LjVyZW07XHJcbiAgICBmb250LXNpemU6IDl2dztcclxuICB9XHJcblxyXG4gIC5hYm91dC10aXRsZSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNXB4KSBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcbiAgI3NpdGUtaGVhZGVyIHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgfVxyXG5cclxuICAuaG9tZS10aXRsZSBoMSB7XHJcbiAgICBmb250LXNpemU6IDYuNzVyZW07XHJcblxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4vKiBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwcmVtKSB7XHJcblxyXG4gIC5ob21lLWludHJvLFxyXG4gIC5ob21lLWFib3V0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmhvbWUtdGl0bGUgaDEge1xyXG4gICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICBmb250LXNpemU6IDl2dztcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDVyZW0pIHtcclxuXHJcbiAgLmhvbWUtdGl0bGUgaDEge1xyXG4gICAgZm9udC1zaXplOiA0LjVyZW07XHJcbiAgICBmb250LXNpemU6IDl2dztcclxuICB9XHJcbn1cclxuKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NXJlbSkge1xyXG5cclxuICAuaG9tZS10aXRsZSBoMSB7XHJcbiAgICBmb250LXNpemU6IDYuNzVyZW07XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/body/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/body/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.homeH1 = "RENZO R. CRETECIO";
        this.displayTextH1 = "";
        this.img = ["../../assets/img/Logo2.jpg",
            "../../assets/img/Mev2.jpg"];
    }
    HomeComponent.prototype.typeWriter = function (that) {
        var totalLengthH1 = that.homeH1.length;
        var currentLengthH1 = that.displayTextH1.length;
        if (currentLengthH1 < totalLengthH1) {
            that.displayTextH1 += that.homeH1[currentLengthH1];
        }
        setTimeout(that.typeWriter, 200, that);
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.flip = function () {
        jquery__WEBPACK_IMPORTED_MODULE_2__('#photo-logo').toggleClass('flipped');
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/body/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/body/home/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/body/page-not-found/page-not-found.component.css":
/*!******************************************************************!*\
  !*** ./src/app/body/page-not-found/page-not-found.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-content {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  height: 100vh;\r\n  width: 100vw;\r\n\r\n}\r\n\r\n.card {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  width: 75%;\r\n  max-width: 364px;\r\n  padding: 24px;\r\n  color: #0e0b16;\r\n  background-color: #DBE8D4;\r\n  border-radius: 1em;\r\n}\r\n\r\n.main-content h2 {\r\n  margin: 0;\r\n  font-size: 1.25em;\r\n  line-height: 24px;\r\n}\r\n\r\n.card-text a {\r\n  font-family: \"Quicksand\", sans-serif;\r\n  margin: 0;\r\n  text-decoration: none;\r\n  font-weight: 700;\r\n  line-height: 24px;\r\n  color: #7289da;\r\n}\r\n\r\n.card-text a:hover {\r\n  border-bottom: 2px solid #7289da;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9keS9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsWUFBWTs7QUFFZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7QUFHQTtFQUNFLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLFNBQVM7RUFDVCxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDIiwiZmlsZSI6InNyYy9hcHAvYm9keS9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG5cclxufVxyXG5cclxuLmNhcmQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDc1JTtcclxuICBtYXgtd2lkdGg6IDM2NHB4O1xyXG4gIHBhZGRpbmc6IDI0cHg7XHJcbiAgY29sb3I6ICMwZTBiMTY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RCRThENDtcclxuICBib3JkZXItcmFkaXVzOiAxZW07XHJcbn1cclxuXHJcblxyXG4ubWFpbi1jb250ZW50IGgyIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAxLjI1ZW07XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbn1cclxuXHJcbi5jYXJkLXRleHQgYSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIHNhbnMtc2VyaWY7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIGNvbG9yOiAjNzI4OWRhO1xyXG59XHJcblxyXG4uY2FyZC10ZXh0IGE6aG92ZXIge1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNzI4OWRhO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/body/page-not-found/page-not-found.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/body/page-not-found/page-not-found.component.ts ***!
  \*****************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-not-found',
            template: __webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/body/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/body/page-not-found/page-not-found.component.css")]
        })
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/body/projects/projects.component.css":
/*!******************************************************!*\
  !*** ./src/app/body/projects/projects.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".project-title {\r\n  font-size: 1.25rem;\r\n  margin-top: 2em;\r\n}\r\n\r\n.carousel-container {\r\n  position: relative;\r\n\r\n  padding: 0;\r\n  margin: 2em 0 4em;\r\n  width: 100vw;\r\n  height: 15em;\r\n  left: calc(-50vw + 50%);\r\n  white-space: nowrap;\r\n}\r\n\r\n.slick-slide {\r\n  display: block;\r\n  opacity: 0.2;\r\n  -webkit-transition: all 0.5s ease;\r\n  transition: all 0.5s ease;\r\n}\r\n\r\n.slick-center {\r\n  opacity: 1;\r\n}\r\n\r\n.gallery-arrows {\r\n  font-size: 1em;\r\n  position: absolute;\r\n  width: 3em;\r\n  height: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n  color: #DBE8D4;\r\n  background-color: transparent;\r\n  cursor: pointer;\r\n  top: 0;\r\n}\r\n\r\n.gallery-arrows i {\r\n  position: absolute;\r\n  display: block;\r\n  top: 50%;\r\n  left: 50%;\r\n  width: 2em;\r\n  height: 2em;\r\n  margin-top: -1em;\r\n  margin-left: -1em;\r\n  font-size: 2em;\r\n  text-align: center;\r\n  line-height: 2em;\r\n}\r\n\r\n.egovpay-prev,\r\n.hris-prev {\r\n  left: 0;\r\n}\r\n\r\n.egovpay-next,\r\n.hris-next {\r\n  right: 0;\r\n}\r\n\r\n.text {\r\n  font-family: 'Nunito', sans-serif;\r\n  text-align: left;\r\n  width: 20rem;\r\n  margin: 0 auto;\r\n}\r\n\r\n.text h3 {\r\n  position: relative;\r\n  font-size: 2em;\r\n}\r\n\r\n.text h3 hr {\r\n  display: block;\r\n  height: 1px;\r\n  width: 50%;\r\n  background-color: rgba(219, 232, 212, 0.5);\r\n  position: relative;\r\n  border: 0;\r\n  margin: .5em 0 1em;\r\n}\r\n\r\n.text .list ul {\r\n  list-style: circle;\r\n  padding: 0 1em;\r\n}\r\n\r\n@media only screen and (min-width: 600px) and (max-width: 1024px) {\r\n  .post-title {\r\n    font-size: 4rem;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 320px) and (max-width: 599px) {\r\n  main .container {\r\n    position: relative;\r\n    width: 100%;\r\n  }\r\n\r\n  .post-title {\r\n    font-size: 3rem;\r\n  }\r\n\r\n  .post-content {\r\n    position: relative;\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9keS9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7O0VBRWxCLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixpQ0FBaUM7RUFDakMseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsWUFBWTtFQUNaLFVBQVU7RUFDVixTQUFTO0VBQ1QsY0FBYztFQUNkLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsTUFBTTtBQUNSOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxPQUFPO0FBQ1Q7O0FBRUE7O0VBRUUsUUFBUTtBQUNWOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxVQUFVO0VBQ1YsMENBQTBDO0VBQzFDLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztFQUNiO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ib2R5L3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvamVjdC10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gIG1hcmdpbi10b3A6IDJlbTtcclxufVxyXG5cclxuLmNhcm91c2VsLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMmVtIDAgNGVtO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDE1ZW07XHJcbiAgbGVmdDogY2FsYygtNTB2dyArIDUwJSk7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLnNsaWNrLXNsaWRlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBvcGFjaXR5OiAwLjI7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbn1cclxuXHJcbi5zbGljay1jZW50ZXIge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5nYWxsZXJ5LWFycm93cyB7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAzZW07XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGNvbG9yOiAjREJFOEQ0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0b3A6IDA7XHJcbn1cclxuXHJcbi5nYWxsZXJ5LWFycm93cyBpIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHdpZHRoOiAyZW07XHJcbiAgaGVpZ2h0OiAyZW07XHJcbiAgbWFyZ2luLXRvcDogLTFlbTtcclxuICBtYXJnaW4tbGVmdDogLTFlbTtcclxuICBmb250LXNpemU6IDJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDJlbTtcclxufVxyXG5cclxuLmVnb3ZwYXktcHJldixcclxuLmhyaXMtcHJldiB7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuLmVnb3ZwYXktbmV4dCxcclxuLmhyaXMtbmV4dCB7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi50ZXh0IHtcclxuICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB3aWR0aDogMjByZW07XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi50ZXh0IGgzIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbn1cclxuXHJcbi50ZXh0IGgzIGhyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDFweDtcclxuICB3aWR0aDogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjE5LCAyMzIsIDIxMiwgMC41KTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIG1hcmdpbjogLjVlbSAwIDFlbTtcclxufVxyXG5cclxuLnRleHQgLmxpc3QgdWwge1xyXG4gIGxpc3Qtc3R5bGU6IGNpcmNsZTtcclxuICBwYWRkaW5nOiAwIDFlbTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gIC5wb3N0LXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xyXG4gIG1haW4gLmNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5wb3N0LXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICB9XHJcblxyXG4gIC5wb3N0LWNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/body/projects/projects.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/body/projects/projects.component.ts ***!
  \*****************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
        this.hrisImages = ['../../assets/img/sc/hris1.png',
            '../../assets/img/sc/hris2.png',
            '../../assets/img/sc/hris3.png',
            '../../assets/img/sc/hris4.png',
            '../../assets/img/sc/hris5.png',
            '../../assets/img/sc/hris6.png'
        ];
        this.hrisPortrait = ['../../assets/img/sc/hris7.png',
            '../../assets/img/sc/hris8.png'];
        this.egovPayImages = ['../../assets/img/sc/egovpay1.png',
            '../../assets/img/sc/egovpay2.png',
            '../../assets/img/sc/egovpay3.png',
            '../../assets/img/sc/egovpay4.png',
            '../../assets/img/sc/egovpay5.png',
            '../../assets/img/sc/egovpay6.png'];
        this.egovPayPortrait = ['../../assets/img/sc/egovpay7.png',
            '../../assets/img/sc/egovpay8.png',
            '../../assets/img/sc/egovpay9.png'];
        this.hrisConfig = {
            "centerMode": true,
            "slidesToShow": 4,
            "prevArrow": '.hris-prev',
            "nextArrow": '.hris-next',
            "dots": true,
            "infinite": true,
            "variableWidth": true,
            "responsive": [
                {
                    "breakpoint": 1024,
                    "settings": {
                        "slidesToShow": 3,
                        "slidesToScroll": 3,
                        "infinite": true,
                        "dots": true
                    }
                },
                {
                    "breakpoint": 600,
                    "settings": {
                        "slidesToShow": 2,
                        "slidesToScroll": 2,
                        "infinite": true,
                        "dots": true
                    }
                },
                {
                    "breakpoint": 480,
                    "settings": {
                        "slidesToShow": 1,
                        "slidesToScroll": 1,
                        "infinite": true,
                        "dots": true
                    }
                }
            ]
        };
        this.egovpayConfig = {
            "centerMode": true,
            "slidesToShow": 3,
            "prevArrow": '.egovpay-prev',
            "nextArrow": '.egovpay-next',
            "dots": true,
            "infinite": true,
            "variableWidth": true,
            "responsive": [
                {
                    "breakpoint": 1024,
                    "settings": {
                        "slidesToShow": 3,
                        "slidesToScroll": 3,
                        "infinite": true,
                        "dots": true
                    }
                },
                {
                    "breakpoint": 600,
                    "settings": {
                        "slidesToShow": 2,
                        "slidesToScroll": 2,
                        "infinite": true,
                        "dots": true
                    }
                },
                {
                    "breakpoint": 480,
                    "settings": {
                        "slidesToShow": 1,
                        "slidesToScroll": 1,
                        "infinite": true,
                        "dots": true
                    }
                }
            ]
        };
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/index.js!./src/app/body/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/body/projects/projects.component.css")]
        })
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/body/resume/resume.component.css":
/*!**************************************************!*\
  !*** ./src/app/body/resume/resume.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".first-row {\r\n  position: relative;\r\n  display: grid;\r\n  grid-template-columns: repeat(5, 1fr);\r\n\r\n}\r\n\r\n.second-row,\r\n.third-row {\r\n  position: relative;\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 30%);\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n\r\n}\r\n\r\n.tech-item img {\r\n  border-radius: 50%;\r\n  cursor: pointer;\r\n  width: 3em;\r\n  height: 3em;\r\n  border: 3px solid #dbe8db;\r\n\r\n}\r\n\r\n.tech-title {\r\n  font-family: 'Quicksand', sans-serif;\r\n  font-weight: 400;\r\n  font-size: 1.5rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.post-content a {\r\n  color: #dbe8db;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.post-content a:hover {\r\n  border-bottom: 4px solid #dbe8db;\r\n}\r\n\r\n@media only screen and (min-width: 600px) and (max-width: 1024px) {\r\n  .post-header h1 {\r\n    font-size: 4rem;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 320px) and (max-width: 480px) {\r\n  main .container {\r\n    position: relative;\r\n    width: 100%;\r\n  }\r\n\r\n  .contain p {\r\n    display: none;\r\n  }\r\n\r\n  .post-header h1 {\r\n    font-size: 3rem;\r\n  }\r\n\r\n  .post-content {\r\n    position: relative;\r\n    width: 100%;\r\n  }\r\n\r\n  .content-title {\r\n    font-size: 25px;\r\n    margin-bottom: 1em;\r\n    padding-bottom: 1rem;\r\n  }\r\n\r\n  .content-title:first-child {\r\n    padding-top: 0;\r\n  }\r\n\r\n  .content-title::after {\r\n    width: 12rem;\r\n    margin-left: -6rem;\r\n  }\r\n\r\n  main h2 {\r\n    font-size: 1.6rem;\r\n  }\r\n\r\n  .first-row,\r\n  .second-row {\r\n    padding: 5px;\r\n  }\r\n\r\n  .second-row,\r\n  .third-row {\r\n    grid-template-columns: repeat(3, 20%);\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9keS9yZXN1bWUvcmVzdW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHFDQUFxQzs7QUFFdkM7O0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsd0JBQXVCO1VBQXZCLHVCQUF1Qjs7QUFFekI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFVBQVU7RUFDVixXQUFXO0VBQ1gseUJBQXlCOztBQUUzQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztFQUNiOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBOztJQUVFLFlBQVk7RUFDZDs7RUFFQTs7SUFFRSxxQ0FBcUM7RUFDdkM7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2JvZHkvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpcnN0LXJvdyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcclxuXHJcbn1cclxuXHJcbi5zZWNvbmQtcm93LFxyXG4udGhpcmQtcm93IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAzMCUpO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxufVxyXG5cclxuLnRlY2gtaXRlbSBpbWcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDNlbTtcclxuICBoZWlnaHQ6IDNlbTtcclxuICBib3JkZXI6IDNweCBzb2xpZCAjZGJlOGRiO1xyXG5cclxufVxyXG5cclxuLnRlY2gtdGl0bGUge1xyXG4gIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5wb3N0LWNvbnRlbnQgYSB7XHJcbiAgY29sb3I6ICNkYmU4ZGI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnBvc3QtY29udGVudCBhOmhvdmVyIHtcclxuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgI2RiZThkYjtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gIC5wb3N0LWhlYWRlciBoMSB7XHJcbiAgICBmb250LXNpemU6IDRyZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICBtYWluIC5jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbiBwIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAucG9zdC1oZWFkZXIgaDEge1xyXG4gICAgZm9udC1zaXplOiAzcmVtO1xyXG4gIH1cclxuXHJcbiAgLnBvc3QtY29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5jb250ZW50LXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQtdGl0bGU6Zmlyc3QtY2hpbGQge1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbiAgfVxyXG5cclxuICAuY29udGVudC10aXRsZTo6YWZ0ZXIge1xyXG4gICAgd2lkdGg6IDEycmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC02cmVtO1xyXG4gIH1cclxuXHJcbiAgbWFpbiBoMiB7XHJcbiAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICB9XHJcblxyXG4gIC5maXJzdC1yb3csXHJcbiAgLnNlY29uZC1yb3cge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gIH1cclxuXHJcbiAgLnNlY29uZC1yb3csXHJcbiAgLnRoaXJkLXJvdyB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAyMCUpO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/body/resume/resume.component.ts":
/*!*************************************************!*\
  !*** ./src/app/body/resume/resume.component.ts ***!
  \*************************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResumeComponent = /** @class */ (function () {
    function ResumeComponent() {
        this.firstItems = ['../../assets/img/technologies/angular.png',
            '../../assets/img/technologies/html.png',
            '../../assets/img/technologies/css.png',
            '../../assets/img/technologies/bootstrap.png',
            '../../assets/img/technologies/jquery.png'
        ];
        this.firstRow = ['Angular', 'html', 'css3', 'Bootstrap',
            'Jquery'];
        this.secondItems = ['../../assets/img/technologies/java.png',
            '../../assets/img/technologies/spring-boot.png',
            '../../assets/img/technologies/mysql.png'];
        this.secondRow = ['Java', 'Spring Boot', 'mysql'];
        this.thirdItems = ['../../assets/img/technologies/vscode.png',
            '../../assets/img/technologies/ps.png',
            '../../assets/img/technologies/git.png'];
        this.thirdRow = ['vs code', 'photoshop', 'git'];
    }
    ResumeComponent.prototype.ngOnInit = function () {
    };
    ResumeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resume',
            template: __webpack_require__(/*! raw-loader!./resume.component.html */ "./node_modules/raw-loader/index.js!./src/app/body/resume/resume.component.html"),
            styles: [__webpack_require__(/*! ./resume.component.css */ "./src/app/body/resume/resume.component.css")]
        })
    ], ResumeComponent);
    return ResumeComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#footer {\r\n  position: relative;\r\n  padding: 2em 0;\r\n  height: 500px;\r\n  min-height: 34em;\r\n  text-align: center;\r\n}\r\n\r\n#footer .footer-content {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  overflow: hidden;\r\n}\r\n\r\n#footer .social-media {\r\n  position: relative;\r\n  padding-top: 2rem;\r\n}\r\n\r\n#footer .social-media::before {\r\n  content: '';\r\n  display: block;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 50%;\r\n  width: 120rem;\r\n  width: 200vw;\r\n  height: 120rem;\r\n  height: 200vw;\r\n  margin-left: -60rem;\r\n  margin-left: -100vw;\r\n  z-index: -1;\r\n  border-radius: 50%;\r\n  background-color: #262228;\r\n}\r\n\r\n#footer .email a {\r\n  font-family: \"Nunito\", sans-serif;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n  color: #ff2047\r\n}\r\n\r\n#footer .email a:hover {\r\n  border-bottom: 2px solid #ff2047;\r\n}\r\n\r\n#footer .links {\r\n  margin: 2em 0;\r\n  padding: 0;\r\n}\r\n\r\n#footer .links li {\r\n  display: inline-block;\r\n  margin: 0 0.25em;\r\n}\r\n\r\n#footer .links a {\r\n  display: block;\r\n  width: 1.5em;\r\n  height: 1.5em;\r\n  color: #262228;\r\n  font-size: 1.5em;\r\n  line-height: 1.5em;\r\n  text-align: center;\r\n  background-color: #DBE8D4;\r\n  border-radius: 50%;\r\n  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n#footer .links a:hover {\r\n  border: none;\r\n  background-color: #262228;\r\n  color: #DBE8D4;\r\n  box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.2), 0 4px 10px 0 rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n#footer .info {\r\n  font-size: 0.8em;\r\n  color: #DBE8D4;\r\n}\r\n\r\n#footer .scroll-up {\r\n  display: block;\r\n  margin: 4rem auto 2rem;\r\n  width: 4rem;\r\n  height: 4rem;\r\n  text-align: center;\r\n  line-height: 4rem;\r\n  border: none;\r\n  background-color: #DBE8D4;\r\n  color: #262228;\r\n  border-radius: 50%;\r\n  cursor: pointer;\r\n  box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.2), 0 4px 10px 0 rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n#footer .scroll-up:hover {\r\n  background-color: #262228;\r\n  color: #DBE8D4;\r\n  box-shadow: 0 16px 30px 0 rgba(0, 0, 0, 0.2), 0 9px 15px 0 rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n#footer .scroll-up .fa {\r\n  font-size: 2em;\r\n  line-height: inherit;\r\n}\r\n\r\n@media only screen and (min-width: 320px) and (max-width: 599px) {\r\n  #footer {\r\n    height: 400px;\r\n    min-height: 30rem;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7RUFDVCxhQUFhO0VBQ2IsWUFBWTtFQUNaLGNBQWM7RUFDZCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxxQkFBcUI7RUFDckIsZUFBZTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsVUFBVTtBQUNaOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osYUFBYTtFQUNiLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLDJFQUEyRTtBQUM3RTs7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsY0FBYztFQUNkLDRFQUE0RTtBQUM5RTs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZiw0RUFBNEU7QUFDOUU7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLDZFQUE2RTtBQUMvRTs7QUFFQTtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYixpQkFBaUI7RUFDbkI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNmb290ZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nOiAyZW0gMDtcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDM0ZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jZm9vdGVyIC5mb290ZXItY29udGVudCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbiNmb290ZXIgLnNvY2lhbC1tZWRpYSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmctdG9wOiAycmVtO1xyXG59XHJcblxyXG4jZm9vdGVyIC5zb2NpYWwtbWVkaWE6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgd2lkdGg6IDEyMHJlbTtcclxuICB3aWR0aDogMjAwdnc7XHJcbiAgaGVpZ2h0OiAxMjByZW07XHJcbiAgaGVpZ2h0OiAyMDB2dztcclxuICBtYXJnaW4tbGVmdDogLTYwcmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTAwdnc7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjIyMjg7XHJcbn1cclxuXHJcbiNmb290ZXIgLmVtYWlsIGEge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICNmZjIwNDdcclxufVxyXG5cclxuI2Zvb3RlciAuZW1haWwgYTpob3ZlciB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZjIwNDc7XHJcbn1cclxuXHJcbiNmb290ZXIgLmxpbmtzIHtcclxuICBtYXJnaW46IDJlbSAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbiNmb290ZXIgLmxpbmtzIGxpIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiAwIDAuMjVlbTtcclxufVxyXG5cclxuI2Zvb3RlciAubGlua3MgYSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEuNWVtO1xyXG4gIGhlaWdodDogMS41ZW07XHJcbiAgY29sb3I6ICMyNjIyMjg7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuICBsaW5lLWhlaWdodDogMS41ZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNEQkU4RDQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG5cclxuI2Zvb3RlciAubGlua3MgYTpob3ZlciB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjIyMjg7XHJcbiAgY29sb3I6ICNEQkU4RDQ7XHJcbiAgYm94LXNoYWRvdzogMCA3cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA0cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG5cclxuI2Zvb3RlciAuaW5mbyB7XHJcbiAgZm9udC1zaXplOiAwLjhlbTtcclxuICBjb2xvcjogI0RCRThENDtcclxufVxyXG5cclxuI2Zvb3RlciAuc2Nyb2xsLXVwIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDRyZW0gYXV0byAycmVtO1xyXG4gIHdpZHRoOiA0cmVtO1xyXG4gIGhlaWdodDogNHJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDRyZW07XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNEQkU4RDQ7XHJcbiAgY29sb3I6ICMyNjIyMjg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3gtc2hhZG93OiAwIDdweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDRweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG4jZm9vdGVyIC5zY3JvbGwtdXA6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjIyMjg7XHJcbiAgY29sb3I6ICNEQkU4RDQ7XHJcbiAgYm94LXNoYWRvdzogMCAxNnB4IDMwcHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOXB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuXHJcbiNmb290ZXIgLnNjcm9sbC11cCAuZmEge1xyXG4gIGZvbnQtc2l6ZTogMmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcclxuICAjZm9vdGVyIHtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAzMHJlbTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-toolkit/universal */ "./node_modules/@ng-toolkit/universal/fesm5/ng-toolkit-universal.js");



var FooterComponent = /** @class */ (function () {
    function FooterComponent(window) {
        this.window = window;
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.goTop = function () {
        this.window.scroll(0, 0);
    };
    FooterComponent.ctorParameters = function () { return [
        { type: Window, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_2__["WINDOW"],] }] }
    ]; };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_2__["WINDOW"]))
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.css":
/*!*****************************************************!*\
  !*** ./src/app/navigation/navigation.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fixed-header {\r\n  position: fixed;\r\n  width: 100%;\r\n  height: 75px;\r\n  background: #262228;\r\n  top: 0;\r\n  z-index: 999;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.2), 0 4px 10px 0 rgba(0, 0, 0, 0.2);\r\n  font: normal 100%/1 'Nunito', sans-serif;\r\n}\r\n\r\n.logo {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  width: 4.5em;\r\n  height: 4.5em;\r\n  cursor: pointer;\r\n  -webkit-transition: all 3s;\r\n  transition: all 3s;\r\n  border-radius: 100%;\r\n}\r\n\r\n.logo:hover {\r\n  /* background-color: #0e0b16; */\r\n  -webkit-transform: rotate(1080deg);\r\n          transform: rotate(1080deg);\r\n}\r\n\r\n.circle {\r\n  font-size: 2.5rem;\r\n}\r\n\r\n.logo span {\r\n  color: #ff2047;\r\n}\r\n\r\nnav ul {\r\n  margin: 0;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  width: 40%;\r\n  -webkit-box-pack: justify;\r\n          justify-content: space-between;\r\n}\r\n\r\nnav li {\r\n  list-style: none;\r\n}\r\n\r\nnav li a {\r\n  position: relative;\r\n  text-decoration: none;\r\n  color: #DBE8D4;\r\n  padding: 1rem;\r\n}\r\n\r\nnav ul li a::before,\r\nnav ul li a::after {\r\n  content: '';\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 2px;\r\n  background-color: #ff2047;\r\n  left: 0;\r\n  -webkit-transform: scaleX(0);\r\n          transform: scaleX(0);\r\n  -webkit-transition: all .5s;\r\n  transition: all .5s;\r\n}\r\n\r\nnav ul li a::before {\r\n  top: 0;\r\n  -webkit-transform-origin: left;\r\n          transform-origin: left;\r\n}\r\n\r\nnav ul li a::after {\r\n  bottom: 0;\r\n  -webkit-transform-origin: right;\r\n          transform-origin: right;\r\n}\r\n\r\nnav ul li a:hover::before,\r\nnav ul li a:hover::after {\r\n  -webkit-transform: scaleX(1);\r\n          transform: scaleX(1);\r\n}\r\n\r\n@media only screen and (max-width: 30rem) {\r\n  .fixed-header {\r\n    width: 100%;\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n  }\r\n\r\n  nav ul {\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    width: auto;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n\r\n\r\n\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsTUFBTTtFQUNOLFlBQVk7RUFDWixvQkFBYTtFQUFiLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQiw0RUFBNEU7RUFDNUUsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLDBCQUFrQjtFQUFsQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGtDQUEwQjtVQUExQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsU0FBUztFQUNULG9CQUFhO0VBQWIsYUFBYTtFQUNiLFVBQVU7RUFDVix5QkFBOEI7VUFBOUIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsYUFBYTtBQUNmOztBQUVBOztFQUVFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsT0FBTztFQUNQLDRCQUFvQjtVQUFwQixvQkFBb0I7RUFDcEIsMkJBQW1CO0VBQW5CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLE1BQU07RUFDTiw4QkFBc0I7VUFBdEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsU0FBUztFQUNULCtCQUF1QjtVQUF2Qix1QkFBdUI7QUFDekI7O0FBRUE7O0VBRUUsNEJBQW9CO1VBQXBCLG9CQUFvQjtBQUN0Qjs7QUFHQTtFQUNFO0lBQ0UsV0FBVztJQUNYLHlCQUE4QjtZQUE5Qiw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSx3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFNBQVM7SUFDVCxVQUFVO0VBQ1o7Ozs7O0FBS0YiLCJmaWxlIjoic3JjL2FwcC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maXhlZC1oZWFkZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDc1cHg7XHJcbiAgYmFja2dyb3VuZDogIzI2MjIyODtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3gtc2hhZG93OiAwIDdweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDRweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGZvbnQ6IG5vcm1hbCAxMDAlLzEgJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDQuNWVtO1xyXG4gIGhlaWdodDogNC41ZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAzcztcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG59XHJcblxyXG4ubG9nbzpob3ZlciB7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzBlMGIxNjsgKi9cclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMDgwZGVnKTtcclxufVxyXG5cclxuLmNpcmNsZSB7XHJcbiAgZm9udC1zaXplOiAyLjVyZW07XHJcbn1cclxuXHJcbi5sb2dvIHNwYW4ge1xyXG4gIGNvbG9yOiAjZmYyMDQ3O1xyXG59XHJcblxyXG5uYXYgdWwge1xyXG4gIG1hcmdpbjogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG5uYXYgbGkge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbm5hdiBsaSBhIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjREJFOEQ0O1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuXHJcbm5hdiB1bCBsaSBhOjpiZWZvcmUsXHJcbm5hdiB1bCBsaSBhOjphZnRlciB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjIwNDc7XHJcbiAgbGVmdDogMDtcclxuICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xyXG59XHJcblxyXG5uYXYgdWwgbGkgYTo6YmVmb3JlIHtcclxuICB0b3A6IDA7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcclxufVxyXG5cclxubmF2IHVsIGxpIGE6OmFmdGVyIHtcclxuICBib3R0b206IDA7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XHJcbn1cclxuXHJcbm5hdiB1bCBsaSBhOmhvdmVyOjpiZWZvcmUsXHJcbm5hdiB1bCBsaSBhOmhvdmVyOjphZnRlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwcmVtKSB7XHJcbiAgLmZpeGVkLWhlYWRlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcblxyXG4gIG5hdiB1bCB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-toolkit/universal */ "./node_modules/@ng-toolkit/universal/fesm5/ng-toolkit-universal.js");
/* harmony import */ var _route_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../route-animation */ "./src/app/route-animation.ts");






var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(window, titleService) {
        this.window = window;
        this.titleService = titleService;
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent.prototype.navActive = function () {
        jquery__WEBPACK_IMPORTED_MODULE_3__('.menu-item a').click(function () {
            jquery__WEBPACK_IMPORTED_MODULE_3__('a.active').removeClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_3__(this).addClass('active');
        });
    };
    NavigationComponent.prototype.goTop = function (newTitle) {
        // let scrollTop = window.setInterval(() => {
        //   let pos = window.pageYOffset;
        //   if (pos > 0) {
        //     window.scrollTo(0, pos - 20);;
        //   } else {
        //     window.clearInterval(scrollTop);
        //   }
        // }, 16);
        this.titleService.setTitle(newTitle);
        this.window.scroll(0, 0);
    };
    NavigationComponent.ctorParameters = function () { return [
        { type: Window, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_4__["WINDOW"],] }] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }
    ]; };
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/index.js!./src/app/navigation/navigation.component.html"),
            animations: [_route_animation__WEBPACK_IMPORTED_MODULE_5__["slideInAnimation"]],
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/navigation/navigation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_4__["WINDOW"]))
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/route-animation.ts":
/*!************************************!*\
  !*** ./src/app/route-animation.ts ***!
  \************************************/
/*! exports provided: slideInAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInAnimation", function() { return slideInAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var slideInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('Projects => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('Home => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('Resume => Projects', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('Resume => Home', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('Projects => Home', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }))
            ], { optional: true }),
        ])
    ]),
]);


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_browser_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.browser.module */ "./src/app/app.browser.module.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', function () {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_browser_module__WEBPACK_IMPORTED_MODULE_3__["AppBrowserModule"])
        .catch(function (err) { return console.error(err); });
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Renzo\Desktop\MY-PORTFOLIO-V2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map