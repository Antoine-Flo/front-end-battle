"use strict";
(self["webpackChunkfront_end_battle"] = self["webpackChunkfront_end_battle"] || []).push([["common"],{

/***/ 1773:
/*!****************************************************!*\
  !*** ./src/app/core/services/challenge.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChallengeService": () => (/* binding */ ChallengeService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 3466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _uuid_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uuid.service */ 8225);




class ChallengeService {
    constructor(http, uuid) {
        this.http = http;
        this.uuid = uuid;
        this.url = 'https://feb-api.com/challenges';
    }
    getOne(id) {
        return this.http.get(`${this.url}/${id}`);
    }
    getAll() {
        return this.http.get(this.url);
    }
    create(challengeInfos) {
        const uuid = this.uuid.getId();
        const challenge = {
            id: uuid,
            title: challengeInfos.title,
            description: challengeInfos.description,
            code: challengeInfos.code,
            imgId: "notYet",
            creatorId: "almost"
        };
        console.log(challenge);
        return this.http.post(this.url, JSON.stringify(challenge)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1));
    }
    update(id, challenge) {
        return this.http.patch(`${this.url}/${id}`, challenge);
    }
    delete(id) {
        return this.http.delete(`${this.url}/${id}`);
    }
}
ChallengeService.ɵfac = function ChallengeService_Factory(t) { return new (t || ChallengeService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_uuid_service__WEBPACK_IMPORTED_MODULE_0__.UuidService)); };
ChallengeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ChallengeService, factory: ChallengeService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map