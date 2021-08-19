(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "vJJY":
/*!****************************************************!*\
  !*** ./src/app/core/services/challenge.service.ts ***!
  \****************************************************/
/*! exports provided: ChallengeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengeService", function() { return ChallengeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class ChallengeService {
    constructor(http) {
        this.http = http;
        this.url = 'https://feb-api.com/challenges';
    }
    getOne(id) {
        return this.http.get(`${this.url}/${id}`);
    }
    getAll() {
        return this.http.get(this.url);
    }
    create(challenge) {
        return this.http.post(this.url, challenge);
    }
    update(id, challenge) {
        return this.http.patch(`${this.url}/${id}`, challenge);
    }
    delete(id) {
        return this.http.delete(`${this.url}/${id}`);
    }
}
ChallengeService.ɵfac = function ChallengeService_Factory(t) { return new (t || ChallengeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ChallengeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChallengeService, factory: ChallengeService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map