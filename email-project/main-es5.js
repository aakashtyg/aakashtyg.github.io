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

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/add-email/add-email.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/add-email/add-email.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui middle aligned center aligned grid container\">\n\t<div class=\"six wide column left aligned\" id=\"login-form-wrapper\">\n\t\t<form class=\"ui form\">\n\t\t\t<h1 class=\"ui header\">Add Email</h1>\n\t\t\t<app-error [error]=\"error\" [errorMessage]=\"errorMessage\"></app-error>\n\t\t  <div class=\"field\">\n\t\t    <label>Email to</label>\n\t\t    <input type=\"email\" name=\"to\" placeholder=\"john@gmail.com\" placeholder=\"John\" [(ngModel)]=\"to\">\n\t\t  </div>\n\t\t  <div class=\"field\">\n\t\t    <label>Email from</label>\n\t\t    <input type=\"email\" name=\"from\" placeholder=\"john@gmail.com\" [(ngModel)]=\"from\" autocomplete=\"off\">\n\t\t  </div>\n\t\t  <div class=\"field\">\n\t\t    <label>Subject</label>\n\t\t    <input type=\"text\" name=\"text\" placeholder=\"Add subject\" [(ngModel)]=\"subject\">\n\t\t  </div>\n\t\t  <div class=\"field\">\n\t\t    <label>Email body</label>\n\t\t    <textarea [(ngModel)]=\"body\" name=\"body\"></textarea>\n\t\t  </div>\n\t\t  <button class=\"ui button green\" type=\"submit\" (click)=\"addEmailToDB()\">\n\t\t  \t{{ loading ? 'Adding email...' : 'Add email' }}\n\t\t  </button>\n\t\t</form>\n\t</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/comment-item/comment-item.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/comment-item/comment-item.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"comment comment-item\">\n  <div class=\"content\">\n    <a class=\"author\">{{ reply.from_email || 'N.A.'}}</a>\n    <div class=\"metadata\">\n      <!-- <span class=\"date\">5 days ago</span> -->\n    </div>\n    <div class=\"text\">\n      {{ reply.text }}\n    </div>\n    <!-- <div class=\"actions\">\n      <a class=\"reply\">Reply</a>\n    </div> -->\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/comments-list/comments-list.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/comments-list/comments-list.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui comments\" style=\"max-width: initial !important;\">\n  <h3 class=\"ui dividing header\">Comments ({{ replies.length }})</h3>\n  <div class=\"ui negative message\" *ngIf=\"error\">\n    <div class=\"header\">Action Forbidden</div>\n    <p>{{ errorMessage }}</p>\n  </div>\n  <form class=\"ui reply form\">\n    <div class=\"field\">\n      <textarea [(ngModel)]=\"text\" name=\"text\"></textarea>\n    </div>\n    <button class=\"ui blue labeled submit icon button\" (click)=\"addReply()\">\n      <i class=\"icon edit\"></i> Add Reply\n    </button>\n  </form>\n  <app-comment-item *ngFor=\"let reply of replies\" [reply]=\"reply\"></app-comment-item>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/email-detail/email-detail.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/email-detail/email-detail.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui middle aligned center aligned grid container email-detail\">\n\t<div class=\"twelve wide column left aligned\">\n\t\t<div *ngIf=\"(email | json) === '{}'\">\n\t\t\tSorry, no email found\n\t\t</div>\n\t\t<div style=\"margin-bottom: 10px\">\n\t\t\t<a routerLink=\"/home\">Go back</a>\n\t\t</div>\n\t\t<div class=\"email-detail-item\" *ngIf=\"(email | json) !== '{}'\">\n\t\t\t<h1 class=\"ui header\">{{ email.subject }}</h1>\n\t\t\t<div class=\"ui feed\">\n\t\t\t\t<div class=\"ui feed\">\n\t\t\t\t\t<div class=\"event\">\n\t\t\t\t\t  <div class=\"content\">\n\t\t\t\t\t    <div class=\"summary\">\n\t\t\t\t\t      <div style=\"position: absolute;top: 56px;right: 21px;\">\n\t\t\t\t\t        <a class=\"ui tag label right\" *ngIf=\"email.status !== 'replied'\">New</a>\n\t\t\t\t\t        <a class=\"ui tag teal label right\" *ngIf=\"email.status === 'replied'\">Replied</a>\n\t\t\t\t\t      </div>\n\t\t\t\t\t      <div class=\"date tofrom\">To: {{ email.to }}</div>\n\t\t\t\t\t      <div class=\"date tofrom\">From: {{ email.from }}</div>\n\t\t\t\t\t      <div class=\"date tofrom\">Assigned to: {{ email.assigned_to || 'None'}}</div>\n\t\t\t\t\t    </div>\n\t\t\t\t\t    <div class=\"extra text\" style=\"margin: 10px 0;font-size: 21px;\">\n\t\t\t\t\t      <p>{{ email.text }}</p>\n\t\t\t\t\t    </div>\n\t\t\t\t\t    <div *ngIf=\"userData.role === 'admin'\">\n\t\t\t\t\t    \t<label class=\"ui button blue\" for=\"modal-1\">Assign email to Staff</label>\n\t\t\t\t\t    </div>\n\t\t\t\t\t    <!-- <div class=\"meta\">\n\t\t\t\t\t      <a class=\"like\">\n\t\t\t\t\t        <i class=\"like icon\"></i> 5 Likes\n\t\t\t\t\t      </a>\n\t\t\t\t\t    </div> -->\n\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<input class=\"modal-state\" id=\"modal-1\" type=\"checkbox\" />\n\t<div class=\"modal\" *ngIf=\"userData.role === 'admin'\">\n\t  <label class=\"modal__bg\" for=\"modal-1\"></label>\n\t  <div class=\"modal__inner\">\n\t    <label class=\"modal__close\" for=\"modal-1\" (click)=\"setModalError(false)\"></label>\n\t    <h2>Assign email to Staff</h2>\n\t\t  <div>\n\t\t  \t<form class=\"ui form\">\n\t\t  \t\t<app-error [error]=\"error\" [errorMessage]=\"errorMessage\"></app-error>\n\t\t\t\t  <div class=\"field\">\n\t\t\t\t    <input type=\"text\" name=\"search\" placeholder=\"Search user by email\" [(ngModel)]=\"searchText\" autocomplete=\"off\">\n\t\t\t\t  </div>\n\t\t\t\t</form>\n\t\t\t\t<div class=\"users-list\">\n\t\t\t\t\t<!-- <div class=\"user-item\" *ngIf=\"usersList?.length === 0\">No emails found</div> -->\n\t\t\t\t\t<div class=\"user-item\" *ngFor=\"let user of usersList | filter :'email' : searchText : 'includes'\" (click)=\"selectUserToEmail(user)\">{{ user.email }} ({{ user.user_role }})</div>\n\t\t\t\t</div>\n\t\t\t\t<div style=\"margin-top: 20px\">\n\t\t\t\t\t<span style=\"color: #999;font-size: 17px;\">Selected user:</span> {{ selectedUser ? selectedUser.email : 'None'}}\n\t\t\t\t</div>\n\t\t\t\t<div class=\"ui blue button\" (click)=\"assignUserToEmail()\" style=\"margin-top: 20px\">Assign Staff</div>\n\t\t  </div>\n\t  </div>\n\t</div>\n\n\t<div class=\"twelve wide column left aligned\" *ngIf=\"(email | json) !== '{}'\">\n\t\t<app-comments-list [emailId]=\"email.id\" [replies]=\"replies\" (addToReplies)=\"addToReplies($event)\"></app-comments-list>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/email-item/email-item.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/email-item/email-item.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"event\">\n  <div class=\"content\">\n    <div class=\"summary\">\n      <div style=\"display: flex;justify-content: space-between;align-items: baseline;\">\n        <a class=\"email-item-link\" [routerLink]=\"['/emails', email.id]\">\n          <h2 class=\"ui header\">\n            {{ email.subject }}\n          </h2>\n        </a>\n        <a class=\"ui tag label right\" *ngIf=\"email.status === 'pending' || email.status === null \">New</a>\n        <a class=\"ui tag teal label right\" *ngIf=\"email.status === 'replied'\">Replied</a>\n      </div>\n      <div class=\"date\" style=\"color: rgba(0,0,0,.6)\">To: {{ email.to }}</div>\n      <div class=\"date\" style=\"color: rgba(0,0,0,.6)\">From: {{ email.from }}</div>\n      <!-- <div class=\"date\">3 days ago</div> -->\n    </div>\n    <div class=\"extra text\" style=\"margin: 10px 0;font-size: 16px;\">\n      <p>{{ email.text }}</p>\n    </div>\n    <!-- <div class=\"meta\">\n      <a class=\"like\">\n        <i class=\"like icon\"></i> 5 Likes\n      </a>\n    </div> -->\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/email-list/email-list.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/email-list/email-list.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"email-list\">\n\t<h1 class=\"ui header\">Your Emails</h1>\n\t<p *ngIf=\"emails?.length === 0\">Sorry, no emails found!</p>\n\t<div class=\"ui feed\" *ngIf=\"emails?.length > 0\">\n\t\t<app-email-item *ngFor=\"let email of emails | paginate: config\" [email]=\"email\"></app-email-item>\n\n\t\t<pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n\t</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/error/error.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/error/error.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui negative message error-box\" *ngIf=\"error\">\n  <div class=\"header\">Action Forbidden</div>\n  <p>{{ errorMessage }}</p>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/header/header.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui small menu\">\n  <div class=\"item\">\n    EmailManager\n  </div>\n  <a class=\"active item\" routerLink=\"/home\" *ngIf=\"loggedIn\">\n    Home\n  </a>\n  <div class=\"right menu\">\n    <div class=\"item\" *ngIf=\"loggedIn\">\n      <div class=\"ui primary button\" (click)=\"logout()\">Logout</div>\n    </div>\n\n    <div class=\"item\" *ngIf=\"loggedIn\">\n      <div class=\"ui red button\" (click)=\"clearLocalStorage()\">Clear Local</div>\n    </div>\n\n    <div class=\"item\" *ngIf=\"loggedIn && userData.role === 'admin'\">\n      <a class=\"ui green button\" routerLink=\"/add-email\">Add Email</a>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/home.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui middle aligned center aligned grid container home\">\n\t<div class=\"twelve wide column left aligned\">\n\t\t<app-email-list></app-email-list>\n\t</div>\n\n\t<div class=\"ui modal\">\n\t  <div class=\"header\">Header</div>\n\t  <div class=\"scrolling content\">\n\t    <p>Very long content goes here</p>\n\t  </div>\n\t</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/login/login.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui middle aligned center aligned grid container\">\n\t<div class=\"six wide column left aligned\" id=\"login-form-wrapper\">\n\t\t<form class=\"ui form\">\n\t\t\t<h1 class=\"ui header\">Login</h1>\n\t\t  <app-error [error]=\"error\" [errorMessage]=\"errorMessage\"></app-error>\n\t\t  <div class=\"field\">\n\t\t    <label>Email</label>\n\t\t    <input type=\"text\" name=\"email\" placeholder=\"john@gmail.com\" [(ngModel)]=\"email\" autocomplete=\"off\">\n\t\t  </div>\n\t\t  <div class=\"field\">\n\t\t    <label>Password</label>\n\t\t    <input type=\"password\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\">\n\t\t  </div>\n\t\t  <button class=\"ui button green\" type=\"submit\" (click)=\"login()\">\n\t\t  \t{{ !loading ? 'Login' : 'Logging in..' }}\n\t\t  </button>\n\t\t  <div class=\"field\" style=\"margin-top: 20px\">Not a user? <a routerLink=\"/signup\">Signup</a></div>\n\t\t</form>\n\t</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/signup/signup.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/signup/signup.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui middle aligned center aligned grid container\">\n\t<div class=\"six wide column left aligned\" id=\"login-form-wrapper\">\n\t\t<form class=\"ui form\">\n\t\t\t<h1 class=\"ui header\">Sign up</h1>\n\t\t\t<app-error [error]=\"error\" [errorMessage]=\"errorMessage\"></app-error>\n\t\t  <div class=\"field\">\n\t\t    <label>Name</label>\n\t\t    <input type=\"text\" name=\"name\" placeholder=\"John\" [(ngModel)]=\"name\">\n\t\t  </div>\n\t\t  <div class=\"field\">\n\t\t    <label>Email</label>\n\t\t    <input type=\"text\" name=\"email\" placeholder=\"john@gmail.com\" [(ngModel)]=\"email\" autocomplete=\"off\">\n\t\t  </div>\n\t\t  <div class=\"field\">\n\t\t    <label>Password</label>\n\t\t    <input type=\"password\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\">\n\t\t  </div>\n\t\t  <div class=\"field\">\n\t\t    <label>Confirm Password</label>\n\t\t    <input type=\"password\" name=\"confirm-password\" placeholder=\"Confirm password\" [(ngModel)]=\"confirmPassword\">\n\t\t  </div>\n\t\t  <div class=\"field\">\n\t\t    <label>User Role</label>\n\t\t    <select style=\"height: 38px; outline: none\" (change)=\"setSelectedUserRole($event)\">\n\t\t    \t<option value=\"\" disabled selected>Select your option</option>\n\t\t    \t<option *ngFor=\"let option of dropDownOptions\">\n\t\t\t\t     {{ option.name }}\n\t\t\t\t  </option>\n\t\t    </select>\n\t\t  </div>\n\t\t  <button class=\"ui button green\" type=\"submit\" (click)=\"signup()\">\n\t\t  \t{{ loading ? 'Signing up...' : 'Sign up' }}\n\t\t  </button>\n\t\t  <div class=\"field\" style=\"margin-top: 20px\">Already a user? <a routerLink=\"/login\">Login</a></div>\n\t\t</form>\n\t</div>\n</div>"

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
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_email_detail_email_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/email-detail/email-detail.component */ "./src/app/components/email-detail/email-detail.component.ts");
/* harmony import */ var _components_add_email_add_email_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/add-email/add-email.component */ "./src/app/components/add-email/add-email.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");









var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'signup', component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] },
    { path: 'add-email', component: _components_add_email_add_email_component__WEBPACK_IMPORTED_MODULE_7__["AddEmailComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'emails/:emailId', component: _components_email_detail_email_detail_component__WEBPACK_IMPORTED_MODULE_6__["EmailDetailComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] }
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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'email-manager-frontend';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _components_email_list_email_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/email-list/email-list.component */ "./src/app/components/email-list/email-list.component.ts");
/* harmony import */ var _components_email_item_email_item_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/email-item/email-item.component */ "./src/app/components/email-item/email-item.component.ts");
/* harmony import */ var _components_email_detail_email_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/email-detail/email-detail.component */ "./src/app/components/email-detail/email-detail.component.ts");
/* harmony import */ var _components_comments_list_comments_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/comments-list/comments-list.component */ "./src/app/components/comments-list/comments-list.component.ts");
/* harmony import */ var _components_comment_item_comment_item_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/comment-item/comment-item.component */ "./src/app/components/comment-item/comment-item.component.ts");
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/error/error.component */ "./src/app/components/error/error.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _filters_filter_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./filters/filter.pipe */ "./src/app/filters/filter.pipe.ts");
/* harmony import */ var _components_add_email_add_email_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/add-email/add-email.component */ "./src/app/components/add-email/add-email.component.ts");





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _components_email_list_email_list_component__WEBPACK_IMPORTED_MODULE_12__["EmailListComponent"],
                _components_email_item_email_item_component__WEBPACK_IMPORTED_MODULE_13__["EmailItemComponent"],
                _components_email_detail_email_detail_component__WEBPACK_IMPORTED_MODULE_14__["EmailDetailComponent"],
                _components_comments_list_comments_list_component__WEBPACK_IMPORTED_MODULE_15__["CommentsListComponent"],
                _components_comment_item_comment_item_component__WEBPACK_IMPORTED_MODULE_16__["CommentItemComponent"],
                _components_error_error_component__WEBPACK_IMPORTED_MODULE_17__["ErrorComponent"],
                _filters_filter_pipe__WEBPACK_IMPORTED_MODULE_19__["FilterPipe"],
                _components_add_email_add_email_component__WEBPACK_IMPORTED_MODULE_20__["AddEmailComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_18__["NgxPaginationModule"]
            ],
            providers: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/add-email/add-email.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/add-email/add-email.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLWVtYWlsL2FkZC1lbWFpbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/add-email/add-email.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/add-email/add-email.component.ts ***!
  \*************************************************************/
/*! exports provided: AddEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEmailComponent", function() { return AddEmailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AddEmailComponent = /** @class */ (function () {
    function AddEmailComponent(auth, api, router) {
        this.auth = auth;
        this.api = api;
        this.router = router;
        this.loading = false;
        this.errorMessage = '';
        this.error = false;
    }
    AddEmailComponent.prototype.ngOnInit = function () {
        if (this.auth.currentUserData && this.auth.currentUserData.role !== 'admin') {
            this.router.navigate(['/home']);
        }
    };
    // set error
    AddEmailComponent.prototype.setError = function (shouldSetError, errorText) {
        if (errorText === void 0) { errorText = ''; }
        this.error = shouldSetError;
        this.errorMessage = errorText;
    };
    // add email to db
    AddEmailComponent.prototype.addEmailToDB = function () {
        var _this = this;
        var obj = {
            to: this.to,
            from: this.from,
            subject: this.subject,
            text: this.body
        };
        // throw errow if email or password is missing
        if (!obj.to || !obj.from || !obj.subject || !obj.text) {
            this.setError(true, 'Please fill out all the fields');
            return;
        }
        this.loading = true;
        this.setError(false);
        // make api call for login
        this._subscription =
            this.api.postEmailToDB(obj)
                .subscribe(function (data) {
                _this.loading = false;
                alert('Email added successfully');
            }, function (error) {
                _this.loading = false;
                _this.setError(true, error.error.message || 'Something went wrong');
            });
    };
    AddEmailComponent.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    AddEmailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-email',
            template: __webpack_require__(/*! raw-loader!./add-email.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/add-email/add-email.component.html"),
            styles: [__webpack_require__(/*! ./add-email.component.css */ "./src/app/components/add-email/add-email.component.css")]
        })
    ], AddEmailComponent);
    return AddEmailComponent;
}());



/***/ }),

/***/ "./src/app/components/comment-item/comment-item.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/comment-item/comment-item.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tbWVudC1pdGVtL2NvbW1lbnQtaXRlbS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/comment-item/comment-item.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/comment-item/comment-item.component.ts ***!
  \*******************************************************************/
/*! exports provided: CommentItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentItemComponent", function() { return CommentItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CommentItemComponent = /** @class */ (function () {
    function CommentItemComponent() {
    }
    CommentItemComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CommentItemComponent.prototype, "reply", void 0);
    CommentItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-comment-item',
            template: __webpack_require__(/*! raw-loader!./comment-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/comment-item/comment-item.component.html"),
            styles: [__webpack_require__(/*! ./comment-item.component.css */ "./src/app/components/comment-item/comment-item.component.css")]
        })
    ], CommentItemComponent);
    return CommentItemComponent;
}());



/***/ }),

/***/ "./src/app/components/comments-list/comments-list.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/comments-list/comments-list.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tbWVudHMtbGlzdC9jb21tZW50cy1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/comments-list/comments-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/comments-list/comments-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: CommentsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsListComponent", function() { return CommentsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");



var CommentsListComponent = /** @class */ (function () {
    function CommentsListComponent(api) {
        this.api = api;
        this.addToReplies = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.error = false;
    }
    CommentsListComponent.prototype.ngOnInit = function () { };
    CommentsListComponent.prototype.setError = function (shouldSetError, errorText) {
        if (errorText === void 0) { errorText = ''; }
        this.error = shouldSetError;
        this.errorMessage = errorText;
    };
    CommentsListComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component destroyed
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    };
    // add reply to email by calling the api
    CommentsListComponent.prototype.addReply = function () {
        var _this = this;
        var obj = {
            email_id: this.emailId,
            text: this.text
        };
        // throw errow if email id not found or reply is empty
        if (!obj.email_id || !obj.text) {
            this.setError(true, 'Please fill the text');
            return;
        }
        this.setError(false);
        // make api call for login
        this._subscription =
            this.api.postReply(obj)
                .subscribe(function (data) {
                _this.text = '';
                _this.addToReplies.emit(data);
            }, function (error) {
                _this.setError(true, error.error.message);
            });
    };
    CommentsListComponent.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CommentsListComponent.prototype, "emailId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CommentsListComponent.prototype, "replies", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], CommentsListComponent.prototype, "addToReplies", void 0);
    CommentsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-comments-list',
            template: __webpack_require__(/*! raw-loader!./comments-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/comments-list/comments-list.component.html"),
            styles: [__webpack_require__(/*! ./comments-list.component.css */ "./src/app/components/comments-list/comments-list.component.css")]
        })
    ], CommentsListComponent);
    return CommentsListComponent;
}());



/***/ }),

/***/ "./src/app/components/email-detail/email-detail.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/email-detail/email-detail.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1haWwtZGV0YWlsL2VtYWlsLWRldGFpbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/email-detail/email-detail.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/email-detail/email-detail.component.ts ***!
  \*******************************************************************/
/*! exports provided: EmailDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailDetailComponent", function() { return EmailDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");





var EmailDetailComponent = /** @class */ (function () {
    function EmailDetailComponent(route, api, auth) {
        this.route = route;
        this.api = api;
        this.auth = auth;
        this.email = {};
        this.replies = [];
    }
    EmailDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get user data from the service
        this.userData = this.auth.currentUserData;
        // after getting the emailId from params, get that email data from the api
        this.route.paramMap.subscribe(function (params) {
            _this.emailId = params.get('emailId');
            _this._emailsSubscription =
                _this.api.fetchEmail(_this.emailId)
                    .subscribe(function (resp) {
                    _this.email = resp.data;
                    _this.replies = resp.replies;
                }, function (error) {
                    console.log('error', error);
                });
        });
        // if th user is 'admin' only then get all users for the admin to assign to the email
        if (this.userData.role === 'admin') {
            this._usersSubscription =
                this.api.getAllUsers()
                    .subscribe(function (resp) {
                    _this.usersList = resp;
                }, function (error) {
                    console.log('error', error);
                });
        }
    };
    EmailDetailComponent.prototype.ngOnDestroy = function () {
        if (this._emailsSubscription) {
            this._emailsSubscription.unsubscribe();
        }
        if (this._usersSubscription) {
            this._usersSubscription.unsubscribe();
        }
    };
    // add reply to ui
    EmailDetailComponent.prototype.addToReplies = function (reply) {
        // change email status to replied as well in ui, as this is called only when the
        // api call is successful
        this.email.status = 'replied';
        this.replies.push(reply);
    };
    // select yser from the dropdown
    EmailDetailComponent.prototype.selectUserToEmail = function (user) {
        this.selectedUser = user;
    };
    // set modal errors
    EmailDetailComponent.prototype.setModalError = function (shouldSetError, errorText) {
        if (errorText === void 0) { errorText = ''; }
        this.error = shouldSetError;
        this.errorMessage = errorText;
    };
    // call api to assign the user to the email
    EmailDetailComponent.prototype.assignUserToEmail = function (user) {
        var _this = this;
        if (!this.selectedUser) {
            this.setModalError(true, 'Please select a user');
            return;
        }
        // data to be sent to the api
        var obj = {
            email_id: this.emailId,
            user_id: this.selectedUser.id
        };
        this.setModalError(false);
        this._emailsSubscription =
            this.api.assignEmailToUser(obj)
                .subscribe(function (resp) {
                if (resp.success) {
                    // change in ui
                    _this.email.assigned_to = _this.selectedUser.email;
                    // close modal
                    _this.closeModal();
                }
            }, function (error) {
                console.log('error', error);
            });
    };
    // close the modal
    EmailDetailComponent.prototype.closeModal = function () {
        document.getElementById('modal-1').click();
    };
    EmailDetailComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
    ]; };
    EmailDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-email-detail',
            template: __webpack_require__(/*! raw-loader!./email-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/email-detail/email-detail.component.html"),
            styles: [__webpack_require__(/*! ./email-detail.component.css */ "./src/app/components/email-detail/email-detail.component.css")]
        })
    ], EmailDetailComponent);
    return EmailDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/email-item/email-item.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/email-item/email-item.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1haWwtaXRlbS9lbWFpbC1pdGVtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/email-item/email-item.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/email-item/email-item.component.ts ***!
  \***************************************************************/
/*! exports provided: EmailItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailItemComponent", function() { return EmailItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmailItemComponent = /** @class */ (function () {
    function EmailItemComponent() {
    }
    EmailItemComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], EmailItemComponent.prototype, "email", void 0);
    EmailItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-email-item',
            template: __webpack_require__(/*! raw-loader!./email-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/email-item/email-item.component.html"),
            styles: [__webpack_require__(/*! ./email-item.component.css */ "./src/app/components/email-item/email-item.component.css")]
        })
    ], EmailItemComponent);
    return EmailItemComponent;
}());



/***/ }),

/***/ "./src/app/components/email-list/email-list.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/email-list/email-list.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1haWwtbGlzdC9lbWFpbC1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/email-list/email-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/email-list/email-list.component.ts ***!
  \***************************************************************/
/*! exports provided: EmailListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailListComponent", function() { return EmailListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");



var PaginationConfig = /** @class */ (function () {
    function PaginationConfig() {
    }
    return PaginationConfig;
}());
var EmailListComponent = /** @class */ (function () {
    function EmailListComponent(api) {
        this.api = api;
    }
    // fetch emails list
    EmailListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._subscription =
            this.api.fetchEmails()
                .subscribe(function (data) {
                _this.emails = data;
                _this.config = {
                    itemsPerPage: 5,
                    currentPage: 1,
                    totalItems: _this.emails.length
                };
            }, function (error) {
                console.log('error', error);
            });
    };
    EmailListComponent.prototype.ngOnDestroy = function () {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    };
    // track current page for pagination
    EmailListComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    EmailListComponent.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
    ]; };
    EmailListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-email-list',
            template: __webpack_require__(/*! raw-loader!./email-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/email-list/email-list.component.html"),
            styles: [__webpack_require__(/*! ./email-list.component.css */ "./src/app/components/email-list/email-list.component.css")]
        })
    ], EmailListComponent);
    return EmailListComponent;
}());



/***/ }),

/***/ "./src/app/components/error/error.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/error/error.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXJyb3IvZXJyb3IuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/error/error.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/error/error.component.ts ***!
  \*****************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ErrorComponent.prototype, "error", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ErrorComponent.prototype, "errorMessage", void 0);
    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! raw-loader!./error.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/components/error/error.component.css")]
        })
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.loggedIn = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get if user is loggedin or not to render data accordingly
        this.loggedIn = this.auth.isUserLoggedIn;
        this.userData = this.auth.currentUserData;
        // subscribe to loggedin change
        this._loggedinSubscription = this.auth.loggedInChange.subscribe(function (value) {
            _this.loggedIn = value;
        });
        // subscribe to userData change
        this._userDataSubscription = this.auth.userDataChange.subscribe(function (value) {
            _this.userData = value;
        });
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component destroyed
        if (this._loggedinSubscription) {
            this._loggedinSubscription.unsubscribe();
        }
        if (this._userDataSubscription) {
            this._userDataSubscription.unsubscribe();
        }
    };
    // log user out
    HeaderComponent.prototype.logout = function () {
        var _this = this;
        this.auth.logout()
            .subscribe(function (data) {
            _this.auth.setLoggedIn(false);
            // redirect user to logged out state
            _this.router.navigate(['/login']);
        }, function (error) {
            console.log('error', error);
            alert('Something went wrong');
        });
    };
    // clear local storage in case of access token expires (till the feature is added)
    HeaderComponent.prototype.clearLocalStorage = function () {
        localStorage.clear();
        alert('Now, please reload the page');
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.errorMessage = '';
        this.error = false;
        this.loading = false; // loader to show user if the form is submitted or not
    }
    // redirect user to home if user is already logged in
    LoginComponent.prototype.ngOnInit = function () {
        if (this.auth.isUserLoggedIn) {
            this.router.navigate(['/home']);
        }
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component destroyed
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    };
    // set error
    LoginComponent.prototype.setError = function (shouldSetError, errorText) {
        if (errorText === void 0) { errorText = ''; }
        this.error = shouldSetError;
        this.errorMessage = errorText;
    };
    // log user in
    LoginComponent.prototype.login = function () {
        var _this = this;
        var obj = {
            email: this.email,
            password: this.password
        };
        // throw errow if email or password is missing
        if (!obj.email || !obj.password) {
            this.setError(true, 'Please fill out email and password');
            return;
        }
        this.loading = true;
        this.setError(false);
        // make api call for login
        this._subscription =
            this.auth.login(obj)
                .subscribe(function (data) {
                _this.loading = false;
                _this.auth.setLoggedIn(true, data.user, data.token);
                // redirect logged in user to home
                _this.router.navigate(['/home']);
            }, function (error) {
                _this.loading = false;
                _this.setError(true, error.error.message || 'Something went wrong');
                _this.auth.setLoggedIn(false);
            });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/signup/signup.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/signup/signup.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/signup/signup.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var DropDownOptionsConfig = /** @class */ (function () {
    function DropDownOptionsConfig() {
    }
    return DropDownOptionsConfig;
}());
var _dropDownOptions = [
    { value: "staff", name: "staff" },
    { value: "admin", name: "admin" }
];
var SignupComponent = /** @class */ (function () {
    function SignupComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.errorMessage = '';
        this.error = false;
        this.loading = false; // loader to show user if the form is submitted or not
        this.dropDownOptions = _dropDownOptions;
    }
    // redirect user to home if user is already logged in
    SignupComponent.prototype.ngOnInit = function () {
        if (this.auth.isUserLoggedIn) {
            this.router.navigate(['/home']);
        }
    };
    SignupComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component destroyed
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    };
    // set error
    SignupComponent.prototype.setError = function (shouldSetError, errorText) {
        if (errorText === void 0) { errorText = ''; }
        this.error = shouldSetError;
        this.errorMessage = errorText;
    };
    // get selected reole from dropdown
    SignupComponent.prototype.setSelectedUserRole = function (e) {
        this.userRoleSelected = e.target.value;
    };
    // signup user
    SignupComponent.prototype.signup = function () {
        var _this = this;
        var obj = {
            name: this.name,
            email: this.email,
            password: this.password,
            password_confirmation: this.confirmPassword,
            user_role: this.userRoleSelected
        };
        // throw errow if email or password is missing
        if (!obj.email || !obj.password || !obj.password_confirmation || !obj.user_role) {
            this.setError(true, 'Please fill out email, password, confirm password and user role');
            return;
        }
        else if (obj.password !== obj.password_confirmation) {
            this.setError(true, 'Password and confirm password do not match');
            return;
        }
        this.loading = true;
        this.setError(false);
        // make api call for login
        this._subscription =
            this.auth.signup(obj)
                .subscribe(function (data) {
                _this.loading = false;
                _this.auth.setLoggedIn(true, data.user, data.token);
                // redirect logged in user to home
                _this.router.navigate(['/home']);
            }, function (error) {
                _this.loading = false;
                _this.setError(true, error.error.message || 'Something went wrong');
            });
    };
    SignupComponent.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/components/signup/signup.component.css")]
        })
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/filters/filter.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/filters/filter.pipe.ts ***!
  \****************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    // filter data based on string (for filtering user emails in assign user to email section)
    FilterPipe.prototype.transform = function (data, prop, value, method) {
        var _this = this;
        if (data) {
            if (!value) {
                return data;
            }
            else {
                return data.filter(function (obj) { return _this.filter(obj[prop], value, method); });
            }
        }
        else {
            return [];
        }
    };
    FilterPipe.prototype.filter = function (source, target, method) {
        switch (method) {
            case 'includes': return source.includes(target);
            case 'equal': return source === target;
            case 'not-equal': return source !== target;
        }
    };
    FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    // implelment canActivate to determine if a user can access a route
    // or not depending on their loggedin state
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.auth.isUserLoggedIn) {
            return true;
        }
        else {
            return this.router.parseUrl('/login');
        }
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _settings_appSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../settings/appSettings */ "./src/app/settings/appSettings.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./src/app/services/constants.ts");





var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    // fetch emails from api
    ApiService.prototype.fetchEmails = function () {
        _constants__WEBPACK_IMPORTED_MODULE_4__["httpOptions"].headers =
            _constants__WEBPACK_IMPORTED_MODULE_4__["httpOptions"].headers.set('Authorization', "Bearer " + (localStorage.token || ''));
        return this.http.get(_settings_appSettings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].emails(), _constants__WEBPACK_IMPORTED_MODULE_4__["httpOptions"]);
    };
    // fetch particular email data from api
    ApiService.prototype.fetchEmail = function (id) {
        _constants__WEBPACK_IMPORTED_MODULE_4__["httpOptions"].headers =
            _constants__WEBPACK_IMPORTED_MODULE_4__["httpOptions"].headers.set('Authorization', "Bearer " + (localStorage.token || ''));
        return this.http.get(_settings_appSettings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].getEmail(id), _constants__WEBPACK_IMPORTED_MODULE_4__["httpOptions"]);
    };
    // post reply data to api
    ApiService.prototype.postReply = function (obj) {
        _constants__WEBPACK_IMPORTED_MODULE_4__["httpOptions"].headers =
            _constants__WEBPACK_IMPORTED_MODULE_4__["httpOptions"].headers.set('Authorization', "Bearer " + (localStorage.token || ''));
        return this.http.post(_settings_appSettings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].addReply(), obj, _constants__WEBPACK_IMPORTED_MODULE_4__["httpOptions"]);
    };
    // get all users data
    ApiService.prototype.getAllUsers = function () {
        _constants__WEBPACK_IMPORTED_MODULE_4__["httpOptions"].headers =
            _constants__WEBPACK_IMPORTED_MODULE_4__["httpOptions"].headers.set('Authorization', "Bearer " + (localStorage.token || ''));
        return this.http.get(_settings_appSettings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].allUsers(), _constants__WEBPACK_IMPORTED_MODULE_4__["httpOptions"]);
    };
    // post data to assign a user to an email
    ApiService.prototype.assignEmailToUser = function (obj) {
        _constants__WEBPACK_IMPORTED_MODULE_4__["httpOptions"].headers =
            _constants__WEBPACK_IMPORTED_MODULE_4__["httpOptions"].headers.set('Authorization', "Bearer " + (localStorage.token || ''));
        return this.http.post(_settings_appSettings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].assignEmail(obj.email_id), obj, _constants__WEBPACK_IMPORTED_MODULE_4__["httpOptions"]);
    };
    // post email data
    ApiService.prototype.postEmailToDB = function (obj) {
        _constants__WEBPACK_IMPORTED_MODULE_4__["httpOptions"].headers =
            _constants__WEBPACK_IMPORTED_MODULE_4__["httpOptions"].headers.set('Authorization', "Bearer " + (localStorage.token || ''));
        return this.http.post(_settings_appSettings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].addEmail(), obj, _constants__WEBPACK_IMPORTED_MODULE_4__["httpOptions"]);
    };
    ApiService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _settings_appSettings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../settings/appSettings */ "./src/app/settings/appSettings.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./src/app/services/constants.ts");






var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        // keep track of user logged in or not
        this.loggedInChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        // keep track of user data change
        this.userDataChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    Object.defineProperty(AuthService.prototype, "isUserLoggedIn", {
        // get if user is logged in or not
        get: function () {
            return localStorage.loggedin ? JSON.parse(localStorage.loggedin) : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUserData", {
        // get current user data from local storage
        get: function () {
            return localStorage.userData ? JSON.parse(localStorage.userData) : {};
        },
        enumerable: true,
        configurable: true
    });
    // set user logged in or not
    AuthService.prototype.setLoggedIn = function (isLoggedIn, user, token) {
        if (user === void 0) { user = {}; }
        if (token === void 0) { token = ''; }
        if (isLoggedIn && token.length > 0) {
            localStorage.setItem('token', token);
            localStorage.setItem('loggedin', 'true');
            localStorage.setItem('userData', JSON.stringify(user));
            this.loggedInChange.next(true);
            this.userDataChange.next(user);
        }
        else {
            localStorage.removeItem('token');
            localStorage.removeItem('loggedin');
            localStorage.removeItem('userData');
            this.loggedInChange.next(false);
            this.userDataChange.next({});
        }
    };
    // make api call to log user in
    AuthService.prototype.login = function (obj) {
        return this.http.post(_settings_appSettings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].login(), obj, _constants__WEBPACK_IMPORTED_MODULE_5__["httpOptions"]);
    };
    // make api call to log user out
    AuthService.prototype.logout = function () {
        _constants__WEBPACK_IMPORTED_MODULE_5__["httpOptions"].headers =
            _constants__WEBPACK_IMPORTED_MODULE_5__["httpOptions"].headers.set('Authorization', "Bearer " + (localStorage.token || ''));
        return this.http.delete(_settings_appSettings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].logout(), _constants__WEBPACK_IMPORTED_MODULE_5__["httpOptions"]);
    };
    // make api call to sign up user
    AuthService.prototype.signup = function (obj) {
        return this.http.post(_settings_appSettings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].signup(), obj, _constants__WEBPACK_IMPORTED_MODULE_5__["httpOptions"]);
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/constants.ts":
/*!***************************************!*\
  !*** ./src/app/services/constants.ts ***!
  \***************************************/
/*! exports provided: httpOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpOptions", function() { return httpOptions; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");

var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};


/***/ }),

/***/ "./src/app/settings/appSettings.ts":
/*!*****************************************!*\
  !*** ./src/app/settings/appSettings.ts ***!
  \*****************************************/
/*! exports provided: AppSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettings", function() { return AppSettings; });
var API_HOST = 'http://localhost:3000';
var AppSettings = {
    login: function () { return API_HOST + "/login"; },
    logout: function () { return API_HOST + "/logout"; },
    signup: function () { return API_HOST + "/signup"; },
    emails: function () { return API_HOST + "/api/v1/emails"; },
    addEmail: function () { return API_HOST + "/api/v1/emails"; },
    getEmail: function (id) { return API_HOST + "/api/v1/emails/" + id; },
    addReply: function () { return API_HOST + "/api/v1/replies"; },
    allUsers: function () { return API_HOST + "/users"; },
    assignEmail: function (emailId) { return API_HOST + "/api/v1/emails/" + emailId + "/assign_email_to_user"; }
};


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

module.exports = __webpack_require__(/*! /Users/aakash.tyagi/Desktop/personal/code/email-manager/email-manager-frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map