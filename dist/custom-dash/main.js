(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/anguway/anguway.component.html":
/*!************************************************!*\
  !*** ./src/app/anguway/anguway.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"demo\" class=\"darklue\" style=\"padding: 50px; min-height: 100vh;\">\n  <div class=\"container-fluid\" style=\"padding: 20px; \">\n    <div class=\"row\">\n      <div class=\"col-6\">\n        <button (click)=\"addWidget()\" *ngIf=\"editEnabled\"  class=\"btn btn-warning m-2\">Add Widget</button>\n      </div>\n      <div class=\"col-6 text-right\">\n        <button (click)=\"saveWidgetBox()\" *ngIf=\"editEnabled\" class=\"btn btn-success m-2\">Save Widget State</button>\n        <button (click)=\"loadWidgetBox()\" *ngIf=\"editEnabled && false\" class=\"btn btn-danger m-2\">Load Saved State</button>\n        <button (click)=\"editToggle()\" class=\"btn btn-primary m-2\">Toggle Editing</button>\n      </div>\n    </div>\n  </div>\n  <div class=\"container-fluid\">\n\n    <div gridStackElement class=\"grid-stack\" data-gs-width=\"12\" data-gs-animate=\"yes\">\n      <div *ngFor=\"let widget of widgets; index as i;\" [id]=\"'gsi-'+i\" [attr.data-gs-height]=\"widget.height\"\n           [attr.data-gs-width]=\"widget.width\" [attr.data-gs-x]=\"widget.x\" [attr.data-gs-y]=\"widget.y\"\n           class=\"grid-stack-item\" [attr.data-gs-auto-position]=\"widget.autoPosition\">\n        <div class=\"grid-stack-item-content\">\n          <h4>{{i}}</h4>\n          <app-first *ngIf=\"i%2 != 0\"></app-first>\n          <app-second *ngIf=\"i%2 == 0\"></app-second>\n          <app-third *ngIf=\"i%2 == 0\"></app-third>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/anguway/anguway.component.scss":
/*!************************************************!*\
  !*** ./src/app/anguway/anguway.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuZ3V3YXkvYW5ndXdheS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/anguway/anguway.component.ts":
/*!**********************************************!*\
  !*** ./src/app/anguway/anguway.component.ts ***!
  \**********************************************/
/*! exports provided: AnguwayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnguwayComponent", function() { return AnguwayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AnguwayComponent = /** @class */ (function () {
    function AnguwayComponent() {
        this.editEnabled = false;
        this.widgets = [
            { 'x': '0', 'y': '4', 'height': '2', 'width': '4', 'autoPosition': 0 },
            { 'x': '4', 'y': '2', 'height': '4', 'width': '4', 'autoPosition': 0 },
            { 'x': '8', 'y': '2', 'height': '4', 'width': '2', 'autoPosition': 0 },
            { 'x': '10', 'y': '2', 'height': '2', 'width': '2', 'autoPosition': 0 },
            { 'x': '0', 'y': '2', 'height': '2', 'width': '2', 'autoPosition': 0 },
            { 'x': '2', 'y': '0', 'height': '4', 'width': '2', 'autoPosition': 0 },
            { 'x': '10', 'y': '4', 'height': '2', 'width': '2', 'autoPosition': 0 },
            { 'x': '0', 'y': '0', 'height': '2', 'width': '2', 'autoPosition': 0 },
            { 'x': '4', 'y': '0', 'height': '2', 'width': '4', 'autoPosition': 0 },
            { 'x': '8', 'y': '0', 'height': '2', 'width': '2', 'autoPosition': 0 },
            { 'x': '10', 'y': '0', 'height': '2', 'width': '2', 'autoPosition': 0 }
        ];
    }
    AnguwayComponent.prototype.ngOnInit = function () {
        var _this = this;
        $(document).ready(function () {
            _this.gridStack = _this.initialiseGrid();
            _this.gridStack.disable();
        });
    };
    AnguwayComponent.prototype.initialiseGrid = function () {
        $('.grid-stack').removeAttr('style');
        $('.grid-stack').removeAttr('data-gs-current-height');
        $('.grid-stack').attr('class', 'grid-stack');
        this.gridStackObject = $('.grid-stack').gridstack({
            width: 12,
            float: true,
            alwaysShowResizeHandle: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            resizable: {
                handles: 'e, se, s, sw, w'
            }
        });
        return this.gridStackObject.data('gridstack');
    };
    AnguwayComponent.prototype.createWidget = function (widget) {
        var _this = this;
        var node = {
            x: widget.x,
            y: widget.y,
            height: widget.height,
            width: widget.width,
            autoPosition: widget.autoPosition,
        };
        this.widgets.push(node);
        // I don't know why but this works
        setTimeout(function () {
            _this.gridStack.makeWidget($('#gsi-' + (_this.widgets.length - 1)));
        }, 0);
    };
    AnguwayComponent.prototype.destroyGrid = function () {
        this.gridStack.destroy(false);
        this.gridStackObject = undefined;
        this.gridStack = undefined;
    };
    AnguwayComponent.prototype.editToggle = function () {
        this.editEnabled = !this.editEnabled;
        this.editEnabled ? this.gridStack.enable() : this.gridStack.disable();
    };
    AnguwayComponent.prototype.saveWidgetBox = function () {
        var _this = this;
        var nodesVisible = $('.grid-stack > .grid-stack-item:visible');
        this.widgets = [];
        for (var _i = 0, nodesVisible_1 = nodesVisible; _i < nodesVisible_1.length; _i++) {
            var el = nodesVisible_1[_i];
            var node = {
                x: $(el).attr('data-gs-x'),
                y: $(el).attr('data-gs-y'),
                height: $(el).attr('data-gs-height'),
                width: $(el).attr('data-gs-width'),
                autoPosition: 0,
            };
            this.widgets.push(node);
        }
        // I don't know why but this works
        setTimeout(function () {
            _this.destroyGrid();
            _this.gridStack = _this.initialiseGrid();
            _this.editToggle();
        }, 0);
    };
    AnguwayComponent.prototype.loadWidgetBox = function () {
    };
    AnguwayComponent.prototype.addWidget = function () {
        var node = {
            x: 0,
            y: 0,
            height: 2,
            width: 2,
            autoPosition: 1
        };
        this.createWidget(node);
    };
    AnguwayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-anguway',
            template: __webpack_require__(/*! ./anguway.component.html */ "./src/app/anguway/anguway.component.html"),
            styles: [__webpack_require__(/*! ./anguway.component.scss */ "./src/app/anguway/anguway.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AnguwayComponent);
    return AnguwayComponent;
}());



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
/* harmony import */ var _anguway_anguway_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./anguway/anguway.component */ "./src/app/anguway/anguway.component.ts");




var routes = [
    { path: '', component: _anguway_anguway_component__WEBPACK_IMPORTED_MODULE_3__["AnguwayComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Page Title';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _jquerymodel_jquerymodel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./jquerymodel/jquerymodel.component */ "./src/app/jquerymodel/jquerymodel.component.ts");
/* harmony import */ var _anguway_anguway_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./anguway/anguway.component */ "./src/app/anguway/anguway.component.ts");
/* harmony import */ var _first_first_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./first/first.component */ "./src/app/first/first.component.ts");
/* harmony import */ var _second_second_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./second/second.component */ "./src/app/second/second.component.ts");
/* harmony import */ var _third_third_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./third/third.component */ "./src/app/third/third.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _jquerymodel_jquerymodel_component__WEBPACK_IMPORTED_MODULE_5__["JquerymodelComponent"],
                _anguway_anguway_component__WEBPACK_IMPORTED_MODULE_6__["AnguwayComponent"],
                _first_first_component__WEBPACK_IMPORTED_MODULE_7__["FirstComponent"],
                _second_second_component__WEBPACK_IMPORTED_MODULE_8__["SecondComponent"],
                _third_third_component__WEBPACK_IMPORTED_MODULE_9__["ThirdComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/custom_modules/GridStackWidgetInfo.ts":
/*!*******************************************************!*\
  !*** ./src/app/custom_modules/GridStackWidgetInfo.ts ***!
  \*******************************************************/
/*! exports provided: GridStackWidgetInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridStackWidgetInfo", function() { return GridStackWidgetInfo; });
var GridStackWidgetInfo = /** @class */ (function () {
    function GridStackWidgetInfo(node) {
        this.x = node.x;
        this.y = node.y;
        this.width = node.width;
        this.height = node.height;
    }
    return GridStackWidgetInfo;
}());



/***/ }),

/***/ "./src/app/first/first.component.html":
/*!********************************************!*\
  !*** ./src/app/first/first.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>this is an angular component called first</p>\n"

/***/ }),

/***/ "./src/app/first/first.component.scss":
/*!********************************************!*\
  !*** ./src/app/first/first.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpcnN0L2ZpcnN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/first/first.component.ts":
/*!******************************************!*\
  !*** ./src/app/first/first.component.ts ***!
  \******************************************/
/*! exports provided: FirstComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstComponent", function() { return FirstComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FirstComponent = /** @class */ (function () {
    function FirstComponent() {
    }
    FirstComponent.prototype.ngOnInit = function () {
    };
    FirstComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-first',
            template: __webpack_require__(/*! ./first.component.html */ "./src/app/first/first.component.html"),
            styles: [__webpack_require__(/*! ./first.component.scss */ "./src/app/first/first.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FirstComponent);
    return FirstComponent;
}());



/***/ }),

/***/ "./src/app/jquerymodel/jquerymodel.component.html":
/*!********************************************************!*\
  !*** ./src/app/jquerymodel/jquerymodel.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"demo\" class=\"darklue\" style=\"padding: 50px; min-height: 100vh;\">\n  <div class=\"container-fluid\" style=\"padding: 20px;\">\n    <button (click)=\"saveWidgetBox()\" class=\"btn btn-success m-2\">Save Widget State</button>\n    <button (click)=\"loadWidgetBox()\" class=\"btn btn-warning m-2\">Load Saved State</button>\n  </div>\n  <div class=\"container-fluid\">\n\n    <div class=\"grid-stack\" data-gs-width=\"12\" data-gs-animate=\"yes\">\n      <div class=\"grid-stack-item\" data-gs-x=\"0\" data-gs-y=\"0\" data-gs-width=\"4\" data-gs-height=\"2\">\n        <div class=\"grid-stack-item-content\">1</div>\n      </div>\n      <div class=\"grid-stack-item\" data-gs-x=\"4\" data-gs-y=\"0\" data-gs-width=\"4\" data-gs-height=\"4\">\n        <div class=\"grid-stack-item-content\" id=\"highchart\">2</div>\n      </div>\n      <div class=\"grid-stack-item\" data-gs-x=\"8\" data-gs-y=\"0\" data-gs-width=\"2\" data-gs-height=\"2\"\n           data-gs-min-width=\"2\" data-gs-no-resize=\"yes\">\n        <div class=\"grid-stack-item-content\">3</div>\n      </div>\n      <div class=\"grid-stack-item\" data-gs-x=\"10\" data-gs-y=\"0\" data-gs-width=\"2\" data-gs-height=\"2\"\n           data-gs-chartname=\"bar\">\n        <div class=\"grid-stack-item-content\">6</div>\n      </div>\n      <div class=\"grid-stack-item\" data-gs-x=\"0\" data-gs-y=\"2\" data-gs-width=\"2\" data-gs-height=\"2\">\n        <div class=\"grid-stack-item-content\">5</div>\n      </div>\n      <div class=\"grid-stack-item\" data-gs-x=\"2\" data-gs-y=\"2\" data-gs-width=\"2\" data-gs-height=\"4\">\n        <div class=\"grid-stack-item-content\">6</div>\n      </div>\n      <div class=\"grid-stack-item\" data-gs-x=\"8\" data-gs-y=\"2\" data-gs-width=\"4\" data-gs-height=\"2\">\n        <div class=\"grid-stack-item-content\">7</div>\n      </div>\n      <div class=\"grid-stack-item\" data-gs-x=\"0\" data-gs-y=\"4\" data-gs-width=\"2\" data-gs-height=\"2\">\n        <div class=\"grid-stack-item-content\">8</div>\n      </div>\n      <div class=\"grid-stack-item\" data-gs-x=\"4\" data-gs-y=\"4\" data-gs-width=\"4\" data-gs-height=\"2\">\n        <div class=\"grid-stack-item-content\">9</div>\n      </div>\n      <div class=\"grid-stack-item\" data-gs-x=\"8\" data-gs-y=\"4\" data-gs-width=\"2\" data-gs-height=\"2\">\n        <div class=\"grid-stack-item-content\">10</div>\n      </div>\n      <div class=\"grid-stack-item\" data-gs-x=\"10\" data-gs-y=\"4\" data-gs-width=\"2\" data-gs-height=\"2\">\n        <div class=\"grid-stack-item-content\">11</div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/jquerymodel/jquerymodel.component.scss":
/*!********************************************************!*\
  !*** ./src/app/jquerymodel/jquerymodel.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2pxdWVyeW1vZGVsL2pxdWVyeW1vZGVsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/jquerymodel/jquerymodel.component.ts":
/*!******************************************************!*\
  !*** ./src/app/jquerymodel/jquerymodel.component.ts ***!
  \******************************************************/
/*! exports provided: JquerymodelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JquerymodelComponent", function() { return JquerymodelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _custom_modules_GridStackWidgetInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../custom_modules/GridStackWidgetInfo */ "./src/app/custom_modules/GridStackWidgetInfo.ts");



var JquerymodelComponent = /** @class */ (function () {
    function JquerymodelComponent() {
        this.savedState = {};
        this.highcharts = {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Highcharts responsive chart'
            },
            subtitle: {
                text: 'Resize the frame or click buttons to change appearance'
            },
            legend: {
                align: 'right',
                verticalAlign: 'middle',
                layout: 'vertical'
            },
            xAxis: {
                categories: ['Apples', 'Oranges', 'Bananas'],
                labels: {
                    x: -10
                }
            },
            yAxis: {
                allowDecimals: false,
                title: {
                    text: 'Amount'
                }
            },
            series: [{
                    name: 'Christmas Eve',
                    data: [1, 4, 3]
                }, {
                    name: 'Christmas Day before dinner',
                    data: [6, 4, 2]
                }, {
                    name: 'Christmas Day after dinner',
                    data: [8, 4, 3]
                }],
            responsive: {
                rules: [{
                        condition: {
                            maxWidth: 500
                        },
                        chartOptions: {
                            legend: {
                                align: 'center',
                                verticalAlign: 'bottom',
                                layout: 'horizontal'
                            },
                            yAxis: {
                                labels: {
                                    align: 'left',
                                    x: 0,
                                    y: -5
                                },
                                title: {
                                    text: null
                                }
                            },
                            subtitle: {
                                text: null
                            },
                            credits: {
                                enabled: false
                            }
                        }
                    }]
            }
        };
    }
    JquerymodelComponent.prototype.ngOnInit = function () {
        var _this = this;
        var highcharts = this.highcharts;
        $(document).ready(function () {
            $('.grid-stack').gridstack({
                width: 12,
                alwaysShowResizeHandle: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                resizable: {
                    handles: 'e, se, s, sw, w'
                }
            });
            $('#highchart').highcharts(_this.highcharts);
            _this.saveWidgetBox();
            $('.grid-stack').on('gsresizestop', function () {
                $.when($('#highchart').highcharts().destroy()).then($('#highchart').highcharts(highcharts));
            });
        });
    };
    JquerymodelComponent.prototype.saveWidgetBox = function () {
        var nodesVisible = $('.grid-stack > .grid-stack-item:visible');
        var serializedData = _.map(nodesVisible, function (element) {
            element = $(element);
            var node = element.data('_gridstack_node');
            return new _custom_modules_GridStackWidgetInfo__WEBPACK_IMPORTED_MODULE_2__["GridStackWidgetInfo"](node);
        }, this);
        this.savedState = JSON.stringify(serializedData, null, '    ');
        console.log(this.savedState);
    };
    JquerymodelComponent.prototype.loadWidgetBox = function () {
        this.gridStackData = $('.grid-stack').data('gridstack');
        var gridStackData = this.gridStackData;
        this.gridStackData.removeAll();
        var gridItems = JSON.parse(this.savedState);
        var key = 0;
        for (var _i = 0, gridItems_1 = gridItems; _i < gridItems_1.length; _i++) {
            var node = gridItems_1[_i];
            key++;
            if (key === 2) {
                gridStackData.addWidget($('<div><div class="grid-stack-item-content" /><div class="grid-stack-item-content" id="highchart"></div><div/>'), node.x, node.y, node.width, node.height);
            }
            else {
                gridStackData.addWidget($('<div><div class="grid-stack-item-content" /><div class="grid-stack-item-content">' + key + '</div><div/>'), node.x, node.y, node.width, node.height);
            }
        }
        $('#highchart').highcharts(this.highcharts);
    };
    JquerymodelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-jquerymodel',
            template: __webpack_require__(/*! ./jquerymodel.component.html */ "./src/app/jquerymodel/jquerymodel.component.html"),
            styles: [__webpack_require__(/*! ./jquerymodel.component.scss */ "./src/app/jquerymodel/jquerymodel.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], JquerymodelComponent);
    return JquerymodelComponent;
}());



/***/ }),

/***/ "./src/app/second/second.component.html":
/*!**********************************************!*\
  !*** ./src/app/second/second.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>another component named second</p>\n"

/***/ }),

/***/ "./src/app/second/second.component.scss":
/*!**********************************************!*\
  !*** ./src/app/second/second.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY29uZC9zZWNvbmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/second/second.component.ts":
/*!********************************************!*\
  !*** ./src/app/second/second.component.ts ***!
  \********************************************/
/*! exports provided: SecondComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondComponent", function() { return SecondComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SecondComponent = /** @class */ (function () {
    function SecondComponent() {
    }
    SecondComponent.prototype.ngOnInit = function () {
    };
    SecondComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-second',
            template: __webpack_require__(/*! ./second.component.html */ "./src/app/second/second.component.html"),
            styles: [__webpack_require__(/*! ./second.component.scss */ "./src/app/second/second.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SecondComponent);
    return SecondComponent;
}());



/***/ }),

/***/ "./src/app/third/third.component.html":
/*!********************************************!*\
  !*** ./src/app/third/third.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>co-existing with another component called third</p>\n"

/***/ }),

/***/ "./src/app/third/third.component.scss":
/*!********************************************!*\
  !*** ./src/app/third/third.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoaXJkL3RoaXJkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/third/third.component.ts":
/*!******************************************!*\
  !*** ./src/app/third/third.component.ts ***!
  \******************************************/
/*! exports provided: ThirdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThirdComponent", function() { return ThirdComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ThirdComponent = /** @class */ (function () {
    function ThirdComponent() {
    }
    ThirdComponent.prototype.ngOnInit = function () {
    };
    ThirdComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-third',
            template: __webpack_require__(/*! ./third.component.html */ "./src/app/third/third.component.html"),
            styles: [__webpack_require__(/*! ./third.component.scss */ "./src/app/third/third.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ThirdComponent);
    return ThirdComponent;
}());



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
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\custom-dash\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map