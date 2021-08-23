"use strict";
(self["webpackChunkfront_end_battle"] = self["webpackChunkfront_end_battle"] || []).push([["src_app_modules_game_game_module_ts"],{

/***/ 4637:
/*!*********************************************************!*\
  !*** ./src/app/modules/game/create/create.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateComponent": () => (/* binding */ CreateComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_core_services_challenge_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/challenge.service */ 1773);
/* harmony import */ var _shared_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/layout/layout.component */ 4325);
/* harmony import */ var _shared_components_code_editor_code_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/code-editor/code-editor.component */ 3495);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/modal/modal.component */ 312);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 4742);











const _c0 = ["iframeResult"];
function CreateComponent_app_modal_9_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-modal", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("dismiss", function CreateComponent_app_modal_9_Template_app_modal_dismiss_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r2.modalSaveNew = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function CreateComponent_app_modal_9_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r4.onSubmit; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Titre");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Descritpion");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "textarea", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreateComponent_app_modal_9_Template_button_click_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); ctx_r5.onSubmit(); return $event.preventDefault(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r1.formChallenge);
} }
const _c1 = function () { return ["/home"]; };
class CreateComponent {
    constructor(challenge) {
        this.challenge = challenge;
        this.modalSaveNew = false;
        this.formChallenge = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required)
        });
        this.defaultCode = `

<!-- Bienvenue dans la section création -->
<!-- Il sera enregistré en tant que brouillon sur votre profil -->
<!-- Avant de pouvoir le partager à la communauté -->

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
        this.code = code;
        this.result.open('text/htmlreplace');
        this.result.write(`${code}`);
        this.result.close();
    }
    onSubmit() {
        const challengeInfos = {
            title: this.formChallenge.get('title').value,
            description: this.formChallenge.get('description').value,
            code: this.code,
        };
        this.challenge.create(challengeInfos).subscribe();
    }
}
CreateComponent.ɵfac = function CreateComponent_Factory(t) { return new (t || CreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_challenge_service__WEBPACK_IMPORTED_MODULE_0__.ChallengeService)); };
CreateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CreateComponent, selectors: [["app-create"]], viewQuery: function CreateComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.iframeResult = _t.first);
    } }, decls: 10, vars: 4, consts: [[1, "create"], ["mode", "html", 3, "defaultCode", "codeChange"], ["frameborder", "0", 1, "create__iframe"], ["iframeResult", ""], [1, "main-btn", "create__btn", 3, "click"], [1, "scd-btn", "create__btn", 3, "routerLink"], [3, "dismiss", 4, "ngIf"], [3, "dismiss"], [1, "create__form", 3, "formGroup", "ngSubmit"], ["color", "accent", "appearance", "fill"], ["matInput", "", "formControlName", "title"], ["for", "title"], ["matInput", "", "formControlName", "description"], ["type", "submit", 1, "scd-btn", 3, "click"]], template: function CreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "app-code-editor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("codeChange", function CreateComponent_Template_app_code_editor_codeChange_2_listener($event) { return ctx.onCodeChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "iframe", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreateComponent_Template_button_click_5_listener() { return ctx.modalSaveNew = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Enregistrer");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Annuler");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, CreateComponent_app_modal_9_Template, 12, 1, "app-modal", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("defaultCode", ctx.defaultCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](3, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.modalSaveNew);
    } }, directives: [_shared_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__.LayoutComponent, _shared_components_code_editor_code_editor_component__WEBPACK_IMPORTED_MODULE_2__.CodeEditorComponent, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__.ModalComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName], styles: [".create[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 1rem;\n}\n.create[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n.create__iframe[_ngcontent-%COMP%] {\n  height: 600px;\n  width: 100%;\n}\n.create__btn[_ngcontent-%COMP%] {\n  float: right;\n  margin-right: 1rem;\n}\n.create__form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQUNGO0FBQ0U7RUFDRSxXQUFBO0FBQ0o7QUFFRTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FBQUo7QUFHRTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQUROO0FBSUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFGSiIsImZpbGUiOiJjcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3JlYXRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogMXJlbTtcblxuICAmID4gKiB7XG4gICAgbWFyZ2luOiA1cHg7XG4gIH1cblxuICAmX19pZnJhbWUge1xuICAgIGhlaWdodDogNjAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAmX19idG4ge1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICB9XG5cbiAgJl9fZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tNDAwKTtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 9584:
/*!*****************************************************!*\
  !*** ./src/app/modules/game/game-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameRoutingModule": () => (/* binding */ GameRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create/create.component */ 4637);
/* harmony import */ var _play_play_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./play/play.component */ 3418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);





const routes = [
    { path: 'play/:id', component: _play_play_component__WEBPACK_IMPORTED_MODULE_1__.PlayComponent },
    { path: 'create', component: _create_create_component__WEBPACK_IMPORTED_MODULE_0__.CreateComponent },
];
class GameRoutingModule {
}
GameRoutingModule.ɵfac = function GameRoutingModule_Factory(t) { return new (t || GameRoutingModule)(); };
GameRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: GameRoutingModule });
GameRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](GameRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 498:
/*!*********************************************!*\
  !*** ./src/app/modules/game/game.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameModule": () => (/* binding */ GameModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _game_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-routing.module */ 9584);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _play_play_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./play/play.component */ 3418);
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create/create.component */ 4637);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);








class GameModule {
}
GameModule.ɵfac = function GameModule_Factory(t) { return new (t || GameModule)(); };
GameModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: GameModule });
GameModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule, _game_routing_module__WEBPACK_IMPORTED_MODULE_0__.GameRoutingModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](GameModule, { declarations: [_play_play_component__WEBPACK_IMPORTED_MODULE_2__.PlayComponent, _create_create_component__WEBPACK_IMPORTED_MODULE_3__.CreateComponent], imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule, _game_routing_module__WEBPACK_IMPORTED_MODULE_0__.GameRoutingModule], exports: [_play_play_component__WEBPACK_IMPORTED_MODULE_2__.PlayComponent] }); })();


/***/ }),

/***/ 3418:
/*!*****************************************************!*\
  !*** ./src/app/modules/game/play/play.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayComponent": () => (/* binding */ PlayComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8636);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_core_services_challenge_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/challenge.service */ 1773);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _shared_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/layout/layout.component */ 4325);
/* harmony import */ var _shared_components_code_editor_code_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/code-editor/code-editor.component */ 3495);






const _c0 = ["iframeResult"];
const _c1 = ["iframeObjective"];
const _c2 = function () { return ["/home"]; };
class PlayComponent {
    constructor(chalService, route) {
        this.chalService = chalService;
        this.route = route;
        this.challengeId = this.route.snapshot.params.id;
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
            .getOne(this.challengeId)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(x => this.challenge = x), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(x => this.updateIframe(this.objective, window.atob(x.code))))
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
PlayComponent.ɵfac = function PlayComponent_Factory(t) { return new (t || PlayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_challenge_service__WEBPACK_IMPORTED_MODULE_0__.ChallengeService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute)); };
PlayComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: PlayComponent, selectors: [["app-play"]], viewQuery: function PlayComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.iframeResult = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.iframeObjective = _t.first);
    } }, decls: 15, vars: 4, consts: [[1, "game"], ["mode", "html", 3, "defaultCode", "codeChange"], [1, "challenge"], [1, "displays"], ["frameborder", "0", 1, "iframe", "displays__objective"], ["iframeObjective", ""], ["frameborder", "0", 1, "iframe", "displays__result"], ["iframeResult", ""], [1, "main-btn", "game__btn"], [1, "scd-btn", "game__btn", 3, "routerLink"], [1, "font-white"]], template: function PlayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "app-code-editor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("codeChange", function PlayComponent_Template_app_code_editor_codeChange_2_listener($event) { return ctx.onCodeChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "iframe", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "iframe", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Enregistrer");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Annuler");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("defaultCode", ctx.defaultCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](3, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.challenge.id);
    } }, directives: [_shared_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__.LayoutComponent, _shared_components_code_editor_code_editor_component__WEBPACK_IMPORTED_MODULE_2__.CodeEditorComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink], styles: [".game[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 1rem;\n}\n.game[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n.game__btn[_ngcontent-%COMP%] {\n  float: right;\n  margin-top: 1rem;\n  margin-right: 1rem;\n}\n.challenge[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.displays[_ngcontent-%COMP%] {\n  position: relative;\n}\n.iframe[_ngcontent-%COMP%] {\n  height: 600px;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  right: 0;\n  transition: all 0.2s;\n}\n\n.displays[_ngcontent-%COMP%]   .displays__objective[_ngcontent-%COMP%] {\n  visibility: hidden;\n  opacity: 0;\n}\n\n.displays[_ngcontent-%COMP%]:hover   .displays__result[_ngcontent-%COMP%] {\n  visibility: hidden;\n  opacity: 0;\n}\n\n.displays[_ngcontent-%COMP%]:hover   .displays__objective[_ngcontent-%COMP%] {\n  visibility: visible;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUNFO0VBQ0UsV0FBQTtBQUNKO0FBRUU7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUFKO0FBSUE7RUFDRSxXQUFBO0FBREY7QUFLQTtFQUNFLGtCQUFBO0FBRkY7QUFLQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLG9CQUFBO0FBRkY7QUFLQSw2Q0FBQTtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FBRkY7QUFLQSwwQ0FBQTtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FBRkY7QUFLQSw4Q0FBQTtBQUNBO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0FBRkYiLCJmaWxlIjoicGxheS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nYW1lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogMXJlbTtcblxuICAmID4gKiB7XG4gICAgbWFyZ2luOiA1cHg7XG4gIH1cblxuICAmX19idG4ge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgfVxufVxuXG4uY2hhbGxlbmdlIHtcbiAgd2lkdGg6IDEwMCU7XG5cbn1cblxuLmRpc3BsYXlzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaWZyYW1lIHtcbiAgaGVpZ2h0OiA2MDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG59XG5cbi8qIEhpZGUgdGhlIHNlY29uZCBwaWVjZSBvZiB0ZXh0IGJ5IGRlZmF1bHQgKi9cbi5kaXNwbGF5cyAuZGlzcGxheXNfX29iamVjdGl2ZSB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbn1cblxuLyogSGlkZSB0aGUgZmlyc3QgcGllY2Ugb2YgdGV4dCBvbiBob3ZlciAqL1xuLmRpc3BsYXlzOmhvdmVyIC5kaXNwbGF5c19fcmVzdWx0IHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xufVxuXG4vKiBSZS1zaG93IHRoZSBzZWNvbmQgcGllY2Ugb2YgdGV4dCBvbiBob3ZlciAqL1xuLmRpc3BsYXlzOmhvdmVyIC5kaXNwbGF5c19fb2JqZWN0aXZlIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3BhY2l0eTogMTtcbn1cbiJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_modules_game_game_module_ts.js.map