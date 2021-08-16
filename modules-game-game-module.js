(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-game-game-module"],{

/***/ "Bxvx":
/*!*********************************************!*\
  !*** ./src/app/modules/game/game.module.ts ***!
  \*********************************************/
/*! exports provided: GameModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameModule", function() { return GameModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _game_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-routing.module */ "ej1U");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _play_play_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./play/play.component */ "KfXN");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create/create.component */ "XUx1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class GameModule {
}
GameModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: GameModule });
GameModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function GameModule_Factory(t) { return new (t || GameModule)(); }, imports: [[
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _game_routing_module__WEBPACK_IMPORTED_MODULE_1__["GameRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](GameModule, { declarations: [_play_play_component__WEBPACK_IMPORTED_MODULE_3__["PlayComponent"], _create_create_component__WEBPACK_IMPORTED_MODULE_4__["CreateComponent"]], imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _game_routing_module__WEBPACK_IMPORTED_MODULE_1__["GameRoutingModule"]], exports: [_play_play_component__WEBPACK_IMPORTED_MODULE_3__["PlayComponent"]] }); })();


/***/ }),

/***/ "KfXN":
/*!*****************************************************!*\
  !*** ./src/app/modules/game/play/play.component.ts ***!
  \*****************************************************/
/*! exports provided: PlayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayComponent", function() { return PlayComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_services_challenge_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/challenge.service */ "vJJY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/layout/layout.component */ "Xn/w");
/* harmony import */ var _shared_components_code_editor_code_editor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/code-editor/code-editor.component */ "37rE");






const _c0 = ["iframeResult"];
const _c1 = ["iframeObjective"];
const _c2 = function () { return ["/home"]; };
class PlayComponent {
    constructor(chalService, route) {
        this.chalService = chalService;
        this.route = route;
        this.idSubscription = this.route.params.subscribe((params) => {
            this.challengeId = params['id'];
        });
        this.defaultCode = `
<!--Essayez de reproduire le modèle-->
<!--Ecrivez votre code dans cet éditeur-->
<!--Passez la souris sur la fenêtre à droite pour voir l'objectif-->

<h1 class="title">Bonne Chance 😀<h1>

<style>
  
    body {
        background-color: #00adb5;
    }
      
    .title {
        font-size: 4rem;
        font-family: sans-serif;
        color: #ddeeee;
        margin-top: 5rem;
        text-align: center;
    }
  
</style>
`;
    }
    ngOnInit() {
        this.result = this.iframeResult.nativeElement.contentWindow.document;
        this.objective = this.iframeObjective.nativeElement.contentWindow.document;
        this.chalService
            .getChallenge('610d49ec70939a00151c413f')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["pluck"])('code'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])((x) => this.updateIframe(this.objective, window.atob(x))))
            .subscribe();
    }
    onCodeChange(code) {
        this.updateIframe(this.result, code);
    }
    updateIframe(frameRef, code) {
        frameRef.open('text/htmlreplace');
        frameRef.write(code);
        frameRef.close();
    }
}
PlayComponent.ɵfac = function PlayComponent_Factory(t) { return new (t || PlayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_challenge_service__WEBPACK_IMPORTED_MODULE_2__["ChallengeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
PlayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PlayComponent, selectors: [["app-play"]], viewQuery: function PlayComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.iframeResult = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.iframeObjective = _t.first);
    } }, decls: 20, vars: 3, consts: [[1, "game"], ["mode", "html", 3, "defaultCode", "codeChange"], [1, "challenge"], [1, "challenge__options"], [1, "challenge__options-label"], [1, "challenge__options-item"], [1, "displays"], ["frameborder", "0", 1, "iframe", "displays__objective"], ["iframeObjective", ""], ["frameborder", "0", 1, "iframe", "displays__result"], ["iframeResult", ""], [1, "main-btn", "game__btn"], [1, "scd-btn", "game__btn", 3, "routerLink"]], template: function PlayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "app-code-editor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("codeChange", function PlayComponent_Template_app_code_editor_codeChange_2_listener($event) { return ctx.onCodeChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u2699");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Opacity");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Display");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "iframe", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "iframe", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Enregistrer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Annuler");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("defaultCode", ctx.defaultCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c2));
    } }, directives: [_shared_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"], _shared_components_code_editor_code_editor_component__WEBPACK_IMPORTED_MODULE_5__["CodeEditorComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: [".game[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 1rem;\n}\n.game[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n.game__btn[_ngcontent-%COMP%] {\n  float: right;\n  margin-top: 1rem;\n  margin-right: 1rem;\n}\n.challenge[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.challenge__options[_ngcontent-%COMP%] {\n  padding: 2px;\n  background-color: var(--light-grey);\n  display: flex;\n  align-items: center;\n}\n.challenge__options-label[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  font-size: 1.7rem;\n  color: var(--black);\n}\n.challenge__options-item[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n  color: var(--white);\n}\n.displays[_ngcontent-%COMP%] {\n  position: relative;\n}\n.iframe[_ngcontent-%COMP%] {\n  height: 600px;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  right: 0;\n  transition: all 0.2s;\n}\n\n.displays[_ngcontent-%COMP%]   .displays__objective[_ngcontent-%COMP%] {\n  visibility: hidden;\n  opacity: 0;\n}\n\n.displays[_ngcontent-%COMP%]:hover   .displays__result[_ngcontent-%COMP%] {\n  visibility: hidden;\n  opacity: 0;\n}\n\n.displays[_ngcontent-%COMP%]:hover   .displays__objective[_ngcontent-%COMP%] {\n  visibility: visible;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BsYXkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUNFO0VBQ0UsV0FBQTtBQUNKO0FBRUU7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUFKO0FBSUE7RUFDRSxXQUFBO0FBREY7QUFHRTtFQUNFLFlBQUE7RUFDQSxtQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQURKO0FBSUU7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFGSjtBQUtFO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQUhKO0FBT0E7RUFDRSxrQkFBQTtBQUpGO0FBT0E7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxvQkFBQTtBQUpGO0FBT0EsNkNBQUE7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQUpGO0FBT0EsMENBQUE7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQUpGO0FBT0EsOENBQUE7QUFDQTtFQUNFLG1CQUFBO0VBQ0EsVUFBQTtBQUpGIiwiZmlsZSI6InBsYXkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2FtZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDFyZW07XG5cbiAgJiA+ICoge1xuICAgIG1hcmdpbjogNXB4O1xuICB9XG5cbiAgJl9fYnRuIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gIH1cbn1cblxuLmNoYWxsZW5nZSB7XG4gIHdpZHRoOiAxMDAlO1xuXG4gICZfX29wdGlvbnMge1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmV5KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAmX19vcHRpb25zLWxhYmVsIHtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XG4gIH1cblxuICAmX19vcHRpb25zLWl0ZW0ge1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIH1cbn1cblxuLmRpc3BsYXlzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaWZyYW1lIHtcbiAgaGVpZ2h0OiA2MDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG59XG5cbi8qIEhpZGUgdGhlIHNlY29uZCBwaWVjZSBvZiB0ZXh0IGJ5IGRlZmF1bHQgKi9cbi5kaXNwbGF5cyAuZGlzcGxheXNfX29iamVjdGl2ZSB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbn1cblxuLyogSGlkZSB0aGUgZmlyc3QgcGllY2Ugb2YgdGV4dCBvbiBob3ZlciAqL1xuLmRpc3BsYXlzOmhvdmVyIC5kaXNwbGF5c19fcmVzdWx0IHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xufVxuXG4vKiBSZS1zaG93IHRoZSBzZWNvbmQgcGllY2Ugb2YgdGV4dCBvbiBob3ZlciAqL1xuLmRpc3BsYXlzOmhvdmVyIC5kaXNwbGF5c19fb2JqZWN0aXZlIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3BhY2l0eTogMTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "XUx1":
/*!*********************************************************!*\
  !*** ./src/app/modules/game/create/create.component.ts ***!
  \*********************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/layout/layout.component */ "Xn/w");
/* harmony import */ var _shared_components_code_editor_code_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/code-editor/code-editor.component */ "37rE");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/modal/modal.component */ "ajRT");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







const _c0 = ["iframeResult"];
function CreateComponent_app_modal_9_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-modal", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dismiss", function CreateComponent_app_modal_9_Template_app_modal_dismiss_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.modalSaveNew = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function () { return ["/home"]; };
class CreateComponent {
    constructor() {
        this.modalSaveNew = false;
        this.defaultCode = `
<h1 class="title">Laissez libre cours à votre imagination 🎨<h1>

<style>
  
  body {
      background-color: #00adb5;
  }
    
  .title {
      font-size: 2.5rem;
      color: #ddeeee;
      margin-top: 8rem;
      text-align: center;
  }
  
</style>
  `;
    }
    ngOnInit() {
        this.result = this.iframeResult.nativeElement.contentWindow.document;
    }
    onCodeChange(code) {
        this.result.open('text/htmlreplace');
        this.result.write(`${code}`);
        this.result.close();
    }
}
CreateComponent.ɵfac = function CreateComponent_Factory(t) { return new (t || CreateComponent)(); };
CreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateComponent, selectors: [["app-create"]], viewQuery: function CreateComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.iframeResult = _t.first);
    } }, decls: 10, vars: 4, consts: [[1, "create"], ["mode", "html", 3, "defaultCode", "codeChange"], ["frameborder", "0", 1, "create__iframe"], ["iframeResult", ""], [1, "main-btn", "create__btn", 3, "click"], [1, "scd-btn", "create__btn", 3, "routerLink"], [3, "dismiss", 4, "ngIf"], [3, "dismiss"], ["for", "title"], ["type", "text", "name", "title"], ["for", "Description"], ["type", "text", "name", "Description"], [1, "main-btn"]], template: function CreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-code-editor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("codeChange", function CreateComponent_Template_app_code_editor_codeChange_2_listener($event) { return ctx.onCodeChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "iframe", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateComponent_Template_button_click_5_listener() { return ctx.modalSaveNew = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Enregistrer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Annuler");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CreateComponent_app_modal_9_Template, 10, 0, "app-modal", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("defaultCode", ctx.defaultCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.modalSaveNew);
    } }, directives: [_shared_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["LayoutComponent"], _shared_components_code_editor_code_editor_component__WEBPACK_IMPORTED_MODULE_2__["CodeEditorComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__["ModalComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"]], styles: [".create[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 1rem;\n}\n.create[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n.create__iframe[_ngcontent-%COMP%] {\n  height: 600px;\n  width: 100%;\n}\n.create__btn[_ngcontent-%COMP%] {\n  float: right;\n  margin-right: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NyZWF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQUNGO0FBQ0U7RUFDRSxXQUFBO0FBQ0o7QUFFRTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FBQUo7QUFHRTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQUROIiwiZmlsZSI6ImNyZWF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jcmVhdGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuXG4gICYgPiAqIHtcbiAgICBtYXJnaW46IDVweDtcbiAgfVxuXG4gICZfX2lmcmFtZSB7XG4gICAgaGVpZ2h0OiA2MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gICZfX2J0biB7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "ej1U":
/*!*****************************************************!*\
  !*** ./src/app/modules/game/game-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: GameRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameRoutingModule", function() { return GameRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create/create.component */ "XUx1");
/* harmony import */ var _play_play_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./play/play.component */ "KfXN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    { path: 'play/:id', component: _play_play_component__WEBPACK_IMPORTED_MODULE_2__["PlayComponent"] },
    { path: 'create', component: _create_create_component__WEBPACK_IMPORTED_MODULE_1__["CreateComponent"] },
];
class GameRoutingModule {
}
GameRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: GameRoutingModule });
GameRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function GameRoutingModule_Factory(t) { return new (t || GameRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](GameRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=modules-game-game-module.js.map