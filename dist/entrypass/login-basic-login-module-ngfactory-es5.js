function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-basic-login-module-ngfactory"], {
  /***/
  "./src/app/auth/login/basic-login-routing.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/auth/login/basic-login-routing.module.ts ***!
    \**********************************************************/

  /*! exports provided: BasicLoginRoutingModule, ɵ0 */

  /***/
  function srcAppAuthLoginBasicLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicLoginRoutingModule", function () {
      return BasicLoginRoutingModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
      return ɵ0;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _basic_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./basic-login.component */
    "./src/app/auth/login/basic-login.component.ts");

    var ɵ0 = {
      title: 'Login'
    };
    var routes = [{
      path: '',
      component: _basic_login_component__WEBPACK_IMPORTED_MODULE_1__["BasicLoginComponent"],
      data: ɵ0
    }];

    var BasicLoginRoutingModule = function BasicLoginRoutingModule() {
      _classCallCheck(this, BasicLoginRoutingModule);
    };
    /***/

  },

  /***/
  "./src/app/auth/login/basic-login.component.ngfactory.js":
  /*!***************************************************************!*\
    !*** ./src/app/auth/login/basic-login.component.ngfactory.js ***!
    \***************************************************************/

  /*! exports provided: RenderType_BasicLoginComponent, View_BasicLoginComponent_0, View_BasicLoginComponent_Host_0, BasicLoginComponentNgFactory */

  /***/
  function srcAppAuthLoginBasicLoginComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_BasicLoginComponent", function () {
      return RenderType_BasicLoginComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_BasicLoginComponent_0", function () {
      return View_BasicLoginComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_BasicLoginComponent_Host_0", function () {
      return View_BasicLoginComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicLoginComponentNgFactory", function () {
      return BasicLoginComponentNgFactory;
    });
    /* harmony import */


    var _basic_login_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./basic-login.component.scss.shim.ngstyle */
    "./src/app/auth/login/basic-login.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _node_modules_ng2_toasty_src_toasty_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../node_modules/ng2-toasty/src/toasty.component.ngfactory */
    "./node_modules/ng2-toasty/src/toasty.component.ngfactory.js");
    /* harmony import */


    var ng2_toasty_src_toasty_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng2-toasty/src/toasty.component */
    "./node_modules/ng2-toasty/src/toasty.component.js");
    /* harmony import */


    var ng2_toasty_src_toasty_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng2-toasty/src/toasty.service */
    "./node_modules/ng2-toasty/src/toasty.service.js");
    /* harmony import */


    var _basic_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./basic-login.component */
    "./src/app/auth/login/basic-login.component.ts");
    /* harmony import */


    var _services_apis_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../services/apis.service */
    "./src/app/services/apis.service.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_BasicLoginComponent = [_basic_login_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_BasicLoginComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_BasicLoginComponent,
      data: {}
    });

    function View_BasicLoginComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "alert-danger text-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Email is not valid"]))], null, null);
    }

    function View_BasicLoginComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "alert-danger text-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Password is required"]))], null, null);
    }

    function View_BasicLoginComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 53, "div", [["class", "container-fulid web-sign-section"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 52, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 51, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 50, "div", [["class", "col-xl-8 col-lg-9 col-md-12 col-sm-12 col-12 m-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 49, "div", [["class", "bgwhite boxshadow-2 border-radius8 mt-50 pt-20 pb-20 pl-15 pr-15  wow fadeInUp"], ["data-wow-delay", "0.2s"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 48, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 47, "div", [["class", "col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 m-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 46, "div", [["class", "sign-bock bgwhite pt-10 pb-10 pl-30 pr-30"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 45, "div", [["class", "text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "h4", [["class", "fontsize-26 fontfamily-bold colorblack text-uppercase mt-0 mb-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Login"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "p", [["class", "fontsize-14 fontfamily-medium color4848 mb-50"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Enter your credentials to Login"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 40, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("submit" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).onSubmit($event) !== false;
          ad = pd_0 && ad;
        }

        if ("reset" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).onReset() !== false;
          ad = pd_1 && ad;
        }

        if ("ngSubmit" === en) {
          var pd_2 = _co.login() !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_z"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], [[8, null], [8, null]], {
        form: [0, "form"]
      }, {
        ngSubmit: "ngSubmit"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 9, "div", [["class", "form-group input-rw-tp"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 7, "input", [["class", "form-control input-tp-1"], ["formControlName", "email"], ["name", "email"], ["placeholder", "Email"], ["required", ""], ["type", "email"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        if ("ngModelChange" === en) {
          var pd_4 = (_co.email = $event) !== false;
          ad = pd_4 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], [], {
        required: [0, "required"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_q"]]], {
        name: [0, "name"],
        model: [1, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 0, "i", [["class", "fa fa-check-circle check-g"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BasicLoginComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 13, "div", [["class", "form-group input-rw-tp "]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_3__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_3__["ɵNgClassImpl"]], {
        klass: [0, "klass"],
        ngClass: [1, "ngClass"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 7, "input", [["class", "form-control input-tp-1"], ["formControlName", "password"], ["name", "password"], ["placeholder", "Password"], ["required", ""], ["type", "password"]], [[8, "type", 0], [1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        if ("ngModelChange" === en) {
          var pd_4 = (_co.Password = $event) !== false;
          ad = pd_4 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], [], {
        required: [0, "required"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_q"]]], {
        name: [0, "name"],
        model: [1, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 2, "i", [["class", "fa  check-g"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.passwordhidden() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_3__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_3__["ɵNgClassImpl"]], {
        klass: [0, "klass"],
        ngClass: [1, "ngClass"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BasicLoginComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 4, "div", [["class", "forgot-tex text-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 3, "a", [["class", "fontsize-12 fontfamily-medium color333"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], {
        routerLink: [0, "routerLink"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](49, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Forgot Password?"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 2, "div", [["class", "form-group input-rw-tp mt-30 mb-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 1, "button", [["class", "btn btn-large btn-rad-24"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.login() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["LOG IN"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](54, 0, null, null, 1, "ng2-toasty", [], null, null, null, _node_modules_ng2_toasty_src_toasty_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_ToastyComponent_0"], _node_modules_ng2_toasty_src_toasty_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_ToastyComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](55, 114688, null, 0, ng2_toasty_src_toasty_component__WEBPACK_IMPORTED_MODULE_6__["ToastyComponent"], [ng2_toasty_src_toasty_service__WEBPACK_IMPORTED_MODULE_7__["ToastyConfig"], ng2_toasty_src_toasty_service__WEBPACK_IMPORTED_MODULE_7__["ToastyService"]], null, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_7 = _co.loginform;

        _ck(_v, 15, 0, currVal_7);

        var currVal_16 = "";

        _ck(_v, 21, 0, currVal_16);

        var currVal_17 = "email";
        var currVal_18 = _co.email;

        _ck(_v, 24, 0, currVal_17, currVal_18);

        var currVal_19 = _co.loginform.controls["email"].invalid && _co.submited;

        _ck(_v, 29, 0, currVal_19);

        var currVal_20 = "form-group input-rw-tp ";
        var currVal_21 = _co.submited && _co.loginform.controls["password"].invalid ? "mb-0" : "";

        _ck(_v, 32, 0, currVal_20, currVal_21);

        var currVal_31 = "";

        _ck(_v, 35, 0, currVal_31);

        var currVal_32 = "password";
        var currVal_33 = _co.Password;

        _ck(_v, 38, 0, currVal_32, currVal_33);

        var currVal_34 = "fa  check-g";
        var currVal_35 = _co.show ? "fa-eye-slash" : "fa-eye";

        _ck(_v, 43, 0, currVal_34, currVal_35);

        var currVal_36 = _co.submited && _co.loginform.controls["password"].invalid;

        _ck(_v, 45, 0, currVal_36);

        var currVal_39 = _ck(_v, 49, 0, "/auth/forgot");

        _ck(_v, 48, 0, currVal_39);

        _ck(_v, 55, 0);
      }, function (_ck, _v) {
        var _co = _v.component;

        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassUntouched;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassTouched;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassPristine;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassDirty;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassValid;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassInvalid;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassPending;

        _ck(_v, 13, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).required ? "" : null;

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).ngClassUntouched;

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).ngClassTouched;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).ngClassPristine;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).ngClassDirty;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).ngClassValid;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).ngClassInvalid;

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).ngClassPending;

        _ck(_v, 19, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15);

        var currVal_22 = _co.show ? "text" : "password";
        var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).required ? "" : null;

        var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).ngClassUntouched;

        var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).ngClassTouched;

        var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).ngClassPristine;

        var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).ngClassDirty;

        var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).ngClassValid;

        var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).ngClassInvalid;

        var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).ngClassPending;

        _ck(_v, 33, 0, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30);

        var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).target;

        var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).href;

        _ck(_v, 47, 0, currVal_37, currVal_38);
      });
    }

    function View_BasicLoginComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-basic-login", [], null, null, null, View_BasicLoginComponent_0, RenderType_BasicLoginComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _basic_login_component__WEBPACK_IMPORTED_MODULE_8__["BasicLoginComponent"], [_services_apis_service__WEBPACK_IMPORTED_MODULE_9__["ApisService"], ng2_toasty_src_toasty_service__WEBPACK_IMPORTED_MODULE_7__["ToastyService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var BasicLoginComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-basic-login", _basic_login_component__WEBPACK_IMPORTED_MODULE_8__["BasicLoginComponent"], View_BasicLoginComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/auth/login/basic-login.component.scss.shim.ngstyle.js":
  /*!***********************************************************************!*\
    !*** ./src/app/auth/login/basic-login.component.scss.shim.ngstyle.js ***!
    \***********************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppAuthLoginBasicLoginComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = [".web-sign-section[_ngcontent-%COMP%] {\n  background-position: center;\n  background-image: url('bgimg3.png');\n  background-size: cover;\n  background-repeat: no-repeat;\n  max-height: 100%;\n  min-height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9GOlxcQ292aWRfYXBwX2FtaW5cXHdvcmtcXGFkbWluX3BhbmVsL3NyY1xcYXBwXFxhdXRoXFxsb2dpblxcYmFzaWMtbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2F1dGgvbG9naW4vYmFzaWMtbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vYmFzaWMtbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2ViLXNpZ24tc2VjdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYXV0aC9iZ2ltZzMucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufSIsIi53ZWItc2lnbi1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2F1dGgvYmdpbWczLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59Il19 */"];
    /***/
  },

  /***/
  "./src/app/auth/login/basic-login.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/auth/login/basic-login.component.ts ***!
    \*****************************************************/

  /*! exports provided: BasicLoginComponent */

  /***/
  function srcAppAuthLoginBasicLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicLoginComponent", function () {
      return BasicLoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var BasicLoginComponent = /*#__PURE__*/function () {
      function BasicLoginComponent(api, toastyService, router, spinner, translate) {
        _classCallCheck(this, BasicLoginComponent);

        this.api = api;
        this.toastyService = toastyService;
        this.router = router;
        this.spinner = spinner;
        this.translate = translate;
        this.email = '';
        this.Password = '';
        this.submited = false;
        this.show = false;
        this.loginform = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
      }

      _createClass(BasicLoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
        }
      }, {
        key: "passwordhidden",
        value: function passwordhidden() {
          this.show = !this.show;
        }
      }, {
        key: "login",
        value: function login() {
          var _this = this;

          this.submited = true;

          if (this.loginform.invalid) {
            return;
          }

          var formdata = {
            Email: this.email,
            Password: this.Password
          };
          this.spinner.show();
          this.api.login(formdata).subscribe(function (res) {
            _this.spinner.hide();

            if (res['result'].status == 1) {
              localStorage.setItem("Users", JSON.stringify(res['result'].data));
              localStorage.setItem('loggedin', "true");

              _this.success(res['result'].message);

              if (res['result'].data && res['result'].data.Role === 'admin' || res['result'].data && res['result'].data.Role === 'superadmin') {
                _this.router.navigate(['']);
              } else if (res['result'].data && res['result'].data.Role == 'business') {
                if (res['result'].checkstaus) {
                  _this.router.navigate(['location']);
                } else {
                  window.location.href = '/auth/subscription';
                }
              } else if (res['result'].data && res['result'].data.Role == 'health') {
                _this.router.navigate(['health_transaction']);
              }
            } else {
              _this.error(res['result'].message);
            }
          }, function (err) {
            _this.spinner.hide();

            _this.error("User Name and Password entered is incorrect!");
          });
        }
      }, {
        key: "error",
        value: function error(message) {
          var toastOptions = {
            title: this.api.translate('Error'),
            msg: message,
            showClose: true,
            timeout: 2000,
            theme: 'default',
            onAdd: function onAdd(toast) {
              console.log('Toast ' + toast.id + ' has been added!');
            },
            onRemove: function onRemove(toast) {
              console.log('Toast ' + toast.id + ' has been removed!');
            }
          }; // Add see all possible types in one shot

          this.toastyService.error(toastOptions);
        }
      }, {
        key: "success",
        value: function success(message) {
          var toastOptions = {
            title: this.api.translate('Success'),
            msg: message,
            showClose: true,
            timeout: 2000,
            theme: 'default',
            onAdd: function onAdd(toast) {
              console.log('Toast ' + toast.id + ' has been added!');
            },
            onRemove: function onRemove(toast) {
              console.log('Toast ' + toast.id + ' has been removed!');
            }
          }; // Add see all possible types in one shot

          this.toastyService.success(toastOptions);
        }
      }]);

      return BasicLoginComponent;
    }();
    /***/

  },

  /***/
  "./src/app/auth/login/basic-login.module.ngfactory.js":
  /*!************************************************************!*\
    !*** ./src/app/auth/login/basic-login.module.ngfactory.js ***!
    \************************************************************/

  /*! exports provided: BasicLoginModuleNgFactory */

  /***/
  function srcAppAuthLoginBasicLoginModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicLoginModuleNgFactory", function () {
      return BasicLoginModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _basic_login_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./basic-login.module */
    "./src/app/auth/login/basic-login.module.ts");
    /* harmony import */


    var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/router/router.ngfactory */
    "./node_modules/@angular/router/router.ngfactory.js");
    /* harmony import */


    var _basic_login_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./basic-login.component.ngfactory */
    "./src/app/auth/login/basic-login.component.ngfactory.js");
    /* harmony import */


    var _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory */
    "./node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var ng2_toasty_src_toasty_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ng2-toasty/src/toasty.service */
    "./node_modules/ng2-toasty/src/toasty.service.js");
    /* harmony import */


    var angular2_notifications_dist_src_simple_notifications_services_notifications_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! angular2-notifications/dist/src/simple-notifications/services/notifications.service */
    "./node_modules/angular2-notifications/dist/src/simple-notifications/services/notifications.service.js");
    /* harmony import */


    var angular2_notifications_dist_src_simple_notifications_services_notifications_service__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications_dist_src_simple_notifications_services_notifications_service__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var css_animator_angular_animation_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! css-animator/angular/animation.service */
    "./node_modules/css-animator/angular/animation.service.js");
    /* harmony import */


    var css_animator_angular_animation_service__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(css_animator_angular_animation_service__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @nicky-lenaers/ngx-scroll-to */
    "./node_modules/@nicky-lenaers/ngx-scroll-to/fesm2015/nicky-lenaers-ngx-scroll-to.js");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/fesm2015/agm-core.js");
    /* harmony import */


    var _shared_menu_items_menu_superitems__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../shared/menu-items/menu-superitems */
    "./src/app/shared/menu-items/menu-superitems.ts");
    /* harmony import */


    var _shared_menu_items_menu_business__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../shared/menu-items/menu-business */
    "./src/app/shared/menu-items/menu-business.ts");
    /* harmony import */


    var _shared_menu_items_menu_health__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../shared/menu-items/menu-health */
    "./src/app/shared/menu-items/menu-health.ts");
    /* harmony import */


    var _shared_menu_items_menu_adminitems__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../shared/menu-items/menu-adminitems */
    "./src/app/shared/menu-items/menu-adminitems.ts");
    /* harmony import */


    var _shared_todo_todo_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../shared/todo/todo.service */
    "./src/app/shared/todo/todo.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _basic_login_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./basic-login-routing.module */
    "./src/app/auth/login/basic-login-routing.module.ts");
    /* harmony import */


    var ng2_toasty__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ng2-toasty */
    "./node_modules/ng2-toasty/index.js");
    /* harmony import */


    var angular2_notifications_dist_src_simple_notifications_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! angular2-notifications/dist/src/simple-notifications.module */
    "./node_modules/angular2-notifications/dist/src/simple-notifications.module.js");
    /* harmony import */


    var angular2_notifications_dist_src_simple_notifications_module__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications_dist_src_simple_notifications_module__WEBPACK_IMPORTED_MODULE_21__);
    /* harmony import */


    var css_animator_angular_animator_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! css-animator/angular/animator.module */
    "./node_modules/css-animator/angular/animator.module.js");
    /* harmony import */


    var css_animator_angular_animator_module__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(css_animator_angular_animator_module__WEBPACK_IMPORTED_MODULE_22__);
    /* harmony import */


    var ng_click_outside_lib_click_outside_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ng-click-outside/lib/click-outside.module */
    "./node_modules/ng-click-outside/lib/click-outside.module.js");
    /* harmony import */


    var ng_click_outside_lib_click_outside_module__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(ng_click_outside_lib_click_outside_module__WEBPACK_IMPORTED_MODULE_23__);
    /* harmony import */


    var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ngx-perfect-scrollbar */
    "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
    /* harmony import */


    var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ngx-skeleton-loader */
    "./node_modules/ngx-skeleton-loader/fesm2015/ngx-skeleton-loader.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _basic_login_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./basic-login.component */
    "./src/app/auth/login/basic-login.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var BasicLoginModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_basic_login_module__WEBPACK_IMPORTED_MODULE_1__["BasicLoginModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _basic_login_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["BasicLoginComponentNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["NgbAlertNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["NgbDatepickerNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵuNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵvNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵmNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵrNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵsNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_o"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ɵw"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModalConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng2_toasty_src_toasty_service__WEBPACK_IMPORTED_MODULE_8__["ToastyConfig"], ng2_toasty_src_toasty_service__WEBPACK_IMPORTED_MODULE_8__["ToastyConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, ng2_toasty_src_toasty_service__WEBPACK_IMPORTED_MODULE_8__["ToastyService"], ng2_toasty_src_toasty_service__WEBPACK_IMPORTED_MODULE_8__["toastyServiceFactory"], [ng2_toasty_src_toasty_service__WEBPACK_IMPORTED_MODULE_8__["ToastyConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, angular2_notifications_dist_src_simple_notifications_services_notifications_service__WEBPACK_IMPORTED_MODULE_9__["NotificationsService"], angular2_notifications_dist_src_simple_notifications_services_notifications_service__WEBPACK_IMPORTED_MODULE_9__["NotificationsService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, css_animator_angular_animation_service__WEBPACK_IMPORTED_MODULE_10__["AnimationService"], css_animator_angular_animation_service__WEBPACK_IMPORTED_MODULE_10__["AnimationService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_11__["ScrollToService"], _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_11__["ScrollToService"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _agm_core__WEBPACK_IMPORTED_MODULE_12__["ɵc"], _agm_core__WEBPACK_IMPORTED_MODULE_12__["ɵc"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _agm_core__WEBPACK_IMPORTED_MODULE_12__["ɵd"], _agm_core__WEBPACK_IMPORTED_MODULE_12__["ɵd"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _agm_core__WEBPACK_IMPORTED_MODULE_12__["MapsAPILoader"], _agm_core__WEBPACK_IMPORTED_MODULE_12__["LazyMapsAPILoader"], [[2, _agm_core__WEBPACK_IMPORTED_MODULE_12__["LAZY_MAPS_API_CONFIG"]], _agm_core__WEBPACK_IMPORTED_MODULE_12__["ɵc"], _agm_core__WEBPACK_IMPORTED_MODULE_12__["ɵd"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_menu_items_menu_superitems__WEBPACK_IMPORTED_MODULE_13__["MenuItems"], _shared_menu_items_menu_superitems__WEBPACK_IMPORTED_MODULE_13__["MenuItems"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_menu_items_menu_business__WEBPACK_IMPORTED_MODULE_14__["BusinessmenuItems"], _shared_menu_items_menu_business__WEBPACK_IMPORTED_MODULE_14__["BusinessmenuItems"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_menu_items_menu_health__WEBPACK_IMPORTED_MODULE_15__["HealthmenuItems"], _shared_menu_items_menu_health__WEBPACK_IMPORTED_MODULE_15__["HealthmenuItems"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_menu_items_menu_adminitems__WEBPACK_IMPORTED_MODULE_16__["AdminMenuItems"], _shared_menu_items_menu_adminitems__WEBPACK_IMPORTED_MODULE_16__["AdminMenuItems"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_todo_todo_service__WEBPACK_IMPORTED_MODULE_17__["TodoService"], _shared_todo_todo_service__WEBPACK_IMPORTED_MODULE_17__["TodoService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_18__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _basic_login_routing_module__WEBPACK_IMPORTED_MODULE_19__["BasicLoginRoutingModule"], _basic_login_routing_module__WEBPACK_IMPORTED_MODULE_19__["BasicLoginRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbAccordionModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbAlertModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbAlertModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbButtonsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCarouselModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCarouselModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCollapseModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCollapseModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModalModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbNavModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbNavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPaginationModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPaginationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPopoverModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPopoverModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbProgressbarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbProgressbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbRatingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbRatingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTabsetModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTabsetModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTimepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTimepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbToastModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbToastModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTypeaheadModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTypeaheadModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_toasty__WEBPACK_IMPORTED_MODULE_20__["ToastyModule"], ng2_toasty__WEBPACK_IMPORTED_MODULE_20__["ToastyModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular2_notifications_dist_src_simple_notifications_module__WEBPACK_IMPORTED_MODULE_21__["SimpleNotificationsModule"], angular2_notifications_dist_src_simple_notifications_module__WEBPACK_IMPORTED_MODULE_21__["SimpleNotificationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, css_animator_angular_animator_module__WEBPACK_IMPORTED_MODULE_22__["AnimatorModule"], css_animator_angular_animator_module__WEBPACK_IMPORTED_MODULE_22__["AnimatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_11__["ScrollToModule"], _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_11__["ScrollToModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _agm_core__WEBPACK_IMPORTED_MODULE_12__["AgmCoreModule"], _agm_core__WEBPACK_IMPORTED_MODULE_12__["AgmCoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_click_outside_lib_click_outside_module__WEBPACK_IMPORTED_MODULE_23__["ClickOutsideModule"], ng_click_outside_lib_click_outside_module__WEBPACK_IMPORTED_MODULE_23__["ClickOutsideModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_24__["PerfectScrollbarModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_24__["PerfectScrollbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_25__["NgxSkeletonLoaderModule"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_25__["NgxSkeletonLoaderModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__["TranslateModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__["TranslateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_shared_module__WEBPACK_IMPORTED_MODULE_27__["SharedModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_27__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_spinner__WEBPACK_IMPORTED_MODULE_28__["NgxSpinnerModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_28__["NgxSpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _basic_login_module__WEBPACK_IMPORTED_MODULE_1__["BasicLoginModule"], _basic_login_module__WEBPACK_IMPORTED_MODULE_1__["BasicLoginModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_18__["ROUTES"], function () {
        return [[{
          path: "",
          component: _basic_login_component__WEBPACK_IMPORTED_MODULE_29__["BasicLoginComponent"],
          data: _basic_login_routing_module__WEBPACK_IMPORTED_MODULE_19__["ɵ0"]
        }]];
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _agm_core__WEBPACK_IMPORTED_MODULE_12__["LAZY_MAPS_API_CONFIG"], {
        apiKey: "AIzaSyCE0nvTeHBsiQIrbpMVTe489_O5mwyqofk"
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_24__["PERFECT_SCROLLBAR_CONFIG"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_27__["ɵ0"], [])]);
    });
    /***/

  },

  /***/
  "./src/app/auth/login/basic-login.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/auth/login/basic-login.module.ts ***!
    \**************************************************/

  /*! exports provided: BasicLoginModule */

  /***/
  function srcAppAuthLoginBasicLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicLoginModule", function () {
      return BasicLoginModule;
    });

    var BasicLoginModule = function BasicLoginModule() {
      _classCallCheck(this, BasicLoginModule);
    };
    /***/

  }
}]);
//# sourceMappingURL=login-basic-login-module-ngfactory-es5.js.map