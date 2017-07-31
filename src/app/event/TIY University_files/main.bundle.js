webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/allevents/allevents.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/allevents/allevents.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n  <ol class=\"breadcrumb\">\n    <li><a routerLink=\"/home\">Home</a></li>\n    <li class=\"active\">All Events</li>\n  </ol>\n\n  <br/>\n\n  <app-status-message [successMessage]=\"successMessage\" [errorMessage]=\"errorMessage\"></app-status-message>\n\n  <h2>All Events</h2>\n\n  <a class=\"btn btn-primary\" routerLink=\"/event\">Return to MyEvents</a>\n\n  <br><br><br>\n  <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\" style=\"width:100%\">\n    <thead>\n      <tr>\n        <th>Activate Event</th>\n        <th>Event Date</th>\n        <th>Event Name</th>\n        <th>Recruiter</th>\n        <th>Actions</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let event of events\">\n        <td class=\"text-center\">\n          <a class=\"btn btn-primary\" [routerLink]=\"['/student']\">Activate Event</a>\n        </td>\n\n        <td>{{event.eventDate}}</td>\n        <td> <a href=\"/event/students/{{event.eventId}}\">\n        {{event.eventName}}\n        </a></td>\n        <td><span *ngFor=\"let recruiter of event.recruiters\">\n        {{recruiter.firstName}} {{recruiter.lastName}} <br />\n        </span>\n        </td>\n        <td class=\"text-center\">\n          <a class=\"btn btn-primary\" [routerLink]=\"['/event/edit/', event.eventId]\">Edit Event</a>&nbsp;\n          <button (click)=\"deleteEvent(event.eventId)\" class=\"btn btn-danger\">Delete Event</button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n\n</section>"

/***/ }),

/***/ "../../../../../src/app/allevents/allevents.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__confirm_confirm_component__ = __webpack_require__("../../../../../src/app/confirm/confirm.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlleventsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AlleventsComponent = (function () {
    function AlleventsComponent(dataService, dialog) {
        this.dataService = dataService;
        this.dialog = dialog;
        this.dtOptions = {};
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Subject"]();
        this.mode = 'Observable';
    }
    AlleventsComponent.prototype.ngOnInit = function () {
        this.dtOptions = {
            paging: true,
            searching: true,
            dom: 'Bfrtlip',
            buttons: [
                'copy',
                'print',
                'excel',
            ]
        };
        this.getEventRecruiters();
    };
    AlleventsComponent.prototype.getEventRecruiters = function () {
        var _this = this;
        this.dataService.getRecords("event/recruiters")
            .subscribe(function (recruiterArray) {
            _this.events = recruiterArray;
            _this.dtTrigger.next();
        }, function (error) { return _this.errorMessage = error; });
    };
    AlleventsComponent.prototype.populateProspects = function (event) {
        var eventId = event.eventId;
        this.dataService.returnProspects("event/students/" + eventId)
            .subscribe(function (event) {
            return localStorage.setItem("currentEventId", eventId);
        } //currentEvent = potato... can be used later to retrieve get for other functions
        );
    };
    AlleventsComponent.prototype.clickEvent = function (event) {
        var _this = this;
        var eventNumber = event.eventId;
        console.log(eventNumber);
        this.dataService.eventLogin("event/activate/" + eventNumber)
            .subscribe(function (event) { return _this.event = event; }, function (error) { return _this.errorMessage = error; });
    };
    AlleventsComponent.prototype.deleteEvent = function (eventId) {
        var _this = this;
        // console.log(eventId);
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__confirm_confirm_component__["a" /* ConfirmComponent */]);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.dataService.deleteRecord("event", eventId)
                    .subscribe(function (event) { _this.successMessage = "Record(s) deleted succesfully"; _this.getEventRecruiters(); }, function (error) { return _this.errorMessage = error; });
            }
        });
    };
    return AlleventsComponent;
}());
AlleventsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-allevents',
        template: __webpack_require__("../../../../../src/app/allevents/allevents.component.html"),
        styles: [__webpack_require__("../../../../../src/app/allevents/allevents.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */]) === "function" && _b || Object])
], AlleventsComponent);

var _a, _b;
//# sourceMappingURL=allevents.component.js.map

/***/ }),

/***/ "../../../../../src/app/animations/fade-in.animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fadeInAnimation; });

var fadeInAnimation = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["trigger"])('fadeInAnimation', [
    // route 'enter' transition
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["transition"])(':enter', [
        // styles at start of transition
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ opacity: 0 }),
        // animation and styles at end of transition
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["animate"])('0.5s', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ opacity: 1 }))
    ]),
]);
//# sourceMappingURL=fade-in.animation.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    function AppComponent() {
    }
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], AppComponent.prototype, "erroMessage", void 0);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/bundles/platform-browser-animations.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__navigation_navigation_component__ = __webpack_require__("../../../../../src/app/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__routing_routing_module__ = __webpack_require__("../../../../../src/app/routing/routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__confirm_confirm_component__ = __webpack_require__("../../../../../src/app/confirm/confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__student_student_component__ = __webpack_require__("../../../../../src/app/student/student.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__student_form_student_form_component__ = __webpack_require__("../../../../../src/app/student-form/student-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__quiz_quiz_component__ = __webpack_require__("../../../../../src/app/quiz/quiz.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__event_event_component__ = __webpack_require__("../../../../../src/app/event/event.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__event_form_event_form_component__ = __webpack_require__("../../../../../src/app/event-form/event-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__recruiter_recruiter_component__ = __webpack_require__("../../../../../src/app/recruiter/recruiter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__recruiter_form_recruiter_form_component__ = __webpack_require__("../../../../../src/app/recruiter-form/recruiter-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__prospect_prospect_component__ = __webpack_require__("../../../../../src/app/prospect/prospect.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__status_message_status_message_component__ = __webpack_require__("../../../../../src/app/status-message/status-message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__delete_confirm_delete_confirm_component__ = __webpack_require__("../../../../../src/app/delete-confirm/delete-confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__allevents_allevents_component__ = __webpack_require__("../../../../../src/app/allevents/allevents.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__deactivate_deactivate_component__ = __webpack_require__("../../../../../src/app/deactivate/deactivate.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__navigation_navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__confirm_confirm_component__["a" /* ConfirmComponent */],
            __WEBPACK_IMPORTED_MODULE_12__student_student_component__["a" /* StudentComponent */],
            __WEBPACK_IMPORTED_MODULE_13__student_form_student_form_component__["a" /* StudentFormComponent */],
            __WEBPACK_IMPORTED_MODULE_14__quiz_quiz_component__["a" /* QuizComponent */],
            __WEBPACK_IMPORTED_MODULE_15__event_event_component__["a" /* EventComponent */],
            __WEBPACK_IMPORTED_MODULE_16__event_form_event_form_component__["a" /* EventFormComponent */],
            __WEBPACK_IMPORTED_MODULE_17__recruiter_recruiter_component__["a" /* RecruiterComponent */],
            __WEBPACK_IMPORTED_MODULE_18__recruiter_form_recruiter_form_component__["a" /* RecruiterFormComponent */],
            __WEBPACK_IMPORTED_MODULE_19__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_20__prospect_prospect_component__["a" /* ProspectComponent */],
            __WEBPACK_IMPORTED_MODULE_21__status_message_status_message_component__["a" /* StatusMessageComponent */],
            __WEBPACK_IMPORTED_MODULE_22__delete_confirm_delete_confirm_component__["a" /* DeleteConfirmComponent */],
            __WEBPACK_IMPORTED_MODULE_24__allevents_allevents_component__["a" /* AlleventsComponent */],
            __WEBPACK_IMPORTED_MODULE_25__deactivate_deactivate_component__["a" /* DeactivateComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_8__routing_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["BrowserAnimationsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_23_angular_datatables__["a" /* DataTablesModule */]
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_11__confirm_confirm_component__["a" /* ConfirmComponent */], __WEBPACK_IMPORTED_MODULE_22__delete_confirm_delete_confirm_component__["a" /* DeleteConfirmComponent */], __WEBPACK_IMPORTED_MODULE_25__deactivate_deactivate_component__["a" /* DeactivateComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_10__data_service__["a" /* DataService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/confirm/confirm.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".primary-color {\n    color: blue;\n}\n\n.primary {\n    background-color: blue;\n    color: white;\n}\n\nh2 {\n    width: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/confirm/confirm.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 md-dialog-title class=\"primary-color\" align=\"center\">Liberty Mutual Job Fair</h2>\n<md-dialog-content>Thank you for participating in the Liberty Mutual Job Fair!</md-dialog-content><br/>\n<md-dialog-actions align=\"center\">\n  <button md-button md-dialog-close class=\"primary\">CLOSE</button>\n</md-dialog-actions>"

/***/ }),

/***/ "../../../../../src/app/confirm/confirm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfirmComponent = (function () {
    function ConfirmComponent() {
    }
    ConfirmComponent.prototype.ngOnInit = function () { };
    return ConfirmComponent;
}());
ConfirmComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-confirm',
        template: __webpack_require__("../../../../../src/app/confirm/confirm.component.html"),
        styles: [__webpack_require__("../../../../../src/app/confirm/confirm.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ConfirmComponent);

//# sourceMappingURL=confirm.component.js.map

/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8080/';
    }
    // baseurl                  endpoint  destination
    // ----------------------   --------  ---------------------
    // http://localhost:8080/   student   /dford@gmail.com/
    // http://localhost:8080/student/dford@gmail.com/
    // IMPORTANT: WHEN SENDING EMAIL ADDRESS IT MUST END WITH A '/'
    // **************************************************************************************
    //                               STUDENTS PATH                                          *
    // **************************************************************************************
    // authenticateLogin(endpoint: string, record:object, enterprise_id:string, password:string): Observable<object> {
    //     let apiUrl = `${this.baseUrl}${endpoint}/${enterprise_id}`;
    //     let apiUrl2 = apiUrl + "&" + password;
    //     console.log("in authenticateLogin: " + apiUrl2);
    //     console.log(apiUrl2);
    //     return this.http.get(apiUrl2)
    //         .map(this.extractData)
    //         .catch(this.handleError);
    // }
    // executed from the login screen
    DataService.prototype.getStudentRecordByEmail = function (endpoint, email) {
        var apiUrl = "" + this.baseUrl + endpoint + "/" + email + "/";
        console.log("In getStudentRecordByEmail " + apiUrl);
        return this.http.get(apiUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    // executed for edit
    DataService.prototype.getStudentRecordById = function (endpoint, id) {
        var apiUrl = "" + this.baseUrl + endpoint + "/" + id;
        console.log("In getStudentRecordById " + apiUrl);
        return this.http.get(apiUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    // performed from saveStudent in student-form.component.ts
    // PUT: ...student/studentId/eventId
    DataService.prototype.editStudentRecord = function (endpoint, record, id, event) {
        var apiUrl = "" + this.baseUrl + endpoint + "/" + id + "/" + event;
        console.log("Updating in editStudentRecord: " + apiUrl);
        return this.http.put(apiUrl, record)
            .map(this.extractData)
            .catch(this.handleError);
    };
    // performed from saveStudent in student-form.component.ts
    // POST: ...student/add/eventId
    DataService.prototype.addStudentRecord = function (endpoint, record, event) {
        var apiUrl = "" + this.baseUrl + endpoint + "/add/" + event;
        console.log("Adding in addStudentRecord: " + apiUrl);
        return this.http.post(apiUrl, record)
            .map(this.extractData)
            .catch(this.handleError);
    };
    // performed from quiz.component.ts to obtain quiz questions
    // http://localhost:8080/quiz/student/{email}
    // When trying to get a quiz by role use the following endpoint:
    // /quiz/student/{studentEmail}/{role}
    // role is either "frontend" or "backend"
    //  http://localhost:8080/quiz/student/deford@ameritech.net/
    // if the user picks "both" use this endpoint:
    //  /quiz/student/{studentEmail}
    DataService.prototype.getQuizRecords = function (endpoint, option, email, role) {
        if (role == "frontend" || role == "backend") {
            this.quizUrl = this.baseUrl + endpoint + "/" + option + "/" + email + "/" + role;
        }
        else {
            this.quizUrl = this.baseUrl + endpoint + "/" + option + "/" + email + "/";
        }
        console.log("getQuizRecords: " + this.quizUrl);
        return this.http.get(this.quizUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    // http://localhost:8080/quizResults/add/{quizId}/{studentId}/
    // http://localhost:8080/quizResults/add/387/10/
    DataService.prototype.addQuizRecord = function (endpoint, record, quizId, studentId) {
        var apiUrl = "" + this.baseUrl + endpoint + "/add/" + quizId + "/" + studentId + "/";
        console.log("addQuizRecord: " + apiUrl);
        return this.http.post(apiUrl, record)
            .map(this.extractData)
            .catch(this.handleError);
    };
    // **************************************************************************************
    //                               RECRUITER PATH                                         *
    // **************************************************************************************
    // RECRUITER GET, PUT, & POST
    DataService.prototype.registerLogin = function (endpoint, record, username, password, email, firstName, lastName) {
        var apiUrl = "" + this.baseUrl + endpoint + "/all";
        console.log(apiUrl);
        return this.http.get(apiUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DataService.prototype.recruiterLogin = function (endpoint) {
        var apiUrl = "" + this.baseUrl + endpoint;
        console.log("login url = " + apiUrl);
        return this.http.get(apiUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DataService.prototype.authenticateLogin = function (endpoint, record, enterprise_id, password) {
        var apiUrl = "" + this.baseUrl + endpoint + "/" + enterprise_id;
        var apiUrl2 = apiUrl + "&" + password;
        console.log(apiUrl2);
        return this.http.get(apiUrl2)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DataService.prototype.getRecruiterRecord = function (endpoint, username) {
        var apiUrl = "" + this.baseUrl + endpoint + "/" + username;
        return this.http.get(apiUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DataService.prototype.getProspectRecord = function (endpoint) {
        var apiUrl = "" + this.baseUrl + endpoint + "/all";
        return this.http.get(apiUrl)
            .map(this.extractData) //how to map data from API
            .catch(this.handleError); // how to handle if it messes up
    };
    DataService.prototype.addRecruiterRecord = function (endpoint, record) {
        var apiUrl = "" + this.baseUrl + endpoint + "/add";
        console.log(apiUrl);
        return this.http.post(apiUrl, record)
            .map(this.extractData)
            .catch(this.handleError);
    };
    //   
    DataService.prototype.editRecruiterRecord = function (endpoint, record, id) {
        var apiUrl = "" + this.baseUrl + endpoint + "/" + id;
        console.log(record);
        console.log(apiUrl);
        return this.http.put(apiUrl, record)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DataService.prototype.logout = function () {
        // remove recruiter from local storage
        localStorage.removeItem('currentUser');
    };
    // **************************************************************************************
    //                               EVENTS PATH                                           *
    // **************************************************************************************
    DataService.prototype.getRecord = function (endpoint, id) {
        var apiUrl = "" + this.baseUrl + endpoint + "/" + id;
        return this.http.get(apiUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DataService.prototype.eventLogin = function (endpoint) {
        var apiUrl = "" + this.baseUrl + endpoint;
        console.log("event to student url = " + apiUrl);
        return this.http.get(apiUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DataService.prototype.returnProspects = function (endpoint) {
        var apiUrl = "" + this.baseUrl + endpoint;
        return this.http.get(apiUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DataService.prototype.getEventbyID = function (endpoint, id) {
        var apiUrl = "" + this.baseUrl + endpoint + "/" + id;
        return this.http.get(apiUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DataService.prototype.addEventRecord = function (endpoint, record) {
        var apiUrl = "" + this.baseUrl + endpoint + "/add";
        console.log(apiUrl);
        return this.http.post(apiUrl, record)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DataService.prototype.getRecruiterIdRecords = function (endpoint) {
        var apiUrl = "" + this.baseUrl + endpoint;
        return this.http.get(apiUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    // **************************************************************************************
    //                               HOUSEKEEPING                                           *
    // **************************************************************************************
    DataService.prototype.deleteRecord = function (endpoint, id) {
        var apiUrl = "" + this.baseUrl + endpoint + "/" + id;
        return this.http.delete(apiUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DataService.prototype.addRecord = function (endpoint, record) {
        var apiUrl = "" + this.baseUrl + endpoint;
        console.log(apiUrl);
        return this.http.post(apiUrl, record)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DataService.prototype.getRecords = function (endpoint) {
        var apiUrl = this.baseUrl + endpoint + "/all";
        return this.http.get(apiUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DataService.prototype.editRecord = function (endpoint, record, id) {
        var apiUrl = "" + this.baseUrl + endpoint + "/" + id;
        console.log(record);
        console.log(apiUrl);
        return this.http.put(apiUrl, record)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DataService.prototype.extractData = function (res) {
        var results = false;
        try {
            results = res.json();
        }
        catch (e) {
            if (res.status !== 200) {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(e);
            }
        }
        return results || {};
    };
    DataService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        // console.log("Error: " + error);
        // return Observable.throw(error.message);
        var errMsg;
        if (typeof error._body === "string") {
            errMsg = error._body;
        }
        else {
            if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Response */]) {
                if (error.status === 0) {
                    errMsg = "Error connecting to API";
                }
                else {
                    var errorJSON = error.json();
                    errMsg = errorJSON.message;
                }
            }
        }
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return DataService;
}()); // end data service
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/app/deactivate/deactivate.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel {\n    width: 40%;\n    margin-left: 11%;\n}\n\n.panel-heading {\n    height: 50px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/deactivate/deactivate.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- This will force the recruiter to enter their login and password to deactivate\n     the candidate evaluation process -->\n\n  <div [ngClass]=\"(errorMessage)?'alert alert-danger':'alert alert-success'\" role=\"alert\" *ngIf=\"errorMessage ||   successMessage\" id=\"deletemsg\">\n      {{errorMessage}} {{successMessage}}\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div> \n\n<div class=\"panel panel-info\">\n  <div class=\"panel-heading\">\n      <h4>Please Enter Recruiter Login and Password for Deactivation</h4>\n  </div>\n  <div class=\"panel-body\">\n\n    <form novalidate (ngSubmit)=\"authenticate(recruiterForm)\" #recruiterForm=\"ngForm\" class=\"form-horizontal\">\n\n        <div class=\"form-group\">\n          <label for=\"username\" class=\"col-sm-2 control-label\">User Name</label>\n          <div class=\"col-sm-4\">\n            <input autocomplete=\"off\" ngModel #username=\"ngModel\" type=\"text\" class=\"form-control\" id=\"username\" name=\"username\" placeholder=\"Enter User Name...\" required>\n              <span *ngIf=\"formErrors.username\" class=\"text-danger\">\n                {{ formErrors.username }}\n            </span>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"password\" class=\"col-sm-2 control-label\">Password</label>\n          <div class=\"col-sm-4\">\n            <input autocomplete=\"off\" ngModel #password=\"ngModel\" type=\"text\" class=\"form-control\" id=\"password\" name=\"password\" placeholder=\"Enter Password...\" required>\n              <span *ngIf=\"formErrors.password\" class=\"text-danger\">\n                {{ formErrors.password }}\n            </span>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <div class=\"col-sm-offset-2 col-sm-10\">\n            <button [disabled]=\"!recruiterForm.form.valid\" type=\"submit\" class=\"btn btn-primary\">Submit</button>\n          </div>\n        </div>\n\n      </form>\n\n    </div>\n  </div> \n"

/***/ }),

/***/ "../../../../../src/app/deactivate/deactivate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__animations_fade_in_animation__ = __webpack_require__("../../../../../src/app/animations/fade-in.animation.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeactivateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DeactivateComponent = (function () {
    function DeactivateComponent(dataService, route, location, router) {
        this.dataService = dataService;
        this.route = route;
        this.location = location;
        this.router = router;
        this.formErrors = {
            'username': '',
            'password': '',
        };
        this.validationMessages = {
            'username': {
                'required': 'User Name is required'
            },
            'password': {
                'required': 'Password is required'
            }
        };
    }
    DeactivateComponent.prototype.ngOnInit = function () { };
    DeactivateComponent.prototype.authenticate = function (recruiter) {
        var _this = this;
        var username = recruiter.value.username;
        var password = recruiter.value.password;
        this.dataService.recruiterLogin("recruiter/" + username + "/" + password)
            .subscribe(function (recruiter) {
            localStorage.setItem("currentUser", JSON.stringify(recruiter)); //currentUser = potato... can be used later to retrieve get for other functions
            console.log("currentUser: " + JSON.stringify(recruiter));
            _this.router.navigate(['recruiter/events', recruiter]);
        }, function (error) { return _this.errorMessage = "Login Invalid.  Please try again"; });
    };
    //everything below here is form validation boiler plate
    DeactivateComponent.prototype.ngAfterViewChecked = function () {
        this.formChanged();
    };
    DeactivateComponent.prototype.formChanged = function () {
        var _this = this;
        this.recruiterForm = this.currentForm;
        this.recruiterForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(); });
    };
    DeactivateComponent.prototype.onValueChanged = function () {
        var form = this.recruiterForm.form;
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    return DeactivateComponent;
}()); // end DeactivateComponent
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('deactivateForm'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* NgForm */]) === "function" && _a || Object)
], DeactivateComponent.prototype, "currentForm", void 0);
DeactivateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-deactivate',
        template: __webpack_require__("../../../../../src/app/deactivate/deactivate.component.html"),
        styles: [__webpack_require__("../../../../../src/app/deactivate/deactivate.component.css")],
        animations: [__WEBPACK_IMPORTED_MODULE_6__animations_fade_in_animation__["a" /* fadeInAnimation */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["e" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["e" /* Location */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _e || Object])
], DeactivateComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=deactivate.component.js.map

/***/ }),

/***/ "../../../../../src/app/delete-confirm/delete-confirm.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/delete-confirm/delete-confirm.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 md-dialog-title>Delete Record</h2>\n<md-dialog-content>Are you sure?</md-dialog-content>\n<md-dialog-actions>\n  <button md-button md-dialog-close>No</button>\n  <button md-button [md-dialog-close]=\"true\">Yes</button>\n</md-dialog-actions>"

/***/ }),

/***/ "../../../../../src/app/delete-confirm/delete-confirm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteConfirmComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DeleteConfirmComponent = (function () {
    function DeleteConfirmComponent() {
    }
    DeleteConfirmComponent.prototype.ngOnInit = function () {
    };
    return DeleteConfirmComponent;
}());
DeleteConfirmComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-delete-confirm',
        template: __webpack_require__("../../../../../src/app/delete-confirm/delete-confirm.component.html"),
        styles: [__webpack_require__("../../../../../src/app/delete-confirm/delete-confirm.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DeleteConfirmComponent);

//# sourceMappingURL=delete-confirm.component.js.map

/***/ }),

/***/ "../../../../../src/app/event-form/event-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/event-form/event-form.component.html":
/***/ (function(module, exports) {

module.exports = "<section >\n<ol class=\"breadcrumb\">\n    <li><a routerLink=\"/home\">Home</a></li>\n    <li><a routerLink=\"/event\">Events</a></li>\n    <li class=\"active\">Manage Event</li>\n</ol>\n\n<br/>\n\n<a class=\"btn btn-primary\" routerLink=\"/event\">Return to Events</a>\n\n<h1>Manage Event</h1>\n\n<br/> <br/>\n\n<app-status-message [successMessage]=\"successMessage\" [errorMessage]=\"errorMessage\"></app-status-message>\n\n<form (ngSubmit)=\"saveEvent(event.eventId)\"  #eventForm=\"ngForm\" class=\"form-horizontal\">\n  <input [ngModel]=\"event?.eventId\" ngModel #eventId=\"ngModel\" type=\"hidden\" name=\"eventId\" id=\"eventForm\">\n  <div class=\"form-group\">\n    <label for=\"eventDate\" class=\"col-sm-2 control-label\">Event Date</label>\n    <div class=\"col-sm-10\">\n      <input [(ngModel)]=\"event.eventDate\" #eventDate=\"ngModel\" type=\"text\" class=\"form-control\" id=\"eventDate\" name=\"eventDate\" placeholder=\"2017-01-01\" pattern=\"(\\d{4})-(\\d{2})-(\\d{2})\">\n      <span *ngIf=\"formErrors.eventDate\" class=\"text-danger\">\n          {{ formErrors.eventDate }}\n      </span>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"eventName\" class=\"col-sm-2 control-label\">Event Name</label>\n    <div class=\"col-sm-10\">\n      <input [(ngModel)]=\"event.eventName\" #eventName=\"ngModel\" type=\"text\" class=\"form-control\" id=\"eventName\" name=\"eventName\"  placeholder=\"event name\" required minlength=\"2\" maxlength=\"30\">\n       <span *ngIf=\"formErrors.eventName\" class=\"text-danger\">\n          {{ formErrors.eventName }}\n      </span>\n    </div>\n  </div>\n     <div class=\"form-group\">\n    <label for=\"recruiterId\" class=\"col-sm-2 control-label\">Recruiter</label>\n    <div class=\"col-sm-10\">\n       <select multiple [ngModel]=\"currentRecruiters\" ngModel #recruiters=\"ngModel\" class=\"form-control\" name=\"recruiters\" id=\"recruiterId\" required>\n          <option *ngFor=\"let recruiter of currentRecruiters\" [value]=\"recruiter\">{{recruiter.firstName}} {{recruiter.lastName}}</option>\n        </select>\n     <span *ngIf=\"formErrors.recruiterId\" class=\"text-danger\">\n          {{ formErrors.recruiterId }}\n    </span>\n    </div>\n  </div>\n   <div class=\"form-group\">\n    <div class=\"col-sm-offset-2 col-sm-10\">\n      <button [disabled]=\"!eventForm.form.valid\" type=\"submit\" class=\"btn btn-primary\">Submit</button>\n    </div>\n  </div>\n</form>\n</section>"

/***/ }),

/***/ "../../../../../src/app/event-form/event-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EventFormComponent = (function () {
    function EventFormComponent(dataService, route, location, router) {
        this.dataService = dataService;
        this.route = route;
        this.location = location;
        this.router = router;
        this.event = {};
        this.formErrors = {
            'eventDate': '',
            'eventName': '',
        };
        this.validationMessages = {
            'eventDate': {
                'pattern': 'Start date should be in the following format: YYYY-MM-DD'
            },
            'eventName': {
                'required': 'First name is required.',
                'minlength': 'First name must be at least 2 characters long.',
                'maxlength': 'First name cannot be more than 30 characters long.'
            }
        };
    }
    EventFormComponent.prototype.getRecordForEdit = function () {
        var _this = this;
        console.log("I am here");
        this.route.params
            .switchMap(function (params) { return _this.dataService.getRecord("event/recruiters", +params['eventId']); })
            .subscribe(function (event) { return _this.event = event; });
    };
    EventFormComponent.prototype.getRecruiters = function () {
        var _this = this;
        console.log("present");
        this.dataService.getRecords("recruiter")
            .subscribe(function (recruiters) {
            _this.currentRecruiters = recruiters;
            console.log(_this.currentRecruiters);
        }, function (error) { return _this.errorMessage = error; });
    };
    EventFormComponent.prototype.getEventRecruiters = function () {
        var _this = this;
        this.dataService.getRecords("event/recruiters")
            .subscribe(function (events) { return _this.events = events; }, function (error) { return _this.errorMessage = error; });
    };
    EventFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getRecruiters();
        console.log("test");
        this.route.params
            .subscribe(function (params) {
            (+params['eventId']) ? _this.getRecordForEdit() : null;
        });
    };
    EventFormComponent.prototype.saveEvent = function (eventId) {
        var _this = this;
        if (typeof eventId === "number") {
            this.dataService.editRecord("event", this.eventForm.value, eventId)
                .subscribe(function (event) { _this.successMessage = "Record(s) updated succesfully"; _this.getEventRecruiters(); }, function (error) { return _this.errorMessage = error; });
        }
        else {
            console.log(this.eventForm.value);
            this.dataService.addEventRecord("event", this.eventForm.value)
                .subscribe(function (event) { _this.successMessage = "Record(s) updated succesfully"; _this.getEventRecruiters(); }, function (error) { return _this.errorMessage = error; });
        }
        this.event = {};
        this.eventForm.reset();
        // this.router.navigate( ['/event'] );
    };
    EventFormComponent.prototype.byRecruiterId = function (item1, item2) {
        if (item1 != undefined && item2 != undefined) {
            return item1.recruiterId === item2.recruiterId;
        }
    };
    EventFormComponent.prototype.ngAfterViewChecked = function () {
        this.formChanged();
    };
    EventFormComponent.prototype.formChanged = function () {
        var _this = this;
        this.eventForm = this.currentForm;
        this.eventForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
    };
    EventFormComponent.prototype.onValueChanged = function (data) {
        var form = this.eventForm.form;
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    return EventFormComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('eventForm'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* NgForm */]) === "function" && _a || Object)
], EventFormComponent.prototype, "currentForm", void 0);
EventFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-event-form',
        template: __webpack_require__("../../../../../src/app/event-form/event-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/event-form/event-form.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["e" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["e" /* Location */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _e || Object])
], EventFormComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=event-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/event/event.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/event/event.component.html":
/***/ (function(module, exports) {

module.exports = "<section @fadeInAnimation>\n<ol class=\"breadcrumb\">\n    <li><a routerLink=\"/home\">Home</a></li>\n    <li class=\"active\">Events</li>\n</ol>\n\n<br/>\n\n<app-status-message [successMessage]=\"successMessage\" [errorMessage]=\"errorMessage\"></app-status-message>\n\n<h2>Events</h2>\n\n<a class=\"btn btn-primary\" [routerLink]=\"['/event/add/']\">Add Event</a>&nbsp;\n<a class=\"btn btn-primary\" [routerLink]=\"['/allevents']\">View All Events</a>&nbsp;\n\n<!--<a (click)=\"clickEvent(event)\"-->\n\n<br><br><br>\n\n <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\" style=\"width:100%\">\n  <thead>\n    <tr>\n      <!--<th>Event ID</th>-->\n      <th>Activate Event</th>\n      <th>Event Date</th>\n      <th>Event Name</th>\n      <!--<th>Recruiter</th>-->\n      <!--<th>Recruiter ID</th>-->\n      <th>Admin</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let event of events\">\n      <!--<td>{{event.eventId}}</td>-->\n      <td class=\"text-center\">\n        <a (click)=\"clickEvent(event)\" [routerLink]=\"['/event/activate/', event.eventId]\" class=\"btn btn-primary\" role=\"button\">Activate Event</a> \n        </td>\n    \n      <td>{{event.eventDate}}</td>\n      <td> <a href=\"/event/students/{{event.eventId}}\">\n        {{event.eventName}}\n        </a></td>\n      <!--<td><span *ngFor=\"let recruiter of event.recruiters\">\n        {{recruiter.firstName}} {{recruiter.lastName}} <br />\n      </span> \n        </td>-->\n      <td class=\"text-center\">\n        <a class=\"btn btn-primary\" [routerLink]=\"['/event/edit/', event.eventId]\">Edit Event</a>&nbsp;\n      <button (click)=\"deleteEvent(event.eventId)\" class=\"btn btn-danger\">Delete Event</button>\n      </td>\n      </tr>\n  </tbody>\n</table> \n\n\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/event/event.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__delete_confirm_delete_confirm_component__ = __webpack_require__("../../../../../src/app/delete-confirm/delete-confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__animations_fade_in_animation__ = __webpack_require__("../../../../../src/app/animations/fade-in.animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EventComponent = (function () {
    function EventComponent(dataService, dialog, router, route) {
        this.dataService = dataService;
        this.dialog = dialog;
        this.router = router;
        this.route = route;
        this.dtOptions = {};
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__["Subject"]();
        this.mode = 'Observable';
    }
    EventComponent.prototype.ngOnInit = function () {
        this.dtOptions = {
            paging: true,
            searching: true,
            dom: 'Bfrtlip',
            buttons: [
                'copy',
                'print',
                'excel'
            ]
        };
        this.getEventRecruiters();
    };
    EventComponent.prototype.getEventRecruiters = function () {
        var _this = this;
        var recruiterInfo = localStorage.getItem('currentUser');
        this.dataService.getRecruiterIdRecords("recruiter/events/" + recruiterInfo)
            .subscribe(function (events) {
            _this.events = events;
            _this.dtTrigger.next();
        }, function (error) { return _this.errorMessage = error; });
    };
    EventComponent.prototype.clickEvent = function (event) {
        var eventNumber = event.eventId;
        localStorage.setItem("currentEvent", eventNumber); //could also pass event to pass full object
        console.log(localStorage.getItem('currentEvent') || null);
        // this.dataService.eventLogin(`event/activate/${eventNumber}`)
        //     .subscribe(
        //     event => {
        //     console.log("setting event: " + eventNumber);
        //     localStorage.setItem("currentEvent", eventNumber)  //could also pass event to pass full object
        //   },
        //   error =>  this.errorMessage = <any>error);
    };
    EventComponent.prototype.deleteEvent = function (eventId) {
        var _this = this;
        // console.log(eventId);
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__delete_confirm_delete_confirm_component__["a" /* DeleteConfirmComponent */]);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.dataService.deleteRecord("event", eventId)
                    .subscribe(function (event) { _this.successMessage = "Record(s) deleted succesfully"; _this.getEventRecruiters(); }, function (error) { return _this.errorMessage = error; });
            }
        });
    };
    return EventComponent;
}());
EventComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-event',
        template: __webpack_require__("../../../../../src/app/event/event.component.html"),
        styles: [__webpack_require__("../../../../../src/app/event/event.component.css")],
        animations: [__WEBPACK_IMPORTED_MODULE_5__animations_fade_in_animation__["a" /* fadeInAnimation */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _d || Object])
], EventComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=event.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#picture{\n    width: 100%;\n    height: 350px;\n}\n\n\n /*.col-md-4 {\n      display: flex;\n      flex-direction: column;\n      flex-wrap: wrap;\n      width: 300px;\n     margin-left: 20%;\n     margin-top: 3%;\n      height:250px;\n      padding-bottom: 5%;\n      color: black;\n      background-size: contain;\n      background-repeat: no-repeat;\n     border: 2px solid orange;\n     border-style: ridge;\n     border-radius: 8px;\n      \n    }*/\n\n.col-md-4 {\n    /*display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;*/\n    margin-left: 40%;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    width: 300px;\n    margin-top: 3%;\n    height:250px;\n    padding-bottom: 5%;\n    color: black;\n    background-size: contain;\n    background-repeat: no-repeat;\n    border: 2px solid orange;\n    border-style: ridge;\n    border-radius: 8px;\n      \n    }\n\n.caption p{\n    margin-top: 4%;\n}\n\n.btn_submit{\n    margin-top: 10%;\n    background: #0066A2;\n    color: orange;   \n    border-style: outset;\n    border-color: #0066A2;\n    border-radius: 2px;\n    height: 30px;\n    width: 100px;\n    font: bold 15px arial, sans-serif;  \n    text-shadow:none;\n}\n\n.footer{\n  margin-top: 5%;\n}\n\n.navbar{\n    height: 100px;\n     background: linear-gradient(to bottom,  #7d7e7d 0%,#0000FF 8%,#0e0e0e 100%);\n}\n\nimg{\n    border: 4px;\n}\n\n.navbar-right{\n    margin-top: 1%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"carousel-example-generic\" class=\"carousel slide\" data-ride=\"carousel\">\n  <!-- Indicators -->\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#carousel-example-generic\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#carousel-example-generic\" data-slide-to=\"1\"></li>\n    <li data-target=\"#carousel-example-generic\" data-slide-to=\"2\"></li>\n  </ol>\n\n  <!-- Wrapper for slides -->\n  <div class=\"carousel-inner\" role=\"listbox\">\n    <div class=\"item active\">\n      <img id=\"picture\" src=\"assets/images/Job.jpg\" alt=\"image1\">\n    </div>\n    <div class=\"item\">\n      <img id=\"picture\" src=\"assets/images/Job_Fair.jpg\" alt=\"image2\">\n    </div>\n    <div class=\"item\">\n      <img id=\"picture\" src=\"assets/images/New_Career.jpg\" alt=\"image3\">\n    </div>\n  </div>\n\n  <!-- Controls -->\n  <a class=\"left carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"prev\">\n    <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"right carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"next\">\n    <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n\n<div class=\"row text-center\">\n  <div id=\"spain\" class=\"col-md-4\">\n      <div class=\"caption\">\n        <h3>Recruiters</h3>\n        <p>The IT recruiter is a liaison between Liberty Mutual Insurance Company and the job candidates throughout the entire recruitment process.  Information technology recruiters work to fill technical job openings at Liberty Mutual Insurance Company.</p>\n\n        <a class=\"btn btn-primary\" routerLink=\"/recruiter\">Recruiter</a>\n\n      </div> <!--end of caption-->\n  </div> <!--end of id spain and class col-mod-3-->\n\n  <!--<div id=\"italy\" class=\"col-md-4\">\n      <div class=\"caption\">\n        <h3>Students</h3>\n        <p>Participating in a Career Fair is a great way to build the company brand on campus and establish a pipeline of candidates for internships and/or full-time opportunities. We hold Career Fairs in both the fall and spring semesters.</p>\n          <a class=\"btn btn-primary\" routerLink=\"/student\">Student</a>\n      </div><! end of caption\n  </div>-->\n</div>\n\n<div class=\"footer\">\n    <nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\">\n        <img alt=\"Brand\" class=\"img-circle\" src=\"assets/images/footer-logo.jpeg\" width=\"25%\">\n      </a>\n      </div>\n\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li>\n                <a href=\"https://www.facebook.com/libertymutual\" target=\"_window\" class=\"\" data-action=\"action url\" data-icon=\"icon-facebook\">\n                <span class=\"icon icon-facebook\" style=\"background-image: none;\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"30\" height=\"30\" viewBox=\"0 0 69 69\">  <path fill=\"#89898C\" d=\"M63 0H6C2.7 0 0 2.7 0 6v57c0 3.3 2.7 6 6 6h30.9V42.4h-9V32h9v-7.7c0-8.9 5.4-13.8 13.4-13.8 3.8 0 7 .3 8 .4v9.3h-5.5c-4.4 0-5.2 2.1-5.2 5.1v6.6h10.3l-1.3 10.4h-9V69H63c3.3 0 6-2.7 6-6V6c0-3.3-2.7-6-6-6z\"></path></svg>\n                </span>\n                </a>\n        </li>\n        <li>\n            <a href=\"https://twitter.com/LibertyMutual\" target=\"_window\" class=\"\" data-action=\"action url\" data-icon=\"icon-twitter\">\n            <span class=\"icon icon-twitter\" style=\"background-image: none;\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"30\" height=\"30\" viewBox=\"0 0 69 69\">  <path fill=\"#89898C\" d=\"M63 0H6C2.7 0 0 2.7 0 6v57c0 3.3 2.7 6 6 6h57c3.3 0 6-2.7 6-6V6c0-3.3-2.7-6-6-6zm-7.2 23.4v1.4c0 14.5-11.1 31.3-31.3 31.3-6.2 0-12-1.8-16.9-4.9.8.1 1.7.2 2.6.2 5.2 0 9.9-1.7 13.7-4.7-4.8 0-8.9-3.2-10.3-7.6.7.1 1.4.2 2.1.2 1 0 2-.1 2.9-.4-5-1-8.8-5.5-8.8-10.8V28c1.5.8 3.2 1.3 5 1.4-3-2-4.9-5.4-4.9-9.2 0-2 .6-3.9 1.5-5.5 5.5 6.7 13.6 11 22.7 11.5-.2-.8-.3-1.6-.3-2.5 0-6.1 4.9-11 11-11 3.1 0 6 1.4 8 3.5 2.5-.5 4.9-1.4 7-2.7-.8 2.6-2.5 4.7-4.8 6.1 2.2-.2 4.3-.8 6.3-1.7-1.5 2.2-3.3 4.1-5.5 5.5z\"></path></svg></span>\n            </a></li>\n        <li><a href=\"https://www.linkedin.com/company/liberty-mutual-insurance\" target=\"_window\" class=\"\" data-action=\"action url\" data-icon=\"icon-linkedIn\">\n        <span class=\"icon icon-linkedIn\" style=\"background-image: none;\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"30\" height=\"30\" viewBox=\"0 0 69 69\">  <path fill=\"#89898C\" d=\"M63 0H6C2.7 0 0 2.7 0 6v57c0 3.3 2.7 6 6 6h57c3.3 0 6-2.7 6-6V6c0-3.3-2.7-6-6-6zM20.5 58.8H10.3V25.9h10.2v32.9zm-5.1-37.5c-3.3 0-5.9-2.7-5.9-5.9-.1-3.2 2.6-5.9 5.9-5.9 3.3 0 5.9 2.7 5.9 5.9 0 3.3-2.7 5.9-5.9 5.9zm43.4 37.6H48.6v-16c0-3.8-.1-8.7-5.3-8.7-5.3 0-6.1 4.2-6.1 8.5V59H27V25.9h9.7v4.5h.1c1.4-2.6 4.7-5.3 9.7-5.3 10.4 0 12.3 6.8 12.3 15.7v18.1z\"></path></svg></span></a>\n        </li>\n      </ul>\n\n  </div>\n</nav>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_fade_in_animation__ = __webpack_require__("../../../../../src/app/animations/fade-in.animation.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        localStorage.removeItem('currentUser');
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")],
        animations: [__WEBPACK_IMPORTED_MODULE_1__animations_fade_in_animation__["a" /* fadeInAnimation */]],
        host: { '[@fadeInAnimation]': '' }
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar{\n    height: 110px;\n    background: linear-gradient(to bottom,  #7d7e7d 0%,#0000FF 8%,#0e0e0e 100%);\n}\n\n.navbar-right li a {\n    padding-top: 25px;\n  line-height: 50px;\n  text-decoration: none;\n  color: #FF8C00;\n  font-size: 17px;\n}\n.navbar-right li a:hover {\n  background-color: #333;\n  color: #fff;\n}\n\n.navbar-text {\n    position: absolute;\n    width: 100%;\n    left: 0;\n    text-align: center;\n    font-size: 52px;\n    color: silver;\n    margin: auto;\n    padding-top: 10px;\n    text-shadow: 1px 1px white;\n}\n\n.img-circle{\n  margin-top: -6%;\n  margin-left: 15%; \n  margin-right: 15%;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\">\n        <img alt=\"Brand\" class=\"img-circle\" src=\"assets/images/liberty-mutual-logo.jpg\">\n      </a>\n      <p class=\"navbar-text\">Welcome to the Liberty Job Fair</p>\n      </div>\n\n      <!-- <ul class=\"nav navbar-nav navbar-right\">\n        <li><a href=\"#\">Home</a></li>\n        <li><a href=\"#\">Career Fair Calendar</a></li>\n        <li><a href=\"#\">Contact Us</a></li>\n      </ul> -->\n      <!--<div id=\"navbar\" class=\"navbar-collapse collapse\">\n            <ul class=\"nav navbar-nav\">\n                <li routerLinkActive=\"active\"><a routerLink=\"/home\">Home</a></li>\n                <li routerLinkActive=\"active\"><a routerLink=\"/student\" >Student Login</a></li>\n            </ul>\n        </div>/.nav-collapse -->\n\n  </div>\n</nav>\n\n\n\n\n\n<!-- <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n        </div>\n        <div id=\"navbar\" class=\"navbar-collapse collapse\">\n            <ul class=\"nav navbar-nav\">\n                <li routerLinkActive=\"active\"><a routerLink=\"/home\">Home</a></li>\n                <li routerLinkActive=\"active\"><a routerLink=\"/student\" >Student Login</a></li>\n            </ul>\n        </div>\n    </div>\n  </nav> -->"

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navigation',
        template: __webpack_require__("../../../../../src/app/navigation/navigation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navigation/navigation.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavigationComponent);

//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ "../../../../../src/app/prospect/prospect.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/prospect/prospect.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n  <ol class=\"breadcrumb\">\n    <li><a routerLink=\"/home\">Home</a></li>\n    <li><a routerLink=\"/recruiter\">Recruiter</a></li>\n    <li class=\"active\">Prospect List</li>\n    <li><a class=\"btn btn-primary\" routerLink=\"/recruiter\">Return to Recruiter Login</a></li>\n</ol>\n\n<br><br><br><br><br>\n\n<div [ngClass]=\"(errorMessage)?'alert alert-danger':'alert alert-success'\" role=\"alert\" *ngIf=\"errorMessage || successMessage\" id=\"deletemsg\">\n    {{errorMessage}} {{successMessage}}\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n\n<!--<app-status-message [successMessage]=\"successMessage\" [errorMessage]=\"errorMessage\"></app-status-message>-->\n\n<h2>Prospect List</h2>\n<br>\n\n<!--<a class=\"btn btn-primary\" routerLink=\"/student/add\">Add Student</a>-->\n\n<table class=\"table table-striped table-bordered\" id=\"dataTable\" style=\"width:100%\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>University</th>\n      <th>Major</th>\n      <th>GPA</th>\n      <th>Graduation Date</th>\n      <th>Email</th>\n      <th>Phone Number</th>\n      <!--<th>Event</th>-->\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let student of students\">\n      <td>{{student.firstName}} {{student.lastName}}</td>\n      <td>{{student.university}}</td>\n      <td>{{student.major}}</td>\n      <td>{{student.gpa}}</td>\n      <td>{{student.graduationMonth}} {{student.graduationYear}}</td>\n      <td>{{student.email}}</td>\n      <td>{{student.phoneNumber}}</td>\n      <!--<td><span *ngFor=\"let event of students.event\">\n        {{eventName}} <br />\n      </span> \n        </td>-->\n    \n\n      <!--<td class=\"text-center\">  EDIT AND DELETE BUTTONS IF NEEDED LATER\n        <a class=\"btn btn-primary\" [routerLink]=\"['/student/edit/', student.studentId]\">Edit</a>&nbsp;\n        <button (click)=\"deleteStudent(student.studentId)\" class=\"btn btn-danger\">Delete</button>\n      </td>-->\n    </tr>\n  </tbody>\n</table>\n</section>"

/***/ }),

/***/ "../../../../../src/app/prospect/prospect.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__animations_fade_in_animation__ = __webpack_require__("../../../../../src/app/animations/fade-in.animation.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProspectComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProspectComponent = (function () {
    function ProspectComponent(dataService, route, location) {
        this.dataService = dataService;
        this.route = route;
        this.location = location;
    }
    ProspectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            if (+params['eventId']) {
                _this.getProspectsByEventId(+params['eventId']);
            }
        });
    };
    // getStudents() {
    //   this.dataService.getProspectRecord("student")
    //     .subscribe(
    //       student => this.students = student,
    //       error =>  this.errorMessage = <any>error);
    // }
    // eventInfo: number;
    ProspectComponent.prototype.getProspectsByEventId = function (id) {
        var _this = this;
        this.dataService.getRecruiterIdRecords("event/students/" + id)
            .subscribe(function (students) {
            _this.students = students.students;
        }, function (error) { return console.log("students cannot be accessed"); });
        // let eventInfo = localStorage.getItem('currentEventId');
        // console.log('eventInfo')
        // this.dataService.getRecruiterIdRecords(`event/students/${eventInfo}`)
        //   .subscribe(
        //    student => this.student = student,
        //    error =>  this.errorMessage = <any>error);
    };
    return ProspectComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('prospectForm'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* NgForm */]) === "function" && _a || Object)
], ProspectComponent.prototype, "currentForm", void 0);
ProspectComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-prospect',
        template: __webpack_require__("../../../../../src/app/prospect/prospect.component.html"),
        styles: [__webpack_require__("../../../../../src/app/prospect/prospect.component.css")],
        animations: [__WEBPACK_IMPORTED_MODULE_6__animations_fade_in_animation__["a" /* fadeInAnimation */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["e" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["e" /* Location */]) === "function" && _d || Object])
], ProspectComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=prospect.component.js.map

/***/ }),

/***/ "../../../../../src/app/quiz/quiz.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/quiz/quiz.component.html":
/***/ (function(module, exports) {

module.exports = "<section @fadeInAnimation>\n\n    <ol class=\"breadcrumb\">\n        <!-- <li><a routerLink=\"/home\">Home</a></li> -->\n        <li class=\"active\">Student Quiz</li>\n    </ol>\n\n    <h2>Prospect Quiz</h2>\n    <br/>\n\n    <div [ngClass]=\"(errorMessage)?'alert alert-danger':'alert alert-success'\" role=\"alert\" *ngIf=\"errorMessage || successMessage\" id=\"deletemsg\">\n        {{errorMessage}} {{successMessage}}\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div> \n\n    <form novalidate (ngSubmit)=\"saveQuiz(quizForm)\" #quizForm=\"ngForm\" class=\"form-horizontal\">\n\n        <input [ngModel]=\"quiz.quizId\" ngModel #quizId=\"ngModel\" type=\"hidden\" name=\"quizId\" [value]=\"quiz.quizId\">\n\n        <div *ngFor=\"let question of quiz.questions\">\n            <div class=\"row\">\n                <div id=\"box\" class=\"col-lg-10 col-md-11 col-sm-2 col-xs-12\">\n                    <div class=\"panel panel-primary\">\n                        <div class=\"panel-heading\" id=\"ph\">\n                            <h3 class=\"panel-title\">{{question?.question}}</h3>\n                        </div>\n                        <div class=\"radio\">\n\n                            <label>\n                                &nbsp;&nbsp;\n                                <input for=\"choiceA\" ngModel #choiceA=\"ngModel\" type=\"radio\" name=\"{{question?.questionId}}\" [value]=\"question?.choiceA\" (change)=\"onSelectionChange(question, 'A')\" required>{{question?.choiceA}} \n                                    <span *ngIf=\"formErrors.choiceA\" class=\"text-danger\">\n                                        {{ formErrors.choiceA }}\n                                    </span>\n                            </label><br/>\n\n                            <label>\n                                &nbsp;&nbsp;\n                                <input for=\"choiceB\" ngModel #choiceB=\"ngModel\" type=\"radio\" name=\"{{question?.questionId}}\" [value]=\"question?.choiceB\" (change)=\"onSelectionChange(question, 'B')\" required>{{question?.choiceB}} \n                                    <span *ngIf=\"formErrors.choiceB\" class=\"text-danger\">\n                                        {{ formErrors.choiceB }}\n                                    </span>\n                            </label><br/>\n\n                            <label>\n                                &nbsp;&nbsp;\n                                <input for=\"choiceC\" ngModel #choiceC=\"ngModel\" type=\"radio\" name=\"{{question?.questionId}}\" [value]=\"question?.choiceC\" (change)=\"onSelectionChange(question, 'C')\" required>{{question?.choiceC}} \n                                    <span *ngIf=\"formErrors.choiceC\" class=\"text-danger\">\n                                        {{ formErrors.choiceC }}\n                                    </span>\n                            </label><br/>\n\n                            <label>\n                                &nbsp;&nbsp;\n                                <input for=\"choiceD\" ngModel #choiceD=\"ngModel\" type=\"radio\" name=\"{{question?.questionId}}\" [value]=\"question?.choiceD\" (change)=\"onSelectionChange(question, 'D')\" required>{{question?.choiceD}} \n                                    <span *ngIf=\"formErrors.choiceD\" class=\"text-danger\">\n                                        {{ formErrors.choiceD }}\n                                    </span>\n                            </label><br/>\n\n                            <label>\n                                &nbsp;&nbsp;\n                                <input for=\"choiceE\" ngModel #noneOfTheAbove=\"ngModel\" type=\"radio\" name=\"{{question?.questionId}}\" required [value]=\"question?.noneOfTheAbove\" (change)=\"onSelectionChange(question, 'E')\">{{question?.noneOfTheAbove}} \n                                    <span *ngIf=\"formErrors.choiceE\" class=\"text-danger\">\n                                        {{ formErrors.choiceE }}\n                                    </span>\n                            </label><br/><br/>\n\n                         </div>   <!-- end radio buttons --> \n                    </div> <!-- end panel-primary -->\n                </div>  <!-- end box -->\n            </div> <!-- end row -->\n        </div> <!-- end outer loop -->\n        <div class=\"text-center\">\n            <button [disabled]=\"!quizForm.form.valid\" type=\"submit\" class=\"btn btn-primary\">Click Here to Submit Your Answers</button>\n            <!-- (click)=\"confirmParticipation()\" -->\n        </div>\n        <br/><br/><br/>\n    </form>\n\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/quiz/quiz.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__animations_fade_in_animation__ = __webpack_require__("../../../../../src/app/animations/fade-in.animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__confirm_confirm_component__ = __webpack_require__("../../../../../src/app/confirm/confirm.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var QuizComponent = (function () {
    function QuizComponent(dataService, route, location, router, sanitizer, dialog) {
        this.dataService = dataService;
        this.route = route;
        this.location = location;
        this.router = router;
        this.sanitizer = sanitizer;
        this.dialog = dialog;
        this.entries = [];
        this.quiz = {};
        this.mode = 'Observable';
        //fields that need to be validated
        this.formErrors = {
            'choiceA': '',
            'choiceB': '',
            'choiceC': '',
            'choiceD': '',
            'choiceE': ''
        };
        this.validationMessages = {
            'choiceA': {
                'required': 'Answer is required'
            },
            'choiceB': {
                'required': 'Answer is required'
            },
            'choiceC': {
                'required': 'Answer is required'
            },
            'choiceD': {
                'required': 'Answer is required'
            },
            'choiceE': {
                'required': 'Answer is required'
            },
        };
    }
    QuizComponent.prototype.ngOnInit = function () {
        this.email = localStorage.getItem('email') || null;
        console.log("In ngOnInit - email is " + this.email);
        this.getStudent();
    };
    QuizComponent.prototype.getStudent = function () {
        var _this = this;
        // this.route.params
        //   .switchMap((params: Params) => this.dataService.getStudentRecordByEmail("student", this.email))
        this.dataService.getStudentRecordByEmail("student", this.email)
            .subscribe(function (student) {
            _this.student = student;
            _this.getQuiz();
        }, function (error) { return _this.errorMessage = error; });
    };
    QuizComponent.prototype.getQuiz = function () {
        var _this = this;
        console.log("in getQuiz - studentId is " + this.student.studentId);
        console.log("in getQuiz - email is " + this.email);
        // If they are not applying for a Frontend, Backend, or Both then no quiz is needed
        if (this.student.role == "Neither") {
            console.log("Role is Neither - No Quiz Needed");
            this.thankAndExit();
        }
        this.dataService.getQuizRecords("quiz", "student", this.email, this.student.role.toLowerCase())
            .subscribe(function (quiz) {
            _this.quiz = quiz;
            _this.questions = quiz.questions;
            // this will filter out null records in the returned dataset to check for an error
            // for(let i =0; i < this.questions.length; i++){
            //   if(_.isEmpty(this.questions[i])){
            //     this.questions.splice(i, 1)
            //   }
            // }
            // console.log(this.questions)
        }, function (error) { return _this.errorMessage = error; });
    };
    QuizComponent.prototype.confirmParticipation = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_9__confirm_confirm_component__["a" /* ConfirmComponent */], {
            position: {
                top: '',
                bottom: '100px',
                left: '250px',
                right: ''
            },
            height: '190px',
            width: '450px',
        });
        dialogRef.afterClosed().subscribe(function (result) { });
    };
    QuizComponent.prototype.escapeHtml = function (unsafe) {
        // try {
        //   var html = unsafe.replace(/\{/g, "{")
        //                    .replace(/\}/g, "}")
        //                   //  .replace(/\\/g, "\\")
        //                    .replace(/;/g, ";")
        // } catch (error) {
        //   html = unsafe;
        // }
        return unsafe;
    };
    QuizComponent.prototype.saveQuiz = function (quizForm) {
        var _this = this;
        console.log("email: " + this.email);
        console.log("studentId: " + this.student.studentId);
        console.log("quizId " + quizForm.value.quizId);
        var quiz = {
            answers: []
        };
        this.entries.forEach(function (entry) {
            quiz.answers.push({
                questionId: entry.questionId,
                providedAnswer: entry.select
            });
        });
        //console.log(JSON.stringify(quiz));
        var str = JSON.stringify(quiz);
        var obj = JSON.parse(str);
        this.dataService.addQuizRecord("quizResults", obj, quizForm.value.quizId, this.student.studentId)
            .subscribe(function (res) { return _this.successMessage = "Record added successfully"; }, function (error) { return _this.errorMessage = error; });
        this.thankAndExit();
    }; // end saveQuiz
    QuizComponent.prototype.thankAndExit = function () {
        this.confirmParticipation();
        localStorage.removeItem('email');
        this.router.navigate(['/student']);
    };
    // This is executed by an event on the web page. 
    QuizComponent.prototype.onSelectionChange = function (entry, choice) {
        var _this = this;
        this.selectedEntry = entry;
        this.selectedEntry["select"] = choice;
        //console.log(this.selectedEntry);
        // for (let i = 0; i < this.entries.length; i++) {
        this.entries.forEach(function (entree) {
            if (_this.selectedEntry.questionId == entree.questionId) {
                entree = _this.selectedEntry;
                //console.log("question " + this.selectedEntry.questionId + " already exists in array - overlaying");
                return;
            }
        });
        //console.log("question " + this.selectedEntry.questionId + " does not exist in array - pushing");
        this.entries.push(this.selectedEntry);
    }; // end onSelectionChange
    //everything below here is form validation boiler plate
    QuizComponent.prototype.ngAfterViewChecked = function () {
        this.formChanged();
    };
    QuizComponent.prototype.formChanged = function () {
        var _this = this;
        this.quizForm = this.currentForm;
        this.quizForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(); });
    };
    QuizComponent.prototype.onValueChanged = function () {
        var form = this.quizForm.form;
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    return QuizComponent;
}()); // end QuizComponent
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('quizForm'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* NgForm */]) === "function" && _a || Object)
], QuizComponent.prototype, "currentForm", void 0);
QuizComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-quiz',
        template: __webpack_require__("../../../../../src/app/quiz/quiz.component.html"),
        styles: [__webpack_require__("../../../../../src/app/quiz/quiz.component.css")],
        animations: [__WEBPACK_IMPORTED_MODULE_6__animations_fade_in_animation__["a" /* fadeInAnimation */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["e" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["e" /* Location */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["DomSanitizer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["DomSanitizer"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8__angular_material__["b" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_material__["b" /* MdDialog */]) === "function" && _g || Object])
], QuizComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=quiz.component.js.map

/***/ }),

/***/ "../../../../../src/app/recruiter-form/recruiter-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/recruiter-form/recruiter-form.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n  <ol class=\"breadcrumb\">\n    <li><a routerLink=\"/home\">Home</a></li>\n    <li><a routerLink=\"/recruiter\">Recruiter</a></li>\n    <li class=\"active\">Review Recruiter</li>\n    <li><a class=\"btn btn-primary\" routerLink=\"/recruiter\">Return to Recruiter Login</a></li>\n</ol>\n\n<br><br><br><br><br>\n\n<h1>Manage Recruiter Information</h1>\n\n<div [ngClass]=\"(errorMessage)?'alert alert-danger':'alert alert-success'\" role=\"alert\" *ngIf=\"errorMessage || successMessage\" id=\"deletemsg\">\n    {{errorMessage}} {{successMessage}}\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n\n\n<br>\n\n<form novalidate (ngSubmit)=\"editRecruiter(recruiterForm)\"  #recruiterForm=\"ngForm\" class=\"form-horizontal\">\n  <input [ngModel]=\"recruiter?.recruiterId\" ngModel #recruiterId=\"ngModel\" type=\"hidden\" name=\"recruiterId\">\n\n  <div class=\"form-group\">\n    <label for=\"username\" class=\"col-sm-2 control-label\">User Name</label>\n    <div class=\"col-sm-10\">\n      <input [ngModel]=\"recruiter?.username\" ngModel #username=\"ngModel\" type=\"text\" class=\"form-control\" id=\"username\" name=\"username\" placeholder=\"User Name\" required>\n    <span *ngIf=\"formErrors.username\" class=\"text-danger\">\n          {{ formErrors.username }}\n      </span>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"first_name\" class=\"col-sm-2 control-label\">First Name</label>\n    <div class=\"col-sm-10\">\n      <input [ngModel]=\"recruiter?.firstName\" ngModel #firstName=\"ngModel\" type=\"text\" class=\"form-control\" id=\"firstName\" name=\"firstName\" placeholder=\"First Name\" required>\n      <span *ngIf=\"formErrors.firstName\" class=\"text-danger\">\n          {{ formErrors.firstName }}\n      </span>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"lastName\" class=\"col-sm-2 control-label\">Last Name</label>\n    <div class=\"col-sm-10\">\n      <input [ngModel]=\"recruiter?.lastName\" ngModel #lastName=\"ngModel\" type=\"text\" class=\"form-control\" id=\"lastName\" name=\"lastName\"  placeholder=\"Last Name\" required>\n      <span *ngIf=\"formErrors.lastName\" class=\"text-danger\">\n          {{ formErrors.lastName }}\n      </span>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n      <label for=\"email\" class=\"col-sm-2 control-label\">Email</label>\n      <div class=\"col-sm-10\">\n        <input [ngModel]=\"email\" type=\"text\" class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"Enter Email...\" required minlength=\"2\" maxlength=\"75\" pattern=\"^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$\">\n          <span *ngIf=\"formErrors.email\" class=\"text-danger\">\n            {{ formErrors.email }}\n        </span>\n      </div>\n    </div>\n\n   <div class=\"form-group\">\n    <div class=\"col-sm-offset-2 col-sm-10\">\n      <button [disabled]=\"!recruiterForm.form.valid\" type=\"submit\" class=\"btn btn-primary\">Submit</button>\n    </div>\n  </div>\n</form>\n</section>"

/***/ }),

/***/ "../../../../../src/app/recruiter-form/recruiter-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__animations_fade_in_animation__ = __webpack_require__("../../../../../src/app/animations/fade-in.animation.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecruiterFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RecruiterFormComponent = (function () {
    function RecruiterFormComponent(dataService, route, location) {
        this.dataService = dataService;
        this.route = route;
        this.location = location;
        this.formErrors = {
            'username': '',
            'email': '',
        };
        this.validationMessages = {
            'username': {
                'required': 'User Name is required.'
            },
            'email': {
                'required': 'Email is required',
                'pattern': 'Invalid Email Format'
            },
        };
    }
    RecruiterFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            (params['username']) ? _this.getRecordForEdit() : null;
        });
    };
    RecruiterFormComponent.prototype.getRecordForEdit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.dataService.getRecruiterRecord("recruiter", params['username']); })
            .subscribe(function (recruiter) { return _this.recruiter = recruiter; }, function (error) { return _this.errorMessage = error; });
    };
    RecruiterFormComponent.prototype.editRecruiter = function (recruiter) {
        var _this = this;
        this.dataService.editRecruiterRecord("recruiter", recruiter.value, recruiter.value.recruiterId)
            .subscribe(function (recruiter) { return _this.successMessage = "Record updated successfully"; }, function (error) { return _this.errorMessage = error; });
    };
    // everything below here is form validation boiler plate
    //everything below here is form validation boiler plate
    RecruiterFormComponent.prototype.ngAfterViewChecked = function () {
        this.formChanged();
    };
    RecruiterFormComponent.prototype.formChanged = function () {
        var _this = this;
        this.recruiterForm = this.currentForm;
        this.recruiterForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(); });
    };
    RecruiterFormComponent.prototype.onValueChanged = function () {
        var form = this.recruiterForm.form;
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    return RecruiterFormComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('recruiterForm'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* NgForm */]) === "function" && _a || Object)
], RecruiterFormComponent.prototype, "currentForm", void 0);
RecruiterFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-recruiter-form',
        template: __webpack_require__("../../../../../src/app/recruiter-form/recruiter-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/recruiter-form/recruiter-form.component.css")],
        animations: [__WEBPACK_IMPORTED_MODULE_6__animations_fade_in_animation__["a" /* fadeInAnimation */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["e" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["e" /* Location */]) === "function" && _d || Object])
], RecruiterFormComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=recruiter-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/recruiter/recruiter.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/recruiter/recruiter.component.html":
/***/ (function(module, exports) {

module.exports = "<section @fadeInAnimation>\n  <ol class=\"breadcrumb\">\n    <li><a routerLink=\"/home\">Home</a></li>\n    <li class=\"active\">Recruiter Login</li>\n    <li><a class=\"btn btn-primary\" routerLink=\"/recruiter\">Return to Recruiter Login</a></li>\n</ol>\n\n<br/>\n\n <div [ngClass]=\"(errorMessage)?'alert alert-danger':'alert alert-success'\" role=\"alert\" *ngIf=\"errorMessage || successMessage\" id=\"deletemsg\">\n    {{errorMessage}} {{successMessage}}\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div> \n\n<br><br><br><br>\n\n<h1>Recruiter Login</h1>\n\n<br><br>\n\n    <form novalidate (ngSubmit)=\"authenticate(recruiterForm)\" #recruiterForm=\"ngForm\" class=\"form-horizontal\">\n    <!--<input [ngModel]=\"recruiter?.recruiterId\" ngModel #recruiterId=\"ngModel\" type=\"hidden\" name=\"recruiterId\">-->\n\n    <div class=\"form-group\">\n      <label for=\"username\" class=\"col-sm-2 control-label\">User Name</label>\n      <div class=\"col-sm-4\">\n        <input autocomplete=\"off\" ngModel #username=\"ngModel\" type=\"text\" class=\"form-control\" id=\"username\" name=\"username\" placeholder=\"Enter User Name...\" required>\n          <span *ngIf=\"formErrors.username\" class=\"text-danger\">\n            {{ formErrors.username }}\n        </span>\n      </div>\n    </div>\n        <!--<input [(ngModel)]=\"username\" type=\"text\" class=\"form-control\" id=\"username\" name=\"username\" placeholder=\"Enter User Name...\" required>\n          <span *ngIf=\"formErrors.username\" class=\"text-danger\">\n            {{ formErrors.username }}\n        </span>\n      </div>\n    </div>-->\n\n    <div class=\"form-group\">\n      <label for=\"password\" class=\"col-sm-2 control-label\">Password</label>\n      <div class=\"col-sm-4\">\n        <input autocomplete=\"off\" ngModel #password=\"ngModel\" type=\"text\" class=\"form-control\" id=\"password\" name=\"password\" placeholder=\"Enter Password...\" required>\n          <span *ngIf=\"formErrors.password\" class=\"text-danger\">\n            {{ formErrors.password }}\n        </span>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <div class=\"col-sm-offset-2 col-sm-10\">\n        <button [disabled]=\"!recruiterForm.form.valid\" type=\"submit\" class=\"btn btn-primary\">Submit</button>\n      </div>\n    </div>\n  </form>\n\n  <!--<div class=\"form-group\"> \n      <div class=\"col-sm-offset-2 col-sm-10\">\n        <button [disabled]=\"!recruiterForm.form.valid\" type=\"submit\" class=\"btn btn-primary\" [routerLink]=\"[ '/event']\">Submit</button>\n      </div>\n    </div>\n  </form>-->\n\n\n    <br><br>\n\n    <!--<a class=\"btn btn-primary\" [routerLink]=\"[ '/recruiter/username/', username ]\">Login</a>-->\n\n    <br><br><br><br><br><br><br><br>\n\n    <a class=\"btn btn-default\" [routerLink]=\"[ '/register/add/']\">Register New Recruiter</a>\n    \n\n\n</section>"

/***/ }),

/***/ "../../../../../src/app/recruiter/recruiter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__animations_fade_in_animation__ = __webpack_require__("../../../../../src/app/animations/fade-in.animation.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecruiterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RecruiterComponent = (function () {
    function RecruiterComponent(dataService, route, location, router) {
        this.dataService = dataService;
        this.route = route;
        this.location = location;
        this.router = router;
        this.formErrors = {
            'username': '',
            'password': '',
        };
        this.validationMessages = {
            'username': {
                'required': 'User Name is required'
            },
            'password': {
                'required': 'Password is required'
            }
        };
    }
    RecruiterComponent.prototype.ngOnInit = function () { };
    RecruiterComponent.prototype.authenticate = function (recruiter) {
        var _this = this;
        var username = recruiter.value.username;
        var password = recruiter.value.password;
        this.dataService.recruiterLogin("recruiter/" + username + "/" + password)
            .subscribe(function (recruiter) {
            localStorage.setItem("currentUser", JSON.stringify(recruiter)); //currentUser = potato... can be used later to retrieve get for other functions
            console.log("currentUser: " + JSON.stringify(recruiter));
            _this.router.navigate(['recruiter/events', recruiter]);
        }, function (error) { return _this.errorMessage = "Login Invalid.  Please try again"; });
    };
    //  authenticate(recruiter: NgForm) {
    //     this.dataService.recruiterLogin("recruiter", recruiter.value) 
    //     // this.recruiter = JSON.parse(localStorage.getItem('currentUser')) //could be used later for get
    //         .subscribe(
    //           recruiter => {
    //           localStorage.setItem("currentUser", JSON.stringify(this.recruiter))  //currentUser = potato... can be used later to retrieve get for other functions
    //           // recruiter => console.log(recruiter),
    //           // this.recruiter = {};
    //         },
    //         error =>  this.errorMessage = <any>error);
    //everything below here is form validation boiler plate
    RecruiterComponent.prototype.ngAfterViewChecked = function () {
        this.formChanged();
    };
    RecruiterComponent.prototype.formChanged = function () {
        var _this = this;
        this.recruiterForm = this.currentForm;
        this.recruiterForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(); });
    };
    RecruiterComponent.prototype.onValueChanged = function () {
        var form = this.recruiterForm.form;
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    return RecruiterComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('recruiterForm'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* NgForm */]) === "function" && _a || Object)
], RecruiterComponent.prototype, "currentForm", void 0);
RecruiterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-recruiter',
        template: __webpack_require__("../../../../../src/app/recruiter/recruiter.component.html"),
        styles: [__webpack_require__("../../../../../src/app/recruiter/recruiter.component.css")],
        animations: [__WEBPACK_IMPORTED_MODULE_6__animations_fade_in_animation__["a" /* fadeInAnimation */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["e" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["e" /* Location */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _e || Object])
], RecruiterComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=recruiter.component.js.map

/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<section @fadeInAnimation>\n  <ol class=\"breadcrumb\">\n    <li><a routerLink=\"/home\">Home</a></li>\n    <li class=\"active\">Recruiter Registration</li>\n    <li><a class=\"btn btn-primary\" routerLink=\"/recruiter\">Return to Recruiter Login</a></li>\n</ol>\n\n<br/>\n\n <div [ngClass]=\"(errorMessage)?'alert alert-danger':'alert alert-success'\" role=\"alert\" *ngIf=\"errorMessage || successMessage\" id=\"deletemsg\">\n    {{errorMessage}} {{successMessage}}\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div> \n\n<br><br><br><br>\n\n<h1>Recruiter Registration</h1>\n\n<br><br>\n\n    <form novalidate (ngSubmit)=\"saveRecruiter(registerForm)\" #registerForm=\"ngForm\" class=\"form-horizontal\">\n    <input [ngModel]=\"recruiter?.recruiterId\" ngModel #recruiterId=\"ngModel\" type=\"hidden\" name=\"recruiterId\">    \n        <div class=\"form-group\">\n      <label for=\"username\" class=\"col-sm-2 control-label\">User Name</label>\n      <div class=\"col-sm-4\">\n        <input [(ngModel)]=\"username\" type=\"text\" class=\"form-control\" id=\"username\" name=\"username\" placeholder=\"Enter User Name...\" required>\n          <span *ngIf=\"formErrors.username\" class=\"text-danger\">\n            {{ formErrors.username }}\n        </span>\n      </div>\n    </div>\n\n        <div class=\"form-group\">\n      <label for=\"password\" class=\"col-sm-2 control-label\">Password</label>\n      <div class=\"col-sm-4\">\n        <input [(ngModel)]=\"password\" type=\"text\" class=\"form-control\" id=\"password\" name=\"password\" placeholder=\"Enter Password...\" required>\n          <span *ngIf=\"formErrors.password\" class=\"text-danger\">\n            {{ formErrors.password }}\n        </span>\n      </div>\n    </div>\n\n        <div class=\"form-group\">\n      <label for=\"email\" class=\"col-sm-2 control-label\">Email</label>\n      <div class=\"col-sm-4\">\n        <input [(ngModel)]=\"email\" type=\"text\" class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"Enter Email...\" required>\n          <span *ngIf=\"formErrors.email\" class=\"text-danger\">\n            {{ formErrors.email }}\n        </span>\n      </div>\n    </div>\n    \n        <div class=\"form-group\">\n      <label for=\"firstName\" class=\"col-sm-2 control-label\">First Name</label>\n      <div class=\"col-sm-4\">\n        <input [(ngModel)]=\"firstName\" type=\"text\" class=\"form-control\" id=\"firstName\" name=\"firstName\" placeholder=\"Enter First Name...\" required>\n          <span *ngIf=\"formErrors.firstName\" class=\"text-danger\">\n            {{ formErrors.firstName }}\n        </span>\n      </div>\n    </div>\n    \n        <div class=\"form-group\">\n      <label for=\"lastName\" class=\"col-sm-2 control-label\">Last Name</label>\n      <div class=\"col-sm-4\">\n        <input [(ngModel)]=\"lastName\" type=\"text\" class=\"form-control\" id=\"lastName\" name=\"lastName\" placeholder=\"Enter Last Name...\" required>\n          <span *ngIf=\"formErrors.lastName\" class=\"text-danger\">\n            {{ formErrors.lastName }}\n        </span>\n      </div>\n    </div>\n\n        <div class=\"form-group\">\n        <div class=\"col-sm-offset-2 col-sm-10\">\n            <button [disabled]=\"!registerForm.form.valid\" type=\"submit\" class=\"btn btn-primary\">Submit</button>\n        </div>\n    </div>\n  \n    </form>\n\n    <br><br>\n    \n</section>"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__animations_fade_in_animation__ = __webpack_require__("../../../../../src/app/animations/fade-in.animation.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RegisterComponent = (function () {
    function RegisterComponent(dataService, route, location, router) {
        this.dataService = dataService;
        this.route = route;
        this.location = location;
        this.router = router;
        this.formErrors = {
            'username': '',
            'password': '',
            'email': '',
            'firstName': '',
            'lastName': '',
        };
        this.validationMessages = {
            'username': {
                'required': 'User Name is required'
            },
            'password': {
                'required': 'Password is required'
            },
            'email': {
                'required': 'Email is required'
            },
            'firstName': {
                'required': 'First Name is required'
            },
            'lastName': {
                'required': 'Last Name is required'
            },
        };
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.saveRecruiter = function (recruiter) {
        var _this = this;
        console.log("recruiterId = " + recruiter.value.recruiterId);
        this.dataService.addRecruiterRecord("recruiter", recruiter.value)
            .subscribe(function (recruiter) { return _this.successMessage = "Record added successfully.  Please login to begin your session."; }, function (error) { return _this.errorMessage = error; });
        this.register = {};
        console.log(this.register);
    };
    //everything below here is form validation boiler plate
    RegisterComponent.prototype.ngAfterViewChecked = function () {
        this.formChanged();
    };
    RegisterComponent.prototype.formChanged = function () {
        var _this = this;
        this.registerForm = this.currentForm;
        this.registerForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(); });
    };
    RegisterComponent.prototype.onValueChanged = function () {
        var form = this.registerForm.form;
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    return RegisterComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('registerForm'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* NgForm */]) === "function" && _a || Object)
], RegisterComponent.prototype, "currentForm", void 0);
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/register/register.component.css")],
        animations: [__WEBPACK_IMPORTED_MODULE_6__animations_fade_in_animation__["a" /* fadeInAnimation */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["e" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["e" /* Location */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _e || Object])
], RegisterComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/routing/routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__student_student_component__ = __webpack_require__("../../../../../src/app/student/student.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__student_form_student_form_component__ = __webpack_require__("../../../../../src/app/student-form/student-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__quiz_quiz_component__ = __webpack_require__("../../../../../src/app/quiz/quiz.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__recruiter_recruiter_component__ = __webpack_require__("../../../../../src/app/recruiter/recruiter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__recruiter_form_recruiter_form_component__ = __webpack_require__("../../../../../src/app/recruiter-form/recruiter-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__prospect_prospect_component__ = __webpack_require__("../../../../../src/app/prospect/prospect.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__event_event_component__ = __webpack_require__("../../../../../src/app/event/event.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__event_form_event_form_component__ = __webpack_require__("../../../../../src/app/event-form/event-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__allevents_allevents_component__ = __webpack_require__("../../../../../src/app/allevents/allevents.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */] },
    { path: 'student', component: __WEBPACK_IMPORTED_MODULE_2__student_student_component__["a" /* StudentComponent */] },
    { path: 'student/edit/:email', component: __WEBPACK_IMPORTED_MODULE_3__student_form_student_form_component__["a" /* StudentFormComponent */] },
    { path: 'student/add', component: __WEBPACK_IMPORTED_MODULE_3__student_form_student_form_component__["a" /* StudentFormComponent */] },
    { path: 'quiz', component: __WEBPACK_IMPORTED_MODULE_4__quiz_quiz_component__["a" /* QuizComponent */] },
    { path: 'quiz/:email', component: __WEBPACK_IMPORTED_MODULE_4__quiz_quiz_component__["a" /* QuizComponent */] },
    { path: 'quiz/:studentId', component: __WEBPACK_IMPORTED_MODULE_4__quiz_quiz_component__["a" /* QuizComponent */] },
    { path: 'recruiter', component: __WEBPACK_IMPORTED_MODULE_5__recruiter_recruiter_component__["a" /* RecruiterComponent */] },
    { path: 'recruiter/add', component: __WEBPACK_IMPORTED_MODULE_6__recruiter_form_recruiter_form_component__["a" /* RecruiterFormComponent */] },
    { path: 'register/add', component: __WEBPACK_IMPORTED_MODULE_7__register_register_component__["a" /* RegisterComponent */] },
    { path: 'prospectlist', component: __WEBPACK_IMPORTED_MODULE_8__prospect_prospect_component__["a" /* ProspectComponent */] },
    { path: 'event/students/:eventId', component: __WEBPACK_IMPORTED_MODULE_8__prospect_prospect_component__["a" /* ProspectComponent */] },
    { path: 'allevents', component: __WEBPACK_IMPORTED_MODULE_12__allevents_allevents_component__["a" /* AlleventsComponent */] },
    { path: 'event', component: __WEBPACK_IMPORTED_MODULE_9__event_event_component__["a" /* EventComponent */] },
    { path: 'recruiter/events/:recruiterId', component: __WEBPACK_IMPORTED_MODULE_9__event_event_component__["a" /* EventComponent */] },
    { path: 'event/add', component: __WEBPACK_IMPORTED_MODULE_10__event_form_event_form_component__["a" /* EventFormComponent */] },
    { path: 'event/edit/:eventId', component: __WEBPACK_IMPORTED_MODULE_10__event_form_event_form_component__["a" /* EventFormComponent */] },
    { path: 'event/activate/:eventId', component: __WEBPACK_IMPORTED_MODULE_2__student_student_component__["a" /* StudentComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/status-message/status-message.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/status-message/status-message.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"(errorMessage)?'alert alert-danger':'alert alert-success'\" role=\"alert\" *ngIf=\"errorMessage || successMessage\">\n    {{errorMessage}} {{successMessage}}\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/status-message/status-message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusMessageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatusMessageComponent = (function () {
    function StatusMessageComponent() {
    }
    StatusMessageComponent.prototype.ngOnInit = function () {
    };
    return StatusMessageComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], StatusMessageComponent.prototype, "errorMessage", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], StatusMessageComponent.prototype, "successMessage", void 0);
StatusMessageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-status-message',
        template: __webpack_require__("../../../../../src/app/status-message/status-message.component.html"),
        styles: [__webpack_require__("../../../../../src/app/status-message/status-message.component.css")]
    }),
    __metadata("design:paramtypes", [])
], StatusMessageComponent);

//# sourceMappingURL=status-message.component.js.map

/***/ }),

/***/ "../../../../../src/app/student-form/student-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/student-form/student-form.component.html":
/***/ (function(module, exports) {

module.exports = "<section @fadeInAnimation>\n  <ol class=\"breadcrumb\">\n      <!-- <li><a routerLink=\"/home\">Home</a></li> -->\n      <li><a routerLink=\"/student\">Student Registration</a></li>\n      <li class=\"active\">Student Registration</li>\n  </ol>\n\n\n<a class=\"btn btn-primary\" routerLink=\"/student\">Return to Student Login</a>\n<br /><br />\n\n<div [ngClass]=\"(errorMessage)?'alert alert-danger':'alert alert-success'\" role=\"alert\" *ngIf=\"errorMessage || successMessage\" id=\"deletemsg\">\n    {{errorMessage}} {{successMessage}}\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n\n<form novalidate (ngSubmit)=\"saveStudent(studentForm)\"  #studentForm=\"ngForm\" class=\"form-horizontal\">\n  <input [ngModel]=\"student?.studentId\" ngModel #studentId=\"ngModel\" type=\"hidden\" name=\"studentId\">\n\n  <div class=\"form-group\">\n    <label for=\"email\" class=\"col-sm-2 control-label\">Email</label>\n    <div class=\"col-sm-4\">\n      <input autocomplete=\"off\" [ngModel]=\"student?.email\" ngModel #email=\"ngModel\" type=\"text\" class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"Email\" required minlength=\"2\" maxlength=\"50\" pattern=\"^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$\">\n         <span *ngIf=\"formErrors.email\" class=\"text-danger\">\n          {{ formErrors.email }}\n      </span>\n    </div>\n  </div>\n  \n  <div class=\"form-group\">\n    <label for=\"firstName\" class=\"col-sm-2 control-label\">First Name</label>\n    <div class=\"col-sm-4\">\n      <input [ngModel]=\"student?.firstName\" ngModel #first_name=\"ngModel\" type=\"text\" class=\"form-control\" id=\"firstName\" name=\"firstName\" placeholder=\"First Name\" required minlength=\"2\" maxlength=\"30\">\n        <span *ngIf=\"formErrors.firstName\" class=\"text-danger\">\n          {{ formErrors.firstName }}\n      </span>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"lastName\" class=\"col-sm-2 control-label\">Last Name</label>\n    <div class=\"col-sm-4\">\n      <input [ngModel]=\"student?.lastName\" ngModel #last_name=\"ngModel\" type=\"text\" class=\"form-control\" id=\"lastName\" name=\"lastName\"  placeholder=\"lastName\" required minlength=\"2\" maxlength=\"30\">\n      <span *ngIf=\"formErrors.lastName\" class=\"text-danger\">\n          {{ formErrors.lastName }}\n      </span>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"university\" class=\"col-sm-2 control-label\">University</label>\n    <div class=\"col-sm-4\">\n      <select [ngModel]=\"student?.university\" ngModel #university=\"ngModel\" class=\"form-control\" name=\"university\" id=\"university\" required>\n        <option value=\"Indiana University\">Indiana University</option>\n        <option value=\"Indiana State University\">Indiana State University</option>\n        <option value=\"Purdue University\">Purdue University</option>\n        <option value=\"DePauw University\">DePauw University</option>\n        <option value=\"Saint Mary-of-the-Woods College\">Saint Mary-of-the-Woods College</option>\n        <option value=\"University of Notre Dame \">University of Notre Dame</option>\n        <option value=\"Indiana University–Purdue University Indianapolis\">Indiana University–Purdue University Indianapolis</option>\n        <option value=\"Ivy Tech\">Ivy Tech</option>\n        <option value=\"Butler University\">Butler University</option>        \n        <option value=\"Ball State University\">Ball State University</option>        \n        <option value=\"Rose-Hulman Institute of Technology\">Rose-Hulman Institute of Technology</option>\n        <option value=\"University of Evansville\">University of Evansville</option>        \n      </select>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"major\" class=\"col-sm-2 control-label\">Major</label>\n    <div class=\"col-sm-4\">\n      <select [ngModel]=\"student?.major\" ngModel #major_id=\"ngModel\" class=\"form-control\" name=\"major\" id=\"major\" required>\n        <option value=\"Mathematics\">Mathematics</option>\n        <option value=\"History\">History</option>\n        <option value=\"Business\">Business</option>\n        <option value=\"ComputerScience\">Computer Science</option>\n        <option value=\"ComputerTechnology\">Computer Technology</option>\n        <option value=\"Science\">Science</option>\n        <option value=\"Accounting\">Accounting</option>\n        <option value=\"ActuarialScience\">Actuarial Science</option>\n        <option value=\"Architecture\">Architecture</option>        \n        <option value=\"Biology\">Biology</option>        \n        <option value=\"CrimeLawJustice\">Crime, Law, and Justice</option>        \n        <option value=\"InformationScience\">Information Sciences and Technology</option>        \n      </select>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"gpa\" class=\"col-sm-2 control-label\">GPA</label>\n    <div class=\"col-sm-4\">\n      <input [ngModel]=\"student?.gpa\" ngModel #gpa=\"ngModel\" type=\"text\" class=\"form-control\" id=\"gpa\" name=\"gpa\" placeholder=\"4.0\" required maxLength=\"5\" pattern=\"\\d+\\.\\d+\">\n      <span *ngIf=\"formErrors.gpa\" class=\"text-danger\">\n          {{ formErrors.gpa }}\n      </span>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"phoneNumber\" class=\"col-sm-2 control-label\">Phone Number</label>\n    <div class=\"col-sm-4\">\n      <input [ngModel]=\"student?.phoneNumber\" ngModel #phoneNumber=\"ngModel\" type=\"text\" class=\"form-control\" id=\"phoneNumber\" name=\"phoneNumber\"  placeholder=\"###-###-####\" required minlength=\"2\" maxlength=\"15\">\n      <span *ngIf=\"formErrors.phoneNumber\" class=\"text-danger\">\n          {{ formErrors.phoneNumber }}\n      </span>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"graduationMonth\" class=\"col-sm-2 control-label\">Graduation Month</label>\n    <div class=\"col-sm-4\">\n      <select [ngModel]=\"student?.graduationMonth\" ngModel #graduationMonth=\"ngModel\" class=\"form-control\" name=\"graduationMonth\" id=\"graduationMonth\" required>\n        <option value=\"January\">January</option>\n        <option value=\"February\">February</option>\n        <option value=\"March\">March</option>\n        <option value=\"April\">April</option>\n        <option value=\"May\">May</option>\n        <option value=\"June\">June</option>\n        <option value=\"July\">July</option>\n        <option value=\"August\">August</option>\n        <option value=\"September\">September</option>\n        <option value=\"October\">October</option>\n        <option value=\"November\">November</option>\n        <option value=\"December\">December</option>\n      </select>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"graduationYear\" class=\"col-sm-2 control-label\">Graduation Year</label>\n    <div class=\"col-sm-4\">\n      <select [ngModel]=\"student?.graduationYear\" ngModel #graduationYear=\"ngModel\" class=\"form-control\" name=\"graduationYear\" id=\"graduationYear\" required>\n        <option value=\"2022\">2022</option>        \n        <option value=\"2021\">2021</option>\n        <option value=\"2020\">2020</option>\n        <option value=\"2019\">2019</option>\n        <option value=\"2018\">2018</option>\n        <option value=\"2017\">2017</option>\n        <option value=\"2016\">2016</option>\n        <option value=\"2015\">2015</option>\n        <option value=\"2014\">2014</option>\n        <option value=\"2013\">2013</option>\n        <option value=\"2012\">2012</option>\n        <option value=\"2011\">2011</option>\n        <option value=\"2010\">2010</option>\n        <option value=\"2009\">2009</option>\n        <option value=\"2008\">2008</option>\n        <option value=\"2007\">2007</option>\n        <option value=\"2006\">2006</option>\n        <option value=\"2005\">2005</option>\n        <option value=\"2004\">2004</option>\n        <option value=\"2003\">2003</option>\n        <option value=\"2002\">2002</option>\n        <option value=\"2001\">2001</option>\n        <option value=\"2000\">2000</option>\n        <option value=\"Other\">Other</option>        \n      </select>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"role\" class=\"col-sm-2 control-label\">Development Interest</label>\n    <div class=\"col-sm-4\">\n      <select [ngModel]=\"student?.role\" ngModel #role=\"ngModel\" class=\"form-control\" name=\"role\" id=\"role\" required>\n        <option value=\"Backend\">Backend</option>\n        <option value=\"Frontend\">Frontend</option>\n        <option value=\"Both\">Both</option>\n        <option value=\"Neither\">Neither</option>\n      </select>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <div class=\"col-sm-offset-2 col-sm-10\">\n      <button [disabled]=\"!studentForm.form.valid\" type=\"submit\" class=\"btn btn-primary\">Submit</button>\n    </div>\n  </div>\n\n  </form>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/student-form/student-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__animations_fade_in_animation__ = __webpack_require__("../../../../../src/app/animations/fade-in.animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// lodash gives us the ability to check for an empty student object
// lodash makes JavaScript easier by taking the hassle out of working with arrays, numbers, objects, strings, etc.

var StudentFormComponent = (function () {
    function StudentFormComponent(dataService, route, location, router) {
        this.dataService = dataService;
        this.route = route;
        this.location = location;
        this.router = router;
        //what we actually got from the service when finding by email
        this.student = {};
        //fields that need to be validated
        this.formErrors = {
            'email': '',
            'firstName': '',
            'lastName': '',
            'university': '',
            'major': '',
            'gpa': '',
            'phoneNumber': '',
            'role': '',
            'graduationMonth': '',
            'graduationYear': ''
        };
        this.validationMessages = {
            'email': {
                'required': 'Email is required',
                'pattern': 'Invalid Email Format'
            },
            'firstName': {
                'required': 'First name is required',
                'minlength': 'First name must be at least 2 characters long',
                'maxlength': 'First name cannot be more than 30 characters long'
            },
            'lastName': {
                'required': 'Last name is required',
                'minlength': 'Last name must be at least 2 characters long',
                'maxlength': 'Last name cannot be more than 30 characters long'
            },
            'university': {
                'required': 'University is required'
            },
            'major': {
                'required': 'Major is required'
            },
            'gpa': {
                'pattern': 'GPA must be a decimal'
            },
            'graduationMonth': {
                'required': 'Graduation Month is required'
            },
            'graduationYear': {
                'required': 'Graduation Year is required'
            },
            'role': {
                'required': 'Development Interest is required'
            },
            'phoneNumber': {
                'required': 'Phone Number is required.',
                'minlength': 'Phone Number must be at least 2 characters long',
                'maxlength': 'Phone Number cannot be more than 15 characters long'
            },
        };
    }
    StudentFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentEvent = localStorage.getItem('currentEvent') || null;
        this.route.params
            .subscribe(function (params) {
            if (params['email']) {
                _this.getRecordForEdit();
                _this.default_email = params['email'];
            }
        });
    };
    StudentFormComponent.prototype.getRecordForEdit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.dataService.getStudentRecordByEmail("student", params['email']); })
            .subscribe(function (student) {
            if (__WEBPACK_IMPORTED_MODULE_7_lodash___default.a.isEmpty(student)) {
                _this.student.email = _this.default_email;
            }
            else {
                _this.student = student;
            }
        }, function (error) { return _this.errorMessage = error; });
    };
    //saves student to the databbase using the service to call the api
    //if we had a id on the form and it is a number then edit otherwise create
    // WHEN PERFORMING A PUT OR POST USE THE EVENT ID
    // PUT: student/studentId/eventId
    // POST: student/add/eventId
    StudentFormComponent.prototype.saveStudent = function (student) {
        var _this = this;
        localStorage.setItem('email', student.value.email);
        console.log("saveStudent() - Email is: " + student.value.email);
        if (typeof student.value.studentId === "number") {
            console.log("saveStudent - Update by ID: " + student.value.studentId);
            this.dataService.editStudentRecord("student", student.value, student.value.studentId, this.currentEvent)
                .subscribe(function (student) {
                _this.successMessage = "Record updated successfully";
                _this.router.navigate(['/quiz']);
            }, function (error) { return _this.errorMessage = error; });
        }
        else {
            console.log("saveStudent - Adding New Student");
            this.dataService.addStudentRecord("student", student.value, this.currentEvent)
                .subscribe(function (student) {
                _this.successMessage = "Record added successfully";
                _this.router.navigate(['/quiz']);
            }, function (error) { return _this.errorMessage = error; });
            this.student = {};
        }
    };
    //everything below here is form validation boiler plate
    StudentFormComponent.prototype.ngAfterViewChecked = function () {
        this.formChanged();
    };
    StudentFormComponent.prototype.formChanged = function () {
        var _this = this;
        this.studentForm = this.currentForm;
        this.studentForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(); });
    };
    StudentFormComponent.prototype.onValueChanged = function () {
        var form = this.studentForm.form;
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    return StudentFormComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('studentForm'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* NgForm */]) === "function" && _a || Object)
], StudentFormComponent.prototype, "currentForm", void 0);
StudentFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-student-form',
        template: __webpack_require__("../../../../../src/app/student-form/student-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/student-form/student-form.component.css")],
        animations: [__WEBPACK_IMPORTED_MODULE_6__animations_fade_in_animation__["a" /* fadeInAnimation */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["e" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["e" /* Location */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _e || Object])
], StudentFormComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=student-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/student/student.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/student/student.component.html":
/***/ (function(module, exports) {

module.exports = "  <section @fadeInAnimation>\n    <ol class=\"breadcrumb\">\n      <!-- <li><a routerLink=\"/home\">Home</a></li> -->\n      <li class=\"active\">Student Login</li>\n  </ol>\n  <br/>\n\n  <!-- <form novalidate (ngSubmit)=\"deactivateAndExit\" #deactivateForm=\"ngForm\" class=\"form-horizontal\">\n    <div class=\"form-group\">\n      <div class=\"col-sm-offset-2 col-sm-10\">\n        <button type=\"submit\" class=\"btn btn-primary\">Deactivate</button>\n      </div>\n    </div>\n  </form> -->\n  <button (click)=\"deactivateAndExit()\" class=\"btn btn-primary\">Deactivate</button>\n\n  <br /><br />\n\n  <div [ngClass]=\"(errorMessage)?'alert alert-danger':'alert alert-success'\" role=\"alert\" *ngIf=\"errorMessage || successMessage\" id=\"deletemsg\">\n      {{errorMessage}} {{successMessage}}\n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n      </button>\n  </div> \n      \n\n  <div class=\"panel panel-info\">\n    <div class=\"panel-heading\">\n      <h4>Welcome! Thank You for Participating in the Liberty Mutual Job Fair!</h4>\n    </div>\n    <div class=\"panel-body\">\n      <p>Please enter your email address and click submit.</p>\n      <p>Once logged in, enter your registration information and select a candidate role: </p>\n      <ul>\n        <li>Frontend</li>\n        <li>Backend</li>\n        <li>Both</li>\n        <li>Neither</li>\n      </ul>\n      <p>Some candidates will be given a short quiz that is used to evaluate candidate skill level.</p>\n    </div>\n  </div>\n  \n  \n    <!-- Note: ngSubmit will not be executed because routerLink is re-routing us to studentForm -->\n  <form novalidate (ngSubmit)=\"authenticate(studentForm)\"  #studentForm=\"ngForm\" class=\"form-horizontal\">\n    <div class=\"form-group\">\n      <label for=\"email\" class=\"col-sm-2 control-label\">Email</label>\n      <div class=\"col-sm-4\">\n        <input autocomplete=\"off\" [(ngModel)]=\"email\" type=\"text\" class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"Enter Email...\" required minlength=\"2\" maxlength=\"75\" pattern=\"^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$\">\n          <span *ngIf=\"formErrors.email\" class=\"text-danger\">\n            {{ formErrors.email }}\n        </span>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"col-sm-offset-2 col-sm-10\">\n        <button [disabled]=\"!studentForm.form.valid\" type=\"submit\" class=\"btn btn-primary\" [routerLink]=\"[ '/student/edit/', email ]\">Submit</button>\n      </div>\n    </div>\n  </form>\n\n\n    <!-- two-day data bind to email property in student.component.ts \n    <input type=\"text\" [(ngModel)]=\"email\"/>\n    <a type=\"submit\" class=\"btn btn-primary\" [routerLink]=\"[ '/student/edit/', email ]\">Submit</a> -->\n\n  </section>"

/***/ }),

/***/ "../../../../../src/app/student/student.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__animations_fade_in_animation__ = __webpack_require__("../../../../../src/app/animations/fade-in.animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__deactivate_deactivate_component__ = __webpack_require__("../../../../../src/app/deactivate/deactivate.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var StudentComponent = (function () {
    function StudentComponent(dataService, route, location, router, dialog) {
        this.dataService = dataService;
        this.route = route;
        this.location = location;
        this.router = router;
        this.dialog = dialog;
        this.formErrors = {
            'email': '',
        };
        this.validationMessages = {
            'email': {
                'required': 'Email is required',
                'pattern': 'Invalid Email Format'
            },
        };
    }
    StudentComponent.prototype.ngOnInit = function () { };
    StudentComponent.prototype.deactivateAndExit = function () {
        console.log("inside deactivateAndExit");
        this.deactivateRecruiter();
        localStorage.removeItem('email');
        this.router.navigate(['/events']);
    };
    StudentComponent.prototype.deactivateRecruiter = function () {
        console.log("inside deactivateRecruiter");
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_8__deactivate_deactivate_component__["a" /* DeactivateComponent */], {
            position: {
                top: '',
                bottom: '100px',
                left: '250px',
                right: ''
            },
            height: '300px',
            width: '650px',
        });
        dialogRef.afterClosed().subscribe(function (result) { });
    };
    //everything below here is form validation boiler plate
    StudentComponent.prototype.ngAfterViewChecked = function () {
        this.formChanged();
    };
    StudentComponent.prototype.formChanged = function () {
        var _this = this;
        this.studentForm = this.currentForm;
        this.studentForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(); });
    };
    StudentComponent.prototype.onValueChanged = function () {
        var form = this.studentForm.form;
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    return StudentComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('studentForm'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* NgForm */]) === "function" && _a || Object)
], StudentComponent.prototype, "currentForm", void 0);
StudentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-student',
        template: __webpack_require__("../../../../../src/app/student/student.component.html"),
        styles: [__webpack_require__("../../../../../src/app/student/student.component.css")],
        animations: [__WEBPACK_IMPORTED_MODULE_6__animations_fade_in_animation__["a" /* fadeInAnimation */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["e" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["e" /* Location */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MdDialog */]) === "function" && _f || Object])
], StudentComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=student.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../../../../webpack-dev-server/client/index.js?http:/localhost:4200");
module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[3]);
//# sourceMappingURL=main.bundle.js.map