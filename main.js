(self["webpackChunkfront_end_battle"] = self["webpackChunkfront_end_battle"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _auth_start_start_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/start/start.component */ 5564);
/* harmony import */ var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth-guard */ 7500);
/* harmony import */ var _shared_components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/components/page-not-found/page-not-found.component */ 9004);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);







const redirectUnauthorizedToStart = () => (0,_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_2__.redirectUnauthorizedTo)(['start']);
const redirectLoggedInToHome = () => (0,_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_2__.redirectLoggedInTo)(['home']);
const routes = [
    { path: '', redirectTo: 'start', pathMatch: 'full' },
    Object.assign({ path: 'start', component: _auth_start_start_component__WEBPACK_IMPORTED_MODULE_0__.StartComponent }, (0,_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_2__.canActivate)(redirectLoggedInToHome)),
    Object.assign({ path: 'profile', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/profile/profile.module */ 9267)).then((m) => m.ProfileModule) }, (0,_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_2__.canActivate)(redirectUnauthorizedToStart)),
    Object.assign({ path: 'home', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/home/home.module */ 4882)).then((m) => m.HomeModule) }, (0,_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_2__.canActivate)(redirectUnauthorizedToStart)),
    Object.assign({ path: 'game', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_game_game_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/game/game.module */ 498)).then((m) => m.GameModule) }, (0,_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_2__.canActivate)(redirectUnauthorizedToStart)),
    {
        path: '**',
        component: _shared_components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_1__.PageNotFoundComponent
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, {
                preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_4__.PreloadAllModules
            })], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1258);


class AppComponent {
    constructor() {
        this.title = 'frontEndBattle';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ 718);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire */ 8690);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/auth */ 6363);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/storage */ 6776);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth.module */ 1674);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/core.module */ 294);
/* harmony import */ var _modules_profile_profile_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/profile/profile.module */ 9267);
/* harmony import */ var _core_interceptors_add_id_token_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/interceptors/add-id-token.interceptor */ 3447);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__.BUCKET, useValue: 'challenge-img' },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HTTP_INTERCEPTORS,
            useClass: _core_interceptors_add_id_token_interceptor__WEBPACK_IMPORTED_MODULE_6__.AddIdTokenInterceptor,
            multi: true,
        }
    ], imports: [[
            _angular_fire__WEBPACK_IMPORTED_MODULE_10__.AngularFireModule.initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.firebase),
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__.AngularFireStorageModule,
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__.AngularFireAuthModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule,
            _core_core_module__WEBPACK_IMPORTED_MODULE_4__.CoreModule,
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_3__.AuthModule,
            _modules_profile_profile_module__WEBPACK_IMPORTED_MODULE_5__.ProfileModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent], imports: [_angular_fire__WEBPACK_IMPORTED_MODULE_10__.AngularFireModule, _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__.AngularFireStorageModule,
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__.AngularFireAuthModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule,
        _core_core_module__WEBPACK_IMPORTED_MODULE_4__.CoreModule,
        _auth_auth_module__WEBPACK_IMPORTED_MODULE_3__.AuthModule,
        _modules_profile_profile_module__WEBPACK_IMPORTED_MODULE_5__.ProfileModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule] }); })();


/***/ }),

/***/ 1674:
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ 6363);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/snack-bar */ 8456);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ 1124);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./start/start.component */ 5564);
/* harmony import */ var _sign_sign_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sign/sign.component */ 5430);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);















class AuthModule {
}
AuthModule.ɵfac = function AuthModule_Factory(t) { return new (t || AuthModule)(); };
AuthModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__.AngularFireAuthModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInputModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__.MatSnackBarModule,
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__.MatDividerModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_start_start_component__WEBPACK_IMPORTED_MODULE_1__.StartComponent, _sign_sign_component__WEBPACK_IMPORTED_MODULE_2__.SignComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__.AngularFireAuthModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInputModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__.MatSnackBarModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__.MatDividerModule], exports: [_start_start_component__WEBPACK_IMPORTED_MODULE_1__.StartComponent, _sign_sign_component__WEBPACK_IMPORTED_MODULE_2__.SignComponent] }); })();


/***/ }),

/***/ 384:
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 1134);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 5871);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 8117);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ 713);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 5816);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 8293);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/services/user.service */ 8386);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/auth */ 6363);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _core_services_snack_bar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/snack-bar.service */ 8492);









class AuthService {
    constructor(userService, auth, router, snackBar) {
        this.userService = userService;
        this.auth = auth;
        this.router = router;
        this.snackBar = snackBar;
    }
    getFirebaseCurrentUser() {
        const user = firebase__WEBPACK_IMPORTED_MODULE_0__.default.auth().currentUser;
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(user);
        }
        else {
            this.logout();
            (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)('No user is signed in');
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_5__.EMPTY;
    }
    signinGoogle() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const provider = new firebase__WEBPACK_IMPORTED_MODULE_0__.default.auth.GoogleAuthProvider();
            this.signInWithProvider(provider);
        });
    }
    signinGitHub() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const provider = new firebase__WEBPACK_IMPORTED_MODULE_0__.default.auth.GithubAuthProvider();
            this.signInWithProvider(provider);
        });
    }
    logInWithEmailPassword(email, password) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            return firebase__WEBPACK_IMPORTED_MODULE_0__.default.auth().signInWithEmailAndPassword(email, password).then(() => {
                this.setUserId(email);
                this.snackBar.showSuccess('Connexion réussie');
                this.router.navigate(['home']);
            })
                .catch((err) => {
                this.snackBar.showError(err.message, err.code);
            });
            ;
        });
    }
    createAccountWithEmailPassword(userName, email, password) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            return firebase__WEBPACK_IMPORTED_MODULE_0__.default.auth()
                .createUserWithEmailAndPassword(email, password)
                .then((userCredentials) => {
                this.setUserId(email);
                if (userCredentials.additionalUserInfo.isNewUser) {
                    this.userService.create(email, userName).subscribe();
                }
            });
        });
    }
    logout() {
        this.auth.signOut().then(() => {
            this.snackBar.showSuccess('Vous êtes déconnecté.');
        });
        localStorage.setItem('userId', '');
        return this.router.navigate(['/']);
    }
    getIdToken() {
        return this.getFirebaseCurrentUser().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.mergeMap)((user) => user.getIdToken()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)((err) => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(err)));
    }
    setUserId(email) {
        this.userService.getUserId(email).subscribe(id => {
            this.userService.userId = id;
        });
    }
    // private getUserEmail() {
    //   return app.auth().currentUser.email;
    // }
    signInWithProvider(provider) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            return this.auth
                .signInWithPopup(provider)
                .then((cred) => {
                const { email, name } = (cred.additionalUserInfo.profile);
                this.snackBar.showSuccess('Connexion réussie');
                this.router.navigate(['home']);
                this.setUserId(email);
                if (cred.additionalUserInfo.isNewUser) {
                    this.userService.create(email, name).subscribe();
                }
            })
                .catch((err) => {
                this.snackBar.showError(err.message, err.code);
            });
        });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_core_services_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__.AngularFireAuth), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_core_services_snack_bar_service__WEBPACK_IMPORTED_MODULE_2__.SnackBarService)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5430:
/*!*********************************************!*\
  !*** ./src/app/auth/sign/sign.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignComponent": () => (/* binding */ SignComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_core_services_snack_bar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/snack-bar.service */ 8492);
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/auth/auth.service */ 384);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ 1124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 781);











function SignComponent_form_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function SignComponent_form_6_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.onLogin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Par mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "E-Mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Mot de passe");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "1 majsucule, 1 minuscule, 1 chiffre");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Ok");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.logInForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r0.logInForm.valid);
} }
function SignComponent_form_7_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function SignComponent_form_7_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.onNewAccount(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Par mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Nom d'utilisateur");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "E-Mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Mot de passe");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "1 majsucule, 1 minuscule, 1 chiffre");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Ok");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r1.newAccountForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r1.newAccountForm.valid);
} }
class SignComponent {
    constructor(snackBar, formBuilder, authService, router) {
        this.snackBar = snackBar;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.logInForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
            password: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(6), this.checkPassword],
            ],
        });
        this.newAccountForm = this.formBuilder.group({
            userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
            password: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(6), this.checkPassword],
            ],
        });
    }
    // Custom validator for password
    checkPassword(control) {
        let enteredPassword = control.value;
        let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
        return !passwordCheck.test(enteredPassword) && enteredPassword
            ? { requirements: true }
            : null;
    }
    ngOnInit() { }
    connectWithGoogle() {
        this.authService.signinGoogle();
    }
    connectWithGitHub() {
        this.authService.signinGitHub();
    }
    onLogin() {
        const { email, password } = this.logInForm.value;
        this.authService.logInWithEmailPassword(email, password);
    }
    onNewAccount() {
        const { userName, email, password } = this.newAccountForm.value;
        this.authService
            .createAccountWithEmailPassword(userName, email, password)
            .then(() => {
            this.snackBar.showSuccess('Inscription réussie, mail de verification envoyé');
            this.router.navigate(['home']);
        })
            .catch((err) => {
            this.snackBar.showError(err.message, err.code);
        });
    }
}
SignComponent.ɵfac = function SignComponent_Factory(t) { return new (t || SignComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_snack_bar_service__WEBPACK_IMPORTED_MODULE_0__.SnackBarService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
SignComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SignComponent, selectors: [["app-sign"]], inputs: { type: "type", title: "title" }, decls: 8, vars: 3, consts: [[1, "sign"], [1, "sign__title", "font-white"], ["src", "\\assets\\signin-btn-google.jpg", "alt", "se connecter google", 1, "sign__btn", 3, "click"], ["src", "\\assets\\signin-btn-github.jpg", "alt", "se connecter github", 1, "sign__btn", 3, "click"], [1, "sign__divider"], ["class", "sign__mail", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "sign__mail", 3, "formGroup", "ngSubmit"], [1, "font-black"], ["appearance", "outline"], ["matInput", "", "type", "email", "formControlName", "email"], ["matInput", "", "minlength", "8", "type", "password", "formControlName", "password"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "sign__ok", 3, "disabled"], ["matInput", "", "type", "email", "formControlName", "userName"]], template: function SignComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SignComponent_Template_img_click_3_listener() { return ctx.connectWithGoogle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SignComponent_Template_img_click_4_listener() { return ctx.connectWithGitHub(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "mat-divider", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, SignComponent_form_6_Template, 15, 2, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, SignComponent_form_7_Template, 19, 2, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.type === "signIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.type === "signUp");
    } }, directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_5__.MatDivider, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MinLengthValidator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatHint, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton], styles: [".sign[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.sign__title[_ngcontent-%COMP%] {\n  font-size: 1.7rem;\n  margin: 1rem;\n}\n.sign__btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin: 0.5rem;\n  width: 15rem;\n}\n.sign__mail[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.sign__divider[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 1rem;\n}\n.sign__ok[_ngcontent-%COMP%] {\n  margin-top: 1.2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUFKO0FBRUk7RUFDSSxpQkFBQTtFQUNBLFlBQUE7QUFBUjtBQUdJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBRFI7QUFJSTtFQUVJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBSFI7QUFNSTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQUpSO0FBT0k7RUFDSSxrQkFBQTtBQUxSIiwiZmlsZSI6InNpZ24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lnbiB7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICZfX3RpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjdyZW07XG4gICAgICAgIG1hcmdpbjogMXJlbTtcbiAgICB9XG5cbiAgICAmX19idG4ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIG1hcmdpbjogMC41cmVtO1xuICAgICAgICB3aWR0aDogMTVyZW07XG4gICAgfVxuXG4gICAgJl9fbWFpbCB7XG5cbiAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgICZfX2RpdmlkZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICB9XG5cbiAgICAmX19vayB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEuMnJlbTtcbiAgICB9XG59Il19 */"] });


/***/ }),

/***/ 5564:
/*!***********************************************!*\
  !*** ./src/app/auth/start/start.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartComponent": () => (/* binding */ StartComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/layout/layout.component */ 4325);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/modal/modal.component */ 312);
/* harmony import */ var _sign_sign_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sign/sign.component */ 5430);






function StartComponent_app_modal_14_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-modal", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("dismiss", function StartComponent_app_modal_14_Template_app_modal_dismiss_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.modalSignIn = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-sign", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function StartComponent_app_modal_15_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-modal", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("dismiss", function StartComponent_app_modal_15_Template_app_modal_dismiss_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.modalSignUp = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-sign", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class StartComponent {
    constructor() {
        this.modalSignIn = false;
        this.modalSignUp = false;
    }
    ngOnInit() {
    }
    onSignIn() {
    }
    onSignUp() {
    }
}
StartComponent.ɵfac = function StartComponent_Factory(t) { return new (t || StartComponent)(); };
StartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: StartComponent, selectors: [["app-start"]], decls: 16, vars: 2, consts: [[1, "start"], [1, "start__content"], ["src", "/assets/Bigfoot-bro.png", "alt", "illustration", 1, "start__img"], [1, "start__message"], [1, "start__title"], [1, "start__bio"], [1, "start__logs"], ["mat-raised-button", "", "color", "accent", 1, "start__btn", 3, "click"], ["mat-flat-button", "", "color", "primary", 1, "start__btn", 3, "click"], [3, "dismiss", 4, "ngIf"], [3, "dismiss"], ["type", "signIn", "title", "Se connecter"], ["type", "signUp", "title", "S'inscrire"]], template: function StartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Bienvenue sur Front-End-Battle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Tester vos connaissances en int\u00E9gration web et apprenez des meilleures.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function StartComponent_Template_button_click_10_listener() { ctx.modalSignIn = true; return ctx.onSignIn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " Se connecter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function StartComponent_Template_button_click_12_listener() { ctx.modalSignUp = true; return ctx.onSignUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " S'inscrire ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, StartComponent_app_modal_14_Template, 2, 0, "app-modal", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, StartComponent_app_modal_15_Template, 2, 0, "app-modal", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.modalSignIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.modalSignUp);
    } }, directives: [_shared_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_1__.ModalComponent, _sign_sign_component__WEBPACK_IMPORTED_MODULE_2__.SignComponent], styles: [".start__content[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}\n.start__message[_ngcontent-%COMP%] {\n  width: 50vw;\n  display: flex;\n  flex-direction: column;\n  padding: 2rem;\n}\n.start__img[_ngcontent-%COMP%] {\n  width: 600px;\n}\n.start__title[_ngcontent-%COMP%] {\n  margin: 2rem 0;\n  font-size: 3rem;\n  line-height: 60px;\n}\n.start__logs[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n.start__btn[_ngcontent-%COMP%] {\n  margin-right: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBSlI7QUFPSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FBTFI7QUFRSTtFQUNJLFlBQUE7QUFOUjtBQVNJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQVBSO0FBVUk7RUFDSSxnQkFBQTtBQVJSO0FBV0k7RUFDSSxrQkFBQTtBQVRSIiwiZmlsZSI6InN0YXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi5zdGFydCB7XG4gICAgXG5cbiAgICAmX19jb250ZW50IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIH1cblxuICAgICZfX21lc3NhZ2Uge1xuICAgICAgICB3aWR0aDogNTB2dztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgcGFkZGluZzogMnJlbTtcbiAgICB9XG5cbiAgICAmX19pbWcge1xuICAgICAgICB3aWR0aDogNjAwcHg7XG4gICAgfVxuXG4gICAgJl9fdGl0bGUge1xuICAgICAgICBtYXJnaW46IDJyZW0gMDtcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogNjBweDtcbiAgICB9XG4gICAgXG4gICAgJl9fbG9ncyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgfVxuXG4gICAgJl9fYnRuIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xuICAgIH1cblxuXG59XG4iXX0= */"] });


/***/ }),

/***/ 294:
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ 8456);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);





class CoreModule {
}
CoreModule.ɵfac = function CoreModule_Factory(t) { return new (t || CoreModule)(); };
CoreModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClientModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBarModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClientModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBarModule] }); })();


/***/ }),

/***/ 3447:
/*!***************************************************************!*\
  !*** ./src/app/core/interceptors/add-id-token.interceptor.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddIdTokenInterceptor": () => (/* binding */ AddIdTokenInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 88);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 5816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/auth/auth.service */ 384);



class AddIdTokenInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(request, next) {
        return this.authService.getIdToken().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.first)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(x => {
            const clonedRequest = request.clone({ headers: request.headers.append('Authorization', x), });
            return next.handle(clonedRequest);
        }));
    }
}
AddIdTokenInterceptor.ɵfac = function AddIdTokenInterceptor_Factory(t) { return new (t || AddIdTokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
AddIdTokenInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AddIdTokenInterceptor, factory: AddIdTokenInterceptor.ɵfac });


/***/ }),

/***/ 1773:
/*!****************************************************!*\
  !*** ./src/app/core/services/challenge.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChallengeService": () => (/* binding */ ChallengeService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.service */ 2323);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _uuid_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uuid.service */ 8225);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ 8386);
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/auth.service */ 384);







class ChallengeService {
    // url = 'https://feb-api.com/challenges';
    constructor(storageService, http, uuid, userService, authService) {
        this.storageService = storageService;
        this.http = http;
        this.uuid = uuid;
        this.userService = userService;
        this.authService = authService;
        // For documentation on the api : https://feb-api.com/api
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api.challenges;
    }
    //////////////////
    //     GET      //
    //////////////////
    getOne(id) {
        return this.http.get(`${this.url}/${id}`);
    }
    getAll() {
        return this.http.get(this.url);
    }
    ////////////////////
    //      POST      //
    ////////////////////
    create(challengeInfos) {
        const uuid = this.uuid.getId();
        const imgId = this.storageService.uploadImg(challengeInfos.imgData);
        const userId = this.userService.userId;
        this.userService.getOne(userId);
        const challenge = {
            id: uuid,
            title: challengeInfos.title,
            description: challengeInfos.description,
            code: challengeInfos.code,
            imgId,
            creatorId: 'Antoine',
        };
        const userChallenge = {
            id: uuid,
            title: challengeInfos.title,
        };
        this.userService.addChallenge(userId, userChallenge).subscribe();
        return this.http.post(this.url, challenge, { responseType: 'text' });
    }
    /////////////////////
    //      PATCH      //
    /////////////////////
    update(id, challenge) {
        return this.http.patch(`${this.url}/${id}`, challenge);
    }
    /////////////////////
    //      DELETE     //
    /////////////////////
    delete(id) {
        const userId = this.userService.userId;
        this.userService.deleteChallenge(userId, { id }).subscribe();
        return this.http.delete(`${this.url}/${id}`);
    }
}
ChallengeService.ɵfac = function ChallengeService_Factory(t) { return new (t || ChallengeService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_uuid_service__WEBPACK_IMPORTED_MODULE_2__.UuidService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService)); };
ChallengeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: ChallengeService, factory: ChallengeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8492:
/*!****************************************************!*\
  !*** ./src/app/core/services/snack-bar.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SnackBarService": () => (/* binding */ SnackBarService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ 8456);


class SnackBarService {
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    showError(message, code) {
        const bar = (message, time = 4000) => this.snackBar.open(message, 'Fermer', { duration: time });
        switch (code) {
            case 'auth/email-already-in-use':
                bar('E-mail déjà utilisé.');
                break;
            case 'auth/invalid-email':
                bar('E-mail invalide.');
                break;
            case 'auth/too-many-requests':
                bar(`Trop de tentatives, l'accés à ce compte a temporairement été suspendu.`);
                break;
            case 'auth/weak-password':
                bar(`Mot de passe trop faible, il doit comporter 1 minuscule, 1 majuscule et 1 chiffre.`);
                break;
            case 'auth/account-exists-with-different-credential':
                bar(`Un compte avec cet e-mail existe déjà mais avec un autre fournisseur (GitHub, Google, ...), merci d'essayer un autre moyen.`, 10000);
                break;
            default:
                bar(message);
                break;
        }
    }
    showSuccess(message, time = 4000) {
        this.snackBar.open(message, 'Fermer', { duration: time, panelClass: ['color-snackbar'] });
    }
}
SnackBarService.ɵfac = function SnackBarService_Factory(t) { return new (t || SnackBarService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.MatSnackBar)); };
SnackBarService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SnackBarService, factory: SnackBarService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2323:
/*!**************************************************!*\
  !*** ./src/app/core/services/storage.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageService": () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ 713);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4361);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _uuid_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uuid.service */ 8225);




class StorageService {
    constructor(uuid) {
        this.uuid = uuid;
    }
    downloadViaUrl(imgName) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)(firebase__WEBPACK_IMPORTED_MODULE_0__.default.storage().ref().child(imgName).getDownloadURL());
    }
    uploadImg(dataUrl) {
        const imgId = this.uuid.getId();
        const ref = firebase__WEBPACK_IMPORTED_MODULE_0__.default.storage().ref().child(imgId);
        ref.putString(dataUrl, 'data_url').then(() => console.log('Uploaded a data_url string!'));
        return imgId;
    }
}
StorageService.ɵfac = function StorageService_Factory(t) { return new (t || StorageService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_uuid_service__WEBPACK_IMPORTED_MODULE_1__.UuidService)); };
StorageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: StorageService, factory: StorageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8386:
/*!***********************************************!*\
  !*** ./src/app/core/services/user.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _uuid_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uuid.service */ 8225);





class UserService {
    // For documentation on the api : https://feb-api.com/api
    constructor(http, uuid) {
        this.http = http;
        this.uuid = uuid;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api.users;
    }
    get userId() {
        return localStorage.getItem('userId');
    }
    set userId(id) {
        // console.log(id)
        localStorage.setItem('userId', id);
    }
    //////////////////
    //     GET      //
    //////////////////
    getAll() {
        return this.http.get(this.url);
    }
    getOne(id) {
        return this.http.get(`${this.url}/${id}`);
    }
    getUserId(email) {
        return this.http.get(`${this.url}/${email}/id`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(res => res.id));
    }
    ////////////////////
    //      POST      //
    ////////////////////
    create(email, name) {
        const uuid = this.uuid.getId();
        const user = {
            id: uuid,
            email: email,
            username: name,
            challenges: [],
        };
        this.userId = uuid;
        return this.http.post(this.url, user, { responseType: 'text' });
    }
    /////////////////////
    //      PATCH      //
    /////////////////////
    update(id, user) {
        return this.http.patch(`${this.url}/${id}`, user);
    }
    addChallenge(userId, userChallenge) {
        return this.http.patch(`${this.url}/${userId}/challenge`, userChallenge);
    }
    deleteChallenge(userId, challenge) {
        return this.http.patch(`${this.url}/${userId}/challenge`, challenge);
    }
    /////////////////////
    //      DELETE     //
    /////////////////////
    delete(id) {
        return this.http.delete(`${this.url}/${id}`);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_uuid_service__WEBPACK_IMPORTED_MODULE_1__.UuidService)); };
UserService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8225:
/*!***********************************************!*\
  !*** ./src/app/core/services/uuid.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UuidService": () => (/* binding */ UuidService)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ 2230);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


class UuidService {
    constructor() {
        this.myId = uuid__WEBPACK_IMPORTED_MODULE_0__.default();
    }
    getId() {
        return uuid__WEBPACK_IMPORTED_MODULE_0__.default();
    }
}
UuidService.ɵfac = function UuidService_Factory(t) { return new (t || UuidService)(); };
UuidService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UuidService, factory: UuidService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7334:
/*!***********************************************************!*\
  !*** ./src/app/modules/profile/profile-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileRoutingModule": () => (/* binding */ ProfileRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile/profile.component */ 4179);
/* harmony import */ var _user_challenges_user_challenges_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-challenges/user-challenges.component */ 1477);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);





const routes = [
    { path: "", component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_0__.ProfileComponent },
    { path: "challenges", component: _user_challenges_user_challenges_component__WEBPACK_IMPORTED_MODULE_1__.UserChallengesComponent }
];
class ProfileRoutingModule {
}
ProfileRoutingModule.ɵfac = function ProfileRoutingModule_Factory(t) { return new (t || ProfileRoutingModule)(); };
ProfileRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ProfileRoutingModule });
ProfileRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProfileRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 9267:
/*!***************************************************!*\
  !*** ./src/app/modules/profile/profile.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileModule": () => (/* binding */ ProfileModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ 1124);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 7334);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile/profile.component */ 4179);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _user_challenges_user_challenges_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-challenges/user-challenges.component */ 1477);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);









class ProfileModule {
}
ProfileModule.ɵfac = function ProfileModule_Factory(t) { return new (t || ProfileModule)(); };
ProfileModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ProfileModule });
ProfileModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfileRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__.MatDividerModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ProfileModule, { declarations: [_profile_profile_component__WEBPACK_IMPORTED_MODULE_1__.ProfileComponent, _user_challenges_user_challenges_component__WEBPACK_IMPORTED_MODULE_3__.UserChallengesComponent], imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfileRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__.MatDividerModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule], exports: [_profile_profile_component__WEBPACK_IMPORTED_MODULE_1__.ProfileComponent] }); })();


/***/ }),

/***/ 4179:
/*!**************************************************************!*\
  !*** ./src/app/modules/profile/profile/profile.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/layout/layout.component */ 4325);




class ProfileComponent {
    constructor() {
        this.profileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({
            nom: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(20),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.pattern(/^[a-z0-9]+$/),
            ])
        });
    }
    ngOnInit() {
    }
    onSubmit() {
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(); };
ProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 7, vars: 1, consts: [[1, "profile"], [1, "profile__title"], [1, "profile__form", 3, "formGroup", "ngSubmit"], [1, "profile__btn", "main-btn"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ProfileComponent_Template_form_ngSubmit_4_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Sauvegarder");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.profileForm);
    } }, directives: [_shared_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective], styles: [".profile[_ngcontent-%COMP%] {\n  margin: 2rem auto;\n  padding: 2rem;\n  border-radius: 3px;\n  width: clamp(400px, 80%, 1400px);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.profile__title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 2rem;\n  margin-top: 1rem;\n}\n.profile__item[_ngcontent-%COMP%] {\n  margin: 1rem;\n}\n.profile__btn[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUVJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFBUjtBQUlJO0VBQ0ksWUFBQTtBQUZSO0FBS0k7RUFDSSxnQkFBQTtBQUhSIiwiZmlsZSI6InByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZSB7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleS0yMDApO1xuICAgIG1hcmdpbjogMnJlbSBhdXRvO1xuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIHdpZHRoOiBjbGFtcCg0MDBweCwgODAlLCAxNDAwcHgpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgJl9fdGl0bGUge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgLy8gY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICB9XG5cbiAgICAmX19pdGVtIHtcbiAgICAgICAgbWFyZ2luOiAxcmVtO1xuICAgIH1cblxuICAgICZfX2J0biB7XG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 1477:
/*!******************************************************************************!*\
  !*** ./src/app/modules/profile/user-challenges/user-challenges.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserChallengesComponent": () => (/* binding */ UserChallengesComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8636);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_core_services_challenge_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/challenge.service */ 1773);
/* harmony import */ var src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/user.service */ 8386);
/* harmony import */ var _shared_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/layout/layout.component */ 4325);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ 1124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _shared_components_challenge_card_challenge_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/challenge-card/challenge-card.component */ 9334);










function UserChallengesComponent_app_challenge_card_13_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-challenge-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("challengeDeleted", function UserChallengesComponent_app_challenge_card_13_Template_app_challenge_card_challengeDeleted_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r2.onChallengeDeleted(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const challenge_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("challenge", challenge_r1);
} }
const _c0 = function () { return ["/game/create"]; };
class UserChallengesComponent {
    constructor(challengesService, userService) {
        this.challengesService = challengesService;
        this.userService = userService;
    }
    ngOnInit() {
        this.userId = this.userService.userId;
        this.userService
            .getOne(this.userId)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(x => console.log(x))
        // pluck('challenges'),
        // mergeMap((arr) =>
        //   forkJoin(arr.map((chal) => this.challengesService.getOne(chal.id)))
        // )
        )
            .subscribe((result) => {
            this.userChallenges = result;
        });
    }
    onChallengeDeleted() {
        this.ngOnInit();
    }
}
UserChallengesComponent.ɵfac = function UserChallengesComponent_Factory(t) { return new (t || UserChallengesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_challenge_service__WEBPACK_IMPORTED_MODULE_0__.ChallengeService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService)); };
UserChallengesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: UserChallengesComponent, selectors: [["app-user-challenges"]], decls: 14, vars: 3, consts: [[1, "home"], [1, "home__section", "container"], [1, "box"], ["mat-raised-button", "", "color", "primary", 3, "routerLink"], [1, "challenges"], [3, "challenge", "challengeDeleted", 4, "ngFor", "ngForOf"], [3, "challenge", "challengeDeleted"]], template: function UserChallengesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Cr\u00E9er un challenge");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "C'est partis");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Mes challenges publi\u00E9s");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, UserChallengesComponent_app_challenge_card_13_Template, 1, 1, "app-challenge-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.userChallenges);
    } }, directives: [_shared_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__.LayoutComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__.MatDivider, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _shared_components_challenge_card_challenge_card_component__WEBPACK_IMPORTED_MODULE_3__.ChallengeCardComponent], styles: [".challenges[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  grid-gap: 2rem;\n  gap: 2rem;\n}\n.challenges__show[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.home[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n.home__section[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  padding-bottom: 9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItY2hhbGxlbmdlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSwyREFBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0FBQ0o7QUFDSTtFQUNJLFVBQUE7QUFDUjtBQUdBO0VBQ0ksZ0JBQUE7QUFBSjtBQUVJO0VBQ0ksZ0JBQUE7RUFDQSxvQkFBQTtBQUFSIiwiZmlsZSI6InVzZXItY2hhbGxlbmdlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGFsbGVuZ2VzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xuICAgIGdhcDogMnJlbTtcblxuICAgICZfX3Nob3cge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgIH1cbn1cblxuLmhvbWUge1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgXG4gICAgJl9fc2VjdGlvbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA5cmVtO1xuICAgIH1cblxufSJdfQ== */"] });


/***/ }),

/***/ 9334:
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/challenge-card/challenge-card.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChallengeCardComponent": () => (/* binding */ ChallengeCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_core_services_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/storage.service */ 2323);
/* harmony import */ var src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/user.service */ 8386);
/* harmony import */ var src_app_core_services_challenge_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/challenge.service */ 1773);
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/auth.service */ 384);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ 181);











function ChallengeCardComponent_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 12);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r0.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function ChallengeCardComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-spinner", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/game/play", a1]; };
class ChallengeCardComponent {
    constructor(storage, userService, challengeService, authService) {
        this.storage = storage;
        this.userService = userService;
        this.challengeService = challengeService;
        this.authService = authService;
        this.challengeDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    }
    ngOnInit() {
        this.userId = this.userService.userId;
        // Get the image Url
        this.storage
            .downloadViaUrl(this.challenge.imgId)
            .subscribe((x) => (this.imgUrl = x));
        // Get the creator name and email
        // this.userService
        //   .getOne(this.challenge.creatorId)
        //   .pipe(
        //     tap(challenge => console.log(challenge)),
        //     pluck('username'),
        //   )
        //   .subscribe((x) => {
        //     this.creatorName = x;
        //   });
    }
    onDelete() {
        this.challengeService.delete(this.challenge.id).subscribe(() => {
            this.challengeDeleted.emit('Challenge supprimé');
        });
    }
}
ChallengeCardComponent.ɵfac = function ChallengeCardComponent_Factory(t) { return new (t || ChallengeCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_challenge_service__WEBPACK_IMPORTED_MODULE_2__.ChallengeService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService)); };
ChallengeCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ChallengeCardComponent, selectors: [["app-challenge-card"]], inputs: { challenge: "challenge" }, outputs: { challengeDeleted: "challengeDeleted" }, decls: 19, vars: 9, consts: [[1, "challenge"], ["mat-card-image", "", "class", "challenge__img", "alt", "image challenge", 3, "src", 4, "ngIf"], ["class", "challenge__credentials", 4, "ngIf"], [1, "challenge__content"], [1, "challenge__credentials"], [1, "challenge__title", "font-white"], [1, "challenge__bio", "font-white"], [1, "challenge__footer"], [1, "challenge__auth", "font-white"], [1, "challenge__actions"], ["mat-flat-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "challenge__btn", 3, "routerLink"], ["mat-card-image", "", "alt", "image challenge", 1, "challenge__img", 3, "src"], [1, "challenge__spinner"]], template: function ChallengeCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ChallengeCardComponent_img_1_Template, 1, 1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ChallengeCardComponent_div_2_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-card-actions", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ChallengeCardComponent_Template_button_click_15_listener() { return ctx.onDelete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Supprimer");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "R\u00E9soudre");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.imgUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.imgUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.challenge.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.creatorEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.challenge.description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.challenge.creatorId, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](7, _c0, ctx.challenge.id));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardImage, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__.MatSpinner], styles: [".challenge[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.challenge__placholder[_ngcontent-%COMP%] {\n  height: 5000px;\n  color: red;\n}\n.challenge__spinner[_ngcontent-%COMP%] {\n  margin: 3rem auto;\n}\n.challenge__content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n  flex: 1;\n}\n.challenge__title[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.challenge__footer[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n.challenge__btn[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n.challenge__actions[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  align-self: flex-end;\n  justify-self: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYWxsZW5nZS1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZ0JBQUE7QUFBSjtBQUVJO0VBQ0ksY0FBQTtFQUNBLFVBQUE7QUFBUjtBQUVJO0VBRUksaUJBQUE7QUFEUjtBQUlJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtBQUZSO0FBTUk7RUFDSSxtQkFBQTtBQUpSO0FBT0k7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0FBTFI7QUFRSTtFQUNJLGdCQUFBO0FBTlI7QUFTSTtFQUNJLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtBQVBSIiwiZmlsZSI6ImNoYWxsZW5nZS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYWxsZW5nZSB7XG5cbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgJl9fcGxhY2hvbGRlciB7XG4gICAgICAgIGhlaWdodDogNTAwMHB4O1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgIH1cbiAgICAmX19zcGlubmVyIHtcblxuICAgICAgICBtYXJnaW46IDNyZW0gYXV0bztcbiAgICB9XG4gICAgXG4gICAgJl9fY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBmbGV4OjE7XG4gICAgfVxuXG5cbiAgICAmX190aXRsZSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgfVxuXG4gICAgJl9fZm9vdGVyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgfVxuXG4gICAgJl9fYnRuIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICB9XG5cbiAgICAmX19hY3Rpb25zIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XG4gICAgfVxuXG59Il19 */"] });


/***/ }),

/***/ 3495:
/*!************************************************************************!*\
  !*** ./src/app/shared/components/code-editor/code-editor.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodeEditorComponent": () => (/* binding */ CodeEditorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ace_builds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ace-builds */ 6695);
/* harmony import */ var ace_builds__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ace_builds__WEBPACK_IMPORTED_MODULE_0__);



const _c0 = ["editor"];
class CodeEditorComponent {
    constructor() {
        this.mode = "";
        this.codeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngAfterViewInit() {
        ace_builds__WEBPACK_IMPORTED_MODULE_0__.config.set("fontSize", "17px");
        ace_builds__WEBPACK_IMPORTED_MODULE_0__.config.set('basePath', 'https://unpkg.com/ace-builds@1.4.12/src-noconflict');
        const editor = ace_builds__WEBPACK_IMPORTED_MODULE_0__.edit(this.editor.nativeElement);
        const session = editor.getSession();
        // Nice themes : v, merbivore, nord_dark
        editor.setTheme('ace/theme/merbivore_soft');
        editor.session.setMode(`ace/mode/${this.mode}`);
        editor.on("change", () => {
            this.codeChange.emit(editor.getValue());
        });
        editor.setValue(this.starterCode, 1);
        session.setUseWorker(false);
    }
}
CodeEditorComponent.ɵfac = function CodeEditorComponent_Factory(t) { return new (t || CodeEditorComponent)(); };
CodeEditorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CodeEditorComponent, selectors: [["app-code-editor"]], viewQuery: function CodeEditorComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.editor = _t.first);
    } }, inputs: { mode: "mode", starterCode: "starterCode" }, outputs: { codeChange: "codeChange" }, decls: 2, vars: 0, consts: [[1, "ace-editor"], ["editor", ""]], template: function CodeEditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0, 1);
    } }, styles: ["[_nghost-%COMP%] {\n  position: relative;\n  width: 50%;\n}\n\n.ace-editor[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 85vh;\n  position: absolute;\n  \n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvZGUtZWRpdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FBREY7O0FBSUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQW9CLFVBQUE7RUFDcEIsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtBQUFGIiwiZmlsZSI6ImNvZGUtZWRpdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gU2VlIHRoZSBBY2UgZWRpdG9yIGN1c3RvbSBDU1MgaW4gdGhlIHN0eWxlcy5zY2NzIGZpbGVcblxuOmhvc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5hY2UtZWRpdG9yIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODV2aDtcbiAgcG9zaXRpb246IGFic29sdXRlOyAvKiBBZGRlZCAqL1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG59XG4iXX0= */"] });


/***/ }),

/***/ 6526:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ 4106);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);



const _c0 = function () { return ["/home"]; };
class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 11, vars: 2, consts: [[1, "footer"], [1, "footer__content"], [1, "footer__logo"], [1, "footer__items"], [1, "footer__item"], [3, "routerLink"], ["target", "blank", "href", "https://github.com/Antoine-Flo/front-end-battle"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "footer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u00A92021 Front-End Battle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Accueil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__.MatToolbar, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], styles: [".footer[_ngcontent-%COMP%] {\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n}\n.footer__content[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.footer__items[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n}\n.footer__item[_ngcontent-%COMP%] {\n  margin: 0 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFBSjtBQUVJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBQVI7QUFHSTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtBQURSO0FBSUk7RUFDSSxjQUFBO0FBRlIiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XG5cbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuXG4gICAgJl9fY29udGVudCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxuXG4gICAgJl9faXRlbXMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICB9XG5cbiAgICAmX19pdGVtIHtcbiAgICAgICAgbWFyZ2luOiAwIDIwcHg7XG4gICAgfVxuXG59XG5cbiJdfQ== */"] });


/***/ }),

/***/ 4325:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/layout/layout.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutComponent": () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../nav/nav.component */ 3749);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../footer/footer.component */ 6526);



const _c0 = ["*"];
class LayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(); };
LayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], ngContentSelectors: _c0, decls: 4, vars: 0, consts: [[1, "layout"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_0__.NavComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent], styles: [".layout[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFDSiIsImZpbGUiOiJsYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGF5b3V0IHtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59Il19 */"] });


/***/ }),

/***/ 312:
/*!************************************************************!*\
  !*** ./src/app/shared/components/modal/modal.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalComponent": () => (/* binding */ ModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ 2529);



const _c0 = [[["", "modalTitle", ""]], "*", [["", "modalFooter", ""]]];
const _c1 = ["[modalTitle]", "*", "[modalFooter]"];
class ModalComponent {
    constructor(el) {
        this.el = el;
        this.dismiss = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
        document.body.appendChild(this.el.nativeElement);
    }
    ngOnDestroy() {
        this.el.nativeElement.remove();
    }
    onDismissClick() {
        this.dismiss.emit();
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
ModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["app-modal"]], outputs: { dismiss: "dismiss" }, ngContentSelectors: _c1, decls: 10, vars: 0, consts: [[1, "modal-background", 3, "click"], [1, "modal", "mat-app-background", 3, "click"], [1, "modal__close", "font-white", 3, "click"], [1, "modal__header"], [1, "modal__content"], [1, "modal__footer"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_div_click_0_listener() { return ctx.onDismissClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_div_click_1_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_mat_icon_click_2_listener() { return ctx.onDismissClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](7, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](9, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIcon], styles: [".modal-background[_ngcontent-%COMP%] {\n  background-color: var(--transparent);\n  -webkit-backdrop-filter: blur(2px);\n          backdrop-filter: blur(2px);\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.modal[_ngcontent-%COMP%] {\n  position: absolute;\n  padding: 2rem;\n  border-radius: 5px;\n  background-color: #424242;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 9999;\n}\n\n.modal__close[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}\n\n.modal__content[_ngcontent-%COMP%] {\n  margin: 0 aut0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0NBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7QUFDSjs7QUFDSTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBQ1I7O0FBRUk7RUFDSSxjQUFBO0FBQVIiLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtYmFja2dyb3VuZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG59XG5cbi5tb2RhbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MjQyNDI7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHotaW5kZXg6IDk5OTk7XG5cbiAgICAmX19jbG9zZSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgIH1cblxuICAgICZfX2NvbnRlbnQge1xuICAgICAgICBtYXJnaW46IDAgYXV0MDtcbiAgICB9XG5cbn0iXX0= */"] });


/***/ }),

/***/ 3749:
/*!********************************************************!*\
  !*** ./src/app/shared/components/nav/nav.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavComponent": () => (/* binding */ NavComponent)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ 7199);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/auth/auth.service */ 384);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ 4106);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ 221);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ 1124);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 781);











function NavComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavComponent_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.openFullscreen(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "fullscreen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function NavComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.closeFullscreen(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "fullscreen_exit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function NavComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.changeToDark(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "light_mode");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function NavComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavComponent_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.changeToLight(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "bedtime");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function NavComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r5);
} }
const _c0 = function () { return ["/home"]; };
const _c1 = function () { return ["/profile"]; };
const _c2 = function () { return ["/profile/challenges"]; };
class NavComponent {
    constructor(document, auth, router) {
        this.document = document;
        this.auth = auth;
        this.router = router;
        this.theme = "dark";
        this.screen = "little";
    }
    ngOnInit() {
        this.user = firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.auth().currentUser;
        this.elem = document.documentElement;
    }
    onLogOut() {
        this.auth.logout().then(() => {
            this.router.navigate(['start']);
        });
    }
    changeToDark() {
        this.theme = "dark";
        const body = document.querySelector('body');
        body.classList.remove("light-theme");
    }
    changeToLight() {
        this.theme = "light";
        const body = document.querySelector('body');
        body.classList.add("light-theme");
    }
    // Code for full screen mode found here : https://imvikaskohli.medium.com/how-to-implement-fullscreen-mode-in-angular-fb9f55c24f67
    openFullscreen() {
        this.screen = "full";
        if (this.elem.requestFullscreen) {
            this.elem.requestFullscreen();
        }
        else if (this.elem.mozRequestFullScreen) {
            /* Firefox */
            this.elem.mozRequestFullScreen();
        }
        else if (this.elem.webkitRequestFullscreen) {
            /* Chrome, Safari and Opera */
            this.elem.webkitRequestFullscreen();
        }
        else if (this.elem.msRequestFullscreen) {
            /* IE/Edge */
            this.elem.msRequestFullscreen();
        }
    }
    /* Close fullscreen */
    closeFullscreen() {
        this.screen = "little";
        if (this.document.exitFullscreen) {
            this.document.exitFullscreen();
        }
        else if (this.document.mozCancelFullScreen) {
            /* Firefox */
            this.document.mozCancelFullScreen();
        }
        else if (this.document.webkitExitFullscreen) {
            /* Chrome, Safari and Opera */
            this.document.webkitExitFullscreen();
        }
        else if (this.document.msExitFullscreen) {
            /* IE/Edge */
            this.document.msExitFullscreen();
        }
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
NavComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], decls: 25, vars: 13, consts: [["color", "primary", 1, "nav"], [1, "nav__logo", 3, "routerLink"], [1, "items"], ["mat-button", "", 3, "click", 4, "ngIf"], ["mat-button", "", 3, "matMenuTriggerFor", 4, "ngIf"], ["xPosition", "before"], ["beforeMenu", "matMenu"], ["mat-menu-item", "", 3, "routerLink"], ["mat-menu-item", "", 3, "click"], ["mat-button", "", 3, "click"], ["mat-button", "", 3, "matMenuTriggerFor"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "FEB");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, NavComponent_button_5_Template, 3, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, NavComponent_button_6_Template, 3, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, NavComponent_button_7_Template, 3, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, NavComponent_button_8_Template, 3, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, NavComponent_button_9_Template, 3, 1, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-menu", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Accueil");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Mes challenges");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavComponent_Template_button_click_20_listener() { return ctx.onLogOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "power_settings_new");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Se d\u00E9connecter");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.screen === "little");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.screen === "full");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.theme === "light");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.theme === "dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](10, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](11, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](12, _c2));
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__.MatToolbar, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuItem, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__.MatDivider, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuTrigger], styles: [".nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem;\n}\n.nav__items[_ngcontent-%COMP%] {\n  margin-right: 2rem;\n  display: flex;\n}\n.nav__item[_ngcontent-%COMP%] {\n  margin-right: 2rem;\n}\n.nav__logo[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  color: var(--main-400);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtBQUFKO0FBRUk7RUFDSSxrQkFBQTtFQUNBLGFBQUE7QUFBUjtBQUdJO0VBQ0ksa0JBQUE7QUFEUjtBQUlJO0VBQ0ksaUJBQUE7RUFDQSxzQkFBQTtBQUZSIiwiZmlsZSI6Im5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYge1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAxcmVtO1xuXG4gICAgJl9faXRlbXMge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuXG4gICAgJl9faXRlbSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMnJlbTtcbiAgICB9XG5cbiAgICAmX19sb2dvIHtcbiAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgICAgIGNvbG9yOiB2YXIoLS1tYWluLTQwMCk7XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 9004:
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/page-not-found/page-not-found.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageNotFoundComponent": () => (/* binding */ PageNotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);



const _c0 = function () { return ["/home"]; };
class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 5, vars: 2, consts: [[1, "not-found"], [1, "not-found__txt"], ["mat-raised-button", "", "color", "primary", 3, "routerLink"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "D\u00E9sol\u00E9, cette page n'existe pas \uD83E\uDD14");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Revenir \u00E0 l'accueil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink], styles: [".not-found[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.not-found__txt[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n  text-align: center;\n  margin-top: 20vh;\n  font-family: sans-serif;\n  font-size: 2.4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjtBQUNFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQUNKIiwiZmlsZSI6InBhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdC1mb3VuZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAmX190eHQge1xuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDIwdmg7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAyLjRyZW07XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 8246:
/*!*******************************************!*\
  !*** ./src/app/shared/pipes/safe.pipe.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafePipe": () => (/* binding */ SafePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 1570);


class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
SafePipe.ɵfac = function SafePipe_Factory(t) { return new (t || SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16)); };
SafePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safe", type: SafePipe, pure: true });


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ 221);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/toolbar */ 4106);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/divider */ 1124);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-spinner */ 181);
/* harmony import */ var _components_code_editor_code_editor_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/code-editor/code-editor.component */ 3495);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/footer/footer.component */ 6526);
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/nav/nav.component */ 3749);
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/modal/modal.component */ 312);
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/layout/layout.component */ 4325);
/* harmony import */ var _components_challenge_card_challenge_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/challenge-card/challenge-card.component */ 9334);
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes/safe.pipe */ 8246);
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ 9004);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);




















class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenuModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__.MatToolbarModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardModule,
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__.MatDividerModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__.MatProgressSpinnerModule
        ], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_code_editor_code_editor_component__WEBPACK_IMPORTED_MODULE_0__.CodeEditorComponent,
        _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__.NavComponent,
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent,
        _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__.ModalComponent,
        _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_6__.SafePipe,
        _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__.LayoutComponent,
        _components_challenge_card_challenge_card_component__WEBPACK_IMPORTED_MODULE_5__.ChallengeCardComponent,
        _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__.PageNotFoundComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenuModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__.MatToolbarModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__.MatDividerModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__.MatProgressSpinnerModule], exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
        _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__.LayoutComponent,
        _components_code_editor_code_editor_component__WEBPACK_IMPORTED_MODULE_0__.CodeEditorComponent,
        _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__.NavComponent,
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent,
        _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__.ModalComponent,
        _components_challenge_card_challenge_card_component__WEBPACK_IMPORTED_MODULE_5__.ChallengeCardComponent] }); })();


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyA8shl3xSB0eoAn6UW8yLusXYLlrTvP1AA',
        authDomain: 'front-end-battle.firebaseapp.com',
        projectId: 'front-end-battle',
        storageBucket: 'front-end-battle.appspot.com',
        messagingSenderId: '702641835673',
        appId: '1:702641835673:web:2bd3fed247feb568813208',
        measurementId: 'G-CVW1DLM3XN',
    },
    api: {
        challenges: 'http://localhost:3000/challenges',
        users: 'http://localhost:3000/users'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map