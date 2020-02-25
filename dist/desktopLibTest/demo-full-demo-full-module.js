(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-full-demo-full-module"],{

/***/ "./src/app/demo-full/demo-cards-grid/demo-cards-grid.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/demo-full/demo-cards-grid/demo-cards-grid.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar>\n\n</app-navbar>\n\n<div class=\"main-container container-fluid\">\n  <!-- Page Container -->\n  <div class=\"page-container\">\n    <!-- Page Sidebar -->\n    <app-sidebar>\n\n    </app-sidebar>\n    <!-- /Page Sidebar -->\n  </div>\n</div>\n\n<!-- Main content-->\n<div class=\"page-content\" [ngStyle]=\"!appSharedService.sideBarVisible && {'margin-left':'43px'}\">\n  <div class=\"page-header position-relative\">\n    <div class=\"header-title\">\n      <h1>\n        Card Grid\n      </h1>\n    </div>\n  </div>\n  <div class=\"page-body\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n        <section id=\"libraryCardGrid\">\n          <h2 class=\"margin-bottom-20\">Library Card Grid Component</h2>\n          <div class=\"well bordered-left bordered-palegreen\">\n            <p> Library Card Grid Component can be used in the library page, search page and in all places where a card grid needs to shown</p>\n            <p>This component internally uses LibraryCard component with type='desktop_textbook'</p>\n            <p>Basically there are 3 types of Grids: </p>\n            <ul class=\"custom-list\">\n              <li>Default Grid - Grid of desktop cards with option to specify maximum cards(i.e, 3, 4 or 5) to be shown in a row and a view all button, Default maximum cards count is 3 </li>\n              <li>Grid of infinite cards - Multiple rows of cards will be displayed with max card items per row(i.e, 3, 4 or 5)</li>\n              <li>Grid of infinite cards with hover -  Same as Grid of infinite cards, but here the cards are of type desktopCards with hover. </li>\n            </ul>\n            <p>You can find more details of the component, various inputs and outputs in the\n              <a href=\"https://github.com/Sunbird-Ed/SunbirdEd-consumption-ngcomponents/blob/master/projects/common-consumption/src/lib/layout/library-cards-grid/library-cards-grid.md\"\n                target=\"_blank\">\n                component's original repository\n              </a>.\n            </p>\n            <p><i><b>Note : </b></i></p>\n            <p>\n              The width of the overall grid is fluid in nature i.e, 100% of the parent conatainer, so user can control the width\n              of the grid based on the parent element in which the card is contained.\n            </p>\n            <p>\n              Card Grid is not restricted to particular language. Based on your <b>i18n</b> preferences pass inputs in the\n              desired language.\n            </p>\n            <p>\n              In offline/online/downloaded scenarios where image attribute changes based on the network or other\n              criteria, cardImg property must be updated to all the cards in the list.\n            </p>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-12 col-sm-12 col-xs-12\">\n              <h4>Default Grid View</h4>\n                <sb-library-cards-grid></sb-library-cards-grid>\n            </div>\n          </div>\n        </section>\n        <hr>\n        <section class=\"libraryCardGridExaples\">\n          <h6 class=\"row-title before-palegreen\">Grid of infinite cards </h6>\n          <div class=\"row\">\n            <div class=\"col-lg-12 col-sm-12 col-xs-12\">\n              <sb-library-cards-grid [title]=\"subjects[4]\" [contentList]=\"contentList\"\n                  [type]=\"'infinite_card_grid'\" (cardClick)=\"cardClick($event)\">\n              </sb-library-cards-grid>\n            </div>\n          </div>\n        </section>\n        <hr>\n        <section class=\"libraryCardGridExaples\">\n          <h6 class=\"row-title before-palegreen\">Grid of infinite cards with 4 cards per row</h6>\n          <div class=\"row\">\n            <div class=\"col-lg-12 col-sm-12 col-xs-12\">\n              <sb-library-cards-grid [title]=\"subjects[2]\" [contentList]=\"contentList\"\n                  [type]=\"'infinite_card_grid'\" [maxCardCount]=\"4\" (cardClick)=\"cardClick($event)\">\n              </sb-library-cards-grid>\n            </div>\n          </div>\n        </section>\n        <hr>\n        <section class=\"libraryCardGridExaples\">\n          <h6 class=\"row-title before-palegreen\">Grid of infinite cards with hover </h6>\n          <div class=\"row\">\n            <div class=\"col-lg-12 col-sm-12 col-xs-12\">\n              <sb-library-cards-grid [title]=\"subjects[1]\" [contentList]=\"contentList\"\n                [type]=\"'infinite_card_grid_with_hover'\" [maxCardCount]=\"4\" (cardClick)=\"cardClick($event)\"\n                (hoverActionClick)=\"test($event);\">\n              </sb-library-cards-grid>\n            </div>\n          </div>\n        </section>\n\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/demo-full/demo-cards-grid/demo-cards-grid.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/demo-full/demo-cards-grid/demo-cards-grid.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8tZnVsbC9kZW1vLWNhcmRzLWdyaWQvZGVtby1jYXJkcy1ncmlkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/demo-full/demo-cards-grid/demo-cards-grid.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/demo-full/demo-cards-grid/demo-cards-grid.component.ts ***!
  \************************************************************************/
/*! exports provided: DemoCardsGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoCardsGridComponent", function() { return DemoCardsGridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.service */ "./src/app/demo-full/shared.service.ts");



var DemoCardsGridComponent = /** @class */ (function () {
    function DemoCardsGridComponent(appSharedService) {
        this.appSharedService = appSharedService;
        this.subjects = ['english', 'mathematics', 'geology', 'biology', 'zoology', 'Botany', 'Environmental Science'];
        this.contentList = [
            {
                "ownershipType": [
                    "createdBy"
                ],
                "previewUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/ecml/do_21256975952798515213721-latest",
                "keywords": [
                    "dadaf"
                ],
                "subject": "Tamil",
                "channel": "in.ekstep",
                "downloadUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/ecar_files/do_21256975952798515213721/creation-100100_1542778850847_do_21256975952798515213721_2.0.ecar",
                "organisation": [
                    "Sachin 2808"
                ],
                "language": [
                    "English"
                ],
                "variants": {
                    "spine": {
                        "ecarUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/ecar_files/do_21256975952798515213721/creation-100100_1542778851702_do_21256975952798515213721_2.0_spine.ecar",
                        "size": 797118
                    }
                },
                "mimeType": "application/vnd.ekstep.ecml-archive",
                "objectType": "Content",
                "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2124899901836247041294/artifact/0306022-1.jpg_1524657005308.jpg",
                "gradeLevel": [
                    "Class 2"
                ],
                "collections": [
                    "do_21256985173761228816314",
                    "do_2124396034467676161971",
                    "do_21256984927485952016311"
                ],
                "appId": "staging.sunbird.portal",
                "artifactUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21256975952798515213721/artifact/1542778847745_do_21256975952798515213721.zip",
                "contentEncoding": "gzip",
                "contentType": "Resource",
                "lastUpdatedBy": "8d28e44c-b295-42be-8417-dd756486ff85",
                "identifier": "do_21256975952798515213721",
                "audience": [
                    "Learner"
                ],
                "publishChecklist": [
                    "No Hate speech, Abuse, Violence, Profanity",
                    "No Sexual content, Nudity or Vulgarity",
                    "No Discrimination or Defamation",
                    "Is suitable for children",
                    "Appropriate Title, Description",
                    "Correct Board, Grade, Subject, Medium",
                    "Appropriate tags such as Resource Type, Concepts",
                    "Relevant Keywords",
                    "Content plays correctly",
                    "Can see the content clearly on Desktop and App",
                    "Audio (if any) is clear and easy to understand",
                    "No Spelling mistakes in the text",
                    "Language is simple to understand"
                ],
                "visibility": "Default",
                "consumerId": "fa271a76-c15a-4aa1-adff-31dd04682a1f",
                "mediaType": "content",
                "osId": "org.ekstep.quiz.app",
                "lastPublishedBy": "86dd77ad-18d7-4d27-b72c-ba732b4009d3",
                "graph_id": "domain",
                "nodeType": "DATA_NODE",
                "version": 2,
                "prevState": "Processing",
                "lastPublishedOn": "2018-11-21T05:40:48.675+0000",
                "size": 7813097,
                "name": "Creation 100100  Creation 100100  Creation 100100  Creation 100100  Creation 100100  Creation 100100  Creation 100100  Creation 100100  Creation 100100  Creation 100100  Creation 100100  Creation 100100  Creation 100100  Creation 100100  Creation 100100  Creation 100100  Creation 100100  Creation 100100  Creation 100100  Creation 100100  Creation 100100  Creation 100100  ",
                "attributions": [
                    "testing"
                ],
                "status": "Live",
                "totalQuestions": 2,
                "orgDetails": {},
                "code": "org.sunbird.WtVkXR",
                "description": "trikjr",
                "medium": "Telugu",
                "streamingUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/ecml/do_21256975952798515213721-latest",
                "idealScreenSize": "normal",
                "createdOn": "2018-08-20T06:10:37.421+0000",
                "badgeAssertions": [
                    {
                        "issuerId": "issuerslug-345",
                        "assertionId": "fa2ec612-18da-4048-b146-a8846588a9a5",
                        "badgeClassImage": "https://ntpstaging.blob.core.windows.net/badgr/uploads/badges/5dfe8927e565723cfb1c2d2fe5a1ac1f.png",
                        "badgeId": "badgeslug-85",
                        "badgeClassName": "Best guide",
                        "createdTS": 1534759115237,
                        "status": "active"
                    }
                ],
                "contentDisposition": "inline",
                "lastUpdatedOn": "2018-11-21T05:40:45.040+0000",
                "SYS_INTERNAL_LAST_UPDATED_ON": "2018-11-21T05:40:51.986+0000",
                "createdFor": [
                    "0125683555607347207"
                ],
                "creator": "Sham r",
                "os": [
                    "All"
                ],
                "totalScore": 3,
                "pkgVersion": 2,
                "versionKey": "1542778846752",
                "idealScreenDensity": "hdpi",
                "s3Key": "ecar_files/do_21256975952798515213721/creation-100100_1542778850847_do_21256975952798515213721_2.0.ecar",
                "framework": "NCF",
                "lastSubmittedOn": "2018-08-16T04:50:00.554+0000",
                "createdBy": "8d28e44c-b295-42be-8417-dd756486ff85",
                "compatibilityLevel": 2,
                "board": "CBSE",
                "resourceType": "Learn",
                "node_id": 409230,
                "cardImg": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2124899901836247041294/artifact/0306022-1.jpg_1524657005308.jpg",
                "hoverData": {
                    "note": "Go to “My Downloads” to find this textbook",
                    "actions": [
                        {
                            "type": "save",
                            "label": "Save to pendrive",
                            "disabled": true
                        },
                        {
                            "type": "open",
                            "label": "Open"
                        }
                    ]
                }
            },
            {
                "ownershipType": [
                    "createdBy"
                ],
                "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2125047996214067201105/pdf-sample.pdf",
                "keywords": [
                    "test"
                ],
                "subject": "Urdu",
                "channel": "in.ekstep",
                "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2125047996214067201105/16may-pdf-upload_1538552344206_do_2125047996214067201105_4.0.ecar",
                "showNotification": true,
                "language": [
                    "English"
                ],
                "variants": {
                    "spine": {
                        "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2125047996214067201105/16may-pdf-upload_1538552344279_do_2125047996214067201105_4.0_spine.ecar",
                        "size": 13413
                    }
                },
                "mimeType": "application/pdf",
                "objectType": "Content",
                "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2125047996214067201105/artifact/1466505161547apple.thumb.png",
                "gradeLevel": [
                    "Class 2"
                ],
                "collections": [
                    "do_21257125420203212817093",
                    "do_21257827911837286411681",
                    "do_21257133955701145617133",
                    "do_21257124179043123217073",
                    "do_21257142133474918417187",
                    "do_21260466111629721611377",
                    "do_21257125905047552017102",
                    "do_2126138400531742721505",
                    "do_21257131794698240017119",
                    "do_21257136897708851217164",
                    "do_21257144778190028817196",
                    "do_21260466236003942411379",
                    "do_21257124195636838417074",
                    "do_21257135975308492817152",
                    "do_21260465839606988811374",
                    "do_21257136783278080017162",
                    "do_21271796456817459211808",
                    "do_2126138352511385601500",
                    "do_2127099066970193921930",
                    "do_21257131719372800017118",
                    "do_21257144699138048017195"
                ],
                "appId": "staging.diksha.portal",
                "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2125047996214067201105/pdf-sample.pdf",
                "contentEncoding": "identity",
                "sYS_INTERNAL_LAST_UPDATED_ON": "2018-10-03T07:39:04.363+0000",
                "contentType": "Resource",
                "lastUpdatedBy": "bb335f84-f624-4bdd-9e5e-95c62dc690ff",
                "identifier": "do_2125047996214067201105",
                "audience": [
                    "Learner"
                ],
                "publishChecklist": [
                    "No Hate speech, Abuse, Violence, Profanity",
                    "No Sexual content, Nudity or Vulgarity",
                    "No Discrimination or Defamation",
                    "Is suitable for children",
                    "Appropriate Title, Description",
                    "Correct Board, Grade, Subject, Medium",
                    "Appropriate tags such as Resource Type, Concepts",
                    "Relevant Keywords",
                    "Content plays correctly",
                    "Can see the content clearly on Desktop and App",
                    "Audio (if any) is clear and easy to understand",
                    "No Spelling mistakes in the text",
                    "Language is simple to understand"
                ],
                "visibility": "Default",
                "consumerId": "a9cb3a83-a164-4bf0-aa49-b834cebf1c07",
                "mediaType": "content",
                "osId": "org.ekstep.quiz.app",
                "lastPublishedBy": "bb335f84-f624-4bdd-9e5e-95c62dc690ff",
                "languageCode": "en",
                "graph_id": "domain",
                "nodeType": "DATA_NODE",
                "pragma": [
                    "external"
                ],
                "prevState": "Live",
                "lastPublishedOn": "2018-10-03T07:39:04.206+0000",
                "size": 17905,
                "concepts": [
                    "AI33"
                ],
                "name": "16MAY-PDF Upload",
                "status": "Live",
                "orgDetails": {},
                "code": "be8e0283-d492-4d64-8e44-a00b8e856512",
                "description": "testing by umesh",
                "medium": "Telugu",
                "streamingUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2125047996214067201105/pdf-sample.pdf",
                "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/1466505161547apple.png",
                "idealScreenSize": "normal",
                "createdOn": "2018-05-16T09:59:57.534+0000",
                "badgeAssertions": [
                    {
                        "issuerId": "issuerslug-377",
                        "assertionId": "236121b8-b2fd-4c62-85a9-5f011433f3e8",
                        "badgeClassImage": "https://ntpstaging.blob.core.windows.net/badgr/uploads/badges/b4ea6f2d3bbd4375195ed74802712b4a.png",
                        "badgeId": "badgeslug-121",
                        "badgeClassName": "Best author",
                        "createdTS": 1545893001107,
                        "status": "active"
                    }
                ],
                "contentDisposition": "inline",
                "lastUpdatedOn": "2018-10-03T07:39:03.405+0000",
                "SYS_INTERNAL_LAST_UPDATED_ON": "2018-12-27T06:43:21.205+0000",
                "dialcodeRequired": "No",
                "createdFor": [
                    "01250469287604224011"
                ],
                "creator": "May creator",
                "os": [
                    "All"
                ],
                "pkgVersion": 4,
                "versionKey": "1534575021960",
                "idealScreenDensity": "hdpi",
                "s3Key": "ecar_files/do_2125047996214067201105/16may-pdf-upload_1538552344206_do_2125047996214067201105_4.0.ecar",
                "framework": "NCF",
                "lastSubmittedOn": "2018-05-16T10:01:30.626+0000",
                "createdBy": "9541757e-976e-47ee-b981-2f0f312529b0",
                "compatibilityLevel": 4,
                "attribution": "test",
                "board": "CBSE",
                "resourceType": "Test",
                "node_id": 199891,
                "cardImg": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2125047996214067201105/artifact/1466505161547apple.thumb.png",
                "hoverData": {
                    "note": "Go to “My Downloads” to find this textbook",
                    "actions": [
                        {
                            "type": "save",
                            "label": "Save to pendrive"
                        },
                        {
                            "type": "open",
                            "label": "Open"
                        }
                    ]
                }
            },
            {
                "ownershipType": [
                    "createdFor"
                ],
                "previewUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/ecml/do_21266324379998617614877-latest",
                "subject": "English",
                "channel": "in.ekstep",
                "questions": [
                    "do_21266327656724070415486"
                ],
                "downloadUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/ecar_files/do_21266324379998617614877/r05_test_1545810351946_do_21266324379998617614877_1.0.ecar",
                "organisation": [
                    "Sachin 2808"
                ],
                "language": [
                    "English"
                ],
                "mimeType": "application/vnd.ekstep.ecml-archive",
                "variants": {
                    "spine": {
                        "ecarUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/ecar_files/do_21266324379998617614877/r05_test_1545810352220_do_21266324379998617614877_1.0_spine.ecar",
                        "size": 29291
                    }
                },
                "editorState": "{\"plugin\":{\"noOfExtPlugins\":14,\"extPlugins\":[{\"plugin\":\"org.ekstep.contenteditorfunctions\",\"version\":\"1.2\"},{\"plugin\":\"org.ekstep.keyboardshortcuts\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.richtext\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.iterator\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.navigation\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.mathtext\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.libs.ckeditor\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.questionunit\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.keyboard\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.questionunit.mcq\",\"version\":\"1.1\"},{\"plugin\":\"org.ekstep.questionunit.mtf\",\"version\":\"1.1\"},{\"plugin\":\"org.ekstep.questionunit.reorder\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.questionunit.sequence\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.questionunit.ftb\",\"version\":\"1.0\"}]},\"stage\":{\"noOfStages\":7,\"currentStage\":\"bb41b09e-151d-4194-aa6e-54132bd73ee3\",\"selectedPluginObject\":\"65131bc5-6092-4116-b648-231c8a1846ad\"},\"sidebar\":{\"selectedMenu\":\"settings\"}}",
                "objectType": "Content",
                "gradeLevel": [
                    "Class 5"
                ],
                "appIcon": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21266324379998617614877/artifact/icon_1545638427515.thumb.png",
                "collections": [
                    "do_21266328015857254415496",
                    "do_21266330591811993615858",
                    "do_21266330034026086415838",
                    "do_21266328823947264015798",
                    "do_21266327990500556815494"
                ],
                "appId": "staging.diksha.portal",
                "contentEncoding": "gzip",
                "artifactUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21266324379998617614877/artifact/1545810351578_do_21266324379998617614877.zip",
                "lockKey": "cbde56e1-5337-41bf-81c9-f155a29ece3e",
                "contentType": "Resource",
                "identifier": "do_21266324379998617614877",
                "lastUpdatedBy": "d32e170d-010b-4bc5-ae55-3ac5e547e35b",
                "audience": [
                    "Instructor"
                ],
                "visibility": "Default",
                "consumerId": "a9cb3a83-a164-4bf0-aa49-b834cebf1c07",
                "mediaType": "content",
                "osId": "org.ekstep.quiz.app",
                "graph_id": "domain",
                "nodeType": "DATA_NODE",
                "lastPublishedBy": "86dd77ad-18d7-4d27-b72c-ba732b4009d3",
                "version": 2,
                "pragma": [
                    "external"
                ],
                "prevState": "Review",
                "size": 1725857,
                "lastPublishedOn": "2018-12-26T07:45:51.946+0000",
                "IL_FUNC_OBJECT_TYPE": "Content",
                "name": "R05_Test",
                "status": "Live",
                "totalQuestions": 1,
                "orgDetails": {},
                "code": "org.sunbird.rLVEAi",
                "description": "ncieioneio",
                "medium": "English",
                "streamingUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/ecml/do_21266324379998617614877-latest",
                "idealScreenSize": "normal",
                "posterImage": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21266186999677747214484/artifact/icon_1545638427515.png",
                "createdOn": "2018-12-26T06:35:27.927+0000",
                "badgeAssertions": [
                    {
                        "issuerId": "issuerslug-377",
                        "assertionId": "a0f07d96-8a35-4f4e-a233-ee0a09c8fd5c",
                        "badgeClassImage": "https://ntpstaging.blob.core.windows.net/badgr/uploads/badges/27041728dd75b0b7c8e7e61806e9eccd.png",
                        "badgeId": "badgeslug-121",
                        "badgeClassName": "Best author",
                        "createdTS": 1545893080571,
                        "status": "active"
                    }
                ],
                "contentDisposition": "inline",
                "lastUpdatedOn": "2018-12-26T07:45:48.738+0000",
                "SYS_INTERNAL_LAST_UPDATED_ON": "2019-05-19T03:08:08.353+0000",
                "dialcodeRequired": "No",
                "owner": "Sachin 2808",
                "creator": "Som r",
                "createdFor": [
                    "0125683555607347207"
                ],
                "lastStatusChangedOn": "2019-05-19T03:08:08.340+0000",
                "IL_SYS_NODE_TYPE": "DATA_NODE",
                "os": [
                    "All"
                ],
                "totalScore": 4,
                "pkgVersion": 1,
                "versionKey": "1545810348738",
                "idealScreenDensity": "hdpi",
                "framework": "NCF",
                "s3Key": "ecar_files/do_21266324379998617614877/r05_test_1545810351946_do_21266324379998617614877_1.0.ecar",
                "lastSubmittedOn": "2018-12-26T07:45:07.000+0000",
                "me_averageRating": 5,
                "createdBy": "d32e170d-010b-4bc5-ae55-3ac5e547e35b",
                "compatibilityLevel": 4,
                "IL_UNIQUE_ID": "do_21266324379998617614877",
                "ownedBy": "0125683555607347207",
                "board": "CBSE",
                "resourceType": "Test",
                "node_id": 446923,
                "cardImg": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21266324379998617614877/artifact/icon_1545638427515.thumb.png",
                "hoverData": {
                    "actions": [
                        {
                            "type": "download",
                            "label": "Download"
                        },
                        {
                            "type": "open",
                            "label": "Open"
                        }
                    ]
                }
            },
            {
                "ownershipType": [
                    "createdBy"
                ],
                "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/ecml/do_21258040361213952015738-latest",
                "subject": "English",
                "channel": "in.ekstep",
                "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_21258040361213952015738/__1559119939572_do_21258040361213952015738_5.0.ecar",
                "organisation": [
                    "SAP"
                ],
                "language": [
                    "English"
                ],
                "variants": {
                    "spine": {
                        "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_21258040361213952015738/__1559119939825_do_21258040361213952015738_5.0_spine.ecar",
                        "size": 33538
                    }
                },
                "mimeType": "application/vnd.ekstep.ecml-archive",
                "objectType": "Content",
                "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_21258040361213952015738/artifact/download-3_1531474695189.thumb.jpg",
                "gradeLevel": [
                    "Class 1"
                ],
                "collections": [
                    "do_212608901045985280167",
                    "do_2126335427795763201487",
                    "do_21265908814154137613730",
                    "do_212694392468717568118095",
                    "do_21265980189786112013956",
                    "do_21271627854903705616706",
                    "do_212608898352807936164",
                    "do_2127730122172579841694",
                    "do_2127730188304384001696",
                    "do_2127730642698813441698",
                    "do_2127731185278074881720",
                    "do_2127736460745441281727",
                    "do_2127737426502615041759",
                    "do_2127781798791577601141",
                    "do_2127781975501127681155",
                    "do_2127785086812733441158",
                    "do_2127785106696355841160",
                    "do_2127815506724044801557",
                    "do_21279071611953971211627",
                    "do_21279071611953971211627.img"
                ],
                "appId": "staging.diksha.app",
                "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_21258040361213952015738/artifact/1535697984690_do_21258040361213952015738.zip",
                "contentEncoding": "gzip",
                "sYS_INTERNAL_LAST_UPDATED_ON": "2018-10-03T09:36:54.793+0000",
                "contentType": "Resource",
                "lastUpdatedBy": "74400baf-7f32-407a-9d79-265ecd3f6952",
                "identifier": "do_21258040361213952015738",
                "audience": [
                    "Learner"
                ],
                "publishChecklist": [
                    "No Hate speech, Abuse, Violence, Profanity",
                    "No Sexual content, Nudity or Vulgarity",
                    "No Discrimination or Defamation",
                    "Is suitable for children",
                    "Appropriate Title, Description",
                    "Correct Board, Grade, Subject, Medium",
                    "Appropriate tags such as Resource Type, Concepts",
                    "Relevant Keywords",
                    "Content plays correctly",
                    "Can see the content clearly on Desktop and App",
                    "Audio (if any) is clear and easy to understand",
                    "No Spelling mistakes in the text",
                    "Language is simple to understand"
                ],
                "visibility": "Default",
                "consumerId": "a9cb3a83-a164-4bf0-aa49-b834cebf1c07",
                "mediaType": "content",
                "osId": "org.ekstep.quiz.app",
                "lastPublishedBy": "ekstep",
                "languageCode": "en",
                "graph_id": "domain",
                "nodeType": "DATA_NODE",
                "version": 2,
                "prevState": "Review",
                "size": 371123,
                "lastPublishedOn": "2019-05-29T08:52:19.571+0000",
                "name": "!@#$%^&*()_+",
                "status": "Live",
                "totalQuestions": 1,
                "orgDetails": {},
                "code": "org.sunbird.rC8eWN",
                "description": "",
                "medium": "English",
                "streamingUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/ecml/do_21258040361213952015738-latest",
                "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_21254584070116966411188/artifact/download-3_1531474695189.jpg",
                "idealScreenSize": "normal",
                "createdOn": "2018-08-31T05:36:40.308+0000",
                "badgeAssertions": [
                    {
                        "issuerId": "issuerslug-358",
                        "assertionId": "e338fba4-0064-4225-8791-dcac17f80511",
                        "badgeClassImage": "https://ntpstaging.blob.core.windows.net/badgr/uploads/badges/f350797e550dea70a968ce1bb4b3060b.png",
                        "badgeId": "badgeslug-100",
                        "badgeClassName": "Best book",
                        "createdTS": 1537253744517,
                        "status": "active"
                    }
                ],
                "contentDisposition": "inline",
                "lastUpdatedOn": "2019-05-29T08:52:19.134+0000",
                "SYS_INTERNAL_LAST_UPDATED_ON": "2019-05-30T07:22:39.210+0000",
                "dialcodeRequired": "No",
                "createdFor": [
                    "012530141516660736208"
                ],
                "creator": "Helington N",
                "lastStatusChangedOn": "2019-05-30T07:22:39.203+0000",
                "os": [
                    "All"
                ],
                "totalScore": 1,
                "pkgVersion": 5,
                "versionKey": "1535697983606",
                "idealScreenDensity": "hdpi",
                "s3Key": "ecar_files/do_21258040361213952015738/__1559119939572_do_21258040361213952015738_5.0.ecar",
                "framework": "NCF",
                "lastSubmittedOn": "2019-05-29T08:57:32.552+0000",
                "createdBy": "0e0ea1db-dbad-4202-bc73-dfc8b122296f",
                "compatibilityLevel": 2,
                "board": "CBSE",
                "resourceType": "Learn",
                "node_id": 425893,
                "cardImg": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_21258040361213952015738/artifact/download-3_1531474695189.thumb.jpg",
                "hoverData": {
                    "note": "Go to “My Downloads” to find this textbook",
                    "actions": [
                        {
                            "type": "save",
                            "label": "Save to pendrive"
                        },
                        {
                            "type": "open",
                            "label": "Open"
                        }
                    ]
                }
            },
            {
                "ownershipType": [
                    "createdBy"
                ],
                "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_21252611650918809611434/the-problems-of-philosophy-lewistheme.epub",
                "keywords": [
                    "Anirban epub"
                ],
                "subject": "Geography",
                "channel": "in.ekstep",
                "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_21252611650918809611434/anirban-epub_1529067178577_do_21252611650918809611434_1.0.ecar",
                "showNotification": true,
                "language": [
                    "English"
                ],
                "variants": {
                    "spine": {
                        "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_21252611650918809611434/anirban-epub_1529067178772_do_21252611650918809611434_1.0_spine.ecar",
                        "size": 100945
                    }
                },
                "mimeType": "application/epub",
                "objectType": "Content",
                "gradeLevel": [
                    "Class 1"
                ],
                "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_21252611650918809611434/artifact/localhost_1524724918337.thumb.png",
                "collections": [
                    "do_21252660020819558411474",
                    "do_21271420346162380816189"
                ],
                "appId": "staging.diksha.portal",
                "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_21252611650918809611434/the-problems-of-philosophy-lewistheme.epub",
                "contentEncoding": "gzip",
                "contentType": "Resource",
                "lastUpdatedBy": "07ebd230-bfed-4d29-a849-f5033d087d66",
                "identifier": "do_21252611650918809611434",
                "audience": [
                    "Learner"
                ],
                "publishChecklist": [
                    "No Hate speech, Abuse, Violence, Profanity",
                    "No Sexual content, Nudity or Vulgarity",
                    "No Discrimination or Defamation",
                    "Is suitable for children",
                    "Appropriate Title, Description",
                    "Correct Board, Grade, Subject, Medium",
                    "Appropriate tags such as Resource Type, Concepts",
                    "Relevant Keywords",
                    "Content plays correctly",
                    "Can see the content clearly on Desktop and App",
                    "Audio (if any) is clear and easy to understand",
                    "No Spelling mistakes in the text",
                    "Language is simple to understand"
                ],
                "visibility": "Default",
                "consumerId": "a9cb3a83-a164-4bf0-aa49-b834cebf1c07",
                "mediaType": "content",
                "osId": "org.ekstep.quiz.app",
                "lastPublishedBy": "07ebd230-bfed-4d29-a849-f5033d087d66",
                "graph_id": "domain",
                "nodeType": "DATA_NODE",
                "prevState": "Review",
                "lastPublishedOn": "2018-06-15T12:52:58.577+0000",
                "size": 481709,
                "concepts": [
                    "C3"
                ],
                "name": "Anirban epub",
                "status": "Live",
                "orgDetails": {},
                "code": "13e938d6-4327-4a37-b835-19b5b829072c",
                "description": "Anirban epub",
                "medium": "Kannada",
                "streamingUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_21252611650918809611434/the-problems-of-philosophy-lewistheme.epub",
                "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2124905465279692801410/artifact/localhost_1524724918337.png",
                "idealScreenSize": "normal",
                "createdOn": "2018-06-15T12:49:16.687+0000",
                "badgeAssertions": [
                    {
                        "issuerId": "issuerslug-377",
                        "assertionId": "b02e3191-2418-486e-bf95-f1c8033fb7e7",
                        "badgeClassImage": "https://ntpstaging.blob.core.windows.net/badgr/uploads/badges/3b66a3de8e92dd6f027042cb902ba418.png",
                        "badgeId": "badgeslug-121",
                        "badgeClassName": "Best author",
                        "createdTS": 1545893133486,
                        "status": "active"
                    },
                    {
                        "issuerId": "issuerslug-377",
                        "assertionId": "261e77b4-4b1b-49de-affd-aa3c408138f8",
                        "badgeClassImage": "https://ntpstaging.blob.core.windows.net/badgr/uploads/badges/634d8d9a413f3e48d8a5330ba7753a00.png",
                        "badgeId": "badgeslug-121",
                        "badgeClassName": "Best author",
                        "createdTS": 1546408540297,
                        "status": "active"
                    }
                ],
                "contentDisposition": "inline",
                "lastUpdatedOn": "2018-06-15T12:52:58.285+0000",
                "SYS_INTERNAL_LAST_UPDATED_ON": "2019-01-02T05:55:40.853+0000",
                "dialcodeRequired": "No",
                "createdFor": [
                    "0124758436944117762"
                ],
                "creator": "Demo User",
                "os": [
                    "All"
                ],
                "pkgVersion": 1,
                "versionKey": "1529067178285",
                "idealScreenDensity": "hdpi",
                "s3Key": "ecar_files/do_21252611650918809611434/anirban-epub_1529067178577_do_21252611650918809611434_1.0.ecar",
                "framework": "NCF",
                "lastSubmittedOn": "2018-06-15T12:50:16.940+0000",
                "createdBy": "810108e3-0ea2-4b60-9505-1a7757c6409a",
                "compatibilityLevel": 4,
                "board": "CBSE",
                "resourceType": "Practice",
                "node_id": 377569,
                "cardImg": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_21252611650918809611434/artifact/localhost_1524724918337.thumb.png",
                "hoverData": {
                    "actions": [
                        {
                            "type": "download",
                            "label": "Download"
                        },
                        {
                            "type": "open",
                            "label": "Open"
                        }
                    ]
                }
            },
            {
                "ownershipType": [
                    "createdBy"
                ],
                "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/ecml/do_21252884005676646411974-latest",
                "keywords": [
                    "ecwewcewce"
                ],
                "subject": "English",
                "channel": "in.ekstep",
                "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_21252884005676646411974/rajasthan_1529399625145_do_21252884005676646411974_1.0.ecar",
                "organisation": [
                    "Consumption Org",
                    "ORG25"
                ],
                "language": [
                    "English"
                ],
                "variants": {
                    "spine": {
                        "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_21252884005676646411974/rajasthan_1529399625299_do_21252884005676646411974_1.0_spine.ecar",
                        "size": 51673
                    }
                },
                "mimeType": "application/vnd.ekstep.ecml-archive",
                "objectType": "Content",
                "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_21252884005676646411974/artifact/3_1519885914935.thumb.jpg",
                "gradeLevel": [
                    "Class 1"
                ],
                "collections": [
                    "do_21275320638107648011033",
                    "do_21252944504394547212198",
                    "do_21252944428500582412195"
                ],
                "appId": "staging.diksha.portal",
                "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_21252884005676646411974/artifact/1529399624900_do_21252884005676646411974.zip",
                "contentEncoding": "gzip",
                "contentType": "Resource",
                "lastUpdatedBy": "68777b59-b28b-4aee-88d6-50d46e4c3509",
                "identifier": "do_21252884005676646411974",
                "audience": [
                    "Learner"
                ],
                "publishChecklist": [
                    "No Hate speech, Abuse, Violence, Profanity",
                    "No Sexual content, Nudity or Vulgarity",
                    "No Discrimination or Defamation",
                    "Is suitable for children",
                    "Relevant Keywords",
                    "Appropriate tags such as Resource Type, Concepts",
                    "Correct Board, Grade, Subject, Medium",
                    "Appropriate Title, Description",
                    "Content plays correctly",
                    "Can see the content clearly on Desktop and App",
                    "Audio (if any) is clear and easy to understand",
                    "No Spelling mistakes in the text",
                    "Language is simple to understand"
                ],
                "visibility": "Default",
                "consumerId": "a9cb3a83-a164-4bf0-aa49-b834cebf1c07",
                "mediaType": "content",
                "osId": "org.ekstep.quiz.app",
                "lastPublishedBy": "68777b59-b28b-4aee-88d6-50d46e4c3509",
                "graph_id": "domain",
                "nodeType": "DATA_NODE",
                "version": 2,
                "prevState": "Review",
                "size": 153803,
                "lastPublishedOn": "2018-06-19T09:13:45.145+0000",
                "concepts": [
                    "SC5",
                    "C26",
                    "SC6"
                ],
                "name": "Rajasthan",
                "status": "Live",
                "totalQuestions": 0,
                "orgDetails": {},
                "code": "org.sunbird.5gt9FD",
                "description": "Untitled Collection",
                "streamingUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/ecml/do_21252884005676646411974-latest",
                "medium": "English",
                "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_212450905413713920137/artifact/3_1519885914935.jpg",
                "idealScreenSize": "normal",
                "createdOn": "2018-06-19T09:10:20.991+0000",
                "badgeAssertions": [
                    {
                        "issuerId": "issuerslug-377",
                        "assertionId": "f9554ba0-5958-4a97-b20a-d0d7a04360b1",
                        "badgeClassImage": "https://ntpstaging.blob.core.windows.net/badgr/uploads/badges/3549b0881ddf5025736e7baf5b027dcf.png",
                        "badgeId": "badgeslug-121",
                        "badgeClassName": "Best author",
                        "createdTS": 1545893013408,
                        "status": "active"
                    }
                ],
                "contentDisposition": "inline",
                "lastUpdatedOn": "2018-06-19T09:13:44.465+0000",
                "SYS_INTERNAL_LAST_UPDATED_ON": "2018-12-27T06:43:33.466+0000",
                "dialcodeRequired": "No",
                "createdFor": [
                    "01232002070124134414",
                    "012315809814749184151"
                ],
                "creator": "Ntp creator Uswr",
                "os": [
                    "All"
                ],
                "totalScore": 0,
                "pkgVersion": 1,
                "versionKey": "1529399624465",
                "idealScreenDensity": "hdpi",
                "s3Key": "ecar_files/do_21252884005676646411974/rajasthan_1529399625145_do_21252884005676646411974_1.0.ecar",
                "framework": "NCF",
                "lastSubmittedOn": "2018-06-19T09:12:39.017+0000",
                "createdBy": "659b011a-06ec-4107-84ad-955e16b0a48a",
                "compatibilityLevel": 2,
                "board": "State (Rajasthan)",
                "resourceType": "Test",
                "node_id": 378177,
                "cardImg": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_21252884005676646411974/artifact/3_1519885914935.thumb.jpg",
                "hoverData": {
                    "actions": [
                        {
                            "type": "download",
                            "label": "Download"
                        },
                        {
                            "type": "open",
                            "label": "Open"
                        }
                    ]
                }
            },
            {
                "ownershipType": [
                    "createdBy"
                ],
                "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/ecml/do_2124708443414036481125-latest",
                "channel": "in.ekstep",
                "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2124708443414036481125/chetan-content_1527769448521_do_2124708443414036481125_4.0.ecar",
                "language": [
                    "English"
                ],
                "variants": {
                    "spine": {
                        "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2124708443414036481125/chetan-content_1527769448613_do_2124708443414036481125_4.0_spine.ecar",
                        "size": 1117
                    }
                },
                "mimeType": "application/vnd.ekstep.ecml-archive",
                "objectType": "Content",
                "collections": [
                    "do_2124708657568645121145",
                    "do_2124708669666263041147"
                ],
                "appId": "staging.diksha.portal",
                "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2124708443414036481125/artifact/1522320212461_do_2124708443414036481125.zip",
                "contentEncoding": "gzip",
                "contentType": "Resource",
                "lastUpdatedBy": "68777b59-b28b-4aee-88d6-50d46e4c3509",
                "identifier": "do_2124708443414036481125",
                "audience": [
                    "Learner"
                ],
                "visibility": "Default",
                "consumerId": "56ff6913-abcc-4a88-b247-c976e47cbfb4",
                "mediaType": "content",
                "osId": "org.ekstep.quiz.app",
                "lastPublishedBy": "68777b59-b28b-4aee-88d6-50d46e4c3509",
                "graph_id": "domain",
                "nodeType": "DATA_NODE",
                "version": 2,
                "prevState": "Live",
                "license": "Creative Commons Attribution (CC BY)",
                "lastPublishedOn": "2018-05-31T12:24:08.521+0000",
                "size": 5305,
                "name": "Chetan content",
                "status": "Live",
                "orgDetails": {},
                "code": "org.sunbird.tYnEvl",
                "streamingUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/ecml/do_2124708443414036481125-latest",
                "idealScreenSize": "normal",
                "createdOn": "2018-03-29T10:37:45.893+0000",
                "badgeAssertions": [
                    {
                        "issuerId": "issuerslug-372",
                        "assertionId": "c5d6a7a5-e84e-4777-8332-a1e87bbde694",
                        "badgeClassImage": "https://ntpstaging.blob.core.windows.net/badgr/uploads/badges/839ccee9b125f627329d23d66283b45f.png",
                        "badgeId": "badgeslug-116",
                        "badgeClassName": "Dec 11 2018 APRTESTONE ISSUER",
                        "createdTS": 1544525344869,
                        "status": "active"
                    }
                ],
                "contentDisposition": "inline",
                "lastUpdatedOn": "2018-05-31T12:24:08.448+0000",
                "SYS_INTERNAL_LAST_UPDATED_ON": "2019-08-15T00:35:39.816+0000",
                "dialcodeRequired": "No",
                "createdFor": [
                    "01232002070124134414",
                    "012315809814749184151"
                ],
                "creator": "Telemetry User",
                "os": [
                    "All"
                ],
                "pkgVersion": 4,
                "versionKey": "1527769448448",
                "idealScreenDensity": "hdpi",
                "s3Key": "ecar_files/do_2124708443414036481125/chetan-content_1527769448521_do_2124708443414036481125_4.0.ecar",
                "framework": "FWATMPT1",
                "lastSubmittedOn": "2018-03-29T10:41:28.672+0000",
                "me_averageRating": 5,
                "createdBy": "659b011a-06ec-4107-84ad-955e16b0a48a",
                "compatibilityLevel": 2,
                "resourceType": "Read",
                "node_id": 98964,
                "hoverData": {
                    "note": "Go to “My Downloads” to find this textbook",
                    "actions": [
                        {
                            "type": "save",
                            "label": "Save to pendrive"
                        },
                        {
                            "type": "open",
                            "label": "Open"
                        }
                    ]
                }
            },
            {
                "ownershipType": [
                    "createdBy"
                ],
                "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2125005681201643521507/01.pdf",
                "subject": "History and Civics",
                "channel": "in.ekstep",
                "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2125005681201643521507/123were_1527769732335_do_2125005681201643521507_4.0.ecar",
                "showNotification": true,
                "language": [
                    "English"
                ],
                "variants": {
                    "spine": {
                        "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2125005681201643521507/123were_1527769733201_do_2125005681201643521507_4.0_spine.ecar",
                        "size": 45773
                    }
                },
                "mimeType": "application/pdf",
                "objectType": "Content",
                "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2125005681201643521507/artifact/111-600x375_1522638521957.thumb.jpg",
                "gradeLevel": [
                    "Grade 6"
                ],
                "collections": [
                    "do_2127022866268897281467",
                    "do_212518123106598912146655.img",
                    "do_21252176248861491213236",
                    "do_212516115958833152146551.img",
                    "do_2125310927864381441577",
                    "do_21250340016679321616577",
                    "do_2125430205044736001652",
                    "do_21252804279848140811599",
                    "do_21257827984084992011686",
                    "do_2125310927864381441578",
                    "do_21251468318021222411980",
                    "do_212518123106598912146655",
                    "do_212516112227344384146542"
                ],
                "appId": "staging.diksha.portal",
                "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2125005681201643521507/01.pdf",
                "contentEncoding": "identity",
                "contentType": "Resource",
                "lastUpdatedBy": "creator12345 Test",
                "identifier": "do_2125005681201643521507",
                "audience": [
                    "Learner"
                ],
                "publishChecklist": [
                    "No Hate speech, Abuse, Violence, Profanity",
                    "No Sexual content, Nudity or Vulgarity",
                    "No Discrimination or Defamation",
                    "Is suitable for children",
                    "Appropriate Title, Description",
                    "Correct Board, Grade, Subject, Medium",
                    "Appropriate tags such as Resource Type, Concepts",
                    "Relevant Keywords",
                    "Content plays correctly",
                    "Can see the content clearly on Desktop and App",
                    "Audio (if any) is clear and easy to understand",
                    "No Spelling mistakes in the text",
                    "Language is simple to understand"
                ],
                "visibility": "Default",
                "consumerId": "a9cb3a83-a164-4bf0-aa49-b834cebf1c07",
                "mediaType": "content",
                "osId": "org.ekstep.quiz.app",
                "lastPublishedBy": "68777b59-b28b-4aee-88d6-50d46e4c3509",
                "graph_id": "domain",
                "nodeType": "DATA_NODE",
                "version": 1,
                "pragma": [
                    "external"
                ],
                "prevState": "Live",
                "license": "Creative Commons Attribution (CC BY)",
                "lastPublishedOn": "2018-05-31T12:28:52.335+0000",
                "size": 8966834,
                "concepts": [
                    "BIO40000",
                    "BIO50000"
                ],
                "name": "123were",
                "status": "Live",
                "orgDetails": {},
                "code": "ddd8e812-8126-4d95-b4e1-a92988eda68c",
                "lastFlaggedOn": "2018-07-05T06:38:21.173+0000",
                "medium": "English",
                "streamingUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2125005681201643521507/01.pdf",
                "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2124734547707576321269/artifact/111-600x375_1522638521957.jpg",
                "idealScreenSize": "normal",
                "flaggedBy": [
                    "creator12345 Test"
                ],
                "createdOn": "2018-05-10T10:30:56.855+0000",
                "badgeAssertions": [
                    {
                        "issuerId": "issuerslug-57",
                        "assertionId": "5a182f4d-43b1-43c7-a21b-63ce6c24b570",
                        "badgeClassImage": "https://sunbirdstaging.blob.core.windows.net/badgr/uploads/badges/badf0408727b0c90556b5de31829164e.png",
                        "badgeId": "badgeslug-81",
                        "badgeClassName": "Official",
                        "createdTS": 1533710533029,
                        "status": "active"
                    }
                ],
                "contentDisposition": "inline",
                "lastUpdatedOn": "2018-07-05T06:39:20.400+0000",
                "SYS_INTERNAL_LAST_UPDATED_ON": "2019-08-23T00:35:42.579+0000",
                "dialcodeRequired": "No",
                "createdFor": [
                    "01232002070124134414",
                    "012315809814749184151"
                ],
                "creator": "Mentor Juthika User",
                "os": [
                    "All"
                ],
                "pkgVersion": 4,
                "versionKey": "1530772760400",
                "idealScreenDensity": "hdpi",
                "s3Key": "ecar_files/do_2125005681201643521507/123were_1527769732335_do_2125005681201643521507_4.0.ecar",
                "framework": "FWATMPT1",
                "lastSubmittedOn": "2018-05-10T10:31:54.877+0000",
                "me_averageRating": 5,
                "createdBy": "d882967f-b3e1-456b-b984-d800470837ab",
                "compatibilityLevel": 4,
                "board": "MSCERT",
                "resourceType": "Practice",
                "node_id": 149315,
                "cardImg": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2125005681201643521507/artifact/111-600x375_1522638521957.thumb.jpg",
                "hoverData": {
                    "actions": [
                        {
                            "type": "download",
                            "label": "Download"
                        },
                        {
                            "type": "open",
                            "label": "Open"
                        }
                    ]
                }
            },
            {
                "ownershipType": [
                    "createdBy"
                ],
                "previewUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/ecml/do_21264270761184460811673-latest",
                "subject": "Mathematics",
                "channel": "in.ekstep",
                "downloadUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/ecar_files/do_21264270761184460811673/mathematics-activity-class-4_1543303328064_do_21264270761184460811673_2.0.ecar",
                "organisation": [
                    "NTP"
                ],
                "language": [
                    "English"
                ],
                "mimeType": "application/vnd.ekstep.ecml-archive",
                "variants": {
                    "spine": {
                        "ecarUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/ecar_files/do_21264270761184460811673/mathematics-activity-class-4_1543303328175_do_21264270761184460811673_2.0_spine.ecar",
                        "size": 12590
                    }
                },
                "editorState": "{\"plugin\":{\"noOfExtPlugins\":14,\"extPlugins\":[{\"plugin\":\"org.ekstep.contenteditorfunctions\",\"version\":\"1.2\"},{\"plugin\":\"org.ekstep.keyboardshortcuts\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.richtext\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.iterator\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.navigation\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.mathtext\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.libs.ckeditor\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.questionunit\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.questionunit.mcq\",\"version\":\"1.1\"},{\"plugin\":\"org.ekstep.questionunit.mtf\",\"version\":\"1.1\"},{\"plugin\":\"org.ekstep.keyboard\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.questionunit.reorder\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.questionunit.sequence\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.questionunit.ftb\",\"version\":\"1.0\"}]},\"stage\":{\"noOfStages\":2,\"currentStage\":\"83a3d941-3306-429e-aae2-07ca70d744ee\"},\"sidebar\":{\"selectedMenu\":\"settings\"}}",
                "objectType": "Content",
                "gradeLevel": [
                    "Class 4"
                ],
                "appIcon": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21264270761184460811673/artifact/0288d78758c4463dd40892d5a460edf4_1478578597914.thumb.jpeg",
                "me_totalTimespent": 31.8,
                "collections": [
                    "do_21264701641690316813698",
                    "do_21280690397737779211227",
                    "do_21280689455348121611201",
                    "do_21280691880382464011277",
                    "do_21280762824795750411925",
                    "do_21280762824795750411925.img",
                    "do_21283180802014412811765",
                    "do_212832384100474880153"
                ],
                "me_averageTimespentPerSession": 31.8,
                "appId": "staging.diksha.portal",
                "contentEncoding": "gzip",
                "artifactUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21264270761184460811673/artifact/1543303326995_do_21264270761184460811673.zip",
                "contentType": "Resource",
                "identifier": "do_21264270761184460811673",
                "lastUpdatedBy": "b9a3972c-a2ba-46fa-9279-59ce21957a83",
                "audience": [
                    "Learner"
                ],
                "visibility": "Default",
                "consumerId": "a9cb3a83-a164-4bf0-aa49-b834cebf1c07",
                "mediaType": "content",
                "osId": "org.ekstep.quiz.app",
                "graph_id": "domain",
                "nodeType": "DATA_NODE",
                "lastPublishedBy": "7bd5aef5-d825-47fa-96b5-3a3ce3b4020b",
                "version": 2,
                "prevState": "Review",
                "license": "Creative Commons Attribution (CC BY)",
                "size": 562094,
                "lastPublishedOn": "2018-11-27T07:22:07.149+0000",
                "IL_FUNC_OBJECT_TYPE": "Content",
                "name": "Mathematics Activity - Class 4",
                "attributions": [
                    "DIKSHA"
                ],
                "status": "Live",
                "totalQuestions": 5,
                "me_averageInteractionsPerMin": 0,
                "orgDetails": {},
                "code": "org.sunbird.aFaNPB",
                "me_totalSessionsCount": 1,
                "description": "Grade 4 Math Activity",
                "medium": "English",
                "streamingUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/ecml/do_21264270761184460811673-latest",
                "idealScreenSize": "normal",
                "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_20052111/artifact/0288d78758c4463dd40892d5a460edf4_1478578597914.jpeg",
                "createdOn": "2018-11-27T06:14:29.024+0000",
                "badgeAssertions": [
                    {
                        "issuerId": "issuerslug-377",
                        "assertionId": "2c8c6351-d098-4522-937c-38d78e2a129b",
                        "badgeClassImage": "https://ntpstaging.blob.core.windows.net/badgr/uploads/badges/4d0f1b1dea2ce9ed399f88e5fe8792fa.png",
                        "badgeId": "badgeslug-121",
                        "badgeClassName": "Best author",
                        "createdTS": 1545893035212,
                        "status": "active"
                    }
                ],
                "contentDisposition": "inline",
                "lastUpdatedOn": "2018-11-27T07:22:05.791+0000",
                "SYS_INTERNAL_LAST_UPDATED_ON": "2019-09-11T00:36:40.503+0000",
                "dialcodeRequired": "No",
                "owner": "DemoCreator Creator",
                "creator": "DemoCreator Creator",
                "createdFor": [
                    "ORG_001"
                ],
                "IL_SYS_NODE_TYPE": "DATA_NODE",
                "os": [
                    "All"
                ],
                "me_totalInteractions": 0,
                "totalScore": 5,
                "pkgVersion": 2,
                "versionKey": "1543303326455",
                "idealScreenDensity": "hdpi",
                "framework": "NCF",
                "s3Key": "ecar_files/do_21264270761184460811673/mathematics-activity-class-4_1543303328064_do_21264270761184460811673_2.0.ecar",
                "lastSubmittedOn": "2018-11-27T07:20:23.559+0000",
                "me_averageRating": 5,
                "createdBy": "b9a3972c-a2ba-46fa-9279-59ce21957a83",
                "compatibilityLevel": 2,
                "IL_UNIQUE_ID": "do_21264270761184460811673",
                "ownedBy": "b9a3972c-a2ba-46fa-9279-59ce21957a83",
                "board": "State (Tamil Nadu)",
                "resourceType": "Test",
                "node_id": 440472,
                "cardImg": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21264270761184460811673/artifact/0288d78758c4463dd40892d5a460edf4_1478578597914.thumb.jpeg",
                "hoverData": {
                    "actions": [
                        {
                            "type": "download",
                            "label": "Download"
                        },
                        {
                            "type": "open",
                            "label": "Open"
                        }
                    ]
                }
            },
            {
                "ownershipType": [
                    "createdBy"
                ],
                "subject": "Physical Science",
                "channel": "in.ekstep",
                "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_21259106171407564812108/contentsep_1536996482030_do_21259106171407564812108_1.0.ecar",
                "organisation": [
                    "1.10 Org"
                ],
                "language": [
                    "English"
                ],
                "variants": {
                    "spine": {
                        "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_21259106171407564812108/contentsep_1536996482107_do_21259106171407564812108_1.0_spine.ecar",
                        "size": 22783
                    }
                },
                "mimeType": "application/vnd.ekstep.ecml-archive",
                "objectType": "Content",
                "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_21259106171407564812108/artifact/beee6757847b84a1e41ce827ae02ccc7_1477485749628.thumb.jpeg",
                "gradeLevel": [
                    "Class 9"
                ],
                "appId": "staging.diksha.portal",
                "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_21259106171407564812108/artifact/1536996481813_do_21259106171407564812108.zip",
                "contentEncoding": "gzip",
                "contentType": "Resource",
                "lastUpdatedBy": "871e9976-4f96-43bd-986b-91b92c57dbfc",
                "identifier": "do_21259106171407564812108",
                "audience": [
                    "Learner"
                ],
                "publishChecklist": [
                    "No Hate speech, Abuse, Violence, Profanity",
                    "No Sexual content, Nudity or Vulgarity",
                    "No Discrimination or Defamation",
                    "Is suitable for children",
                    "Relevant Keywords",
                    "Appropriate tags such as Resource Type, Concepts",
                    "Correct Board, Grade, Subject, Medium",
                    "Appropriate Title, Description",
                    "Language is simple to understand",
                    "No Spelling mistakes in the text",
                    "Audio (if any) is clear and easy to understand",
                    "Can see the content clearly on Desktop and App",
                    "Content plays correctly"
                ],
                "visibility": "Default",
                "consumerId": "56ff6913-abcc-4a88-b247-c976e47cbfb4",
                "mediaType": "content",
                "osId": "org.ekstep.quiz.app",
                "lastPublishedBy": "871e9976-4f96-43bd-986b-91b92c57dbfc",
                "graph_id": "domain",
                "nodeType": "DATA_NODE",
                "prevState": "Review",
                "size": 367829,
                "lastPublishedOn": "2018-09-15T07:28:02.030+0000",
                "name": "ContentSep",
                "status": "Live",
                "totalQuestions": 1,
                "orgDetails": {},
                "code": "org.sunbird.ooPeyD",
                "description": "Untitled Collection",
                "medium": "Telugu",
                "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/beee6757847b84a1e41ce827ae02ccc7_1477485749628.jpeg",
                "idealScreenSize": "normal",
                "createdOn": "2018-09-15T07:00:38.143+0000",
                "badgeAssertions": [
                    {
                        "issuerId": "issuerslug-376",
                        "assertionId": "62cc4979-04f9-4da1-862e-ce4c49458ba7",
                        "badgeClassImage": "https://ntpstaging.blob.core.windows.net/badgr/uploads/badges/343f9a93e8c2a82ffe36e9ecfbf363f6.png",
                        "badgeId": "badgeslug-120",
                        "badgeClassName": "STATE TEXTBOOK5",
                        "createdTS": 1545133359941,
                        "status": "active"
                    }
                ],
                "contentDisposition": "inline",
                "lastUpdatedOn": "2018-09-15T07:28:00.564+0000",
                "SYS_INTERNAL_LAST_UPDATED_ON": "2018-12-18T11:42:40.059+0000",
                "dialcodeRequired": "No",
                "createdFor": [
                    "0125903113586933768"
                ],
                "creator": "1.10Creator User",
                "os": [
                    "All"
                ],
                "totalScore": 1,
                "pkgVersion": 1,
                "versionKey": "1536996480564",
                "idealScreenDensity": "hdpi",
                "s3Key": "ecar_files/do_21259106171407564812108/contentsep_1536996482030_do_21259106171407564812108_1.0.ecar",
                "framework": "ap_k-12_13",
                "lastSubmittedOn": "2018-09-15T07:01:55.763+0000",
                "createdBy": "644da49c-7bef-49d6-8e24-e741d148d652",
                "compatibilityLevel": 2,
                "board": "State (Andhra Pradesh)",
                "resourceType": "Teach",
                "node_id": 428793,
                "cardImg": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_21259106171407564812108/artifact/beee6757847b84a1e41ce827ae02ccc7_1477485749628.thumb.jpeg",
                "hoverData": {
                    "actions": [
                        {
                            "type": "download",
                            "label": "Download"
                        },
                        {
                            "type": "open",
                            "label": "Open"
                        }
                    ]
                }
            }
        ];
    }
    DemoCardsGridComponent.prototype.ngOnInit = function () {
    };
    DemoCardsGridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-demo-cards-grid',
            template: __webpack_require__(/*! ./demo-cards-grid.component.html */ "./src/app/demo-full/demo-cards-grid/demo-cards-grid.component.html"),
            styles: [__webpack_require__(/*! ./demo-cards-grid.component.scss */ "./src/app/demo-full/demo-cards-grid/demo-cards-grid.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service__WEBPACK_IMPORTED_MODULE_2__["AppSharedService"]])
    ], DemoCardsGridComponent);
    return DemoCardsGridComponent;
}());



/***/ }),

/***/ "./src/app/demo-full/demo-cards-stack/demo-cards-stack.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/demo-full/demo-cards-stack/demo-cards-stack.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar>\n\n</app-navbar>\n\n<div class=\"main-container container-fluid\">\n  <!-- Page Container -->\n  <div class=\"page-container\">\n    <!-- Page Sidebar -->\n    <app-sidebar>\n\n    </app-sidebar>\n    <!-- /Page Sidebar -->\n  </div>\n</div>\n\n<!-- Main content-->\n<div class=\"page-content\" [ngStyle]=\"!appSharedService.sideBarVisible && {'margin-left':'43px'}\">\n  <div class=\"page-header position-relative\">\n    <div class=\"header-title\">\n      <h1>\n        Card Stack\n      </h1>\n    </div>\n  </div>\n  <div class=\"page-body\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n        <section id=\"libraryCardStack\">\n          <h2 class=\"margin-bottom-20\">Library Card Stack Component</h2>\n          <div class=\"well bordered-left bordered-pink\">\n            <p> Library Card Stack Component can be used in the library page or in places where a card Stack needs to shown.</p>\n            <p>Stack is meantn to be used in mobile client. This component internally uses LibraryCard component with type='mobile_textbook'</p>\n            <p>Basically there is only 1 type of Stack: </p>\n            <ul class=\"custom-list\">\n              <li>Default Stack - Stack of mibile cards with option to specify maximum cards(i.e, 3, 4 or 5) to be shown in a row and a view all button, Default maximum cards count is 3 </li>\n            </ul>\n            <p>You can find more details of the component, various inputs and outputs in the\n              <a href=\"https://github.com/Sunbird-Ed/SunbirdEd-consumption-ngcomponents/blob/master/projects/common-consumption/src/lib/layout/library-cards-stack/library-cards-stack.md\"\n                target=\"_blank\">\n                component's original repository\n              </a>.\n            </p>\n            <p><i><b>Note : </b></i></p>\n            <p>\n              The width of the overall Stack is fluid in nature i.e, 100% of the parent conatainer, so user can control the width\n              of the Stack based on the parent element in which the card is contained.\n            </p>\n            <p>\n              Card Stack is not restricted to particular language. Based on your <b>i18n</b> preferences pass inputs in the\n              desired language.\n            </p>\n            <p>\n              In offline/online/downloaded scenarios where image attribute changes based on the network or other\n              criteria, cardImg property must be updated to all the cards in the list.\n            </p>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-3 col-sm-6 col-xs-12\">\n              <h4>Default Stack View</h4>\n                <sb-library-cards-stack></sb-library-cards-stack>\n            </div>\n          </div>\n        </section>\n        <hr>\n        <section>\n          <h6 class=\"row-title before-pink\">Grid of infinite cards </h6>\n          <div class=\"row\">\n            <div class=\"col-lg-3 col-sm-6 col-xs-12\">\n              <sb-library-cards-stack [title]=\"subjects[0]\" [contentList]=\"contentList\"\n                  [viewMoreButtonText]=\"viewMoreButtonText\" [maxCardCount]=\"3\"\n                  (viewMoreClick)=\"showAllList($event)\">\n              </sb-library-cards-stack>\n            </div>\n          </div>\n        </section>\n        <hr>\n        <section>\n          <h6 class=\"row-title before-pink\">Grid stack with 3, 4 or 5 maxCardCount </h6>\n          <div class=\"row\">\n            <div class=\"col-lg-3 col-sm-6 col-xs-12\">\n              <sb-library-cards-stack [title]=\"subjects[0]\" [contentList]=\"contentList\"\n                  [viewMoreButtonText]=\"viewMoreButtonText\"\n                  (viewMoreClick)=\"showAllList($event)\">\n              </sb-library-cards-stack>\n            </div>\n            <div class=\"col-lg-3 col-sm-6 col-xs-12\">\n              <sb-library-cards-stack [title]=\"subjects[0]\" [contentList]=\"contentList\"\n                  [viewMoreButtonText]=\"viewMoreButtonText\" [maxCardCount]=\"4\"\n                  (viewMoreClick)=\"showAllList($event)\">\n              </sb-library-cards-stack>\n            </div>\n            <div class=\"col-lg-3 col-sm-6 col-xs-12\">\n              <sb-library-cards-stack [title]=\"subjects[0]\" [contentList]=\"contentList\"\n                  [viewMoreButtonText]=\"viewMoreButtonText\" [maxCardCount]=\"5\"\n                  (viewMoreClick)=\"showAllList($event)\">\n              </sb-library-cards-stack>\n            </div>\n          </div>\n        </section>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/demo-full/demo-cards-stack/demo-cards-stack.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/demo-full/demo-cards-stack/demo-cards-stack.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8tZnVsbC9kZW1vLWNhcmRzLXN0YWNrL2RlbW8tY2FyZHMtc3RhY2suY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/demo-full/demo-cards-stack/demo-cards-stack.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/demo-full/demo-cards-stack/demo-cards-stack.component.ts ***!
  \**************************************************************************/
/*! exports provided: DemoCardsStackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoCardsStackComponent", function() { return DemoCardsStackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.service */ "./src/app/demo-full/shared.service.ts");



var DemoCardsStackComponent = /** @class */ (function () {
    function DemoCardsStackComponent(appSharedService) {
        this.appSharedService = appSharedService;
        this.subjects = ['english', 'mathematics', 'geology', 'biology', 'zoology', 'Botany', 'Environmental Science'];
        this.viewMoreButtonText = 'View More';
        this.contentList = [
            {
                "ownershipType": [
                    "createdBy"
                ],
                "previewUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/ecml/do_21256975952798515213721-latest",
                "keywords": [
                    "dadaf"
                ],
                "subject": "Tamil",
                "channel": "in.ekstep",
                "downloadUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/ecar_files/do_21256975952798515213721/creation-100100_1542778850847_do_21256975952798515213721_2.0.ecar",
                "organisation": [
                    "Sachin 2808"
                ],
                "language": [
                    "English"
                ],
                "variants": {
                    "spine": {
                        "ecarUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/ecar_files/do_21256975952798515213721/creation-100100_1542778851702_do_21256975952798515213721_2.0_spine.ecar",
                        "size": 797118
                    }
                },
                "mimeType": "application/vnd.ekstep.ecml-archive",
                "objectType": "Content",
                "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2124899901836247041294/artifact/0306022-1.jpg_1524657005308.jpg",
                "gradeLevel": [
                    "Class 2"
                ],
                "collections": [
                    "do_21256985173761228816314",
                    "do_2124396034467676161971",
                    "do_21256984927485952016311"
                ],
                "appId": "staging.sunbird.portal",
                "artifactUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21256975952798515213721/artifact/1542778847745_do_21256975952798515213721.zip",
                "contentEncoding": "gzip",
                "contentType": "Resource",
                "lastUpdatedBy": "8d28e44c-b295-42be-8417-dd756486ff85",
                "identifier": "do_21256975952798515213721",
                "audience": [
                    "Learner"
                ],
                "publishChecklist": [
                    "No Hate speech, Abuse, Violence, Profanity",
                    "No Sexual content, Nudity or Vulgarity",
                    "No Discrimination or Defamation",
                    "Is suitable for children",
                    "Appropriate Title, Description",
                    "Correct Board, Grade, Subject, Medium",
                    "Appropriate tags such as Resource Type, Concepts",
                    "Relevant Keywords",
                    "Content plays correctly",
                    "Can see the content clearly on Desktop and App",
                    "Audio (if any) is clear and easy to understand",
                    "No Spelling mistakes in the text",
                    "Language is simple to understand"
                ],
                "visibility": "Default",
                "consumerId": "fa271a76-c15a-4aa1-adff-31dd04682a1f",
                "mediaType": "content",
                "osId": "org.ekstep.quiz.app",
                "lastPublishedBy": "86dd77ad-18d7-4d27-b72c-ba732b4009d3",
                "graph_id": "domain",
                "nodeType": "DATA_NODE",
                "version": 2,
                "prevState": "Processing",
                "lastPublishedOn": "2018-11-21T05:40:48.675+0000",
                "size": 7813097,
                "name": "Creation 100100  Creation 100100  Creation 100100  Creation 100100  Creation 100100  Creation 100100  Creation 100100  Creation 100100  Creation 100100  Creation 100100  Creation 100100  Creation 100100  Creation 100100  Creation 100100  Creation 100100  Creation 100100  Creation 100100  Creation 100100  Creation 100100  Creation 100100  Creation 100100  Creation 100100  ",
                "attributions": [
                    "testing"
                ],
                "status": "Live",
                "totalQuestions": 2,
                "orgDetails": {},
                "code": "org.sunbird.WtVkXR",
                "description": "trikjr",
                "medium": "Telugu",
                "streamingUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/ecml/do_21256975952798515213721-latest",
                "idealScreenSize": "normal",
                "createdOn": "2018-08-20T06:10:37.421+0000",
                "badgeAssertions": [
                    {
                        "issuerId": "issuerslug-345",
                        "assertionId": "fa2ec612-18da-4048-b146-a8846588a9a5",
                        "badgeClassImage": "https://ntpstaging.blob.core.windows.net/badgr/uploads/badges/5dfe8927e565723cfb1c2d2fe5a1ac1f.png",
                        "badgeId": "badgeslug-85",
                        "badgeClassName": "Best guide",
                        "createdTS": 1534759115237,
                        "status": "active"
                    }
                ],
                "contentDisposition": "inline",
                "lastUpdatedOn": "2018-11-21T05:40:45.040+0000",
                "SYS_INTERNAL_LAST_UPDATED_ON": "2018-11-21T05:40:51.986+0000",
                "createdFor": [
                    "0125683555607347207"
                ],
                "creator": "Sham r",
                "os": [
                    "All"
                ],
                "totalScore": 3,
                "pkgVersion": 2,
                "versionKey": "1542778846752",
                "idealScreenDensity": "hdpi",
                "s3Key": "ecar_files/do_21256975952798515213721/creation-100100_1542778850847_do_21256975952798515213721_2.0.ecar",
                "framework": "NCF",
                "lastSubmittedOn": "2018-08-16T04:50:00.554+0000",
                "createdBy": "8d28e44c-b295-42be-8417-dd756486ff85",
                "compatibilityLevel": 2,
                "board": "CBSE",
                "resourceType": "Learn",
                "node_id": 409230,
                "cardImg": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2124899901836247041294/artifact/0306022-1.jpg_1524657005308.jpg",
                "hoverData": {
                    "note": "Go to “My Downloads” to find this textbook",
                    "actions": [
                        {
                            "type": "save",
                            "label": "Save to pendrive",
                            "disabled": true
                        },
                        {
                            "type": "open",
                            "label": "Open"
                        }
                    ]
                }
            },
            {
                "ownershipType": [
                    "createdBy"
                ],
                "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2125047996214067201105/pdf-sample.pdf",
                "keywords": [
                    "test"
                ],
                "subject": "Urdu",
                "channel": "in.ekstep",
                "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2125047996214067201105/16may-pdf-upload_1538552344206_do_2125047996214067201105_4.0.ecar",
                "showNotification": true,
                "language": [
                    "English"
                ],
                "variants": {
                    "spine": {
                        "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2125047996214067201105/16may-pdf-upload_1538552344279_do_2125047996214067201105_4.0_spine.ecar",
                        "size": 13413
                    }
                },
                "mimeType": "application/pdf",
                "objectType": "Content",
                "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2125047996214067201105/artifact/1466505161547apple.thumb.png",
                "gradeLevel": [
                    "Class 2"
                ],
                "collections": [
                    "do_21257125420203212817093",
                    "do_21257827911837286411681",
                    "do_21257133955701145617133",
                    "do_21257124179043123217073",
                    "do_21257142133474918417187",
                    "do_21260466111629721611377",
                    "do_21257125905047552017102",
                    "do_2126138400531742721505",
                    "do_21257131794698240017119",
                    "do_21257136897708851217164",
                    "do_21257144778190028817196",
                    "do_21260466236003942411379",
                    "do_21257124195636838417074",
                    "do_21257135975308492817152",
                    "do_21260465839606988811374",
                    "do_21257136783278080017162",
                    "do_21271796456817459211808",
                    "do_2126138352511385601500",
                    "do_2127099066970193921930",
                    "do_21257131719372800017118",
                    "do_21257144699138048017195"
                ],
                "appId": "staging.diksha.portal",
                "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2125047996214067201105/pdf-sample.pdf",
                "contentEncoding": "identity",
                "sYS_INTERNAL_LAST_UPDATED_ON": "2018-10-03T07:39:04.363+0000",
                "contentType": "Resource",
                "lastUpdatedBy": "bb335f84-f624-4bdd-9e5e-95c62dc690ff",
                "identifier": "do_2125047996214067201105",
                "audience": [
                    "Learner"
                ],
                "publishChecklist": [
                    "No Hate speech, Abuse, Violence, Profanity",
                    "No Sexual content, Nudity or Vulgarity",
                    "No Discrimination or Defamation",
                    "Is suitable for children",
                    "Appropriate Title, Description",
                    "Correct Board, Grade, Subject, Medium",
                    "Appropriate tags such as Resource Type, Concepts",
                    "Relevant Keywords",
                    "Content plays correctly",
                    "Can see the content clearly on Desktop and App",
                    "Audio (if any) is clear and easy to understand",
                    "No Spelling mistakes in the text",
                    "Language is simple to understand"
                ],
                "visibility": "Default",
                "consumerId": "a9cb3a83-a164-4bf0-aa49-b834cebf1c07",
                "mediaType": "content",
                "osId": "org.ekstep.quiz.app",
                "lastPublishedBy": "bb335f84-f624-4bdd-9e5e-95c62dc690ff",
                "languageCode": "en",
                "graph_id": "domain",
                "nodeType": "DATA_NODE",
                "pragma": [
                    "external"
                ],
                "prevState": "Live",
                "lastPublishedOn": "2018-10-03T07:39:04.206+0000",
                "size": 17905,
                "concepts": [
                    "AI33"
                ],
                "name": "16MAY-PDF Upload",
                "status": "Live",
                "orgDetails": {},
                "code": "be8e0283-d492-4d64-8e44-a00b8e856512",
                "description": "testing by umesh",
                "medium": "Telugu",
                "streamingUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2125047996214067201105/pdf-sample.pdf",
                "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/1466505161547apple.png",
                "idealScreenSize": "normal",
                "createdOn": "2018-05-16T09:59:57.534+0000",
                "badgeAssertions": [
                    {
                        "issuerId": "issuerslug-377",
                        "assertionId": "236121b8-b2fd-4c62-85a9-5f011433f3e8",
                        "badgeClassImage": "https://ntpstaging.blob.core.windows.net/badgr/uploads/badges/b4ea6f2d3bbd4375195ed74802712b4a.png",
                        "badgeId": "badgeslug-121",
                        "badgeClassName": "Best author",
                        "createdTS": 1545893001107,
                        "status": "active"
                    }
                ],
                "contentDisposition": "inline",
                "lastUpdatedOn": "2018-10-03T07:39:03.405+0000",
                "SYS_INTERNAL_LAST_UPDATED_ON": "2018-12-27T06:43:21.205+0000",
                "dialcodeRequired": "No",
                "createdFor": [
                    "01250469287604224011"
                ],
                "creator": "May creator",
                "os": [
                    "All"
                ],
                "pkgVersion": 4,
                "versionKey": "1534575021960",
                "idealScreenDensity": "hdpi",
                "s3Key": "ecar_files/do_2125047996214067201105/16may-pdf-upload_1538552344206_do_2125047996214067201105_4.0.ecar",
                "framework": "NCF",
                "lastSubmittedOn": "2018-05-16T10:01:30.626+0000",
                "createdBy": "9541757e-976e-47ee-b981-2f0f312529b0",
                "compatibilityLevel": 4,
                "attribution": "test",
                "board": "CBSE",
                "resourceType": "Test",
                "node_id": 199891,
                "cardImg": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2125047996214067201105/artifact/1466505161547apple.thumb.png",
                "hoverData": {
                    "note": "Go to “My Downloads” to find this textbook",
                    "actions": [
                        {
                            "type": "save",
                            "label": "Save to pendrive"
                        },
                        {
                            "type": "open",
                            "label": "Open"
                        }
                    ]
                }
            },
            {
                "ownershipType": [
                    "createdFor"
                ],
                "previewUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/ecml/do_21266324379998617614877-latest",
                "subject": "English",
                "channel": "in.ekstep",
                "questions": [
                    "do_21266327656724070415486"
                ],
                "downloadUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/ecar_files/do_21266324379998617614877/r05_test_1545810351946_do_21266324379998617614877_1.0.ecar",
                "organisation": [
                    "Sachin 2808"
                ],
                "language": [
                    "English"
                ],
                "mimeType": "application/vnd.ekstep.ecml-archive",
                "variants": {
                    "spine": {
                        "ecarUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/ecar_files/do_21266324379998617614877/r05_test_1545810352220_do_21266324379998617614877_1.0_spine.ecar",
                        "size": 29291
                    }
                },
                "editorState": "{\"plugin\":{\"noOfExtPlugins\":14,\"extPlugins\":[{\"plugin\":\"org.ekstep.contenteditorfunctions\",\"version\":\"1.2\"},{\"plugin\":\"org.ekstep.keyboardshortcuts\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.richtext\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.iterator\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.navigation\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.mathtext\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.libs.ckeditor\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.questionunit\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.keyboard\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.questionunit.mcq\",\"version\":\"1.1\"},{\"plugin\":\"org.ekstep.questionunit.mtf\",\"version\":\"1.1\"},{\"plugin\":\"org.ekstep.questionunit.reorder\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.questionunit.sequence\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.questionunit.ftb\",\"version\":\"1.0\"}]},\"stage\":{\"noOfStages\":7,\"currentStage\":\"bb41b09e-151d-4194-aa6e-54132bd73ee3\",\"selectedPluginObject\":\"65131bc5-6092-4116-b648-231c8a1846ad\"},\"sidebar\":{\"selectedMenu\":\"settings\"}}",
                "objectType": "Content",
                "gradeLevel": [
                    "Class 5"
                ],
                "appIcon": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21266324379998617614877/artifact/icon_1545638427515.thumb.png",
                "collections": [
                    "do_21266328015857254415496",
                    "do_21266330591811993615858",
                    "do_21266330034026086415838",
                    "do_21266328823947264015798",
                    "do_21266327990500556815494"
                ],
                "appId": "staging.diksha.portal",
                "contentEncoding": "gzip",
                "artifactUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21266324379998617614877/artifact/1545810351578_do_21266324379998617614877.zip",
                "lockKey": "cbde56e1-5337-41bf-81c9-f155a29ece3e",
                "contentType": "Resource",
                "identifier": "do_21266324379998617614877",
                "lastUpdatedBy": "d32e170d-010b-4bc5-ae55-3ac5e547e35b",
                "audience": [
                    "Instructor"
                ],
                "visibility": "Default",
                "consumerId": "a9cb3a83-a164-4bf0-aa49-b834cebf1c07",
                "mediaType": "content",
                "osId": "org.ekstep.quiz.app",
                "graph_id": "domain",
                "nodeType": "DATA_NODE",
                "lastPublishedBy": "86dd77ad-18d7-4d27-b72c-ba732b4009d3",
                "version": 2,
                "pragma": [
                    "external"
                ],
                "prevState": "Review",
                "size": 1725857,
                "lastPublishedOn": "2018-12-26T07:45:51.946+0000",
                "IL_FUNC_OBJECT_TYPE": "Content",
                "name": "R05_Test",
                "status": "Live",
                "totalQuestions": 1,
                "orgDetails": {},
                "code": "org.sunbird.rLVEAi",
                "description": "ncieioneio",
                "medium": "English",
                "streamingUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/ecml/do_21266324379998617614877-latest",
                "idealScreenSize": "normal",
                "posterImage": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21266186999677747214484/artifact/icon_1545638427515.png",
                "createdOn": "2018-12-26T06:35:27.927+0000",
                "badgeAssertions": [
                    {
                        "issuerId": "issuerslug-377",
                        "assertionId": "a0f07d96-8a35-4f4e-a233-ee0a09c8fd5c",
                        "badgeClassImage": "https://ntpstaging.blob.core.windows.net/badgr/uploads/badges/27041728dd75b0b7c8e7e61806e9eccd.png",
                        "badgeId": "badgeslug-121",
                        "badgeClassName": "Best author",
                        "createdTS": 1545893080571,
                        "status": "active"
                    }
                ],
                "contentDisposition": "inline",
                "lastUpdatedOn": "2018-12-26T07:45:48.738+0000",
                "SYS_INTERNAL_LAST_UPDATED_ON": "2019-05-19T03:08:08.353+0000",
                "dialcodeRequired": "No",
                "owner": "Sachin 2808",
                "creator": "Som r",
                "createdFor": [
                    "0125683555607347207"
                ],
                "lastStatusChangedOn": "2019-05-19T03:08:08.340+0000",
                "IL_SYS_NODE_TYPE": "DATA_NODE",
                "os": [
                    "All"
                ],
                "totalScore": 4,
                "pkgVersion": 1,
                "versionKey": "1545810348738",
                "idealScreenDensity": "hdpi",
                "framework": "NCF",
                "s3Key": "ecar_files/do_21266324379998617614877/r05_test_1545810351946_do_21266324379998617614877_1.0.ecar",
                "lastSubmittedOn": "2018-12-26T07:45:07.000+0000",
                "me_averageRating": 5,
                "createdBy": "d32e170d-010b-4bc5-ae55-3ac5e547e35b",
                "compatibilityLevel": 4,
                "IL_UNIQUE_ID": "do_21266324379998617614877",
                "ownedBy": "0125683555607347207",
                "board": "CBSE",
                "resourceType": "Test",
                "node_id": 446923,
                "cardImg": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21266324379998617614877/artifact/icon_1545638427515.thumb.png",
                "hoverData": {
                    "actions": [
                        {
                            "type": "download",
                            "label": "Download"
                        },
                        {
                            "type": "open",
                            "label": "Open"
                        }
                    ]
                }
            },
            {
                "ownershipType": [
                    "createdBy"
                ],
                "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/ecml/do_21258040361213952015738-latest",
                "subject": "English",
                "channel": "in.ekstep",
                "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_21258040361213952015738/__1559119939572_do_21258040361213952015738_5.0.ecar",
                "organisation": [
                    "SAP"
                ],
                "language": [
                    "English"
                ],
                "variants": {
                    "spine": {
                        "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_21258040361213952015738/__1559119939825_do_21258040361213952015738_5.0_spine.ecar",
                        "size": 33538
                    }
                },
                "mimeType": "application/vnd.ekstep.ecml-archive",
                "objectType": "Content",
                "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_21258040361213952015738/artifact/download-3_1531474695189.thumb.jpg",
                "gradeLevel": [
                    "Class 1"
                ],
                "collections": [
                    "do_212608901045985280167",
                    "do_2126335427795763201487",
                    "do_21265908814154137613730",
                    "do_212694392468717568118095",
                    "do_21265980189786112013956",
                    "do_21271627854903705616706",
                    "do_212608898352807936164",
                    "do_2127730122172579841694",
                    "do_2127730188304384001696",
                    "do_2127730642698813441698",
                    "do_2127731185278074881720",
                    "do_2127736460745441281727",
                    "do_2127737426502615041759",
                    "do_2127781798791577601141",
                    "do_2127781975501127681155",
                    "do_2127785086812733441158",
                    "do_2127785106696355841160",
                    "do_2127815506724044801557",
                    "do_21279071611953971211627",
                    "do_21279071611953971211627.img"
                ],
                "appId": "staging.diksha.app",
                "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_21258040361213952015738/artifact/1535697984690_do_21258040361213952015738.zip",
                "contentEncoding": "gzip",
                "sYS_INTERNAL_LAST_UPDATED_ON": "2018-10-03T09:36:54.793+0000",
                "contentType": "Resource",
                "lastUpdatedBy": "74400baf-7f32-407a-9d79-265ecd3f6952",
                "identifier": "do_21258040361213952015738",
                "audience": [
                    "Learner"
                ],
                "publishChecklist": [
                    "No Hate speech, Abuse, Violence, Profanity",
                    "No Sexual content, Nudity or Vulgarity",
                    "No Discrimination or Defamation",
                    "Is suitable for children",
                    "Appropriate Title, Description",
                    "Correct Board, Grade, Subject, Medium",
                    "Appropriate tags such as Resource Type, Concepts",
                    "Relevant Keywords",
                    "Content plays correctly",
                    "Can see the content clearly on Desktop and App",
                    "Audio (if any) is clear and easy to understand",
                    "No Spelling mistakes in the text",
                    "Language is simple to understand"
                ],
                "visibility": "Default",
                "consumerId": "a9cb3a83-a164-4bf0-aa49-b834cebf1c07",
                "mediaType": "content",
                "osId": "org.ekstep.quiz.app",
                "lastPublishedBy": "ekstep",
                "languageCode": "en",
                "graph_id": "domain",
                "nodeType": "DATA_NODE",
                "version": 2,
                "prevState": "Review",
                "size": 371123,
                "lastPublishedOn": "2019-05-29T08:52:19.571+0000",
                "name": "!@#$%^&*()_+",
                "status": "Live",
                "totalQuestions": 1,
                "orgDetails": {},
                "code": "org.sunbird.rC8eWN",
                "description": "",
                "medium": "English",
                "streamingUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/ecml/do_21258040361213952015738-latest",
                "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_21254584070116966411188/artifact/download-3_1531474695189.jpg",
                "idealScreenSize": "normal",
                "createdOn": "2018-08-31T05:36:40.308+0000",
                "badgeAssertions": [
                    {
                        "issuerId": "issuerslug-358",
                        "assertionId": "e338fba4-0064-4225-8791-dcac17f80511",
                        "badgeClassImage": "https://ntpstaging.blob.core.windows.net/badgr/uploads/badges/f350797e550dea70a968ce1bb4b3060b.png",
                        "badgeId": "badgeslug-100",
                        "badgeClassName": "Best book",
                        "createdTS": 1537253744517,
                        "status": "active"
                    }
                ],
                "contentDisposition": "inline",
                "lastUpdatedOn": "2019-05-29T08:52:19.134+0000",
                "SYS_INTERNAL_LAST_UPDATED_ON": "2019-05-30T07:22:39.210+0000",
                "dialcodeRequired": "No",
                "createdFor": [
                    "012530141516660736208"
                ],
                "creator": "Helington N",
                "lastStatusChangedOn": "2019-05-30T07:22:39.203+0000",
                "os": [
                    "All"
                ],
                "totalScore": 1,
                "pkgVersion": 5,
                "versionKey": "1535697983606",
                "idealScreenDensity": "hdpi",
                "s3Key": "ecar_files/do_21258040361213952015738/__1559119939572_do_21258040361213952015738_5.0.ecar",
                "framework": "NCF",
                "lastSubmittedOn": "2019-05-29T08:57:32.552+0000",
                "createdBy": "0e0ea1db-dbad-4202-bc73-dfc8b122296f",
                "compatibilityLevel": 2,
                "board": "CBSE",
                "resourceType": "Learn",
                "node_id": 425893,
                "cardImg": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_21258040361213952015738/artifact/download-3_1531474695189.thumb.jpg",
                "hoverData": {
                    "note": "Go to “My Downloads” to find this textbook",
                    "actions": [
                        {
                            "type": "save",
                            "label": "Save to pendrive"
                        },
                        {
                            "type": "open",
                            "label": "Open"
                        }
                    ]
                }
            },
            {
                "ownershipType": [
                    "createdBy"
                ],
                "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_21252611650918809611434/the-problems-of-philosophy-lewistheme.epub",
                "keywords": [
                    "Anirban epub"
                ],
                "subject": "Geography",
                "channel": "in.ekstep",
                "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_21252611650918809611434/anirban-epub_1529067178577_do_21252611650918809611434_1.0.ecar",
                "showNotification": true,
                "language": [
                    "English"
                ],
                "variants": {
                    "spine": {
                        "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_21252611650918809611434/anirban-epub_1529067178772_do_21252611650918809611434_1.0_spine.ecar",
                        "size": 100945
                    }
                },
                "mimeType": "application/epub",
                "objectType": "Content",
                "gradeLevel": [
                    "Class 1"
                ],
                "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_21252611650918809611434/artifact/localhost_1524724918337.thumb.png",
                "collections": [
                    "do_21252660020819558411474",
                    "do_21271420346162380816189"
                ],
                "appId": "staging.diksha.portal",
                "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_21252611650918809611434/the-problems-of-philosophy-lewistheme.epub",
                "contentEncoding": "gzip",
                "contentType": "Resource",
                "lastUpdatedBy": "07ebd230-bfed-4d29-a849-f5033d087d66",
                "identifier": "do_21252611650918809611434",
                "audience": [
                    "Learner"
                ],
                "publishChecklist": [
                    "No Hate speech, Abuse, Violence, Profanity",
                    "No Sexual content, Nudity or Vulgarity",
                    "No Discrimination or Defamation",
                    "Is suitable for children",
                    "Appropriate Title, Description",
                    "Correct Board, Grade, Subject, Medium",
                    "Appropriate tags such as Resource Type, Concepts",
                    "Relevant Keywords",
                    "Content plays correctly",
                    "Can see the content clearly on Desktop and App",
                    "Audio (if any) is clear and easy to understand",
                    "No Spelling mistakes in the text",
                    "Language is simple to understand"
                ],
                "visibility": "Default",
                "consumerId": "a9cb3a83-a164-4bf0-aa49-b834cebf1c07",
                "mediaType": "content",
                "osId": "org.ekstep.quiz.app",
                "lastPublishedBy": "07ebd230-bfed-4d29-a849-f5033d087d66",
                "graph_id": "domain",
                "nodeType": "DATA_NODE",
                "prevState": "Review",
                "lastPublishedOn": "2018-06-15T12:52:58.577+0000",
                "size": 481709,
                "concepts": [
                    "C3"
                ],
                "name": "Anirban epub",
                "status": "Live",
                "orgDetails": {},
                "code": "13e938d6-4327-4a37-b835-19b5b829072c",
                "description": "Anirban epub",
                "medium": "Kannada",
                "streamingUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_21252611650918809611434/the-problems-of-philosophy-lewistheme.epub",
                "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2124905465279692801410/artifact/localhost_1524724918337.png",
                "idealScreenSize": "normal",
                "createdOn": "2018-06-15T12:49:16.687+0000",
                "badgeAssertions": [
                    {
                        "issuerId": "issuerslug-377",
                        "assertionId": "b02e3191-2418-486e-bf95-f1c8033fb7e7",
                        "badgeClassImage": "https://ntpstaging.blob.core.windows.net/badgr/uploads/badges/3b66a3de8e92dd6f027042cb902ba418.png",
                        "badgeId": "badgeslug-121",
                        "badgeClassName": "Best author",
                        "createdTS": 1545893133486,
                        "status": "active"
                    },
                    {
                        "issuerId": "issuerslug-377",
                        "assertionId": "261e77b4-4b1b-49de-affd-aa3c408138f8",
                        "badgeClassImage": "https://ntpstaging.blob.core.windows.net/badgr/uploads/badges/634d8d9a413f3e48d8a5330ba7753a00.png",
                        "badgeId": "badgeslug-121",
                        "badgeClassName": "Best author",
                        "createdTS": 1546408540297,
                        "status": "active"
                    }
                ],
                "contentDisposition": "inline",
                "lastUpdatedOn": "2018-06-15T12:52:58.285+0000",
                "SYS_INTERNAL_LAST_UPDATED_ON": "2019-01-02T05:55:40.853+0000",
                "dialcodeRequired": "No",
                "createdFor": [
                    "0124758436944117762"
                ],
                "creator": "Demo User",
                "os": [
                    "All"
                ],
                "pkgVersion": 1,
                "versionKey": "1529067178285",
                "idealScreenDensity": "hdpi",
                "s3Key": "ecar_files/do_21252611650918809611434/anirban-epub_1529067178577_do_21252611650918809611434_1.0.ecar",
                "framework": "NCF",
                "lastSubmittedOn": "2018-06-15T12:50:16.940+0000",
                "createdBy": "810108e3-0ea2-4b60-9505-1a7757c6409a",
                "compatibilityLevel": 4,
                "board": "CBSE",
                "resourceType": "Practice",
                "node_id": 377569,
                "cardImg": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_21252611650918809611434/artifact/localhost_1524724918337.thumb.png",
                "hoverData": {
                    "actions": [
                        {
                            "type": "download",
                            "label": "Download"
                        },
                        {
                            "type": "open",
                            "label": "Open"
                        }
                    ]
                }
            },
            {
                "ownershipType": [
                    "createdBy"
                ],
                "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/ecml/do_21252884005676646411974-latest",
                "keywords": [
                    "ecwewcewce"
                ],
                "subject": "English",
                "channel": "in.ekstep",
                "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_21252884005676646411974/rajasthan_1529399625145_do_21252884005676646411974_1.0.ecar",
                "organisation": [
                    "Consumption Org",
                    "ORG25"
                ],
                "language": [
                    "English"
                ],
                "variants": {
                    "spine": {
                        "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_21252884005676646411974/rajasthan_1529399625299_do_21252884005676646411974_1.0_spine.ecar",
                        "size": 51673
                    }
                },
                "mimeType": "application/vnd.ekstep.ecml-archive",
                "objectType": "Content",
                "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_21252884005676646411974/artifact/3_1519885914935.thumb.jpg",
                "gradeLevel": [
                    "Class 1"
                ],
                "collections": [
                    "do_21275320638107648011033",
                    "do_21252944504394547212198",
                    "do_21252944428500582412195"
                ],
                "appId": "staging.diksha.portal",
                "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_21252884005676646411974/artifact/1529399624900_do_21252884005676646411974.zip",
                "contentEncoding": "gzip",
                "contentType": "Resource",
                "lastUpdatedBy": "68777b59-b28b-4aee-88d6-50d46e4c3509",
                "identifier": "do_21252884005676646411974",
                "audience": [
                    "Learner"
                ],
                "publishChecklist": [
                    "No Hate speech, Abuse, Violence, Profanity",
                    "No Sexual content, Nudity or Vulgarity",
                    "No Discrimination or Defamation",
                    "Is suitable for children",
                    "Relevant Keywords",
                    "Appropriate tags such as Resource Type, Concepts",
                    "Correct Board, Grade, Subject, Medium",
                    "Appropriate Title, Description",
                    "Content plays correctly",
                    "Can see the content clearly on Desktop and App",
                    "Audio (if any) is clear and easy to understand",
                    "No Spelling mistakes in the text",
                    "Language is simple to understand"
                ],
                "visibility": "Default",
                "consumerId": "a9cb3a83-a164-4bf0-aa49-b834cebf1c07",
                "mediaType": "content",
                "osId": "org.ekstep.quiz.app",
                "lastPublishedBy": "68777b59-b28b-4aee-88d6-50d46e4c3509",
                "graph_id": "domain",
                "nodeType": "DATA_NODE",
                "version": 2,
                "prevState": "Review",
                "size": 153803,
                "lastPublishedOn": "2018-06-19T09:13:45.145+0000",
                "concepts": [
                    "SC5",
                    "C26",
                    "SC6"
                ],
                "name": "Rajasthan",
                "status": "Live",
                "totalQuestions": 0,
                "orgDetails": {},
                "code": "org.sunbird.5gt9FD",
                "description": "Untitled Collection",
                "streamingUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/ecml/do_21252884005676646411974-latest",
                "medium": "English",
                "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_212450905413713920137/artifact/3_1519885914935.jpg",
                "idealScreenSize": "normal",
                "createdOn": "2018-06-19T09:10:20.991+0000",
                "badgeAssertions": [
                    {
                        "issuerId": "issuerslug-377",
                        "assertionId": "f9554ba0-5958-4a97-b20a-d0d7a04360b1",
                        "badgeClassImage": "https://ntpstaging.blob.core.windows.net/badgr/uploads/badges/3549b0881ddf5025736e7baf5b027dcf.png",
                        "badgeId": "badgeslug-121",
                        "badgeClassName": "Best author",
                        "createdTS": 1545893013408,
                        "status": "active"
                    }
                ],
                "contentDisposition": "inline",
                "lastUpdatedOn": "2018-06-19T09:13:44.465+0000",
                "SYS_INTERNAL_LAST_UPDATED_ON": "2018-12-27T06:43:33.466+0000",
                "dialcodeRequired": "No",
                "createdFor": [
                    "01232002070124134414",
                    "012315809814749184151"
                ],
                "creator": "Ntp creator Uswr",
                "os": [
                    "All"
                ],
                "totalScore": 0,
                "pkgVersion": 1,
                "versionKey": "1529399624465",
                "idealScreenDensity": "hdpi",
                "s3Key": "ecar_files/do_21252884005676646411974/rajasthan_1529399625145_do_21252884005676646411974_1.0.ecar",
                "framework": "NCF",
                "lastSubmittedOn": "2018-06-19T09:12:39.017+0000",
                "createdBy": "659b011a-06ec-4107-84ad-955e16b0a48a",
                "compatibilityLevel": 2,
                "board": "State (Rajasthan)",
                "resourceType": "Test",
                "node_id": 378177,
                "cardImg": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_21252884005676646411974/artifact/3_1519885914935.thumb.jpg",
                "hoverData": {
                    "actions": [
                        {
                            "type": "download",
                            "label": "Download"
                        },
                        {
                            "type": "open",
                            "label": "Open"
                        }
                    ]
                }
            },
            {
                "ownershipType": [
                    "createdBy"
                ],
                "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/ecml/do_2124708443414036481125-latest",
                "channel": "in.ekstep",
                "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2124708443414036481125/chetan-content_1527769448521_do_2124708443414036481125_4.0.ecar",
                "language": [
                    "English"
                ],
                "variants": {
                    "spine": {
                        "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2124708443414036481125/chetan-content_1527769448613_do_2124708443414036481125_4.0_spine.ecar",
                        "size": 1117
                    }
                },
                "mimeType": "application/vnd.ekstep.ecml-archive",
                "objectType": "Content",
                "collections": [
                    "do_2124708657568645121145",
                    "do_2124708669666263041147"
                ],
                "appId": "staging.diksha.portal",
                "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2124708443414036481125/artifact/1522320212461_do_2124708443414036481125.zip",
                "contentEncoding": "gzip",
                "contentType": "Resource",
                "lastUpdatedBy": "68777b59-b28b-4aee-88d6-50d46e4c3509",
                "identifier": "do_2124708443414036481125",
                "audience": [
                    "Learner"
                ],
                "visibility": "Default",
                "consumerId": "56ff6913-abcc-4a88-b247-c976e47cbfb4",
                "mediaType": "content",
                "osId": "org.ekstep.quiz.app",
                "lastPublishedBy": "68777b59-b28b-4aee-88d6-50d46e4c3509",
                "graph_id": "domain",
                "nodeType": "DATA_NODE",
                "version": 2,
                "prevState": "Live",
                "license": "Creative Commons Attribution (CC BY)",
                "lastPublishedOn": "2018-05-31T12:24:08.521+0000",
                "size": 5305,
                "name": "Chetan content",
                "status": "Live",
                "orgDetails": {},
                "code": "org.sunbird.tYnEvl",
                "streamingUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/ecml/do_2124708443414036481125-latest",
                "idealScreenSize": "normal",
                "createdOn": "2018-03-29T10:37:45.893+0000",
                "badgeAssertions": [
                    {
                        "issuerId": "issuerslug-372",
                        "assertionId": "c5d6a7a5-e84e-4777-8332-a1e87bbde694",
                        "badgeClassImage": "https://ntpstaging.blob.core.windows.net/badgr/uploads/badges/839ccee9b125f627329d23d66283b45f.png",
                        "badgeId": "badgeslug-116",
                        "badgeClassName": "Dec 11 2018 APRTESTONE ISSUER",
                        "createdTS": 1544525344869,
                        "status": "active"
                    }
                ],
                "contentDisposition": "inline",
                "lastUpdatedOn": "2018-05-31T12:24:08.448+0000",
                "SYS_INTERNAL_LAST_UPDATED_ON": "2019-08-15T00:35:39.816+0000",
                "dialcodeRequired": "No",
                "createdFor": [
                    "01232002070124134414",
                    "012315809814749184151"
                ],
                "creator": "Telemetry User",
                "os": [
                    "All"
                ],
                "pkgVersion": 4,
                "versionKey": "1527769448448",
                "idealScreenDensity": "hdpi",
                "s3Key": "ecar_files/do_2124708443414036481125/chetan-content_1527769448521_do_2124708443414036481125_4.0.ecar",
                "framework": "FWATMPT1",
                "lastSubmittedOn": "2018-03-29T10:41:28.672+0000",
                "me_averageRating": 5,
                "createdBy": "659b011a-06ec-4107-84ad-955e16b0a48a",
                "compatibilityLevel": 2,
                "resourceType": "Read",
                "node_id": 98964,
                "hoverData": {
                    "note": "Go to “My Downloads” to find this textbook",
                    "actions": [
                        {
                            "type": "save",
                            "label": "Save to pendrive"
                        },
                        {
                            "type": "open",
                            "label": "Open"
                        }
                    ]
                }
            },
            {
                "ownershipType": [
                    "createdBy"
                ],
                "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2125005681201643521507/01.pdf",
                "subject": "History and Civics",
                "channel": "in.ekstep",
                "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2125005681201643521507/123were_1527769732335_do_2125005681201643521507_4.0.ecar",
                "showNotification": true,
                "language": [
                    "English"
                ],
                "variants": {
                    "spine": {
                        "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2125005681201643521507/123were_1527769733201_do_2125005681201643521507_4.0_spine.ecar",
                        "size": 45773
                    }
                },
                "mimeType": "application/pdf",
                "objectType": "Content",
                "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2125005681201643521507/artifact/111-600x375_1522638521957.thumb.jpg",
                "gradeLevel": [
                    "Grade 6"
                ],
                "collections": [
                    "do_2127022866268897281467",
                    "do_212518123106598912146655.img",
                    "do_21252176248861491213236",
                    "do_212516115958833152146551.img",
                    "do_2125310927864381441577",
                    "do_21250340016679321616577",
                    "do_2125430205044736001652",
                    "do_21252804279848140811599",
                    "do_21257827984084992011686",
                    "do_2125310927864381441578",
                    "do_21251468318021222411980",
                    "do_212518123106598912146655",
                    "do_212516112227344384146542"
                ],
                "appId": "staging.diksha.portal",
                "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2125005681201643521507/01.pdf",
                "contentEncoding": "identity",
                "contentType": "Resource",
                "lastUpdatedBy": "creator12345 Test",
                "identifier": "do_2125005681201643521507",
                "audience": [
                    "Learner"
                ],
                "publishChecklist": [
                    "No Hate speech, Abuse, Violence, Profanity",
                    "No Sexual content, Nudity or Vulgarity",
                    "No Discrimination or Defamation",
                    "Is suitable for children",
                    "Appropriate Title, Description",
                    "Correct Board, Grade, Subject, Medium",
                    "Appropriate tags such as Resource Type, Concepts",
                    "Relevant Keywords",
                    "Content plays correctly",
                    "Can see the content clearly on Desktop and App",
                    "Audio (if any) is clear and easy to understand",
                    "No Spelling mistakes in the text",
                    "Language is simple to understand"
                ],
                "visibility": "Default",
                "consumerId": "a9cb3a83-a164-4bf0-aa49-b834cebf1c07",
                "mediaType": "content",
                "osId": "org.ekstep.quiz.app",
                "lastPublishedBy": "68777b59-b28b-4aee-88d6-50d46e4c3509",
                "graph_id": "domain",
                "nodeType": "DATA_NODE",
                "version": 1,
                "pragma": [
                    "external"
                ],
                "prevState": "Live",
                "license": "Creative Commons Attribution (CC BY)",
                "lastPublishedOn": "2018-05-31T12:28:52.335+0000",
                "size": 8966834,
                "concepts": [
                    "BIO40000",
                    "BIO50000"
                ],
                "name": "123were",
                "status": "Live",
                "orgDetails": {},
                "code": "ddd8e812-8126-4d95-b4e1-a92988eda68c",
                "lastFlaggedOn": "2018-07-05T06:38:21.173+0000",
                "medium": "English",
                "streamingUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2125005681201643521507/01.pdf",
                "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2124734547707576321269/artifact/111-600x375_1522638521957.jpg",
                "idealScreenSize": "normal",
                "flaggedBy": [
                    "creator12345 Test"
                ],
                "createdOn": "2018-05-10T10:30:56.855+0000",
                "badgeAssertions": [
                    {
                        "issuerId": "issuerslug-57",
                        "assertionId": "5a182f4d-43b1-43c7-a21b-63ce6c24b570",
                        "badgeClassImage": "https://sunbirdstaging.blob.core.windows.net/badgr/uploads/badges/badf0408727b0c90556b5de31829164e.png",
                        "badgeId": "badgeslug-81",
                        "badgeClassName": "Official",
                        "createdTS": 1533710533029,
                        "status": "active"
                    }
                ],
                "contentDisposition": "inline",
                "lastUpdatedOn": "2018-07-05T06:39:20.400+0000",
                "SYS_INTERNAL_LAST_UPDATED_ON": "2019-08-23T00:35:42.579+0000",
                "dialcodeRequired": "No",
                "createdFor": [
                    "01232002070124134414",
                    "012315809814749184151"
                ],
                "creator": "Mentor Juthika User",
                "os": [
                    "All"
                ],
                "pkgVersion": 4,
                "versionKey": "1530772760400",
                "idealScreenDensity": "hdpi",
                "s3Key": "ecar_files/do_2125005681201643521507/123were_1527769732335_do_2125005681201643521507_4.0.ecar",
                "framework": "FWATMPT1",
                "lastSubmittedOn": "2018-05-10T10:31:54.877+0000",
                "me_averageRating": 5,
                "createdBy": "d882967f-b3e1-456b-b984-d800470837ab",
                "compatibilityLevel": 4,
                "board": "MSCERT",
                "resourceType": "Practice",
                "node_id": 149315,
                "cardImg": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2125005681201643521507/artifact/111-600x375_1522638521957.thumb.jpg",
                "hoverData": {
                    "actions": [
                        {
                            "type": "download",
                            "label": "Download"
                        },
                        {
                            "type": "open",
                            "label": "Open"
                        }
                    ]
                }
            },
            {
                "ownershipType": [
                    "createdBy"
                ],
                "previewUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/ecml/do_21264270761184460811673-latest",
                "subject": "Mathematics",
                "channel": "in.ekstep",
                "downloadUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/ecar_files/do_21264270761184460811673/mathematics-activity-class-4_1543303328064_do_21264270761184460811673_2.0.ecar",
                "organisation": [
                    "NTP"
                ],
                "language": [
                    "English"
                ],
                "mimeType": "application/vnd.ekstep.ecml-archive",
                "variants": {
                    "spine": {
                        "ecarUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/ecar_files/do_21264270761184460811673/mathematics-activity-class-4_1543303328175_do_21264270761184460811673_2.0_spine.ecar",
                        "size": 12590
                    }
                },
                "editorState": "{\"plugin\":{\"noOfExtPlugins\":14,\"extPlugins\":[{\"plugin\":\"org.ekstep.contenteditorfunctions\",\"version\":\"1.2\"},{\"plugin\":\"org.ekstep.keyboardshortcuts\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.richtext\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.iterator\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.navigation\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.mathtext\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.libs.ckeditor\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.questionunit\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.questionunit.mcq\",\"version\":\"1.1\"},{\"plugin\":\"org.ekstep.questionunit.mtf\",\"version\":\"1.1\"},{\"plugin\":\"org.ekstep.keyboard\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.questionunit.reorder\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.questionunit.sequence\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.questionunit.ftb\",\"version\":\"1.0\"}]},\"stage\":{\"noOfStages\":2,\"currentStage\":\"83a3d941-3306-429e-aae2-07ca70d744ee\"},\"sidebar\":{\"selectedMenu\":\"settings\"}}",
                "objectType": "Content",
                "gradeLevel": [
                    "Class 4"
                ],
                "appIcon": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21264270761184460811673/artifact/0288d78758c4463dd40892d5a460edf4_1478578597914.thumb.jpeg",
                "me_totalTimespent": 31.8,
                "collections": [
                    "do_21264701641690316813698",
                    "do_21280690397737779211227",
                    "do_21280689455348121611201",
                    "do_21280691880382464011277",
                    "do_21280762824795750411925",
                    "do_21280762824795750411925.img",
                    "do_21283180802014412811765",
                    "do_212832384100474880153"
                ],
                "me_averageTimespentPerSession": 31.8,
                "appId": "staging.diksha.portal",
                "contentEncoding": "gzip",
                "artifactUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21264270761184460811673/artifact/1543303326995_do_21264270761184460811673.zip",
                "contentType": "Resource",
                "identifier": "do_21264270761184460811673",
                "lastUpdatedBy": "b9a3972c-a2ba-46fa-9279-59ce21957a83",
                "audience": [
                    "Learner"
                ],
                "visibility": "Default",
                "consumerId": "a9cb3a83-a164-4bf0-aa49-b834cebf1c07",
                "mediaType": "content",
                "osId": "org.ekstep.quiz.app",
                "graph_id": "domain",
                "nodeType": "DATA_NODE",
                "lastPublishedBy": "7bd5aef5-d825-47fa-96b5-3a3ce3b4020b",
                "version": 2,
                "prevState": "Review",
                "license": "Creative Commons Attribution (CC BY)",
                "size": 562094,
                "lastPublishedOn": "2018-11-27T07:22:07.149+0000",
                "IL_FUNC_OBJECT_TYPE": "Content",
                "name": "Mathematics Activity - Class 4",
                "attributions": [
                    "DIKSHA"
                ],
                "status": "Live",
                "totalQuestions": 5,
                "me_averageInteractionsPerMin": 0,
                "orgDetails": {},
                "code": "org.sunbird.aFaNPB",
                "me_totalSessionsCount": 1,
                "description": "Grade 4 Math Activity",
                "medium": "English",
                "streamingUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/ecml/do_21264270761184460811673-latest",
                "idealScreenSize": "normal",
                "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_20052111/artifact/0288d78758c4463dd40892d5a460edf4_1478578597914.jpeg",
                "createdOn": "2018-11-27T06:14:29.024+0000",
                "badgeAssertions": [
                    {
                        "issuerId": "issuerslug-377",
                        "assertionId": "2c8c6351-d098-4522-937c-38d78e2a129b",
                        "badgeClassImage": "https://ntpstaging.blob.core.windows.net/badgr/uploads/badges/4d0f1b1dea2ce9ed399f88e5fe8792fa.png",
                        "badgeId": "badgeslug-121",
                        "badgeClassName": "Best author",
                        "createdTS": 1545893035212,
                        "status": "active"
                    }
                ],
                "contentDisposition": "inline",
                "lastUpdatedOn": "2018-11-27T07:22:05.791+0000",
                "SYS_INTERNAL_LAST_UPDATED_ON": "2019-09-11T00:36:40.503+0000",
                "dialcodeRequired": "No",
                "owner": "DemoCreator Creator",
                "creator": "DemoCreator Creator",
                "createdFor": [
                    "ORG_001"
                ],
                "IL_SYS_NODE_TYPE": "DATA_NODE",
                "os": [
                    "All"
                ],
                "me_totalInteractions": 0,
                "totalScore": 5,
                "pkgVersion": 2,
                "versionKey": "1543303326455",
                "idealScreenDensity": "hdpi",
                "framework": "NCF",
                "s3Key": "ecar_files/do_21264270761184460811673/mathematics-activity-class-4_1543303328064_do_21264270761184460811673_2.0.ecar",
                "lastSubmittedOn": "2018-11-27T07:20:23.559+0000",
                "me_averageRating": 5,
                "createdBy": "b9a3972c-a2ba-46fa-9279-59ce21957a83",
                "compatibilityLevel": 2,
                "IL_UNIQUE_ID": "do_21264270761184460811673",
                "ownedBy": "b9a3972c-a2ba-46fa-9279-59ce21957a83",
                "board": "State (Tamil Nadu)",
                "resourceType": "Test",
                "node_id": 440472,
                "cardImg": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21264270761184460811673/artifact/0288d78758c4463dd40892d5a460edf4_1478578597914.thumb.jpeg",
                "hoverData": {
                    "actions": [
                        {
                            "type": "download",
                            "label": "Download"
                        },
                        {
                            "type": "open",
                            "label": "Open"
                        }
                    ]
                }
            },
            {
                "ownershipType": [
                    "createdBy"
                ],
                "subject": "Physical Science",
                "channel": "in.ekstep",
                "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_21259106171407564812108/contentsep_1536996482030_do_21259106171407564812108_1.0.ecar",
                "organisation": [
                    "1.10 Org"
                ],
                "language": [
                    "English"
                ],
                "variants": {
                    "spine": {
                        "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_21259106171407564812108/contentsep_1536996482107_do_21259106171407564812108_1.0_spine.ecar",
                        "size": 22783
                    }
                },
                "mimeType": "application/vnd.ekstep.ecml-archive",
                "objectType": "Content",
                "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_21259106171407564812108/artifact/beee6757847b84a1e41ce827ae02ccc7_1477485749628.thumb.jpeg",
                "gradeLevel": [
                    "Class 9"
                ],
                "appId": "staging.diksha.portal",
                "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_21259106171407564812108/artifact/1536996481813_do_21259106171407564812108.zip",
                "contentEncoding": "gzip",
                "contentType": "Resource",
                "lastUpdatedBy": "871e9976-4f96-43bd-986b-91b92c57dbfc",
                "identifier": "do_21259106171407564812108",
                "audience": [
                    "Learner"
                ],
                "publishChecklist": [
                    "No Hate speech, Abuse, Violence, Profanity",
                    "No Sexual content, Nudity or Vulgarity",
                    "No Discrimination or Defamation",
                    "Is suitable for children",
                    "Relevant Keywords",
                    "Appropriate tags such as Resource Type, Concepts",
                    "Correct Board, Grade, Subject, Medium",
                    "Appropriate Title, Description",
                    "Language is simple to understand",
                    "No Spelling mistakes in the text",
                    "Audio (if any) is clear and easy to understand",
                    "Can see the content clearly on Desktop and App",
                    "Content plays correctly"
                ],
                "visibility": "Default",
                "consumerId": "56ff6913-abcc-4a88-b247-c976e47cbfb4",
                "mediaType": "content",
                "osId": "org.ekstep.quiz.app",
                "lastPublishedBy": "871e9976-4f96-43bd-986b-91b92c57dbfc",
                "graph_id": "domain",
                "nodeType": "DATA_NODE",
                "prevState": "Review",
                "size": 367829,
                "lastPublishedOn": "2018-09-15T07:28:02.030+0000",
                "name": "ContentSep",
                "status": "Live",
                "totalQuestions": 1,
                "orgDetails": {},
                "code": "org.sunbird.ooPeyD",
                "description": "Untitled Collection",
                "medium": "Telugu",
                "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/beee6757847b84a1e41ce827ae02ccc7_1477485749628.jpeg",
                "idealScreenSize": "normal",
                "createdOn": "2018-09-15T07:00:38.143+0000",
                "badgeAssertions": [
                    {
                        "issuerId": "issuerslug-376",
                        "assertionId": "62cc4979-04f9-4da1-862e-ce4c49458ba7",
                        "badgeClassImage": "https://ntpstaging.blob.core.windows.net/badgr/uploads/badges/343f9a93e8c2a82ffe36e9ecfbf363f6.png",
                        "badgeId": "badgeslug-120",
                        "badgeClassName": "STATE TEXTBOOK5",
                        "createdTS": 1545133359941,
                        "status": "active"
                    }
                ],
                "contentDisposition": "inline",
                "lastUpdatedOn": "2018-09-15T07:28:00.564+0000",
                "SYS_INTERNAL_LAST_UPDATED_ON": "2018-12-18T11:42:40.059+0000",
                "dialcodeRequired": "No",
                "createdFor": [
                    "0125903113586933768"
                ],
                "creator": "1.10Creator User",
                "os": [
                    "All"
                ],
                "totalScore": 1,
                "pkgVersion": 1,
                "versionKey": "1536996480564",
                "idealScreenDensity": "hdpi",
                "s3Key": "ecar_files/do_21259106171407564812108/contentsep_1536996482030_do_21259106171407564812108_1.0.ecar",
                "framework": "ap_k-12_13",
                "lastSubmittedOn": "2018-09-15T07:01:55.763+0000",
                "createdBy": "644da49c-7bef-49d6-8e24-e741d148d652",
                "compatibilityLevel": 2,
                "board": "State (Andhra Pradesh)",
                "resourceType": "Teach",
                "node_id": 428793,
                "cardImg": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_21259106171407564812108/artifact/beee6757847b84a1e41ce827ae02ccc7_1477485749628.thumb.jpeg",
                "hoverData": {
                    "actions": [
                        {
                            "type": "download",
                            "label": "Download"
                        },
                        {
                            "type": "open",
                            "label": "Open"
                        }
                    ]
                }
            }
        ];
    }
    DemoCardsStackComponent.prototype.ngOnInit = function () {
    };
    DemoCardsStackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-demo-cards-stack',
            template: __webpack_require__(/*! ./demo-cards-stack.component.html */ "./src/app/demo-full/demo-cards-stack/demo-cards-stack.component.html"),
            styles: [__webpack_require__(/*! ./demo-cards-stack.component.scss */ "./src/app/demo-full/demo-cards-stack/demo-cards-stack.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service__WEBPACK_IMPORTED_MODULE_2__["AppSharedService"]])
    ], DemoCardsStackComponent);
    return DemoCardsStackComponent;
}());



/***/ }),

/***/ "./src/app/demo-full/demo-cards/demo-cards.component.html":
/*!****************************************************************!*\
  !*** ./src/app/demo-full/demo-cards/demo-cards.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar>\n\n</app-navbar>\n\n<div class=\"main-container container-fluid\">\n  <!-- Page Container -->\n  <div class=\"page-container\">\n    <!-- Page Sidebar -->\n    <app-sidebar>\n\n    </app-sidebar>\n    <!-- /Page Sidebar -->\n\n\n    <!-- Main content-->\n    <div class=\"page-content\" [ngStyle]=\"!appSharedService.sideBarVisible && {'margin-left':'43px'}\">\n      <div class=\"page-header position-relative\">\n        <div class=\"header-title\">\n          <h1>\n            Cards\n          </h1>\n        </div>\n      </div>\n      <div class=\"page-body\">\n        <div class=\"row\">\n          <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n            <section id=\"libraryCard\">\n              <h6 class=\"margin-bottom-20\">Library Card Component</h6>\n              <div class=\"well bordered-left bordered-themeprimary\">\n                <p>Library Card is the component that is meant to be used in the places where a text book or content\n                  needs to be shown in the card style. </p>\n                <P>This component can be used in library section across all the consumption platforms</P>\n                <p>Basically there are four types of cards: </p>\n                <ul class=\"custom-list\">\n                  <li>Recently Viewed card</li>\n                  <li>Mobile view textbook/content</li>\n                  <li>Desktop view textbook/content</li>\n                  <li>QR code results textbook/content</li>\n                </ul>\n                <p>You can find more details of the component, various inputs and outputs in the\n                  <a href=\"https://github.com/Sunbird-Ed/SunbirdEd-consumption-ngcomponents/blob/master/projects/common-consumption/src/lib/card/library-card/library-card.md\"\n                    target=\"_blank\">\n                    component's original repository\n                  </a>.\n                </p>\n                <p><i><b>Note : </b></i></p>\n                <p>\n                  The width of the card is fluid in nature i.e, 100% of the parent conatainer, so user can control the width of the card based on the parent element in which the card is contained.\n                </p>\n                <p>\n                  Card is not restricted to particular language. Based on your <b>i18n</b> preferences pass inputs in the desired language.\n                </p>\n                <p>\n                  In offline/online/downloaded scenarios where image attribute changes based on the network or other criteria, cardImg property must be updated.\n                </p>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-6 col-sm-6 col-xs-12\">\n                  <h4>Default card</h4>\n                  <div style=\"max-width: 292px;\">\n                    <sb-library-card></sb-library-card>\n                  </div>\n                  \n                </div>\n              </div>\n            </section>\n            <hr>\n            <section id=\"recentlyViewed\">\n              <h6 class=\"row-title\">Recently Viewed Card</h6>\n              <p>Library card with type 'recently_viewed' or you can also import thr LibraryCardTypes from the library and assign type as LibraryCardTypes.RECENTLY_VIEWED</p>\n              <div class=\"row\">\n                <div class=\"col-lg-6 col-sm-6 col-xs-12\">\n                  <h4>Recently viewed card</h4>\n                  <div style=\"max-width: 292px;\">\n                    <sb-library-card [content]=\"contentList[0]\" [type]=\"recentlyViewedCard\" (click)=\"cardClick($event)\" [cardImg]=\"contentList[0].appIcon\">\n\n                    </sb-library-card>\n                  </div>\n                </div>\n              </div>\n            </section>\n            <hr>\n            <section id=\"desktopAppTextbooks\">\n              <h6 class=\"row-title\">Text Book For Desktop App and Portal</h6>\n              <div class=\"row\">\n                <div class=\"col-lg-6 col-sm-6 col-xs-12\">\n                  <h4>Desktop card</h4>\n                  <div style=\"max-width: 292px;\">\n                    <sb-library-card [content]=\"contentList[2]\" [type]=\"desktopTextBookCard\" (click)=\"cardClick($event)\" [cardImg]=\"contentList[2].appIcon\">\n\n                    </sb-library-card>\n                  </div>\n                </div>\n              </div>\n            </section>\n            <hr>\n            <section id=\"mobileAppTextbooks\">\n              <h6 class=\"row-title\">Text Book For Mobile App</h6>\n              <div class=\"row\">\n                <div class=\"col-lg-6 col-sm-6 col-xs-12\">\n                  <h4>mobile card</h4>\n                  <div style=\"max-width: 292px;\">\n                    <sb-library-card [content]=\"contentList[1]\" [type]=\"mobileTextBookCard\" (click)=\"cardClick($event)\" [cardImg]=\"contentList[1].appIcon\">\n\n                    </sb-library-card>\n                  </div>\n                </div>\n              </div>\n            </section>\n            <hr>\n            \n            <section id=\"qrCode\">\n              <h6 class=\"row-title\">QR code result Card</h6>\n              <div class=\"row\">\n                <div class=\"col-lg-6 col-sm-6 col-xs-12\">\n                  <h4>QR code card</h4>\n                  <div style=\"max-width: 292px;\">\n                    <sb-library-card [content]=\"contentList[2]\" [type]=\"qrcodeResultCard\" (click)=\"cardClick($event)\" [cardImg]=\"contentList[2].appIcon\">\n\n                    </sb-library-card>\n                  </div>\n                </div>\n              </div>\n            </section>\n            <hr>\n            <section id=\"cardwithHover\">\n              <h6 class=\"row-title\">Cards with hover</h6>\n              <p> For default hover effect you can include  <code>ng-template  </code> tag with required hover actions to be shown.</p>\n              <p> You can add the <code> disabled:true  </code> true property inside hoverData object for specific control</p>\n              <p>for that to work you need to add <code>hoverData</code> to the content for which this card is used. Please refer \n                <a href=\"https://github.com/Sunbird-Ed/SunbirdEd-consumption-ngcomponents/blob/master/projects/common-consumption/src/lib/card/library-card/library-card.md\"\n                 target=\"_blank\">\n                  official\n                 </a> \n                docs for correct type of hoverData and what propeties it should have.\n              </p>\n              <div class=\"row\">\n                <div class=\"col-lg-6 col-sm-6 col-xs-12\">\n                  <h4>Recently viewed card with hover</h4>\n                  <div style=\"max-width: 292px;\">\n                    <sb-library-card [content]=\"contentList[0]\" [type]=\"recentlyViewedCard\" \n                        (click)=\"cardClick($event)\" [cardImg]=\"contentList[1].appIcon\" \n                        [hover-template]=\"hoverTemplate\">\n\n                        <ng-template #hoverTemplate let-hoverData=\"hoverData\" let-content=\"contentList[0]\">\n                            <sb-card-hover class=\"card-hover\" [hoverData]=\"hoverData\" [content]=\"contentList[0]\"\n                                (hoverActionClick)=\"hoverActionClicked($event)\">\n                            </sb-card-hover>\n                        </ng-template>\n\n                    </sb-library-card>\n                    <h3><i class=\"Notosans font-60\">Hover on the card to see the effect</i></h3>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"row margin-top-20\">\n                <div class=\"col-lg-6 col-sm-6 col-xs-12\">\n                  <h4>Desktop card with hover</h4>\n                  <div style=\"max-width: 292px;\">\n                    <sb-library-card [content]=\"contentList[0]\" [type]=\"desktopTextBookCard\" \n                        (click)=\"cardClick($event)\" [cardImg]=\"contentList[0].appIcon\" \n                        [hover-template]=\"hoverTemplate1\">\n\n                        <ng-template #hoverTemplate1 let-hoverData=\"hoverData\" let-content=\"contentList[0]\">\n                            <sb-card-hover class=\"card-hover\" [hoverData]=\"hoverData\" [content]=\"contentList[0]\"\n                                (hoverActionClick)=\"hoverActionClicked($event)\">\n                            </sb-card-hover>\n                            <!-- <div class=\"card-hover\" style=\"background-color: rgba(0,0,0,0.8);\">\n                                <h6 style=\"color:#00ff4a\">Christy</h6>\n                                <p style=\"color:#fff; opacity: 0.7;\">Christopher Fernandes</p>\n                            </div> -->\n\n                        </ng-template>\n\n                    </sb-library-card>\n                    <h3><i class=\"Notosans font-60\">Hover on the card to see the effect</i></h3>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"row margin-top-20\">\n                <div class=\"col-lg-6 col-sm-6 col-xs-12\">\n                  <h4>Hover with custom template</h4>\n                  <div style=\"max-width: 292px;\">\n                    <sb-library-card [content]=\"contentList[1]\" [type]=\"desktopTextBookCard\" \n                        (click)=\"cardClick($event)\" [cardImg]=\"contentList[1].appIcon\" \n                        [hover-template]=\"hoverTemplate2\">\n\n                        <ng-template #hoverTemplate2 let-hoverData=\"hoverData\" let-content=\"contentList[1]\">\n                            <div class=\"card-hover\" style=\"background-color: rgba(0,0,0,0.8);\">\n                                <h2 style=\"color:#00ff4a\">Christy</h2>\n                                <p style=\"color:#fff; opacity: 0.7;\">Christopher Fernandes</p>\n                            </div>\n                        </ng-template>\n\n                    </sb-library-card>\n                    <h3><i class=\"Notosans font-60\">Hover on the card to see the effect</i></h3>\n                  </div>\n                </div>\n              </div>\n            </section>\n            <hr>\n\n            <section id=\"multipleCards\">\n              <h6 class=\"row-title\">Multiple cards </h6>\n              <div class=\"row\">\n                <div class=\"col-lg-12 col-sm-12 col-xs-12\">\n                  <h4>multiple desktop card</h4>\n                  <div class=\"row\">\n                      <div class=\"col-xs-12 col-md-6 col-lg-3\" *ngFor=\"let content of contentList | slice:0:4\">\n                          <sb-library-card [content]=\"content\" [type]=\"desktopTextBookCard\" (click)=\"cardClick($event)\" [cardImg]=\"content.appIcon\">\n                          </sb-library-card>\n                      </div>\n                  </div>\n                    \n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-12 col-sm-12 col-xs-12\">\n                  <h4 class=\"margin-top-20\" (click)=\"test(testEl)\" #testEl>multiple recently viewed card</h4>\n                  <div class=\"row\" >\n                      <div class=\"col-xs-12 col-md-6 col-lg-3\" *ngFor=\"let content of contentList | slice:0:4\">\n                        <sb-library-card [content]=\"content\" [type]=\"mobileTextBookCard\" (click)=\"cardClick($event)\" [cardImg]=\"content.appIcon\">\n\n                        </sb-library-card>\n                      </div>\n                    </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-12 col-sm-12 col-xs-12\">\n                  <h4 class=\"margin-top-20\">multiple cards with hover</h4>\n                    <div class=\"row\">\n                      <div class=\"col-xs-12 col-md-6 col-lg-3\" *ngFor=\"let content of contentList | slice:0:4\">\n                        <sb-library-card [content]=\"content\" [type]=\"recentlyViewedCard\" \n                            (click)=\"cardClick($event)\" [cardImg]=\"content.appIcon\" \n                            [hover-template]=\"hoverTemplate\">\n\n                            <ng-template #hoverTemplate let-hoverData=\"hoverData\" let-content=\"content\">\n                                <sb-card-hover class=\"card-hover\" [hoverData]=\"hoverData\" [content]=\"content\"\n                                    (hoverActionClick)=\"hoverActionClicked($event)\">\n                                </sb-card-hover>\n                            </ng-template>\n\n                        </sb-library-card>\n                      </div>\n                  </div>\n                </div>\n              </div>\n            </section>\n            <hr>\n            <section id=\"offlineCard\">\n              <h6 class=\"row-title\">Offline cards</h6>\n              <div class=\"row\">\n                <div class=\"col-lg-6 col-sm-6 col-xs-12\">\n                  <h4>Offline mobile card</h4>\n                  <div style=\"max-width: 292px;\">\n                    <sb-library-card [content]=\"contentList[1]\" [type]=\"mobileTextBookCard\" (click)=\"cardClick($event)\" [cardImg]=\"\" [isOffline]=\"true\">\n\n                    </sb-library-card>\n                  </div>\n                  <div text-center> <small>Without any image/icon</small></div>\n                </div>\n                <div class=\"col-lg-6 col-sm-6 col-xs-12\">\n                  <h4>Offline mobile card</h4>\n                  <div style=\"max-width: 292px;\">\n                    <sb-library-card [content]=\"contentList[1]\" [type]=\"mobileTextBookCard\" (click)=\"cardClick($event)\" [cardImg]=\"'assets/imgs/ic_offline_white_sm.png'\" [isOffline]=\"true\">\n\n                    </sb-library-card>\n                  </div>\n                  <div text-center> <small>With any image/icon</small></div>\n                </div>\n              </div>\n\n              <div class=\"row margin-top-20\">\n                <div class=\"col-lg-6 col-sm-6 col-xs-12\">\n                  <h4>Offline desktop card</h4>\n                  <div style=\"max-width: 292px;\">\n                    <sb-library-card [content]=\"contentList[2]\" [type]=\"desktopTextBookCard\" (click)=\"cardClick($event)\" [cardImg]=\"\" [isOffline]=\"true\">\n\n                    </sb-library-card>\n                  </div>\n                  <div text-center> <small>Without any image/icon</small></div>\n                </div>\n                <div class=\"col-lg-6 col-sm-6 col-xs-12\">\n                  <h4>Offline mobile card</h4>\n                  <div style=\"max-width: 292px;\">\n                    <sb-library-card [content]=\"contentList[1]\" [type]=\"desktopTextBookCard\" (click)=\"cardClick($event)\" [cardImg]=\"'assets/imgs/ic_offline_white_sm.png'\" [isOffline]=\"true\">\n\n                    </sb-library-card>\n                  </div>\n                  <div text-center> <small>With any image/icon</small></div>\n                </div>\n              </div>\n              \n            </section>\n\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- Main content end-->\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/demo-full/demo-cards/demo-cards.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/demo-full/demo-cards/demo-cards.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section:not(:first-child) {\n  margin-top: 40px; }\n\nhr {\n  border-top: 1px solid #ccc;\n  margin-top: 20px;\n  margin-bottom: 20px; }\n\nsection .row div h4:not(:first-child) {\n  margin-top: 24px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby1mdWxsL2RlbW8tY2FyZHMvRTpcXHByb2plY3RzXFxjaHJpc3R5XFxjb21tb24tY29uc3VtcHRpb24tZGVtby9zcmNcXGFwcFxcZGVtby1mdWxsXFxkZW1vLWNhcmRzXFxkZW1vLWNhcmRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWdCLEVBQ25COztBQUVEO0VBQ0ksMkJBQTBCO0VBQzFCLGlCQUFlO0VBQ2Ysb0JBQWtCLEVBQ3JCOztBQUNEO0VBQ0ksaUJBQWdCLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvZGVtby1mdWxsL2RlbW8tY2FyZHMvZGVtby1jYXJkcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb246bm90KDpmaXJzdC1jaGlsZCkge1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG5cclxuaHIge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBtYXJnaW4tdG9wOjIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjIwcHg7XHJcbn1cclxuc2VjdGlvbiAucm93IGRpdiBoNDpub3QoOmZpcnN0LWNoaWxkKXtcclxuICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/demo-full/demo-cards/demo-cards.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/demo-full/demo-cards/demo-cards.component.ts ***!
  \**************************************************************/
/*! exports provided: DemoCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoCardsComponent", function() { return DemoCardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.service */ "./src/app/demo-full/shared.service.ts");
/* harmony import */ var _project_sunbird_common_consumption__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @project-sunbird/common-consumption */ "./node_modules/@project-sunbird/common-consumption/fesm5/project-sunbird-common-consumption.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var DemoCardsComponent = /** @class */ (function () {
    function DemoCardsComponent(appSharedService, router, route) {
        this.appSharedService = appSharedService;
        this.router = router;
        this.route = route;
        this.contentList = [
            {
                "ownershipType": [
                    "createdBy"
                ],
                "previewUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/ecml/do_21256975952798515213721-latest",
                "keywords": [
                    "dadaf"
                ],
                "subject": "Tamil",
                "channel": "in.ekstep",
                "downloadUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/ecar_files/do_21256975952798515213721/creation-100100_1542778850847_do_21256975952798515213721_2.0.ecar",
                "organisation": [
                    "Sachin 2808"
                ],
                "language": [
                    "English"
                ],
                "variants": {
                    "spine": {
                        "ecarUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/ecar_files/do_21256975952798515213721/creation-100100_1542778851702_do_21256975952798515213721_2.0_spine.ecar",
                        "size": 797118
                    }
                },
                "mimeType": "application/vnd.ekstep.ecml-archive",
                "objectType": "Content",
                "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2124899901836247041294/artifact/0306022-1.jpg_1524657005308.jpg",
                "gradeLevel": [
                    "Class 2"
                ],
                "collections": [
                    "do_21256985173761228816314",
                    "do_2124396034467676161971",
                    "do_21256984927485952016311"
                ],
                "appId": "staging.sunbird.portal",
                "artifactUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21256975952798515213721/artifact/1542778847745_do_21256975952798515213721.zip",
                "contentEncoding": "gzip",
                "contentType": "Resource",
                "lastUpdatedBy": "8d28e44c-b295-42be-8417-dd756486ff85",
                "identifier": "do_21256975952798515213721",
                "audience": [
                    "Learner"
                ],
                "publishChecklist": [
                    "No Hate speech, Abuse, Violence, Profanity",
                    "No Sexual content, Nudity or Vulgarity",
                    "No Discrimination or Defamation",
                    "Is suitable for children",
                    "Appropriate Title, Description",
                    "Correct Board, Grade, Subject, Medium",
                    "Appropriate tags such as Resource Type, Concepts",
                    "Relevant Keywords",
                    "Content plays correctly",
                    "Can see the content clearly on Desktop and App",
                    "Audio (if any) is clear and easy to understand",
                    "No Spelling mistakes in the text",
                    "Language is simple to understand"
                ],
                "visibility": "Default",
                "consumerId": "fa271a76-c15a-4aa1-adff-31dd04682a1f",
                "mediaType": "content",
                "osId": "org.ekstep.quiz.app",
                "lastPublishedBy": "86dd77ad-18d7-4d27-b72c-ba732b4009d3",
                "graph_id": "domain",
                "nodeType": "DATA_NODE",
                "version": 2,
                "prevState": "Processing",
                "lastPublishedOn": "2018-11-21T05:40:48.675+0000",
                "size": 7813097,
                "name": "How We Came To Be part of Environmental Studies second part Standard Five ",
                "attributions": [
                    "testing"
                ],
                "status": "Live",
                "totalQuestions": 2,
                "orgDetails": {},
                "code": "org.sunbird.WtVkXR",
                "description": "trikjr",
                "medium": "Telugu",
                "streamingUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/ecml/do_21256975952798515213721-latest",
                "idealScreenSize": "normal",
                "createdOn": "2018-08-20T06:10:37.421+0000",
                "badgeAssertions": [
                    {
                        "issuerId": "issuerslug-345",
                        "assertionId": "fa2ec612-18da-4048-b146-a8846588a9a5",
                        "badgeClassImage": "https://ntpstaging.blob.core.windows.net/badgr/uploads/badges/5dfe8927e565723cfb1c2d2fe5a1ac1f.png",
                        "badgeId": "badgeslug-85",
                        "badgeClassName": "Best guide",
                        "createdTS": 1534759115237,
                        "status": "active"
                    }
                ],
                "contentDisposition": "inline",
                "lastUpdatedOn": "2018-11-21T05:40:45.040+0000",
                "SYS_INTERNAL_LAST_UPDATED_ON": "2018-11-21T05:40:51.986+0000",
                "createdFor": [
                    "0125683555607347207"
                ],
                "creator": "Sham r",
                "os": [
                    "All"
                ],
                "totalScore": 3,
                "pkgVersion": 2,
                "versionKey": "1542778846752",
                "idealScreenDensity": "hdpi",
                "s3Key": "ecar_files/do_21256975952798515213721/creation-100100_1542778850847_do_21256975952798515213721_2.0.ecar",
                "framework": "NCF",
                "lastSubmittedOn": "2018-08-16T04:50:00.554+0000",
                "createdBy": "8d28e44c-b295-42be-8417-dd756486ff85",
                "compatibilityLevel": 2,
                "board": "CBSE",
                "resourceType": "Learn",
                "node_id": 409230,
                "cardImg": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2124899901836247041294/artifact/0306022-1.jpg_1524657005308.jpg",
                "hoverData": {
                    "actions": [
                        {
                            "type": "save",
                            "label": "Save to pendrive",
                            "disabled": "true"
                        },
                        {
                            "type": "open",
                            "label": "Open"
                        }
                    ]
                }
            },
            {
                "ownershipType": [
                    "createdBy"
                ],
                "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2125047996214067201105/pdf-sample.pdf",
                "keywords": [
                    "test"
                ],
                "subject": "Urdu",
                "channel": "in.ekstep",
                "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2125047996214067201105/16may-pdf-upload_1538552344206_do_2125047996214067201105_4.0.ecar",
                "showNotification": true,
                "language": [
                    "English"
                ],
                "variants": {
                    "spine": {
                        "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2125047996214067201105/16may-pdf-upload_1538552344279_do_2125047996214067201105_4.0_spine.ecar",
                        "size": 13413
                    }
                },
                "mimeType": "application/pdf",
                "objectType": "Content",
                "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2125047996214067201105/artifact/1466505161547apple.thumb.png",
                "gradeLevel": [
                    "Class 2"
                ],
                "collections": [
                    "do_21257125420203212817093",
                    "do_21257827911837286411681",
                    "do_21257133955701145617133",
                    "do_21257124179043123217073",
                    "do_21257142133474918417187",
                    "do_21260466111629721611377",
                    "do_21257125905047552017102",
                    "do_2126138400531742721505",
                    "do_21257131794698240017119",
                    "do_21257136897708851217164",
                    "do_21257144778190028817196",
                    "do_21260466236003942411379",
                    "do_21257124195636838417074",
                    "do_21257135975308492817152",
                    "do_21260465839606988811374",
                    "do_21257136783278080017162",
                    "do_21271796456817459211808",
                    "do_2126138352511385601500",
                    "do_2127099066970193921930",
                    "do_21257131719372800017118",
                    "do_21257144699138048017195"
                ],
                "appId": "staging.diksha.portal",
                "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2125047996214067201105/pdf-sample.pdf",
                "contentEncoding": "identity",
                "sYS_INTERNAL_LAST_UPDATED_ON": "2018-10-03T07:39:04.363+0000",
                "contentType": "Resource",
                "lastUpdatedBy": "bb335f84-f624-4bdd-9e5e-95c62dc690ff",
                "identifier": "do_2125047996214067201105",
                "audience": [
                    "Learner"
                ],
                "publishChecklist": [
                    "No Hate speech, Abuse, Violence, Profanity",
                    "No Sexual content, Nudity or Vulgarity",
                    "No Discrimination or Defamation",
                    "Is suitable for children",
                    "Appropriate Title, Description",
                    "Correct Board, Grade, Subject, Medium",
                    "Appropriate tags such as Resource Type, Concepts",
                    "Relevant Keywords",
                    "Content plays correctly",
                    "Can see the content clearly on Desktop and App",
                    "Audio (if any) is clear and easy to understand",
                    "No Spelling mistakes in the text",
                    "Language is simple to understand"
                ],
                "visibility": "Default",
                "consumerId": "a9cb3a83-a164-4bf0-aa49-b834cebf1c07",
                "mediaType": "content",
                "osId": "org.ekstep.quiz.app",
                "lastPublishedBy": "bb335f84-f624-4bdd-9e5e-95c62dc690ff",
                "languageCode": "en",
                "graph_id": "domain",
                "nodeType": "DATA_NODE",
                "pragma": [
                    "external"
                ],
                "prevState": "Live",
                "lastPublishedOn": "2018-10-03T07:39:04.206+0000",
                "size": 17905,
                "concepts": [
                    "AI33"
                ],
                "name": "16MAY-PDF Upload",
                "status": "Live",
                "orgDetails": {},
                "code": "be8e0283-d492-4d64-8e44-a00b8e856512",
                "description": "testing by umesh",
                "medium": "Telugu",
                "streamingUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2125047996214067201105/pdf-sample.pdf",
                "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/1466505161547apple.png",
                "idealScreenSize": "normal",
                "createdOn": "2018-05-16T09:59:57.534+0000",
                "badgeAssertions": [
                    {
                        "issuerId": "issuerslug-377",
                        "assertionId": "236121b8-b2fd-4c62-85a9-5f011433f3e8",
                        "badgeClassImage": "https://ntpstaging.blob.core.windows.net/badgr/uploads/badges/b4ea6f2d3bbd4375195ed74802712b4a.png",
                        "badgeId": "badgeslug-121",
                        "badgeClassName": "Best author",
                        "createdTS": 1545893001107,
                        "status": "active"
                    }
                ],
                "contentDisposition": "inline",
                "lastUpdatedOn": "2018-10-03T07:39:03.405+0000",
                "SYS_INTERNAL_LAST_UPDATED_ON": "2018-12-27T06:43:21.205+0000",
                "dialcodeRequired": "No",
                "createdFor": [
                    "01250469287604224011"
                ],
                "creator": "May creator",
                "os": [
                    "All"
                ],
                "pkgVersion": 4,
                "versionKey": "1534575021960",
                "idealScreenDensity": "hdpi",
                "s3Key": "ecar_files/do_2125047996214067201105/16may-pdf-upload_1538552344206_do_2125047996214067201105_4.0.ecar",
                "framework": "NCF",
                "lastSubmittedOn": "2018-05-16T10:01:30.626+0000",
                "createdBy": "9541757e-976e-47ee-b981-2f0f312529b0",
                "compatibilityLevel": 4,
                "attribution": "test",
                "board": "CBSE",
                "resourceType": "Test",
                "node_id": 199891,
                "cardImg": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2125047996214067201105/artifact/1466505161547apple.thumb.png",
                "hoverData": {
                    "actions": [
                        {
                            "type": "save",
                            "label": "Save to pendrive"
                        },
                        {
                            "type": "open",
                            "label": "Open"
                        }
                    ]
                }
            },
            {
                "ownershipType": [
                    "createdFor"
                ],
                "previewUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/ecml/do_21266324379998617614877-latest",
                "subject": "English",
                "channel": "in.ekstep",
                "questions": [
                    "do_21266327656724070415486"
                ],
                "downloadUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/ecar_files/do_21266324379998617614877/r05_test_1545810351946_do_21266324379998617614877_1.0.ecar",
                "organisation": [
                    "Sachin 2808"
                ],
                "language": [
                    "English"
                ],
                "mimeType": "application/vnd.ekstep.ecml-archive",
                "variants": {
                    "spine": {
                        "ecarUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/ecar_files/do_21266324379998617614877/r05_test_1545810352220_do_21266324379998617614877_1.0_spine.ecar",
                        "size": 29291
                    }
                },
                "editorState": "{\"plugin\":{\"noOfExtPlugins\":14,\"extPlugins\":[{\"plugin\":\"org.ekstep.contenteditorfunctions\",\"version\":\"1.2\"},{\"plugin\":\"org.ekstep.keyboardshortcuts\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.richtext\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.iterator\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.navigation\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.mathtext\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.libs.ckeditor\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.questionunit\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.keyboard\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.questionunit.mcq\",\"version\":\"1.1\"},{\"plugin\":\"org.ekstep.questionunit.mtf\",\"version\":\"1.1\"},{\"plugin\":\"org.ekstep.questionunit.reorder\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.questionunit.sequence\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.questionunit.ftb\",\"version\":\"1.0\"}]},\"stage\":{\"noOfStages\":7,\"currentStage\":\"bb41b09e-151d-4194-aa6e-54132bd73ee3\",\"selectedPluginObject\":\"65131bc5-6092-4116-b648-231c8a1846ad\"},\"sidebar\":{\"selectedMenu\":\"settings\"}}",
                "objectType": "Content",
                "gradeLevel": [
                    "Class 5"
                ],
                "appIcon": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21266324379998617614877/artifact/icon_1545638427515.thumb.png",
                "collections": [
                    "do_21266328015857254415496",
                    "do_21266330591811993615858",
                    "do_21266330034026086415838",
                    "do_21266328823947264015798",
                    "do_21266327990500556815494"
                ],
                "appId": "staging.diksha.portal",
                "contentEncoding": "gzip",
                "artifactUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21266324379998617614877/artifact/1545810351578_do_21266324379998617614877.zip",
                "lockKey": "cbde56e1-5337-41bf-81c9-f155a29ece3e",
                "contentType": "Resource",
                "identifier": "do_21266324379998617614877",
                "lastUpdatedBy": "d32e170d-010b-4bc5-ae55-3ac5e547e35b",
                "audience": [
                    "Instructor"
                ],
                "visibility": "Default",
                "consumerId": "a9cb3a83-a164-4bf0-aa49-b834cebf1c07",
                "mediaType": "content",
                "osId": "org.ekstep.quiz.app",
                "graph_id": "domain",
                "nodeType": "DATA_NODE",
                "lastPublishedBy": "86dd77ad-18d7-4d27-b72c-ba732b4009d3",
                "version": 2,
                "pragma": [
                    "external"
                ],
                "prevState": "Review",
                "size": 1725857,
                "lastPublishedOn": "2018-12-26T07:45:51.946+0000",
                "IL_FUNC_OBJECT_TYPE": "Content",
                "name": "R05_Test",
                "status": "Live",
                "totalQuestions": 1,
                "orgDetails": {},
                "code": "org.sunbird.rLVEAi",
                "description": "ncieioneio",
                "medium": "English",
                "streamingUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/ecml/do_21266324379998617614877-latest",
                "idealScreenSize": "normal",
                "posterImage": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21266186999677747214484/artifact/icon_1545638427515.png",
                "createdOn": "2018-12-26T06:35:27.927+0000",
                "badgeAssertions": [
                    {
                        "issuerId": "issuerslug-377",
                        "assertionId": "a0f07d96-8a35-4f4e-a233-ee0a09c8fd5c",
                        "badgeClassImage": "https://ntpstaging.blob.core.windows.net/badgr/uploads/badges/27041728dd75b0b7c8e7e61806e9eccd.png",
                        "badgeId": "badgeslug-121",
                        "badgeClassName": "Best author",
                        "createdTS": 1545893080571,
                        "status": "active"
                    }
                ],
                "contentDisposition": "inline",
                "lastUpdatedOn": "2018-12-26T07:45:48.738+0000",
                "SYS_INTERNAL_LAST_UPDATED_ON": "2019-05-19T03:08:08.353+0000",
                "dialcodeRequired": "No",
                "owner": "Sachin 2808",
                "creator": "Som r",
                "createdFor": [
                    "0125683555607347207"
                ],
                "lastStatusChangedOn": "2019-05-19T03:08:08.340+0000",
                "IL_SYS_NODE_TYPE": "DATA_NODE",
                "os": [
                    "All"
                ],
                "totalScore": 4,
                "pkgVersion": 1,
                "versionKey": "1545810348738",
                "idealScreenDensity": "hdpi",
                "framework": "NCF",
                "s3Key": "ecar_files/do_21266324379998617614877/r05_test_1545810351946_do_21266324379998617614877_1.0.ecar",
                "lastSubmittedOn": "2018-12-26T07:45:07.000+0000",
                "me_averageRating": 5,
                "createdBy": "d32e170d-010b-4bc5-ae55-3ac5e547e35b",
                "compatibilityLevel": 4,
                "IL_UNIQUE_ID": "do_21266324379998617614877",
                "ownedBy": "0125683555607347207",
                "board": "CBSE",
                "resourceType": "Test",
                "node_id": 446923,
                "cardImg": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21266324379998617614877/artifact/icon_1545638427515.thumb.png",
                "hoverData": {
                    "actions": [
                        {
                            "type": "download",
                            "label": "Download"
                        },
                        {
                            "type": "open",
                            "label": "Open"
                        }
                    ]
                }
            },
            {
                "ownershipType": [
                    "createdBy"
                ],
                "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/ecml/do_21258040361213952015738-latest",
                "subject": "English",
                "channel": "in.ekstep",
                "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_21258040361213952015738/__1559119939572_do_21258040361213952015738_5.0.ecar",
                "organisation": [
                    "SAP"
                ],
                "language": [
                    "English"
                ],
                "variants": {
                    "spine": {
                        "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_21258040361213952015738/__1559119939825_do_21258040361213952015738_5.0_spine.ecar",
                        "size": 33538
                    }
                },
                "mimeType": "application/vnd.ekstep.ecml-archive",
                "objectType": "Content",
                "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_21258040361213952015738/artifact/download-3_1531474695189.thumb.jpg",
                "gradeLevel": [
                    "Class 1"
                ],
                "collections": [
                    "do_212608901045985280167",
                    "do_2126335427795763201487",
                    "do_21265908814154137613730",
                    "do_212694392468717568118095",
                    "do_21265980189786112013956",
                    "do_21271627854903705616706",
                    "do_212608898352807936164",
                    "do_2127730122172579841694",
                    "do_2127730188304384001696",
                    "do_2127730642698813441698",
                    "do_2127731185278074881720",
                    "do_2127736460745441281727",
                    "do_2127737426502615041759",
                    "do_2127781798791577601141",
                    "do_2127781975501127681155",
                    "do_2127785086812733441158",
                    "do_2127785106696355841160",
                    "do_2127815506724044801557",
                    "do_21279071611953971211627",
                    "do_21279071611953971211627.img"
                ],
                "appId": "staging.diksha.app",
                "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_21258040361213952015738/artifact/1535697984690_do_21258040361213952015738.zip",
                "contentEncoding": "gzip",
                "sYS_INTERNAL_LAST_UPDATED_ON": "2018-10-03T09:36:54.793+0000",
                "contentType": "Resource",
                "lastUpdatedBy": "74400baf-7f32-407a-9d79-265ecd3f6952",
                "identifier": "do_21258040361213952015738",
                "audience": [
                    "Learner"
                ],
                "publishChecklist": [
                    "No Hate speech, Abuse, Violence, Profanity",
                    "No Sexual content, Nudity or Vulgarity",
                    "No Discrimination or Defamation",
                    "Is suitable for children",
                    "Appropriate Title, Description",
                    "Correct Board, Grade, Subject, Medium",
                    "Appropriate tags such as Resource Type, Concepts",
                    "Relevant Keywords",
                    "Content plays correctly",
                    "Can see the content clearly on Desktop and App",
                    "Audio (if any) is clear and easy to understand",
                    "No Spelling mistakes in the text",
                    "Language is simple to understand"
                ],
                "visibility": "Default",
                "consumerId": "a9cb3a83-a164-4bf0-aa49-b834cebf1c07",
                "mediaType": "content",
                "osId": "org.ekstep.quiz.app",
                "lastPublishedBy": "ekstep",
                "languageCode": "en",
                "graph_id": "domain",
                "nodeType": "DATA_NODE",
                "version": 2,
                "prevState": "Review",
                "size": 371123,
                "lastPublishedOn": "2019-05-29T08:52:19.571+0000",
                "name": "!@#$%^&*()_+",
                "status": "Live",
                "totalQuestions": 1,
                "orgDetails": {},
                "code": "org.sunbird.rC8eWN",
                "description": "",
                "medium": "English",
                "streamingUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/ecml/do_21258040361213952015738-latest",
                "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_21254584070116966411188/artifact/download-3_1531474695189.jpg",
                "idealScreenSize": "normal",
                "createdOn": "2018-08-31T05:36:40.308+0000",
                "badgeAssertions": [
                    {
                        "issuerId": "issuerslug-358",
                        "assertionId": "e338fba4-0064-4225-8791-dcac17f80511",
                        "badgeClassImage": "https://ntpstaging.blob.core.windows.net/badgr/uploads/badges/f350797e550dea70a968ce1bb4b3060b.png",
                        "badgeId": "badgeslug-100",
                        "badgeClassName": "Best book",
                        "createdTS": 1537253744517,
                        "status": "active"
                    }
                ],
                "contentDisposition": "inline",
                "lastUpdatedOn": "2019-05-29T08:52:19.134+0000",
                "SYS_INTERNAL_LAST_UPDATED_ON": "2019-05-30T07:22:39.210+0000",
                "dialcodeRequired": "No",
                "createdFor": [
                    "012530141516660736208"
                ],
                "creator": "Helington N",
                "lastStatusChangedOn": "2019-05-30T07:22:39.203+0000",
                "os": [
                    "All"
                ],
                "totalScore": 1,
                "pkgVersion": 5,
                "versionKey": "1535697983606",
                "idealScreenDensity": "hdpi",
                "s3Key": "ecar_files/do_21258040361213952015738/__1559119939572_do_21258040361213952015738_5.0.ecar",
                "framework": "NCF",
                "lastSubmittedOn": "2019-05-29T08:57:32.552+0000",
                "createdBy": "0e0ea1db-dbad-4202-bc73-dfc8b122296f",
                "compatibilityLevel": 2,
                "board": "CBSE",
                "resourceType": "Learn",
                "node_id": 425893,
                "cardImg": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_21258040361213952015738/artifact/download-3_1531474695189.thumb.jpg",
                "hoverData": {
                    "actions": [
                        {
                            "type": "save",
                            "label": "Save to pendrive"
                        },
                        {
                            "type": "open",
                            "label": "Open"
                        }
                    ]
                }
            },
            {
                "ownershipType": [
                    "createdBy"
                ],
                "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_21252611650918809611434/the-problems-of-philosophy-lewistheme.epub",
                "keywords": [
                    "Anirban epub"
                ],
                "subject": "Geography",
                "channel": "in.ekstep",
                "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_21252611650918809611434/anirban-epub_1529067178577_do_21252611650918809611434_1.0.ecar",
                "showNotification": true,
                "language": [
                    "English"
                ],
                "variants": {
                    "spine": {
                        "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_21252611650918809611434/anirban-epub_1529067178772_do_21252611650918809611434_1.0_spine.ecar",
                        "size": 100945
                    }
                },
                "mimeType": "application/epub",
                "objectType": "Content",
                "gradeLevel": [
                    "Class 1"
                ],
                "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_21252611650918809611434/artifact/localhost_1524724918337.thumb.png",
                "collections": [
                    "do_21252660020819558411474",
                    "do_21271420346162380816189"
                ],
                "appId": "staging.diksha.portal",
                "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_21252611650918809611434/the-problems-of-philosophy-lewistheme.epub",
                "contentEncoding": "gzip",
                "contentType": "Resource",
                "lastUpdatedBy": "07ebd230-bfed-4d29-a849-f5033d087d66",
                "identifier": "do_21252611650918809611434",
                "audience": [
                    "Learner"
                ],
                "publishChecklist": [
                    "No Hate speech, Abuse, Violence, Profanity",
                    "No Sexual content, Nudity or Vulgarity",
                    "No Discrimination or Defamation",
                    "Is suitable for children",
                    "Appropriate Title, Description",
                    "Correct Board, Grade, Subject, Medium",
                    "Appropriate tags such as Resource Type, Concepts",
                    "Relevant Keywords",
                    "Content plays correctly",
                    "Can see the content clearly on Desktop and App",
                    "Audio (if any) is clear and easy to understand",
                    "No Spelling mistakes in the text",
                    "Language is simple to understand"
                ],
                "visibility": "Default",
                "consumerId": "a9cb3a83-a164-4bf0-aa49-b834cebf1c07",
                "mediaType": "content",
                "osId": "org.ekstep.quiz.app",
                "lastPublishedBy": "07ebd230-bfed-4d29-a849-f5033d087d66",
                "graph_id": "domain",
                "nodeType": "DATA_NODE",
                "prevState": "Review",
                "lastPublishedOn": "2018-06-15T12:52:58.577+0000",
                "size": 481709,
                "concepts": [
                    "C3"
                ],
                "name": "Anirban epub",
                "status": "Live",
                "orgDetails": {},
                "code": "13e938d6-4327-4a37-b835-19b5b829072c",
                "description": "Anirban epub",
                "medium": "Kannada",
                "streamingUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_21252611650918809611434/the-problems-of-philosophy-lewistheme.epub",
                "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2124905465279692801410/artifact/localhost_1524724918337.png",
                "idealScreenSize": "normal",
                "createdOn": "2018-06-15T12:49:16.687+0000",
                "badgeAssertions": [
                    {
                        "issuerId": "issuerslug-377",
                        "assertionId": "b02e3191-2418-486e-bf95-f1c8033fb7e7",
                        "badgeClassImage": "https://ntpstaging.blob.core.windows.net/badgr/uploads/badges/3b66a3de8e92dd6f027042cb902ba418.png",
                        "badgeId": "badgeslug-121",
                        "badgeClassName": "Best author",
                        "createdTS": 1545893133486,
                        "status": "active"
                    },
                    {
                        "issuerId": "issuerslug-377",
                        "assertionId": "261e77b4-4b1b-49de-affd-aa3c408138f8",
                        "badgeClassImage": "https://ntpstaging.blob.core.windows.net/badgr/uploads/badges/634d8d9a413f3e48d8a5330ba7753a00.png",
                        "badgeId": "badgeslug-121",
                        "badgeClassName": "Best author",
                        "createdTS": 1546408540297,
                        "status": "active"
                    }
                ],
                "contentDisposition": "inline",
                "lastUpdatedOn": "2018-06-15T12:52:58.285+0000",
                "SYS_INTERNAL_LAST_UPDATED_ON": "2019-01-02T05:55:40.853+0000",
                "dialcodeRequired": "No",
                "createdFor": [
                    "0124758436944117762"
                ],
                "creator": "Demo User",
                "os": [
                    "All"
                ],
                "pkgVersion": 1,
                "versionKey": "1529067178285",
                "idealScreenDensity": "hdpi",
                "s3Key": "ecar_files/do_21252611650918809611434/anirban-epub_1529067178577_do_21252611650918809611434_1.0.ecar",
                "framework": "NCF",
                "lastSubmittedOn": "2018-06-15T12:50:16.940+0000",
                "createdBy": "810108e3-0ea2-4b60-9505-1a7757c6409a",
                "compatibilityLevel": 4,
                "board": "CBSE",
                "resourceType": "Practice",
                "node_id": 377569,
                "cardImg": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_21252611650918809611434/artifact/localhost_1524724918337.thumb.png",
                "hoverData": {
                    "actions": [
                        {
                            "type": "download",
                            "label": "Download"
                        },
                        {
                            "type": "open",
                            "label": "Open"
                        }
                    ]
                }
            },
            {
                "ownershipType": [
                    "createdBy"
                ],
                "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/ecml/do_21252884005676646411974-latest",
                "keywords": [
                    "ecwewcewce"
                ],
                "subject": "English",
                "channel": "in.ekstep",
                "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_21252884005676646411974/rajasthan_1529399625145_do_21252884005676646411974_1.0.ecar",
                "organisation": [
                    "Consumption Org",
                    "ORG25"
                ],
                "language": [
                    "English"
                ],
                "variants": {
                    "spine": {
                        "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_21252884005676646411974/rajasthan_1529399625299_do_21252884005676646411974_1.0_spine.ecar",
                        "size": 51673
                    }
                },
                "mimeType": "application/vnd.ekstep.ecml-archive",
                "objectType": "Content",
                "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_21252884005676646411974/artifact/3_1519885914935.thumb.jpg",
                "gradeLevel": [
                    "Class 1"
                ],
                "collections": [
                    "do_21275320638107648011033",
                    "do_21252944504394547212198",
                    "do_21252944428500582412195"
                ],
                "appId": "staging.diksha.portal",
                "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_21252884005676646411974/artifact/1529399624900_do_21252884005676646411974.zip",
                "contentEncoding": "gzip",
                "contentType": "Resource",
                "lastUpdatedBy": "68777b59-b28b-4aee-88d6-50d46e4c3509",
                "identifier": "do_21252884005676646411974",
                "audience": [
                    "Learner"
                ],
                "publishChecklist": [
                    "No Hate speech, Abuse, Violence, Profanity",
                    "No Sexual content, Nudity or Vulgarity",
                    "No Discrimination or Defamation",
                    "Is suitable for children",
                    "Relevant Keywords",
                    "Appropriate tags such as Resource Type, Concepts",
                    "Correct Board, Grade, Subject, Medium",
                    "Appropriate Title, Description",
                    "Content plays correctly",
                    "Can see the content clearly on Desktop and App",
                    "Audio (if any) is clear and easy to understand",
                    "No Spelling mistakes in the text",
                    "Language is simple to understand"
                ],
                "visibility": "Default",
                "consumerId": "a9cb3a83-a164-4bf0-aa49-b834cebf1c07",
                "mediaType": "content",
                "osId": "org.ekstep.quiz.app",
                "lastPublishedBy": "68777b59-b28b-4aee-88d6-50d46e4c3509",
                "graph_id": "domain",
                "nodeType": "DATA_NODE",
                "version": 2,
                "prevState": "Review",
                "size": 153803,
                "lastPublishedOn": "2018-06-19T09:13:45.145+0000",
                "concepts": [
                    "SC5",
                    "C26",
                    "SC6"
                ],
                "name": "Rajasthan",
                "status": "Live",
                "totalQuestions": 0,
                "orgDetails": {},
                "code": "org.sunbird.5gt9FD",
                "description": "Untitled Collection",
                "streamingUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/ecml/do_21252884005676646411974-latest",
                "medium": "English",
                "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_212450905413713920137/artifact/3_1519885914935.jpg",
                "idealScreenSize": "normal",
                "createdOn": "2018-06-19T09:10:20.991+0000",
                "badgeAssertions": [
                    {
                        "issuerId": "issuerslug-377",
                        "assertionId": "f9554ba0-5958-4a97-b20a-d0d7a04360b1",
                        "badgeClassImage": "https://ntpstaging.blob.core.windows.net/badgr/uploads/badges/3549b0881ddf5025736e7baf5b027dcf.png",
                        "badgeId": "badgeslug-121",
                        "badgeClassName": "Best author",
                        "createdTS": 1545893013408,
                        "status": "active"
                    }
                ],
                "contentDisposition": "inline",
                "lastUpdatedOn": "2018-06-19T09:13:44.465+0000",
                "SYS_INTERNAL_LAST_UPDATED_ON": "2018-12-27T06:43:33.466+0000",
                "dialcodeRequired": "No",
                "createdFor": [
                    "01232002070124134414",
                    "012315809814749184151"
                ],
                "creator": "Ntp creator Uswr",
                "os": [
                    "All"
                ],
                "totalScore": 0,
                "pkgVersion": 1,
                "versionKey": "1529399624465",
                "idealScreenDensity": "hdpi",
                "s3Key": "ecar_files/do_21252884005676646411974/rajasthan_1529399625145_do_21252884005676646411974_1.0.ecar",
                "framework": "NCF",
                "lastSubmittedOn": "2018-06-19T09:12:39.017+0000",
                "createdBy": "659b011a-06ec-4107-84ad-955e16b0a48a",
                "compatibilityLevel": 2,
                "board": "State (Rajasthan)",
                "resourceType": "Test",
                "node_id": 378177,
                "cardImg": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_21252884005676646411974/artifact/3_1519885914935.thumb.jpg",
                "hoverData": {
                    "actions": [
                        {
                            "type": "download",
                            "label": "Download"
                        },
                        {
                            "type": "open",
                            "label": "Open"
                        }
                    ]
                }
            },
            {
                "ownershipType": [
                    "createdBy"
                ],
                "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/ecml/do_2124708443414036481125-latest",
                "channel": "in.ekstep",
                "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2124708443414036481125/chetan-content_1527769448521_do_2124708443414036481125_4.0.ecar",
                "language": [
                    "English"
                ],
                "variants": {
                    "spine": {
                        "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2124708443414036481125/chetan-content_1527769448613_do_2124708443414036481125_4.0_spine.ecar",
                        "size": 1117
                    }
                },
                "mimeType": "application/vnd.ekstep.ecml-archive",
                "objectType": "Content",
                "collections": [
                    "do_2124708657568645121145",
                    "do_2124708669666263041147"
                ],
                "appId": "staging.diksha.portal",
                "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2124708443414036481125/artifact/1522320212461_do_2124708443414036481125.zip",
                "contentEncoding": "gzip",
                "contentType": "Resource",
                "lastUpdatedBy": "68777b59-b28b-4aee-88d6-50d46e4c3509",
                "identifier": "do_2124708443414036481125",
                "audience": [
                    "Learner"
                ],
                "visibility": "Default",
                "consumerId": "56ff6913-abcc-4a88-b247-c976e47cbfb4",
                "mediaType": "content",
                "osId": "org.ekstep.quiz.app",
                "lastPublishedBy": "68777b59-b28b-4aee-88d6-50d46e4c3509",
                "graph_id": "domain",
                "nodeType": "DATA_NODE",
                "version": 2,
                "prevState": "Live",
                "license": "Creative Commons Attribution (CC BY)",
                "lastPublishedOn": "2018-05-31T12:24:08.521+0000",
                "size": 5305,
                "name": "Chetan content",
                "status": "Live",
                "orgDetails": {},
                "code": "org.sunbird.tYnEvl",
                "streamingUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/ecml/do_2124708443414036481125-latest",
                "idealScreenSize": "normal",
                "createdOn": "2018-03-29T10:37:45.893+0000",
                "badgeAssertions": [
                    {
                        "issuerId": "issuerslug-372",
                        "assertionId": "c5d6a7a5-e84e-4777-8332-a1e87bbde694",
                        "badgeClassImage": "https://ntpstaging.blob.core.windows.net/badgr/uploads/badges/839ccee9b125f627329d23d66283b45f.png",
                        "badgeId": "badgeslug-116",
                        "badgeClassName": "Dec 11 2018 APRTESTONE ISSUER",
                        "createdTS": 1544525344869,
                        "status": "active"
                    }
                ],
                "contentDisposition": "inline",
                "lastUpdatedOn": "2018-05-31T12:24:08.448+0000",
                "SYS_INTERNAL_LAST_UPDATED_ON": "2019-08-15T00:35:39.816+0000",
                "dialcodeRequired": "No",
                "createdFor": [
                    "01232002070124134414",
                    "012315809814749184151"
                ],
                "creator": "Telemetry User",
                "os": [
                    "All"
                ],
                "pkgVersion": 4,
                "versionKey": "1527769448448",
                "idealScreenDensity": "hdpi",
                "s3Key": "ecar_files/do_2124708443414036481125/chetan-content_1527769448521_do_2124708443414036481125_4.0.ecar",
                "framework": "FWATMPT1",
                "lastSubmittedOn": "2018-03-29T10:41:28.672+0000",
                "me_averageRating": 5,
                "createdBy": "659b011a-06ec-4107-84ad-955e16b0a48a",
                "compatibilityLevel": 2,
                "resourceType": "Read",
                "node_id": 98964,
                "hoverData": {
                    "actions": [
                        {
                            "type": "save",
                            "label": "Save to pendrive"
                        },
                        {
                            "type": "open",
                            "label": "Open"
                        }
                    ]
                }
            },
            {
                "ownershipType": [
                    "createdBy"
                ],
                "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2125005681201643521507/01.pdf",
                "subject": "History and Civics",
                "channel": "in.ekstep",
                "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2125005681201643521507/123were_1527769732335_do_2125005681201643521507_4.0.ecar",
                "showNotification": true,
                "language": [
                    "English"
                ],
                "variants": {
                    "spine": {
                        "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2125005681201643521507/123were_1527769733201_do_2125005681201643521507_4.0_spine.ecar",
                        "size": 45773
                    }
                },
                "mimeType": "application/pdf",
                "objectType": "Content",
                "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2125005681201643521507/artifact/111-600x375_1522638521957.thumb.jpg",
                "gradeLevel": [
                    "Grade 6"
                ],
                "collections": [
                    "do_2127022866268897281467",
                    "do_212518123106598912146655.img",
                    "do_21252176248861491213236",
                    "do_212516115958833152146551.img",
                    "do_2125310927864381441577",
                    "do_21250340016679321616577",
                    "do_2125430205044736001652",
                    "do_21252804279848140811599",
                    "do_21257827984084992011686",
                    "do_2125310927864381441578",
                    "do_21251468318021222411980",
                    "do_212518123106598912146655",
                    "do_212516112227344384146542"
                ],
                "appId": "staging.diksha.portal",
                "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2125005681201643521507/01.pdf",
                "contentEncoding": "identity",
                "contentType": "Resource",
                "lastUpdatedBy": "creator12345 Test",
                "identifier": "do_2125005681201643521507",
                "audience": [
                    "Learner"
                ],
                "publishChecklist": [
                    "No Hate speech, Abuse, Violence, Profanity",
                    "No Sexual content, Nudity or Vulgarity",
                    "No Discrimination or Defamation",
                    "Is suitable for children",
                    "Appropriate Title, Description",
                    "Correct Board, Grade, Subject, Medium",
                    "Appropriate tags such as Resource Type, Concepts",
                    "Relevant Keywords",
                    "Content plays correctly",
                    "Can see the content clearly on Desktop and App",
                    "Audio (if any) is clear and easy to understand",
                    "No Spelling mistakes in the text",
                    "Language is simple to understand"
                ],
                "visibility": "Default",
                "consumerId": "a9cb3a83-a164-4bf0-aa49-b834cebf1c07",
                "mediaType": "content",
                "osId": "org.ekstep.quiz.app",
                "lastPublishedBy": "68777b59-b28b-4aee-88d6-50d46e4c3509",
                "graph_id": "domain",
                "nodeType": "DATA_NODE",
                "version": 1,
                "pragma": [
                    "external"
                ],
                "prevState": "Live",
                "license": "Creative Commons Attribution (CC BY)",
                "lastPublishedOn": "2018-05-31T12:28:52.335+0000",
                "size": 8966834,
                "concepts": [
                    "BIO40000",
                    "BIO50000"
                ],
                "name": "123were",
                "status": "Live",
                "orgDetails": {},
                "code": "ddd8e812-8126-4d95-b4e1-a92988eda68c",
                "lastFlaggedOn": "2018-07-05T06:38:21.173+0000",
                "medium": "English",
                "streamingUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2125005681201643521507/01.pdf",
                "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2124734547707576321269/artifact/111-600x375_1522638521957.jpg",
                "idealScreenSize": "normal",
                "flaggedBy": [
                    "creator12345 Test"
                ],
                "createdOn": "2018-05-10T10:30:56.855+0000",
                "badgeAssertions": [
                    {
                        "issuerId": "issuerslug-57",
                        "assertionId": "5a182f4d-43b1-43c7-a21b-63ce6c24b570",
                        "badgeClassImage": "https://sunbirdstaging.blob.core.windows.net/badgr/uploads/badges/badf0408727b0c90556b5de31829164e.png",
                        "badgeId": "badgeslug-81",
                        "badgeClassName": "Official",
                        "createdTS": 1533710533029,
                        "status": "active"
                    }
                ],
                "contentDisposition": "inline",
                "lastUpdatedOn": "2018-07-05T06:39:20.400+0000",
                "SYS_INTERNAL_LAST_UPDATED_ON": "2019-08-23T00:35:42.579+0000",
                "dialcodeRequired": "No",
                "createdFor": [
                    "01232002070124134414",
                    "012315809814749184151"
                ],
                "creator": "Mentor Juthika User",
                "os": [
                    "All"
                ],
                "pkgVersion": 4,
                "versionKey": "1530772760400",
                "idealScreenDensity": "hdpi",
                "s3Key": "ecar_files/do_2125005681201643521507/123were_1527769732335_do_2125005681201643521507_4.0.ecar",
                "framework": "FWATMPT1",
                "lastSubmittedOn": "2018-05-10T10:31:54.877+0000",
                "me_averageRating": 5,
                "createdBy": "d882967f-b3e1-456b-b984-d800470837ab",
                "compatibilityLevel": 4,
                "board": "MSCERT",
                "resourceType": "Practice",
                "node_id": 149315,
                "cardImg": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2125005681201643521507/artifact/111-600x375_1522638521957.thumb.jpg",
                "hoverData": {
                    "actions": [
                        {
                            "type": "download",
                            "label": "Download"
                        },
                        {
                            "type": "open",
                            "label": "Open"
                        }
                    ]
                }
            },
            {
                "ownershipType": [
                    "createdBy"
                ],
                "previewUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/ecml/do_21264270761184460811673-latest",
                "subject": "Mathematics",
                "channel": "in.ekstep",
                "downloadUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/ecar_files/do_21264270761184460811673/mathematics-activity-class-4_1543303328064_do_21264270761184460811673_2.0.ecar",
                "organisation": [
                    "NTP"
                ],
                "language": [
                    "English"
                ],
                "mimeType": "application/vnd.ekstep.ecml-archive",
                "variants": {
                    "spine": {
                        "ecarUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/ecar_files/do_21264270761184460811673/mathematics-activity-class-4_1543303328175_do_21264270761184460811673_2.0_spine.ecar",
                        "size": 12590
                    }
                },
                "editorState": "{\"plugin\":{\"noOfExtPlugins\":14,\"extPlugins\":[{\"plugin\":\"org.ekstep.contenteditorfunctions\",\"version\":\"1.2\"},{\"plugin\":\"org.ekstep.keyboardshortcuts\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.richtext\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.iterator\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.navigation\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.mathtext\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.libs.ckeditor\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.questionunit\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.questionunit.mcq\",\"version\":\"1.1\"},{\"plugin\":\"org.ekstep.questionunit.mtf\",\"version\":\"1.1\"},{\"plugin\":\"org.ekstep.keyboard\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.questionunit.reorder\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.questionunit.sequence\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.questionunit.ftb\",\"version\":\"1.0\"}]},\"stage\":{\"noOfStages\":2,\"currentStage\":\"83a3d941-3306-429e-aae2-07ca70d744ee\"},\"sidebar\":{\"selectedMenu\":\"settings\"}}",
                "objectType": "Content",
                "gradeLevel": [
                    "Class 4"
                ],
                "appIcon": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21264270761184460811673/artifact/0288d78758c4463dd40892d5a460edf4_1478578597914.thumb.jpeg",
                "me_totalTimespent": 31.8,
                "collections": [
                    "do_21264701641690316813698",
                    "do_21280690397737779211227",
                    "do_21280689455348121611201",
                    "do_21280691880382464011277",
                    "do_21280762824795750411925",
                    "do_21280762824795750411925.img",
                    "do_21283180802014412811765",
                    "do_212832384100474880153"
                ],
                "me_averageTimespentPerSession": 31.8,
                "appId": "staging.diksha.portal",
                "contentEncoding": "gzip",
                "artifactUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21264270761184460811673/artifact/1543303326995_do_21264270761184460811673.zip",
                "contentType": "Resource",
                "identifier": "do_21264270761184460811673",
                "lastUpdatedBy": "b9a3972c-a2ba-46fa-9279-59ce21957a83",
                "audience": [
                    "Learner"
                ],
                "visibility": "Default",
                "consumerId": "a9cb3a83-a164-4bf0-aa49-b834cebf1c07",
                "mediaType": "content",
                "osId": "org.ekstep.quiz.app",
                "graph_id": "domain",
                "nodeType": "DATA_NODE",
                "lastPublishedBy": "7bd5aef5-d825-47fa-96b5-3a3ce3b4020b",
                "version": 2,
                "prevState": "Review",
                "license": "Creative Commons Attribution (CC BY)",
                "size": 562094,
                "lastPublishedOn": "2018-11-27T07:22:07.149+0000",
                "IL_FUNC_OBJECT_TYPE": "Content",
                "name": "Mathematics Activity - Class 4",
                "attributions": [
                    "DIKSHA"
                ],
                "status": "Live",
                "totalQuestions": 5,
                "me_averageInteractionsPerMin": 0,
                "orgDetails": {},
                "code": "org.sunbird.aFaNPB",
                "me_totalSessionsCount": 1,
                "description": "Grade 4 Math Activity",
                "medium": "English",
                "streamingUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/ecml/do_21264270761184460811673-latest",
                "idealScreenSize": "normal",
                "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_20052111/artifact/0288d78758c4463dd40892d5a460edf4_1478578597914.jpeg",
                "createdOn": "2018-11-27T06:14:29.024+0000",
                "badgeAssertions": [
                    {
                        "issuerId": "issuerslug-377",
                        "assertionId": "2c8c6351-d098-4522-937c-38d78e2a129b",
                        "badgeClassImage": "https://ntpstaging.blob.core.windows.net/badgr/uploads/badges/4d0f1b1dea2ce9ed399f88e5fe8792fa.png",
                        "badgeId": "badgeslug-121",
                        "badgeClassName": "Best author",
                        "createdTS": 1545893035212,
                        "status": "active"
                    }
                ],
                "contentDisposition": "inline",
                "lastUpdatedOn": "2018-11-27T07:22:05.791+0000",
                "SYS_INTERNAL_LAST_UPDATED_ON": "2019-09-11T00:36:40.503+0000",
                "dialcodeRequired": "No",
                "owner": "DemoCreator Creator",
                "creator": "DemoCreator Creator",
                "createdFor": [
                    "ORG_001"
                ],
                "IL_SYS_NODE_TYPE": "DATA_NODE",
                "os": [
                    "All"
                ],
                "me_totalInteractions": 0,
                "totalScore": 5,
                "pkgVersion": 2,
                "versionKey": "1543303326455",
                "idealScreenDensity": "hdpi",
                "framework": "NCF",
                "s3Key": "ecar_files/do_21264270761184460811673/mathematics-activity-class-4_1543303328064_do_21264270761184460811673_2.0.ecar",
                "lastSubmittedOn": "2018-11-27T07:20:23.559+0000",
                "me_averageRating": 5,
                "createdBy": "b9a3972c-a2ba-46fa-9279-59ce21957a83",
                "compatibilityLevel": 2,
                "IL_UNIQUE_ID": "do_21264270761184460811673",
                "ownedBy": "b9a3972c-a2ba-46fa-9279-59ce21957a83",
                "board": "State (Tamil Nadu)",
                "resourceType": "Test",
                "node_id": 440472,
                "cardImg": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21264270761184460811673/artifact/0288d78758c4463dd40892d5a460edf4_1478578597914.thumb.jpeg",
                "hoverData": {
                    "actions": [
                        {
                            "type": "download",
                            "label": "Download"
                        },
                        {
                            "type": "open",
                            "label": "Open"
                        }
                    ]
                }
            },
            {
                "ownershipType": [
                    "createdBy"
                ],
                "subject": "Physical Science",
                "channel": "in.ekstep",
                "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_21259106171407564812108/contentsep_1536996482030_do_21259106171407564812108_1.0.ecar",
                "organisation": [
                    "1.10 Org"
                ],
                "language": [
                    "English"
                ],
                "variants": {
                    "spine": {
                        "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_21259106171407564812108/contentsep_1536996482107_do_21259106171407564812108_1.0_spine.ecar",
                        "size": 22783
                    }
                },
                "mimeType": "application/vnd.ekstep.ecml-archive",
                "objectType": "Content",
                "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_21259106171407564812108/artifact/beee6757847b84a1e41ce827ae02ccc7_1477485749628.thumb.jpeg",
                "gradeLevel": [
                    "Class 9"
                ],
                "appId": "staging.diksha.portal",
                "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_21259106171407564812108/artifact/1536996481813_do_21259106171407564812108.zip",
                "contentEncoding": "gzip",
                "contentType": "Resource",
                "lastUpdatedBy": "871e9976-4f96-43bd-986b-91b92c57dbfc",
                "identifier": "do_21259106171407564812108",
                "audience": [
                    "Learner"
                ],
                "publishChecklist": [
                    "No Hate speech, Abuse, Violence, Profanity",
                    "No Sexual content, Nudity or Vulgarity",
                    "No Discrimination or Defamation",
                    "Is suitable for children",
                    "Relevant Keywords",
                    "Appropriate tags such as Resource Type, Concepts",
                    "Correct Board, Grade, Subject, Medium",
                    "Appropriate Title, Description",
                    "Language is simple to understand",
                    "No Spelling mistakes in the text",
                    "Audio (if any) is clear and easy to understand",
                    "Can see the content clearly on Desktop and App",
                    "Content plays correctly"
                ],
                "visibility": "Default",
                "consumerId": "56ff6913-abcc-4a88-b247-c976e47cbfb4",
                "mediaType": "content",
                "osId": "org.ekstep.quiz.app",
                "lastPublishedBy": "871e9976-4f96-43bd-986b-91b92c57dbfc",
                "graph_id": "domain",
                "nodeType": "DATA_NODE",
                "prevState": "Review",
                "size": 367829,
                "lastPublishedOn": "2018-09-15T07:28:02.030+0000",
                "name": "ContentSep",
                "status": "Live",
                "totalQuestions": 1,
                "orgDetails": {},
                "code": "org.sunbird.ooPeyD",
                "description": "Untitled Collection",
                "medium": "Telugu",
                "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/beee6757847b84a1e41ce827ae02ccc7_1477485749628.jpeg",
                "idealScreenSize": "normal",
                "createdOn": "2018-09-15T07:00:38.143+0000",
                "badgeAssertions": [
                    {
                        "issuerId": "issuerslug-376",
                        "assertionId": "62cc4979-04f9-4da1-862e-ce4c49458ba7",
                        "badgeClassImage": "https://ntpstaging.blob.core.windows.net/badgr/uploads/badges/343f9a93e8c2a82ffe36e9ecfbf363f6.png",
                        "badgeId": "badgeslug-120",
                        "badgeClassName": "STATE TEXTBOOK5",
                        "createdTS": 1545133359941,
                        "status": "active"
                    }
                ],
                "contentDisposition": "inline",
                "lastUpdatedOn": "2018-09-15T07:28:00.564+0000",
                "SYS_INTERNAL_LAST_UPDATED_ON": "2018-12-18T11:42:40.059+0000",
                "dialcodeRequired": "No",
                "createdFor": [
                    "0125903113586933768"
                ],
                "creator": "1.10Creator User",
                "os": [
                    "All"
                ],
                "totalScore": 1,
                "pkgVersion": 1,
                "versionKey": "1536996480564",
                "idealScreenDensity": "hdpi",
                "s3Key": "ecar_files/do_21259106171407564812108/contentsep_1536996482030_do_21259106171407564812108_1.0.ecar",
                "framework": "ap_k-12_13",
                "lastSubmittedOn": "2018-09-15T07:01:55.763+0000",
                "createdBy": "644da49c-7bef-49d6-8e24-e741d148d652",
                "compatibilityLevel": 2,
                "board": "State (Andhra Pradesh)",
                "resourceType": "Teach",
                "node_id": 428793,
                "cardImg": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_21259106171407564812108/artifact/beee6757847b84a1e41ce827ae02ccc7_1477485749628.thumb.jpeg",
                "hoverData": {
                    "actions": [
                        {
                            "type": "download",
                            "label": "Download"
                        },
                        {
                            "type": "open",
                            "label": "Open"
                        }
                    ]
                }
            }
        ];
        this.recentlyViewedCard = _project_sunbird_common_consumption__WEBPACK_IMPORTED_MODULE_3__["LibraryCardTypes"].RECENTLY_VIEWED;
        this.qrcodeResultCard = _project_sunbird_common_consumption__WEBPACK_IMPORTED_MODULE_3__["LibraryCardTypes"].QRCODE_RESULT;
        this.desktopTextBookCard = _project_sunbird_common_consumption__WEBPACK_IMPORTED_MODULE_3__["LibraryCardTypes"].DESKTOP_TEXTBOOK;
        this.mobileTextBookCard = _project_sunbird_common_consumption__WEBPACK_IMPORTED_MODULE_3__["LibraryCardTypes"].MOBILE_TEXTBOOK;
        this.title = 'desktopLibTest';
        this.viewAllButtonText = 'View all';
        this.viewMoreButtonText = 'View More';
        this.subjects = ['english', 'mathematics', 'geology', 'biology', 'zoology', 'Botany', 'Environmental Science'];
    }
    DemoCardsComponent.prototype.ngOnInit = function () {
        // this.route.fragment.subscribe((fragment: string) => { 
        //   if (fragment && document.getElementById(fragment) != null) {
        //     setTimeout(() => {
        //     document.getElementById(fragment).scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
        //   }, 0);
        //   }
        // });
    };
    DemoCardsComponent.prototype.test = function (ell) {
        console.log(this.el.nativeElement);
        this.el.nativeElement.className = 'myCSSclass';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('testEl'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DemoCardsComponent.prototype, "el", void 0);
    DemoCardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-demo-cards',
            template: __webpack_require__(/*! ./demo-cards.component.html */ "./src/app/demo-full/demo-cards/demo-cards.component.html"),
            styles: [__webpack_require__(/*! ./demo-cards.component.scss */ "./src/app/demo-full/demo-cards/demo-cards.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service__WEBPACK_IMPORTED_MODULE_2__["AppSharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], DemoCardsComponent);
    return DemoCardsComponent;
}());



/***/ }),

/***/ "./src/app/demo-full/demo-faq/demo-faq.component.html":
/*!************************************************************!*\
  !*** ./src/app/demo-full/demo-faq/demo-faq.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar>\n\n</app-navbar>\n\n<div class=\"main-container container-fluid\">\n  <!-- Page Container -->\n  <div class=\"page-container\">\n    <!-- Page Sidebar -->\n    <app-sidebar>\n\n    </app-sidebar>\n    <!-- /Page Sidebar -->\n  </div>\n</div>\n\n<!-- Main content-->\n<div class=\"page-content\" [ngStyle]=\"!appSharedService.sideBarVisible && {'margin-left':'43px'}\">\n  <div class=\"page-header position-relative\">\n    <div class=\"header-title\">\n      <h1>\n        FAQ\n      </h1>\n    </div>\n  </div>\n  <div class=\"page-body\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n        <section id=\"filters\">\n          <h2 class=\"margin-bottom-20\">FAQ component </h2>\n          <div class=\"well bordered-left bordered-success\">\n            <p> FAQ component  Component can be used in the page where frequently asked questions and answers need to shown.</p>\n            <p>This component uses accordion component internally: </p>\n            <p>You can find more details of the component, various inputs and outputs in the\n              <a href=\"https://github.com/Sunbird-Ed/SunbirdEd-consumption-ngcomponents/blob/master/projects/common-consumption/src/lib/faq/faq/faq.md\"\n              target=\"_blank\">\n                component's original repository\n              </a>.\n            </p>\n            <p><i><b>Note : </b></i></p>\n            <p>\n              The width of the overall Faq container is fluid in nature i.e, 100% of the parent conatainer, so user can control the width\n              of the grid based on the parent element in which the card is contained.\n            </p>\n            <p>\n              Text inside this component is not restricted to particular language. Based on your <b>i18n</b> preferences pass inputs in the\n              desired language.\n            </p>\n          </div>\n        </section>\n        <hr>\n        <section>\n          <h6 class=\"row-title before-success\">FAQ Component</h6>\n          <p> For FAQ Component to render the view, you need to pass the JSON structure defined in the specs.</p>\n          <div class=\"row\">\n            <div class=\"col-lg-6 col-md-8 col-sm-10 col-xs-12\">\n              <sb-faq [data]=\"staticData\" (toggleGroupEvent)=\"handleEvents($event);\" (yesClickedEvent)=\"handleEvents($event);\"\n                (noClickedEvent)=\"handleEvents($event);\" (submitClickedEvent)=\"handleEvents($event);\">\n              </sb-faq>\n            </div>\n          </div>\n        </section>\n      </div>\n    </div>\n  </div>\n</div>  "

/***/ }),

/***/ "./src/app/demo-full/demo-faq/demo-faq.component.scss":
/*!************************************************************!*\
  !*** ./src/app/demo-full/demo-faq/demo-faq.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8tZnVsbC9kZW1vLWZhcS9kZW1vLWZhcS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/demo-full/demo-faq/demo-faq.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/demo-full/demo-faq/demo-faq.component.ts ***!
  \**********************************************************/
/*! exports provided: DemoFaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoFaqComponent", function() { return DemoFaqComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.service */ "./src/app/demo-full/shared.service.ts");



var DemoFaqComponent = /** @class */ (function () {
    function DemoFaqComponent(appSharedService) {
        this.appSharedService = appSharedService;
        this.staticData = { "faqs": [{ "topic": "A message \"Content Coming Soon\" is displayed on my screen and I cannot see any content for the QR code scanned", "description": "Your State is currently creating content for this QR code. The delay is because there is a large number of textbooks for many classes, mediums and subjects. You will see the content  as soon as the State has created it." }, { "topic": "I have an Android 4.4 device, I cannot play content on it", "description": "Android version 4.4 does not support html5 and thus all content cannot be played. To play content on a device with Android version 4.4, try the following:\n<ul>\n<li>Update the Android version to the latest, preferably to a version greater than 5.1</li>\n<li>Update the {{APP_NAME}} mobile app to the latest version</li>\n</ul>\nThe app prompts to download and install Crosswalk when playing content on Android 4.4.version. Using Crosswalk enables playing most content on Android 4.4 version\n\n" }, { "topic": "I cannot  see my board, medium, class and subject", "description": "Your State does not currently support all boards, mediums, classes and subjects. As soon as your State adds them, you will see it in the list.  " }, { "topic": "I am unable to sign in", "description": "To use the {{APP_NAME}} mobile app, you must first Sign Up. You can sign up when you are connected to the Internet using any of these options:\n\t\t<ul>\n\t\t<li> Registered mobile number or email address </li>\n\t\t<li> State provided ID </li>\n\t\t<li> Existing Google(Gmail) ID </li>\n\t\t</ul>\nIf you have already Signed Up, check if you have proper Internet connectivity." }, { "topic": "I cannot see content for my board, medium, class or subject ", "description": "Your State has not yet created or added content for your medium, board, class or subject. If you see  books listed in the app library, you will most likely get the content in this academic year.   " }, { "topic": "I want to play content when there is no Internet", "description": "You can download content only when you are connected to the Internet. Only the downloaded content can be played later without the Internet. \nYou can play YouTube videos only when you are connected to the Internet because YouTube does not allow other apps to download videos." }, { "topic": "Content takes up a lot of space on my phone", "description": "You can delete the downloaded content from the downloads tab in the app to free up space" }, { "topic": "I want to create and add content on {{APP_NAME}}", "description": "Currently, the State appoints teachers to create and add content on {{APP_NAME}}. If you are interested in creating content,  send a request to your State authority to get creation rights" }, { "topic": "I want to unenroll from a course", "description": "Select the course you want to unenroll from, tap the options menu (three vertical dots) on the top right corner and tap 'Unenroll'" }, { "topic": "I want to get the mobile app on iOS or desktop", "description": "You can visit https://www.diksha.gov.in/explore/ using your browser on iOS or desktop devices to view content. We are currently working on a desktop application for offline use that is expected to be ready later this year" }, { "topic": "I want to know the status of my course completion", "description": "After you have successfully completed a course, the course name  will be displayed under the 'Trainings Attended' section in your profile page" }, { "topic": "I am unable to see my profile settings", "description": "This is caused by an outdated version of  <b>Android System WebView</b> component on your phone. To update the webview component:\n1. Go to Google Playstore\n2. Go to the android webview link. Use https://play.google.com/store/apps/details?id=com.google.android.webview\n\nNote: The Android WebView is a pre-installed component that allows Android apps to display web content.\nIt should be kept up to date to ensure the latest security updates." }, { "topic": "I am unable to see the QR code scan button", "description": "This is caused by an outdated version of <b>Android System WebView</b> component on your phone. To update the webview component:\n1. Go to Google Playstore\n2. Go to the android webview link. Use https://play.google.com/store/apps/details?id=com.google.android.webview.\n\nNote: The Android WebView is a pre-installed component that allows Android apps to display web content.\nIt should be kept up to date to ensure the latest security updates. " }], "constants": { "charactersLeft": "characters left", "explainMsg": "Could you explain the problem?", "faqMsg": "Frequently asked questions", "help": "Help", "helpMsg": "Did this answer help you?", "initiateEmailButton": "Initiate email", "knowMoreMsg": "What more would you like to know?", "noMsg": "No", "reportIssue": "Report an issue", "reportIssueMsg": "Report other issue", "resolveMsg": "Look through the list to resolve your issue", "sorryMsg": "Sorry about that!", "submitButton": "Submit", "tellMoreMsg": "Tell us more about the problem you faced", "thanksMsg": "Thank you for your response!", "triggerEmailMsg": "After you add details in the text box and tap the Initiate email button, we will trigger an email on your behalf. You can add further details and/or attach files there.", "typeHere": "Type Here...", "yesMsg": "Yes" } };
    }
    DemoFaqComponent.prototype.ngOnInit = function () {
    };
    DemoFaqComponent.prototype.handleEvents = function (e) {
        console.log(e);
    };
    DemoFaqComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-demo-faq',
            template: __webpack_require__(/*! ./demo-faq.component.html */ "./src/app/demo-full/demo-faq/demo-faq.component.html"),
            styles: [__webpack_require__(/*! ./demo-faq.component.scss */ "./src/app/demo-full/demo-faq/demo-faq.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service__WEBPACK_IMPORTED_MODULE_2__["AppSharedService"]])
    ], DemoFaqComponent);
    return DemoFaqComponent;
}());



/***/ }),

/***/ "./src/app/demo-full/demo-filters/demo-filters.component.html":
/*!********************************************************************!*\
  !*** ./src/app/demo-full/demo-filters/demo-filters.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar>\n\n</app-navbar>\n\n<div class=\"main-container container-fluid\">\n  <!-- Page Container -->\n  <div class=\"page-container\">\n    <!-- Page Sidebar -->\n    <app-sidebar>\n\n    </app-sidebar>\n    <!-- /Page Sidebar -->\n  </div>\n</div>\n\n<!-- Main content-->\n<div class=\"page-content\" [ngStyle]=\"!appSharedService.sideBarVisible && {'margin-left':'43px'}\">\n  <div class=\"page-header position-relative\">\n    <div class=\"header-title\">\n      <h1>\n        Filters \n      </h1>\n    </div>\n  </div>\n  <div class=\"page-body\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n        <section id=\"filters\">\n          <h2 class=\"margin-bottom-20\">Filters Component</h2>\n          <div class=\"well bordered-left bordered-yellow\">\n            <p> Library filters Component can be used in the library page, toc page and in all places where filters/pills need to shown</p>\n            <p>Basically there are 3 types of Filters based on the style: </p>\n            <ul class=\"custom-list\">\n              <li>Sqaure Filters </li>\n              <li>Round Filters</li>\n              <li>Round Filters With Icon</li>\n            </ul>\n            <p>You can find more details of the component, various inputs and outputs in the\n              <a href=\"https://github.com/Sunbird-Ed/SunbirdEd-consumption-ngcomponents/blob/master/projects/common-consumption/src/lib/library-filters/library-filters/library-filters.md\"\n                target=\"_blank\">\n                component's original repository\n              </a>.\n            </p>\n            <p><i><b>Note : </b></i></p>\n            <p>\n              The width of the overall Filters container is fluid in nature i.e, 100% of the parent conatainer, so user can control the width\n              of the grid based on the parent element in which the card is contained.\n            </p>\n            <p>\n              Text inside filter/pills is not restricted to particular language. Based on your <b>i18n</b> preferences pass inputs in the\n              desired language.\n            </p>\n          </div>\n          <!-- <div class=\"row\">\n            <div class=\"col-lg-12 col-sm-12 col-xs-12\">\n              <h4>Default Grid View</h4>\n                <sb-library-cards-grid></sb-library-cards-grid>\n            </div>\n          </div> -->\n        </section>\n        <hr>\n        <section id=\"squareFilters\">\n          <h6 class=\"row-title before-yellow\">Sqaure Filters </h6>\n          <p> For default selection of any filter/pill  pass the index of required item. <code>eg:[selectedItems] = [1] </code></p>\n          <div class=\"row\">\n            <div class=\"col-lg-12 col-sm-12 col-xs-12\">\n              <sb-library-filters [list]=\"mediums\" [layout]=\"mediumLayout\" [selectedItems]=\"[1]\" (selectedFilter)=\"selectedFilter($event)\">\n              </sb-library-filters>\n            </div>\n          </div>\n        </section>\n        <hr>\n        <section id=\"roundFilters\">\n          <h6 class=\"row-title before-yellow\">Round Filters </h6>\n          <p> For default selection of any filter/pill  <code>[selectedItems] = [index number] </code> pass the index of required item.</p>\n          <div class=\"row\">\n            <div class=\"col-lg-12 col-sm-12 col-xs-12\">\n              <sb-library-filters [list]=\"classes\" [layout]=\"classLayout\" (selectedFilter)=\"selectedFilter($event)\" [selectedItems]=\"[3]\">\n              </sb-library-filters>\n            </div>\n          </div>\n        </section>\n        <hr>\n        <section id=\"roundFiltersWithIcon\">\n          <h6 class=\"row-title before-yellow\">Round Filters With Icon </h6>\n          <p> For default selection of any filter/pill  <code>[selectedItems] = [index number] </code> pass the index of required item.</p>\n          <div class=\"row\">\n            <div class=\"col-lg-12 col-sm-12 col-xs-12\">\n              <sb-library-filters [tocList]=\"mimeTypeFilterCollection\" [layout]=\"'round-with-icon'\" [selectedItems]=\"[0]\" \n                    (selectedMimeType)=\"selectedFilter($event)\">\n                </sb-library-filters>\n            </div>\n          </div>\n        </section>\n        <hr>\n        <section id=\"HandlingOverflow\">\n          <h6 class=\"row-title before-yellow\">Handling Overflow </h6>\n          <div class=\"row margin-top-20\">\n            <div class=\"col-lg-4 col-sm-6 col-xs-12\">\n              <sb-library-filters [list]=\"mediums\" [layout]=\"mediumLayout\" [selectedItems]=\"[1]\" (selectedFilter)=\"selectedFilter($event)\">\n              </sb-library-filters>\n            </div>\n          </div>\n          <div class=\"row margin-top-20\">\n            <div class=\"col-lg-4 col-sm-6 col-xs-12\">\n              <sb-library-filters [list]=\"classes\" [layout]=\"classLayout\" (selectedFilter)=\"selectedFilter($event)\" [selectedItems]=\"[3]\">\n              </sb-library-filters>\n            </div>\n          </div>\n          <div class=\"row margin-top-20\">\n            <div class=\"col-lg-4 col-sm-6 col-xs-12\">\n              <sb-library-filters [tocList]=\"mimeTypeFilterCollection\" [layout]=\"'round-with-icon'\" [selectedItems]=\"[0]\" \n                    (selectedMimeType)=\"selectedFilter($event)\">\n                </sb-library-filters>\n            </div>\n          </div>\n        </section>\n        <hr>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/demo-full/demo-filters/demo-filters.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/demo-full/demo-filters/demo-filters.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8tZnVsbC9kZW1vLWZpbHRlcnMvZGVtby1maWx0ZXJzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/demo-full/demo-filters/demo-filters.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/demo-full/demo-filters/demo-filters.component.ts ***!
  \******************************************************************/
/*! exports provided: DemoFiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoFiltersComponent", function() { return DemoFiltersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _project_sunbird_common_consumption__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @project-sunbird/common-consumption */ "./node_modules/@project-sunbird/common-consumption/fesm5/project-sunbird-common-consumption.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared.service */ "./src/app/demo-full/shared.service.ts");




var DemoFiltersComponent = /** @class */ (function () {
    function DemoFiltersComponent(appSharedService) {
        this.appSharedService = appSharedService;
        this.mimeTypeFilters = ['all', 'video', 'interaction', 'docs'];
        this.mimeTypeFilterCollection = [
            {
                text: 'All',
                value: 'all'
            }, {
                text: 'Video',
                value: 'video'
            },
            {
                text: 'Interaction',
                value: 'interaction'
            }, {
                text: 'Documents',
                value: 'docs'
            }
        ];
        this.mediums = [
            'english',
            'mathematics',
            'geology',
            'biology',
            'zoology',
            'Botany',
            'Environmental Science'
        ];
        this.classes = [
            'Class 1',
            'Class 2',
            'Class 3',
            'Class 4',
            'Class 5',
            'Class 6',
            'Class 7'
        ];
        this.mediumLayout = _project_sunbird_common_consumption__WEBPACK_IMPORTED_MODULE_2__["LibraryFiltersLayout"].SQUARE;
        this.classLayout = _project_sunbird_common_consumption__WEBPACK_IMPORTED_MODULE_2__["LibraryFiltersLayout"].ROUND;
    }
    DemoFiltersComponent.prototype.ngOnInit = function () {
    };
    DemoFiltersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-demo-filters',
            template: __webpack_require__(/*! ./demo-filters.component.html */ "./src/app/demo-full/demo-filters/demo-filters.component.html"),
            styles: [__webpack_require__(/*! ./demo-filters.component.scss */ "./src/app/demo-full/demo-filters/demo-filters.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service__WEBPACK_IMPORTED_MODULE_3__["AppSharedService"]])
    ], DemoFiltersComponent);
    return DemoFiltersComponent;
}());



/***/ }),

/***/ "./src/app/demo-full/demo-full.module.ts":
/*!***********************************************!*\
  !*** ./src/app/demo-full/demo-full.module.ts ***!
  \***********************************************/
/*! exports provided: DemoFullModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoFullModule", function() { return DemoFullModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/demo-full/home/home.component.ts");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/layout.module */ "./src/app/demo-full/layout/layout.module.ts");
/* harmony import */ var _demo_full_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./demo-full.routing.module */ "./src/app/demo-full/demo-full.routing.module.ts");
/* harmony import */ var _project_sunbird_common_consumption__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @project-sunbird/common-consumption */ "./node_modules/@project-sunbird/common-consumption/fesm5/project-sunbird-common-consumption.js");
/* harmony import */ var _demo_cards_demo_cards_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./demo-cards/demo-cards.component */ "./src/app/demo-full/demo-cards/demo-cards.component.ts");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared.service */ "./src/app/demo-full/shared.service.ts");
/* harmony import */ var _demo_cards_grid_demo_cards_grid_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./demo-cards-grid/demo-cards-grid.component */ "./src/app/demo-full/demo-cards-grid/demo-cards-grid.component.ts");
/* harmony import */ var _demo_cards_stack_demo_cards_stack_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./demo-cards-stack/demo-cards-stack.component */ "./src/app/demo-full/demo-cards-stack/demo-cards-stack.component.ts");
/* harmony import */ var _demo_filters_demo_filters_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./demo-filters/demo-filters.component */ "./src/app/demo-full/demo-filters/demo-filters.component.ts");
/* harmony import */ var _demo_toc_demo_toc_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./demo-toc/demo-toc.component */ "./src/app/demo-full/demo-toc/demo-toc.component.ts");
/* harmony import */ var _demo_faq_demo_faq_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./demo-faq/demo-faq.component */ "./src/app/demo-full/demo-faq/demo-faq.component.ts");














var DemoFullModule = /** @class */ (function () {
    function DemoFullModule() {
    }
    DemoFullModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                _demo_cards_demo_cards_component__WEBPACK_IMPORTED_MODULE_7__["DemoCardsComponent"],
                _demo_cards_grid_demo_cards_grid_component__WEBPACK_IMPORTED_MODULE_9__["DemoCardsGridComponent"], _demo_cards_stack_demo_cards_stack_component__WEBPACK_IMPORTED_MODULE_10__["DemoCardsStackComponent"], _demo_filters_demo_filters_component__WEBPACK_IMPORTED_MODULE_11__["DemoFiltersComponent"], _demo_toc_demo_toc_component__WEBPACK_IMPORTED_MODULE_12__["DemoTocComponent"], _demo_faq_demo_faq_component__WEBPACK_IMPORTED_MODULE_13__["DemoFaqComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _layout_layout_module__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"],
                _demo_full_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppDemoFullRoutingModule"],
                _project_sunbird_common_consumption__WEBPACK_IMPORTED_MODULE_6__["CommonConsumptionModule"]
            ],
            providers: [_shared_service__WEBPACK_IMPORTED_MODULE_8__["AppSharedService"]]
        })
    ], DemoFullModule);
    return DemoFullModule;
}());



/***/ }),

/***/ "./src/app/demo-full/demo-full.routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/demo-full/demo-full.routing.module.ts ***!
  \*******************************************************/
/*! exports provided: AppDemoFullRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppDemoFullRoutingModule", function() { return AppDemoFullRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/demo-full/home/home.component.ts");
/* harmony import */ var _demo_cards_demo_cards_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./demo-cards/demo-cards.component */ "./src/app/demo-full/demo-cards/demo-cards.component.ts");
/* harmony import */ var _demo_cards_grid_demo_cards_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./demo-cards-grid/demo-cards-grid.component */ "./src/app/demo-full/demo-cards-grid/demo-cards-grid.component.ts");
/* harmony import */ var _demo_cards_stack_demo_cards_stack_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./demo-cards-stack/demo-cards-stack.component */ "./src/app/demo-full/demo-cards-stack/demo-cards-stack.component.ts");
/* harmony import */ var _demo_filters_demo_filters_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./demo-filters/demo-filters.component */ "./src/app/demo-full/demo-filters/demo-filters.component.ts");
/* harmony import */ var _demo_toc_demo_toc_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./demo-toc/demo-toc.component */ "./src/app/demo-full/demo-toc/demo-toc.component.ts");
/* harmony import */ var _demo_faq_demo_faq_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./demo-faq/demo-faq.component */ "./src/app/demo-full/demo-faq/demo-faq.component.ts");










var routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        pathMatch: 'full'
    },
    {
        path: 'cards',
        component: _demo_cards_demo_cards_component__WEBPACK_IMPORTED_MODULE_4__["DemoCardsComponent"],
        pathMatch: 'full'
    },
    {
        path: 'grid',
        component: _demo_cards_grid_demo_cards_grid_component__WEBPACK_IMPORTED_MODULE_5__["DemoCardsGridComponent"],
        pathMatch: 'full'
    },
    {
        path: 'stack',
        component: _demo_cards_stack_demo_cards_stack_component__WEBPACK_IMPORTED_MODULE_6__["DemoCardsStackComponent"],
        pathMatch: 'full'
    },
    {
        path: 'filters',
        component: _demo_filters_demo_filters_component__WEBPACK_IMPORTED_MODULE_7__["DemoFiltersComponent"],
        pathMatch: 'full'
    },
    {
        path: 'toc',
        component: _demo_toc_demo_toc_component__WEBPACK_IMPORTED_MODULE_8__["DemoTocComponent"],
        pathMatch: 'full'
    },
    {
        path: 'faq',
        component: _demo_faq_demo_faq_component__WEBPACK_IMPORTED_MODULE_9__["DemoFaqComponent"],
        pathMatch: 'full'
    },
];
var AppDemoFullRoutingModule = /** @class */ (function () {
    function AppDemoFullRoutingModule() {
    }
    AppDemoFullRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppDemoFullRoutingModule);
    return AppDemoFullRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo-full/demo-toc/demo-toc.component.html":
/*!************************************************************!*\
  !*** ./src/app/demo-full/demo-toc/demo-toc.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar>\n\n</app-navbar>\n\n<div class=\"main-container container-fluid\">\n  <!-- Page Container -->\n  <div class=\"page-container\">\n    <!-- Page Sidebar -->\n    <app-sidebar>\n\n    </app-sidebar>\n    <!-- /Page Sidebar -->\n  </div>\n</div>\n\n<!-- Main content-->\n<div class=\"page-content\" [ngStyle]=\"!appSharedService.sideBarVisible && {'margin-left':'43px'}\">\n  <div class=\"page-header position-relative\">\n    <div class=\"header-title\">\n      <h1>\n        Textbook TOC \n      </h1>\n    </div>\n  </div>\n  <div class=\"page-body\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n        <section id=\"filters\">\n          <h2 class=\"margin-bottom-20\">Textbook TOC </h2>\n          <div class=\"well bordered-left bordered-success\">\n            <p> Textbook TOC  Component can be used in the page where text book contents needs to shown.</p>\n            <p>This component uses accordion component internally: </p>\n            <p>You can find more details of the component, various inputs and outputs in the\n              <a href=\"https://github.com/Sunbird-Ed/SunbirdEd-consumption-ngcomponents/blob/master/projects/common-consumption/src/lib/library-filters/library-filters/library-filters.md\"\n              target=\"_blank\">\n                component's original repository\n              </a>.\n            </p>\n            <p><i><b>Note : </b></i></p>\n            <p>\n              The width of the overall TOC container is fluid in nature i.e, 100% of the parent conatainer, so user can control the width\n              of the grid based on the parent element in which the card is contained.\n            </p>\n            <p>\n              Text inside this component is not restricted to particular language. Based on your <b>i18n</b> preferences pass inputs in the\n              desired language.\n            </p>\n          </div>\n        </section>\n        <hr>\n        <section>\n          <h6 class=\"row-title before-success\">TOC component along with filters </h6>\n          <p> For TOC Component to render the view, you need to pass the heirarchy data of the textbook </p>\n          <div class=\"row\">\n            <div class=\"col-lg-4 col-md-6 col-sm-8 col-xs-12\">\n              <div class=\"sbtoc-area grid-item\">\n                <div class=\"sbtoc-filter sbtoc-filter--bg-gray sbsmartscroll-style\">\n                  <sb-library-filters [tocList]=\"mimeTypeFilterCollection\" [layout]=\"'round-with-icon'\"\n                    (selectedMimeType)=\"selectedFilter($event)\">\n                  </sb-library-filters>\n                </div>\n                <div>\n                  <sb-toc-item [tocData]=\"tocContent1\" [activeMimeTypeFilter]=\"activeMimeTypeFilter\" [activeContent]=\"activeContent\"\n                    (tocCardClick)=\"tocCardClickHandler($event)\" (noContent)=\"onNoContentAvailable($event)\"></sb-toc-item>\n                  <!-- <sb-accordion [multi]=\"false\">\n                    <sb-accordion-item [expanded]=\"false\">\n                      <sb-accordion-header>\n                        <span class=\"title\">Credits And Licence Info</span>\n                      </sb-accordion-header>\n                      <sb-accordion-body>\n                        <div class=\"credits-section\"> \n                          <h4 *ngIf=\"tocContent1?.creator\" class=\"title\">Author</h4>\n                          <p class=\"description\">{{tocContent1?.creator}}</p>\n            \n                          <h4 *ngIf=\"tocContent1?.attributions?.length\" class=\"title\">Attribution</h4>\n                          <p class=\"description\">{{tocContent1?.attributions}}</p>\n            \n                          <h4 *ngIf=\"tocContent1?.license\" class=\"title\">License terms</h4>\n                          <p class=\"description\" [innerHTML]=\"embedUrl(tocContent1?.license)\"></p>\n            \n                          <h4 *ngIf=\"tocContent1?.copyright\" class=\"title\">Copyright</h4>\n                          <p class=\"description\">{{tocContent1?.copyright}}</p>\n            \n                          <p *ngIf=\"tocContent1?.originData\" class=\"sub-section\">This content is derived from </p>\n                          <div *ngIf=\"tocContent1?.originData\">\n                            <h4 *ngIf=\"tocContent1?.originData\" class=\"title\">Content</h4>\n                            <p class=\"description\">{{tocContent1?.originData?.name}}</p>\n            \n                            <h4 *ngIf=\"tocContent1?.originData?.author\" class=\"title\">Author of the Source Content</h4>\n                            <p class=\"description\">{{tocContent1?.originData?.author}}</p>\n            \n                            <h4 *ngIf=\"tocContent1?.publisher\" class=\"title\">Published on DIKSHA by</h4>\n                            <p class=\"description\">{{tocContent1?.publisher}}</p>\n                          </div>\n                        </div>\n                      </sb-accordion-body>\n                    </sb-accordion-item>\n                  </sb-accordion> -->\n                </div>\n            \n              </div>\n            </div>\n          </div>\n        </section>\n      </div>\n    </div>\n  </div>\n</div>  "

/***/ }),

/***/ "./src/app/demo-full/demo-toc/demo-toc.component.scss":
/*!************************************************************!*\
  !*** ./src/app/demo-full/demo-toc/demo-toc.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8tZnVsbC9kZW1vLXRvYy9kZW1vLXRvYy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/demo-full/demo-toc/demo-toc.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/demo-full/demo-toc/demo-toc.component.ts ***!
  \**********************************************************/
/*! exports provided: DemoTocComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoTocComponent", function() { return DemoTocComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.service */ "./src/app/demo-full/shared.service.ts");



var DemoTocComponent = /** @class */ (function () {
    function DemoTocComponent(appSharedService) {
        this.appSharedService = appSharedService;
        this.activeMimeTypeFilter = ['all'];
        this.mimeTypeFilterCollection = [
            {
                text: 'All',
                value: 'all'
            }, {
                text: 'Video',
                value: 'video'
            },
            {
                text: 'Interaction',
                value: 'interaction'
            }, {
                text: 'Documents',
                value: 'docs'
            }
        ];
        this.tocContent1 = {
            "keywords": [
                "vewvrereverre",
                "cewecewcewcewwe"
            ],
            "year": 2007,
            "subject": "English",
            "channel": "012315809814749184151",
            "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2125393416328806401261/bookbook12345_1530681786772_do_2125393416328806401261_1.0_spine.ecar",
            "organisation": [
                "Consumption Org",
                "ORG25"
            ],
            "language": [
                "English"
            ],
            "variants": {
                "spine": {
                    "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2125393416328806401261/bookbook12345_1530681786772_do_2125393416328806401261_1.0_spine.ecar",
                    "size": 681101
                }
            },
            "mimeType": "application/vnd.ekstep.content-collection",
            "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2125393416328806401261/artifact/cool-fb-profile-pictures-anonymous-facbook-profile-picture_1530681523277.thumb.jpg",
            "gradeLevel": [
                "Class 1"
            ],
            "children": [
                {
                    "code": "4433c1c0-db35-4da3-98c7-e755d17418e1",
                    "keywords": [
                        "cewecewcewcewwe"
                    ],
                    "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2125393420477890561264/bookbook12345_1530681785232_do_2125393420477890561264_1.0_spine.ecar",
                    "description": "dewqewwecew",
                    "language": [
                        "English"
                    ],
                    "variants": {
                        "spine": {
                            "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2125393420477890561264/bookbook12345_1530681785232_do_2125393420477890561264_1.0_spine.ecar",
                            "size": 623898
                        }
                    },
                    "mimeType": "application/vnd.ekstep.content-collection",
                    "idealScreenSize": "normal",
                    "createdOn": "2018-07-04T05:16:42.318+0000",
                    "conceptData": "(9) concepts selected",
                    "children": [
                        {
                            "subject": "English",
                            "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999194039664641503/elevator-pitch_1530613479059_do_2123999194039664641503_5.0_spine.ecar",
                            "channel": "b00bc992ef25f1a9a8d63291e20efc8d",
                            "language": [
                                "English"
                            ],
                            "mimeType": "application/vnd.ekstep.content-collection",
                            "variants": {
                                "spine": {
                                    "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999194039664641503/elevator-pitch_1530613479059_do_2123999194039664641503_5.0_spine.ecar",
                                    "size": 173657
                                }
                            },
                            "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2123999194039664641503/artifact/beee6757847b84a1e41ce827ae02ccc7_1477485749628.thumb.jpeg",
                            "gradeLevel": [
                                "Class 1"
                            ],
                            "children": [
                                {
                                    "subject": "English",
                                    "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999194039664641503/elevator-pitch_1530613479059_do_2123999194039664641503_5.0_spine.ecar",
                                    "channel": "b00bc992ef25f1a9a8d63291e20efc8d",
                                    "language": [
                                        "English"
                                    ],
                                    "mimeType": "application/vnd.ekstep.content-collection",
                                    "variants": {
                                        "spine": {
                                            "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999194039664641503/elevator-pitch_1530613479059_do_2123999194039664641503_5.0_spine.ecar",
                                            "size": 173657
                                        }
                                    },
                                    "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2123999194039664641503/artifact/beee6757847b84a1e41ce827ae02ccc7_1477485749628.thumb.jpeg",
                                    "gradeLevel": [
                                        "Class 1"
                                    ],
                                    "children": [
                                        {
                                            "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2123999198485053441504/dummy.mp4",
                                            "subject": "Hindi",
                                            "channel": "b00bc992ef25f1a9a8d63291e20efc8d",
                                            "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999198485053441504/elevator-pitch-bi-hana_1527768940732_do_2123999198485053441504_4.0.ecar",
                                            "showNotification": true,
                                            "language": [
                                                "English"
                                            ],
                                            "variants": {
                                                "spine": {
                                                    "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999198485053441504/elevator-pitch-bi-hana_1527768940895_do_2123999198485053441504_4.0_spine.ecar",
                                                    "size": 24190
                                                }
                                            },
                                            "mimeType": "video/mp4",
                                            "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2123999198485053441504/artifact/b5c2ff92ab5512754a24b7ed0a09e97f_1478082514640.thumb.jpeg",
                                            "gradeLevel": [
                                                "Class 1"
                                            ],
                                            "appId": "sunbird_portal",
                                            "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2123999198485053441504/dummy.mp4",
                                            "contentEncoding": "identity",
                                            "sYS_INTERNAL_LAST_UPDATED_ON": "2018-05-31T12:15:41.038+0000",
                                            "contentType": "Resource",
                                            "lastUpdatedBy": "b32fb1b6-e579-4406-881b-79b09609a1e5",
                                            "identifier": "do_2123999198485053441504",
                                            "audience": [
                                                "Learner"
                                            ],
                                            "visibility": "Default",
                                            "consumerId": "78de9e88-9263-4505-ae64-a06fd23744ca",
                                            "index": 1,
                                            "mediaType": "content",
                                            "osId": "org.ekstep.quiz.app",
                                            "lastPublishedBy": "b32fb1b6-e579-4406-881b-79b09609a1e5",
                                            "prevState": "Live",
                                            "lastPublishedOn": "2018-05-31T12:15:40.732+0000",
                                            "size": 38058,
                                            "concepts": [
                                                {
                                                    "identifier": "LO39",
                                                    "name": "Akshara Recognition",
                                                    "objectType": "Concept",
                                                    "relation": "associatedTo",
                                                    "description": "Akshara Recognition",
                                                    "index": null,
                                                    "status": null,
                                                    "depth": null,
                                                    "mimeType": null,
                                                    "visibility": null,
                                                    "compatibilityLevel": null
                                                }
                                            ],
                                            "name": "Elevator-Pitch-BI-HANA",
                                            "status": "Live",
                                            "code": "87dcc49c-e6ab-4830-8c97-61113eeaabb0",
                                            "description": "elevator",
                                            "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_20051856/artifact/b5c2ff92ab5512754a24b7ed0a09e97f_1478082514640.jpeg",
                                            "idealScreenSize": "normal",
                                            "createdOn": "2017-12-19T05:41:30.882+0000",
                                            "contentDisposition": "inline",
                                            "lastUpdatedOn": "2018-05-31T12:15:40.387+0000",
                                            "createdFor": [
                                                "0123944009325690880",
                                                "ORG_001"
                                            ],
                                            "creator": "bodhi1 user",
                                            "os": [
                                                "All"
                                            ],
                                            "pkgVersion": 4,
                                            "versionKey": "1527768940387",
                                            "idealScreenDensity": "hdpi",
                                            "framework": "NCF",
                                            "s3Key": "ecar_files/do_2123999198485053441504/elevator-pitch-bi-hana_1527768940732_do_2123999198485053441504_4.0.ecar",
                                            "lastSubmittedOn": "2017-12-19T05:42:35.412+0000",
                                            "createdBy": "0b174e4f-eff1-44e9-b15e-415787470456",
                                            "compatibilityLevel": 1,
                                            "board": "CBSE",
                                            "resourceType": "Read"
                                        },
                                        {
                                            "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2123999141994987521488/dummy.mp4",
                                            "subject": "English",
                                            "channel": "b00bc992ef25f1a9a8d63291e20efc8d",
                                            "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999141994987521488/prepare-agile-devops-elevator-pitch-video_1527768938601_do_2123999141994987521488_4.0.ecar",
                                            "showNotification": true,
                                            "language": [
                                                "English"
                                            ],
                                            "variants": {
                                                "spine": {
                                                    "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999141994987521488/prepare-agile-devops-elevator-pitch-video_1527768938700_do_2123999141994987521488_4.0_spine.ecar",
                                                    "size": 50749
                                                }
                                            },
                                            "mimeType": "video/mp4",
                                            "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2123999141994987521488/artifact/beee6757847b84a1e41ce827ae02ccc7_1477485749628.thumb.jpeg",
                                            "gradeLevel": [
                                                "Class 1"
                                            ],
                                            "appId": "sunbird_portal",
                                            "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2123999141994987521488/dummy.mp4",
                                            "contentEncoding": "identity",
                                            "sYS_INTERNAL_LAST_UPDATED_ON": "2018-05-31T12:15:38.881+0000",
                                            "contentType": "Resource",
                                            "lastUpdatedBy": "b32fb1b6-e579-4406-881b-79b09609a1e5",
                                            "identifier": "do_2123999141994987521488",
                                            "audience": [
                                                "Learner"
                                            ],
                                            "visibility": "Default",
                                            "consumerId": "78de9e88-9263-4505-ae64-a06fd23744ca",
                                            "index": 2,
                                            "mediaType": "content",
                                            "osId": "org.ekstep.quiz.app",
                                            "lastPublishedBy": "b32fb1b6-e579-4406-881b-79b09609a1e5",
                                            "prevState": "Live",
                                            "lastPublishedOn": "2018-05-31T12:15:38.601+0000",
                                            "size": 64298,
                                            "concepts": [
                                                {
                                                    "identifier": "BED30000",
                                                    "name": "Perspectives_in_Education",
                                                    "objectType": "Concept",
                                                    "relation": "associatedTo",
                                                    "description": null,
                                                    "index": null,
                                                    "status": null,
                                                    "depth": null,
                                                    "mimeType": null,
                                                    "visibility": null,
                                                    "compatibilityLevel": null
                                                }
                                            ],
                                            "name": "PREPARE-Agile-DevOps-Elevator-Pitch-Video",
                                            "status": "Live",
                                            "code": "ea939c80-d7e9-4d5d-8508-6ee123e13508",
                                            "description": "Refer Excel",
                                            "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/beee6757847b84a1e41ce827ae02ccc7_1477485749628.jpeg",
                                            "idealScreenSize": "normal",
                                            "createdOn": "2017-12-19T05:30:01.306+0000",
                                            "contentDisposition": "inline",
                                            "lastUpdatedOn": "2018-05-31T12:15:38.458+0000",
                                            "createdFor": [
                                                "0123944009325690880",
                                                "ORG_001"
                                            ],
                                            "creator": "bodhi1 user",
                                            "os": [
                                                "All"
                                            ],
                                            "pkgVersion": 4,
                                            "versionKey": "1527768938458",
                                            "idealScreenDensity": "hdpi",
                                            "s3Key": "ecar_files/do_2123999141994987521488/prepare-agile-devops-elevator-pitch-video_1527768938601_do_2123999141994987521488_4.0.ecar",
                                            "framework": "NCF",
                                            "lastSubmittedOn": "2017-12-19T05:32:22.263+0000",
                                            "createdBy": "0b174e4f-eff1-44e9-b15e-415787470456",
                                            "compatibilityLevel": 1,
                                            "board": "CBSE",
                                            "resourceType": "Read"
                                        },
                                        {
                                            "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2123999168105512961495/dummy.mp4",
                                            "subject": "English",
                                            "channel": "b00bc992ef25f1a9a8d63291e20efc8d",
                                            "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999168105512961495/sapfiori_edittest_salescontent_v01_1527768939161_do_2123999168105512961495_5.0.ecar",
                                            "showNotification": true,
                                            "language": [
                                                "English"
                                            ],
                                            "mimeType": "video/mp4",
                                            "variants": {
                                                "spine": {
                                                    "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999168105512961495/sapfiori_edittest_salescontent_v01_1527768939267_do_2123999168105512961495_5.0_spine.ecar",
                                                    "size": 50722
                                                }
                                            },
                                            "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2123999168105512961495/artifact/beee6757847b84a1e41ce827ae02ccc7_1477485749628.thumb.jpeg",
                                            "gradeLevel": [
                                                "Class 1"
                                            ],
                                            "appId": "sunbird_portal",
                                            "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2123999168105512961495/dummy.mp4",
                                            "contentEncoding": "identity",
                                            "sYS_INTERNAL_LAST_UPDATED_ON": "2018-05-31T12:15:39.442+0000",
                                            "contentType": "Resource",
                                            "lastUpdatedBy": "Ekstep",
                                            "identifier": "do_2123999168105512961495",
                                            "audience": [
                                                "Learner"
                                            ],
                                            "visibility": "Default",
                                            "consumerId": "78de9e88-9263-4505-ae64-a06fd23744ca",
                                            "index": 3,
                                            "mediaType": "content",
                                            "osId": "org.ekstep.quiz.app",
                                            "lastPublishedBy": "Ekstep",
                                            "prevState": "Live",
                                            "lastPublishedOn": "2018-05-31T12:15:39.161+0000",
                                            "size": 64271,
                                            "concepts": [
                                                {
                                                    "identifier": "BED30000",
                                                    "name": "Perspectives_in_Education",
                                                    "objectType": "Concept",
                                                    "relation": "associatedTo",
                                                    "description": null,
                                                    "index": null,
                                                    "status": null,
                                                    "depth": null,
                                                    "mimeType": null,
                                                    "visibility": null,
                                                    "compatibilityLevel": null
                                                }
                                            ],
                                            "name": "SAPFiori_EditTest_SalesContent_v01",
                                            "publisher": "EkStep",
                                            "status": "Live",
                                            "code": "3963432a-7012-4263-8ee6-388175d812e6",
                                            "description": "Refer Excel",
                                            "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/beee6757847b84a1e41ce827ae02ccc7_1477485749628.jpeg",
                                            "idealScreenSize": "normal",
                                            "createdOn": "2017-12-19T05:35:20.038+0000",
                                            "contentDisposition": "inline",
                                            "lastUpdatedOn": "2018-05-31T12:15:38.990+0000",
                                            "createdFor": [
                                                "0123944009325690880",
                                                "ORG_001"
                                            ],
                                            "creator": "bodhi1 user",
                                            "os": [
                                                "All"
                                            ],
                                            "pkgVersion": 5,
                                            "versionKey": "1527768938990",
                                            "idealScreenDensity": "hdpi",
                                            "framework": "NCF",
                                            "s3Key": "ecar_files/do_2123999168105512961495/sapfiori_edittest_salescontent_v01_1527768939161_do_2123999168105512961495_5.0.ecar",
                                            "lastSubmittedOn": "2017-12-19T05:37:08.341+0000",
                                            "createdBy": "0b174e4f-eff1-44e9-b15e-415787470456",
                                            "compatibilityLevel": 1,
                                            "board": "CBSE",
                                            "resourceType": "Read"
                                        }
                                    ],
                                    "appId": "sunbird_portal",
                                    "contentEncoding": "gzip",
                                    "mimeTypesCount": "{\"video/mp4\":3}",
                                    "contentType": "Collection",
                                    "sYS_INTERNAL_LAST_UPDATED_ON": "2018-07-03T10:24:40.213+0000",
                                    "lastUpdatedBy": "0b174e4f-eff1-44e9-b15e-415787470456",
                                    "identifier": "do_2123999194039664641503",
                                    "audience": [
                                        "Learner"
                                    ],
                                    "toc_url": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2123999194039664641503/artifact/do_2123999194039664641503toc.json",
                                    "visibility": "Default",
                                    "contentTypesCount": "{\"Resource\":3}",
                                    "childNodes": [
                                        "do_2123999198485053441504",
                                        "do_2123999168105512961495",
                                        "do_2123999141994987521488"
                                    ],
                                    "consumerId": "78de9e88-9263-4505-ae64-a06fd23744ca",
                                    "index": 1,
                                    "mediaType": "content",
                                    "osId": "org.ekstep.quiz.app",
                                    "lastPublishedBy": "0b174e4f-eff1-44e9-b15e-415787470456",
                                    "prevState": "Live",
                                    "size": 173657,
                                    "lastPublishedOn": "2018-07-03T10:24:39.048+0000",
                                    "concepts": [
                                        {
                                            "identifier": "BED30000",
                                            "name": "Perspectives_in_Education",
                                            "objectType": "Concept",
                                            "relation": "associatedTo",
                                            "description": null,
                                            "index": null,
                                            "status": null,
                                            "depth": null,
                                            "mimeType": null,
                                            "visibility": null,
                                            "compatibilityLevel": null
                                        },
                                        {
                                            "identifier": "LO39",
                                            "name": "Akshara Recognition",
                                            "objectType": "Concept",
                                            "relation": "associatedTo",
                                            "description": "Akshara Recognition",
                                            "index": null,
                                            "status": null,
                                            "depth": null,
                                            "mimeType": null,
                                            "visibility": null,
                                            "compatibilityLevel": null
                                        }
                                    ],
                                    "name": "Elevator Pitch",
                                    "status": "Live",
                                    "code": "org.sunbird.fRvqAL",
                                    "description": "Refer Excel",
                                    "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/beee6757847b84a1e41ce827ae02ccc7_1477485749628.jpeg",
                                    "idealScreenSize": "normal",
                                    "createdOn": "2017-12-19T05:40:36.617+0000",
                                    "contentDisposition": "inline",
                                    "lastUpdatedOn": "2018-07-03T10:24:38.211+0000",
                                    "createdFor": [
                                        "0123944009325690880",
                                        "ORG_001"
                                    ],
                                    "creator": "bodhi1user",
                                    "os": [
                                        "All"
                                    ],
                                    "pkgVersion": 5,
                                    "versionKey": "1530613478211",
                                    "idealScreenDensity": "hdpi",
                                    "framework": "NCF",
                                    "s3Key": "ecar_files/do_2123999194039664641503/elevator-pitch_1530613479059_do_2123999194039664641503_5.0_spine.ecar",
                                    "lastSubmittedOn": "2017-12-19T05:46:17.441+0000",
                                    "createdBy": "0b174e4f-eff1-44e9-b15e-415787470456",
                                    "leafNodesCount": 3,
                                    "compatibilityLevel": 1,
                                    "board": "CBSE",
                                    "resourceType": "Collection"
                                },
                            ],
                            "appId": "sunbird_portal",
                            "contentEncoding": "gzip",
                            "mimeTypesCount": "{\"video/mp4\":3}",
                            "contentType": "Collection",
                            "sYS_INTERNAL_LAST_UPDATED_ON": "2018-07-03T10:24:40.213+0000",
                            "lastUpdatedBy": "0b174e4f-eff1-44e9-b15e-415787470456",
                            "identifier": "do_2123999194039664641503",
                            "audience": [
                                "Learner"
                            ],
                            "toc_url": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2123999194039664641503/artifact/do_2123999194039664641503toc.json",
                            "visibility": "Default",
                            "contentTypesCount": "{\"Resource\":3}",
                            "childNodes": [
                                "do_2123999198485053441504",
                                "do_2123999168105512961495",
                                "do_2123999141994987521488"
                            ],
                            "consumerId": "78de9e88-9263-4505-ae64-a06fd23744ca",
                            "index": 1,
                            "mediaType": "content",
                            "osId": "org.ekstep.quiz.app",
                            "lastPublishedBy": "0b174e4f-eff1-44e9-b15e-415787470456",
                            "prevState": "Live",
                            "size": 173657,
                            "lastPublishedOn": "2018-07-03T10:24:39.048+0000",
                            "concepts": [
                                {
                                    "identifier": "BED30000",
                                    "name": "Perspectives_in_Education",
                                    "objectType": "Concept",
                                    "relation": "associatedTo",
                                    "description": null,
                                    "index": null,
                                    "status": null,
                                    "depth": null,
                                    "mimeType": null,
                                    "visibility": null,
                                    "compatibilityLevel": null
                                },
                                {
                                    "identifier": "LO39",
                                    "name": "Akshara Recognition",
                                    "objectType": "Concept",
                                    "relation": "associatedTo",
                                    "description": "Akshara Recognition",
                                    "index": null,
                                    "status": null,
                                    "depth": null,
                                    "mimeType": null,
                                    "visibility": null,
                                    "compatibilityLevel": null
                                }
                            ],
                            "name": "Elevator Pitch",
                            "status": "Live",
                            "code": "org.sunbird.fRvqAL",
                            "description": "Refer Excel",
                            "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/beee6757847b84a1e41ce827ae02ccc7_1477485749628.jpeg",
                            "idealScreenSize": "normal",
                            "createdOn": "2017-12-19T05:40:36.617+0000",
                            "contentDisposition": "inline",
                            "lastUpdatedOn": "2018-07-03T10:24:38.211+0000",
                            "createdFor": [
                                "0123944009325690880",
                                "ORG_001"
                            ],
                            "creator": "bodhi1user",
                            "os": [
                                "All"
                            ],
                            "pkgVersion": 5,
                            "versionKey": "1530613478211",
                            "idealScreenDensity": "hdpi",
                            "framework": "NCF",
                            "s3Key": "ecar_files/do_2123999194039664641503/elevator-pitch_1530613479059_do_2123999194039664641503_5.0_spine.ecar",
                            "lastSubmittedOn": "2017-12-19T05:46:17.441+0000",
                            "createdBy": "0b174e4f-eff1-44e9-b15e-415787470456",
                            "leafNodesCount": 3,
                            "compatibilityLevel": 1,
                            "board": "CBSE",
                            "resourceType": "Collection"
                        },
                        {
                            "subject": "English",
                            "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999507628441601548/oracle_1530613481442_do_2123999507628441601548_6.0_spine.ecar",
                            "channel": "b00bc992ef25f1a9a8d63291e20efc8d",
                            "language": [
                                "English"
                            ],
                            "mimeType": "application/vnd.ekstep.content-collection",
                            "variants": {
                                "spine": {
                                    "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999507628441601548/oracle_1530613481442_do_2123999507628441601548_6.0_spine.ecar",
                                    "size": 349219
                                }
                            },
                            "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2123999507628441601548/artifact/beee6757847b84a1e41ce827ae02ccc7_1477485749628.thumb.jpeg",
                            "gradeLevel": [
                                "Class 1"
                            ],
                            "children": [
                                {
                                    "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2123999313255956481519/dummy.mp4",
                                    "subject": "English",
                                    "channel": "b00bc992ef25f1a9a8d63291e20efc8d",
                                    "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999313255956481519/infosys_oracle_practice_nov-17_1527768942263_do_2123999313255956481519_4.0.ecar",
                                    "showNotification": true,
                                    "language": [
                                        "English"
                                    ],
                                    "mimeType": "video/mp4",
                                    "variants": {
                                        "spine": {
                                            "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999313255956481519/infosys_oracle_practice_nov-17_1527768942372_do_2123999313255956481519_4.0_spine.ecar",
                                            "size": 50732
                                        }
                                    },
                                    "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2123999313255956481519/artifact/beee6757847b84a1e41ce827ae02ccc7_1477485749628.thumb.jpeg",
                                    "gradeLevel": [
                                        "Class 1"
                                    ],
                                    "appId": "sunbird_portal",
                                    "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2123999313255956481519/dummy.mp4",
                                    "contentEncoding": "identity",
                                    "sYS_INTERNAL_LAST_UPDATED_ON": "2018-05-31T12:15:42.545+0000",
                                    "contentType": "Resource",
                                    "lastUpdatedBy": "b32fb1b6-e579-4406-881b-79b09609a1e5",
                                    "identifier": "do_2123999313255956481519",
                                    "audience": [
                                        "Learner"
                                    ],
                                    "visibility": "Default",
                                    "consumerId": "78de9e88-9263-4505-ae64-a06fd23744ca",
                                    "index": 1,
                                    "mediaType": "content",
                                    "osId": "org.ekstep.quiz.app",
                                    "lastPublishedBy": "b32fb1b6-e579-4406-881b-79b09609a1e5",
                                    "prevState": "Live",
                                    "lastPublishedOn": "2018-05-31T12:15:42.262+0000",
                                    "size": 64281,
                                    "concepts": [
                                        {
                                            "identifier": "BED30000",
                                            "name": "Perspectives_in_Education",
                                            "objectType": "Concept",
                                            "relation": "associatedTo",
                                            "description": null,
                                            "index": null,
                                            "status": null,
                                            "depth": null,
                                            "mimeType": null,
                                            "visibility": null,
                                            "compatibilityLevel": null
                                        }
                                    ],
                                    "name": "Infosys_Oracle_Practice_Nov-17",
                                    "status": "Live",
                                    "code": "28491834-2b1d-4358-ad8e-c82c18a6cc5c",
                                    "description": "Refer Excel",
                                    "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/beee6757847b84a1e41ce827ae02ccc7_1477485749628.jpeg",
                                    "idealScreenSize": "normal",
                                    "createdOn": "2017-12-19T06:04:51.894+0000",
                                    "contentDisposition": "inline",
                                    "lastUpdatedOn": "2018-05-31T12:15:42.142+0000",
                                    "createdFor": [
                                        "0123944009325690880",
                                        "ORG_001"
                                    ],
                                    "creator": "bodhi1 user",
                                    "os": [
                                        "All"
                                    ],
                                    "pkgVersion": 4,
                                    "versionKey": "1527768942142",
                                    "idealScreenDensity": "hdpi",
                                    "framework": "NCF",
                                    "s3Key": "ecar_files/do_2123999313255956481519/infosys_oracle_practice_nov-17_1527768942263_do_2123999313255956481519_4.0.ecar",
                                    "lastSubmittedOn": "2017-12-19T06:06:50.023+0000",
                                    "createdBy": "0b174e4f-eff1-44e9-b15e-415787470456",
                                    "compatibilityLevel": 1,
                                    "board": "CBSE",
                                    "resourceType": "Read"
                                },
                                {
                                    "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2123999338861608961523/dummy.mp4",
                                    "subject": "English",
                                    "channel": "b00bc992ef25f1a9a8d63291e20efc8d",
                                    "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999338861608961523/oracle-analytics-cloud_1527768942917_do_2123999338861608961523_4.0.ecar",
                                    "showNotification": true,
                                    "language": [
                                        "English"
                                    ],
                                    "variants": {
                                        "spine": {
                                            "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999338861608961523/oracle-analytics-cloud_1527768943013_do_2123999338861608961523_4.0_spine.ecar",
                                            "size": 50724
                                        }
                                    },
                                    "mimeType": "video/mp4",
                                    "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2123999338861608961523/artifact/beee6757847b84a1e41ce827ae02ccc7_1477485749628.thumb.jpeg",
                                    "gradeLevel": [
                                        "Class 1"
                                    ],
                                    "appId": "sunbird_portal",
                                    "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2123999338861608961523/dummy.mp4",
                                    "contentEncoding": "identity",
                                    "sYS_INTERNAL_LAST_UPDATED_ON": "2018-05-31T12:15:43.175+0000",
                                    "contentType": "Resource",
                                    "lastUpdatedBy": "0b174e4f-eff1-44e9-b15e-415787470456",
                                    "identifier": "do_2123999338861608961523",
                                    "audience": [
                                        "Learner"
                                    ],
                                    "visibility": "Default",
                                    "consumerId": "78de9e88-9263-4505-ae64-a06fd23744ca",
                                    "index": 2,
                                    "mediaType": "content",
                                    "osId": "org.ekstep.quiz.app",
                                    "lastPublishedBy": "0b174e4f-eff1-44e9-b15e-415787470456",
                                    "prevState": "Live",
                                    "lastPublishedOn": "2018-05-31T12:15:42.916+0000",
                                    "size": 64273,
                                    "concepts": [
                                        {
                                            "identifier": "BED30000",
                                            "name": "Perspectives_in_Education",
                                            "objectType": "Concept",
                                            "relation": "associatedTo",
                                            "description": null,
                                            "index": null,
                                            "status": null,
                                            "depth": null,
                                            "mimeType": null,
                                            "visibility": null,
                                            "compatibilityLevel": null
                                        }
                                    ],
                                    "name": "Oracle Analytics Cloud",
                                    "status": "Live",
                                    "code": "4ab22ae6-43e2-4cda-92b1-a8395a52aa0e",
                                    "description": "Refer Excel",
                                    "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/beee6757847b84a1e41ce827ae02ccc7_1477485749628.jpeg",
                                    "idealScreenSize": "normal",
                                    "createdOn": "2017-12-19T06:10:04.463+0000",
                                    "contentDisposition": "inline",
                                    "lastUpdatedOn": "2018-05-31T12:15:42.648+0000",
                                    "createdFor": [
                                        "0123944009325690880",
                                        "ORG_001"
                                    ],
                                    "creator": "bodhi2 user",
                                    "os": [
                                        "All"
                                    ],
                                    "pkgVersion": 4,
                                    "versionKey": "1527768942648",
                                    "idealScreenDensity": "hdpi",
                                    "framework": "NCF",
                                    "s3Key": "ecar_files/do_2123999338861608961523/oracle-analytics-cloud_1527768942917_do_2123999338861608961523_4.0.ecar",
                                    "lastSubmittedOn": "2017-12-19T06:11:31.675+0000",
                                    "createdBy": "b32fb1b6-e579-4406-881b-79b09609a1e5",
                                    "compatibilityLevel": 1,
                                    "board": "CBSE",
                                    "resourceType": "Read"
                                },
                                {
                                    "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2123999359659786241526/dummy.mp4",
                                    "subject": "English",
                                    "channel": "b00bc992ef25f1a9a8d63291e20efc8d",
                                    "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999359659786241526/oracle-hcm-systems-sales_1527768943523_do_2123999359659786241526_4.0.ecar",
                                    "showNotification": true,
                                    "language": [
                                        "English"
                                    ],
                                    "mimeType": "video/mp4",
                                    "variants": {
                                        "spine": {
                                            "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999359659786241526/oracle-hcm-systems-sales_1527768943660_do_2123999359659786241526_4.0_spine.ecar",
                                            "size": 50731
                                        }
                                    },
                                    "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2123999359659786241526/artifact/beee6757847b84a1e41ce827ae02ccc7_1477485749628.thumb.jpeg",
                                    "gradeLevel": [
                                        "Class 1"
                                    ],
                                    "appId": "sunbird_portal",
                                    "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2123999359659786241526/dummy.mp4",
                                    "contentEncoding": "identity",
                                    "sYS_INTERNAL_LAST_UPDATED_ON": "2018-05-31T12:15:43.802+0000",
                                    "contentType": "Resource",
                                    "lastUpdatedBy": "0b174e4f-eff1-44e9-b15e-415787470456",
                                    "identifier": "do_2123999359659786241526",
                                    "audience": [
                                        "Learner"
                                    ],
                                    "visibility": "Default",
                                    "consumerId": "78de9e88-9263-4505-ae64-a06fd23744ca",
                                    "index": 3,
                                    "mediaType": "content",
                                    "osId": "org.ekstep.quiz.app",
                                    "lastPublishedBy": "0b174e4f-eff1-44e9-b15e-415787470456",
                                    "prevState": "Live",
                                    "lastPublishedOn": "2018-05-31T12:15:43.523+0000",
                                    "size": 64280,
                                    "concepts": [
                                        {
                                            "identifier": "BED30000",
                                            "name": "Perspectives_in_Education",
                                            "objectType": "Concept",
                                            "relation": "associatedTo",
                                            "description": null,
                                            "index": null,
                                            "status": null,
                                            "depth": null,
                                            "mimeType": null,
                                            "visibility": null,
                                            "compatibilityLevel": null
                                        }
                                    ],
                                    "name": "Oracle HCM Systems - Sales",
                                    "status": "Live",
                                    "code": "3914a9a4-27a5-4594-b0c6-2bd18ad65a05",
                                    "description": "Refer Excel",
                                    "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/beee6757847b84a1e41ce827ae02ccc7_1477485749628.jpeg",
                                    "idealScreenSize": "normal",
                                    "createdOn": "2017-12-19T06:14:18.347+0000",
                                    "contentDisposition": "inline",
                                    "lastUpdatedOn": "2018-05-31T12:15:43.326+0000",
                                    "createdFor": [
                                        "0123944009325690880",
                                        "ORG_001"
                                    ],
                                    "creator": "bodhi2 user",
                                    "os": [
                                        "All"
                                    ],
                                    "pkgVersion": 4,
                                    "versionKey": "1527768943326",
                                    "idealScreenDensity": "hdpi",
                                    "framework": "NCF",
                                    "s3Key": "ecar_files/do_2123999359659786241526/oracle-hcm-systems-sales_1527768943523_do_2123999359659786241526_4.0.ecar",
                                    "lastSubmittedOn": "2017-12-19T06:16:41.416+0000",
                                    "createdBy": "b32fb1b6-e579-4406-881b-79b09609a1e5",
                                    "compatibilityLevel": 1,
                                    "board": "CBSE",
                                    "resourceType": "Read"
                                },
                                {
                                    "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2123999393908736001531/dummy.mp4",
                                    "subject": "English",
                                    "channel": "b00bc992ef25f1a9a8d63291e20efc8d",
                                    "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999393908736001531/oracle-mktg-content-for-sales-team-opn_1527768944992_do_2123999393908736001531_4.0.ecar",
                                    "showNotification": true,
                                    "language": [
                                        "English"
                                    ],
                                    "variants": {
                                        "spine": {
                                            "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999393908736001531/oracle-mktg-content-for-sales-team-opn_1527768945208_do_2123999393908736001531_4.0_spine.ecar",
                                            "size": 50742
                                        }
                                    },
                                    "mimeType": "video/mp4",
                                    "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2123999393908736001531/artifact/beee6757847b84a1e41ce827ae02ccc7_1477485749628.thumb.jpeg",
                                    "gradeLevel": [
                                        "Class 1"
                                    ],
                                    "appId": "sunbird_portal",
                                    "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2123999393908736001531/dummy.mp4",
                                    "contentEncoding": "identity",
                                    "sYS_INTERNAL_LAST_UPDATED_ON": "2018-05-31T12:15:45.341+0000",
                                    "contentType": "Resource",
                                    "lastUpdatedBy": "0b174e4f-eff1-44e9-b15e-415787470456",
                                    "identifier": "do_2123999393908736001531",
                                    "audience": [
                                        "Learner"
                                    ],
                                    "visibility": "Default",
                                    "consumerId": "78de9e88-9263-4505-ae64-a06fd23744ca",
                                    "index": 4,
                                    "mediaType": "content",
                                    "osId": "org.ekstep.quiz.app",
                                    "lastPublishedBy": "0b174e4f-eff1-44e9-b15e-415787470456",
                                    "prevState": "Live",
                                    "lastPublishedOn": "2018-05-31T12:15:44.992+0000",
                                    "size": 64292,
                                    "concepts": [
                                        {
                                            "identifier": "BED30000",
                                            "name": "Perspectives_in_Education",
                                            "objectType": "Concept",
                                            "relation": "associatedTo",
                                            "description": null,
                                            "index": null,
                                            "status": null,
                                            "depth": null,
                                            "mimeType": null,
                                            "visibility": null,
                                            "compatibilityLevel": null
                                        }
                                    ],
                                    "name": "Oracle Mktg content for Sales team-OPN",
                                    "status": "Live",
                                    "code": "1e06c8e8-8bc9-4dab-be33-860a0ecdc936",
                                    "description": "refer excel",
                                    "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/beee6757847b84a1e41ce827ae02ccc7_1477485749628.jpeg",
                                    "idealScreenSize": "normal",
                                    "createdOn": "2017-12-19T06:21:16.425+0000",
                                    "contentDisposition": "inline",
                                    "lastUpdatedOn": "2018-05-31T12:15:44.708+0000",
                                    "createdFor": [
                                        "0123944009325690880",
                                        "ORG_001"
                                    ],
                                    "creator": "bodhi2 user",
                                    "os": [
                                        "All"
                                    ],
                                    "pkgVersion": 4,
                                    "versionKey": "1527768944708",
                                    "idealScreenDensity": "hdpi",
                                    "s3Key": "ecar_files/do_2123999393908736001531/oracle-mktg-content-for-sales-team-opn_1527768944992_do_2123999393908736001531_4.0.ecar",
                                    "framework": "NCF",
                                    "lastSubmittedOn": "2017-12-19T06:23:21.559+0000",
                                    "createdBy": "b32fb1b6-e579-4406-881b-79b09609a1e5",
                                    "compatibilityLevel": 1,
                                    "board": "CBSE",
                                    "resourceType": "Read"
                                },
                                {
                                    "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2123999412799979521537/dummy.mp4",
                                    "subject": "English",
                                    "channel": "b00bc992ef25f1a9a8d63291e20efc8d",
                                    "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999412799979521537/oracle_business-intelligence-on-cloud_1527768945654_do_2123999412799979521537_4.0.ecar",
                                    "showNotification": true,
                                    "language": [
                                        "English"
                                    ],
                                    "variants": {
                                        "spine": {
                                            "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999412799979521537/oracle_business-intelligence-on-cloud_1527768945837_do_2123999412799979521537_4.0_spine.ecar",
                                            "size": 50741
                                        }
                                    },
                                    "mimeType": "video/mp4",
                                    "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2123999412799979521537/artifact/beee6757847b84a1e41ce827ae02ccc7_1477485749628.thumb.jpeg",
                                    "gradeLevel": [
                                        "Class 1"
                                    ],
                                    "appId": "sunbird_portal",
                                    "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2123999412799979521537/dummy.mp4",
                                    "contentEncoding": "identity",
                                    "sYS_INTERNAL_LAST_UPDATED_ON": "2018-05-31T12:15:46.001+0000",
                                    "contentType": "Resource",
                                    "lastUpdatedBy": "0b174e4f-eff1-44e9-b15e-415787470456",
                                    "identifier": "do_2123999412799979521537",
                                    "audience": [
                                        "Learner"
                                    ],
                                    "visibility": "Default",
                                    "consumerId": "78de9e88-9263-4505-ae64-a06fd23744ca",
                                    "index": 5,
                                    "mediaType": "content",
                                    "osId": "org.ekstep.quiz.app",
                                    "lastPublishedBy": "0b174e4f-eff1-44e9-b15e-415787470456",
                                    "prevState": "Live",
                                    "lastPublishedOn": "2018-05-31T12:15:45.654+0000",
                                    "size": 64290,
                                    "concepts": [
                                        {
                                            "identifier": "BED30000",
                                            "name": "Perspectives_in_Education",
                                            "objectType": "Concept",
                                            "relation": "associatedTo",
                                            "description": null,
                                            "index": null,
                                            "status": null,
                                            "depth": null,
                                            "mimeType": null,
                                            "visibility": null,
                                            "compatibilityLevel": null
                                        }
                                    ],
                                    "name": "Oracle_Business Intelligence on Cloud",
                                    "status": "Live",
                                    "code": "38963e57-d933-4009-9e50-a783c1cc2db8",
                                    "description": "refer excel",
                                    "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/beee6757847b84a1e41ce827ae02ccc7_1477485749628.jpeg",
                                    "idealScreenSize": "normal",
                                    "createdOn": "2017-12-19T06:25:07.031+0000",
                                    "contentDisposition": "inline",
                                    "lastUpdatedOn": "2018-05-31T12:15:45.540+0000",
                                    "createdFor": [
                                        "0123944009325690880",
                                        "ORG_001"
                                    ],
                                    "creator": "bodhi2 user",
                                    "os": [
                                        "All"
                                    ],
                                    "pkgVersion": 4,
                                    "versionKey": "1527768945540",
                                    "idealScreenDensity": "hdpi",
                                    "s3Key": "ecar_files/do_2123999412799979521537/oracle_business-intelligence-on-cloud_1527768945654_do_2123999412799979521537_4.0.ecar",
                                    "framework": "NCF",
                                    "lastSubmittedOn": "2017-12-19T06:26:49.532+0000",
                                    "createdBy": "b32fb1b6-e579-4406-881b-79b09609a1e5",
                                    "compatibilityLevel": 1,
                                    "board": "CBSE",
                                    "resourceType": "Read"
                                },
                                {
                                    "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2123999426959196161540/dummy.mp4",
                                    "subject": "English",
                                    "channel": "b00bc992ef25f1a9a8d63291e20efc8d",
                                    "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999426959196161540/siebelopenui_salesportal_1527768946224_do_2123999426959196161540_4.0.ecar",
                                    "showNotification": true,
                                    "language": [
                                        "English"
                                    ],
                                    "variants": {
                                        "spine": {
                                            "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999426959196161540/siebelopenui_salesportal_1527768946366_do_2123999426959196161540_4.0_spine.ecar",
                                            "size": 50723
                                        }
                                    },
                                    "mimeType": "video/mp4",
                                    "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2123999426959196161540/artifact/beee6757847b84a1e41ce827ae02ccc7_1477485749628.thumb.jpeg",
                                    "gradeLevel": [
                                        "Class 1"
                                    ],
                                    "appId": "sunbird_portal",
                                    "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2123999426959196161540/dummy.mp4",
                                    "contentEncoding": "identity",
                                    "sYS_INTERNAL_LAST_UPDATED_ON": "2018-05-31T12:15:46.532+0000",
                                    "contentType": "Resource",
                                    "lastUpdatedBy": "0b174e4f-eff1-44e9-b15e-415787470456",
                                    "identifier": "do_2123999426959196161540",
                                    "audience": [
                                        "Learner"
                                    ],
                                    "visibility": "Default",
                                    "consumerId": "78de9e88-9263-4505-ae64-a06fd23744ca",
                                    "index": 6,
                                    "mediaType": "content",
                                    "osId": "org.ekstep.quiz.app",
                                    "lastPublishedBy": "0b174e4f-eff1-44e9-b15e-415787470456",
                                    "prevState": "Live",
                                    "lastPublishedOn": "2018-05-31T12:15:46.224+0000",
                                    "size": 64272,
                                    "concepts": [
                                        {
                                            "identifier": "BED30000",
                                            "name": "Perspectives_in_Education",
                                            "objectType": "Concept",
                                            "relation": "associatedTo",
                                            "description": null,
                                            "index": null,
                                            "status": null,
                                            "depth": null,
                                            "mimeType": null,
                                            "visibility": null,
                                            "compatibilityLevel": null
                                        }
                                    ],
                                    "name": "SiebelOpenUI_SalesPortal",
                                    "status": "Live",
                                    "code": "acb90aba-2513-4763-9d3c-05a66ccb4b81",
                                    "description": "refer excel",
                                    "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/beee6757847b84a1e41ce827ae02ccc7_1477485749628.jpeg",
                                    "idealScreenSize": "normal",
                                    "createdOn": "2017-12-19T06:27:59.873+0000",
                                    "contentDisposition": "inline",
                                    "lastUpdatedOn": "2018-05-31T12:15:46.093+0000",
                                    "createdFor": [
                                        "0123944009325690880",
                                        "ORG_001"
                                    ],
                                    "creator": "bodhi2 user",
                                    "os": [
                                        "All"
                                    ],
                                    "pkgVersion": 4,
                                    "versionKey": "1527768946093",
                                    "idealScreenDensity": "hdpi",
                                    "framework": "NCF",
                                    "s3Key": "ecar_files/do_2123999426959196161540/siebelopenui_salesportal_1527768946224_do_2123999426959196161540_4.0.ecar",
                                    "lastSubmittedOn": "2017-12-19T06:29:48.609+0000",
                                    "createdBy": "b32fb1b6-e579-4406-881b-79b09609a1e5",
                                    "compatibilityLevel": 1,
                                    "board": "CBSE",
                                    "resourceType": "Read"
                                }
                            ],
                            "appId": "sunbird_portal",
                            "contentEncoding": "gzip",
                            "mimeTypesCount": "{\"video/mp4\":6}",
                            "contentType": "Collection",
                            "sYS_INTERNAL_LAST_UPDATED_ON": "2018-07-03T10:24:42.182+0000",
                            "lastUpdatedBy": "b32fb1b6-e579-4406-881b-79b09609a1e5",
                            "identifier": "do_2123999507628441601548",
                            "audience": [
                                "Learner"
                            ],
                            "toc_url": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2123999507628441601548/artifact/do_2123999507628441601548toc.json",
                            "visibility": "Default",
                            "contentTypesCount": "{\"Resource\":6}",
                            "childNodes": [
                                "do_2123999359659786241526",
                                "do_2123999426959196161540",
                                "do_2123999393908736001531",
                                "do_2123999412799979521537",
                                "do_2123999313255956481519",
                                "do_2123999338861608961523"
                            ],
                            "consumerId": "78de9e88-9263-4505-ae64-a06fd23744ca",
                            "index": 2,
                            "mediaType": "content",
                            "osId": "org.ekstep.quiz.app",
                            "lastPublishedBy": "b32fb1b6-e579-4406-881b-79b09609a1e5",
                            "prevState": "Live",
                            "size": 349219,
                            "lastPublishedOn": "2018-07-03T10:24:41.409+0000",
                            "concepts": [
                                {
                                    "identifier": "BED30000",
                                    "name": "Perspectives_in_Education",
                                    "objectType": "Concept",
                                    "relation": "associatedTo",
                                    "description": null,
                                    "index": null,
                                    "status": null,
                                    "depth": null,
                                    "mimeType": null,
                                    "visibility": null,
                                    "compatibilityLevel": null
                                }
                            ],
                            "name": "Oracle",
                            "status": "Live",
                            "code": "org.sunbird.GUPfUb",
                            "description": "Refer Excel",
                            "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/beee6757847b84a1e41ce827ae02ccc7_1477485749628.jpeg",
                            "idealScreenSize": "normal",
                            "createdOn": "2017-12-19T06:44:24.605+0000",
                            "contentDisposition": "inline",
                            "lastUpdatedOn": "2018-07-03T10:24:40.976+0000",
                            "createdFor": [
                                "0123944009325690880",
                                "ORG_001"
                            ],
                            "creator": "bodhi1user",
                            "os": [
                                "All"
                            ],
                            "pkgVersion": 6,
                            "versionKey": "1530613480976",
                            "idealScreenDensity": "hdpi",
                            "framework": "NCF",
                            "s3Key": "ecar_files/do_2123999507628441601548/oracle_1530613481442_do_2123999507628441601548_6.0_spine.ecar",
                            "lastSubmittedOn": "2017-12-19T07:06:48.059+0000",
                            "createdBy": "0b174e4f-eff1-44e9-b15e-415787470456",
                            "leafNodesCount": 6,
                            "compatibilityLevel": 1,
                            "board": "CBSE",
                            "resourceType": "Collection"
                        },
                        {
                            "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2125139721311354881514/amy-cuddy-more-confidence-in-2-minutes-condensed-talk.mp4",
                            "keywords": [
                                "Ch 6"
                            ],
                            "subject": "English",
                            "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2125139721311354881514/ch-6_1527769832872_do_2125139721311354881514_2.0.ecar",
                            "channel": "in.ekstep",
                            "language": [
                                "English"
                            ],
                            "variants": {
                                "spine": {
                                    "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2125139721311354881514/ch-6_1527769835084_do_2125139721311354881514_2.0_spine.ecar",
                                    "size": 14630
                                }
                            },
                            "mimeType": "video/mp4",
                            "gradeLevel": [
                                "Class 1"
                            ],
                            "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2125139721311354881514/artifact/c01d727c0adf4782a959fd96613b0fc2_1478084692560.thumb.jpeg",
                            "appId": "staging.diksha.portal",
                            "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2125139721311354881514/amy-cuddy-more-confidence-in-2-minutes-condensed-talk.mp4",
                            "contentEncoding": "identity",
                            "contentType": "Resource",
                            "sYS_INTERNAL_LAST_UPDATED_ON": "2018-05-31T12:30:35.214+0000",
                            "lastUpdatedBy": "a0ccd498-750e-479e-8556-903b3b9c32bf",
                            "identifier": "do_2125139721311354881514",
                            "audience": [
                                "Learner"
                            ],
                            "publishChecklist": [
                                "No Hate speech, Abuse, Violence, Profanity",
                                "No Sexual content, Nudity or Vulgarity",
                                "No Discrimination or Defamation",
                                "Is suitable for children",
                                "Appropriate Title, Description",
                                "Correct Board, Grade, Subject, Medium",
                                "Appropriate tags such as Resource Type, Concepts",
                                "Relevant Keywords",
                                "Content plays correctly",
                                "Can see the content clearly on Desktop and App",
                                "Audio (if any) is clear and easy to understand",
                                "No Spelling mistakes in the text",
                                "Language is simple to understand"
                            ],
                            "visibility": "Default",
                            "consumerId": "fa271a76-c15a-4aa1-adff-31dd04682a1f",
                            "index": 3,
                            "mediaType": "content",
                            "osId": "org.ekstep.quiz.app",
                            "lastPublishedBy": "a0ccd498-750e-479e-8556-903b3b9c32bf",
                            "tags": [
                                "Ch 6"
                            ],
                            "prevState": "Live",
                            "lastPublishedOn": "2018-05-31T12:30:32.871+0000",
                            "size": 25745705,
                            "concepts": [
                                {
                                    "identifier": "AI33",
                                    "name": "Perceptron",
                                    "objectType": "Concept",
                                    "relation": "associatedTo",
                                    "description": null,
                                    "index": null,
                                    "status": null,
                                    "depth": null,
                                    "mimeType": null,
                                    "visibility": null,
                                    "compatibilityLevel": null
                                }
                            ],
                            "name": "Ch 6",
                            "status": "Live",
                            "code": "8607dab1-b9a6-414c-81c6-cad63ce6ad5a",
                            "description": "Ch 6",
                            "medium": "English",
                            "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_20051866/artifact/c01d727c0adf4782a959fd96613b0fc2_1478084692560.jpeg",
                            "idealScreenSize": "normal",
                            "createdOn": "2018-05-29T09:01:28.663+0000",
                            "contentDisposition": "inline",
                            "lastUpdatedOn": "2018-05-31T12:30:32.685+0000",
                            "createdFor": [
                                "0125053927550320640"
                            ],
                            "creator": "Ekstep User2",
                            "os": [
                                "All"
                            ],
                            "pkgVersion": 2,
                            "versionKey": "1527769832685",
                            "idealScreenDensity": "hdpi",
                            "framework": "NCF",
                            "s3Key": "ecar_files/do_2125139721311354881514/ch-6_1527769832872_do_2125139721311354881514_2.0.ecar",
                            "lastSubmittedOn": "2018-05-29T09:03:17.617+0000",
                            "createdBy": "1c0d0dc1-5e47-4ca8-894a-4e55a3292eb1",
                            "compatibilityLevel": 1,
                            "board": "CBSE",
                            "resourceType": "Learn"
                        },
                        {
                            "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2123993503202263041424/dummy.mp4",
                            "subject": "English",
                            "channel": "b00bc992ef25f1a9a8d63291e20efc8d",
                            "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123993503202263041424/business-critical-application-uptime-with-infoscale_1513593259017_do_2123993503202263041424_1.0.ecar",
                            "showNotification": true,
                            "language": [
                                "English"
                            ],
                            "variants": {
                                "spine": {
                                    "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123993503202263041424/business-critical-application-uptime-with-infoscale_1513593259215_do_2123993503202263041424_1.0_spine.ecar",
                                    "size": 24012
                                }
                            },
                            "mimeType": "video/mp4",
                            "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2123993503202263041424/artifact/b5c2ff92ab5512754a24b7ed0a09e97f_1478082514640.thumb.jpeg",
                            "gradeLevel": [
                                "Class 1"
                            ],
                            "appId": "sunbird_portal",
                            "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2123993503202263041424/dummy.mp4",
                            "contentEncoding": "identity",
                            "sYS_INTERNAL_LAST_UPDATED_ON": "2017-12-18T10:34:19.440+0000",
                            "contentType": "Resource",
                            "lastUpdatedBy": "b32fb1b6-e579-4406-881b-79b09609a1e5",
                            "identifier": "do_2123993503202263041424",
                            "audience": [
                                "Learner"
                            ],
                            "visibility": "Default",
                            "consumerId": "78de9e88-9263-4505-ae64-a06fd23744ca",
                            "index": 4,
                            "mediaType": "content",
                            "osId": "org.ekstep.quiz.app",
                            "lastPublishedBy": "b32fb1b6-e579-4406-881b-79b09609a1e5",
                            "lastPublishedOn": "2017-12-18T10:34:19.016+0000",
                            "size": 37878,
                            "concepts": [
                                {
                                    "identifier": "LO39",
                                    "name": "Akshara Recognition",
                                    "objectType": "Concept",
                                    "relation": "associatedTo",
                                    "description": "Akshara Recognition",
                                    "index": null,
                                    "status": null,
                                    "depth": null,
                                    "mimeType": null,
                                    "visibility": null,
                                    "compatibilityLevel": null
                                }
                            ],
                            "name": "Business-critical Application Uptime with InfoScale",
                            "status": "Live",
                            "code": "2d3316a2-8c82-4be4-8cd5-25cd2dabe670",
                            "description": "Business",
                            "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_20051856/artifact/b5c2ff92ab5512754a24b7ed0a09e97f_1478082514640.jpeg",
                            "idealScreenSize": "normal",
                            "createdOn": "2017-12-18T10:22:48.387+0000",
                            "contentDisposition": "inline",
                            "lastUpdatedOn": "2017-12-18T10:34:17.328+0000",
                            "createdFor": [
                                "0123944009325690880",
                                "ORG_001"
                            ],
                            "creator": "bodhi1 user",
                            "os": [
                                "All"
                            ],
                            "pkgVersion": 1,
                            "versionKey": "1513593259440",
                            "idealScreenDensity": "hdpi",
                            "s3Key": "ecar_files/do_2123993503202263041424/business-critical-application-uptime-with-infoscale_1513593259017_do_2123993503202263041424_1.0.ecar",
                            "framework": "NCF",
                            "lastSubmittedOn": "2017-12-18T10:24:29.487+0000",
                            "createdBy": "0b174e4f-eff1-44e9-b15e-415787470456",
                            "compatibilityLevel": 1,
                            "board": "CBSE",
                            "resourceType": "Read"
                        },
                        {
                            "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/ecml/do_21244184257548288011854-latest",
                            "code": "org.sunbird.lyLyeF",
                            "subject": "English",
                            "channel": "505c7c48ac6dc1edc9b08f21db5a571d",
                            "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_21244184257548288011854/study3090_1518779734564_do_21244184257548288011854_1.0.ecar",
                            "description": "descr",
                            "language": [
                                "English"
                            ],
                            "variants": {
                                "spine": {
                                    "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_21244184257548288011854/study3090_1518779734734_do_21244184257548288011854_1.0_spine.ecar",
                                    "size": 54386
                                }
                            },
                            "mimeType": "application/vnd.ekstep.ecml-archive",
                            "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2123864597732311041149/artifact/asder0_123456_1512019015777.jpg",
                            "idealScreenSize": "normal",
                            "createdOn": "2018-02-16T11:13:31.264+0000",
                            "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_21244184257548288011854/artifact/asder0_123456_1512019015777.thumb.jpg",
                            "gradeLevel": [
                                "Class 1"
                            ],
                            "appId": "sunbird_portal",
                            "contentDisposition": "inline",
                            "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_21244184257548288011854/artifact/1518779734293_do_21244184257548288011854.zip",
                            "contentEncoding": "gzip",
                            "lastUpdatedOn": "2018-02-16T11:15:32.954+0000",
                            "sYS_INTERNAL_LAST_UPDATED_ON": "2018-02-16T11:15:34.964+0000",
                            "contentType": "Resource",
                            "lastUpdatedBy": "18150cf9-b839-4ccd-956a-66e359f22278",
                            "identifier": "do_21244184257548288011854",
                            "audience": [
                                "Learner"
                            ],
                            "createdFor": [
                                "01232003237608652844",
                                "01231711180382208027"
                            ],
                            "creator": "Test12 test456",
                            "os": [
                                "All"
                            ],
                            "visibility": "Default",
                            "consumerId": "fa271a76-c15a-4aa1-adff-31dd04682a1f",
                            "index": 5,
                            "mediaType": "content",
                            "osId": "org.ekstep.quiz.app",
                            "lastPublishedBy": "18150cf9-b839-4ccd-956a-66e359f22278",
                            "pkgVersion": 1,
                            "versionKey": "1518779734964",
                            "idealScreenDensity": "hdpi",
                            "s3Key": "ecar_files/do_21244184257548288011854/study3090_1518779734564_do_21244184257548288011854_1.0.ecar",
                            "framework": "NCF",
                            "size": 70802,
                            "lastPublishedOn": "2018-02-16T11:15:34.564+0000",
                            "lastSubmittedOn": "2018-02-16T11:14:48.598+0000",
                            "concepts": [
                                {
                                    "identifier": "BIO10000",
                                    "name": "Animals",
                                    "objectType": "Concept",
                                    "relation": "associatedTo",
                                    "description": null,
                                    "index": null,
                                    "status": null,
                                    "depth": null,
                                    "mimeType": null,
                                    "visibility": null,
                                    "compatibilityLevel": null
                                }
                            ],
                            "createdBy": "4c4530df-0d4f-42a5-bd91-0366716c8c24",
                            "compatibilityLevel": 2,
                            "name": "Study3090",
                            "board": "CBSE",
                            "status": "Live",
                            "resourceType": "Read"
                        },
                        {
                            "previewUrl": "https://www.youtube.com/watch?v=bmECR_eHN1k",
                            "subject": "English",
                            "channel": "012315809814749184151",
                            "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2124347141266391041106/rr_youtube_1527769133481_do_2124347141266391041106_4.0.ecar",
                            "showNotification": true,
                            "language": [
                                "English"
                            ],
                            "variants": {
                                "spine": {
                                    "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2124347141266391041106/rr_youtube_1527769133565_do_2124347141266391041106_4.0_spine.ecar",
                                    "size": 7370
                                }
                            },
                            "mimeType": "video/x-youtube",
                            "gradeLevel": [
                                "Class 1"
                            ],
                            "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2124006248428994561712/artifact/download_1513748149940.jpg",
                            "appId": "staging.sunbird.portal",
                            "contentEncoding": "identity",
                            "artifactUrl": "https://www.youtube.com/watch?v=bmECR_eHN1k",
                            "contentType": "Resource",
                            "sYS_INTERNAL_LAST_UPDATED_ON": "2018-05-31T12:18:53.708+0000",
                            "lastUpdatedBy": "659b011a-06ec-4107-84ad-955e16b0a48a",
                            "identifier": "do_2124347141266391041106",
                            "audience": [
                                "Learner"
                            ],
                            "visibility": "Default",
                            "consumerId": "fa271a76-c15a-4aa1-adff-31dd04682a1f",
                            "index": 6,
                            "mediaType": "content",
                            "osId": "org.ekstep.quiz.app",
                            "lastPublishedBy": "68777b59-b28b-4aee-88d6-50d46e4c3509",
                            "pragma": [
                                "external"
                            ],
                            "prevState": "Live",
                            "size": 7369,
                            "lastPublishedOn": "2018-05-31T12:18:53.481+0000",
                            "concepts": [
                                {
                                    "identifier": "LO39",
                                    "name": "Akshara Recognition",
                                    "objectType": "Concept",
                                    "relation": "associatedTo",
                                    "description": "Akshara Recognition",
                                    "index": null,
                                    "status": null,
                                    "depth": null,
                                    "mimeType": null,
                                    "visibility": null,
                                    "compatibilityLevel": null
                                }
                            ],
                            "name": "rr_youtube",
                            "status": "Live",
                            "code": "0b373b56-ca9d-4509-99b3-2eb5eb6d0e5c",
                            "flags": [
                                ""
                            ],
                            "description": "xcvbnhjmkl;",
                            "lastFlaggedOn": "2018-06-09T11:54:11.102+0000",
                            "idealScreenSize": "normal",
                            "flaggedBy": [
                                "659b011a-06ec-4107-84ad-955e16b0a48a"
                            ],
                            "createdOn": "2018-02-06T09:30:39.287+0000",
                            "contentDisposition": "online",
                            "lastUpdatedOn": "2018-06-12T09:20:04.009+0000",
                            "createdFor": [
                                "01232002070124134414",
                                "012315809814749184151"
                            ],
                            "creator": "ihn User 12345",
                            "os": [
                                "All"
                            ],
                            "pkgVersion": 4,
                            "versionKey": "1528795204009",
                            "idealScreenDensity": "hdpi",
                            "s3Key": "ecar_files/do_2124347141266391041106/rr_youtube_1527769133481_do_2124347141266391041106_4.0.ecar",
                            "framework": "NCF",
                            "lastSubmittedOn": "2018-02-06T09:35:44.933+0000",
                            "createdBy": "659b011a-06ec-4107-84ad-955e16b0a48a",
                            "compatibilityLevel": 4,
                            "board": "CBSE",
                            "resourceType": "Read"
                        },
                        {
                            "previewUrl": "https://www.youtube.com/watch?v=S78DMLYb8Pw",
                            "subject": "English",
                            "channel": "012315809814749184151",
                            "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2124665501932503041352/subrat_1527769418450_do_2124665501932503041352_4.0.ecar",
                            "showNotification": true,
                            "language": [
                                "English"
                            ],
                            "variants": {
                                "spine": {
                                    "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2124665501932503041352/subrat_1527769418523_do_2124665501932503041352_4.0_spine.ecar",
                                    "size": 5466
                                }
                            },
                            "mimeType": "video/x-youtube",
                            "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2124665501932503041352/artifact/1-1_1485252935201.thumb.png",
                            "gradeLevel": [
                                "Class 1"
                            ],
                            "appId": "sunbird_portal",
                            "artifactUrl": "https://www.youtube.com/watch?v=S78DMLYb8Pw",
                            "contentEncoding": "identity",
                            "contentType": "Resource",
                            "sYS_INTERNAL_LAST_UPDATED_ON": "2018-05-31T12:23:38.784+0000",
                            "lastUpdatedBy": "68777b59-b28b-4aee-88d6-50d46e4c3509",
                            "identifier": "do_2124665501932503041352",
                            "audience": [
                                "Learner"
                            ],
                            "visibility": "Default",
                            "consumerId": "fa271a76-c15a-4aa1-adff-31dd04682a1f",
                            "index": 7,
                            "mediaType": "content",
                            "osId": "org.ekstep.quiz.app",
                            "lastPublishedBy": "68777b59-b28b-4aee-88d6-50d46e4c3509",
                            "pragma": [
                                "external"
                            ],
                            "prevState": "Live",
                            "license": "Standard YouTube License",
                            "lastPublishedOn": "2018-05-31T12:23:38.450+0000",
                            "size": 5466,
                            "concepts": [
                                {
                                    "identifier": "AI35",
                                    "name": "Softmax",
                                    "objectType": "Concept",
                                    "relation": "associatedTo",
                                    "description": null,
                                    "index": null,
                                    "status": null,
                                    "depth": null,
                                    "mimeType": null,
                                    "visibility": null,
                                    "compatibilityLevel": null
                                }
                            ],
                            "name": "subrat",
                            "status": "Live",
                            "code": "1e95ae1b-117d-47aa-a41c-1bd740386111",
                            "description": "hii",
                            "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/1-1_1485252935201.png",
                            "idealScreenSize": "normal",
                            "createdOn": "2018-03-23T09:01:17.886+0000",
                            "contentDisposition": "online",
                            "lastUpdatedOn": "2018-05-31T12:23:38.355+0000",
                            "createdFor": [
                                "01232002070124134414",
                                "012315809814749184151"
                            ],
                            "creator": "Telemetry User",
                            "os": [
                                "All"
                            ],
                            "pkgVersion": 4,
                            "versionKey": "1527769418355",
                            "idealScreenDensity": "hdpi",
                            "s3Key": "ecar_files/do_2124665501932503041352/subrat_1527769418450_do_2124665501932503041352_4.0.ecar",
                            "framework": "NCF",
                            "lastSubmittedOn": "2018-03-23T09:02:52.626+0000",
                            "createdBy": "659b011a-06ec-4107-84ad-955e16b0a48a",
                            "compatibilityLevel": 4,
                            "board": "CBSE",
                            "resourceType": "Play"
                        }
                    ],
                    "contentDisposition": "inline",
                    "contentEncoding": "gzip",
                    "lastUpdatedOn": "2018-07-04T05:16:42.318+0000",
                    "sYS_INTERNAL_LAST_UPDATED_ON": "2018-07-04T05:23:05.612+0000",
                    "contentType": "TextBookUnit",
                    "identifier": "do_2125393420477890561264",
                    "audience": [
                        "Learner"
                    ],
                    "os": [
                        "All"
                    ],
                    "visibility": "Parent",
                    "index": 1,
                    "mediaType": "content",
                    "osId": "org.ekstep.launcher",
                    "pkgVersion": 1,
                    "versionKey": "1530681402318",
                    "tags": [
                        "cewecewcewcewwe"
                    ],
                    "idealScreenDensity": "hdpi",
                    "s3Key": "ecar_files/do_2125393420477890561264/bookbook12345_1530681785232_do_2125393420477890561264_1.0_spine.ecar",
                    "lastPublishedOn": "2018-07-04T05:23:05.076+0000",
                    "size": 623898,
                    "concepts": [
                        {
                            "identifier": "AI33",
                            "name": "Perceptron",
                            "objectType": "Concept",
                            "relation": "associatedTo",
                            "description": null,
                            "index": null,
                            "status": null,
                            "depth": null,
                            "mimeType": null,
                            "visibility": null,
                            "compatibilityLevel": null
                        },
                        {
                            "identifier": "AI35",
                            "name": "Softmax",
                            "objectType": "Concept",
                            "relation": "associatedTo",
                            "description": null,
                            "index": null,
                            "status": null,
                            "depth": null,
                            "mimeType": null,
                            "visibility": null,
                            "compatibilityLevel": null
                        },
                        {
                            "identifier": "AI12",
                            "name": "Regression_Analysis",
                            "objectType": "Concept",
                            "relation": "associatedTo",
                            "description": null,
                            "index": null,
                            "status": null,
                            "depth": null,
                            "mimeType": null,
                            "visibility": null,
                            "compatibilityLevel": null
                        },
                        {
                            "identifier": "AI11",
                            "name": "Support_Vector_Machine",
                            "objectType": "Concept",
                            "relation": "associatedTo",
                            "description": null,
                            "index": null,
                            "status": null,
                            "depth": null,
                            "mimeType": null,
                            "visibility": null,
                            "compatibilityLevel": null
                        },
                        {
                            "identifier": "AI15",
                            "name": "Principal_Component_Analysis",
                            "objectType": "Concept",
                            "relation": "associatedTo",
                            "description": null,
                            "index": null,
                            "status": null,
                            "depth": null,
                            "mimeType": null,
                            "visibility": null,
                            "compatibilityLevel": null
                        },
                        {
                            "identifier": "AI16",
                            "name": "Stochastic_Gradient_Descent",
                            "objectType": "Concept",
                            "relation": "associatedTo",
                            "description": null,
                            "index": null,
                            "status": null,
                            "depth": null,
                            "mimeType": null,
                            "visibility": null,
                            "compatibilityLevel": null
                        },
                        {
                            "identifier": "AI13",
                            "name": "Supervised_Learning",
                            "objectType": "Concept",
                            "relation": "associatedTo",
                            "description": null,
                            "index": null,
                            "status": null,
                            "depth": null,
                            "mimeType": null,
                            "visibility": null,
                            "compatibilityLevel": null
                        },
                        {
                            "identifier": "AI37",
                            "name": "RELU",
                            "objectType": "Concept",
                            "relation": "associatedTo",
                            "description": null,
                            "index": null,
                            "status": null,
                            "depth": null,
                            "mimeType": null,
                            "visibility": null,
                            "compatibilityLevel": null
                        },
                        {
                            "identifier": "AI14",
                            "name": "Unsupervised_Learning",
                            "objectType": "Concept",
                            "relation": "associatedTo",
                            "description": null,
                            "index": null,
                            "status": null,
                            "depth": null,
                            "mimeType": null,
                            "visibility": null,
                            "compatibilityLevel": null
                        }
                    ],
                    "compatibilityLevel": 1,
                    "name": "BookBook12345",
                    "status": "Live"
                },
                {
                    "code": "4433c1c0-db35-4da3-98c7-e755d17418e1",
                    "keywords": [
                        "cewecewcewcewwe"
                    ],
                    "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2125393420477890561264/bookbook12345_1530681785232_do_2125393420477890561264_1.0_spine.ecar",
                    "description": "dewqewwecew",
                    "language": [
                        "English"
                    ],
                    "variants": {
                        "spine": {
                            "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2125393420477890561264/bookbook12345_1530681785232_do_2125393420477890561264_1.0_spine.ecar",
                            "size": 623898
                        }
                    },
                    "mimeType": "application/vnd.ekstep.content-collection",
                    "idealScreenSize": "normal",
                    "createdOn": "2018-07-04T05:16:42.318+0000",
                    "conceptData": "(9) concepts selected",
                    "children": [
                        {
                            "subject": "English",
                            "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999507628441601548/oracle_1530613481442_do_2123999507628441601548_6.0_spine.ecar",
                            "channel": "b00bc992ef25f1a9a8d63291e20efc8d",
                            "language": [
                                "English"
                            ],
                            "mimeType": "application/vnd.ekstep.content-collection",
                            "variants": {
                                "spine": {
                                    "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999507628441601548/oracle_1530613481442_do_2123999507628441601548_6.0_spine.ecar",
                                    "size": 349219
                                }
                            },
                            "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2123999507628441601548/artifact/beee6757847b84a1e41ce827ae02ccc7_1477485749628.thumb.jpeg",
                            "gradeLevel": [
                                "Class 1"
                            ],
                            "children": [
                                {
                                    "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2123999313255956481519/dummy.mp4",
                                    "subject": "English",
                                    "channel": "b00bc992ef25f1a9a8d63291e20efc8d",
                                    "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999313255956481519/infosys_oracle_practice_nov-17_1527768942263_do_2123999313255956481519_4.0.ecar",
                                    "showNotification": true,
                                    "language": [
                                        "English"
                                    ],
                                    "mimeType": "video/mp4",
                                    "variants": {
                                        "spine": {
                                            "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999313255956481519/infosys_oracle_practice_nov-17_1527768942372_do_2123999313255956481519_4.0_spine.ecar",
                                            "size": 50732
                                        }
                                    },
                                    "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2123999313255956481519/artifact/beee6757847b84a1e41ce827ae02ccc7_1477485749628.thumb.jpeg",
                                    "gradeLevel": [
                                        "Class 1"
                                    ],
                                    "appId": "sunbird_portal",
                                    "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2123999313255956481519/dummy.mp4",
                                    "contentEncoding": "identity",
                                    "sYS_INTERNAL_LAST_UPDATED_ON": "2018-05-31T12:15:42.545+0000",
                                    "contentType": "Resource",
                                    "lastUpdatedBy": "b32fb1b6-e579-4406-881b-79b09609a1e5",
                                    "identifier": "do_2123999313255956481519",
                                    "audience": [
                                        "Learner"
                                    ],
                                    "visibility": "Default",
                                    "consumerId": "78de9e88-9263-4505-ae64-a06fd23744ca",
                                    "index": 1,
                                    "mediaType": "content",
                                    "osId": "org.ekstep.quiz.app",
                                    "lastPublishedBy": "b32fb1b6-e579-4406-881b-79b09609a1e5",
                                    "prevState": "Live",
                                    "lastPublishedOn": "2018-05-31T12:15:42.262+0000",
                                    "size": 64281,
                                    "concepts": [
                                        {
                                            "identifier": "BED30000",
                                            "name": "Perspectives_in_Education",
                                            "objectType": "Concept",
                                            "relation": "associatedTo",
                                            "description": null,
                                            "index": null,
                                            "status": null,
                                            "depth": null,
                                            "mimeType": null,
                                            "visibility": null,
                                            "compatibilityLevel": null
                                        }
                                    ],
                                    "name": "Infosys_Oracle_Practice_Nov-17",
                                    "status": "Live",
                                    "code": "28491834-2b1d-4358-ad8e-c82c18a6cc5c",
                                    "description": "Refer Excel",
                                    "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/beee6757847b84a1e41ce827ae02ccc7_1477485749628.jpeg",
                                    "idealScreenSize": "normal",
                                    "createdOn": "2017-12-19T06:04:51.894+0000",
                                    "contentDisposition": "inline",
                                    "lastUpdatedOn": "2018-05-31T12:15:42.142+0000",
                                    "createdFor": [
                                        "0123944009325690880",
                                        "ORG_001"
                                    ],
                                    "creator": "bodhi1 user",
                                    "os": [
                                        "All"
                                    ],
                                    "pkgVersion": 4,
                                    "versionKey": "1527768942142",
                                    "idealScreenDensity": "hdpi",
                                    "framework": "NCF",
                                    "s3Key": "ecar_files/do_2123999313255956481519/infosys_oracle_practice_nov-17_1527768942263_do_2123999313255956481519_4.0.ecar",
                                    "lastSubmittedOn": "2017-12-19T06:06:50.023+0000",
                                    "createdBy": "0b174e4f-eff1-44e9-b15e-415787470456",
                                    "compatibilityLevel": 1,
                                    "board": "CBSE",
                                    "resourceType": "Read"
                                },
                                {
                                    "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2123999338861608961523/dummy.mp4",
                                    "subject": "English",
                                    "channel": "b00bc992ef25f1a9a8d63291e20efc8d",
                                    "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999338861608961523/oracle-analytics-cloud_1527768942917_do_2123999338861608961523_4.0.ecar",
                                    "showNotification": true,
                                    "language": [
                                        "English"
                                    ],
                                    "variants": {
                                        "spine": {
                                            "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999338861608961523/oracle-analytics-cloud_1527768943013_do_2123999338861608961523_4.0_spine.ecar",
                                            "size": 50724
                                        }
                                    },
                                    "mimeType": "video/mp4",
                                    "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2123999338861608961523/artifact/beee6757847b84a1e41ce827ae02ccc7_1477485749628.thumb.jpeg",
                                    "gradeLevel": [
                                        "Class 1"
                                    ],
                                    "appId": "sunbird_portal",
                                    "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2123999338861608961523/dummy.mp4",
                                    "contentEncoding": "identity",
                                    "sYS_INTERNAL_LAST_UPDATED_ON": "2018-05-31T12:15:43.175+0000",
                                    "contentType": "Resource",
                                    "lastUpdatedBy": "0b174e4f-eff1-44e9-b15e-415787470456",
                                    "identifier": "do_2123999338861608961523",
                                    "audience": [
                                        "Learner"
                                    ],
                                    "visibility": "Default",
                                    "consumerId": "78de9e88-9263-4505-ae64-a06fd23744ca",
                                    "index": 2,
                                    "mediaType": "content",
                                    "osId": "org.ekstep.quiz.app",
                                    "lastPublishedBy": "0b174e4f-eff1-44e9-b15e-415787470456",
                                    "prevState": "Live",
                                    "lastPublishedOn": "2018-05-31T12:15:42.916+0000",
                                    "size": 64273,
                                    "concepts": [
                                        {
                                            "identifier": "BED30000",
                                            "name": "Perspectives_in_Education",
                                            "objectType": "Concept",
                                            "relation": "associatedTo",
                                            "description": null,
                                            "index": null,
                                            "status": null,
                                            "depth": null,
                                            "mimeType": null,
                                            "visibility": null,
                                            "compatibilityLevel": null
                                        }
                                    ],
                                    "name": "Oracle Analytics Cloud",
                                    "status": "Live",
                                    "code": "4ab22ae6-43e2-4cda-92b1-a8395a52aa0e",
                                    "description": "Refer Excel",
                                    "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/beee6757847b84a1e41ce827ae02ccc7_1477485749628.jpeg",
                                    "idealScreenSize": "normal",
                                    "createdOn": "2017-12-19T06:10:04.463+0000",
                                    "contentDisposition": "inline",
                                    "lastUpdatedOn": "2018-05-31T12:15:42.648+0000",
                                    "createdFor": [
                                        "0123944009325690880",
                                        "ORG_001"
                                    ],
                                    "creator": "bodhi2 user",
                                    "os": [
                                        "All"
                                    ],
                                    "pkgVersion": 4,
                                    "versionKey": "1527768942648",
                                    "idealScreenDensity": "hdpi",
                                    "framework": "NCF",
                                    "s3Key": "ecar_files/do_2123999338861608961523/oracle-analytics-cloud_1527768942917_do_2123999338861608961523_4.0.ecar",
                                    "lastSubmittedOn": "2017-12-19T06:11:31.675+0000",
                                    "createdBy": "b32fb1b6-e579-4406-881b-79b09609a1e5",
                                    "compatibilityLevel": 1,
                                    "board": "CBSE",
                                    "resourceType": "Read"
                                },
                                {
                                    "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2123999359659786241526/dummy.mp4",
                                    "subject": "English",
                                    "channel": "b00bc992ef25f1a9a8d63291e20efc8d",
                                    "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999359659786241526/oracle-hcm-systems-sales_1527768943523_do_2123999359659786241526_4.0.ecar",
                                    "showNotification": true,
                                    "language": [
                                        "English"
                                    ],
                                    "mimeType": "video/mp4",
                                    "variants": {
                                        "spine": {
                                            "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999359659786241526/oracle-hcm-systems-sales_1527768943660_do_2123999359659786241526_4.0_spine.ecar",
                                            "size": 50731
                                        }
                                    },
                                    "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2123999359659786241526/artifact/beee6757847b84a1e41ce827ae02ccc7_1477485749628.thumb.jpeg",
                                    "gradeLevel": [
                                        "Class 1"
                                    ],
                                    "appId": "sunbird_portal",
                                    "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2123999359659786241526/dummy.mp4",
                                    "contentEncoding": "identity",
                                    "sYS_INTERNAL_LAST_UPDATED_ON": "2018-05-31T12:15:43.802+0000",
                                    "contentType": "Resource",
                                    "lastUpdatedBy": "0b174e4f-eff1-44e9-b15e-415787470456",
                                    "identifier": "do_2123999359659786241526",
                                    "audience": [
                                        "Learner"
                                    ],
                                    "visibility": "Default",
                                    "consumerId": "78de9e88-9263-4505-ae64-a06fd23744ca",
                                    "index": 3,
                                    "mediaType": "content",
                                    "osId": "org.ekstep.quiz.app",
                                    "lastPublishedBy": "0b174e4f-eff1-44e9-b15e-415787470456",
                                    "prevState": "Live",
                                    "lastPublishedOn": "2018-05-31T12:15:43.523+0000",
                                    "size": 64280,
                                    "concepts": [
                                        {
                                            "identifier": "BED30000",
                                            "name": "Perspectives_in_Education",
                                            "objectType": "Concept",
                                            "relation": "associatedTo",
                                            "description": null,
                                            "index": null,
                                            "status": null,
                                            "depth": null,
                                            "mimeType": null,
                                            "visibility": null,
                                            "compatibilityLevel": null
                                        }
                                    ],
                                    "name": "Oracle HCM Systems - Sales",
                                    "status": "Live",
                                    "code": "3914a9a4-27a5-4594-b0c6-2bd18ad65a05",
                                    "description": "Refer Excel",
                                    "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/beee6757847b84a1e41ce827ae02ccc7_1477485749628.jpeg",
                                    "idealScreenSize": "normal",
                                    "createdOn": "2017-12-19T06:14:18.347+0000",
                                    "contentDisposition": "inline",
                                    "lastUpdatedOn": "2018-05-31T12:15:43.326+0000",
                                    "createdFor": [
                                        "0123944009325690880",
                                        "ORG_001"
                                    ],
                                    "creator": "bodhi2 user",
                                    "os": [
                                        "All"
                                    ],
                                    "pkgVersion": 4,
                                    "versionKey": "1527768943326",
                                    "idealScreenDensity": "hdpi",
                                    "framework": "NCF",
                                    "s3Key": "ecar_files/do_2123999359659786241526/oracle-hcm-systems-sales_1527768943523_do_2123999359659786241526_4.0.ecar",
                                    "lastSubmittedOn": "2017-12-19T06:16:41.416+0000",
                                    "createdBy": "b32fb1b6-e579-4406-881b-79b09609a1e5",
                                    "compatibilityLevel": 1,
                                    "board": "CBSE",
                                    "resourceType": "Read"
                                },
                                {
                                    "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2123999393908736001531/dummy.mp4",
                                    "subject": "English",
                                    "channel": "b00bc992ef25f1a9a8d63291e20efc8d",
                                    "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999393908736001531/oracle-mktg-content-for-sales-team-opn_1527768944992_do_2123999393908736001531_4.0.ecar",
                                    "showNotification": true,
                                    "language": [
                                        "English"
                                    ],
                                    "variants": {
                                        "spine": {
                                            "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999393908736001531/oracle-mktg-content-for-sales-team-opn_1527768945208_do_2123999393908736001531_4.0_spine.ecar",
                                            "size": 50742
                                        }
                                    },
                                    "mimeType": "video/mp4",
                                    "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2123999393908736001531/artifact/beee6757847b84a1e41ce827ae02ccc7_1477485749628.thumb.jpeg",
                                    "gradeLevel": [
                                        "Class 1"
                                    ],
                                    "appId": "sunbird_portal",
                                    "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2123999393908736001531/dummy.mp4",
                                    "contentEncoding": "identity",
                                    "sYS_INTERNAL_LAST_UPDATED_ON": "2018-05-31T12:15:45.341+0000",
                                    "contentType": "Resource",
                                    "lastUpdatedBy": "0b174e4f-eff1-44e9-b15e-415787470456",
                                    "identifier": "do_2123999393908736001531",
                                    "audience": [
                                        "Learner"
                                    ],
                                    "visibility": "Default",
                                    "consumerId": "78de9e88-9263-4505-ae64-a06fd23744ca",
                                    "index": 4,
                                    "mediaType": "content",
                                    "osId": "org.ekstep.quiz.app",
                                    "lastPublishedBy": "0b174e4f-eff1-44e9-b15e-415787470456",
                                    "prevState": "Live",
                                    "lastPublishedOn": "2018-05-31T12:15:44.992+0000",
                                    "size": 64292,
                                    "concepts": [
                                        {
                                            "identifier": "BED30000",
                                            "name": "Perspectives_in_Education",
                                            "objectType": "Concept",
                                            "relation": "associatedTo",
                                            "description": null,
                                            "index": null,
                                            "status": null,
                                            "depth": null,
                                            "mimeType": null,
                                            "visibility": null,
                                            "compatibilityLevel": null
                                        }
                                    ],
                                    "name": "Oracle Mktg content for Sales team-OPN",
                                    "status": "Live",
                                    "code": "1e06c8e8-8bc9-4dab-be33-860a0ecdc936",
                                    "description": "refer excel",
                                    "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/beee6757847b84a1e41ce827ae02ccc7_1477485749628.jpeg",
                                    "idealScreenSize": "normal",
                                    "createdOn": "2017-12-19T06:21:16.425+0000",
                                    "contentDisposition": "inline",
                                    "lastUpdatedOn": "2018-05-31T12:15:44.708+0000",
                                    "createdFor": [
                                        "0123944009325690880",
                                        "ORG_001"
                                    ],
                                    "creator": "bodhi2 user",
                                    "os": [
                                        "All"
                                    ],
                                    "pkgVersion": 4,
                                    "versionKey": "1527768944708",
                                    "idealScreenDensity": "hdpi",
                                    "s3Key": "ecar_files/do_2123999393908736001531/oracle-mktg-content-for-sales-team-opn_1527768944992_do_2123999393908736001531_4.0.ecar",
                                    "framework": "NCF",
                                    "lastSubmittedOn": "2017-12-19T06:23:21.559+0000",
                                    "createdBy": "b32fb1b6-e579-4406-881b-79b09609a1e5",
                                    "compatibilityLevel": 1,
                                    "board": "CBSE",
                                    "resourceType": "Read"
                                },
                                {
                                    "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2123999412799979521537/dummy.mp4",
                                    "subject": "English",
                                    "channel": "b00bc992ef25f1a9a8d63291e20efc8d",
                                    "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999412799979521537/oracle_business-intelligence-on-cloud_1527768945654_do_2123999412799979521537_4.0.ecar",
                                    "showNotification": true,
                                    "language": [
                                        "English"
                                    ],
                                    "variants": {
                                        "spine": {
                                            "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999412799979521537/oracle_business-intelligence-on-cloud_1527768945837_do_2123999412799979521537_4.0_spine.ecar",
                                            "size": 50741
                                        }
                                    },
                                    "mimeType": "video/mp4",
                                    "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2123999412799979521537/artifact/beee6757847b84a1e41ce827ae02ccc7_1477485749628.thumb.jpeg",
                                    "gradeLevel": [
                                        "Class 1"
                                    ],
                                    "appId": "sunbird_portal",
                                    "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2123999412799979521537/dummy.mp4",
                                    "contentEncoding": "identity",
                                    "sYS_INTERNAL_LAST_UPDATED_ON": "2018-05-31T12:15:46.001+0000",
                                    "contentType": "Resource",
                                    "lastUpdatedBy": "0b174e4f-eff1-44e9-b15e-415787470456",
                                    "identifier": "do_2123999412799979521537",
                                    "audience": [
                                        "Learner"
                                    ],
                                    "visibility": "Default",
                                    "consumerId": "78de9e88-9263-4505-ae64-a06fd23744ca",
                                    "index": 5,
                                    "mediaType": "content",
                                    "osId": "org.ekstep.quiz.app",
                                    "lastPublishedBy": "0b174e4f-eff1-44e9-b15e-415787470456",
                                    "prevState": "Live",
                                    "lastPublishedOn": "2018-05-31T12:15:45.654+0000",
                                    "size": 64290,
                                    "concepts": [
                                        {
                                            "identifier": "BED30000",
                                            "name": "Perspectives_in_Education",
                                            "objectType": "Concept",
                                            "relation": "associatedTo",
                                            "description": null,
                                            "index": null,
                                            "status": null,
                                            "depth": null,
                                            "mimeType": null,
                                            "visibility": null,
                                            "compatibilityLevel": null
                                        }
                                    ],
                                    "name": "Oracle_Business Intelligence on Cloud",
                                    "status": "Live",
                                    "code": "38963e57-d933-4009-9e50-a783c1cc2db8",
                                    "description": "refer excel",
                                    "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/beee6757847b84a1e41ce827ae02ccc7_1477485749628.jpeg",
                                    "idealScreenSize": "normal",
                                    "createdOn": "2017-12-19T06:25:07.031+0000",
                                    "contentDisposition": "inline",
                                    "lastUpdatedOn": "2018-05-31T12:15:45.540+0000",
                                    "createdFor": [
                                        "0123944009325690880",
                                        "ORG_001"
                                    ],
                                    "creator": "bodhi2 user",
                                    "os": [
                                        "All"
                                    ],
                                    "pkgVersion": 4,
                                    "versionKey": "1527768945540",
                                    "idealScreenDensity": "hdpi",
                                    "s3Key": "ecar_files/do_2123999412799979521537/oracle_business-intelligence-on-cloud_1527768945654_do_2123999412799979521537_4.0.ecar",
                                    "framework": "NCF",
                                    "lastSubmittedOn": "2017-12-19T06:26:49.532+0000",
                                    "createdBy": "b32fb1b6-e579-4406-881b-79b09609a1e5",
                                    "compatibilityLevel": 1,
                                    "board": "CBSE",
                                    "resourceType": "Read"
                                },
                                {
                                    "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2123999426959196161540/dummy.mp4",
                                    "subject": "English",
                                    "channel": "b00bc992ef25f1a9a8d63291e20efc8d",
                                    "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999426959196161540/siebelopenui_salesportal_1527768946224_do_2123999426959196161540_4.0.ecar",
                                    "showNotification": true,
                                    "language": [
                                        "English"
                                    ],
                                    "variants": {
                                        "spine": {
                                            "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999426959196161540/siebelopenui_salesportal_1527768946366_do_2123999426959196161540_4.0_spine.ecar",
                                            "size": 50723
                                        }
                                    },
                                    "mimeType": "video/mp4",
                                    "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2123999426959196161540/artifact/beee6757847b84a1e41ce827ae02ccc7_1477485749628.thumb.jpeg",
                                    "gradeLevel": [
                                        "Class 1"
                                    ],
                                    "appId": "sunbird_portal",
                                    "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2123999426959196161540/dummy.mp4",
                                    "contentEncoding": "identity",
                                    "sYS_INTERNAL_LAST_UPDATED_ON": "2018-05-31T12:15:46.532+0000",
                                    "contentType": "Resource",
                                    "lastUpdatedBy": "0b174e4f-eff1-44e9-b15e-415787470456",
                                    "identifier": "do_2123999426959196161540",
                                    "audience": [
                                        "Learner"
                                    ],
                                    "visibility": "Default",
                                    "consumerId": "78de9e88-9263-4505-ae64-a06fd23744ca",
                                    "index": 6,
                                    "mediaType": "content",
                                    "osId": "org.ekstep.quiz.app",
                                    "lastPublishedBy": "0b174e4f-eff1-44e9-b15e-415787470456",
                                    "prevState": "Live",
                                    "lastPublishedOn": "2018-05-31T12:15:46.224+0000",
                                    "size": 64272,
                                    "concepts": [
                                        {
                                            "identifier": "BED30000",
                                            "name": "Perspectives_in_Education",
                                            "objectType": "Concept",
                                            "relation": "associatedTo",
                                            "description": null,
                                            "index": null,
                                            "status": null,
                                            "depth": null,
                                            "mimeType": null,
                                            "visibility": null,
                                            "compatibilityLevel": null
                                        }
                                    ],
                                    "name": "SiebelOpenUI_SalesPortal",
                                    "status": "Live",
                                    "code": "acb90aba-2513-4763-9d3c-05a66ccb4b81",
                                    "description": "refer excel",
                                    "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/beee6757847b84a1e41ce827ae02ccc7_1477485749628.jpeg",
                                    "idealScreenSize": "normal",
                                    "createdOn": "2017-12-19T06:27:59.873+0000",
                                    "contentDisposition": "inline",
                                    "lastUpdatedOn": "2018-05-31T12:15:46.093+0000",
                                    "createdFor": [
                                        "0123944009325690880",
                                        "ORG_001"
                                    ],
                                    "creator": "bodhi2 user",
                                    "os": [
                                        "All"
                                    ],
                                    "pkgVersion": 4,
                                    "versionKey": "1527768946093",
                                    "idealScreenDensity": "hdpi",
                                    "framework": "NCF",
                                    "s3Key": "ecar_files/do_2123999426959196161540/siebelopenui_salesportal_1527768946224_do_2123999426959196161540_4.0.ecar",
                                    "lastSubmittedOn": "2017-12-19T06:29:48.609+0000",
                                    "createdBy": "b32fb1b6-e579-4406-881b-79b09609a1e5",
                                    "compatibilityLevel": 1,
                                    "board": "CBSE",
                                    "resourceType": "Read"
                                }
                            ],
                            "appId": "sunbird_portal",
                            "contentEncoding": "gzip",
                            "mimeTypesCount": "{\"video/mp4\":6}",
                            "contentType": "Collection",
                            "sYS_INTERNAL_LAST_UPDATED_ON": "2018-07-03T10:24:42.182+0000",
                            "lastUpdatedBy": "b32fb1b6-e579-4406-881b-79b09609a1e5",
                            "identifier": "do_2123999507628441601548",
                            "audience": [
                                "Learner"
                            ],
                            "toc_url": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2123999507628441601548/artifact/do_2123999507628441601548toc.json",
                            "visibility": "Default",
                            "contentTypesCount": "{\"Resource\":6}",
                            "childNodes": [
                                "do_2123999359659786241526",
                                "do_2123999426959196161540",
                                "do_2123999393908736001531",
                                "do_2123999412799979521537",
                                "do_2123999313255956481519",
                                "do_2123999338861608961523"
                            ],
                            "consumerId": "78de9e88-9263-4505-ae64-a06fd23744ca",
                            "index": 2,
                            "mediaType": "content",
                            "osId": "org.ekstep.quiz.app",
                            "lastPublishedBy": "b32fb1b6-e579-4406-881b-79b09609a1e5",
                            "prevState": "Live",
                            "size": 349219,
                            "lastPublishedOn": "2018-07-03T10:24:41.409+0000",
                            "concepts": [
                                {
                                    "identifier": "BED30000",
                                    "name": "Perspectives_in_Education",
                                    "objectType": "Concept",
                                    "relation": "associatedTo",
                                    "description": null,
                                    "index": null,
                                    "status": null,
                                    "depth": null,
                                    "mimeType": null,
                                    "visibility": null,
                                    "compatibilityLevel": null
                                }
                            ],
                            "name": "Oracle",
                            "status": "Live",
                            "code": "org.sunbird.GUPfUb",
                            "description": "Refer Excel",
                            "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/beee6757847b84a1e41ce827ae02ccc7_1477485749628.jpeg",
                            "idealScreenSize": "normal",
                            "createdOn": "2017-12-19T06:44:24.605+0000",
                            "contentDisposition": "inline",
                            "lastUpdatedOn": "2018-07-03T10:24:40.976+0000",
                            "createdFor": [
                                "0123944009325690880",
                                "ORG_001"
                            ],
                            "creator": "bodhi1user",
                            "os": [
                                "All"
                            ],
                            "pkgVersion": 6,
                            "versionKey": "1530613480976",
                            "idealScreenDensity": "hdpi",
                            "framework": "NCF",
                            "s3Key": "ecar_files/do_2123999507628441601548/oracle_1530613481442_do_2123999507628441601548_6.0_spine.ecar",
                            "lastSubmittedOn": "2017-12-19T07:06:48.059+0000",
                            "createdBy": "0b174e4f-eff1-44e9-b15e-415787470456",
                            "leafNodesCount": 6,
                            "compatibilityLevel": 1,
                            "board": "CBSE",
                            "resourceType": "Collection"
                        },
                        {
                            "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2125139721311354881514/amy-cuddy-more-confidence-in-2-minutes-condensed-talk.mp4",
                            "keywords": [
                                "Ch 6"
                            ],
                            "subject": "English",
                            "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2125139721311354881514/ch-6_1527769832872_do_2125139721311354881514_2.0.ecar",
                            "channel": "in.ekstep",
                            "language": [
                                "English"
                            ],
                            "variants": {
                                "spine": {
                                    "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2125139721311354881514/ch-6_1527769835084_do_2125139721311354881514_2.0_spine.ecar",
                                    "size": 14630
                                }
                            },
                            "mimeType": "video/mp4",
                            "gradeLevel": [
                                "Class 1"
                            ],
                            "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2125139721311354881514/artifact/c01d727c0adf4782a959fd96613b0fc2_1478084692560.thumb.jpeg",
                            "appId": "staging.diksha.portal",
                            "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2125139721311354881514/amy-cuddy-more-confidence-in-2-minutes-condensed-talk.mp4",
                            "contentEncoding": "identity",
                            "contentType": "Resource",
                            "sYS_INTERNAL_LAST_UPDATED_ON": "2018-05-31T12:30:35.214+0000",
                            "lastUpdatedBy": "a0ccd498-750e-479e-8556-903b3b9c32bf",
                            "identifier": "do_2125139721311354881514",
                            "audience": [
                                "Learner"
                            ],
                            "publishChecklist": [
                                "No Hate speech, Abuse, Violence, Profanity",
                                "No Sexual content, Nudity or Vulgarity",
                                "No Discrimination or Defamation",
                                "Is suitable for children",
                                "Appropriate Title, Description",
                                "Correct Board, Grade, Subject, Medium",
                                "Appropriate tags such as Resource Type, Concepts",
                                "Relevant Keywords",
                                "Content plays correctly",
                                "Can see the content clearly on Desktop and App",
                                "Audio (if any) is clear and easy to understand",
                                "No Spelling mistakes in the text",
                                "Language is simple to understand"
                            ],
                            "visibility": "Default",
                            "consumerId": "fa271a76-c15a-4aa1-adff-31dd04682a1f",
                            "index": 3,
                            "mediaType": "content",
                            "osId": "org.ekstep.quiz.app",
                            "lastPublishedBy": "a0ccd498-750e-479e-8556-903b3b9c32bf",
                            "tags": [
                                "Ch 6"
                            ],
                            "prevState": "Live",
                            "lastPublishedOn": "2018-05-31T12:30:32.871+0000",
                            "size": 25745705,
                            "concepts": [
                                {
                                    "identifier": "AI33",
                                    "name": "Perceptron",
                                    "objectType": "Concept",
                                    "relation": "associatedTo",
                                    "description": null,
                                    "index": null,
                                    "status": null,
                                    "depth": null,
                                    "mimeType": null,
                                    "visibility": null,
                                    "compatibilityLevel": null
                                }
                            ],
                            "name": "Ch 6",
                            "status": "Live",
                            "code": "8607dab1-b9a6-414c-81c6-cad63ce6ad5a",
                            "description": "Ch 6",
                            "medium": "English",
                            "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_20051866/artifact/c01d727c0adf4782a959fd96613b0fc2_1478084692560.jpeg",
                            "idealScreenSize": "normal",
                            "createdOn": "2018-05-29T09:01:28.663+0000",
                            "contentDisposition": "inline",
                            "lastUpdatedOn": "2018-05-31T12:30:32.685+0000",
                            "createdFor": [
                                "0125053927550320640"
                            ],
                            "creator": "Ekstep User2",
                            "os": [
                                "All"
                            ],
                            "pkgVersion": 2,
                            "versionKey": "1527769832685",
                            "idealScreenDensity": "hdpi",
                            "framework": "NCF",
                            "s3Key": "ecar_files/do_2125139721311354881514/ch-6_1527769832872_do_2125139721311354881514_2.0.ecar",
                            "lastSubmittedOn": "2018-05-29T09:03:17.617+0000",
                            "createdBy": "1c0d0dc1-5e47-4ca8-894a-4e55a3292eb1",
                            "compatibilityLevel": 1,
                            "board": "CBSE",
                            "resourceType": "Learn"
                        },
                        {
                            "previewUrl": "https://www.youtube.com/watch?v=bmECR_eHN1k",
                            "subject": "English",
                            "channel": "012315809814749184151",
                            "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2124347141266391041106/rr_youtube_1527769133481_do_2124347141266391041106_4.0.ecar",
                            "showNotification": true,
                            "language": [
                                "English"
                            ],
                            "variants": {
                                "spine": {
                                    "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2124347141266391041106/rr_youtube_1527769133565_do_2124347141266391041106_4.0_spine.ecar",
                                    "size": 7370
                                }
                            },
                            "mimeType": "video/x-youtube",
                            "gradeLevel": [
                                "Class 1"
                            ],
                            "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2124006248428994561712/artifact/download_1513748149940.jpg",
                            "appId": "staging.sunbird.portal",
                            "contentEncoding": "identity",
                            "artifactUrl": "https://www.youtube.com/watch?v=bmECR_eHN1k",
                            "contentType": "Resource",
                            "sYS_INTERNAL_LAST_UPDATED_ON": "2018-05-31T12:18:53.708+0000",
                            "lastUpdatedBy": "659b011a-06ec-4107-84ad-955e16b0a48a",
                            "identifier": "do_2124347141266391041106",
                            "audience": [
                                "Learner"
                            ],
                            "visibility": "Default",
                            "consumerId": "fa271a76-c15a-4aa1-adff-31dd04682a1f",
                            "index": 6,
                            "mediaType": "content",
                            "osId": "org.ekstep.quiz.app",
                            "lastPublishedBy": "68777b59-b28b-4aee-88d6-50d46e4c3509",
                            "pragma": [
                                "external"
                            ],
                            "prevState": "Live",
                            "size": 7369,
                            "lastPublishedOn": "2018-05-31T12:18:53.481+0000",
                            "concepts": [
                                {
                                    "identifier": "LO39",
                                    "name": "Akshara Recognition",
                                    "objectType": "Concept",
                                    "relation": "associatedTo",
                                    "description": "Akshara Recognition",
                                    "index": null,
                                    "status": null,
                                    "depth": null,
                                    "mimeType": null,
                                    "visibility": null,
                                    "compatibilityLevel": null
                                }
                            ],
                            "name": "rr_youtube",
                            "status": "Live",
                            "code": "0b373b56-ca9d-4509-99b3-2eb5eb6d0e5c",
                            "flags": [
                                ""
                            ],
                            "description": "xcvbnhjmkl;",
                            "lastFlaggedOn": "2018-06-09T11:54:11.102+0000",
                            "idealScreenSize": "normal",
                            "flaggedBy": [
                                "659b011a-06ec-4107-84ad-955e16b0a48a"
                            ],
                            "createdOn": "2018-02-06T09:30:39.287+0000",
                            "contentDisposition": "online",
                            "lastUpdatedOn": "2018-06-12T09:20:04.009+0000",
                            "createdFor": [
                                "01232002070124134414",
                                "012315809814749184151"
                            ],
                            "creator": "ihn User 12345",
                            "os": [
                                "All"
                            ],
                            "pkgVersion": 4,
                            "versionKey": "1528795204009",
                            "idealScreenDensity": "hdpi",
                            "s3Key": "ecar_files/do_2124347141266391041106/rr_youtube_1527769133481_do_2124347141266391041106_4.0.ecar",
                            "framework": "NCF",
                            "lastSubmittedOn": "2018-02-06T09:35:44.933+0000",
                            "createdBy": "659b011a-06ec-4107-84ad-955e16b0a48a",
                            "compatibilityLevel": 4,
                            "board": "CBSE",
                            "resourceType": "Read"
                        },
                        {
                            "previewUrl": "https://www.youtube.com/watch?v=S78DMLYb8Pw",
                            "subject": "English",
                            "channel": "012315809814749184151",
                            "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2124665501932503041352/subrat_1527769418450_do_2124665501932503041352_4.0.ecar",
                            "showNotification": true,
                            "language": [
                                "English"
                            ],
                            "variants": {
                                "spine": {
                                    "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2124665501932503041352/subrat_1527769418523_do_2124665501932503041352_4.0_spine.ecar",
                                    "size": 5466
                                }
                            },
                            "mimeType": "video/x-youtube",
                            "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2124665501932503041352/artifact/1-1_1485252935201.thumb.png",
                            "gradeLevel": [
                                "Class 1"
                            ],
                            "appId": "sunbird_portal",
                            "artifactUrl": "https://www.youtube.com/watch?v=S78DMLYb8Pw",
                            "contentEncoding": "identity",
                            "contentType": "Resource",
                            "sYS_INTERNAL_LAST_UPDATED_ON": "2018-05-31T12:23:38.784+0000",
                            "lastUpdatedBy": "68777b59-b28b-4aee-88d6-50d46e4c3509",
                            "identifier": "do_2124665501932503041352",
                            "audience": [
                                "Learner"
                            ],
                            "visibility": "Default",
                            "consumerId": "fa271a76-c15a-4aa1-adff-31dd04682a1f",
                            "index": 7,
                            "mediaType": "content",
                            "osId": "org.ekstep.quiz.app",
                            "lastPublishedBy": "68777b59-b28b-4aee-88d6-50d46e4c3509",
                            "pragma": [
                                "external"
                            ],
                            "prevState": "Live",
                            "license": "Standard YouTube License",
                            "lastPublishedOn": "2018-05-31T12:23:38.450+0000",
                            "size": 5466,
                            "concepts": [
                                {
                                    "identifier": "AI35",
                                    "name": "Softmax",
                                    "objectType": "Concept",
                                    "relation": "associatedTo",
                                    "description": null,
                                    "index": null,
                                    "status": null,
                                    "depth": null,
                                    "mimeType": null,
                                    "visibility": null,
                                    "compatibilityLevel": null
                                }
                            ],
                            "name": "subrat",
                            "status": "Live",
                            "code": "1e95ae1b-117d-47aa-a41c-1bd740386111",
                            "description": "hii",
                            "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/1-1_1485252935201.png",
                            "idealScreenSize": "normal",
                            "createdOn": "2018-03-23T09:01:17.886+0000",
                            "contentDisposition": "online",
                            "lastUpdatedOn": "2018-05-31T12:23:38.355+0000",
                            "createdFor": [
                                "01232002070124134414",
                                "012315809814749184151"
                            ],
                            "creator": "Telemetry User",
                            "os": [
                                "All"
                            ],
                            "pkgVersion": 4,
                            "versionKey": "1527769418355",
                            "idealScreenDensity": "hdpi",
                            "s3Key": "ecar_files/do_2124665501932503041352/subrat_1527769418450_do_2124665501932503041352_4.0.ecar",
                            "framework": "NCF",
                            "lastSubmittedOn": "2018-03-23T09:02:52.626+0000",
                            "createdBy": "659b011a-06ec-4107-84ad-955e16b0a48a",
                            "compatibilityLevel": 4,
                            "board": "CBSE",
                            "resourceType": "Play"
                        }
                    ],
                    "contentDisposition": "inline",
                    "contentEncoding": "gzip",
                    "lastUpdatedOn": "2018-07-04T05:16:42.318+0000",
                    "sYS_INTERNAL_LAST_UPDATED_ON": "2018-07-04T05:23:05.612+0000",
                    "contentType": "TextBookUnit",
                    "identifier": "do_2125393420477890561264",
                    "audience": [
                        "Learner"
                    ],
                    "os": [
                        "All"
                    ],
                    "visibility": "Parent",
                    "index": 1,
                    "mediaType": "content",
                    "osId": "org.ekstep.launcher",
                    "pkgVersion": 1,
                    "versionKey": "1530681402318",
                    "tags": [
                        "cewecewcewcewwe"
                    ],
                    "idealScreenDensity": "hdpi",
                    "s3Key": "ecar_files/do_2125393420477890561264/bookbook12345_1530681785232_do_2125393420477890561264_1.0_spine.ecar",
                    "lastPublishedOn": "2018-07-04T05:23:05.076+0000",
                    "size": 623898,
                    "concepts": [
                        {
                            "identifier": "AI33",
                            "name": "Perceptron",
                            "objectType": "Concept",
                            "relation": "associatedTo",
                            "description": null,
                            "index": null,
                            "status": null,
                            "depth": null,
                            "mimeType": null,
                            "visibility": null,
                            "compatibilityLevel": null
                        },
                        {
                            "identifier": "AI35",
                            "name": "Softmax",
                            "objectType": "Concept",
                            "relation": "associatedTo",
                            "description": null,
                            "index": null,
                            "status": null,
                            "depth": null,
                            "mimeType": null,
                            "visibility": null,
                            "compatibilityLevel": null
                        },
                        {
                            "identifier": "AI12",
                            "name": "Regression_Analysis",
                            "objectType": "Concept",
                            "relation": "associatedTo",
                            "description": null,
                            "index": null,
                            "status": null,
                            "depth": null,
                            "mimeType": null,
                            "visibility": null,
                            "compatibilityLevel": null
                        },
                        {
                            "identifier": "AI11",
                            "name": "Support_Vector_Machine",
                            "objectType": "Concept",
                            "relation": "associatedTo",
                            "description": null,
                            "index": null,
                            "status": null,
                            "depth": null,
                            "mimeType": null,
                            "visibility": null,
                            "compatibilityLevel": null
                        },
                        {
                            "identifier": "AI15",
                            "name": "Principal_Component_Analysis",
                            "objectType": "Concept",
                            "relation": "associatedTo",
                            "description": null,
                            "index": null,
                            "status": null,
                            "depth": null,
                            "mimeType": null,
                            "visibility": null,
                            "compatibilityLevel": null
                        },
                        {
                            "identifier": "AI16",
                            "name": "Stochastic_Gradient_Descent",
                            "objectType": "Concept",
                            "relation": "associatedTo",
                            "description": null,
                            "index": null,
                            "status": null,
                            "depth": null,
                            "mimeType": null,
                            "visibility": null,
                            "compatibilityLevel": null
                        },
                        {
                            "identifier": "AI13",
                            "name": "Supervised_Learning",
                            "objectType": "Concept",
                            "relation": "associatedTo",
                            "description": null,
                            "index": null,
                            "status": null,
                            "depth": null,
                            "mimeType": null,
                            "visibility": null,
                            "compatibilityLevel": null
                        },
                        {
                            "identifier": "AI37",
                            "name": "RELU",
                            "objectType": "Concept",
                            "relation": "associatedTo",
                            "description": null,
                            "index": null,
                            "status": null,
                            "depth": null,
                            "mimeType": null,
                            "visibility": null,
                            "compatibilityLevel": null
                        },
                        {
                            "identifier": "AI14",
                            "name": "Unsupervised_Learning",
                            "objectType": "Concept",
                            "relation": "associatedTo",
                            "description": null,
                            "index": null,
                            "status": null,
                            "depth": null,
                            "mimeType": null,
                            "visibility": null,
                            "compatibilityLevel": null
                        }
                    ],
                    "compatibilityLevel": 1,
                    "name": "BookBook12345",
                    "status": "Live"
                }
            ],
            "appId": "staging.sunbird.portal",
            "contentEncoding": "gzip",
            "mimeTypesCount": "{\"application/vnd.ekstep.content-collection\":3,\"application/vnd.ekstep.ecml-archive\":1,\"video/x-youtube\":2,\"video/mp4\":11}",
            "contentType": "TextBook",
            "sYS_INTERNAL_LAST_UPDATED_ON": "2018-07-04T05:23:07.463+0000",
            "lastUpdatedBy": "68777b59-b28b-4aee-88d6-50d46e4c3509",
            "identifier": "do_2125393416328806401261",
            "audience": [
                "Learner"
            ],
            "publishChecklist": [
                "No Hate speech, Abuse, Violence, Profanity",
                "No Sexual content, Nudity or Vulgarity",
                "No Discrimination or Defamation",
                "Is suitable for children",
                "Relevant Keywords",
                "Correct Board, Grade, Subject, Medium",
                "Appropriate Title, Description",
                "Appropriate tags such as Resource Type, Concepts",
                "Content plays correctly",
                "Can see the content clearly on Desktop and App",
                "Audio (if any) is clear and easy to understand",
                "No Spelling mistakes in the text",
                "Language is simple to understand"
            ],
            "toc_url": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2125393416328806401261/artifact/do_2125393416328806401261toc.json",
            "visibility": "Default",
            "contentTypesCount": "{\"TextBookUnit\":1,\"Resource\":14,\"Collection\":2}",
            "childNodes": [
                "do_2125139721311354881514",
                "do_2123999359659786241526",
                "do_2123999426959196161540",
                "do_2123999393908736001531",
                "do_2124347141266391041106",
                "do_2123999168105512961495",
                "do_21244184257548288011854",
                "do_2123999313255956481519",
                "do_2123999507628441601548",
                "do_2125393420477890561264",
                "do_2123999198485053441504",
                "do_2123999412799979521537",
                "do_2123999194039664641503",
                "do_2123999141994987521488",
                "do_2123999338861608961523",
                "do_2123993503202263041424",
                "do_2124665501932503041352"
            ],
            "consumerId": "fa271a76-c15a-4aa1-adff-31dd04682a1f",
            "mediaType": "content",
            "osId": "org.ekstep.quiz.app",
            "lastPublishedBy": "68777b59-b28b-4aee-88d6-50d46e4c3509",
            "tags": [
                "vewvrereverre",
                "cewecewcewcewwe"
            ],
            "prevState": "Review",
            "lastPublishedOn": "2018-07-04T05:23:06.437+0000",
            "size": 681101,
            "concepts": [
                {
                    "identifier": "AI16",
                    "name": "Stochastic_Gradient_Descent",
                    "objectType": "Concept",
                    "relation": "associatedTo",
                    "description": null,
                    "index": null,
                    "status": null,
                    "depth": null,
                    "mimeType": null,
                    "visibility": null,
                    "compatibilityLevel": null
                },
                {
                    "identifier": "AI13",
                    "name": "Supervised_Learning",
                    "objectType": "Concept",
                    "relation": "associatedTo",
                    "description": null,
                    "index": null,
                    "status": null,
                    "depth": null,
                    "mimeType": null,
                    "visibility": null,
                    "compatibilityLevel": null
                },
                {
                    "identifier": "AI14",
                    "name": "Unsupervised_Learning",
                    "objectType": "Concept",
                    "relation": "associatedTo",
                    "description": null,
                    "index": null,
                    "status": null,
                    "depth": null,
                    "mimeType": null,
                    "visibility": null,
                    "compatibilityLevel": null
                },
                {
                    "identifier": "AI12",
                    "name": "Regression_Analysis",
                    "objectType": "Concept",
                    "relation": "associatedTo",
                    "description": null,
                    "index": null,
                    "status": null,
                    "depth": null,
                    "mimeType": null,
                    "visibility": null,
                    "compatibilityLevel": null
                },
                {
                    "identifier": "AI15",
                    "name": "Principal_Component_Analysis",
                    "objectType": "Concept",
                    "relation": "associatedTo",
                    "description": null,
                    "index": null,
                    "status": null,
                    "depth": null,
                    "mimeType": null,
                    "visibility": null,
                    "compatibilityLevel": null
                },
                {
                    "identifier": "AI37",
                    "name": "RELU",
                    "objectType": "Concept",
                    "relation": "associatedTo",
                    "description": null,
                    "index": null,
                    "status": null,
                    "depth": null,
                    "mimeType": null,
                    "visibility": null,
                    "compatibilityLevel": null
                },
                {
                    "identifier": "AI35",
                    "name": "Softmax",
                    "objectType": "Concept",
                    "relation": "associatedTo",
                    "description": null,
                    "index": null,
                    "status": null,
                    "depth": null,
                    "mimeType": null,
                    "visibility": null,
                    "compatibilityLevel": null
                },
                {
                    "identifier": "AI33",
                    "name": "Perceptron",
                    "objectType": "Concept",
                    "relation": "associatedTo",
                    "description": null,
                    "index": null,
                    "status": null,
                    "depth": null,
                    "mimeType": null,
                    "visibility": null,
                    "compatibilityLevel": null
                },
                {
                    "identifier": "AI11",
                    "name": "Support_Vector_Machine",
                    "objectType": "Concept",
                    "relation": "associatedTo",
                    "description": null,
                    "index": null,
                    "status": null,
                    "depth": null,
                    "mimeType": null,
                    "visibility": null,
                    "compatibilityLevel": null
                }
            ],
            "name": "BookBook12345",
            "publisher": "cewewcew",
            "status": "Live",
            "code": "org.sunbird.2xBzVr",
            "description": "Untitled Collection",
            "medium": "English",
            "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2125393430357934081265/artifact/cool-fb-profile-pictures-anonymous-facbook-profile-picture_1530681523277.jpg",
            "publishComment": "",
            "idealScreenSize": "normal",
            "createdOn": "2018-07-04T05:15:51.669+0000",
            "contentDisposition": "inline",
            "lastUpdatedOn": "2018-07-04T05:23:04.964+0000",
            "createdFor": [
                "01232002070124134414",
                "012315809814749184151"
            ],
            "creator": "creator12345 Test",
            "os": [
                "All"
            ],
            "pkgVersion": 1,
            "versionKey": "1530681784964",
            "idealScreenDensity": "hdpi",
            "s3Key": "ecar_files/do_2125393416328806401261/bookbook12345_1530681786772_do_2125393416328806401261_1.0_spine.ecar",
            "framework": "NCF",
            "lastSubmittedOn": "2018-07-04T05:18:58.881+0000",
            "createdBy": "659b011a-06ec-4107-84ad-955e16b0a48a",
            "leafNodesCount": 14,
            "compatibilityLevel": 1,
            "board": "CBSE",
            "resourceType": "Book",
            "orgDetails": {}
        };
    }
    DemoTocComponent.prototype.ngOnInit = function () {
    };
    DemoTocComponent.prototype.embedUrl = function (text) {
        if (text) {
            var urlRegex = /(https?:\/\/[^\s]+)/g;
            return text.replace(urlRegex, '<a href="$1">$1</a>');
        }
    };
    DemoTocComponent.prototype.onNoContentAvailable = function (event) {
        console.log("event no content available", event);
    };
    DemoTocComponent.prototype.tocCardClickHandler = function (event) {
        console.log('tocCardClickHandler', event);
        this.activeContent = event.data;
    };
    DemoTocComponent.prototype.selectedFilter = function (event) {
        console.log('mimetype filter output : ', event);
        this.activeMimeTypeFilter = event.data.value;
    };
    DemoTocComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-demo-toc',
            template: __webpack_require__(/*! ./demo-toc.component.html */ "./src/app/demo-full/demo-toc/demo-toc.component.html"),
            styles: [__webpack_require__(/*! ./demo-toc.component.scss */ "./src/app/demo-full/demo-toc/demo-toc.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service__WEBPACK_IMPORTED_MODULE_2__["AppSharedService"]])
    ], DemoTocComponent);
    return DemoTocComponent;
}());



/***/ }),

/***/ "./src/app/demo-full/home/home.component.html":
/*!****************************************************!*\
  !*** ./src/app/demo-full/home/home.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar>\n\n</app-navbar>\n\n<div class=\"main-container container-fluid\">\n  <!-- Page Container -->\n  <div class=\"page-container\">\n    <!-- Page Sidebar -->\n    <app-sidebar>\n\n    </app-sidebar>\n    <!-- /Page Sidebar -->\n\n\n    <!-- Main content-->\n\n    <div class=\"page-content\" [ngStyle]=\"!appSharedService.sideBarVisible && {'margin-left' :'43px'}\">\n      <div class=\"page-header position-relative\">\n        <div class=\"header-title\">\n          <h1>\n            Home\n          </h1>\n        </div>\n      </div>\n      <div class=\"page-body\">\n\n        <div class=\"row\">\n          <div class=\"col-lg-6 col-sm-12\">\n            \n            <div class=\"row\">\n              <div class=\"col-lg-offset-2 col-lg-8 col-sm-12 col-xs-12\">\n                <h6 class=\"row-title before-sky\">Common Consumption Styles</h6>\n                <div\n                  class=\"databox databox-lg databox-inverted radius-bordered databox-shadowed databox-graded databox-vertical\">\n                  <div class=\"databox-top no-padding\">\n                    <img class=\"box-img\" src=\"assets/imgs/css.jpg\" alt=\"\"/>\n                  </div>\n                  <div class=\"databox-bottom no-padding bordered-thick bordered-blue\">\n                    <div class=\"databox-row\">\n                      <div class=\"databox-cell cell-6 text-align-center bordered-right bordered-platinum\">\n                            <img src=\"https://badge.fury.io/js/common-consumption-styles.svg\">\n                            <span class=\"databox-text sonic-silver\">Version</span>\n                      </div>\n                      <div class=\"databox-cell cell-6  text-align-center bordered-right bordered-platinum\">\n                        <img src=\"https://img.shields.io/npm/dy/common-consumption-styles.svg\">\n                        <span class=\"databox-text sonic-silver\">Downloads</span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-6 col-sm-12\">\n            \n            <div class=\"row\">\n              <div class=\"col-lg-offset-2 col-lg-8 col-sm-12 col-xs-12\">\n                <h6 class=\"row-title before-orange\">@project-sunbird/common-consumption</h6>\n                <div\n                  class=\"databox databox-lg databox-inverted radius-bordered databox-shadowed databox-graded databox-vertical\">\n                  <div class=\"databox-top no-padding\">\n                    <img class=\"box-img\" src=\"assets/imgs/ngpackagr.png\" alt=\"\" />\n                  </div>\n                  <div class=\"databox-bottom no-padding bordered-thick bordered-orange\">\n                    <div class=\"databox-row\">\n                      <div class=\"databox-cell cell-6 text-align-center bordered-right bordered-platinum\">\n                            <img src=\"https://badge.fury.io/js/%40project-sunbird%2Fcommon-consumption.svg\">\n                            <span class=\"databox-text sonic-silver\">Version</span>\n                      </div>\n                      <div class=\"databox-cell cell-6  text-align-center bordered-right bordered-platinum\">\n                        <img src=\"https://img.shields.io/npm/dy/%40project-sunbird%2Fcommon-consumption.svg\">\n                        <span class=\"databox-text sonic-silver\">Downloads</span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <hr>\n        <div class=\"row margin-top-40\">\n          <div class=\"col-xs-12 col-md-offset-1 col-md-10  col-lg-offset-2 col-lg-8\">\n            <div class=\"widget\">\n              <div class=\"widget-header bordered-bottom bordered-themeprimary\">\n                  <i class=\"widget-icon fa fa-tasks themeprimary\"></i>\n                  <span class=\"widget-caption themeprimary\">Documentation </span>\n              </div><!--Widget Header-->\n              <div class=\"widget-body no-padding\">\n                <object data=\"./assets/readme_files/Welcome-file.html\" type=\"text/html\" style=\"width: 100%; height:100vh;\"></object>\n              </div>\n            </div> \n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- Main content end-->\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/demo-full/home/home.component.scss":
/*!****************************************************!*\
  !*** ./src/app/demo-full/home/home.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".databox {\n  display: inline-block;\n  width: 100%;\n  height: 65px;\n  padding: 0;\n  font-size: 0;\n  margin-bottom: 30px;\n  vertical-align: top;\n  min-width: 130px; }\n\n.databox .databox-icon {\n  margin: 0;\n  display: inline-block;\n  width: 100%;\n  text-align: center; }\n\n.databox .databox-icon > .fa,\n.databox .databox-icon .typcn,\n.databox .databox-icon .glyphicon,\n.databox .databox-icon .wi {\n  display: inline-block;\n  margin: 0;\n  text-align: center;\n  position: relative;\n  margin-top: 3px; }\n\n.databox .databox-icon > .fa:before,\n.databox .databox-icon .typcn:before,\n.databox .databox-icon .glyphicon:before,\n.databox .databox-icon .wi:before {\n  font-size: 40px;\n  display: block;\n  text-align: center; }\n\n.databox .databox-sparkline {\n  padding-top: 0;\n  margin: 0 auto;\n  display: inline-block;\n  vertical-align: bottom;\n  width: 100%;\n  text-align: center;\n  font-size: 24px; }\n\n.databox .databox-piechart {\n  padding-top: 0;\n  margin: 0 auto;\n  display: inline-block;\n  vertical-align: bottom;\n  width: 100%;\n  text-align: center;\n  font-size: 14px;\n  font-weight: 300; }\n\n.databox .databox-header {\n  display: block;\n  font-size: 18px;\n  font-family: \"Roboto\", \"Lucida Sans\", \"trebuchet MS\", Arial, Helvetica;\n  font-weight: 400;\n  margin: 8px 5px;\n  position: relative; }\n\n.databox .databox-header i {\n  margin-right: 5px; }\n\n.databox .databox-number {\n  display: block;\n  font-size: 17px;\n  line-height: 26px;\n  margin: 2px;\n  position: relative;\n  font-family: \"Roboto\", \"Lucida Sans\", \"trebuchet MS\", Arial, Helvetica; }\n\n.databox .databox-number i {\n  margin-right: 5px; }\n\n.databox .databox-number.number-xs {\n  font-size: 11px; }\n\n.databox .databox-number.number-sm {\n  font-size: 14px; }\n\n.databox .databox-number.number-lg {\n  font-size: 20px; }\n\n.databox .databox-number.number-xlg {\n  font-size: 23px; }\n\n.databox .databox-number.number-xxlg {\n  font-size: 30px; }\n\n.databox .databox-title {\n  display: block;\n  font-size: 16px;\n  font-weight: 300;\n  margin: 2px;\n  position: relative; }\n\n.databox .databox-title i {\n  margin-right: 5px;\n  font-size: 13px; }\n\n.databox .databox-text {\n  display: block;\n  font-size: 11px;\n  margin: 4px 0 2px;\n  position: relative; }\n\n.databox .databox-text i {\n  margin-right: 5px;\n  font-size: 13px; }\n\n.databox .databox-inlinetext {\n  font-size: 11px;\n  margin: 2px;\n  position: relative; }\n\n.databox .databox-inlinetext i {\n  margin-right: 5px;\n  font-size: 13px; }\n\n.databox .databox-stat {\n  display: inline-block;\n  position: absolute;\n  right: 7px;\n  top: 7px;\n  padding: 2px 5px; }\n\n.databox .databox-stat.stat-left {\n  left: 7px;\n  right: auto; }\n\n.databox .databox-stat .stat-text {\n  display: inline-block;\n  font-size: 13px;\n  padding-right: 5px;\n  font-weight: 500; }\n\n.databox .databox-stat .stat-icon {\n  display: inline-block;\n  font-size: 13px; }\n\n.databox .databox-stat .stat-icon.icon-lg {\n  font-size: 16px; }\n\n.databox .databox-stat .stat-icon.icon-xlg {\n  font-size: 18px; }\n\n.databox .databox-stat.radius-bordered {\n  -webkit-border-radius: 3px;\n  -webkit-background-clip: padding-box;\n  -moz-border-radius: 3px;\n  -moz-background-clip: padding;\n  border-radius: 3px;\n  background-clip: padding-box; }\n\n.databox .databox-stat[class*=\"bg-\"] {\n  color: #ffffff; }\n\n.databox .databox-state {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  height: 24px;\n  width: 24px;\n  -webkit-border-radius: 50%;\n  -webkit-background-clip: padding-box;\n  -moz-border-radius: 50%;\n  -moz-background-clip: padding;\n  border-radius: 50%;\n  background-clip: padding-box;\n  background-color: #e5e5e5;\n  text-align: center;\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);\n  border: 2px solid #ffffff; }\n\n.databox .databox-state i {\n  font-size: 13px;\n  color: #ffffff;\n  line-height: 20px; }\n\n.databox .databox-row {\n  width: 100%;\n  margin: 0;\n  position: relative; }\n\n.databox .databox-row[class*=\"bg-\"] {\n  color: #ffffff; }\n\n.databox .databox-row.bordered-bottom {\n  border-bottom: 1px solid #ffffff; }\n\n.databox .databox-row.bordered-top {\n  border-top: 1px solid #ffffff; }\n\n.databox .databox-row.bordered-left {\n  border-left: 1px solid #ffffff; }\n\n.databox .databox-row.bordered-right {\n  border-right: 1px solid #ffffff; }\n\n.databox .databox-row.bordered-thick {\n  border-width: 2px; }\n\n.databox .databox-row.row-1 {\n  height: 8.33%; }\n\n.databox .databox-row.row-2 {\n  height: 16.66%; }\n\n.databox .databox-row.row-3 {\n  height: 25%; }\n\n.databox .databox-row.row-4 {\n  height: 33.33%; }\n\n.databox .databox-row.row-5 {\n  height: 41.66%; }\n\n.databox .databox-row.row-6 {\n  height: 50%; }\n\n.databox .databox-row.row-7 {\n  height: 58.33%; }\n\n.databox .databox-row.row-8 {\n  height: 66.66%; }\n\n.databox .databox-row.row-9 {\n  height: 75%; }\n\n.databox .databox-row.row-10 {\n  height: 83.33%; }\n\n.databox .databox-row.row-11 {\n  height: 91.66%; }\n\n.databox .databox-row.row-12 {\n  height: 100%; }\n\n.databox .databox-cell {\n  height: 100%;\n  margin: 0;\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  padding: 5px 10px; }\n\n.databox .databox-cell[class*=\"bg-\"] {\n  color: #ffffff; }\n\n.databox .databox-cell.bordered-bottom {\n  border-bottom: 1px solid #ffffff; }\n\n.databox .databox-cell.bordered-top {\n  border-top: 1px solid #ffffff; }\n\n.databox .databox-cell.bordered-left {\n  border-left: 1px solid #ffffff; }\n\n.databox .databox-cell.bordered-right {\n  border-right: 1px solid #ffffff; }\n\n.databox .databox-cell.bordered-thick {\n  border-width: 2px; }\n\n.databox .databox-cell.cell-1 {\n  width: 8.33%; }\n\n.databox .databox-cell.cell-2 {\n  width: 16.66%; }\n\n.databox .databox-cell.cell-3 {\n  width: 25%; }\n\n.databox .databox-cell.cell-4 {\n  width: 33.33%; }\n\n.databox .databox-cell.cell-5 {\n  width: 41.66%; }\n\n.databox .databox-cell.cell-6 {\n  width: 50%; }\n\n.databox .databox-cell.cell-7 {\n  width: 58.33%; }\n\n.databox .databox-cell.cell-8 {\n  width: 66.66%; }\n\n.databox .databox-cell.cell-9 {\n  width: 75%; }\n\n.databox .databox-cell.cell-10 {\n  width: 83.33%; }\n\n.databox .databox-cell.cell-11 {\n  width: 91.66%; }\n\n.databox .databox-cell.cell-12 {\n  width: 100%; }\n\n.databox.databox-inverted .databox-left {\n  -lh-property: 0;\n  width: calc(100% - 65px); }\n\n.databox.databox-inverted .databox-right {\n  width: 65px; }\n\n.databox.databox-transparent .databox-left {\n  background-color: transparent !important; }\n\n.databox.databox-transparent .databox-right {\n  background-color: transparent !important; }\n\n.databox .databox-left {\n  position: relative;\n  display: inline-block;\n  vertical-align: top;\n  text-align: center;\n  margin: 0;\n  width: 65px;\n  height: 65px;\n  padding: 10px;\n  color: #2dc3e8; }\n\n.databox .databox-left[class*=\"bg-\"] {\n  color: #ffffff; }\n\n.databox .databox-right {\n  position: relative;\n  display: inline-block;\n  vertical-align: top;\n  margin: 0;\n  -lh-property: 0;\n  width: calc(100% - 65px);\n  height: 65px;\n  color: #555555;\n  padding: 5px 10px; }\n\n.databox .databox-right.bordered {\n  border-left: 1px solid #ffffff; }\n\n.databox .databox-right.bordered-thick {\n  border-left: 3px solid #ffffff; }\n\n.databox .databox-right[class*=\"bg-\"] {\n  color: #ffffff; }\n\n.databox.databox-shadowed {\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2); }\n\n.databox.radius-bordered {\n  -webkit-border-radius: 3px;\n  -webkit-background-clip: padding-box;\n  -moz-border-radius: 3px;\n  -moz-background-clip: padding;\n  border-radius: 3px;\n  background-clip: padding-box; }\n\n.databox.radius-bordered .databox-left {\n  -webkit-border-radius: 3px 0 0 3px;\n  -webkit-background-clip: padding-box;\n  -moz-border-radius: 3px 0 0 3px;\n  -moz-background-clip: padding;\n  border-radius: 3px 0 0 3px;\n  background-clip: padding-box; }\n\n.databox.radius-bordered .databox-right {\n  -webkit-border-radius: 0 3px 3px 0;\n  -webkit-background-clip: padding-box;\n  -moz-border-radius: 0 3px 3px 0;\n  -moz-background-clip: padding;\n  border-radius: 0 3px 3px 0;\n  background-clip: padding-box; }\n\n.databox.radius-bordered .databox-right .databox-row:first-child {\n  -webkit-border-radius: 0 3px 0 0;\n  -webkit-background-clip: padding-box;\n  -moz-border-radius: 0 3px 0 0;\n  -moz-background-clip: padding;\n  border-radius: 0 3px 0 0;\n  background-clip: padding-box; }\n\n.databox.radius-bordered .databox-right .databox-row:last-child {\n  -webkit-border-radius: 0 0 3px 0;\n  -webkit-background-clip: padding-box;\n  -moz-border-radius: 0 0 3px 0;\n  -moz-background-clip: padding;\n  border-radius: 0 0 3px 0;\n  background-clip: padding-box; }\n\n.databox.databox-graded {\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9Imxlc3NoYXQtZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNkZGRkZGQiIHN0b3Atb3BhY2l0eT0iMSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIgc3RvcC1vcGFjaXR5PSIxIi8+PC9saW5lYXJHcmFkaWVudD48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2xlc3NoYXQtZ2VuZXJhdGVkKSIgLz48L3N2Zz4=);\n  background-image: linear-gradient(to right, #dddddd, #ffffff); }\n\n.databox.databox-halved .databox-left {\n  width: 50% !important; }\n\n.databox.databox-halved .databox-right {\n  width: 50% !important; }\n\n.databox.databox-lg {\n  height: 80px; }\n\n.databox.databox-lg .databox-icon > .fa:before,\n.databox.databox-lg .databox-icon .typcn:before,\n.databox.databox-lg .databox-icon .glyphicon:before,\n.databox.databox-lg .databox-icon .wi:before {\n  font-size: 48px;\n  padding: 6px 4px 7px; }\n\n.databox.databox-lg .databox-sparkline {\n  margin: 13px auto; }\n\n.databox.databox-lg .databox-number {\n  font-size: 20px;\n  margin: 4px 0 6px; }\n\n.databox.databox-lg .databox-left {\n  width: 80px;\n  height: 80px; }\n\n.databox.databox-lg .databox-right {\n  -lh-property: 0;\n  width: calc(100% - 80px);\n  height: 80px;\n  padding: 10px 15px; }\n\n.databox.databox-lg.databox-inverted .databox-left {\n  -lh-property: 0;\n  width: calc(100% - 80px); }\n\n.databox.databox-lg.databox-inverted .databox-right {\n  width: 80px; }\n\n.databox.databox-xlg {\n  height: 170px; }\n\n.databox.databox-xlg .databox-icon > .fa:before,\n.databox.databox-xlg .databox-icon .typcn:before,\n.databox.databox-xlg .databox-icon .glyphicon:before {\n  padding: 6px 4px 7px; }\n\n.databox.databox-xlg .databox-icon .wi:before {\n  font-size: 55px !important; }\n\n.databox.databox-xlg .databox-left {\n  width: 170px;\n  height: 170px; }\n\n.databox.databox-xlg .databox-right {\n  -lh-property: 0;\n  width: calc(100% - 170px);\n  height: 170px; }\n\n.databox.databox-xlg.databox-inverted .databox-left {\n  -lh-property: 0;\n  width: calc(100% - 170px); }\n\n.databox.databox-xlg.databox-inverted .databox-right {\n  width: 170px; }\n\n.databox.databox-xxlg {\n  height: 250px; }\n\n.databox.databox-xxlg .databox-icon > .fa:before,\n.databox.databox-xxlg .databox-icon .typcn:before,\n.databox.databox-xxlg .databox-icon .glyphicon:before,\n.databox.databox-xxlg .databox-icon .wi:before {\n  font-size: 200px;\n  padding: 6px 4px 7px; }\n\n.databox.databox-xxlg .databox-left {\n  width: 250px;\n  height: 250px; }\n\n.databox.databox-xxlg .databox-right {\n  -lh-property: 0;\n  width: calc(100% - 250px);\n  height: 250px; }\n\n.databox.databox-xxlg.databox-inverted .databox-left {\n  -lh-property: 0;\n  width: calc(100% - 250px); }\n\n.databox.databox-xxlg.databox-inverted .databox-right {\n  width: 250px; }\n\n.databox.databox-vertical {\n  width: 100%;\n  height: 100px; }\n\n.databox.databox-vertical .databox-top {\n  position: relative;\n  width: 100%;\n  height: 50px;\n  display: inline-block;\n  text-align: center;\n  margin: 0;\n  padding: 5px;\n  color: #2dc3e8; }\n\n.databox.databox-vertical .databox-top[class*=\"bg-\"] {\n  color: #ffffff; }\n\n.databox.databox-vertical .databox-bottom {\n  position: relative;\n  width: 100%;\n  height: 50px;\n  display: inline-block;\n  margin: 0;\n  color: #555555;\n  padding: 5px 10px; }\n\n.databox.databox-vertical .databox-bottom.bordered {\n  border-top: 1px solid #ffffff; }\n\n.databox.databox-vertical .databox-bottom.bordered-thick {\n  border-top: 3px solid #ffffff; }\n\n.databox.databox-vertical .databox-bottom[class*=\"bg-\"] {\n  color: #ffffff; }\n\n.databox.databox-vertical .databox-icon > .fa:before,\n.databox.databox-vertical .databox-icon .typcn:before,\n.databox.databox-vertical .databox-icon .glyphicon:before,\n.databox.databox-vertical .databox-icon .wi:before {\n  font-size: 38px; }\n\n.databox.databox-vertical.radius-bordered {\n  -webkit-border-radius: 3px;\n  -webkit-background-clip: padding-box;\n  -moz-border-radius: 3px;\n  -moz-background-clip: padding;\n  border-radius: 3px;\n  background-clip: padding-box; }\n\n.databox.databox-vertical.radius-bordered .databox-top {\n  -webkit-border-radius: 3px 3px 0 0;\n  -webkit-background-clip: padding-box;\n  -moz-border-radius: 3px 3px 0 0;\n  -moz-background-clip: padding;\n  border-radius: 3px 3px 0 0;\n  background-clip: padding-box; }\n\n.databox.databox-vertical.radius-bordered .databox-top .databox-row:first-child .databox-cell:first-child {\n  -webkit-border-radius: 3px 0 0 0;\n  -webkit-background-clip: padding-box;\n  -moz-border-radius: 3px 0 0 0;\n  -moz-background-clip: padding;\n  border-radius: 3px 0 0 0;\n  background-clip: padding-box; }\n\n.databox.databox-vertical.radius-bordered .databox-top .databox-row:first-child .databox-cell:last-child {\n  -webkit-border-radius: 0 3px 0 0;\n  -webkit-background-clip: padding-box;\n  -moz-border-radius: 0 3px 0 0;\n  -moz-background-clip: padding;\n  border-radius: 0 3px 0 0;\n  background-clip: padding-box; }\n\n.databox.databox-vertical.radius-bordered .databox-top img {\n  -webkit-border-radius: 3px 3px 0 0;\n  -webkit-background-clip: padding-box;\n  -moz-border-radius: 3px 3px 0 0;\n  -moz-background-clip: padding;\n  border-radius: 3px 3px 0 0;\n  background-clip: padding-box; }\n\n.databox.databox-vertical.radius-bordered .databox-bottom {\n  -webkit-border-radius: 0 0 3px 3px;\n  -webkit-background-clip: padding-box;\n  -moz-border-radius: 0 0 3px 3px;\n  -moz-background-clip: padding;\n  border-radius: 0 0 3px 3px;\n  background-clip: padding-box; }\n\n.databox.databox-vertical.radius-bordered .databox-bottom .databox-row:last-child .databox-cell:first-child {\n  -webkit-border-radius: 0 0 0 3px;\n  -webkit-background-clip: padding-box;\n  -moz-border-radius: 0 0 0 3px;\n  -moz-background-clip: padding;\n  border-radius: 0 0 0 3px;\n  background-clip: padding-box; }\n\n.databox.databox-vertical.radius-bordered .databox-bottom .databox-row:last-child .databox-cell:last-child {\n  -webkit-border-radius: 0 0 3px 0;\n  -webkit-background-clip: padding-box;\n  -moz-border-radius: 0 0 3px 0;\n  -moz-background-clip: padding;\n  border-radius: 0 0 3px 0;\n  background-clip: padding-box; }\n\n.databox.databox-vertical.radius-bordered .databox-bottom img {\n  -webkit-border-radius: 0 0 3px 3px;\n  -webkit-background-clip: padding-box;\n  -moz-border-radius: 0 0 3px 3px;\n  -moz-background-clip: padding;\n  border-radius: 0 0 3px 3px;\n  background-clip: padding-box; }\n\n.databox.databox-vertical.databox-graded {\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9Imxlc3NoYXQtZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNlNWU1ZTUiIHN0b3Atb3BhY2l0eT0iMSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIgc3RvcC1vcGFjaXR5PSIxIi8+PC9saW5lYXJHcmFkaWVudD48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2xlc3NoYXQtZ2VuZXJhdGVkKSIgLz48L3N2Zz4=);\n  background-image: linear-gradient(to bottom, #e5e5e5, #ffffff); }\n\n.databox.databox-vertical.databox-halved .databox-top {\n  height: 50%; }\n\n.databox.databox-vertical.databox-halved .databox-bottom {\n  height: 50%; }\n\n.databox.databox-vertical.databox-lg {\n  height: 212px;\n  width: 100%; }\n\n.databox.databox-vertical.databox-lg .databox-number {\n  font-size: 17px;\n  margin: 2px; }\n\n.databox.databox-vertical.databox-lg .databox-icon > .fa:before,\n.databox.databox-vertical.databox-lg .databox-icon .typcn:before,\n.databox.databox-vertical.databox-lg .databox-icon .glyphicon:before {\n  font-size: 38px !important;\n  padding: 0; }\n\n.databox.databox-vertical.databox-lg .databox-icon .wi:before {\n  font-size: 50px !important;\n  padding: 0; }\n\n.databox.databox-vertical.databox-lg .databox-top {\n  height: 160px; }\n\n.databox.databox-vertical.databox-lg .databox-bottom {\n  height: 100px; }\n\n.databox.databox-vertical.databox-lg.databox-inverted .databox-icon > .fa:before,\n.databox.databox-vertical.databox-lg.databox-inverted .databox-icon .typcn:before,\n.databox.databox-vertical.databox-lg.databox-inverted .databox-icon .glyphicon:before,\n.databox.databox-vertical.databox-lg.databox-inverted .databox-icon .wi:before {\n  font-size: 85px;\n  padding: 0; }\n\n.databox.databox-vertical.databox-lg.databox-inverted .databox-top {\n  height: 160px; }\n\n.databox.databox-vertical.databox-lg.databox-inverted .databox-bottom {\n  height: auto; }\n\n.databox.databox-vertical.databox-lg.databox-halved .databox-icon > .fa:before,\n.databox.databox-vertical.databox-lg.databox-halved .databox-icon .typcn:before,\n.databox.databox-vertical.databox-lg.databox-halved .databox-icon .glyphicon:before,\n.databox.databox-vertical.databox-lg.databox-halved .databox-icon .wi:before {\n  font-size: 58px;\n  padding: 0; }\n\n.databox.databox-vertical.databox-lg.databox-halved .databox-top {\n  height: 75px; }\n\n.databox.databox-vertical.databox-lg.databox-halved .databox-bottom {\n  height: 75px; }\n\n.databox.databox-vertical.databox-xlg {\n  height: 212px;\n  width: 100%; }\n\n.databox.databox-vertical.databox-xlg .databox-icon > .fa:before,\n.databox.databox-vertical.databox-xlg .databox-icon .typcn:before,\n.databox.databox-vertical.databox-xlg .databox-icon .glyphicon:before,\n.databox.databox-vertical.databox-xlg .databox-icon .wi:before {\n  font-size: 38px;\n  padding: 0; }\n\n.databox.databox-vertical.databox-xlg .databox-top {\n  height: 50px; }\n\n.databox.databox-vertical.databox-xlg .databox-bottom {\n  height: 150px; }\n\n.databox.databox-vertical.databox-xlg.databox-inverted .databox-icon > .fa:before,\n.databox.databox-vertical.databox-xlg.databox-inverted .databox-icon .typcn:before,\n.databox.databox-vertical.databox-xlg.databox-inverted .databox-icon .glyphicon:before,\n.databox.databox-vertical.databox-xlg.databox-inverted .databox-icon .wi:before {\n  font-size: 120px;\n  padding: 10px; }\n\n.databox.databox-vertical.databox-xlg.databox-inverted .databox-top {\n  height: 150px; }\n\n.databox.databox-vertical.databox-xlg.databox-inverted .databox-bottom {\n  height: 50px; }\n\n.databox.databox-vertical.databox-xlg.databox-halved .databox-icon > .fa:before,\n.databox.databox-vertical.databox-xlg.databox-halved .databox-icon .typcn:before,\n.databox.databox-vertical.databox-xlg.databox-halved .databox-icon .glyphicon:before,\n.databox.databox-vertical.databox-xlg.databox-halved .databox-icon .wi:before {\n  font-size: 85px;\n  padding: 0; }\n\n.databox.databox-vertical.databox-xlg.databox-halved .databox-top {\n  height: 100px; }\n\n.databox.databox-vertical.databox-xlg.databox-halved .databox-bottom {\n  height: 100px; }\n\n.databox.databox-vertical.databox-xxlg {\n  height: 300px;\n  width: 100%; }\n\n.databox.databox-vertical.databox-xxlg .databox-icon > .fa:before,\n.databox.databox-vertical.databox-xxlg .databox-icon .typcn:before,\n.databox.databox-vertical.databox-xxlg .databox-icon .glyphicon:before,\n.databox.databox-vertical.databox-xxlg .databox-icon .wi:before {\n  font-size: 38px;\n  padding: 0; }\n\n.databox.databox-vertical.databox-xxlg .databox-top {\n  height: 50px; }\n\n.databox.databox-vertical.databox-xxlg .databox-bottom {\n  height: 250px; }\n\n.databox.databox-vertical.databox-xxlg.databox-inverted .databox-icon > .fa:before,\n.databox.databox-vertical.databox-xxlg.databox-inverted .databox-icon .typcn:before,\n.databox.databox-vertical.databox-xxlg.databox-inverted .databox-icon .glyphicon:before,\n.databox.databox-vertical.databox-xxlg.databox-inverted .databox-icon .wi:before {\n  font-size: 220px;\n  padding: 10px; }\n\n.databox.databox-vertical.databox-xxlg.databox-inverted .databox-top {\n  height: 250px; }\n\n.databox.databox-vertical.databox-xxlg.databox-inverted .databox-bottom {\n  height: 50px; }\n\n.databox.databox-vertical.databox-xxlg.databox-halved .databox-icon > .fa:before,\n.databox.databox-vertical.databox-xxlg.databox-halved .databox-icon .typcn:before,\n.databox.databox-vertical.databox-xxlg.databox-halved .databox-icon .glyphicon:before,\n.databox.databox-vertical.databox-xxlg.databox-halved .databox-icon .wi:before {\n  font-size: 120px;\n  padding: 10px; }\n\n.databox.databox-vertical.databox-xxlg.databox-halved .databox-top {\n  height: 150px; }\n\n.databox.databox-vertical.databox-xxlg.databox-halved .databox-bottom {\n  height: 150px; }\n\n.databox.databox-vertical.databox-xxxlg {\n  height: 500px;\n  width: 100%; }\n\n.databox.databox-vertical.databox-xxxlg .databox-icon > .fa:before,\n.databox.databox-vertical.databox-xxxlg .databox-icon .typcn:before,\n.databox.databox-vertical.databox-xxxlg .databox-icon .glyphicon:before,\n.databox.databox-vertical.databox-xxxlg .databox-icon .wi:before {\n  font-size: 38px;\n  padding: 0; }\n\n.databox.databox-vertical.databox-xxxlg .databox-top {\n  height: 50px; }\n\n.databox.databox-vertical.databox-xxxlg .databox-bottom {\n  height: 450px; }\n\n.databox.databox-vertical.databox-xxxlg.databox-inverted .databox-icon > .fa:before,\n.databox.databox-vertical.databox-xxxlg.databox-inverted .databox-icon .typcn:before,\n.databox.databox-vertical.databox-xxxlg.databox-inverted .databox-icon .glyphicon:before,\n.databox.databox-vertical.databox-xxxlg.databox-inverted .databox-icon .wi:before {\n  font-size: 420px;\n  padding: 10px; }\n\n.databox.databox-vertical.databox-xxxlg.databox-inverted .databox-top {\n  height: 450px; }\n\n.databox.databox-vertical.databox-xxxlg.databox-inverted .databox-bottom {\n  height: 50px; }\n\n.databox.databox-vertical.databox-xxxlg.databox-halved .databox-icon > .fa:before,\n.databox.databox-vertical.databox-xxxlg.databox-halved .databox-icon .typcn:before,\n.databox.databox-vertical.databox-xxxlg.databox-halved .databox-icon .glyphicon:before,\n.databox.databox-vertical.databox-xxxlg.databox-halved .databox-icon .wi:before {\n  font-size: 220px;\n  padding: 10px; }\n\n.databox.databox-vertical.databox-xxxlg.databox-halved .databox-top {\n  height: 250px; }\n\n.databox.databox-vertical.databox-xxxlg.databox-halved .databox-bottom {\n  height: 250px; }\n\n.databox .chart {\n  font-size: 13px; }\n\n/*#endregion DataBoxes*/\n\n.box-img {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n  -webkit-filter: brightness(110%) drop-shadow(0px 1px 1px black) contrast(107%);\n          filter: brightness(110%) drop-shadow(0px 1px 1px black) contrast(107%); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby1mdWxsL2hvbWUvRTpcXHByb2plY3RzXFxjaHJpc3R5XFxjb21tb24tY29uc3VtcHRpb24tZGVtby9zcmNcXGFwcFxcZGVtby1mdWxsXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQXFCO0VBQ3JCLFlBQVc7RUFDWCxhQUFZO0VBQ1osV0FBVTtFQUNWLGFBQVk7RUFDWixvQkFBbUI7RUFDbkIsb0JBQW1CO0VBQ25CLGlCQUFnQixFQUNqQjs7QUFDRDtFQUNFLFVBQVM7RUFDVCxzQkFBcUI7RUFDckIsWUFBVztFQUNYLG1CQUFrQixFQUNuQjs7QUFDRDs7OztFQUlFLHNCQUFxQjtFQUNyQixVQUFTO0VBQ1QsbUJBQWtCO0VBQ2xCLG1CQUFrQjtFQUNsQixnQkFBZSxFQUNoQjs7QUFDRDs7OztFQUlFLGdCQUFlO0VBQ2YsZUFBYztFQUNkLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLGVBQWM7RUFDZCxlQUFjO0VBQ2Qsc0JBQXFCO0VBQ3JCLHVCQUFzQjtFQUN0QixZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLGdCQUFlLEVBQ2hCOztBQUNEO0VBQ0UsZUFBYztFQUNkLGVBQWM7RUFDZCxzQkFBcUI7RUFDckIsdUJBQXNCO0VBQ3RCLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsZ0JBQWU7RUFDZixpQkFBZ0IsRUFDakI7O0FBQ0Q7RUFDRSxlQUFjO0VBQ2QsZ0JBQWU7RUFDZix1RUFBc0U7RUFDdEUsaUJBQWdCO0VBQ2hCLGdCQUFlO0VBQ2YsbUJBQWtCLEVBQ25COztBQUNEO0VBQ0Usa0JBQWlCLEVBQ2xCOztBQUNEO0VBQ0UsZUFBYztFQUNkLGdCQUFlO0VBQ2Ysa0JBQWlCO0VBQ2pCLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsdUVBQXNFLEVBQ3ZFOztBQUNEO0VBQ0Usa0JBQWlCLEVBQ2xCOztBQUNEO0VBQ0UsZ0JBQWUsRUFDaEI7O0FBQ0Q7RUFDRSxnQkFBZSxFQUNoQjs7QUFDRDtFQUNFLGdCQUFlLEVBQ2hCOztBQUNEO0VBQ0UsZ0JBQWUsRUFDaEI7O0FBQ0Q7RUFDRSxnQkFBZSxFQUNoQjs7QUFDRDtFQUNFLGVBQWM7RUFDZCxnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQixZQUFXO0VBQ1gsbUJBQWtCLEVBQ25COztBQUNEO0VBQ0Usa0JBQWlCO0VBQ2pCLGdCQUFlLEVBQ2hCOztBQUNEO0VBQ0UsZUFBYztFQUNkLGdCQUFlO0VBQ2Ysa0JBQWlCO0VBQ2pCLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLGtCQUFpQjtFQUNqQixnQkFBZSxFQUNoQjs7QUFDRDtFQUNFLGdCQUFlO0VBQ2YsWUFBVztFQUNYLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLGtCQUFpQjtFQUNqQixnQkFBZSxFQUNoQjs7QUFDRDtFQUNFLHNCQUFxQjtFQUNyQixtQkFBa0I7RUFDbEIsV0FBVTtFQUNWLFNBQVE7RUFDUixpQkFBZ0IsRUFDakI7O0FBQ0Q7RUFDRSxVQUFTO0VBQ1QsWUFBVyxFQUNaOztBQUNEO0VBQ0Usc0JBQXFCO0VBQ3JCLGdCQUFlO0VBQ2YsbUJBQWtCO0VBQ2xCLGlCQUFnQixFQUNqQjs7QUFDRDtFQUNFLHNCQUFxQjtFQUNyQixnQkFBZSxFQUNoQjs7QUFDRDtFQUNFLGdCQUFlLEVBQ2hCOztBQUNEO0VBQ0UsZ0JBQWUsRUFDaEI7O0FBQ0Q7RUFDRSwyQkFBMEI7RUFDMUIscUNBQW9DO0VBQ3BDLHdCQUF1QjtFQUN2Qiw4QkFBNkI7RUFDN0IsbUJBQWtCO0VBQ2xCLDZCQUE0QixFQUM3Qjs7QUFDRDtFQUNFLGVBQWMsRUFDZjs7QUFDRDtFQUNFLG1CQUFrQjtFQUNsQixVQUFTO0VBQ1QsWUFBVztFQUNYLGFBQVk7RUFDWixZQUFXO0VBQ1gsMkJBQTBCO0VBQzFCLHFDQUFvQztFQUNwQyx3QkFBdUI7RUFDdkIsOEJBQTZCO0VBQzdCLG1CQUFrQjtFQUNsQiw2QkFBNEI7RUFDNUIsMEJBQXlCO0VBQ3pCLG1CQUFrQjtFQUdsQix1Q0FBc0M7RUFDdEMsMEJBQXlCLEVBQzFCOztBQUNEO0VBQ0UsZ0JBQWU7RUFDZixlQUFjO0VBQ2Qsa0JBQWlCLEVBQ2xCOztBQUNEO0VBQ0UsWUFBVztFQUNYLFVBQVM7RUFDVCxtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSxlQUFjLEVBQ2Y7O0FBQ0Q7RUFDRSxpQ0FBZ0MsRUFDakM7O0FBQ0Q7RUFDRSw4QkFBNkIsRUFDOUI7O0FBQ0Q7RUFDRSwrQkFBOEIsRUFDL0I7O0FBQ0Q7RUFDRSxnQ0FBK0IsRUFDaEM7O0FBQ0Q7RUFDRSxrQkFBaUIsRUFDbEI7O0FBQ0Q7RUFDRSxjQUFhLEVBQ2Q7O0FBQ0Q7RUFDRSxlQUFjLEVBQ2Y7O0FBQ0Q7RUFDRSxZQUFXLEVBQ1o7O0FBQ0Q7RUFDRSxlQUFjLEVBQ2Y7O0FBQ0Q7RUFDRSxlQUFjLEVBQ2Y7O0FBQ0Q7RUFDRSxZQUFXLEVBQ1o7O0FBQ0Q7RUFDRSxlQUFjLEVBQ2Y7O0FBQ0Q7RUFDRSxlQUFjLEVBQ2Y7O0FBQ0Q7RUFDRSxZQUFXLEVBQ1o7O0FBQ0Q7RUFDRSxlQUFjLEVBQ2Y7O0FBQ0Q7RUFDRSxlQUFjLEVBQ2Y7O0FBQ0Q7RUFDRSxhQUFZLEVBQ2I7O0FBQ0Q7RUFDRSxhQUFZO0VBQ1osVUFBUztFQUNULG1CQUFrQjtFQUNsQixzQkFBcUI7RUFDckIsdUJBQXNCO0VBQ3RCLGtCQUFpQixFQUNsQjs7QUFDRDtFQUNFLGVBQWMsRUFDZjs7QUFDRDtFQUNFLGlDQUFnQyxFQUNqQzs7QUFDRDtFQUNFLDhCQUE2QixFQUM5Qjs7QUFDRDtFQUNFLCtCQUE4QixFQUMvQjs7QUFDRDtFQUNFLGdDQUErQixFQUNoQzs7QUFDRDtFQUNFLGtCQUFpQixFQUNsQjs7QUFDRDtFQUNFLGFBQVksRUFDYjs7QUFDRDtFQUNFLGNBQWEsRUFDZDs7QUFDRDtFQUNFLFdBQVUsRUFDWDs7QUFDRDtFQUNFLGNBQWEsRUFDZDs7QUFDRDtFQUNFLGNBQWEsRUFDZDs7QUFDRDtFQUNFLFdBQVUsRUFDWDs7QUFDRDtFQUNFLGNBQWEsRUFDZDs7QUFDRDtFQUNFLGNBQWEsRUFDZDs7QUFDRDtFQUNFLFdBQVUsRUFDWDs7QUFDRDtFQUNFLGNBQWEsRUFDZDs7QUFDRDtFQUNFLGNBQWEsRUFDZDs7QUFDRDtFQUNFLFlBQVcsRUFDWjs7QUFDRDtFQUNFLGdCQUFlO0VBR2pCLHlCQUF1QixFQUV0Qjs7QUFDRDtFQUNFLFlBQVcsRUFDWjs7QUFDRDtFQUNFLHlDQUF3QyxFQUN6Qzs7QUFDRDtFQUNFLHlDQUF3QyxFQUN6Qzs7QUFDRDtFQUNFLG1CQUFrQjtFQUNsQixzQkFBcUI7RUFDckIsb0JBQW1CO0VBQ25CLG1CQUFrQjtFQUNsQixVQUFTO0VBQ1QsWUFBVztFQUNYLGFBQVk7RUFDWixjQUFhO0VBQ2IsZUFBYyxFQUNmOztBQUNEO0VBQ0UsZUFBYyxFQUNmOztBQUNEO0VBQ0UsbUJBQWtCO0VBQ2xCLHNCQUFxQjtFQUNyQixvQkFBbUI7RUFDbkIsVUFBUztFQUNULGdCQUFlO0VBR2pCLHlCQUF1QjtFQUVyQixhQUFZO0VBQ1osZUFBYztFQUNkLGtCQUFpQixFQUNsQjs7QUFDRDtFQUNFLCtCQUE4QixFQUMvQjs7QUFDRDtFQUNFLCtCQUE4QixFQUMvQjs7QUFDRDtFQUNFLGVBQWMsRUFDZjs7QUFDRDtFQUdFLHVDQUFzQyxFQUN2Qzs7QUFDRDtFQUNFLDJCQUEwQjtFQUMxQixxQ0FBb0M7RUFDcEMsd0JBQXVCO0VBQ3ZCLDhCQUE2QjtFQUM3QixtQkFBa0I7RUFDbEIsNkJBQTRCLEVBQzdCOztBQUNEO0VBQ0UsbUNBQWtDO0VBQ2xDLHFDQUFvQztFQUNwQyxnQ0FBK0I7RUFDL0IsOEJBQTZCO0VBQzdCLDJCQUEwQjtFQUMxQiw2QkFBNEIsRUFDN0I7O0FBQ0Q7RUFDRSxtQ0FBa0M7RUFDbEMscUNBQW9DO0VBQ3BDLGdDQUErQjtFQUMvQiw4QkFBNkI7RUFDN0IsMkJBQTBCO0VBQzFCLDZCQUE0QixFQUM3Qjs7QUFDRDtFQUNFLGlDQUFnQztFQUNoQyxxQ0FBb0M7RUFDcEMsOEJBQTZCO0VBQzdCLDhCQUE2QjtFQUM3Qix5QkFBd0I7RUFDeEIsNkJBQTRCLEVBQzdCOztBQUNEO0VBQ0UsaUNBQWdDO0VBQ2hDLHFDQUFvQztFQUNwQyw4QkFBNkI7RUFDN0IsOEJBQTZCO0VBQzdCLHlCQUF3QjtFQUN4Qiw2QkFBNEIsRUFDN0I7O0FBQ0Q7RUFDRSwwb0JBQXlvQjtFQUl6b0IsOERBQTZELEVBQzlEOztBQUNEO0VBQ0Usc0JBQXFCLEVBQ3RCOztBQUNEO0VBQ0Usc0JBQXFCLEVBQ3RCOztBQUNEO0VBQ0UsYUFBWSxFQUNiOztBQUNEOzs7O0VBSUUsZ0JBQWU7RUFDZixxQkFBb0IsRUFDckI7O0FBQ0Q7RUFDRSxrQkFBaUIsRUFDbEI7O0FBQ0Q7RUFDRSxnQkFBZTtFQUNmLGtCQUFpQixFQUNsQjs7QUFDRDtFQUNFLFlBQVc7RUFDWCxhQUFZLEVBQ2I7O0FBQ0Q7RUFDRSxnQkFBZTtFQUdqQix5QkFBdUI7RUFFckIsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLGdCQUFlO0VBR2pCLHlCQUF1QixFQUV0Qjs7QUFDRDtFQUNFLFlBQVcsRUFDWjs7QUFDRDtFQUNFLGNBQWEsRUFDZDs7QUFDRDs7O0VBR0UscUJBQW9CLEVBQ3JCOztBQUNEO0VBQ0UsMkJBQTBCLEVBQzNCOztBQUNEO0VBQ0UsYUFBWTtFQUNaLGNBQWEsRUFDZDs7QUFDRDtFQUNFLGdCQUFlO0VBR2pCLDBCQUF3QjtFQUV0QixjQUFhLEVBQ2Q7O0FBQ0Q7RUFDRSxnQkFBZTtFQUdqQiwwQkFBd0IsRUFFdkI7O0FBQ0Q7RUFDRSxhQUFZLEVBQ2I7O0FBQ0Q7RUFDRSxjQUFhLEVBQ2Q7O0FBQ0Q7Ozs7RUFJRSxpQkFBZ0I7RUFDaEIscUJBQW9CLEVBQ3JCOztBQUNEO0VBQ0UsYUFBWTtFQUNaLGNBQWEsRUFDZDs7QUFDRDtFQUNFLGdCQUFlO0VBR2pCLDBCQUF3QjtFQUV0QixjQUFhLEVBQ2Q7O0FBQ0Q7RUFDRSxnQkFBZTtFQUdqQiwwQkFBd0IsRUFFdkI7O0FBQ0Q7RUFDRSxhQUFZLEVBQ2I7O0FBQ0Q7RUFDRSxZQUFXO0VBQ1gsY0FBYSxFQUNkOztBQUNEO0VBQ0UsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxhQUFZO0VBQ1osc0JBQXFCO0VBQ3JCLG1CQUFrQjtFQUNsQixVQUFTO0VBQ1QsYUFBWTtFQUNaLGVBQWMsRUFDZjs7QUFDRDtFQUNFLGVBQWMsRUFDZjs7QUFDRDtFQUNFLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsYUFBWTtFQUNaLHNCQUFxQjtFQUNyQixVQUFTO0VBQ1QsZUFBYztFQUNkLGtCQUFpQixFQUNsQjs7QUFDRDtFQUNFLDhCQUE2QixFQUM5Qjs7QUFDRDtFQUNFLDhCQUE2QixFQUM5Qjs7QUFDRDtFQUNFLGVBQWMsRUFDZjs7QUFDRDs7OztFQUlFLGdCQUFlLEVBQ2hCOztBQUNEO0VBQ0UsMkJBQTBCO0VBQzFCLHFDQUFvQztFQUNwQyx3QkFBdUI7RUFDdkIsOEJBQTZCO0VBQzdCLG1CQUFrQjtFQUNsQiw2QkFBNEIsRUFDN0I7O0FBQ0Q7RUFDRSxtQ0FBa0M7RUFDbEMscUNBQW9DO0VBQ3BDLGdDQUErQjtFQUMvQiw4QkFBNkI7RUFDN0IsMkJBQTBCO0VBQzFCLDZCQUE0QixFQUM3Qjs7QUFDRDtFQUNFLGlDQUFnQztFQUNoQyxxQ0FBb0M7RUFDcEMsOEJBQTZCO0VBQzdCLDhCQUE2QjtFQUM3Qix5QkFBd0I7RUFDeEIsNkJBQTRCLEVBQzdCOztBQUNEO0VBQ0UsaUNBQWdDO0VBQ2hDLHFDQUFvQztFQUNwQyw4QkFBNkI7RUFDN0IsOEJBQTZCO0VBQzdCLHlCQUF3QjtFQUN4Qiw2QkFBNEIsRUFDN0I7O0FBQ0Q7RUFDRSxtQ0FBa0M7RUFDbEMscUNBQW9DO0VBQ3BDLGdDQUErQjtFQUMvQiw4QkFBNkI7RUFDN0IsMkJBQTBCO0VBQzFCLDZCQUE0QixFQUM3Qjs7QUFDRDtFQUNFLG1DQUFrQztFQUNsQyxxQ0FBb0M7RUFDcEMsZ0NBQStCO0VBQy9CLDhCQUE2QjtFQUM3QiwyQkFBMEI7RUFDMUIsNkJBQTRCLEVBQzdCOztBQUNEO0VBQ0UsaUNBQWdDO0VBQ2hDLHFDQUFvQztFQUNwQyw4QkFBNkI7RUFDN0IsOEJBQTZCO0VBQzdCLHlCQUF3QjtFQUN4Qiw2QkFBNEIsRUFDN0I7O0FBQ0Q7RUFDRSxpQ0FBZ0M7RUFDaEMscUNBQW9DO0VBQ3BDLDhCQUE2QjtFQUM3Qiw4QkFBNkI7RUFDN0IseUJBQXdCO0VBQ3hCLDZCQUE0QixFQUM3Qjs7QUFDRDtFQUNFLG1DQUFrQztFQUNsQyxxQ0FBb0M7RUFDcEMsZ0NBQStCO0VBQy9CLDhCQUE2QjtFQUM3QiwyQkFBMEI7RUFDMUIsNkJBQTRCLEVBQzdCOztBQUNEO0VBQ0UsMG9CQUF5b0I7RUFJem9CLCtEQUE4RCxFQUMvRDs7QUFDRDtFQUNFLFlBQVcsRUFDWjs7QUFDRDtFQUNFLFlBQVcsRUFDWjs7QUFDRDtFQUNFLGNBQWE7RUFDYixZQUFXLEVBQ1o7O0FBQ0Q7RUFDRSxnQkFBZTtFQUNmLFlBQVcsRUFDWjs7QUFDRDs7O0VBR0UsMkJBQTBCO0VBQzFCLFdBQVUsRUFDWDs7QUFDRDtFQUNFLDJCQUEwQjtFQUMxQixXQUFVLEVBQ1g7O0FBQ0Q7RUFDRSxjQUFhLEVBQ2Q7O0FBQ0Q7RUFDRSxjQUFhLEVBQ2Q7O0FBQ0Q7Ozs7RUFJRSxnQkFBZTtFQUNmLFdBQVUsRUFDWDs7QUFDRDtFQUNFLGNBQWEsRUFDZDs7QUFDRDtFQUNFLGFBQVksRUFDYjs7QUFDRDs7OztFQUlFLGdCQUFlO0VBQ2YsV0FBVSxFQUNYOztBQUNEO0VBQ0UsYUFBWSxFQUNiOztBQUNEO0VBQ0UsYUFBWSxFQUNiOztBQUNEO0VBQ0UsY0FBYTtFQUNiLFlBQVcsRUFDWjs7QUFDRDs7OztFQUlFLGdCQUFlO0VBQ2YsV0FBVSxFQUNYOztBQUNEO0VBQ0UsYUFBWSxFQUNiOztBQUNEO0VBQ0UsY0FBYSxFQUNkOztBQUNEOzs7O0VBSUUsaUJBQWdCO0VBQ2hCLGNBQWEsRUFDZDs7QUFDRDtFQUNFLGNBQWEsRUFDZDs7QUFDRDtFQUNFLGFBQVksRUFDYjs7QUFDRDs7OztFQUlFLGdCQUFlO0VBQ2YsV0FBVSxFQUNYOztBQUNEO0VBQ0UsY0FBYSxFQUNkOztBQUNEO0VBQ0UsY0FBYSxFQUNkOztBQUNEO0VBQ0UsY0FBYTtFQUNiLFlBQVcsRUFDWjs7QUFDRDs7OztFQUlFLGdCQUFlO0VBQ2YsV0FBVSxFQUNYOztBQUNEO0VBQ0UsYUFBWSxFQUNiOztBQUNEO0VBQ0UsY0FBYSxFQUNkOztBQUNEOzs7O0VBSUUsaUJBQWdCO0VBQ2hCLGNBQWEsRUFDZDs7QUFDRDtFQUNFLGNBQWEsRUFDZDs7QUFDRDtFQUNFLGFBQVksRUFDYjs7QUFDRDs7OztFQUlFLGlCQUFnQjtFQUNoQixjQUFhLEVBQ2Q7O0FBQ0Q7RUFDRSxjQUFhLEVBQ2Q7O0FBQ0Q7RUFDRSxjQUFhLEVBQ2Q7O0FBQ0Q7RUFDRSxjQUFhO0VBQ2IsWUFBVyxFQUNaOztBQUNEOzs7O0VBSUUsZ0JBQWU7RUFDZixXQUFVLEVBQ1g7O0FBQ0Q7RUFDRSxhQUFZLEVBQ2I7O0FBQ0Q7RUFDRSxjQUFhLEVBQ2Q7O0FBQ0Q7Ozs7RUFJRSxpQkFBZ0I7RUFDaEIsY0FBYSxFQUNkOztBQUNEO0VBQ0UsY0FBYSxFQUNkOztBQUNEO0VBQ0UsYUFBWSxFQUNiOztBQUNEOzs7O0VBSUUsaUJBQWdCO0VBQ2hCLGNBQWEsRUFDZDs7QUFDRDtFQUNFLGNBQWEsRUFDZDs7QUFDRDtFQUNFLGNBQWEsRUFDZDs7QUFDRDtFQUNFLGdCQUFlLEVBQ2hCOztBQUNELHdCQUF3Qjs7QUFFeEI7RUFDRSxhQUFZO0VBQ1osWUFBVztFQUNYLHFCQUFpQjtLQUFqQixrQkFBaUI7RUFDakIsMkJBQXVCO0tBQXZCLHdCQUF1QjtFQUN2QiwrRUFBc0U7VUFBdEUsdUVBQXNFLEVBQ3ZFIiwiZmlsZSI6InNyYy9hcHAvZGVtby1mdWxsL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXRhYm94IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGZvbnQtc2l6ZTogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgbWluLXdpZHRoOiAxMzBweDtcclxuICB9XHJcbiAgLmRhdGFib3ggLmRhdGFib3gtaWNvbiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmRhdGFib3ggLmRhdGFib3gtaWNvbiA+IC5mYSxcclxuICAuZGF0YWJveCAuZGF0YWJveC1pY29uIC50eXBjbixcclxuICAuZGF0YWJveCAuZGF0YWJveC1pY29uIC5nbHlwaGljb24sXHJcbiAgLmRhdGFib3ggLmRhdGFib3gtaWNvbiAud2kge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gIH1cclxuICAuZGF0YWJveCAuZGF0YWJveC1pY29uID4gLmZhOmJlZm9yZSxcclxuICAuZGF0YWJveCAuZGF0YWJveC1pY29uIC50eXBjbjpiZWZvcmUsXHJcbiAgLmRhdGFib3ggLmRhdGFib3gtaWNvbiAuZ2x5cGhpY29uOmJlZm9yZSxcclxuICAuZGF0YWJveCAuZGF0YWJveC1pY29uIC53aTpiZWZvcmUge1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5kYXRhYm94IC5kYXRhYm94LXNwYXJrbGluZSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gIH1cclxuICAuZGF0YWJveCAuZGF0YWJveC1waWVjaGFydCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICB9XHJcbiAgLmRhdGFib3ggLmRhdGFib3gtaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCAnTHVjaWRhIFNhbnMnLCAndHJlYnVjaGV0IE1TJywgQXJpYWwsIEhlbHZldGljYSAvKnJ0bDpcIkRyb2lkIEFyYWJpYyBLdWZpXCIsIFwiV1lla2FuXCIqLztcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDAgLypydGw6MzAwKi87XHJcbiAgICBtYXJnaW46IDhweCA1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIC5kYXRhYm94IC5kYXRhYm94LWhlYWRlciBpIHtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIH1cclxuICAuZGF0YWJveCAuZGF0YWJveC1udW1iZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICAgIG1hcmdpbjogMnB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCAnTHVjaWRhIFNhbnMnLCAndHJlYnVjaGV0IE1TJywgQXJpYWwsIEhlbHZldGljYSAvKnJ0bDpcIkRyb2lkIEFyYWJpYyBLdWZpXCIsIFwiV1lla2FuXCIqLztcclxuICB9XHJcbiAgLmRhdGFib3ggLmRhdGFib3gtbnVtYmVyIGkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgfVxyXG4gIC5kYXRhYm94IC5kYXRhYm94LW51bWJlci5udW1iZXIteHMge1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gIH1cclxuICAuZGF0YWJveCAuZGF0YWJveC1udW1iZXIubnVtYmVyLXNtIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbiAgLmRhdGFib3ggLmRhdGFib3gtbnVtYmVyLm51bWJlci1sZyB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG4gIC5kYXRhYm94IC5kYXRhYm94LW51bWJlci5udW1iZXIteGxnIHtcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICB9XHJcbiAgLmRhdGFib3ggLmRhdGFib3gtbnVtYmVyLm51bWJlci14eGxnIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICB9XHJcbiAgLmRhdGFib3ggLmRhdGFib3gtdGl0bGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIC5kYXRhYm94IC5kYXRhYm94LXRpdGxlIGkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG4gIC5kYXRhYm94IC5kYXRhYm94LXRleHQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBtYXJnaW46IDRweCAwIDJweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgLmRhdGFib3ggLmRhdGFib3gtdGV4dCBpIHtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxuICAuZGF0YWJveCAuZGF0YWJveC1pbmxpbmV0ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIG1hcmdpbjogMnB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICAuZGF0YWJveCAuZGF0YWJveC1pbmxpbmV0ZXh0IGkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG4gIC5kYXRhYm94IC5kYXRhYm94LXN0YXQge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDdweDtcclxuICAgIHRvcDogN3B4O1xyXG4gICAgcGFkZGluZzogMnB4IDVweDtcclxuICB9XHJcbiAgLmRhdGFib3ggLmRhdGFib3gtc3RhdC5zdGF0LWxlZnQge1xyXG4gICAgbGVmdDogN3B4O1xyXG4gICAgcmlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIC5kYXRhYm94IC5kYXRhYm94LXN0YXQgLnN0YXQtdGV4dCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuICAuZGF0YWJveCAuZGF0YWJveC1zdGF0IC5zdGF0LWljb24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxuICAuZGF0YWJveCAuZGF0YWJveC1zdGF0IC5zdGF0LWljb24uaWNvbi1sZyB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG4gIC5kYXRhYm94IC5kYXRhYm94LXN0YXQgLnN0YXQtaWNvbi5pY29uLXhsZyB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG4gIC5kYXRhYm94IC5kYXRhYm94LXN0YXQucmFkaXVzLWJvcmRlcmVkIHtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAtbW96LWJhY2tncm91bmQtY2xpcDogcGFkZGluZztcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgfVxyXG4gIC5kYXRhYm94IC5kYXRhYm94LXN0YXRbY2xhc3MqPVwiYmctXCJdIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuICAuZGF0YWJveCAuZGF0YWJveC1zdGF0ZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIC1tb3otYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDAgM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZmZmZjtcclxuICB9XHJcbiAgLmRhdGFib3ggLmRhdGFib3gtc3RhdGUgaSB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIH1cclxuICAuZGF0YWJveCAuZGF0YWJveC1yb3cge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIC5kYXRhYm94IC5kYXRhYm94LXJvd1tjbGFzcyo9XCJiZy1cIl0ge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG4gIC5kYXRhYm94IC5kYXRhYm94LXJvdy5ib3JkZXJlZC1ib3R0b20ge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmZmZmY7XHJcbiAgfVxyXG4gIC5kYXRhYm94IC5kYXRhYm94LXJvdy5ib3JkZXJlZC10b3Age1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmZmZmZmY7XHJcbiAgfVxyXG4gIC5kYXRhYm94IC5kYXRhYm94LXJvdy5ib3JkZXJlZC1sZWZ0IHtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2ZmZmZmZjtcclxuICB9XHJcbiAgLmRhdGFib3ggLmRhdGFib3gtcm93LmJvcmRlcmVkLXJpZ2h0IHtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmZmZmZmY7XHJcbiAgfVxyXG4gIC5kYXRhYm94IC5kYXRhYm94LXJvdy5ib3JkZXJlZC10aGljayB7XHJcbiAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICB9XHJcbiAgLmRhdGFib3ggLmRhdGFib3gtcm93LnJvdy0xIHtcclxuICAgIGhlaWdodDogOC4zMyU7XHJcbiAgfVxyXG4gIC5kYXRhYm94IC5kYXRhYm94LXJvdy5yb3ctMiB7XHJcbiAgICBoZWlnaHQ6IDE2LjY2JTtcclxuICB9XHJcbiAgLmRhdGFib3ggLmRhdGFib3gtcm93LnJvdy0zIHtcclxuICAgIGhlaWdodDogMjUlO1xyXG4gIH1cclxuICAuZGF0YWJveCAuZGF0YWJveC1yb3cucm93LTQge1xyXG4gICAgaGVpZ2h0OiAzMy4zMyU7XHJcbiAgfVxyXG4gIC5kYXRhYm94IC5kYXRhYm94LXJvdy5yb3ctNSB7XHJcbiAgICBoZWlnaHQ6IDQxLjY2JTtcclxuICB9XHJcbiAgLmRhdGFib3ggLmRhdGFib3gtcm93LnJvdy02IHtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gIH1cclxuICAuZGF0YWJveCAuZGF0YWJveC1yb3cucm93LTcge1xyXG4gICAgaGVpZ2h0OiA1OC4zMyU7XHJcbiAgfVxyXG4gIC5kYXRhYm94IC5kYXRhYm94LXJvdy5yb3ctOCB7XHJcbiAgICBoZWlnaHQ6IDY2LjY2JTtcclxuICB9XHJcbiAgLmRhdGFib3ggLmRhdGFib3gtcm93LnJvdy05IHtcclxuICAgIGhlaWdodDogNzUlO1xyXG4gIH1cclxuICAuZGF0YWJveCAuZGF0YWJveC1yb3cucm93LTEwIHtcclxuICAgIGhlaWdodDogODMuMzMlO1xyXG4gIH1cclxuICAuZGF0YWJveCAuZGF0YWJveC1yb3cucm93LTExIHtcclxuICAgIGhlaWdodDogOTEuNjYlO1xyXG4gIH1cclxuICAuZGF0YWJveCAuZGF0YWJveC1yb3cucm93LTEyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgLmRhdGFib3ggLmRhdGFib3gtY2VsbCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgfVxyXG4gIC5kYXRhYm94IC5kYXRhYm94LWNlbGxbY2xhc3MqPVwiYmctXCJdIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuICAuZGF0YWJveCAuZGF0YWJveC1jZWxsLmJvcmRlcmVkLWJvdHRvbSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZmZmZjtcclxuICB9XHJcbiAgLmRhdGFib3ggLmRhdGFib3gtY2VsbC5ib3JkZXJlZC10b3Age1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmZmZmZmY7XHJcbiAgfVxyXG4gIC5kYXRhYm94IC5kYXRhYm94LWNlbGwuYm9yZGVyZWQtbGVmdCB7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmZmZmZmY7XHJcbiAgfVxyXG4gIC5kYXRhYm94IC5kYXRhYm94LWNlbGwuYm9yZGVyZWQtcmlnaHQge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmZmZmZjtcclxuICB9XHJcbiAgLmRhdGFib3ggLmRhdGFib3gtY2VsbC5ib3JkZXJlZC10aGljayB7XHJcbiAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICB9XHJcbiAgLmRhdGFib3ggLmRhdGFib3gtY2VsbC5jZWxsLTEge1xyXG4gICAgd2lkdGg6IDguMzMlO1xyXG4gIH1cclxuICAuZGF0YWJveCAuZGF0YWJveC1jZWxsLmNlbGwtMiB7XHJcbiAgICB3aWR0aDogMTYuNjYlO1xyXG4gIH1cclxuICAuZGF0YWJveCAuZGF0YWJveC1jZWxsLmNlbGwtMyB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gIH1cclxuICAuZGF0YWJveCAuZGF0YWJveC1jZWxsLmNlbGwtNCB7XHJcbiAgICB3aWR0aDogMzMuMzMlO1xyXG4gIH1cclxuICAuZGF0YWJveCAuZGF0YWJveC1jZWxsLmNlbGwtNSB7XHJcbiAgICB3aWR0aDogNDEuNjYlO1xyXG4gIH1cclxuICAuZGF0YWJveCAuZGF0YWJveC1jZWxsLmNlbGwtNiB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxuICAuZGF0YWJveCAuZGF0YWJveC1jZWxsLmNlbGwtNyB7XHJcbiAgICB3aWR0aDogNTguMzMlO1xyXG4gIH1cclxuICAuZGF0YWJveCAuZGF0YWJveC1jZWxsLmNlbGwtOCB7XHJcbiAgICB3aWR0aDogNjYuNjYlO1xyXG4gIH1cclxuICAuZGF0YWJveCAuZGF0YWJveC1jZWxsLmNlbGwtOSB7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gIH1cclxuICAuZGF0YWJveCAuZGF0YWJveC1jZWxsLmNlbGwtMTAge1xyXG4gICAgd2lkdGg6IDgzLjMzJTtcclxuICB9XHJcbiAgLmRhdGFib3ggLmRhdGFib3gtY2VsbC5jZWxsLTExIHtcclxuICAgIHdpZHRoOiA5MS42NiU7XHJcbiAgfVxyXG4gIC5kYXRhYm94IC5kYXRhYm94LWNlbGwuY2VsbC0xMiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmRhdGFib3guZGF0YWJveC1pbnZlcnRlZCAuZGF0YWJveC1sZWZ0IHtcclxuICAgIC1saC1wcm9wZXJ0eTogMDtcclxuICB3aWR0aDotd2Via2l0LWNhbGMoMTAwJSAtIDY1cHgpO1xyXG4gIHdpZHRoOi1tb3otY2FsYygxMDAlIC0gNjVweCk7XHJcbiAgd2lkdGg6Y2FsYygxMDAlIC0gNjVweCk7XHJcbiAgO1xyXG4gIH1cclxuICAuZGF0YWJveC5kYXRhYm94LWludmVydGVkIC5kYXRhYm94LXJpZ2h0IHtcclxuICAgIHdpZHRoOiA2NXB4O1xyXG4gIH1cclxuICAuZGF0YWJveC5kYXRhYm94LXRyYW5zcGFyZW50IC5kYXRhYm94LWxlZnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmRhdGFib3guZGF0YWJveC10cmFuc3BhcmVudCAuZGF0YWJveC1yaWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuZGF0YWJveCAuZGF0YWJveC1sZWZ0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB3aWR0aDogNjVweDtcclxuICAgIGhlaWdodDogNjVweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBjb2xvcjogIzJkYzNlODtcclxuICB9XHJcbiAgLmRhdGFib3ggLmRhdGFib3gtbGVmdFtjbGFzcyo9XCJiZy1cIl0ge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG4gIC5kYXRhYm94IC5kYXRhYm94LXJpZ2h0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICAtbGgtcHJvcGVydHk6IDA7XHJcbiAgd2lkdGg6LXdlYmtpdC1jYWxjKDEwMCUgLSA2NXB4KTtcclxuICB3aWR0aDotbW96LWNhbGMoMTAwJSAtIDY1cHgpO1xyXG4gIHdpZHRoOmNhbGMoMTAwJSAtIDY1cHgpO1xyXG4gIDtcclxuICAgIGhlaWdodDogNjVweDtcclxuICAgIGNvbG9yOiAjNTU1NTU1O1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgfVxyXG4gIC5kYXRhYm94IC5kYXRhYm94LXJpZ2h0LmJvcmRlcmVkIHtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2ZmZmZmZjtcclxuICB9XHJcbiAgLmRhdGFib3ggLmRhdGFib3gtcmlnaHQuYm9yZGVyZWQtdGhpY2sge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjZmZmZmZmO1xyXG4gIH1cclxuICAuZGF0YWJveCAuZGF0YWJveC1yaWdodFtjbGFzcyo9XCJiZy1cIl0ge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG4gIC5kYXRhYm94LmRhdGFib3gtc2hhZG93ZWQge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMCAwIDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICB9XHJcbiAgLmRhdGFib3gucmFkaXVzLWJvcmRlcmVkIHtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAtbW96LWJhY2tncm91bmQtY2xpcDogcGFkZGluZztcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgfVxyXG4gIC5kYXRhYm94LnJhZGl1cy1ib3JkZXJlZCAuZGF0YWJveC1sZWZ0IHtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHggLypydGw6MCAzcHggM3B4IDAqLztcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHggLypydGw6MCAzcHggM3B4IDAqLztcclxuICAgIC1tb3otYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHggLypydGw6MCAzcHggM3B4IDAqLztcclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgfVxyXG4gIC5kYXRhYm94LnJhZGl1cy1ib3JkZXJlZCAuZGF0YWJveC1yaWdodCB7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDAgM3B4IDNweCAwIC8qcnRsOjNweCAwIDAgM3B4Ki87XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDAgM3B4IDNweCAwIC8qcnRsOjNweCAwIDAgM3B4Ki87XHJcbiAgICAtbW96LWJhY2tncm91bmQtY2xpcDogcGFkZGluZztcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgM3B4IDNweCAwIC8qcnRsOjNweCAwIDAgM3B4Ki87XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gIH1cclxuICAuZGF0YWJveC5yYWRpdXMtYm9yZGVyZWQgLmRhdGFib3gtcmlnaHQgLmRhdGFib3gtcm93OmZpcnN0LWNoaWxkIHtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMCAzcHggMCAwO1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAwIDNweCAwIDA7XHJcbiAgICAtbW96LWJhY2tncm91bmQtY2xpcDogcGFkZGluZztcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgM3B4IDAgMDtcclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgfVxyXG4gIC5kYXRhYm94LnJhZGl1cy1ib3JkZXJlZCAuZGF0YWJveC1yaWdodCAuZGF0YWJveC1yb3c6bGFzdC1jaGlsZCB7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDAgMCAzcHggMDtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMCAwIDNweCAwO1xyXG4gICAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgM3B4IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gIH1cclxuICAuZGF0YWJveC5kYXRhYm94LWdyYWRlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUEvUGp4emRtY2dlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklpQjNhV1IwYUQwaU1UQXdKU0lnYUdWcFoyaDBQU0l4TURBbElpQjJhV1YzUW05NFBTSXdJREFnTVNBeElpQndjbVZ6WlhKMlpVRnpjR1ZqZEZKaGRHbHZQU0p1YjI1bElqNDhiR2x1WldGeVIzSmhaR2xsYm5RZ2FXUTlJbXhsYzNOb1lYUXRaMlZ1WlhKaGRHVmtJaUJuY21Ga2FXVnVkRlZ1YVhSelBTSjFjMlZ5VTNCaFkyVlBibFZ6WlNJZ2VERTlJakFsSWlCNU1UMGlNQ1VpSUhneVBTSXhNREFsSWlCNU1qMGlNQ1VpUGp4emRHOXdJRzltWm5ObGREMGlNQ1VpSUhOMGIzQXRZMjlzYjNJOUlpTmtaR1JrWkdRaUlITjBiM0F0YjNCaFkybDBlVDBpTVNJdlBqeHpkRzl3SUc5bVpuTmxkRDBpTVRBd0pTSWdjM1J2Y0MxamIyeHZjajBpSTJabVptWm1aaUlnYzNSdmNDMXZjR0ZqYVhSNVBTSXhJaTgrUEM5c2FXNWxZWEpIY21Ga2FXVnVkRDQ4Y21WamRDQjRQU0l3SWlCNVBTSXdJaUIzYVdSMGFEMGlNU0lnYUdWcFoyaDBQU0l4SWlCbWFXeHNQU0oxY213b0kyeGxjM05vWVhRdFoyVnVaWEpoZEdWa0tTSWdMejQ4TDNOMlp6ND0pO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgI2RkZGRkZCwgI2ZmZmZmZik7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjZGRkZGRkLCAjZmZmZmZmKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCAjZGRkZGRkLCAjZmZmZmZmKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2RkZGRkZCwgI2ZmZmZmZik7XHJcbiAgfVxyXG4gIC5kYXRhYm94LmRhdGFib3gtaGFsdmVkIC5kYXRhYm94LWxlZnQge1xyXG4gICAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuZGF0YWJveC5kYXRhYm94LWhhbHZlZCAuZGF0YWJveC1yaWdodCB7XHJcbiAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5kYXRhYm94LmRhdGFib3gtbGcge1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gIH1cclxuICAuZGF0YWJveC5kYXRhYm94LWxnIC5kYXRhYm94LWljb24gPiAuZmE6YmVmb3JlLFxyXG4gIC5kYXRhYm94LmRhdGFib3gtbGcgLmRhdGFib3gtaWNvbiAudHlwY246YmVmb3JlLFxyXG4gIC5kYXRhYm94LmRhdGFib3gtbGcgLmRhdGFib3gtaWNvbiAuZ2x5cGhpY29uOmJlZm9yZSxcclxuICAuZGF0YWJveC5kYXRhYm94LWxnIC5kYXRhYm94LWljb24gLndpOmJlZm9yZSB7XHJcbiAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICBwYWRkaW5nOiA2cHggNHB4IDdweDtcclxuICB9XHJcbiAgLmRhdGFib3guZGF0YWJveC1sZyAuZGF0YWJveC1zcGFya2xpbmUge1xyXG4gICAgbWFyZ2luOiAxM3B4IGF1dG87XHJcbiAgfVxyXG4gIC5kYXRhYm94LmRhdGFib3gtbGcgLmRhdGFib3gtbnVtYmVyIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbjogNHB4IDAgNnB4O1xyXG4gIH1cclxuICAuZGF0YWJveC5kYXRhYm94LWxnIC5kYXRhYm94LWxlZnQge1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgfVxyXG4gIC5kYXRhYm94LmRhdGFib3gtbGcgLmRhdGFib3gtcmlnaHQge1xyXG4gICAgLWxoLXByb3BlcnR5OiAwO1xyXG4gIHdpZHRoOi13ZWJraXQtY2FsYygxMDAlIC0gODBweCk7XHJcbiAgd2lkdGg6LW1vei1jYWxjKDEwMCUgLSA4MHB4KTtcclxuICB3aWR0aDpjYWxjKDEwMCUgLSA4MHB4KTtcclxuICA7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgfVxyXG4gIC5kYXRhYm94LmRhdGFib3gtbGcuZGF0YWJveC1pbnZlcnRlZCAuZGF0YWJveC1sZWZ0IHtcclxuICAgIC1saC1wcm9wZXJ0eTogMDtcclxuICB3aWR0aDotd2Via2l0LWNhbGMoMTAwJSAtIDgwcHgpO1xyXG4gIHdpZHRoOi1tb3otY2FsYygxMDAlIC0gODBweCk7XHJcbiAgd2lkdGg6Y2FsYygxMDAlIC0gODBweCk7XHJcbiAgO1xyXG4gIH1cclxuICAuZGF0YWJveC5kYXRhYm94LWxnLmRhdGFib3gtaW52ZXJ0ZWQgLmRhdGFib3gtcmlnaHQge1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgfVxyXG4gIC5kYXRhYm94LmRhdGFib3gteGxnIHtcclxuICAgIGhlaWdodDogMTcwcHg7XHJcbiAgfVxyXG4gIC5kYXRhYm94LmRhdGFib3gteGxnIC5kYXRhYm94LWljb24gPiAuZmE6YmVmb3JlLFxyXG4gIC5kYXRhYm94LmRhdGFib3gteGxnIC5kYXRhYm94LWljb24gLnR5cGNuOmJlZm9yZSxcclxuICAuZGF0YWJveC5kYXRhYm94LXhsZyAuZGF0YWJveC1pY29uIC5nbHlwaGljb246YmVmb3JlIHtcclxuICAgIHBhZGRpbmc6IDZweCA0cHggN3B4O1xyXG4gIH1cclxuICAuZGF0YWJveC5kYXRhYm94LXhsZyAuZGF0YWJveC1pY29uIC53aTpiZWZvcmUge1xyXG4gICAgZm9udC1zaXplOiA1NXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5kYXRhYm94LmRhdGFib3gteGxnIC5kYXRhYm94LWxlZnQge1xyXG4gICAgd2lkdGg6IDE3MHB4O1xyXG4gICAgaGVpZ2h0OiAxNzBweDtcclxuICB9XHJcbiAgLmRhdGFib3guZGF0YWJveC14bGcgLmRhdGFib3gtcmlnaHQge1xyXG4gICAgLWxoLXByb3BlcnR5OiAwO1xyXG4gIHdpZHRoOi13ZWJraXQtY2FsYygxMDAlIC0gMTcwcHgpO1xyXG4gIHdpZHRoOi1tb3otY2FsYygxMDAlIC0gMTcwcHgpO1xyXG4gIHdpZHRoOmNhbGMoMTAwJSAtIDE3MHB4KTtcclxuICA7XHJcbiAgICBoZWlnaHQ6IDE3MHB4O1xyXG4gIH1cclxuICAuZGF0YWJveC5kYXRhYm94LXhsZy5kYXRhYm94LWludmVydGVkIC5kYXRhYm94LWxlZnQge1xyXG4gICAgLWxoLXByb3BlcnR5OiAwO1xyXG4gIHdpZHRoOi13ZWJraXQtY2FsYygxMDAlIC0gMTcwcHgpO1xyXG4gIHdpZHRoOi1tb3otY2FsYygxMDAlIC0gMTcwcHgpO1xyXG4gIHdpZHRoOmNhbGMoMTAwJSAtIDE3MHB4KTtcclxuICA7XHJcbiAgfVxyXG4gIC5kYXRhYm94LmRhdGFib3gteGxnLmRhdGFib3gtaW52ZXJ0ZWQgLmRhdGFib3gtcmlnaHQge1xyXG4gICAgd2lkdGg6IDE3MHB4O1xyXG4gIH1cclxuICAuZGF0YWJveC5kYXRhYm94LXh4bGcge1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICB9XHJcbiAgLmRhdGFib3guZGF0YWJveC14eGxnIC5kYXRhYm94LWljb24gPiAuZmE6YmVmb3JlLFxyXG4gIC5kYXRhYm94LmRhdGFib3gteHhsZyAuZGF0YWJveC1pY29uIC50eXBjbjpiZWZvcmUsXHJcbiAgLmRhdGFib3guZGF0YWJveC14eGxnIC5kYXRhYm94LWljb24gLmdseXBoaWNvbjpiZWZvcmUsXHJcbiAgLmRhdGFib3guZGF0YWJveC14eGxnIC5kYXRhYm94LWljb24gLndpOmJlZm9yZSB7XHJcbiAgICBmb250LXNpemU6IDIwMHB4O1xyXG4gICAgcGFkZGluZzogNnB4IDRweCA3cHg7XHJcbiAgfVxyXG4gIC5kYXRhYm94LmRhdGFib3gteHhsZyAuZGF0YWJveC1sZWZ0IHtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgfVxyXG4gIC5kYXRhYm94LmRhdGFib3gteHhsZyAuZGF0YWJveC1yaWdodCB7XHJcbiAgICAtbGgtcHJvcGVydHk6IDA7XHJcbiAgd2lkdGg6LXdlYmtpdC1jYWxjKDEwMCUgLSAyNTBweCk7XHJcbiAgd2lkdGg6LW1vei1jYWxjKDEwMCUgLSAyNTBweCk7XHJcbiAgd2lkdGg6Y2FsYygxMDAlIC0gMjUwcHgpO1xyXG4gIDtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgfVxyXG4gIC5kYXRhYm94LmRhdGFib3gteHhsZy5kYXRhYm94LWludmVydGVkIC5kYXRhYm94LWxlZnQge1xyXG4gICAgLWxoLXByb3BlcnR5OiAwO1xyXG4gIHdpZHRoOi13ZWJraXQtY2FsYygxMDAlIC0gMjUwcHgpO1xyXG4gIHdpZHRoOi1tb3otY2FsYygxMDAlIC0gMjUwcHgpO1xyXG4gIHdpZHRoOmNhbGMoMTAwJSAtIDI1MHB4KTtcclxuICA7XHJcbiAgfVxyXG4gIC5kYXRhYm94LmRhdGFib3gteHhsZy5kYXRhYm94LWludmVydGVkIC5kYXRhYm94LXJpZ2h0IHtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICB9XHJcbiAgLmRhdGFib3guZGF0YWJveC12ZXJ0aWNhbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgfVxyXG4gIC5kYXRhYm94LmRhdGFib3gtdmVydGljYWwgLmRhdGFib3gtdG9wIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgY29sb3I6ICMyZGMzZTg7XHJcbiAgfVxyXG4gIC5kYXRhYm94LmRhdGFib3gtdmVydGljYWwgLmRhdGFib3gtdG9wW2NsYXNzKj1cImJnLVwiXSB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcbiAgLmRhdGFib3guZGF0YWJveC12ZXJ0aWNhbCAuZGF0YWJveC1ib3R0b20ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBjb2xvcjogIzU1NTU1NTtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIH1cclxuICAuZGF0YWJveC5kYXRhYm94LXZlcnRpY2FsIC5kYXRhYm94LWJvdHRvbS5ib3JkZXJlZCB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2ZmZmZmZjtcclxuICB9XHJcbiAgLmRhdGFib3guZGF0YWJveC12ZXJ0aWNhbCAuZGF0YWJveC1ib3R0b20uYm9yZGVyZWQtdGhpY2sge1xyXG4gICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNmZmZmZmY7XHJcbiAgfVxyXG4gIC5kYXRhYm94LmRhdGFib3gtdmVydGljYWwgLmRhdGFib3gtYm90dG9tW2NsYXNzKj1cImJnLVwiXSB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcbiAgLmRhdGFib3guZGF0YWJveC12ZXJ0aWNhbCAuZGF0YWJveC1pY29uID4gLmZhOmJlZm9yZSxcclxuICAuZGF0YWJveC5kYXRhYm94LXZlcnRpY2FsIC5kYXRhYm94LWljb24gLnR5cGNuOmJlZm9yZSxcclxuICAuZGF0YWJveC5kYXRhYm94LXZlcnRpY2FsIC5kYXRhYm94LWljb24gLmdseXBoaWNvbjpiZWZvcmUsXHJcbiAgLmRhdGFib3guZGF0YWJveC12ZXJ0aWNhbCAuZGF0YWJveC1pY29uIC53aTpiZWZvcmUge1xyXG4gICAgZm9udC1zaXplOiAzOHB4O1xyXG4gIH1cclxuICAuZGF0YWJveC5kYXRhYm94LXZlcnRpY2FsLnJhZGl1cy1ib3JkZXJlZCB7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gIH1cclxuICAuZGF0YWJveC5kYXRhYm94LXZlcnRpY2FsLnJhZGl1cy1ib3JkZXJlZCAuZGF0YWJveC10b3Age1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHggM3B4IDAgMDtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogM3B4IDNweCAwIDA7XHJcbiAgICAtbW96LWJhY2tncm91bmQtY2xpcDogcGFkZGluZztcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweCAzcHggMCAwO1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICB9XHJcbiAgLmRhdGFib3guZGF0YWJveC12ZXJ0aWNhbC5yYWRpdXMtYm9yZGVyZWQgLmRhdGFib3gtdG9wIC5kYXRhYm94LXJvdzpmaXJzdC1jaGlsZCAuZGF0YWJveC1jZWxsOmZpcnN0LWNoaWxkIHtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4IDAgMCAwO1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHggMCAwIDA7XHJcbiAgICAtbW96LWJhY2tncm91bmQtY2xpcDogcGFkZGluZztcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweCAwIDAgMDtcclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgfVxyXG4gIC5kYXRhYm94LmRhdGFib3gtdmVydGljYWwucmFkaXVzLWJvcmRlcmVkIC5kYXRhYm94LXRvcCAuZGF0YWJveC1yb3c6Zmlyc3QtY2hpbGQgLmRhdGFib3gtY2VsbDpsYXN0LWNoaWxkIHtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMCAzcHggMCAwO1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAwIDNweCAwIDA7XHJcbiAgICAtbW96LWJhY2tncm91bmQtY2xpcDogcGFkZGluZztcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgM3B4IDAgMDtcclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgfVxyXG4gIC5kYXRhYm94LmRhdGFib3gtdmVydGljYWwucmFkaXVzLWJvcmRlcmVkIC5kYXRhYm94LXRvcCBpbWcge1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHggM3B4IDAgMDtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogM3B4IDNweCAwIDA7XHJcbiAgICAtbW96LWJhY2tncm91bmQtY2xpcDogcGFkZGluZztcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweCAzcHggMCAwO1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICB9XHJcbiAgLmRhdGFib3guZGF0YWJveC12ZXJ0aWNhbC5yYWRpdXMtYm9yZGVyZWQgLmRhdGFib3gtYm90dG9tIHtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMCAwIDNweCAzcHg7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDAgMCAzcHggM3B4O1xyXG4gICAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgM3B4IDNweDtcclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgfVxyXG4gIC5kYXRhYm94LmRhdGFib3gtdmVydGljYWwucmFkaXVzLWJvcmRlcmVkIC5kYXRhYm94LWJvdHRvbSAuZGF0YWJveC1yb3c6bGFzdC1jaGlsZCAuZGF0YWJveC1jZWxsOmZpcnN0LWNoaWxkIHtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMCAwIDAgM3B4O1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAwIDAgMCAzcHg7XHJcbiAgICAtbW96LWJhY2tncm91bmQtY2xpcDogcGFkZGluZztcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAwIDNweDtcclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgfVxyXG4gIC5kYXRhYm94LmRhdGFib3gtdmVydGljYWwucmFkaXVzLWJvcmRlcmVkIC5kYXRhYm94LWJvdHRvbSAuZGF0YWJveC1yb3c6bGFzdC1jaGlsZCAuZGF0YWJveC1jZWxsOmxhc3QtY2hpbGQge1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwIDAgM3B4IDA7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDAgMCAzcHggMDtcclxuICAgIC1tb3otYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDNweCAwO1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICB9XHJcbiAgLmRhdGFib3guZGF0YWJveC12ZXJ0aWNhbC5yYWRpdXMtYm9yZGVyZWQgLmRhdGFib3gtYm90dG9tIGltZyB7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDAgMCAzcHggM3B4O1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAwIDAgM3B4IDNweDtcclxuICAgIC1tb3otYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDNweCAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gIH1cclxuICAuZGF0YWJveC5kYXRhYm94LXZlcnRpY2FsLmRhdGFib3gtZ3JhZGVkIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQS9Qanh6ZG1jZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWlCM2FXUjBhRDBpTVRBd0pTSWdhR1ZwWjJoMFBTSXhNREFsSWlCMmFXVjNRbTk0UFNJd0lEQWdNU0F4SWlCd2NtVnpaWEoyWlVGemNHVmpkRkpoZEdsdlBTSnViMjVsSWo0OGJHbHVaV0Z5UjNKaFpHbGxiblFnYVdROUlteGxjM05vWVhRdFoyVnVaWEpoZEdWa0lpQm5jbUZrYVdWdWRGVnVhWFJ6UFNKMWMyVnlVM0JoWTJWUGJsVnpaU0lnZURFOUlqQWxJaUI1TVQwaU1DVWlJSGd5UFNJd0pTSWdlVEk5SWpFd01DVWlQanh6ZEc5d0lHOW1abk5sZEQwaU1DVWlJSE4wYjNBdFkyOXNiM0k5SWlObE5XVTFaVFVpSUhOMGIzQXRiM0JoWTJsMGVUMGlNU0l2UGp4emRHOXdJRzltWm5ObGREMGlNVEF3SlNJZ2MzUnZjQzFqYjJ4dmNqMGlJMlptWm1abVppSWdjM1J2Y0MxdmNHRmphWFI1UFNJeElpOCtQQzlzYVc1bFlYSkhjbUZrYVdWdWRENDhjbVZqZENCNFBTSXdJaUI1UFNJd0lpQjNhV1IwYUQwaU1TSWdhR1ZwWjJoMFBTSXhJaUJtYVd4c1BTSjFjbXdvSTJ4bGMzTm9ZWFF0WjJWdVpYSmhkR1ZrS1NJZ0x6NDhMM04yWno0PSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNlNWU1ZTUsICNmZmZmZmYpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjZTVlNWU1LCAjZmZmZmZmKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsICNlNWU1ZTUsICNmZmZmZmYpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2U1ZTVlNSwgI2ZmZmZmZik7XHJcbiAgfVxyXG4gIC5kYXRhYm94LmRhdGFib3gtdmVydGljYWwuZGF0YWJveC1oYWx2ZWQgLmRhdGFib3gtdG9wIHtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gIH1cclxuICAuZGF0YWJveC5kYXRhYm94LXZlcnRpY2FsLmRhdGFib3gtaGFsdmVkIC5kYXRhYm94LWJvdHRvbSB7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICB9XHJcbiAgLmRhdGFib3guZGF0YWJveC12ZXJ0aWNhbC5kYXRhYm94LWxnIHtcclxuICAgIGhlaWdodDogMjEycHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmRhdGFib3guZGF0YWJveC12ZXJ0aWNhbC5kYXRhYm94LWxnIC5kYXRhYm94LW51bWJlciB7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBtYXJnaW46IDJweDtcclxuICB9XHJcbiAgLmRhdGFib3guZGF0YWJveC12ZXJ0aWNhbC5kYXRhYm94LWxnIC5kYXRhYm94LWljb24gPiAuZmE6YmVmb3JlLFxyXG4gIC5kYXRhYm94LmRhdGFib3gtdmVydGljYWwuZGF0YWJveC1sZyAuZGF0YWJveC1pY29uIC50eXBjbjpiZWZvcmUsXHJcbiAgLmRhdGFib3guZGF0YWJveC12ZXJ0aWNhbC5kYXRhYm94LWxnIC5kYXRhYm94LWljb24gLmdseXBoaWNvbjpiZWZvcmUge1xyXG4gICAgZm9udC1zaXplOiAzOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICAuZGF0YWJveC5kYXRhYm94LXZlcnRpY2FsLmRhdGFib3gtbGcgLmRhdGFib3gtaWNvbiAud2k6YmVmb3JlIHtcclxuICAgIGZvbnQtc2l6ZTogNTBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgLmRhdGFib3guZGF0YWJveC12ZXJ0aWNhbC5kYXRhYm94LWxnIC5kYXRhYm94LXRvcCB7XHJcbiAgICBoZWlnaHQ6IDE2MHB4O1xyXG4gIH1cclxuICAuZGF0YWJveC5kYXRhYm94LXZlcnRpY2FsLmRhdGFib3gtbGcgLmRhdGFib3gtYm90dG9tIHtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgfVxyXG4gIC5kYXRhYm94LmRhdGFib3gtdmVydGljYWwuZGF0YWJveC1sZy5kYXRhYm94LWludmVydGVkIC5kYXRhYm94LWljb24gPiAuZmE6YmVmb3JlLFxyXG4gIC5kYXRhYm94LmRhdGFib3gtdmVydGljYWwuZGF0YWJveC1sZy5kYXRhYm94LWludmVydGVkIC5kYXRhYm94LWljb24gLnR5cGNuOmJlZm9yZSxcclxuICAuZGF0YWJveC5kYXRhYm94LXZlcnRpY2FsLmRhdGFib3gtbGcuZGF0YWJveC1pbnZlcnRlZCAuZGF0YWJveC1pY29uIC5nbHlwaGljb246YmVmb3JlLFxyXG4gIC5kYXRhYm94LmRhdGFib3gtdmVydGljYWwuZGF0YWJveC1sZy5kYXRhYm94LWludmVydGVkIC5kYXRhYm94LWljb24gLndpOmJlZm9yZSB7XHJcbiAgICBmb250LXNpemU6IDg1cHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICAuZGF0YWJveC5kYXRhYm94LXZlcnRpY2FsLmRhdGFib3gtbGcuZGF0YWJveC1pbnZlcnRlZCAuZGF0YWJveC10b3Age1xyXG4gICAgaGVpZ2h0OiAxNjBweDtcclxuICB9XHJcbiAgLmRhdGFib3guZGF0YWJveC12ZXJ0aWNhbC5kYXRhYm94LWxnLmRhdGFib3gtaW52ZXJ0ZWQgLmRhdGFib3gtYm90dG9tIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbiAgLmRhdGFib3guZGF0YWJveC12ZXJ0aWNhbC5kYXRhYm94LWxnLmRhdGFib3gtaGFsdmVkIC5kYXRhYm94LWljb24gPiAuZmE6YmVmb3JlLFxyXG4gIC5kYXRhYm94LmRhdGFib3gtdmVydGljYWwuZGF0YWJveC1sZy5kYXRhYm94LWhhbHZlZCAuZGF0YWJveC1pY29uIC50eXBjbjpiZWZvcmUsXHJcbiAgLmRhdGFib3guZGF0YWJveC12ZXJ0aWNhbC5kYXRhYm94LWxnLmRhdGFib3gtaGFsdmVkIC5kYXRhYm94LWljb24gLmdseXBoaWNvbjpiZWZvcmUsXHJcbiAgLmRhdGFib3guZGF0YWJveC12ZXJ0aWNhbC5kYXRhYm94LWxnLmRhdGFib3gtaGFsdmVkIC5kYXRhYm94LWljb24gLndpOmJlZm9yZSB7XHJcbiAgICBmb250LXNpemU6IDU4cHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICAuZGF0YWJveC5kYXRhYm94LXZlcnRpY2FsLmRhdGFib3gtbGcuZGF0YWJveC1oYWx2ZWQgLmRhdGFib3gtdG9wIHtcclxuICAgIGhlaWdodDogNzVweDtcclxuICB9XHJcbiAgLmRhdGFib3guZGF0YWJveC12ZXJ0aWNhbC5kYXRhYm94LWxnLmRhdGFib3gtaGFsdmVkIC5kYXRhYm94LWJvdHRvbSB7XHJcbiAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgfVxyXG4gIC5kYXRhYm94LmRhdGFib3gtdmVydGljYWwuZGF0YWJveC14bGcge1xyXG4gICAgaGVpZ2h0OiAyMTJweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuZGF0YWJveC5kYXRhYm94LXZlcnRpY2FsLmRhdGFib3gteGxnIC5kYXRhYm94LWljb24gPiAuZmE6YmVmb3JlLFxyXG4gIC5kYXRhYm94LmRhdGFib3gtdmVydGljYWwuZGF0YWJveC14bGcgLmRhdGFib3gtaWNvbiAudHlwY246YmVmb3JlLFxyXG4gIC5kYXRhYm94LmRhdGFib3gtdmVydGljYWwuZGF0YWJveC14bGcgLmRhdGFib3gtaWNvbiAuZ2x5cGhpY29uOmJlZm9yZSxcclxuICAuZGF0YWJveC5kYXRhYm94LXZlcnRpY2FsLmRhdGFib3gteGxnIC5kYXRhYm94LWljb24gLndpOmJlZm9yZSB7XHJcbiAgICBmb250LXNpemU6IDM4cHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICAuZGF0YWJveC5kYXRhYm94LXZlcnRpY2FsLmRhdGFib3gteGxnIC5kYXRhYm94LXRvcCB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgfVxyXG4gIC5kYXRhYm94LmRhdGFib3gtdmVydGljYWwuZGF0YWJveC14bGcgLmRhdGFib3gtYm90dG9tIHtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgfVxyXG4gIC5kYXRhYm94LmRhdGFib3gtdmVydGljYWwuZGF0YWJveC14bGcuZGF0YWJveC1pbnZlcnRlZCAuZGF0YWJveC1pY29uID4gLmZhOmJlZm9yZSxcclxuICAuZGF0YWJveC5kYXRhYm94LXZlcnRpY2FsLmRhdGFib3gteGxnLmRhdGFib3gtaW52ZXJ0ZWQgLmRhdGFib3gtaWNvbiAudHlwY246YmVmb3JlLFxyXG4gIC5kYXRhYm94LmRhdGFib3gtdmVydGljYWwuZGF0YWJveC14bGcuZGF0YWJveC1pbnZlcnRlZCAuZGF0YWJveC1pY29uIC5nbHlwaGljb246YmVmb3JlLFxyXG4gIC5kYXRhYm94LmRhdGFib3gtdmVydGljYWwuZGF0YWJveC14bGcuZGF0YWJveC1pbnZlcnRlZCAuZGF0YWJveC1pY29uIC53aTpiZWZvcmUge1xyXG4gICAgZm9udC1zaXplOiAxMjBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIC5kYXRhYm94LmRhdGFib3gtdmVydGljYWwuZGF0YWJveC14bGcuZGF0YWJveC1pbnZlcnRlZCAuZGF0YWJveC10b3Age1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICB9XHJcbiAgLmRhdGFib3guZGF0YWJveC12ZXJ0aWNhbC5kYXRhYm94LXhsZy5kYXRhYm94LWludmVydGVkIC5kYXRhYm94LWJvdHRvbSB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgfVxyXG4gIC5kYXRhYm94LmRhdGFib3gtdmVydGljYWwuZGF0YWJveC14bGcuZGF0YWJveC1oYWx2ZWQgLmRhdGFib3gtaWNvbiA+IC5mYTpiZWZvcmUsXHJcbiAgLmRhdGFib3guZGF0YWJveC12ZXJ0aWNhbC5kYXRhYm94LXhsZy5kYXRhYm94LWhhbHZlZCAuZGF0YWJveC1pY29uIC50eXBjbjpiZWZvcmUsXHJcbiAgLmRhdGFib3guZGF0YWJveC12ZXJ0aWNhbC5kYXRhYm94LXhsZy5kYXRhYm94LWhhbHZlZCAuZGF0YWJveC1pY29uIC5nbHlwaGljb246YmVmb3JlLFxyXG4gIC5kYXRhYm94LmRhdGFib3gtdmVydGljYWwuZGF0YWJveC14bGcuZGF0YWJveC1oYWx2ZWQgLmRhdGFib3gtaWNvbiAud2k6YmVmb3JlIHtcclxuICAgIGZvbnQtc2l6ZTogODVweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIC5kYXRhYm94LmRhdGFib3gtdmVydGljYWwuZGF0YWJveC14bGcuZGF0YWJveC1oYWx2ZWQgLmRhdGFib3gtdG9wIHtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgfVxyXG4gIC5kYXRhYm94LmRhdGFib3gtdmVydGljYWwuZGF0YWJveC14bGcuZGF0YWJveC1oYWx2ZWQgLmRhdGFib3gtYm90dG9tIHtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgfVxyXG4gIC5kYXRhYm94LmRhdGFib3gtdmVydGljYWwuZGF0YWJveC14eGxnIHtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmRhdGFib3guZGF0YWJveC12ZXJ0aWNhbC5kYXRhYm94LXh4bGcgLmRhdGFib3gtaWNvbiA+IC5mYTpiZWZvcmUsXHJcbiAgLmRhdGFib3guZGF0YWJveC12ZXJ0aWNhbC5kYXRhYm94LXh4bGcgLmRhdGFib3gtaWNvbiAudHlwY246YmVmb3JlLFxyXG4gIC5kYXRhYm94LmRhdGFib3gtdmVydGljYWwuZGF0YWJveC14eGxnIC5kYXRhYm94LWljb24gLmdseXBoaWNvbjpiZWZvcmUsXHJcbiAgLmRhdGFib3guZGF0YWJveC12ZXJ0aWNhbC5kYXRhYm94LXh4bGcgLmRhdGFib3gtaWNvbiAud2k6YmVmb3JlIHtcclxuICAgIGZvbnQtc2l6ZTogMzhweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIC5kYXRhYm94LmRhdGFib3gtdmVydGljYWwuZGF0YWJveC14eGxnIC5kYXRhYm94LXRvcCB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgfVxyXG4gIC5kYXRhYm94LmRhdGFib3gtdmVydGljYWwuZGF0YWJveC14eGxnIC5kYXRhYm94LWJvdHRvbSB7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gIH1cclxuICAuZGF0YWJveC5kYXRhYm94LXZlcnRpY2FsLmRhdGFib3gteHhsZy5kYXRhYm94LWludmVydGVkIC5kYXRhYm94LWljb24gPiAuZmE6YmVmb3JlLFxyXG4gIC5kYXRhYm94LmRhdGFib3gtdmVydGljYWwuZGF0YWJveC14eGxnLmRhdGFib3gtaW52ZXJ0ZWQgLmRhdGFib3gtaWNvbiAudHlwY246YmVmb3JlLFxyXG4gIC5kYXRhYm94LmRhdGFib3gtdmVydGljYWwuZGF0YWJveC14eGxnLmRhdGFib3gtaW52ZXJ0ZWQgLmRhdGFib3gtaWNvbiAuZ2x5cGhpY29uOmJlZm9yZSxcclxuICAuZGF0YWJveC5kYXRhYm94LXZlcnRpY2FsLmRhdGFib3gteHhsZy5kYXRhYm94LWludmVydGVkIC5kYXRhYm94LWljb24gLndpOmJlZm9yZSB7XHJcbiAgICBmb250LXNpemU6IDIyMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbiAgLmRhdGFib3guZGF0YWJveC12ZXJ0aWNhbC5kYXRhYm94LXh4bGcuZGF0YWJveC1pbnZlcnRlZCAuZGF0YWJveC10b3Age1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICB9XHJcbiAgLmRhdGFib3guZGF0YWJveC12ZXJ0aWNhbC5kYXRhYm94LXh4bGcuZGF0YWJveC1pbnZlcnRlZCAuZGF0YWJveC1ib3R0b20ge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gIH1cclxuICAuZGF0YWJveC5kYXRhYm94LXZlcnRpY2FsLmRhdGFib3gteHhsZy5kYXRhYm94LWhhbHZlZCAuZGF0YWJveC1pY29uID4gLmZhOmJlZm9yZSxcclxuICAuZGF0YWJveC5kYXRhYm94LXZlcnRpY2FsLmRhdGFib3gteHhsZy5kYXRhYm94LWhhbHZlZCAuZGF0YWJveC1pY29uIC50eXBjbjpiZWZvcmUsXHJcbiAgLmRhdGFib3guZGF0YWJveC12ZXJ0aWNhbC5kYXRhYm94LXh4bGcuZGF0YWJveC1oYWx2ZWQgLmRhdGFib3gtaWNvbiAuZ2x5cGhpY29uOmJlZm9yZSxcclxuICAuZGF0YWJveC5kYXRhYm94LXZlcnRpY2FsLmRhdGFib3gteHhsZy5kYXRhYm94LWhhbHZlZCAuZGF0YWJveC1pY29uIC53aTpiZWZvcmUge1xyXG4gICAgZm9udC1zaXplOiAxMjBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIC5kYXRhYm94LmRhdGFib3gtdmVydGljYWwuZGF0YWJveC14eGxnLmRhdGFib3gtaGFsdmVkIC5kYXRhYm94LXRvcCB7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gIH1cclxuICAuZGF0YWJveC5kYXRhYm94LXZlcnRpY2FsLmRhdGFib3gteHhsZy5kYXRhYm94LWhhbHZlZCAuZGF0YWJveC1ib3R0b20ge1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICB9XHJcbiAgLmRhdGFib3guZGF0YWJveC12ZXJ0aWNhbC5kYXRhYm94LXh4eGxnIHtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmRhdGFib3guZGF0YWJveC12ZXJ0aWNhbC5kYXRhYm94LXh4eGxnIC5kYXRhYm94LWljb24gPiAuZmE6YmVmb3JlLFxyXG4gIC5kYXRhYm94LmRhdGFib3gtdmVydGljYWwuZGF0YWJveC14eHhsZyAuZGF0YWJveC1pY29uIC50eXBjbjpiZWZvcmUsXHJcbiAgLmRhdGFib3guZGF0YWJveC12ZXJ0aWNhbC5kYXRhYm94LXh4eGxnIC5kYXRhYm94LWljb24gLmdseXBoaWNvbjpiZWZvcmUsXHJcbiAgLmRhdGFib3guZGF0YWJveC12ZXJ0aWNhbC5kYXRhYm94LXh4eGxnIC5kYXRhYm94LWljb24gLndpOmJlZm9yZSB7XHJcbiAgICBmb250LXNpemU6IDM4cHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICAuZGF0YWJveC5kYXRhYm94LXZlcnRpY2FsLmRhdGFib3gteHh4bGcgLmRhdGFib3gtdG9wIHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICB9XHJcbiAgLmRhdGFib3guZGF0YWJveC12ZXJ0aWNhbC5kYXRhYm94LXh4eGxnIC5kYXRhYm94LWJvdHRvbSB7XHJcbiAgICBoZWlnaHQ6IDQ1MHB4O1xyXG4gIH1cclxuICAuZGF0YWJveC5kYXRhYm94LXZlcnRpY2FsLmRhdGFib3gteHh4bGcuZGF0YWJveC1pbnZlcnRlZCAuZGF0YWJveC1pY29uID4gLmZhOmJlZm9yZSxcclxuICAuZGF0YWJveC5kYXRhYm94LXZlcnRpY2FsLmRhdGFib3gteHh4bGcuZGF0YWJveC1pbnZlcnRlZCAuZGF0YWJveC1pY29uIC50eXBjbjpiZWZvcmUsXHJcbiAgLmRhdGFib3guZGF0YWJveC12ZXJ0aWNhbC5kYXRhYm94LXh4eGxnLmRhdGFib3gtaW52ZXJ0ZWQgLmRhdGFib3gtaWNvbiAuZ2x5cGhpY29uOmJlZm9yZSxcclxuICAuZGF0YWJveC5kYXRhYm94LXZlcnRpY2FsLmRhdGFib3gteHh4bGcuZGF0YWJveC1pbnZlcnRlZCAuZGF0YWJveC1pY29uIC53aTpiZWZvcmUge1xyXG4gICAgZm9udC1zaXplOiA0MjBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIC5kYXRhYm94LmRhdGFib3gtdmVydGljYWwuZGF0YWJveC14eHhsZy5kYXRhYm94LWludmVydGVkIC5kYXRhYm94LXRvcCB7XHJcbiAgICBoZWlnaHQ6IDQ1MHB4O1xyXG4gIH1cclxuICAuZGF0YWJveC5kYXRhYm94LXZlcnRpY2FsLmRhdGFib3gteHh4bGcuZGF0YWJveC1pbnZlcnRlZCAuZGF0YWJveC1ib3R0b20ge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gIH1cclxuICAuZGF0YWJveC5kYXRhYm94LXZlcnRpY2FsLmRhdGFib3gteHh4bGcuZGF0YWJveC1oYWx2ZWQgLmRhdGFib3gtaWNvbiA+IC5mYTpiZWZvcmUsXHJcbiAgLmRhdGFib3guZGF0YWJveC12ZXJ0aWNhbC5kYXRhYm94LXh4eGxnLmRhdGFib3gtaGFsdmVkIC5kYXRhYm94LWljb24gLnR5cGNuOmJlZm9yZSxcclxuICAuZGF0YWJveC5kYXRhYm94LXZlcnRpY2FsLmRhdGFib3gteHh4bGcuZGF0YWJveC1oYWx2ZWQgLmRhdGFib3gtaWNvbiAuZ2x5cGhpY29uOmJlZm9yZSxcclxuICAuZGF0YWJveC5kYXRhYm94LXZlcnRpY2FsLmRhdGFib3gteHh4bGcuZGF0YWJveC1oYWx2ZWQgLmRhdGFib3gtaWNvbiAud2k6YmVmb3JlIHtcclxuICAgIGZvbnQtc2l6ZTogMjIwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuICAuZGF0YWJveC5kYXRhYm94LXZlcnRpY2FsLmRhdGFib3gteHh4bGcuZGF0YWJveC1oYWx2ZWQgLmRhdGFib3gtdG9wIHtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgfVxyXG4gIC5kYXRhYm94LmRhdGFib3gtdmVydGljYWwuZGF0YWJveC14eHhsZy5kYXRhYm94LWhhbHZlZCAuZGF0YWJveC1ib3R0b20ge1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICB9XHJcbiAgLmRhdGFib3ggLmNoYXJ0IHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9XHJcbiAgLyojZW5kcmVnaW9uIERhdGFCb3hlcyovXHJcblxyXG4gIC5ib3gtaW1nIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMTAlKSBkcm9wLXNoYWRvdygwcHggMXB4IDFweCBibGFjaykgY29udHJhc3QoMTA3JSk7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/demo-full/home/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/demo-full/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.service */ "./src/app/demo-full/shared.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(appSharedService) {
        this.appSharedService = appSharedService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/demo-full/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/demo-full/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service__WEBPACK_IMPORTED_MODULE_2__["AppSharedService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/demo-full/layout/layout.module.ts":
/*!***************************************************!*\
  !*** ./src/app/demo-full/layout/layout.module.ts ***!
  \***************************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/demo-full/layout/navbar/navbar.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/demo-full/layout/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
            ],
            exports: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"]],
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/demo-full/layout/navbar/navbar.component.html":
/*!***************************************************************!*\
  !*** ./src/app/demo-full/layout/navbar/navbar.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar -->\n<div class=\"navbar navbar-fixed-top\">\n  <div class=\"navbar-inner\">\n      <div class=\"navbar-container\">\n          <!-- Navbar Barnd -->\n          <div class=\"navbar-header pull-left\">\n              <a href=\"#\" class=\"navbar-brand\">\n                  Common Consumption Demo\n              </a>\n          </div>\n          <!-- /Navbar Barnd -->\n          <!-- Sidebar Collapse -->\n          <div class=\"sidebar-collapse\" id=\"sidebar-collapse\" (click)=\"sideBarToggle()\">\n              <i class=\"collapse-icon fa fa-bars\"></i>\n          </div>\n          <!-- /Sidebar Collapse -->\n          <!-- Account Area and Settings --->\n          <div class=\"navbar-header pull-right\">\n              <div class=\"navbar-account\">\n                  <ul class=\"account-area\">\n                      <li>\n                          <a class=\"wave in\" title=\"View on github\" target=\"_blank\" href=\"https://github.com/christyfernandes/common-consumption-demo.git\">\n                              <i class=\"icon fa fa-github custom\"></i>\n                          </a>\n                      </li>\n                      <li>\n                        <a class=\"text-link\" title=\"View on github\" href=\"https://github.com/christyfernandes/common-consumption-demo.git\" target=\"_blank\">\n                            Github\n                        </a>\n                    </li>\n                  </ul>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n<!-- /Navbar -->"

/***/ }),

/***/ "./src/app/demo-full/layout/navbar/navbar.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/demo-full/layout/navbar/navbar.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*#region navbar*/\n.navbar {\n  padding: 0;\n  margin: 0;\n  border: none;\n  height: 45px;\n  min-height: 45px;\n  z-index: 200;\n  box-shadow: 0px 1px 5px 3px rgba(0, 0, 0, 0.3); }\n.navbar .navbar-inner {\n  border: 0;\n  -webkit-border-radius: 0;\n  -webkit-background-clip: padding-box;\n  -moz-border-radius: 0;\n  -moz-background-clip: padding;\n  border-radius: 0;\n  background-clip: padding-box;\n  margin: 0;\n  padding-left: 0;\n  padding-right: 0;\n  min-height: 45px;\n  position: relative;\n  background: #024f9d; }\n.navbar .navbar-inner .navbar-container {\n  padding-left: 10px;\n  display: flex; }\n.navbar .navbar-inner .navbar-header .navbar-account {\n  height: 45px; }\n.navbar .navbar-inner .navbar-header .navbar-account > div {\n  display: inline-block;\n  width: auto;\n  vertical-align: top; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area {\n  position: absolute;\n  top: 0;\n  right: 50px;\n  zoom: 1;\n  filter: alpha(opacity=100);\n  -webkit-opacity: 1;\n  -moz-opacity: 1;\n  opacity: 1;\n  list-style: none;\n  margin-bottom: 0;\n  display: inline-block; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li {\n  float: left;\n  position: relative;\n  height: 45px; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li > a {\n  position: relative;\n  min-width: 50px;\n  height: 45px;\n  display: inline-block; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li > a:hover {\n  text-decoration: none; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li > a .icon {\n  display: block;\n  color: #ffffff;\n  font-size: 16px;\n  line-height: 48px;\n  text-align: center;\n  transition: line-height 0.3s ease; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li > a .badge {\n  position: absolute;\n  top: 6px;\n  left: 4px;\n  padding: 2px;\n  cursor: pointer;\n  background-color: transparent !important;\n  border: 1px solid #ffffff;\n  width: 18px;\n  height: 18px;\n  box-shadow: 1px 1px 0 #2dc3e8;\n  transition: top 0.3s ease; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li > a.wave {\n  overflow: visible;\n  cursor: pointer;\n  z-index: 10;\n  box-sizing: border-box;\n  transform: scale(0);\n  transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55); }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li > a.wave.in {\n  transform: scale(1); }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li > a.wave.in:after {\n  content: \"\";\n  top: 3px;\n  left: 5px;\n  position: absolute;\n  width: 40px;\n  height: 40px;\n  background-image: 8121991;\n  background-image: radial-gradient(center center, farthest-side circle, rgba(26, 175, 93, 0) 70%, #f5f5f5 100%);\n  background-image: -webkit-radial-gradient(center center, farthest-side circle, rgba(26, 175, 93, 0) 70%, #f5f5f5 100%);\n  border: 1px solid #ffffff;\n  -webkit-animation: wave 4s 3s infinite linear;\n  animation: wave 4s 3s infinite linear;\n  zoom: 1;\n  filter: alpha(opacity=0);\n  -webkit-opacity: 0;\n  -moz-opacity: 0;\n  opacity: 0;\n  -webkit-border-radius: 50%;\n  -webkit-background-clip: padding-box;\n  -moz-border-radius: 50%;\n  -moz-background-clip: padding;\n  border-radius: 50%;\n  background-clip: padding-box;\n  box-sizing: border-box; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li > a.borderpulse {\n  width: 45px;\n  height: 45px; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li > a.borderpulse:after,\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li > a.borderpulse:before {\n  content: \"\";\n  position: absolute;\n  top: 1px;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  -webkit-border-radius: 50%;\n  -webkit-background-clip: padding-box;\n  -moz-border-radius: 50%;\n  -moz-background-clip: padding;\n  border-radius: 50%;\n  background-clip: padding-box;\n  border: 1px solid #ffffff;\n  box-sizing: border-box; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li > a.borderpulse:after,\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li > a.borderpulse:before {\n  transform: scale(0.91);\n  -webkit-animation: borderPulse 3.5s infinite ease;\n  animation: borderPulse 3.5s infinite ease; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li > a.borderpulse .badge {\n  border: 0;\n  box-shadow: none; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li > a.borderpulse:before {\n  -webkit-animation-delay: 0.6s;\n  animation-delay: 0.6s; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li > a.borderpulse i,\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li > a.borderpulse .badge {\n  -webkit-animation-delay: 0.3s;\n  animation-delay: 0.3s; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li > a.blink i,\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li > a.blink .badge {\n  transform: scale(0.91);\n  -webkit-animation: borderPulse 3.5s infinite ease;\n  animation: borderPulse 3.5s infinite ease; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li > a.blink i {\n  -webkit-animation-delay: 0.05s;\n  animation-delay: 0.05s; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu {\n  padding: 0;\n  min-width: 240px;\n  -webkit-animation-name: dropdownSlideInDown;\n  animation-name: dropdownSlideInDown;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-border-radius: 0 !important;\n  -webkit-background-clip: padding-box !important;\n  -moz-border-radius: 0 !important;\n  -moz-background-clip: padding !important;\n  border-radius: 0 !important;\n  background-clip: padding-box !important; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu li {\n  background-color: #ffffff;\n  border: 0;\n  padding: 0 8px; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu li:hover {\n  background-color: #f5f5f5; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu li a {\n  margin: 0;\n  font-size: 12px;\n  line-height: 16px;\n  padding: 10px 2px; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu li a .progress {\n  margin-bottom: 0;\n  margin-top: 4px; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu li a:hover {\n  background-color: #f5f5f5; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu li.dropdown-header,\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu li.dropdown-footer {\n  -webkit-text-shadow: none;\n  text-shadow: none;\n  font-size: 13px;\n  font-weight: normal;\n  text-transform: none;\n  color: #262626; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu li.dropdown-header {\n  padding: 0 10px;\n  line-height: 34px;\n  margin-bottom: 10px;\n  border-bottom: 1px solid #cecece; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu li.dropdown-header a {\n  line-height: 34px; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu li.dropdown-header[class*=\"bordered-\"] {\n  border-bottom-width: 3px;\n  border-style: solid; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu li.dropdown-header i {\n  margin-right: 5px; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu li.dropdown-footer {\n  padding: 8px 5px 8px 10px; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu li.dropdown-footer[class*=\"bordered-\"] {\n  border-top-width: 3px;\n  border-style: solid; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu li.dropdown-footer a {\n  display: inline-block;\n  color: #999999;\n  padding: 0; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu li.dropdown-footer .btn {\n  margin-top: -3px; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu.dropdown-notifications {\n  min-width: 300px;\n  padding-top: 10px; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu.dropdown-notifications li {\n  border-bottom: 1px solid #f3f3f3; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu.dropdown-notifications li .notification-icon {\n  float: left; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu.dropdown-notifications li .notification-icon i {\n  width: 32px;\n  height: 32px;\n  text-align: center;\n  line-height: 32px;\n  margin-right: 10px;\n  font-size: 15px;\n  border-radius: 50%; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu.dropdown-notifications li .notification-body {\n  float: left; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu.dropdown-notifications li .notification-body .title {\n  display: block;\n  font-size: 13px; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu.dropdown-notifications li .notification-body .description {\n  display: block;\n  font-size: 10px;\n  color: #999999; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu.dropdown-notifications li .notification-extra {\n  float: right;\n  text-align: right; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu.dropdown-notifications li .notification-extra i {\n  font-size: 14px; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu.dropdown-notifications li .notification-extra .description {\n  display: block;\n  font-size: 10px;\n  color: #999999; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu.dropdown-notifications li.dropdown-footer {\n  background-color: #11a9cc;\n  border-bottom: 0;\n  color: #ffffff; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu.dropdown-notifications li.dropdown-footer a {\n  color: #ffffff; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu.dropdown-notifications li.dropdown-footer .weather-icon {\n  margin-top: -7px;\n  margin-left: 5px; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu.dropdown-messages {\n  width: 300px;\n  padding-top: 10px; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu.dropdown-messages li {\n  border-bottom: 1px solid #f3f3f3; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu.dropdown-messages li .message-avatar {\n  max-width: 42px;\n  margin-right: 6px;\n  margin-top: 5px;\n  vertical-align: top; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu.dropdown-messages li .message {\n  display: inline-block;\n  position: relative;\n  width: 225px; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu.dropdown-messages li .message span {\n  display: block; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu.dropdown-messages li .message-sender {\n  font-size: 13px; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu.dropdown-messages li .message-time {\n  position: absolute;\n  top: 0;\n  right: 0;\n  font-size: 11px;\n  font-weight: 400;\n  color: #2dc3e8; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu.dropdown-messages li .message-subject {\n  margin-top: 5px; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu.dropdown-messages li .message-body {\n  color: #999999;\n  max-height: 35px;\n  width: 100%;\n  -ms-text-overflow: ellipsis;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu.dropdown-login-area > li {\n  border-bottom: 1px solid #f5f5f5; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu.dropdown-login-area > li:hover,\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu.dropdown-login-area > li a:hover {\n  background-color: #ffffff; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu.dropdown-login-area > li.username {\n  display: none;\n  text-align: center; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu.dropdown-login-area > li.username,\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu.dropdown-login-area > li.username a {\n  color: #d0d0d0;\n  font-size: 14px;\n  font-weight: 300; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu.dropdown-login-area > li.email {\n  text-align: center;\n  font-size: 12px; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu.dropdown-login-area > li.email,\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu.dropdown-login-area > li.email a {\n  color: #d0d0d0; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu.dropdown-login-area > li .avatar-area {\n  position: relative;\n  text-align: center;\n  margin: 10px auto;\n  width: 128px; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu.dropdown-login-area > li .avatar-area .avatar {\n  width: 128px;\n  height: 128px; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu.dropdown-login-area > li .avatar-area .caption {\n  background-color: #2dc3e8;\n  zoom: 1;\n  filter: alpha(opacity=70);\n  -webkit-opacity: 0.7;\n  -moz-opacity: 0.7;\n  opacity: 0.7;\n  bottom: 0;\n  left: 0;\n  color: #fff;\n  font-size: 10px;\n  line-height: 9px;\n  position: absolute;\n  padding: 7px 0;\n  text-align: center;\n  width: 128px;\n  cursor: pointer; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu.dropdown-login-area > li.edit {\n  min-height: 35px; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu.dropdown-login-area > li.edit a {\n  color: #999999;\n  display: inline-block;\n  clear: none;\n  font-size: 13px; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu.dropdown-login-area > li.edit a:hover {\n  color: #11a9cc; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu.dropdown-login-area > li.theme-area {\n  display: table;\n  width: 100%;\n  padding-bottom: 5px; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu.dropdown-login-area > li.theme-area .colorpicker {\n  padding: 10px 4px;\n  width: 100%; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu.dropdown-login-area > li.theme-area .colorpicker > li {\n  display: block;\n  float: left;\n  width: 23px;\n  height: 23px;\n  margin: 2px;\n  padding: 0; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu.dropdown-login-area > li.theme-area .colorpicker > li > .colorpick-btn {\n  display: block;\n  width: 23px;\n  height: 23px;\n  margin: 0;\n  padding: 0;\n  -webkit-border-radius: 0;\n  -webkit-background-clip: padding-box;\n  -moz-border-radius: 0;\n  -moz-background-clip: padding;\n  border-radius: 0;\n  background-clip: padding-box;\n  position: relative;\n  transition: all ease 0.1s; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu.dropdown-login-area > li.theme-area .colorpicker > li > .colorpick-btn:hover {\n  text-decoration: none;\n  zoom: 1;\n  filter: alpha(opacity=80);\n  -webkit-opacity: 0.8;\n  -moz-opacity: 0.8;\n  opacity: 0.8;\n  transform: scale(1.08); }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu.dropdown-login-area > li.theme-area .colorpicker > li > .colorpick-btn.selected:after {\n  content: \"\\f00c\";\n  display: inline-block;\n  font-family: FontAwesome;\n  font-size: 11px;\n  color: #ffffff;\n  position: absolute;\n  left: 0;\n  right: 0;\n  text-align: center;\n  line-height: 20px; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu.dropdown-login-area > li.theme-area .btn-colorpicker {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  background-color: #DDD;\n  vertical-align: middle;\n  border-radius: 0; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu.dropdown-login-area > li.dropdown-footer {\n  padding: 10px;\n  border-top: 3px solid #2dc3e8;\n  border-bottom: 0;\n  text-align: right; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu.dropdown-login-area > li.dropdown-footer a {\n  color: #717171;\n  font-size: 13px;\n  font-weight: 300; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-arrow:before {\n  content: '';\n  display: inline-block;\n  right: 0;\n  position: absolute;\n  width: 50px;\n  background-color: #ffffff;\n  border: 0;\n  top: -46px;\n  height: 3px;\n  box-shadow: 0 2px 40px rgba(0, 0, 0, 0.4); }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li.open > a {\n  background-color: #2dc3e8;\n  box-shadow: 0 2px 40px rgba(0, 0, 0, 0.4); }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li.open .dropdown-menu {\n  margin-top: 0;\n  right: 0;\n  border: 0 !important; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area .login-area {\n  padding: 8px 20px 10px 20px;\n  height: 45px;\n  opacity: 1;\n  position: relative;\n  cursor: pointer; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area .login-area .avatar {\n  margin-right: 14px;\n  display: block;\n  float: left;\n  border-left: 2px solid #fb6e52;\n  width: 29px;\n  height: 29px; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area .login-area .avatar img {\n  width: 29px;\n  height: 29px; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area .login-area section {\n  width: auto;\n  display: block;\n  overflow: hidden;\n  line-height: 25px;\n  float: left; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area .login-area section h2 {\n  font-size: 14px;\n  font-weight: 400;\n  white-space: nowrap;\n  margin: 0; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area .login-area section h2 span {\n  display: block;\n  color: #fff;\n  overflow: hidden;\n  -ms-text-overflow: ellipsis;\n  text-overflow: ellipsis;\n  text-decoration: none;\n  line-height: 25px; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area .login-area + .dropdown-menu {\n  width: 100%;\n  min-width: 100px; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area .login-area + .dropdown-arrow:before {\n  width: 100%; }\n.navbar .navbar-inner .navbar-header .navbar-account .setting {\n  width: 50px;\n  position: absolute;\n  right: 0;\n  top: 0; }\n.navbar .navbar-inner .navbar-header .navbar-account .setting a {\n  position: relative;\n  width: 50px;\n  height: 45px;\n  display: inline-block;\n  transition: all 0.5s ease; }\n.navbar .navbar-inner .navbar-header .navbar-account .setting a:hover {\n  text-decoration: none; }\n.navbar .navbar-inner .navbar-header .navbar-account .setting a .icon {\n  display: block;\n  color: #ffffff;\n  font-size: 22px;\n  line-height: 45px;\n  text-align: center; }\n.navbar .navbar-inner .navbar-header .navbar-account .setting-container {\n  transform: rotateY(90deg);\n  transform-origin: top left;\n  display: inline-block;\n  width: 505px;\n  height: 45px;\n  zoom: 1;\n  filter: alpha(opacity=0);\n  -webkit-opacity: 0;\n  -moz-opacity: 0;\n  opacity: 0;\n  text-align: center;\n  padding: 11px 0;\n  position: absolute;\n  top: 0;\n  right: 0; }\n.navbar .navbar-inner .navbar-header .navbar-account .setting-container input[type=checkbox] {\n  display: inline-block; }\n.navbar .navbar-inner .navbar-header .navbar-account .setting-container input[type=checkbox] + .text {\n  color: #ffffff;\n  margin-right: 8px;\n  font-weight: 300; }\n.navbar .navbar-inner .navbar-header .navbar-account .setting-container input[type=checkbox] + .text:before {\n  border-color: #2dc3e8; }\n.navbar .navbar-inner .navbar-header .navbar-account .setting-container input[type=checkbox]:checked + .text {\n  color: #ffffff; }\n.navbar .navbar-inner .navbar-header .navbar-account .setting-container input[type=checkbox]:checked + .text:before {\n  border-color: #2dc3e8;\n  color: #fb6e52; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area,\n.navbar .navbar-inner .navbar-header .navbar-account .setting-container,\n.navbar .navbar-inner .navbar-header .navbar-account .setting {\n  transform-style: preserve-3d;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  transition: 0.9s; }\n.navbar .navbar-inner .navbar-header .navbar-account.setting-open .setting {\n  right: 505px;\n  background-color: #2dc3e8; }\n.navbar .navbar-inner .navbar-header .navbar-account.setting-open .setting a {\n  box-shadow: 0 -6px 40px rgba(0, 0, 0, 0.4); }\n.navbar .navbar-inner .navbar-header .navbar-account.setting-open .setting a:before {\n  content: '';\n  display: inline-block;\n  right: 0;\n  position: absolute;\n  width: 50px;\n  background-color: #ffffff;\n  border: 0;\n  top: 0;\n  height: 3px; }\n.navbar .navbar-inner .navbar-header .navbar-account.setting-open .account-area {\n  transform: rotateY(-90deg);\n  transform-origin: top right;\n  zoom: 1;\n  filter: alpha(opacity=0);\n  -webkit-opacity: 0;\n  -moz-opacity: 0;\n  opacity: 0;\n  right: 450px; }\n.navbar .navbar-inner .navbar-header .navbar-account.setting-open .setting-container {\n  transform: rotateY(0deg);\n  zoom: 1;\n  filter: alpha(opacity=100);\n  -webkit-opacity: 1;\n  -moz-opacity: 1;\n  opacity: 1;\n  padding: 11px; }\n.navbar .navbar-brand {\n  color: #ffffff;\n  font-size: 20px;\n  text-shadow: none;\n  -webkit-text-shadow: none;\n  padding: 2px 0 2px 0;\n  font-weight: 200;\n  height: 45px;\n  line-height: 35px; }\n.navbar .navbar-brand small img {\n  height: 40px;\n  width: 177px; }\n.navbar .sidebar-collapse {\n  text-align: center;\n  padding: 0;\n  position: relative;\n  top: 0px;\n  z-index: 2;\n  width: 35px;\n  height: 45px;\n  margin-left: 15px; }\n.navbar .sidebar-collapse:hover {\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2); }\n.navbar .sidebar-collapse .collapse-icon {\n  display: inline-block;\n  cursor: pointer;\n  font-size: 18px;\n  color: #ffffff;\n  padding: 11px 5px;\n  line-height: 22px;\n  position: relative;\n  transition: background-color 0.218s ease;\n  transition: box-shadow 0.218s ease;\n  transition: color 0.318s ease; }\n.navbar .sidebar-collapse.active:hover {\n  box-shadow: none; }\n.navbar .sidebar-collapse.active .collapse-icon {\n  font-size: 14px;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);\n  padding: 11px; }\n.navbar.navbar-fixed-top {\n  z-index: 1003; }\n.navbar.navbar-fixed-top + .main-container {\n  margin-top: 45px; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li > a .icon.custom {\n  font-size: 30px;\n  color: #00ff4a; }\n.navbar .navbar-inner .navbar-header .navbar-account .account-area > li > a.text-link {\n  font-size: 20px;\n  line-height: 45px;\n  color: #00ff4a; }\n@media only screen and (max-width: 767px) {\n  .navbar-container {\n    padding-left: 2px; } }\n@media only screen and (max-width: 760px) {\n  .navbar .navbar-inner .navbar-header .navbar-account.setting-open .setting {\n    top: 45px; }\n  .navbar .navbar-inner .navbar-header .navbar-account.setting-open .setting-container {\n    top: 45px; }\n  .navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu.dropdown-login-area > li.username {\n    display: block; }\n  .navbar .navbar-inner .navbar-header .navbar-account .account-area .login-area {\n    padding: 8px; }\n  .navbar .navbar-inner .navbar-header .navbar-account .account-area .login-area section {\n    display: none; }\n  .navbar .navbar-inner .navbar-header .navbar-account .account-area .login-area .avatar {\n    margin-right: 0;\n    margin-left: 1px; }\n  .navbar .navbar-inner .navbar-header .navbar-account .account-area .login-area + .dropdown-menu {\n    min-width: 200px; }\n  .navbar .navbar-inner .navbar-header .navbar-account .account-area .login-area + .dropdown-menu:before {\n    width: 50px; } }\n@media only screen and (max-width: 759px) {\n  .navbar .navbar-inner .navbar-header .navbar-account.setting-open .setting-container {\n    width: 270px;\n    top: 0;\n    padding: 0 5px;\n    text-align: left; }\n  .navbar .navbar-inner .navbar-header .navbar-account.setting-open .setting-container label {\n    margin-bottom: 0; }\n  .navbar .navbar-inner .navbar-header .navbar-account.setting-open .setting {\n    right: 270px;\n    top: 0; } }\n@media only screen and (max-width: 530px) {\n  .navbar {\n    height: 90px; }\n  .navbar .sidebar-collapse {\n    left: auto;\n    right: 0;\n    width: 50px; }\n  .navbar .sidebar-collapse .collpse-icon {\n    padding: 11px 15px; }\n  .navbar .navbar-brand {\n    padding-left: 10px; }\n  .navbar .navbar-inner .navbar-header {\n    float: none !important;\n    display: block; }\n  .navbar .navbar-inner .navbar-header .navbar-account {\n    float: right; }\n  .navbar .navbar-inner .navbar-header .navbar-account .account-area {\n    padding-left: 0;\n    top: 45px; }\n  .navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu.dropdown-notifications {\n    left: -135px;\n    right: auto; }\n  .navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu.dropdown-notifications.dropdown-arrow:before {\n    left: 135px; }\n  .navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu.dropdown-messages {\n    left: -135px;\n    right: auto; }\n  .navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu.dropdown-messages.dropdown-arrow:before {\n    left: 135px; }\n  .navbar .navbar-inner .navbar-header .navbar-account .setting {\n    top: 45px !important; }\n  .navbar .navbar-inner .navbar-header .navbar-account .setting-container {\n    top: 45px !important; }\n  .navbar .navbar-inner .navbar-header .navbar-account.setting-open .setting-container {\n    left: 50px; }\n  .navbar .navbar-inner .navbar-header .navbar-account.setting-open .setting {\n    left: 0; }\n  .navbar .navbar-inner .navbar-container {\n    padding-left: 0; }\n  .navbar-fixed-top + .main-container {\n    margin-top: 90px !important; }\n  .breadcrumbs-fixed {\n    top: 90px !important; }\n  .breadcrumbs-fixed + .page-header {\n    margin-top: 40px !important; }\n  .page-header-fixed {\n    top: 130px !important; }\n  .page-header-fixed + .page-body {\n    margin-top: 80px !important; }\n  .page-sidebar.sidebar-fixed {\n    top: 90px !important; } }\n@media only screen and (max-width: 450px) {\n  .navbar .navbar-inner .navbar-header .navbar-account.setting-open .setting-container {\n    width: 270px;\n    padding: 0 5px;\n    text-align: left;\n    left: 50px; }\n  .navbar .navbar-inner .navbar-header .navbar-account.setting-open .setting-container label {\n    margin-bottom: 0; }\n  .navbar .navbar-inner .navbar-header .navbar-account.setting-open .setting {\n    left: 0; } }\n@media only screen and (max-width: 400px) {\n  .navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu.dropdown-notifications {\n    left: -55px;\n    right: auto; }\n  .navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu.dropdown-notifications.dropdown-arrow:before {\n    left: 55px; }\n  .navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu.dropdown-messages {\n    left: -105px;\n    right: auto; }\n  .navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu.dropdown-messages.dropdown-arrow:before {\n    left: 105px; }\n  .navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu.dropdown-tasks {\n    left: -100px;\n    right: auto; }\n  .navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-menu.dropdown-tasks.dropdown-arrow:before {\n    left: 100px; } }\n@media only screen and (max-width: 320px) {\n  .navbar .navbar-inner .navbar-header .navbar-account .account-area > li .dropdown-arrow:before {\n    width: 45px !important; }\n  .navbar .navbar-inner .navbar-header .navbar-account .account-area > li > a {\n    min-width: 45px; } }\n/*#endregion navbar*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby1mdWxsL2xheW91dC9uYXZiYXIvRTpcXHByb2plY3RzXFxjaHJpc3R5XFxjb21tb24tY29uc3VtcHRpb24tZGVtby9zcmNcXGFwcFxcZGVtby1mdWxsXFxsYXlvdXRcXG5hdmJhclxcbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFrQjtBQUNsQjtFQUNJLFdBQVU7RUFDVixVQUFTO0VBQ1QsYUFBWTtFQUNaLGFBQVk7RUFDWixpQkFBZ0I7RUFDaEIsYUFBWTtFQUNaLCtDQUEyQyxFQUM1QztBQUNEO0VBQ0UsVUFBUztFQUNULHlCQUF3QjtFQUN4QixxQ0FBb0M7RUFDcEMsc0JBQXFCO0VBQ3JCLDhCQUE2QjtFQUM3QixpQkFBZ0I7RUFDaEIsNkJBQTRCO0VBQzVCLFVBQVM7RUFDVCxnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQixpQkFBZ0I7RUFDaEIsbUJBQWtCO0VBQ2xCLG9CQUFtQixFQUNwQjtBQUNEO0VBQ0UsbUJBQWtCO0VBQ2xCLGNBQWEsRUFDZDtBQUNEO0VBQ0UsYUFBWSxFQUNiO0FBQ0Q7RUFDRSxzQkFBcUI7RUFDckIsWUFBVztFQUNYLG9CQUFtQixFQUNwQjtBQUNEO0VBQ0UsbUJBQWtCO0VBQ2xCLE9BQU07RUFDTixZQUFXO0VBQ1gsUUFBTztFQUNQLDJCQUEwQjtFQUMxQixtQkFBa0I7RUFDbEIsZ0JBQWU7RUFDZixXQUFVO0VBQ1YsaUJBQWdCO0VBQ2hCLGlCQUFnQjtFQUNoQixzQkFBcUIsRUFDdEI7QUFDRDtFQUNFLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsYUFBWSxFQUNiO0FBQ0Q7RUFDRSxtQkFBa0I7RUFDbEIsZ0JBQWU7RUFDZixhQUFZO0VBQ1osc0JBQXFCLEVBQ3RCO0FBQ0Q7RUFDRSxzQkFBcUIsRUFDdEI7QUFDRDtFQUNFLGVBQWM7RUFDZCxlQUFjO0VBQ2QsZ0JBQWU7RUFDZixrQkFBaUI7RUFDakIsbUJBQWtCO0VBSWxCLGtDQUFpQyxFQUNsQztBQUNEO0VBQ0UsbUJBQWtCO0VBQ2xCLFNBQVE7RUFDUixVQUFTO0VBQ1QsYUFBWTtFQUNaLGdCQUFlO0VBQ2YseUNBQXdDO0VBQ3hDLDBCQUF5QjtFQUN6QixZQUFXO0VBQ1gsYUFBWTtFQUNaLDhCQUE2QjtFQUk3QiwwQkFBeUIsRUFDMUI7QUFDRDtFQUNFLGtCQUFpQjtFQUNqQixnQkFBZTtFQUNmLFlBQVc7RUFHWCx1QkFBc0I7RUFLdEIsb0JBQW1CO0VBSW5CLGtFQUFtUCxFQUNwUDtBQUNEO0VBS0Usb0JBQW1CLEVBQ3BCO0FBQ0Q7RUFDRSxZQUFXO0VBQ1gsU0FBUTtFQUNSLFVBQVM7RUFDVCxtQkFBa0I7RUFDbEIsWUFBVztFQUNYLGFBQVk7RUFDWiwwQkFBeUI7RUFHekIsK0dBQThHO0VBQzlHLHVIQUFzSDtFQUN0SCwwQkFBeUI7RUFDekIsOENBQTZDO0VBRzdDLHNDQUFxQztFQUNyQyxRQUFPO0VBQ1AseUJBQXdCO0VBQ3hCLG1CQUFrQjtFQUNsQixnQkFBZTtFQUNmLFdBQVU7RUFDViwyQkFBMEI7RUFDMUIscUNBQW9DO0VBQ3BDLHdCQUF1QjtFQUN2Qiw4QkFBNkI7RUFDN0IsbUJBQWtCO0VBQ2xCLDZCQUE0QjtFQUc1Qix1QkFBc0IsRUFDdkI7QUFDRDtFQUNFLFlBQVc7RUFDWCxhQUFZLEVBQ2I7QUFDRDs7RUFFRSxZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLFNBQVE7RUFDUixRQUFPO0VBQ1AsWUFBVztFQUNYLGFBQVk7RUFDWiwyQkFBMEI7RUFDMUIscUNBQW9DO0VBQ3BDLHdCQUF1QjtFQUN2Qiw4QkFBNkI7RUFDN0IsbUJBQWtCO0VBQ2xCLDZCQUE0QjtFQUM1QiwwQkFBeUI7RUFHekIsdUJBQXNCLEVBQ3ZCO0FBQ0Q7O0VBTUUsdUJBQXNCO0VBQ3RCLGtEQUFpRDtFQUdqRCwwQ0FBeUMsRUFDMUM7QUFDRDtFQUNFLFVBQVM7RUFHVCxpQkFBZ0IsRUFDakI7QUFDRDtFQUNFLDhCQUE2QjtFQUc3QixzQkFBcUIsRUFDdEI7QUFDRDs7RUFFRSw4QkFBNkI7RUFHN0Isc0JBQXFCLEVBQ3RCO0FBQ0Q7O0VBTUUsdUJBQXNCO0VBQ3RCLGtEQUFpRDtFQUdqRCwwQ0FBeUMsRUFDMUM7QUFDRDtFQUNFLCtCQUE4QjtFQUc5Qix1QkFBc0IsRUFDdkI7QUFDRDtFQUNFLFdBQVU7RUFDVixpQkFBZ0I7RUFDaEIsNENBQTJDO0VBRzNDLG9DQUFtQztFQUNuQyxpQ0FBZ0M7RUFHaEMseUJBQXdCO0VBQ3hCLG9DQUFtQztFQUNuQyxnREFBK0M7RUFDL0MsaUNBQWdDO0VBQ2hDLHlDQUF3QztFQUN4Qyw0QkFBMkI7RUFDM0Isd0NBQXVDLEVBQ3hDO0FBQ0Q7RUFDRSwwQkFBeUI7RUFDekIsVUFBUztFQUNULGVBQWMsRUFDZjtBQUNEO0VBQ0UsMEJBQXlCLEVBQzFCO0FBQ0Q7RUFDRSxVQUFTO0VBQ1QsZ0JBQWU7RUFDZixrQkFBaUI7RUFDakIsa0JBQWlCLEVBQ2xCO0FBQ0Q7RUFDRSxpQkFBZ0I7RUFDaEIsZ0JBQWUsRUFDaEI7QUFDRDtFQUNFLDBCQUF5QixFQUMxQjtBQUNEOztFQUVFLDBCQUF5QjtFQUN6QixrQkFBaUI7RUFDakIsZ0JBQWU7RUFDZixvQkFBbUI7RUFDbkIscUJBQW9CO0VBQ3BCLGVBQWMsRUFDZjtBQUNEO0VBQ0UsZ0JBQWU7RUFDZixrQkFBaUI7RUFDakIsb0JBQW1CO0VBQ25CLGlDQUFnQyxFQUNqQztBQUNEO0VBQ0Usa0JBQWlCLEVBQ2xCO0FBQ0Q7RUFDRSx5QkFBd0I7RUFDeEIsb0JBQW1CLEVBQ3BCO0FBQ0Q7RUFDRSxrQkFBaUIsRUFDbEI7QUFDRDtFQUNFLDBCQUF5QixFQUMxQjtBQUNEO0VBQ0Usc0JBQXFCO0VBQ3JCLG9CQUFtQixFQUNwQjtBQUNEO0VBQ0Usc0JBQXFCO0VBQ3JCLGVBQWM7RUFDZCxXQUFVLEVBQ1g7QUFDRDtFQUNFLGlCQUFnQixFQUNqQjtBQUNEO0VBQ0UsaUJBQWdCO0VBQ2hCLGtCQUFpQixFQUNsQjtBQUNEO0VBQ0UsaUNBQWdDLEVBQ2pDO0FBQ0Q7RUFDRSxZQUFXLEVBQ1o7QUFDRDtFQUNFLFlBQVc7RUFDWCxhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsZ0JBQWU7RUFDZixtQkFBa0IsRUFDbkI7QUFDRDtFQUNFLFlBQVcsRUFDWjtBQUNEO0VBQ0UsZUFBYztFQUNkLGdCQUFlLEVBQ2hCO0FBQ0Q7RUFDRSxlQUFjO0VBQ2QsZ0JBQWU7RUFDZixlQUFjLEVBQ2Y7QUFDRDtFQUNFLGFBQVk7RUFDWixrQkFBaUIsRUFDbEI7QUFDRDtFQUNFLGdCQUFlLEVBQ2hCO0FBQ0Q7RUFDRSxlQUFjO0VBQ2QsZ0JBQWU7RUFDZixlQUFjLEVBQ2Y7QUFDRDtFQUNFLDBCQUF5QjtFQUN6QixpQkFBZ0I7RUFDaEIsZUFBYyxFQUNmO0FBQ0Q7RUFDRSxlQUFjLEVBQ2Y7QUFDRDtFQUNFLGlCQUFnQjtFQUNoQixpQkFBZ0IsRUFDakI7QUFDRDtFQUNFLGFBQVk7RUFDWixrQkFBaUIsRUFDbEI7QUFDRDtFQUNFLGlDQUFnQyxFQUNqQztBQUNEO0VBQ0UsZ0JBQWU7RUFDZixrQkFBaUI7RUFDakIsZ0JBQWU7RUFDZixvQkFBbUIsRUFDcEI7QUFDRDtFQUNFLHNCQUFxQjtFQUNyQixtQkFBa0I7RUFDbEIsYUFBWSxFQUNiO0FBQ0Q7RUFDRSxlQUFjLEVBQ2Y7QUFDRDtFQUNFLGdCQUFlLEVBQ2hCO0FBQ0Q7RUFDRSxtQkFBa0I7RUFDbEIsT0FBTTtFQUNOLFNBQVE7RUFDUixnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQixlQUFjLEVBQ2Y7QUFDRDtFQUNFLGdCQUFlLEVBQ2hCO0FBQ0Q7RUFDRSxlQUFjO0VBQ2QsaUJBQWdCO0VBQ2hCLFlBQVc7RUFDWCw0QkFBMkI7RUFFM0Isd0JBQXVCO0VBQ3ZCLG9CQUFtQjtFQUNuQixpQkFBZ0IsRUFDakI7QUFDRDtFQUNFLGlDQUFnQyxFQUNqQztBQUNEOztFQUVFLDBCQUF5QixFQUMxQjtBQUNEO0VBQ0UsY0FBYTtFQUNiLG1CQUFrQixFQUNuQjtBQUNEOztFQUVFLGVBQWM7RUFDZCxnQkFBZTtFQUNmLGlCQUFnQixFQUNqQjtBQUNEO0VBQ0UsbUJBQWtCO0VBQ2xCLGdCQUFlLEVBQ2hCO0FBQ0Q7O0VBRUUsZUFBYyxFQUNmO0FBQ0Q7RUFDRSxtQkFBa0I7RUFDbEIsbUJBQWtCO0VBQ2xCLGtCQUFpQjtFQUNqQixhQUFZLEVBQ2I7QUFDRDtFQUNFLGFBQVk7RUFDWixjQUFhLEVBQ2Q7QUFDRDtFQUNFLDBCQUF5QjtFQUN6QixRQUFPO0VBQ1AsMEJBQXlCO0VBQ3pCLHFCQUFvQjtFQUNwQixrQkFBaUI7RUFDakIsYUFBWTtFQUNaLFVBQVM7RUFDVCxRQUFPO0VBQ1AsWUFBVztFQUNYLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLG1CQUFrQjtFQUNsQixlQUFjO0VBQ2QsbUJBQWtCO0VBQ2xCLGFBQVk7RUFDWixnQkFBZSxFQUNoQjtBQUNEO0VBQ0UsaUJBQWdCLEVBQ2pCO0FBQ0Q7RUFDRSxlQUFjO0VBQ2Qsc0JBQXFCO0VBQ3JCLFlBQVc7RUFDWCxnQkFBZSxFQUNoQjtBQUNEO0VBQ0UsZUFBYyxFQUNmO0FBQ0Q7RUFDRSxlQUFjO0VBQ2QsWUFBVztFQUNYLG9CQUFtQixFQUNwQjtBQUNEO0VBQ0Usa0JBQWlCO0VBQ2pCLFlBQVcsRUFDWjtBQUNEO0VBQ0UsZUFBYztFQUNkLFlBQVc7RUFDWCxZQUFXO0VBQ1gsYUFBWTtFQUNaLFlBQVc7RUFDWCxXQUFVLEVBQ1g7QUFDRDtFQUNFLGVBQWM7RUFDZCxZQUFXO0VBQ1gsYUFBWTtFQUNaLFVBQVM7RUFDVCxXQUFVO0VBQ1YseUJBQXdCO0VBQ3hCLHFDQUFvQztFQUNwQyxzQkFBcUI7RUFDckIsOEJBQTZCO0VBQzdCLGlCQUFnQjtFQUNoQiw2QkFBNEI7RUFDNUIsbUJBQWtCO0VBSWxCLDBCQUF5QixFQUMxQjtBQUNEO0VBQ0Usc0JBQXFCO0VBQ3JCLFFBQU87RUFDUCwwQkFBeUI7RUFDekIscUJBQW9CO0VBQ3BCLGtCQUFpQjtFQUNqQixhQUFZO0VBS1osdUJBQXNCLEVBQ3ZCO0FBQ0Q7RUFDRSxpQkFBZ0I7RUFDaEIsc0JBQXFCO0VBQ3JCLHlCQUF3QjtFQUN4QixnQkFBZTtFQUNmLGVBQWM7RUFDZCxtQkFBa0I7RUFDbEIsUUFBTztFQUNQLFNBQVE7RUFDUixtQkFBa0I7RUFDbEIsa0JBQWlCLEVBQ2xCO0FBQ0Q7RUFDRSxzQkFBcUI7RUFDckIsWUFBVztFQUNYLGFBQVk7RUFDWix1QkFBc0I7RUFDdEIsdUJBQXNCO0VBQ3RCLGlCQUFnQixFQUNqQjtBQUNEO0VBQ0UsY0FBYTtFQUNiLDhCQUE2QjtFQUM3QixpQkFBZ0I7RUFDaEIsa0JBQWlCLEVBQ2xCO0FBQ0Q7RUFDRSxlQUFjO0VBQ2QsZ0JBQWU7RUFDZixpQkFBZ0IsRUFDakI7QUFDRDtFQUNFLFlBQVc7RUFDWCxzQkFBcUI7RUFDckIsU0FBUTtFQUNSLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsMEJBQXlCO0VBQ3pCLFVBQVM7RUFDVCxXQUFVO0VBQ1YsWUFBVztFQUdYLDBDQUF5QyxFQUMxQztBQUNEO0VBQ0UsMEJBQXlCO0VBR3pCLDBDQUF5QyxFQUMxQztBQUNEO0VBQ0UsY0FBYTtFQUNiLFNBQVE7RUFDUixxQkFBb0IsRUFDckI7QUFDRDtFQUNFLDRCQUEyQjtFQUMzQixhQUFZO0VBQ1osV0FBVTtFQUNWLG1CQUFrQjtFQUNsQixnQkFBZSxFQUNoQjtBQUNEO0VBQ0UsbUJBQWtCO0VBQ2xCLGVBQWM7RUFDZCxZQUFXO0VBQ1gsK0JBQThCO0VBQzlCLFlBQVc7RUFDWCxhQUFZLEVBQ2I7QUFDRDtFQUNFLFlBQVc7RUFDWCxhQUFZLEVBQ2I7QUFDRDtFQUNFLFlBQVc7RUFDWCxlQUFjO0VBQ2QsaUJBQWdCO0VBQ2hCLGtCQUFpQjtFQUNqQixZQUFXLEVBQ1o7QUFDRDtFQUNFLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLG9CQUFtQjtFQUNuQixVQUFTLEVBQ1Y7QUFDRDtFQUNFLGVBQWM7RUFDZCxZQUFXO0VBQ1gsaUJBQWdCO0VBQ2hCLDRCQUEyQjtFQUUzQix3QkFBdUI7RUFDdkIsc0JBQXFCO0VBQ3JCLGtCQUFpQixFQUNsQjtBQUNEO0VBQ0UsWUFBVztFQUNYLGlCQUFnQixFQUNqQjtBQUNEO0VBQ0UsWUFBVyxFQUNaO0FBQ0Q7RUFDRSxZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLFNBQVE7RUFDUixPQUFNLEVBQ1A7QUFDRDtFQUNFLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsYUFBWTtFQUNaLHNCQUFxQjtFQUlyQiwwQkFBeUIsRUFDMUI7QUFDRDtFQUNFLHNCQUFxQixFQUN0QjtBQUNEO0VBQ0UsZUFBYztFQUNkLGVBQWM7RUFDZCxnQkFBZTtFQUNmLGtCQUFpQjtFQUNqQixtQkFBa0IsRUFDbkI7QUFDRDtFQUtFLDBCQUF5QjtFQUt6QiwyQkFBMEI7RUFDMUIsc0JBQXFCO0VBQ3JCLGFBQVk7RUFDWixhQUFZO0VBQ1osUUFBTztFQUNQLHlCQUF3QjtFQUN4QixtQkFBa0I7RUFDbEIsZ0JBQWU7RUFDZixXQUFVO0VBQ1YsbUJBQWtCO0VBQ2xCLGdCQUFlO0VBQ2YsbUJBQWtCO0VBQ2xCLE9BQU07RUFDTixTQUFRLEVBQ1Q7QUFDRDtFQUNFLHNCQUFxQixFQUN0QjtBQUNEO0VBQ0UsZUFBYztFQUNkLGtCQUFpQjtFQUNqQixpQkFBZ0IsRUFDakI7QUFDRDtFQUNFLHNCQUFxQixFQUN0QjtBQUNEO0VBQ0UsZUFBYyxFQUNmO0FBQ0Q7RUFDRSxzQkFBcUI7RUFDckIsZUFBYyxFQUNmO0FBQ0Q7OztFQU9FLDZCQUE0QjtFQUM1QixvQ0FBbUM7RUFJbkMsNEJBQTJCO0VBSTNCLGlCQUFnQixFQUNqQjtBQUNEO0VBQ0UsYUFBWTtFQUNaLDBCQUF5QixFQUMxQjtBQUNEO0VBR0UsMkNBQTBDLEVBQzNDO0FBQ0Q7RUFDRSxZQUFXO0VBQ1gsc0JBQXFCO0VBQ3JCLFNBQVE7RUFDUixtQkFBa0I7RUFDbEIsWUFBVztFQUNYLDBCQUF5QjtFQUN6QixVQUFTO0VBQ1QsT0FBTTtFQUNOLFlBQVcsRUFDWjtBQUNEO0VBS0UsMkJBQTBCO0VBSzFCLDRCQUEyQjtFQUMzQixRQUFPO0VBQ1AseUJBQXdCO0VBQ3hCLG1CQUFrQjtFQUNsQixnQkFBZTtFQUNmLFdBQVU7RUFDVixhQUFZLEVBQ2I7QUFDRDtFQUtFLHlCQUF3QjtFQUN4QixRQUFPO0VBQ1AsMkJBQTBCO0VBQzFCLG1CQUFrQjtFQUNsQixnQkFBZTtFQUNmLFdBQVU7RUFDVixjQUFhLEVBQ2Q7QUFDRDtFQUNFLGVBQWM7RUFDZCxnQkFBZTtFQUNmLGtCQUFpQjtFQUNqQiwwQkFBeUI7RUFDekIscUJBQW9CO0VBQ3BCLGlCQUFnQjtFQUNoQixhQUFZO0VBQ1osa0JBQWlCLEVBQ2xCO0FBQ0Q7RUFDRSxhQUFZO0VBQ1osYUFBWSxFQUNiO0FBQ0Q7RUFDRSxtQkFBa0I7RUFDbEIsV0FBVTtFQUNWLG1CQUFrQjtFQUVsQixTQUFRO0VBQ1IsV0FBVTtFQUNWLFlBQVc7RUFDWCxhQUFZO0VBQ1osa0JBQWlCLEVBQ2xCO0FBQ0Q7RUFHRSx3Q0FBdUMsRUFDeEM7QUFDRDtFQUNFLHNCQUFxQjtFQUNyQixnQkFBZTtFQUNmLGdCQUFlO0VBQ2YsZUFBYztFQUNkLGtCQUFpQjtFQUNqQixrQkFBaUI7RUFDakIsbUJBQWtCO0VBSWxCLHlDQUF3QztFQUl4QyxtQ0FBa0M7RUFJbEMsOEJBQTZCLEVBQzlCO0FBQ0Q7RUFDRSxpQkFBZ0IsRUFDakI7QUFDRDtFQUNFLGdCQUFlO0VBR2Ysd0NBQXVDO0VBQ3ZDLGNBQWEsRUFDZDtBQUNEO0VBQ0UsY0FBYSxFQUNkO0FBQ0Q7RUFDRSxpQkFBZ0IsRUFDakI7QUFFRDtFQUNFLGdCQUFlO0VBQ2YsZUFBYyxFQUNmO0FBQ0Q7RUFDRSxnQkFBZTtFQUNmLGtCQUFpQjtFQUNqQixlQUFjLEVBRWY7QUFFRDtFQUNFO0lBQ0Usa0JBQWlCLEVBQ2xCLEVBQUE7QUFFSDtFQUNFO0lBQ0UsVUFBUyxFQUNWO0VBQ0Q7SUFDRSxVQUFTLEVBQ1Y7RUFDRDtJQUNFLGVBQWMsRUFDZjtFQUNEO0lBQ0UsYUFBWSxFQUNiO0VBQ0Q7SUFDRSxjQUFhLEVBQ2Q7RUFDRDtJQUNFLGdCQUFlO0lBQ2YsaUJBQWdCLEVBQ2pCO0VBQ0Q7SUFDRSxpQkFBZ0IsRUFDakI7RUFDRDtJQUNFLFlBQVcsRUFDWixFQUFBO0FBRUg7RUFDRTtJQUNFLGFBQVk7SUFDWixPQUFNO0lBQ04sZUFBYztJQUNkLGlCQUFnQixFQUNqQjtFQUNEO0lBQ0UsaUJBQWdCLEVBQ2pCO0VBQ0Q7SUFDRSxhQUFZO0lBQ1osT0FBTSxFQUNQLEVBQUE7QUFFSDtFQUNFO0lBQ0UsYUFBWSxFQUNiO0VBQ0Q7SUFDRSxXQUFVO0lBQ1YsU0FBUTtJQUNSLFlBQVcsRUFDWjtFQUNEO0lBQ0UsbUJBQWtCLEVBQ25CO0VBQ0Q7SUFDRSxtQkFBa0IsRUFDbkI7RUFDRDtJQUNFLHVCQUFzQjtJQUN0QixlQUFjLEVBQ2Y7RUFDRDtJQUNFLGFBQVksRUFDYjtFQUNEO0lBQ0UsZ0JBQWU7SUFDZixVQUFTLEVBQ1Y7RUFDRDtJQUNFLGFBQVk7SUFDWixZQUFXLEVBQ1o7RUFDRDtJQUNFLFlBQVcsRUFDWjtFQUNEO0lBQ0UsYUFBWTtJQUNaLFlBQVcsRUFDWjtFQUNEO0lBQ0UsWUFBVyxFQUNaO0VBQ0Q7SUFDRSxxQkFBb0IsRUFDckI7RUFDRDtJQUNFLHFCQUFvQixFQUNyQjtFQUNEO0lBQ0UsV0FBVSxFQUNYO0VBQ0Q7SUFDRSxRQUFPLEVBQ1I7RUFDRDtJQUNFLGdCQUFlLEVBQ2hCO0VBQ0Q7SUFDRSw0QkFBMkIsRUFDNUI7RUFDRDtJQUNFLHFCQUFvQixFQUNyQjtFQUNEO0lBQ0UsNEJBQTJCLEVBQzVCO0VBQ0Q7SUFDRSxzQkFBcUIsRUFDdEI7RUFDRDtJQUNFLDRCQUEyQixFQUM1QjtFQUNEO0lBQ0UscUJBQW9CLEVBQ3JCLEVBQUE7QUFFSDtFQUNFO0lBQ0UsYUFBWTtJQUNaLGVBQWM7SUFDZCxpQkFBZ0I7SUFDaEIsV0FBVSxFQUNYO0VBQ0Q7SUFDRSxpQkFBZ0IsRUFDakI7RUFDRDtJQUNFLFFBQU8sRUFDUixFQUFBO0FBRUg7RUFDRTtJQUNFLFlBQVc7SUFDWCxZQUFXLEVBQ1o7RUFDRDtJQUNFLFdBQVUsRUFDWDtFQUNEO0lBQ0UsYUFBWTtJQUNaLFlBQVcsRUFDWjtFQUNEO0lBQ0UsWUFBVyxFQUNaO0VBQ0Q7SUFDRSxhQUFZO0lBQ1osWUFBVyxFQUNaO0VBQ0Q7SUFDRSxZQUFXLEVBQ1osRUFBQTtBQUVIO0VBQ0U7SUFDRSx1QkFBc0IsRUFDdkI7RUFDRDtJQUNFLGdCQUFlLEVBQ2hCLEVBQUE7QUFFSCxxQkFBcUIiLCJmaWxlIjoic3JjL2FwcC9kZW1vLWZ1bGwvbGF5b3V0L25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiNyZWdpb24gbmF2YmFyKi9cclxuLm5hdmJhciB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgbWluLWhlaWdodDogNDVweDtcclxuICAgIHotaW5kZXg6IDIwMDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IDNweCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgfVxyXG4gIC5uYXZiYXIgLm5hdmJhci1pbm5lciB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAtbW96LWJhY2tncm91bmQtY2xpcDogcGFkZGluZztcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgIG1pbi1oZWlnaHQ6IDQ1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDI0ZjlkO1xyXG4gIH1cclxuICAubmF2YmFyIC5uYXZiYXItaW5uZXIgLm5hdmJhci1jb250YWluZXIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbiAgLm5hdmJhciAubmF2YmFyLWlubmVyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYWNjb3VudCB7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgfVxyXG4gIC5uYXZiYXIgLm5hdmJhci1pbm5lciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWFjY291bnQgPiBkaXYge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIH1cclxuICAubmF2YmFyIC5uYXZiYXItaW5uZXIgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1hY2NvdW50IC5hY2NvdW50LWFyZWEge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDUwcHg7XHJcbiAgICB6b29tOiAxO1xyXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XHJcbiAgICAtd2Via2l0LW9wYWNpdHk6IDE7XHJcbiAgICAtbW96LW9wYWNpdHk6IDE7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG4gIC5uYXZiYXIgLm5hdmJhci1pbm5lciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWFjY291bnQgLmFjY291bnQtYXJlYSA+IGxpIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gIH1cclxuICAubmF2YmFyIC5uYXZiYXItaW5uZXIgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1hY2NvdW50IC5hY2NvdW50LWFyZWEgPiBsaSA+IGEge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWluLXdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICAubmF2YmFyIC5uYXZiYXItaW5uZXIgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1hY2NvdW50IC5hY2NvdW50LWFyZWEgPiBsaSA+IGE6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICAubmF2YmFyIC5uYXZiYXItaW5uZXIgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1hY2NvdW50IC5hY2NvdW50LWFyZWEgPiBsaSA+IGEgLmljb24ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0OHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBsaW5lLWhlaWdodCAwLjNzIGVhc2U7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGxpbmUtaGVpZ2h0IDAuM3MgZWFzZTtcclxuICAgIC1vLXRyYW5zaXRpb246IGxpbmUtaGVpZ2h0IDAuM3MgZWFzZTtcclxuICAgIHRyYW5zaXRpb246IGxpbmUtaGVpZ2h0IDAuM3MgZWFzZTtcclxuICB9XHJcbiAgLm5hdmJhciAubmF2YmFyLWlubmVyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYWNjb3VudCAuYWNjb3VudC1hcmVhID4gbGkgPiBhIC5iYWRnZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDZweDtcclxuICAgIGxlZnQ6IDRweDtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDAgIzJkYzNlODtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogdG9wIDAuM3MgZWFzZTtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogdG9wIDAuM3MgZWFzZTtcclxuICAgIC1vLXRyYW5zaXRpb246IHRvcCAwLjNzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiB0b3AgMC4zcyBlYXNlO1xyXG4gIH1cclxuICAubmF2YmFyIC5uYXZiYXItaW5uZXIgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1hY2NvdW50IC5hY2NvdW50LWFyZWEgPiBsaSA+IGEud2F2ZSB7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuM3MgY3ViaWMtYmV6aWVyKDAuNjgsIC0wLjU1LCAwLjI2NSwgMS41NSk7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIDAuM3MgY3ViaWMtYmV6aWVyKDAuNjgsIC0wLjU1LCAwLjI2NSwgMS41NSk7XHJcbiAgICAtby10cmFuc2l0aW9uOiAtby10cmFuc2Zvcm0gMC4zcyBjdWJpYy1iZXppZXIoMC42OCwgLTAuNTUsIDAuMjY1LCAxLjU1KTtcclxuICAgIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuM3MgY3ViaWMtYmV6aWVyKDAuNjgsIC0wLjU1LCAwLjI2NSwgMS41NSksLW1vei10cmFuc2Zvcm0gMC4zcyBjdWJpYy1iZXppZXIoMC42OCwgLTAuNTUsIDAuMjY1LCAxLjU1KSwtby10cmFuc2Zvcm0gMC4zcyBjdWJpYy1iZXppZXIoMC42OCwgLTAuNTUsIDAuMjY1LCAxLjU1KSx0cmFuc2Zvcm0gMC4zcyBjdWJpYy1iZXppZXIoMC42OCwgLTAuNTUsIDAuMjY1LCAxLjU1KTtcclxuICB9XHJcbiAgLm5hdmJhciAubmF2YmFyLWlubmVyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYWNjb3VudCAuYWNjb3VudC1hcmVhID4gbGkgPiBhLndhdmUuaW4ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICB9XHJcbiAgLm5hdmJhciAubmF2YmFyLWlubmVyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYWNjb3VudCAuYWNjb3VudC1hcmVhID4gbGkgPiBhLndhdmUuaW46YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHRvcDogM3B4O1xyXG4gICAgbGVmdDogNXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiA4MTIxOTkxO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1yYWRpYWwtZ3JhZGllbnQoY2VudGVyIGNlbnRlciwgZmFydGhlc3Qtc2lkZSBjaXJjbGUsIHJnYmEoMjYsIDE3NSwgOTMsIDApIDcwJSwgI2Y1ZjVmNSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1vLXJhZGlhbC1ncmFkaWVudChjZW50ZXIgY2VudGVyLCBmYXJ0aGVzdC1zaWRlIGNpcmNsZSwgcmdiYSgyNiwgMTc1LCA5MywgMCkgNzAlLCAjZjVmNWY1IDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGNlbnRlciBjZW50ZXIsIGZhcnRoZXN0LXNpZGUgY2lyY2xlLCByZ2JhKDI2LCAxNzUsIDkzLCAwKSA3MCUsICNmNWY1ZjUgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjZW50ZXIgY2VudGVyLCBmYXJ0aGVzdC1zaWRlIGNpcmNsZSwgcmdiYSgyNiwgMTc1LCA5MywgMCkgNzAlLCAjZjVmNWY1IDEwMCUpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiB3YXZlIDRzIDNzIGluZmluaXRlIGxpbmVhcjtcclxuICAgIC1tb3otYW5pbWF0aW9uOiB3YXZlIDRzIDNzIGluZmluaXRlIGxpbmVhcjtcclxuICAgIC1vLWFuaW1hdGlvbjogd2F2ZSA0cyAzcyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgICBhbmltYXRpb246IHdhdmUgNHMgM3MgaW5maW5pdGUgbGluZWFyO1xyXG4gICAgem9vbTogMTtcclxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcclxuICAgIC13ZWJraXQtb3BhY2l0eTogMDtcclxuICAgIC1tb3otb3BhY2l0eTogMDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmc7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgLm5hdmJhciAubmF2YmFyLWlubmVyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYWNjb3VudCAuYWNjb3VudC1hcmVhID4gbGkgPiBhLmJvcmRlcnB1bHNlIHtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gIH1cclxuICAubmF2YmFyIC5uYXZiYXItaW5uZXIgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1hY2NvdW50IC5hY2NvdW50LWFyZWEgPiBsaSA+IGEuYm9yZGVycHVsc2U6YWZ0ZXIsXHJcbiAgLm5hdmJhciAubmF2YmFyLWlubmVyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYWNjb3VudCAuYWNjb3VudC1hcmVhID4gbGkgPiBhLmJvcmRlcnB1bHNlOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmc7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIC5uYXZiYXIgLm5hdmJhci1pbm5lciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWFjY291bnQgLmFjY291bnQtYXJlYSA+IGxpID4gYS5ib3JkZXJwdWxzZTphZnRlcixcclxuICAubmF2YmFyIC5uYXZiYXItaW5uZXIgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1hY2NvdW50IC5hY2NvdW50LWFyZWEgPiBsaSA+IGEuYm9yZGVycHVsc2U6YmVmb3JlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjkxKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjkxKTtcclxuICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMC45MSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjkxKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45MSk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogYm9yZGVyUHVsc2UgMy41cyBpbmZpbml0ZSBlYXNlO1xyXG4gICAgLW1vei1hbmltYXRpb246IGJvcmRlclB1bHNlIDMuNXMgaW5maW5pdGUgZWFzZTtcclxuICAgIC1vLWFuaW1hdGlvbjogYm9yZGVyUHVsc2UgMy41cyBpbmZpbml0ZSBlYXNlO1xyXG4gICAgYW5pbWF0aW9uOiBib3JkZXJQdWxzZSAzLjVzIGluZmluaXRlIGVhc2U7XHJcbiAgfVxyXG4gIC5uYXZiYXIgLm5hdmJhci1pbm5lciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWFjY291bnQgLmFjY291bnQtYXJlYSA+IGxpID4gYS5ib3JkZXJwdWxzZSAuYmFkZ2Uge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcbiAgLm5hdmJhciAubmF2YmFyLWlubmVyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYWNjb3VudCAuYWNjb3VudC1hcmVhID4gbGkgPiBhLmJvcmRlcnB1bHNlOmJlZm9yZSB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC42cztcclxuICAgIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xyXG4gICAgLW8tYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xyXG4gIH1cclxuICAubmF2YmFyIC5uYXZiYXItaW5uZXIgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1hY2NvdW50IC5hY2NvdW50LWFyZWEgPiBsaSA+IGEuYm9yZGVycHVsc2UgaSxcclxuICAubmF2YmFyIC5uYXZiYXItaW5uZXIgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1hY2NvdW50IC5hY2NvdW50LWFyZWEgPiBsaSA+IGEuYm9yZGVycHVsc2UgLmJhZGdlIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xyXG4gICAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuM3M7XHJcbiAgICAtby1hbmltYXRpb24tZGVsYXk6IDAuM3M7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuM3M7XHJcbiAgfVxyXG4gIC5uYXZiYXIgLm5hdmJhci1pbm5lciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWFjY291bnQgLmFjY291bnQtYXJlYSA+IGxpID4gYS5ibGluayBpLFxyXG4gIC5uYXZiYXIgLm5hdmJhci1pbm5lciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWFjY291bnQgLmFjY291bnQtYXJlYSA+IGxpID4gYS5ibGluayAuYmFkZ2Uge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTEpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuOTEpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwLjkxKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOTEpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkxKTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBib3JkZXJQdWxzZSAzLjVzIGluZmluaXRlIGVhc2U7XHJcbiAgICAtbW96LWFuaW1hdGlvbjogYm9yZGVyUHVsc2UgMy41cyBpbmZpbml0ZSBlYXNlO1xyXG4gICAgLW8tYW5pbWF0aW9uOiBib3JkZXJQdWxzZSAzLjVzIGluZmluaXRlIGVhc2U7XHJcbiAgICBhbmltYXRpb246IGJvcmRlclB1bHNlIDMuNXMgaW5maW5pdGUgZWFzZTtcclxuICB9XHJcbiAgLm5hdmJhciAubmF2YmFyLWlubmVyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYWNjb3VudCAuYWNjb3VudC1hcmVhID4gbGkgPiBhLmJsaW5rIGkge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMDVzO1xyXG4gICAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuMDVzO1xyXG4gICAgLW8tYW5pbWF0aW9uLWRlbGF5OiAwLjA1cztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMC4wNXM7XHJcbiAgfVxyXG4gIC5uYXZiYXIgLm5hdmJhci1pbm5lciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWFjY291bnQgLmFjY291bnQtYXJlYSA+IGxpIC5kcm9wZG93bi1tZW51IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtaW4td2lkdGg6IDI0MHB4O1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZHJvcGRvd25TbGlkZUluRG93bjtcclxuICAgIC1tb3otYW5pbWF0aW9uLW5hbWU6IGRyb3Bkb3duU2xpZGVJbkRvd247XHJcbiAgICAtby1hbmltYXRpb24tbmFtZTogZHJvcGRvd25TbGlkZUluRG93bjtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBkcm9wZG93blNsaWRlSW5Eb3duO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuM3M7XHJcbiAgICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcclxuICAgIC1vLWFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94ICFpbXBvcnRhbnQ7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcclxuICAgIC1tb3otYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5uYXZiYXIgLm5hdmJhci1pbm5lciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWFjY291bnQgLmFjY291bnQtYXJlYSA+IGxpIC5kcm9wZG93bi1tZW51IGxpIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBwYWRkaW5nOiAwIDhweDtcclxuICB9XHJcbiAgLm5hdmJhciAubmF2YmFyLWlubmVyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYWNjb3VudCAuYWNjb3VudC1hcmVhID4gbGkgLmRyb3Bkb3duLW1lbnUgbGk6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICB9XHJcbiAgLm5hdmJhciAubmF2YmFyLWlubmVyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYWNjb3VudCAuYWNjb3VudC1hcmVhID4gbGkgLmRyb3Bkb3duLW1lbnUgbGkgYSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMnB4O1xyXG4gIH1cclxuICAubmF2YmFyIC5uYXZiYXItaW5uZXIgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1hY2NvdW50IC5hY2NvdW50LWFyZWEgPiBsaSAuZHJvcGRvd24tbWVudSBsaSBhIC5wcm9ncmVzcyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gIH1cclxuICAubmF2YmFyIC5uYXZiYXItaW5uZXIgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1hY2NvdW50IC5hY2NvdW50LWFyZWEgPiBsaSAuZHJvcGRvd24tbWVudSBsaSBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgfVxyXG4gIC5uYXZiYXIgLm5hdmJhci1pbm5lciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWFjY291bnQgLmFjY291bnQtYXJlYSA+IGxpIC5kcm9wZG93bi1tZW51IGxpLmRyb3Bkb3duLWhlYWRlcixcclxuICAubmF2YmFyIC5uYXZiYXItaW5uZXIgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1hY2NvdW50IC5hY2NvdW50LWFyZWEgPiBsaSAuZHJvcGRvd24tbWVudSBsaS5kcm9wZG93bi1mb290ZXIge1xyXG4gICAgLXdlYmtpdC10ZXh0LXNoYWRvdzogbm9uZTtcclxuICAgIHRleHQtc2hhZG93OiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgY29sb3I6ICMyNjI2MjY7XHJcbiAgfVxyXG4gIC5uYXZiYXIgLm5hdmJhci1pbm5lciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWFjY291bnQgLmFjY291bnQtYXJlYSA+IGxpIC5kcm9wZG93bi1tZW51IGxpLmRyb3Bkb3duLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NlY2VjZTtcclxuICB9XHJcbiAgLm5hdmJhciAubmF2YmFyLWlubmVyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYWNjb3VudCAuYWNjb3VudC1hcmVhID4gbGkgLmRyb3Bkb3duLW1lbnUgbGkuZHJvcGRvd24taGVhZGVyIGEge1xyXG4gICAgbGluZS1oZWlnaHQ6IDM0cHg7XHJcbiAgfVxyXG4gIC5uYXZiYXIgLm5hdmJhci1pbm5lciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWFjY291bnQgLmFjY291bnQtYXJlYSA+IGxpIC5kcm9wZG93bi1tZW51IGxpLmRyb3Bkb3duLWhlYWRlcltjbGFzcyo9XCJib3JkZXJlZC1cIl0ge1xyXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogM3B4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICB9XHJcbiAgLm5hdmJhciAubmF2YmFyLWlubmVyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYWNjb3VudCAuYWNjb3VudC1hcmVhID4gbGkgLmRyb3Bkb3duLW1lbnUgbGkuZHJvcGRvd24taGVhZGVyIGkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgfVxyXG4gIC5uYXZiYXIgLm5hdmJhci1pbm5lciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWFjY291bnQgLmFjY291bnQtYXJlYSA+IGxpIC5kcm9wZG93bi1tZW51IGxpLmRyb3Bkb3duLWZvb3RlciB7XHJcbiAgICBwYWRkaW5nOiA4cHggNXB4IDhweCAxMHB4O1xyXG4gIH1cclxuICAubmF2YmFyIC5uYXZiYXItaW5uZXIgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1hY2NvdW50IC5hY2NvdW50LWFyZWEgPiBsaSAuZHJvcGRvd24tbWVudSBsaS5kcm9wZG93bi1mb290ZXJbY2xhc3MqPVwiYm9yZGVyZWQtXCJdIHtcclxuICAgIGJvcmRlci10b3Atd2lkdGg6IDNweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgfVxyXG4gIC5uYXZiYXIgLm5hdmJhci1pbm5lciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWFjY291bnQgLmFjY291bnQtYXJlYSA+IGxpIC5kcm9wZG93bi1tZW51IGxpLmRyb3Bkb3duLWZvb3RlciBhIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGNvbG9yOiAjOTk5OTk5O1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgLm5hdmJhciAubmF2YmFyLWlubmVyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYWNjb3VudCAuYWNjb3VudC1hcmVhID4gbGkgLmRyb3Bkb3duLW1lbnUgbGkuZHJvcGRvd24tZm9vdGVyIC5idG4ge1xyXG4gICAgbWFyZ2luLXRvcDogLTNweDtcclxuICB9XHJcbiAgLm5hdmJhciAubmF2YmFyLWlubmVyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYWNjb3VudCAuYWNjb3VudC1hcmVhID4gbGkgLmRyb3Bkb3duLW1lbnUuZHJvcGRvd24tbm90aWZpY2F0aW9ucyB7XHJcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgfVxyXG4gIC5uYXZiYXIgLm5hdmJhci1pbm5lciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWFjY291bnQgLmFjY291bnQtYXJlYSA+IGxpIC5kcm9wZG93bi1tZW51LmRyb3Bkb3duLW5vdGlmaWNhdGlvbnMgbGkge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmM2YzZjM7XHJcbiAgfVxyXG4gIC5uYXZiYXIgLm5hdmJhci1pbm5lciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWFjY291bnQgLmFjY291bnQtYXJlYSA+IGxpIC5kcm9wZG93bi1tZW51LmRyb3Bkb3duLW5vdGlmaWNhdGlvbnMgbGkgLm5vdGlmaWNhdGlvbi1pY29uIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gIH1cclxuICAubmF2YmFyIC5uYXZiYXItaW5uZXIgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1hY2NvdW50IC5hY2NvdW50LWFyZWEgPiBsaSAuZHJvcGRvd24tbWVudS5kcm9wZG93bi1ub3RpZmljYXRpb25zIGxpIC5ub3RpZmljYXRpb24taWNvbiBpIHtcclxuICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG4gIC5uYXZiYXIgLm5hdmJhci1pbm5lciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWFjY291bnQgLmFjY291bnQtYXJlYSA+IGxpIC5kcm9wZG93bi1tZW51LmRyb3Bkb3duLW5vdGlmaWNhdGlvbnMgbGkgLm5vdGlmaWNhdGlvbi1ib2R5IHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gIH1cclxuICAubmF2YmFyIC5uYXZiYXItaW5uZXIgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1hY2NvdW50IC5hY2NvdW50LWFyZWEgPiBsaSAuZHJvcGRvd24tbWVudS5kcm9wZG93bi1ub3RpZmljYXRpb25zIGxpIC5ub3RpZmljYXRpb24tYm9keSAudGl0bGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG4gIC5uYXZiYXIgLm5hdmJhci1pbm5lciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWFjY291bnQgLmFjY291bnQtYXJlYSA+IGxpIC5kcm9wZG93bi1tZW51LmRyb3Bkb3duLW5vdGlmaWNhdGlvbnMgbGkgLm5vdGlmaWNhdGlvbi1ib2R5IC5kZXNjcmlwdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGNvbG9yOiAjOTk5OTk5O1xyXG4gIH1cclxuICAubmF2YmFyIC5uYXZiYXItaW5uZXIgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1hY2NvdW50IC5hY2NvdW50LWFyZWEgPiBsaSAuZHJvcGRvd24tbWVudS5kcm9wZG93bi1ub3RpZmljYXRpb25zIGxpIC5ub3RpZmljYXRpb24tZXh0cmEge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG4gIC5uYXZiYXIgLm5hdmJhci1pbm5lciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWFjY291bnQgLmFjY291bnQtYXJlYSA+IGxpIC5kcm9wZG93bi1tZW51LmRyb3Bkb3duLW5vdGlmaWNhdGlvbnMgbGkgLm5vdGlmaWNhdGlvbi1leHRyYSBpIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbiAgLm5hdmJhciAubmF2YmFyLWlubmVyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYWNjb3VudCAuYWNjb3VudC1hcmVhID4gbGkgLmRyb3Bkb3duLW1lbnUuZHJvcGRvd24tbm90aWZpY2F0aW9ucyBsaSAubm90aWZpY2F0aW9uLWV4dHJhIC5kZXNjcmlwdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGNvbG9yOiAjOTk5OTk5O1xyXG4gIH1cclxuICAubmF2YmFyIC5uYXZiYXItaW5uZXIgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1hY2NvdW50IC5hY2NvdW50LWFyZWEgPiBsaSAuZHJvcGRvd24tbWVudS5kcm9wZG93bi1ub3RpZmljYXRpb25zIGxpLmRyb3Bkb3duLWZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTFhOWNjO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuICAubmF2YmFyIC5uYXZiYXItaW5uZXIgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1hY2NvdW50IC5hY2NvdW50LWFyZWEgPiBsaSAuZHJvcGRvd24tbWVudS5kcm9wZG93bi1ub3RpZmljYXRpb25zIGxpLmRyb3Bkb3duLWZvb3RlciBhIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuICAubmF2YmFyIC5uYXZiYXItaW5uZXIgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1hY2NvdW50IC5hY2NvdW50LWFyZWEgPiBsaSAuZHJvcGRvd24tbWVudS5kcm9wZG93bi1ub3RpZmljYXRpb25zIGxpLmRyb3Bkb3duLWZvb3RlciAud2VhdGhlci1pY29uIHtcclxuICAgIG1hcmdpbi10b3A6IC03cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIH1cclxuICAubmF2YmFyIC5uYXZiYXItaW5uZXIgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1hY2NvdW50IC5hY2NvdW50LWFyZWEgPiBsaSAuZHJvcGRvd24tbWVudS5kcm9wZG93bi1tZXNzYWdlcyB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICB9XHJcbiAgLm5hdmJhciAubmF2YmFyLWlubmVyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYWNjb3VudCAuYWNjb3VudC1hcmVhID4gbGkgLmRyb3Bkb3duLW1lbnUuZHJvcGRvd24tbWVzc2FnZXMgbGkge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmM2YzZjM7XHJcbiAgfVxyXG4gIC5uYXZiYXIgLm5hdmJhci1pbm5lciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWFjY291bnQgLmFjY291bnQtYXJlYSA+IGxpIC5kcm9wZG93bi1tZW51LmRyb3Bkb3duLW1lc3NhZ2VzIGxpIC5tZXNzYWdlLWF2YXRhciB7XHJcbiAgICBtYXgtd2lkdGg6IDQycHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDZweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgfVxyXG4gIC5uYXZiYXIgLm5hdmJhci1pbm5lciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWFjY291bnQgLmFjY291bnQtYXJlYSA+IGxpIC5kcm9wZG93bi1tZW51LmRyb3Bkb3duLW1lc3NhZ2VzIGxpIC5tZXNzYWdlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAyMjVweDtcclxuICB9XHJcbiAgLm5hdmJhciAubmF2YmFyLWlubmVyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYWNjb3VudCAuYWNjb3VudC1hcmVhID4gbGkgLmRyb3Bkb3duLW1lbnUuZHJvcGRvd24tbWVzc2FnZXMgbGkgLm1lc3NhZ2Ugc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLm5hdmJhciAubmF2YmFyLWlubmVyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYWNjb3VudCAuYWNjb3VudC1hcmVhID4gbGkgLmRyb3Bkb3duLW1lbnUuZHJvcGRvd24tbWVzc2FnZXMgbGkgLm1lc3NhZ2Utc2VuZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9XHJcbiAgLm5hdmJhciAubmF2YmFyLWlubmVyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYWNjb3VudCAuYWNjb3VudC1hcmVhID4gbGkgLmRyb3Bkb3duLW1lbnUuZHJvcGRvd24tbWVzc2FnZXMgbGkgLm1lc3NhZ2UtdGltZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzJkYzNlODtcclxuICB9XHJcbiAgLm5hdmJhciAubmF2YmFyLWlubmVyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYWNjb3VudCAuYWNjb3VudC1hcmVhID4gbGkgLmRyb3Bkb3duLW1lbnUuZHJvcGRvd24tbWVzc2FnZXMgbGkgLm1lc3NhZ2Utc3ViamVjdCB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgfVxyXG4gIC5uYXZiYXIgLm5hdmJhci1pbm5lciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWFjY291bnQgLmFjY291bnQtYXJlYSA+IGxpIC5kcm9wZG93bi1tZW51LmRyb3Bkb3duLW1lc3NhZ2VzIGxpIC5tZXNzYWdlLWJvZHkge1xyXG4gICAgY29sb3I6ICM5OTk5OTk7XHJcbiAgICBtYXgtaGVpZ2h0OiAzNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAtbXMtdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAtby10ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIC5uYXZiYXIgLm5hdmJhci1pbm5lciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWFjY291bnQgLmFjY291bnQtYXJlYSA+IGxpIC5kcm9wZG93bi1tZW51LmRyb3Bkb3duLWxvZ2luLWFyZWEgPiBsaSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y1ZjVmNTtcclxuICB9XHJcbiAgLm5hdmJhciAubmF2YmFyLWlubmVyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYWNjb3VudCAuYWNjb3VudC1hcmVhID4gbGkgLmRyb3Bkb3duLW1lbnUuZHJvcGRvd24tbG9naW4tYXJlYSA+IGxpOmhvdmVyLFxyXG4gIC5uYXZiYXIgLm5hdmJhci1pbm5lciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWFjY291bnQgLmFjY291bnQtYXJlYSA+IGxpIC5kcm9wZG93bi1tZW51LmRyb3Bkb3duLWxvZ2luLWFyZWEgPiBsaSBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG4gIC5uYXZiYXIgLm5hdmJhci1pbm5lciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWFjY291bnQgLmFjY291bnQtYXJlYSA+IGxpIC5kcm9wZG93bi1tZW51LmRyb3Bkb3duLWxvZ2luLWFyZWEgPiBsaS51c2VybmFtZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAubmF2YmFyIC5uYXZiYXItaW5uZXIgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1hY2NvdW50IC5hY2NvdW50LWFyZWEgPiBsaSAuZHJvcGRvd24tbWVudS5kcm9wZG93bi1sb2dpbi1hcmVhID4gbGkudXNlcm5hbWUsXHJcbiAgLm5hdmJhciAubmF2YmFyLWlubmVyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYWNjb3VudCAuYWNjb3VudC1hcmVhID4gbGkgLmRyb3Bkb3duLW1lbnUuZHJvcGRvd24tbG9naW4tYXJlYSA+IGxpLnVzZXJuYW1lIGEge1xyXG4gICAgY29sb3I6ICNkMGQwZDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gIH1cclxuICAubmF2YmFyIC5uYXZiYXItaW5uZXIgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1hY2NvdW50IC5hY2NvdW50LWFyZWEgPiBsaSAuZHJvcGRvd24tbWVudS5kcm9wZG93bi1sb2dpbi1hcmVhID4gbGkuZW1haWwge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICAubmF2YmFyIC5uYXZiYXItaW5uZXIgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1hY2NvdW50IC5hY2NvdW50LWFyZWEgPiBsaSAuZHJvcGRvd24tbWVudS5kcm9wZG93bi1sb2dpbi1hcmVhID4gbGkuZW1haWwsXHJcbiAgLm5hdmJhciAubmF2YmFyLWlubmVyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYWNjb3VudCAuYWNjb3VudC1hcmVhID4gbGkgLmRyb3Bkb3duLW1lbnUuZHJvcGRvd24tbG9naW4tYXJlYSA+IGxpLmVtYWlsIGEge1xyXG4gICAgY29sb3I6ICNkMGQwZDA7XHJcbiAgfVxyXG4gIC5uYXZiYXIgLm5hdmJhci1pbm5lciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWFjY291bnQgLmFjY291bnQtYXJlYSA+IGxpIC5kcm9wZG93bi1tZW51LmRyb3Bkb3duLWxvZ2luLWFyZWEgPiBsaSAuYXZhdGFyLWFyZWEge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICB3aWR0aDogMTI4cHg7XHJcbiAgfVxyXG4gIC5uYXZiYXIgLm5hdmJhci1pbm5lciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWFjY291bnQgLmFjY291bnQtYXJlYSA+IGxpIC5kcm9wZG93bi1tZW51LmRyb3Bkb3duLWxvZ2luLWFyZWEgPiBsaSAuYXZhdGFyLWFyZWEgLmF2YXRhciB7XHJcbiAgICB3aWR0aDogMTI4cHg7XHJcbiAgICBoZWlnaHQ6IDEyOHB4O1xyXG4gIH1cclxuICAubmF2YmFyIC5uYXZiYXItaW5uZXIgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1hY2NvdW50IC5hY2NvdW50LWFyZWEgPiBsaSAuZHJvcGRvd24tbWVudS5kcm9wZG93bi1sb2dpbi1hcmVhID4gbGkgLmF2YXRhci1hcmVhIC5jYXB0aW9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZGMzZTg7XHJcbiAgICB6b29tOiAxO1xyXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTcwKTtcclxuICAgIC13ZWJraXQtb3BhY2l0eTogMC43O1xyXG4gICAgLW1vei1vcGFjaXR5OiAwLjc7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogOXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcGFkZGluZzogN3B4IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTI4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC5uYXZiYXIgLm5hdmJhci1pbm5lciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWFjY291bnQgLmFjY291bnQtYXJlYSA+IGxpIC5kcm9wZG93bi1tZW51LmRyb3Bkb3duLWxvZ2luLWFyZWEgPiBsaS5lZGl0IHtcclxuICAgIG1pbi1oZWlnaHQ6IDM1cHg7XHJcbiAgfVxyXG4gIC5uYXZiYXIgLm5hdmJhci1pbm5lciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWFjY291bnQgLmFjY291bnQtYXJlYSA+IGxpIC5kcm9wZG93bi1tZW51LmRyb3Bkb3duLWxvZ2luLWFyZWEgPiBsaS5lZGl0IGEge1xyXG4gICAgY29sb3I6ICM5OTk5OTk7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjbGVhcjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9XHJcbiAgLm5hdmJhciAubmF2YmFyLWlubmVyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYWNjb3VudCAuYWNjb3VudC1hcmVhID4gbGkgLmRyb3Bkb3duLW1lbnUuZHJvcGRvd24tbG9naW4tYXJlYSA+IGxpLmVkaXQgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzExYTljYztcclxuICB9XHJcbiAgLm5hdmJhciAubmF2YmFyLWlubmVyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYWNjb3VudCAuYWNjb3VudC1hcmVhID4gbGkgLmRyb3Bkb3duLW1lbnUuZHJvcGRvd24tbG9naW4tYXJlYSA+IGxpLnRoZW1lLWFyZWEge1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgfVxyXG4gIC5uYXZiYXIgLm5hdmJhci1pbm5lciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWFjY291bnQgLmFjY291bnQtYXJlYSA+IGxpIC5kcm9wZG93bi1tZW51LmRyb3Bkb3duLWxvZ2luLWFyZWEgPiBsaS50aGVtZS1hcmVhIC5jb2xvcnBpY2tlciB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDRweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAubmF2YmFyIC5uYXZiYXItaW5uZXIgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1hY2NvdW50IC5hY2NvdW50LWFyZWEgPiBsaSAuZHJvcGRvd24tbWVudS5kcm9wZG93bi1sb2dpbi1hcmVhID4gbGkudGhlbWUtYXJlYSAuY29sb3JwaWNrZXIgPiBsaSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDIzcHg7XHJcbiAgICBoZWlnaHQ6IDIzcHg7XHJcbiAgICBtYXJnaW46IDJweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIC5uYXZiYXIgLm5hdmJhci1pbm5lciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWFjY291bnQgLmFjY291bnQtYXJlYSA+IGxpIC5kcm9wZG93bi1tZW51LmRyb3Bkb3duLWxvZ2luLWFyZWEgPiBsaS50aGVtZS1hcmVhIC5jb2xvcnBpY2tlciA+IGxpID4gLmNvbG9ycGljay1idG4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMjNweDtcclxuICAgIGhlaWdodDogMjNweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAtbW96LWJhY2tncm91bmQtY2xpcDogcGFkZGluZztcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjFzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjFzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIGVhc2UgMC4xcztcclxuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuMXM7XHJcbiAgfVxyXG4gIC5uYXZiYXIgLm5hdmJhci1pbm5lciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWFjY291bnQgLmFjY291bnQtYXJlYSA+IGxpIC5kcm9wZG93bi1tZW51LmRyb3Bkb3duLWxvZ2luLWFyZWEgPiBsaS50aGVtZS1hcmVhIC5jb2xvcnBpY2tlciA+IGxpID4gLmNvbG9ycGljay1idG46aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgem9vbTogMTtcclxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT04MCk7XHJcbiAgICAtd2Via2l0LW9wYWNpdHk6IDAuODtcclxuICAgIC1tb3otb3BhY2l0eTogMC44O1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDgpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMDgpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjA4KTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMDgpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA4KTtcclxuICB9XHJcbiAgLm5hdmJhciAubmF2YmFyLWlubmVyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYWNjb3VudCAuYWNjb3VudC1hcmVhID4gbGkgLmRyb3Bkb3duLW1lbnUuZHJvcGRvd24tbG9naW4tYXJlYSA+IGxpLnRoZW1lLWFyZWEgLmNvbG9ycGlja2VyID4gbGkgPiAuY29sb3JwaWNrLWJ0bi5zZWxlY3RlZDphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlxcZjAwY1wiO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICB9XHJcbiAgLm5hdmJhciAubmF2YmFyLWlubmVyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYWNjb3VudCAuYWNjb3VudC1hcmVhID4gbGkgLmRyb3Bkb3duLW1lbnUuZHJvcGRvd24tbG9naW4tYXJlYSA+IGxpLnRoZW1lLWFyZWEgLmJ0bi1jb2xvcnBpY2tlciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNEREQ7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICB9XHJcbiAgLm5hdmJhciAubmF2YmFyLWlubmVyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYWNjb3VudCAuYWNjb3VudC1hcmVhID4gbGkgLmRyb3Bkb3duLW1lbnUuZHJvcGRvd24tbG9naW4tYXJlYSA+IGxpLmRyb3Bkb3duLWZvb3RlciB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICMyZGMzZTg7XHJcbiAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG4gIC5uYXZiYXIgLm5hdmJhci1pbm5lciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWFjY291bnQgLmFjY291bnQtYXJlYSA+IGxpIC5kcm9wZG93bi1tZW51LmRyb3Bkb3duLWxvZ2luLWFyZWEgPiBsaS5kcm9wZG93bi1mb290ZXIgYSB7XHJcbiAgICBjb2xvcjogIzcxNzE3MTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgfVxyXG4gIC5uYXZiYXIgLm5hdmJhci1pbm5lciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWFjY291bnQgLmFjY291bnQtYXJlYSA+IGxpIC5kcm9wZG93bi1hcnJvdzpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICByaWdodDogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHRvcDogLTQ2cHg7XHJcbiAgICBoZWlnaHQ6IDNweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggNDBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMnB4IDQwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNDBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgfVxyXG4gIC5uYXZiYXIgLm5hdmJhci1pbm5lciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWFjY291bnQgLmFjY291bnQtYXJlYSA+IGxpLm9wZW4gPiBhIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZGMzZTg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDQwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDJweCA0MHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDQwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gIH1cclxuICAubmF2YmFyIC5uYXZiYXItaW5uZXIgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1hY2NvdW50IC5hY2NvdW50LWFyZWEgPiBsaS5vcGVuIC5kcm9wZG93bi1tZW51IHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubmF2YmFyIC5uYXZiYXItaW5uZXIgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1hY2NvdW50IC5hY2NvdW50LWFyZWEgLmxvZ2luLWFyZWEge1xyXG4gICAgcGFkZGluZzogOHB4IDIwcHggMTBweCAyMHB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLm5hdmJhciAubmF2YmFyLWlubmVyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYWNjb3VudCAuYWNjb3VudC1hcmVhIC5sb2dpbi1hcmVhIC5hdmF0YXIge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2ZiNmU1MjtcclxuICAgIHdpZHRoOiAyOXB4O1xyXG4gICAgaGVpZ2h0OiAyOXB4O1xyXG4gIH1cclxuICAubmF2YmFyIC5uYXZiYXItaW5uZXIgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1hY2NvdW50IC5hY2NvdW50LWFyZWEgLmxvZ2luLWFyZWEgLmF2YXRhciBpbWcge1xyXG4gICAgd2lkdGg6IDI5cHg7XHJcbiAgICBoZWlnaHQ6IDI5cHg7XHJcbiAgfVxyXG4gIC5uYXZiYXIgLm5hdmJhci1pbm5lciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWFjY291bnQgLmFjY291bnQtYXJlYSAubG9naW4tYXJlYSBzZWN0aW9uIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICB9XHJcbiAgLm5hdmJhciAubmF2YmFyLWlubmVyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYWNjb3VudCAuYWNjb3VudC1hcmVhIC5sb2dpbi1hcmVhIHNlY3Rpb24gaDIge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIC5uYXZiYXIgLm5hdmJhci1pbm5lciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWFjY291bnQgLmFjY291bnQtYXJlYSAubG9naW4tYXJlYSBzZWN0aW9uIGgyIHNwYW4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAtbXMtdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAtby10ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgfVxyXG4gIC5uYXZiYXIgLm5hdmJhci1pbm5lciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWFjY291bnQgLmFjY291bnQtYXJlYSAubG9naW4tYXJlYSArIC5kcm9wZG93bi1tZW51IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLXdpZHRoOiAxMDBweDtcclxuICB9XHJcbiAgLm5hdmJhciAubmF2YmFyLWlubmVyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYWNjb3VudCAuYWNjb3VudC1hcmVhIC5sb2dpbi1hcmVhICsgLmRyb3Bkb3duLWFycm93OmJlZm9yZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLm5hdmJhciAubmF2YmFyLWlubmVyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYWNjb3VudCAuc2V0dGluZyB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gIH1cclxuICAubmF2YmFyIC5uYXZiYXItaW5uZXIgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1hY2NvdW50IC5zZXR0aW5nIGEge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICB9XHJcbiAgLm5hdmJhciAubmF2YmFyLWlubmVyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYWNjb3VudCAuc2V0dGluZyBhOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgLm5hdmJhciAubmF2YmFyLWlubmVyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYWNjb3VudCAuc2V0dGluZyBhIC5pY29uIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLm5hdmJhciAubmF2YmFyLWlubmVyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYWNjb3VudCAuc2V0dGluZy1jb250YWluZXIge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XHJcbiAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xyXG4gICAgLW8tdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XHJcbiAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA1MDVweDtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIHpvb206IDE7XHJcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XHJcbiAgICAtd2Via2l0LW9wYWNpdHk6IDA7XHJcbiAgICAtbW96LW9wYWNpdHk6IDA7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTFweCAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG4gIC5uYXZiYXIgLm5hdmJhci1pbm5lciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWFjY291bnQgLnNldHRpbmctY29udGFpbmVyIGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbiAgLm5hdmJhciAubmF2YmFyLWlubmVyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYWNjb3VudCAuc2V0dGluZy1jb250YWluZXIgaW5wdXRbdHlwZT1jaGVja2JveF0gKyAudGV4dCB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICB9XHJcbiAgLm5hdmJhciAubmF2YmFyLWlubmVyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYWNjb3VudCAuc2V0dGluZy1jb250YWluZXIgaW5wdXRbdHlwZT1jaGVja2JveF0gKyAudGV4dDpiZWZvcmUge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMmRjM2U4O1xyXG4gIH1cclxuICAubmF2YmFyIC5uYXZiYXItaW5uZXIgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1hY2NvdW50IC5zZXR0aW5nLWNvbnRhaW5lciBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkICsgLnRleHQge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG4gIC5uYXZiYXIgLm5hdmJhci1pbm5lciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWFjY291bnQgLnNldHRpbmctY29udGFpbmVyIGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyAudGV4dDpiZWZvcmUge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMmRjM2U4O1xyXG4gICAgY29sb3I6ICNmYjZlNTI7XHJcbiAgfVxyXG4gIC5uYXZiYXIgLm5hdmJhci1pbm5lciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWFjY291bnQgLmFjY291bnQtYXJlYSxcclxuICAubmF2YmFyIC5uYXZiYXItaW5uZXIgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1hY2NvdW50IC5zZXR0aW5nLWNvbnRhaW5lcixcclxuICAubmF2YmFyIC5uYXZiYXItaW5uZXIgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1hY2NvdW50IC5zZXR0aW5nIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC1vLXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtbXMtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIC1tb3otYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgLW8tYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgLW1zLWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC45cztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogMC45cztcclxuICAgIC1vLXRyYW5zaXRpb246IDAuOXM7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjlzO1xyXG4gIH1cclxuICAubmF2YmFyIC5uYXZiYXItaW5uZXIgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1hY2NvdW50LnNldHRpbmctb3BlbiAuc2V0dGluZyB7XHJcbiAgICByaWdodDogNTA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmRjM2U4O1xyXG4gIH1cclxuICAubmF2YmFyIC5uYXZiYXItaW5uZXIgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1hY2NvdW50LnNldHRpbmctb3BlbiAuc2V0dGluZyBhIHtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAtNnB4IDQwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwIC02cHggNDBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgICBib3gtc2hhZG93OiAwIC02cHggNDBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgfVxyXG4gIC5uYXZiYXIgLm5hdmJhci1pbm5lciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWFjY291bnQuc2V0dGluZy1vcGVuIC5zZXR0aW5nIGE6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBoZWlnaHQ6IDNweDtcclxuICB9XHJcbiAgLm5hdmJhciAubmF2YmFyLWlubmVyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYWNjb3VudC5zZXR0aW5nLW9wZW4gLmFjY291bnQtYXJlYSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtOTBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoLTkwZGVnKTtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlWSgtOTBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlWSgtOTBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKC05MGRlZyk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcCByaWdodDtcclxuICAgIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogdG9wIHJpZ2h0O1xyXG4gICAgLW8tdHJhbnNmb3JtLW9yaWdpbjogdG9wIHJpZ2h0O1xyXG4gICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IHRvcCByaWdodDtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCByaWdodDtcclxuICAgIHpvb206IDE7XHJcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XHJcbiAgICAtd2Via2l0LW9wYWNpdHk6IDA7XHJcbiAgICAtbW96LW9wYWNpdHk6IDA7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgcmlnaHQ6IDQ1MHB4O1xyXG4gIH1cclxuICAubmF2YmFyIC5uYXZiYXItaW5uZXIgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1hY2NvdW50LnNldHRpbmctb3BlbiAuc2V0dGluZy1jb250YWluZXIge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XHJcbiAgICB6b29tOiAxO1xyXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XHJcbiAgICAtd2Via2l0LW9wYWNpdHk6IDE7XHJcbiAgICAtbW96LW9wYWNpdHk6IDE7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgcGFkZGluZzogMTFweDtcclxuICB9XHJcbiAgLm5hdmJhciAubmF2YmFyLWJyYW5kIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbiAgICAtd2Via2l0LXRleHQtc2hhZG93OiBub25lO1xyXG4gICAgcGFkZGluZzogMnB4IDAgMnB4IDA7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbiAgfVxyXG4gIC5uYXZiYXIgLm5hdmJhci1icmFuZCBzbWFsbCBpbWcge1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDE3N3B4O1xyXG4gIH1cclxuICAubmF2YmFyIC5zaWRlYmFyLWNvbGxhcHNlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvLyBsZWZ0OiAxODlweDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgfVxyXG4gIC5uYXZiYXIgLnNpZGViYXItY29sbGFwc2U6aG92ZXIge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICB9XHJcbiAgLm5hdmJhciAuc2lkZWJhci1jb2xsYXBzZSAuY29sbGFwc2UtaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmc6IDExcHggNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4yMThzIGVhc2U7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4yMThzIGVhc2U7XHJcbiAgICAtby10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMjE4cyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjIxOHMgZWFzZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC1ib3gtc2hhZG93IDAuMjE4cyBlYXNlO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiAtbW96LWJveC1zaGFkb3cgMC4yMThzIGVhc2U7XHJcbiAgICAtby10cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMjE4cyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjIxOHMgZWFzZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgMC4zMThzIGVhc2U7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGNvbG9yIDAuMzE4cyBlYXNlO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogY29sb3IgMC4zMThzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjMxOHMgZWFzZTtcclxuICB9XHJcbiAgLm5hdmJhciAuc2lkZWJhci1jb2xsYXBzZS5hY3RpdmU6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcbiAgLm5hdmJhciAuc2lkZWJhci1jb2xsYXBzZS5hY3RpdmUgLmNvbGxhcHNlLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIHBhZGRpbmc6IDExcHg7XHJcbiAgfVxyXG4gIC5uYXZiYXIubmF2YmFyLWZpeGVkLXRvcCB7XHJcbiAgICB6LWluZGV4OiAxMDAzO1xyXG4gIH1cclxuICAubmF2YmFyLm5hdmJhci1maXhlZC10b3AgKyAubWFpbi1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLXRvcDogNDVweDtcclxuICB9XHJcblxyXG4gIC5uYXZiYXIgLm5hdmJhci1pbm5lciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWFjY291bnQgLmFjY291bnQtYXJlYSA+IGxpID4gYSAuaWNvbi5jdXN0b217XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjb2xvcjogIzAwZmY0YTtcclxuICB9XHJcbiAgLm5hdmJhciAubmF2YmFyLWlubmVyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYWNjb3VudCAuYWNjb3VudC1hcmVhID4gbGkgPiBhLnRleHQtbGlua3tcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xyXG4gICAgY29sb3I6ICMwMGZmNGE7XHJcblxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLm5hdmJhci1jb250YWluZXIge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDJweDtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjBweCkge1xyXG4gICAgLm5hdmJhciAubmF2YmFyLWlubmVyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYWNjb3VudC5zZXR0aW5nLW9wZW4gLnNldHRpbmcge1xyXG4gICAgICB0b3A6IDQ1cHg7XHJcbiAgICB9XHJcbiAgICAubmF2YmFyIC5uYXZiYXItaW5uZXIgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1hY2NvdW50LnNldHRpbmctb3BlbiAuc2V0dGluZy1jb250YWluZXIge1xyXG4gICAgICB0b3A6IDQ1cHg7XHJcbiAgICB9XHJcbiAgICAubmF2YmFyIC5uYXZiYXItaW5uZXIgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1hY2NvdW50IC5hY2NvdW50LWFyZWEgPiBsaSAuZHJvcGRvd24tbWVudS5kcm9wZG93bi1sb2dpbi1hcmVhID4gbGkudXNlcm5hbWUge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIC5uYXZiYXIgLm5hdmJhci1pbm5lciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWFjY291bnQgLmFjY291bnQtYXJlYSAubG9naW4tYXJlYSB7XHJcbiAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgIH1cclxuICAgIC5uYXZiYXIgLm5hdmJhci1pbm5lciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWFjY291bnQgLmFjY291bnQtYXJlYSAubG9naW4tYXJlYSBzZWN0aW9uIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5uYXZiYXIgLm5hdmJhci1pbm5lciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWFjY291bnQgLmFjY291bnQtYXJlYSAubG9naW4tYXJlYSAuYXZhdGFyIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMXB4O1xyXG4gICAgfVxyXG4gICAgLm5hdmJhciAubmF2YmFyLWlubmVyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYWNjb3VudCAuYWNjb3VudC1hcmVhIC5sb2dpbi1hcmVhICsgLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gICAgfVxyXG4gICAgLm5hdmJhciAubmF2YmFyLWlubmVyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYWNjb3VudCAuYWNjb3VudC1hcmVhIC5sb2dpbi1hcmVhICsgLmRyb3Bkb3duLW1lbnU6YmVmb3JlIHtcclxuICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzU5cHgpIHtcclxuICAgIC5uYXZiYXIgLm5hdmJhci1pbm5lciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWFjY291bnQuc2V0dGluZy1vcGVuIC5zZXR0aW5nLWNvbnRhaW5lciB7XHJcbiAgICAgIHdpZHRoOiAyNzBweDtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBwYWRkaW5nOiAwIDVweDtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuICAgIC5uYXZiYXIgLm5hdmJhci1pbm5lciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWFjY291bnQuc2V0dGluZy1vcGVuIC5zZXR0aW5nLWNvbnRhaW5lciBsYWJlbCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgICAubmF2YmFyIC5uYXZiYXItaW5uZXIgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1hY2NvdW50LnNldHRpbmctb3BlbiAuc2V0dGluZyB7XHJcbiAgICAgIHJpZ2h0OiAyNzBweDtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUzMHB4KSB7XHJcbiAgICAubmF2YmFyIHtcclxuICAgICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgfVxyXG4gICAgLm5hdmJhciAuc2lkZWJhci1jb2xsYXBzZSB7XHJcbiAgICAgIGxlZnQ6IGF1dG87XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICB3aWR0aDogNTBweDtcclxuICAgIH1cclxuICAgIC5uYXZiYXIgLnNpZGViYXItY29sbGFwc2UgLmNvbGxwc2UtaWNvbiB7XHJcbiAgICAgIHBhZGRpbmc6IDExcHggMTVweDtcclxuICAgIH1cclxuICAgIC5uYXZiYXIgLm5hdmJhci1icmFuZCB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIH1cclxuICAgIC5uYXZiYXIgLm5hdmJhci1pbm5lciAubmF2YmFyLWhlYWRlciB7XHJcbiAgICAgIGZsb2F0OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLm5hdmJhciAubmF2YmFyLWlubmVyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYWNjb3VudCB7XHJcbiAgICAgIGZsb2F0OiByaWdodDtcclxuICAgIH1cclxuICAgIC5uYXZiYXIgLm5hdmJhci1pbm5lciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWFjY291bnQgLmFjY291bnQtYXJlYSB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgdG9wOiA0NXB4O1xyXG4gICAgfVxyXG4gICAgLm5hdmJhciAubmF2YmFyLWlubmVyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYWNjb3VudCAuYWNjb3VudC1hcmVhID4gbGkgLmRyb3Bkb3duLW1lbnUuZHJvcGRvd24tbm90aWZpY2F0aW9ucyB7XHJcbiAgICAgIGxlZnQ6IC0xMzVweDtcclxuICAgICAgcmlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbiAgICAubmF2YmFyIC5uYXZiYXItaW5uZXIgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1hY2NvdW50IC5hY2NvdW50LWFyZWEgPiBsaSAuZHJvcGRvd24tbWVudS5kcm9wZG93bi1ub3RpZmljYXRpb25zLmRyb3Bkb3duLWFycm93OmJlZm9yZSB7XHJcbiAgICAgIGxlZnQ6IDEzNXB4O1xyXG4gICAgfVxyXG4gICAgLm5hdmJhciAubmF2YmFyLWlubmVyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYWNjb3VudCAuYWNjb3VudC1hcmVhID4gbGkgLmRyb3Bkb3duLW1lbnUuZHJvcGRvd24tbWVzc2FnZXMge1xyXG4gICAgICBsZWZ0OiAtMTM1cHg7XHJcbiAgICAgIHJpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG4gICAgLm5hdmJhciAubmF2YmFyLWlubmVyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYWNjb3VudCAuYWNjb3VudC1hcmVhID4gbGkgLmRyb3Bkb3duLW1lbnUuZHJvcGRvd24tbWVzc2FnZXMuZHJvcGRvd24tYXJyb3c6YmVmb3JlIHtcclxuICAgICAgbGVmdDogMTM1cHg7XHJcbiAgICB9XHJcbiAgICAubmF2YmFyIC5uYXZiYXItaW5uZXIgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1hY2NvdW50IC5zZXR0aW5nIHtcclxuICAgICAgdG9wOiA0NXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubmF2YmFyIC5uYXZiYXItaW5uZXIgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1hY2NvdW50IC5zZXR0aW5nLWNvbnRhaW5lciB7XHJcbiAgICAgIHRvcDogNDVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLm5hdmJhciAubmF2YmFyLWlubmVyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYWNjb3VudC5zZXR0aW5nLW9wZW4gLnNldHRpbmctY29udGFpbmVyIHtcclxuICAgICAgbGVmdDogNTBweDtcclxuICAgIH1cclxuICAgIC5uYXZiYXIgLm5hdmJhci1pbm5lciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWFjY291bnQuc2V0dGluZy1vcGVuIC5zZXR0aW5nIHtcclxuICAgICAgbGVmdDogMDtcclxuICAgIH1cclxuICAgIC5uYXZiYXIgLm5hdmJhci1pbm5lciAubmF2YmFyLWNvbnRhaW5lciB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIH1cclxuICAgIC5uYXZiYXItZml4ZWQtdG9wICsgLm1haW4tY29udGFpbmVyIHtcclxuICAgICAgbWFyZ2luLXRvcDogOTBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmJyZWFkY3J1bWJzLWZpeGVkIHtcclxuICAgICAgdG9wOiA5MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuYnJlYWRjcnVtYnMtZml4ZWQgKyAucGFnZS1oZWFkZXIge1xyXG4gICAgICBtYXJnaW4tdG9wOiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAucGFnZS1oZWFkZXItZml4ZWQge1xyXG4gICAgICB0b3A6IDEzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAucGFnZS1oZWFkZXItZml4ZWQgKyAucGFnZS1ib2R5IHtcclxuICAgICAgbWFyZ2luLXRvcDogODBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnBhZ2Utc2lkZWJhci5zaWRlYmFyLWZpeGVkIHtcclxuICAgICAgdG9wOiA5MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcclxuICAgIC5uYXZiYXIgLm5hdmJhci1pbm5lciAubmF2YmFyLWhlYWRlciAubmF2YmFyLWFjY291bnQuc2V0dGluZy1vcGVuIC5zZXR0aW5nLWNvbnRhaW5lciB7XHJcbiAgICAgIHdpZHRoOiAyNzBweDtcclxuICAgICAgcGFkZGluZzogMCA1cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIGxlZnQ6IDUwcHg7XHJcbiAgICB9XHJcbiAgICAubmF2YmFyIC5uYXZiYXItaW5uZXIgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1hY2NvdW50LnNldHRpbmctb3BlbiAuc2V0dGluZy1jb250YWluZXIgbGFiZWwge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gICAgLm5hdmJhciAubmF2YmFyLWlubmVyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYWNjb3VudC5zZXR0aW5nLW9wZW4gLnNldHRpbmcge1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgICAubmF2YmFyIC5uYXZiYXItaW5uZXIgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1hY2NvdW50IC5hY2NvdW50LWFyZWEgPiBsaSAuZHJvcGRvd24tbWVudS5kcm9wZG93bi1ub3RpZmljYXRpb25zIHtcclxuICAgICAgbGVmdDogLTU1cHg7XHJcbiAgICAgIHJpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG4gICAgLm5hdmJhciAubmF2YmFyLWlubmVyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYWNjb3VudCAuYWNjb3VudC1hcmVhID4gbGkgLmRyb3Bkb3duLW1lbnUuZHJvcGRvd24tbm90aWZpY2F0aW9ucy5kcm9wZG93bi1hcnJvdzpiZWZvcmUge1xyXG4gICAgICBsZWZ0OiA1NXB4O1xyXG4gICAgfVxyXG4gICAgLm5hdmJhciAubmF2YmFyLWlubmVyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYWNjb3VudCAuYWNjb3VudC1hcmVhID4gbGkgLmRyb3Bkb3duLW1lbnUuZHJvcGRvd24tbWVzc2FnZXMge1xyXG4gICAgICBsZWZ0OiAtMTA1cHg7XHJcbiAgICAgIHJpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG4gICAgLm5hdmJhciAubmF2YmFyLWlubmVyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYWNjb3VudCAuYWNjb3VudC1hcmVhID4gbGkgLmRyb3Bkb3duLW1lbnUuZHJvcGRvd24tbWVzc2FnZXMuZHJvcGRvd24tYXJyb3c6YmVmb3JlIHtcclxuICAgICAgbGVmdDogMTA1cHg7XHJcbiAgICB9XHJcbiAgICAubmF2YmFyIC5uYXZiYXItaW5uZXIgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1hY2NvdW50IC5hY2NvdW50LWFyZWEgPiBsaSAuZHJvcGRvd24tbWVudS5kcm9wZG93bi10YXNrcyB7XHJcbiAgICAgIGxlZnQ6IC0xMDBweDtcclxuICAgICAgcmlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbiAgICAubmF2YmFyIC5uYXZiYXItaW5uZXIgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1hY2NvdW50IC5hY2NvdW50LWFyZWEgPiBsaSAuZHJvcGRvd24tbWVudS5kcm9wZG93bi10YXNrcy5kcm9wZG93bi1hcnJvdzpiZWZvcmUge1xyXG4gICAgICBsZWZ0OiAxMDBweDtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xyXG4gICAgLm5hdmJhciAubmF2YmFyLWlubmVyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYWNjb3VudCAuYWNjb3VudC1hcmVhID4gbGkgLmRyb3Bkb3duLWFycm93OmJlZm9yZSB7XHJcbiAgICAgIHdpZHRoOiA0NXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubmF2YmFyIC5uYXZiYXItaW5uZXIgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1hY2NvdW50IC5hY2NvdW50LWFyZWEgPiBsaSA+IGEge1xyXG4gICAgICBtaW4td2lkdGg6IDQ1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qI2VuZHJlZ2lvbiBuYXZiYXIqLyJdfQ== */"

/***/ }),

/***/ "./src/app/demo-full/layout/navbar/navbar.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/demo-full/layout/navbar/navbar.component.ts ***!
  \*************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared.service */ "./src/app/demo-full/shared.service.ts");



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(appSharedService) {
        this.appSharedService = appSharedService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.sideBarToggle = function () {
        this.appSharedService.toggleMenu();
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/demo-full/layout/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/demo-full/layout/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service__WEBPACK_IMPORTED_MODULE_2__["AppSharedService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/demo-full/layout/sidebar/sidebar.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/demo-full/layout/sidebar/sidebar.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-sidebar sidebar-fixed sbsmartscroll-style\" id=\"sidebar\" [ngClass]=\"{'menu-compact': !appSharedService.sideBarVisible}\">\n  <!-- Page Sidebar Header-->\n  <div class=\"sidebar-header-wrapper\">\n      \n  </div>\n  <!-- /Page Sidebar Header -->\n  <!-- Sidebar Menu -->\n  <ul class=\"nav sidebar-menu\">\n    <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"  #home>\n      <a  [routerLink]=\"['/common-consumption-library-demo/home']\" >\n          <i class=\"menu-icon fa fa-home\"></i>\n          <span class=\"menu-text\"> Home </span>\n      </a>\n    </li>\n    <li [routerLinkActive]=\"['active']\" [ngClass]=\"{'open': Card.open, 'open': !Card.open}\" (click)=\"Card.open = !Card.open\" #Card>\n        <a [routerLink]=\"['/common-consumption-library-demo/cards']\"  >\n            <i class=\"menu-icon fa fa-id-card\"></i>\n            <span class=\"menu-text\"> Card </span>\n            <i class=\"menu-expand\"></i>\n        </a>\n        <ul class=\"submenu\" (click)=\"$event.stopPropagation();\">\n\n        <li [class.active]=\"currentFragment==='recentlyViewed'\">\n            <a [routerLink]=\"['/common-consumption-library-demo/cards']\" fragment=\"recentlyViewed\">\n                <span class=\"menu-text\">Recently viewed</span>\n            </a>\n        </li>\n        <li [class.active]=\"currentFragment==='desktopAppTextbooks'\">\n            <a [routerLink]=\"['/common-consumption-library-demo/cards']\" fragment=\"desktopAppTextbooks\">\n                <span class=\"menu-text\">Textbook for Desktop</span>\n            </a>\n        </li>\n        <li [class.active]=\"currentFragment==='mobileAppTextbooks'\">\n            <a [routerLink]=\"['/common-consumption-library-demo/cards']\" fragment=\"mobileAppTextbooks\">\n                <span class=\"menu-text\">Textbook for mobile</span>\n            </a>\n        </li>\n        <li [class.active]=\"currentFragment==='qrCode'\">\n            <a [routerLink]=\"['/common-consumption-library-demo/cards']\" fragment=\"qrCode\">\n                <span class=\"menu-text\">QR code </span>\n            </a>\n        </li>\n        <li [class.active]=\"currentFragment==='cardwithHover'\">\n            <a [routerLink]=\"['/common-consumption-library-demo/cards']\" fragment=\"cardwithHover\">\n                <span class=\"menu-text\">Card with hover </span>\n            </a>\n        </li>\n        <li [class.active]=\"currentFragment==='multipleCards'\">\n            <a [routerLink]=\"['/common-consumption-library-demo/cards']\" fragment=\"multipleCards\">\n            <span class=\"menu-text\">Multiple cards  </span>\n            </a>\n        </li>\n        <li [class.active]=\"currentFragment==='offlineCard'\">\n            <a [routerLink]=\"['/common-consumption-library-demo/cards']\" fragment=\"offlineCard\">\n                <span class=\"menu-text\">Offline cards </span>\n            </a>\n        </li>\n        \n\n        </ul>\n    </li>\n    <!--Databoxes-->\n    <li [routerLinkActive]=\"['active']\">\n        <a [routerLink]=\"['/common-consumption-library-demo/grid']\">\n            <i class=\"menu-icon fa fa-th\"></i>\n            <span class=\"menu-text\"> Card Grid </span>\n        </a>\n    </li >\n    <!--Widgets-->\n    <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\n        <a [routerLink]=\"['/common-consumption-library-demo/stack']\"> \n            <i class=\"menu-icon fa fa-list-alt\"></i>\n            <span class=\"menu-text\"> Card Stack </span>\n        </a>\n    </li>\n    <!--UI Elements-->\n    <li [ngClass]=\"{'open active': filters.open, 'open': !filters.open}\" (click)=\"filters.open = !filters.open\" #filters>\n        <a [routerLink]=\"['/common-consumption-library-demo/filters']\">\n            <i class=\"menu-icon fa fa-filter\"></i>\n            <span class=\"menu-text\">\n                Filters\n            </span>\n            <i class=\"menu-expand\"></i>\n        </a>\n        <ul class=\"submenu\" (click)=\"$event.stopPropagation();\">\n\n            <li [class.active]=\"currentFragment==='squareFilters'\">\n                <a [routerLink]=\"['/common-consumption-library-demo/filters']\" fragment=\"squareFilters\">\n                    <span class=\"menu-text\">Sqaure Filters</span>\n                </a>\n            </li>\n            <li [class.active]=\"currentFragment==='roundFilters'\">\n                <a [routerLink]=\"['/common-consumption-library-demo/filters']\" fragment=\"roundFilters\">\n                    <span class=\"menu-text\">Round Filters</span>\n                </a>\n            </li>\n            <li [class.active]=\"currentFragment==='roundFiltersWithIcon'\">\n                <a [routerLink]=\"['/common-consumption-library-demo/filters']\" fragment=\"roundFiltersWithIcon\">\n                    <span class=\"menu-text\">Round Filters With Icon</span>\n                </a>\n            </li>\n            <li [class.active]=\"currentFragment==='HandlingOverflow'\">\n                <a [routerLink]=\"['/common-consumption-library-demo/filters']\" fragment=\"HandlingOverflow\">\n                    <span class=\"menu-text\">Handling overflow</span>\n                </a>\n            </li>\n            \n        </ul>\n    </li>\n    <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\n        <a [routerLink]=\"['/common-consumption-library-demo/faq']\">\n            <i class=\"menu-icon fa fa-question\"></i>\n            <span class=\"menu-text\">\n                FAQ\n            </span>\n        </a>\n    </li>\n    <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\n      <a [routerLink]=\"['/common-consumption-library-demo/toc']\">\n          <i class=\"menu-icon fa fa-book\"></i>\n          <span class=\"menu-text\">\n              Book TOC \n          </span>\n      </a>\n    </li>\n    \n  </ul>\n  <!-- /Sidebar Menu -->\n</div>"

/***/ }),

/***/ "./src/app/demo-full/layout/sidebar/sidebar.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/demo-full/layout/sidebar/sidebar.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/*#region Sidebar*/\n.page-sidebar {\n  position: absolute;\n  top: 0;\n  width: 224px;\n  display: block;\n  left: 0; }\n.page-sidebar.sidebar-fixed {\n  position: fixed;\n  float: none !important;\n  z-index: 1000;\n  height: 100%;\n  overflow-y: auto;\n  overflow-x: hidden; }\n.page-sidebar.sidebar-fixed:before {\n  top: 45px;\n  bottom: 0;\n  height: calc(100% - 45px);\n  min-height: inherit; }\n.page-sidebar.hide {\n  display: none !important; }\n.page-sidebar.hide:before {\n  display: none; }\n.page-sidebar.hide ~ .page-content {\n  margin-left: 0 !important; }\n.page-sidebar.hide ~ .page-content .breadcrumbs-fixed {\n  left: 0 !important; }\n.page-sidebar.hide ~ .page-content .page-header-fixed {\n  left: 0 !important; }\n.page-sidebar:before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  width: 219px;\n  bottom: 0;\n  top: 0;\n  left: 5px;\n  background-color: #ffffff;\n  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);\n  z-index: 1;\n  height: inherit;\n  min-height: 100vh; }\n.page-sidebar .sidebar-header-wrapper {\n  margin-left: 5px;\n  height: 45px;\n  margin-bottom: 0;\n  position: relative; }\n.page-sidebar .sidebar-header-wrapper .searchinput {\n  height: 41px;\n  z-index: 2;\n  background-color: #ffffff;\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  border: 1px solid #ffffff;\n  padding-left: 40px;\n  width: 100%; }\n.page-sidebar .sidebar-header-wrapper .searchinput:focus {\n  box-shadow: none;\n  border-color: #ffffff; }\n.page-sidebar .sidebar-header-wrapper .searchinput:focus ~ .searchhelper {\n  display: block;\n  z-index: 124; }\n.page-sidebar .sidebar-header-wrapper .searchinput::-webkit-input-placeholder {\n  color: #d0d0d0;\n  font-weight: 300;\n  font-family: \"Notosans\", \"Open Sans\", \"Segoe UI\"; }\n.page-sidebar .sidebar-header-wrapper .searchinput::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #d0d0d0;\n  font-weight: 300;\n  font-family: \"Notosans\", \"Open Sans\", \"Segoe UI\"; }\n.page-sidebar .sidebar-header-wrapper .searchinput:-moz-placeholder {\n  /* Firefox 19+ */\n  color: #d0d0d0;\n  font-weight: 300;\n  font-family: \"Notosans\", \"Open Sans\", \"Segoe UI\"; }\n.page-sidebar .sidebar-header-wrapper .searchinput:-ms-input-placeholder {\n  color: #d0d0d0;\n  font-weight: 300;\n  font-family: \"Notosans\", \"Open Sans\", \"Segoe UI\"; }\n.page-sidebar .sidebar-header-wrapper .searchicon {\n  cursor: pointer;\n  display: inline-block;\n  height: 12px;\n  left: 20px;\n  position: absolute;\n  top: 14px;\n  width: 12px;\n  color: #2dc3e8;\n  z-index: 124; }\n.page-sidebar .sidebar-header-wrapper .searchhelper {\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);\n  background-color: #fff;\n  color: #999;\n  display: none;\n  opacity: 1;\n  padding: 10px;\n  position: absolute;\n  right: 0;\n  left: 0;\n  top: 40px;\n  z-index: 4; }\n.page-sidebar .sidebar-menu {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: 5px; }\n.page-sidebar .sidebar-menu a {\n  display: block;\n  height: 38px;\n  line-height: 36px;\n  margin: 0;\n  padding: 0 16px 0 7px;\n  -webkit-text-shadow: none !important;\n  text-shadow: none !important;\n  font-size: 13px;\n  text-decoration: none;\n  color: #737373;\n  z-index: 123; }\n.page-sidebar .sidebar-menu a:hover {\n  color: #262626; }\n.page-sidebar .sidebar-menu a:hover:before {\n  display: block; }\n.page-sidebar .sidebar-menu a .menu-icon {\n  display: inline-block;\n  vertical-align: middle;\n  min-width: 30px;\n  text-align: center;\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  margin-top: -3px; }\n.page-sidebar .sidebar-menu a .menu-expand {\n  display: inline-block;\n  position: absolute;\n  font-size: 13px;\n  line-height: 10px;\n  height: 10px;\n  width: 10px;\n  right: 12px;\n  top: 15px;\n  margin: 0;\n  text-align: center;\n  padding: 0;\n  -webkit-text-shadow: none;\n  text-shadow: none;\n  color: #666666;\n  transition: all 300ms ease-in-out;\n  font-family: 'FontAwesome';\n  font-style: normal;\n  font-weight: normal; }\n.page-sidebar .sidebar-menu a .menu-expand:before {\n  content: \"\"; }\n.page-sidebar .sidebar-menu li {\n  display: block;\n  padding: 0;\n  margin: 0;\n  border: 0;\n  position: relative; }\n.page-sidebar .sidebar-menu li:before {\n  display: none;\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: -4px;\n  width: 4px;\n  max-width: 4px;\n  overflow: hidden;\n  background-color: #fb6e52; }\n.page-sidebar .sidebar-menu li.open {\n  background-color: #ffffff; }\n.page-sidebar .sidebar-menu li.open > a {\n  color: #262626; }\n.page-sidebar .sidebar-menu li.open > a .menu-expand {\n  transform: rotate(90deg); }\n.page-sidebar .sidebar-menu li.open > .submenu {\n  display: block !important; }\n.page-sidebar .sidebar-menu li.active:not(.open):before {\n  display: block; }\n.page-sidebar .sidebar-menu li.active > a {\n  display: block;\n  content: \"\";\n  color: #262626;\n  background-color: #f5f5f5; }\n.page-sidebar .sidebar-menu li:not(.open):hover:before {\n  display: block;\n  background-color: #2dc3e8; }\n.page-sidebar .sidebar-menu > li > a {\n  border-top: 1px solid #f3f3f3; }\n.page-sidebar .sidebar-menu > li > a:hover {\n  border-color: #f3f3f3;\n  background-color: #fbfbfb; }\n.page-sidebar .sidebar-menu > li:last-child > a {\n  border-bottom: 1px solid #f3f3f3; }\n.page-sidebar .sidebar-menu > li > .submenu {\n  background-color: #fbfbfb;\n  box-shadow: inset 0 4px 4px -2px rgba(0, 0, 0, 0.15), inset 0 -4px 4px -2px rgba(0, 0, 0, 0.15); }\n.page-sidebar .sidebar-menu > li > .submenu:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  z-index: 1;\n  left: 23px;\n  top: 0;\n  bottom: 19px;\n  border-left: 1px solid #e2e2e2; }\n.page-sidebar .sidebar-menu > li > .submenu > li > a:before {\n  content: \"\";\n  display: inline-block;\n  position: absolute;\n  width: 5px;\n  height: 5px;\n  left: 21px;\n  top: 17px;\n  background-color: #ffffff;\n  border: 1px solid #e2e2e2;\n  z-index: 2; }\n.page-sidebar .sidebar-menu > li > .submenu > li.active > a:before {\n  background-color: #e2e2e2; }\n.page-sidebar .sidebar-menu > li > .submenu > li.active:first-child > a {\n  box-shadow: inset 0 4px 4px -2px rgba(0, 0, 0, 0.15); }\n.page-sidebar .sidebar-menu > li > .submenu > li.active:last-child a {\n  box-shadow: inset 0 -4px 4px -2px rgba(0, 0, 0, 0.15); }\n.page-sidebar .sidebar-menu > li.open > a {\n  background-color: #ffffff; }\n.page-sidebar .sidebar-menu .submenu {\n  display: none;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  position: relative;\n  background-color: #fbfbfb;\n  border-top: 0;\n  z-index: 123; }\n.page-sidebar .sidebar-menu .submenu li {\n  margin-left: 0;\n  position: relative; }\n.page-sidebar .sidebar-menu .submenu li.open:before {\n  display: none; }\n.page-sidebar .sidebar-menu .submenu li.active > a {\n  color: #262626;\n  background-color: #f5f5f5; }\n.page-sidebar .sidebar-menu .submenu li.active > .submenu {\n  display: block; }\n.page-sidebar .sidebar-menu .submenu > li > a {\n  padding-left: 40px; }\n.page-sidebar .sidebar-menu .submenu > li.open > a {\n  background-color: #fbfbfb; }\n.page-sidebar .sidebar-menu .submenu > li .submenu {\n  border-top: 1px solid #eeeeee;\n  border-bottom: 1px solid #eeeeee; }\n.page-sidebar .sidebar-menu .submenu > li .submenu > li > a {\n  padding-left: 50px; }\n.page-sidebar .sidebar-menu .submenu > li .submenu > li .submenu > li > a {\n  padding-left: 70px; }\n.page-sidebar.menu-compact {\n  width: 42px; }\n.page-sidebar.menu-compact ~ .page-content {\n  margin-left: 43px; }\n.page-sidebar.menu-compact ~ .page-content .breadcrumbs-fixed {\n  left: 47px; }\n.page-sidebar.menu-compact ~ .page-content .page-header-fixed {\n  left: 47px; }\n.page-sidebar.menu-compact:before {\n  width: 42px; }\n.page-sidebar.menu-compact .sidebar-header-wrapper {\n  width: 42px; }\n.page-sidebar.menu-compact .sidebar-header-wrapper:hover {\n  width: 238px; }\n.page-sidebar.menu-compact .sidebar-header-wrapper:hover .searchinput {\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4); }\n.page-sidebar.menu-compact .sidebar-header-wrapper .searchinput:focus {\n  width: 238px;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4); }\n.page-sidebar.menu-compact .sidebar-header-wrapper .searchinput:focus ~ .searchhelper {\n  width: 238px; }\n.page-sidebar.menu-compact .sidebar-header-wrapper .searchicon {\n  left: 15px; }\n.page-sidebar.menu-compact .sidebar-menu {\n  width: 42px; }\n.page-sidebar.menu-compact .sidebar-menu > li.open > .menu-text {\n  display: none !important; }\n.page-sidebar.menu-compact .sidebar-menu > li.open > .submenu {\n  display: none !important; }\n.page-sidebar.menu-compact .sidebar-menu > li:hover > a {\n  color: #262626; }\n.page-sidebar.menu-compact .sidebar-menu > li:hover > a > .menu-text {\n  display: block; }\n.page-sidebar.menu-compact .sidebar-menu > li:hover > .submenu {\n  display: block !important; }\n.page-sidebar.menu-compact .sidebar-menu > li > a {\n  position: relative;\n  z-index: 123; }\n.page-sidebar.menu-compact .sidebar-menu > li > a .menu-text {\n  display: none;\n  position: absolute;\n  left: 42px;\n  top: 0;\n  width: 195px;\n  height: 38px;\n  line-height: 38px;\n  background-color: #ffffff;\n  z-index: 121;\n  padding-left: 25px;\n  box-shadow: 5px 5px 5px -5px rgba(0, 0, 0, 0.3), 5px 5px 5px -5px rgba(0, 0, 0, 0.3), 5px -5px 5px -5px rgba(0, 0, 0, 0.3); }\n.page-sidebar.menu-compact .sidebar-menu > li > a .menu-expand {\n  display: none; }\n.page-sidebar.menu-compact .sidebar-menu > li > a.menu-dropdown {\n  box-shadow: none; }\n.page-sidebar.menu-compact .sidebar-menu > li > a.menu-dropdown > .menu-text {\n  border: 0;\n  top: 0;\n  left: 42px;\n  width: 195px;\n  border-bottom: 1px solid #f3f3f3;\n  box-shadow: none; }\n.page-sidebar.menu-compact .sidebar-menu > li > a:hover {\n  background-color: #ffffff; }\n.page-sidebar.menu-compact .sidebar-menu > li > .submenu {\n  background: #fbfbfb;\n  position: absolute;\n  z-index: 120;\n  left: 42px;\n  top: 0;\n  width: 195px;\n  box-shadow: none;\n  padding-top: 38px;\n  display: none;\n  border-left: 1px solid #f3f3f3;\n  box-shadow: 5px 5px 5px -5px rgba(0, 0, 0, 0.3), 5px 5px 5px -5px rgba(0, 0, 0, 0.3), 5px -5px 5px -5px rgba(0, 0, 0, 0.3); }\n.page-sidebar.menu-compact .sidebar-menu > li > .submenu li > a {\n  margin-left: 0;\n  padding-left: 24px; }\n.page-sidebar.menu-compact .sidebar-menu > li > .submenu li.open > .submenu {\n  display: block;\n  left: 0;\n  position: relative;\n  box-shadow: none; }\n.page-sidebar.menu-compact .sidebar-menu > li > .submenu li .submenu {\n  display: none;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  position: relative; }\n.page-sidebar.menu-compact .sidebar-menu > li > .submenu li:hover {\n  background-color: #ffffff; }\n.page-sidebar.menu-compact .sidebar-menu > li > .submenu li:hover:before {\n  display: block;\n  left: 0; }\n.page-sidebar.menu-compact .sidebar-menu > li > .submenu li.active:not(.open):before {\n  left: 0; }\n.page-sidebar.menu-compact .sidebar-menu > li > .submenu:before {\n  display: none; }\n.page-sidebar.menu-compact .sidebar-menu > li > .submenu > li > a {\n  box-shadow: none !important; }\n.page-sidebar.menu-compact .sidebar-menu > li > .submenu > li > a:before {\n  display: none; }\n@media only screen and (max-width: 880px) {\n  .page-sidebar:before {\n    display: none; }\n  .page-sidebar {\n    display: none;\n    float: none; }\n  .breadcrumbs-fixed {\n    left: 0 !important; }\n  .page-header-fixed {\n    left: 0 !important; } }\n@media (max-width: 880px) {\n  .page-sidebar.hide {\n    display: block !important; }\n  .page-sidebar.hide:before {\n    display: block !important; }\n  .page-sidebar.hide ~ .page-content {\n    margin-left: 224px !important; }\n  .page-sidebar.hide ~ .page-content .breadcrumbs-fixed {\n    left: 224px !important; }\n  .page-sidebar.hide ~ .page-content .page-header-fixed {\n    left: 224px !important; }\n  .page-sidebar.menu-compact ~ .page-content {\n    margin-left: 0; }\n  .page-sidebar.menu-compact ~ .page-content .breadcrumbs-fixed {\n    left: 0; }\n  .page-sidebar.menu-compact ~ .page-content .page-header-fixed {\n    left: 0; }\n  .page-sidebar.menu-compact.hide ~ .page-content {\n    margin-left: 46px !important; }\n  .page-sidebar.menu-compact.hide ~ .page-content .breadcrumbs-fixed {\n    left: 46px !important; }\n  .page-sidebar.menu-compact.hide ~ .page-content .page-header-fixed {\n    left: 46px !important; } }\n@media (max-width: 500px) {\n  .page-sidebar.hide ~ .page-content .page-header .header-title {\n    display: none; }\n  .page-sidebar.hide ~ .page-content .page-header .header-buttons .refresh,\n  .page-sidebar.hide ~ .page-content .page-header .header-buttons .fullscreen {\n    display: none; }\n  .page-sidebar.menu-compact.hide ~ .page-content .page-header .header-buttons .refresh,\n  .page-sidebar.menu-compact.hide ~ .page-content .page-header .header-buttons .fullscreen {\n    display: inline-block; } }\n/*#endregion Sidebar*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby1mdWxsL2xheW91dC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RlbW8tZnVsbC9sYXlvdXQvc2lkZWJhci9FOlxccHJvamVjdHNcXGNocmlzdHlcXGNvbW1vbi1jb25zdW1wdGlvbi1kZW1vL3NyY1xcYXBwXFxkZW1vLWZ1bGxcXGxheW91dFxcc2lkZWJhclxcc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUI7QUNBakIsbUJBQW1CO0FBQ25CO0VBQ0ksbUJBQWtCO0VBQ2xCLE9BQU07RUFFTixhQUFZO0VBQ1osZUFBYztFQUNkLFFBQU0sRUFDUDtBQUNEO0VBQ0UsZ0JBQWU7RUFFZix1QkFBc0I7RUFDdEIsY0FBYTtFQUNiLGFBQVk7RUFDWixpQkFBZ0I7RUFDaEIsbUJBQWtCLEVBQ25CO0FBQ0Q7RUFFRSxVQUFTO0VBQ1QsVUFBUztFQUNULDBCQUF5QjtFQUN6QixvQkFBbUIsRUFDcEI7QUFDRDtFQUNFLHlCQUF3QixFQUN6QjtBQUNEO0VBQ0UsY0FBYSxFQUNkO0FBQ0Q7RUFDRSwwQkFBeUIsRUFDMUI7QUFDRDtFQUNFLG1CQUFrQixFQUNuQjtBQUNEO0VBQ0UsbUJBQWtCLEVBQ25CO0FBQ0Q7RUFDRSxZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLGVBQWM7RUFDZCxhQUFZO0VBQ1osVUFBUztFQUNULE9BQU07RUFDTixVQUFTO0VBQ1QsMEJBQXlCO0VBR3pCLDBDQUF5QztFQUN6QyxXQUFVO0VBQ1YsZ0JBQWU7RUFDZixrQkFBaUIsRUFDbEI7QUFDRDtFQUNFLGlCQUFnQjtFQUNoQixhQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLG1CQUFrQixFQUNuQjtBQUNEO0VBQ0UsYUFBWTtFQUNaLFdBQVU7RUFDViwwQkFBeUI7RUFDekIsZUFBYztFQUNkLG1CQUFrQjtFQUNsQixPQUFNO0VBQ04sUUFBTztFQUNQLDBCQUF5QjtFQUN6QixtQkFBa0I7RUFDbEIsWUFBVyxFQUNaO0FBQ0Q7RUFHRSxpQkFBZ0I7RUFDaEIsc0JBQXFCLEVBQ3RCO0FBQ0Q7RUFDRSxlQUFjO0VBQ2QsYUFBWSxFQUNiO0FBQ0Q7RUFDRSxlQUFjO0VBQ2QsaUJBQWdCO0VBQ2hCLGlEQUFnRCxFQUNqRDtBQUNEO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWM7RUFDZCxpQkFBZ0I7RUFDaEIsaURBQWdELEVBQ2pEO0FBQ0Q7RUFDRSxpQkFBaUI7RUFDakIsZUFBYztFQUNkLGlCQUFnQjtFQUNoQixpREFBZ0QsRUFDakQ7QUFDRDtFQUNFLGVBQWM7RUFDZCxpQkFBZ0I7RUFDaEIsaURBQWdELEVBQ2pEO0FBQ0Q7RUFDRSxnQkFBZTtFQUNmLHNCQUFxQjtFQUNyQixhQUFZO0VBQ1osV0FBVTtFQUNWLG1CQUFrQjtFQUNsQixVQUFTO0VBQ1QsWUFBVztFQUNYLGVBQWM7RUFDZCxhQUFZLEVBQ2I7QUFDRDtFQUdFLDJDQUEwQztFQUMxQyx1QkFBc0I7RUFDdEIsWUFBVztFQUNYLGNBQWE7RUFDYixXQUFVO0VBQ1YsY0FBYTtFQUNiLG1CQUFrQjtFQUNsQixTQUFRO0VBQ1IsUUFBTztFQUNQLFVBQVM7RUFDVCxXQUFVLEVBQ1g7QUFDRDtFQUNFLFVBQVM7RUFDVCxXQUFVO0VBQ1YsaUJBQWdCO0VBQ2hCLGlCQUFnQixFQUNqQjtBQUNEO0VBQ0UsZUFBYztFQUNkLGFBQVk7RUFDWixrQkFBaUI7RUFDakIsVUFBUztFQUNULHNCQUFxQjtFQUNyQixxQ0FBb0M7RUFDcEMsNkJBQTRCO0VBQzVCLGdCQUFlO0VBQ2Ysc0JBQXFCO0VBQ3JCLGVBQWM7RUFDZCxhQUFZLEVBQ2I7QUFDRDtFQUNFLGVBQWMsRUFDZjtBQUNEO0VBQ0UsZUFBYyxFQUNmO0FBQ0Q7RUFDRSxzQkFBcUI7RUFDckIsdUJBQXNCO0VBQ3RCLGdCQUFlO0VBQ2YsbUJBQWtCO0VBQ2xCLGdCQUFlO0VBQ2Ysb0JBQW1CO0VBQ25CLG1CQUFrQjtFQUNsQixpQkFBZ0IsRUFDakI7QUFDRDtFQUNFLHNCQUFxQjtFQUNyQixtQkFBa0I7RUFDbEIsZ0JBQWU7RUFDZixrQkFBaUI7RUFDakIsYUFBWTtFQUNaLFlBQVc7RUFDWCxZQUFXO0VBQ1gsVUFBUztFQUNULFVBQVM7RUFDVCxtQkFBa0I7RUFDbEIsV0FBVTtFQUNWLDBCQUF5QjtFQUN6QixrQkFBaUI7RUFDakIsZUFBYztFQUlkLGtDQUFpQztFQUNqQywyQkFBMEI7RUFDMUIsbUJBQWtCO0VBQ2xCLG9CQUFtQixFQUNwQjtBQUNEO0VBQ0UsYUFBZ0IsRUFBQTtBQUVsQjtFQUNFLGVBQWM7RUFDZCxXQUFVO0VBQ1YsVUFBUztFQUNULFVBQVM7RUFDVCxtQkFBa0IsRUFDbkI7QUFDRDtFQUNFLGNBQWE7RUFDYixZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLE9BQU07RUFDTixVQUFTO0VBQ1QsV0FBVTtFQUNWLFdBQVU7RUFDVixlQUFjO0VBQ2QsaUJBQWdCO0VBQ2hCLDBCQUF5QixFQUMxQjtBQUNEO0VBQ0UsMEJBQXlCLEVBQzFCO0FBQ0Q7RUFDRSxlQUFjLEVBQ2Y7QUFDRDtFQUtFLHlCQUF3QixFQUN6QjtBQUNEO0VBQ0UsMEJBQXlCLEVBQzFCO0FBQ0Q7RUFDRSxlQUFjLEVBQ2Y7QUFDRDtFQUNFLGVBQWM7RUFDZCxZQUFXO0VBQ1gsZUFBYztFQUNkLDBCQUF5QixFQUMxQjtBQUNEO0VBQ0UsZUFBYztFQUNkLDBCQUF5QixFQUMxQjtBQUNEO0VBQ0UsOEJBQTZCLEVBQzlCO0FBQ0Q7RUFDRSxzQkFBcUI7RUFDckIsMEJBQXlCLEVBQzFCO0FBQ0Q7RUFDRSxpQ0FBZ0MsRUFDakM7QUFDRDtFQUNFLDBCQUF5QjtFQUd6QixnR0FBK0YsRUFDaEc7QUFDRDtFQUNFLFlBQVc7RUFDWCxlQUFjO0VBQ2QsbUJBQWtCO0VBQ2xCLFdBQVU7RUFDVixXQUFVO0VBQ1YsT0FBTTtFQUNOLGFBQVk7RUFDWiwrQkFBOEIsRUFDL0I7QUFDRDtFQUNFLFlBQVc7RUFDWCxzQkFBcUI7RUFDckIsbUJBQWtCO0VBQ2xCLFdBQVU7RUFDVixZQUFXO0VBQ1gsV0FBVTtFQUNWLFVBQVM7RUFDVCwwQkFBeUI7RUFDekIsMEJBQXlCO0VBQ3pCLFdBQVUsRUFDWDtBQUNEO0VBQ0UsMEJBQXlCLEVBQzFCO0FBQ0Q7RUFHRSxxREFBb0QsRUFDckQ7QUFDRDtFQUdFLHNEQUFxRCxFQUN0RDtBQUNEO0VBQ0UsMEJBQXlCLEVBQzFCO0FBQ0Q7RUFDRSxjQUFhO0VBQ2IsaUJBQWdCO0VBQ2hCLFVBQVM7RUFDVCxXQUFVO0VBQ1YsbUJBQWtCO0VBQ2xCLDBCQUF5QjtFQUN6QixjQUFhO0VBQ2IsYUFBWSxFQUNiO0FBQ0Q7RUFDRSxlQUFjO0VBQ2QsbUJBQWtCLEVBQ25CO0FBQ0Q7RUFDRSxjQUFhLEVBQ2Q7QUFDRDtFQUNFLGVBQWM7RUFDZCwwQkFBeUIsRUFDMUI7QUFDRDtFQUNFLGVBQWMsRUFDZjtBQUNEO0VBQ0UsbUJBQWtCLEVBQ25CO0FBQ0Q7RUFDRSwwQkFBeUIsRUFDMUI7QUFDRDtFQUNFLDhCQUE2QjtFQUM3QixpQ0FBZ0MsRUFDakM7QUFDRDtFQUNFLG1CQUFrQixFQUNuQjtBQUNEO0VBQ0UsbUJBQWtCLEVBQ25CO0FBQ0Q7RUFDRSxZQUFXLEVBQ1o7QUFDRDtFQUNFLGtCQUFpQixFQUNsQjtBQUNEO0VBQ0UsV0FBVSxFQUNYO0FBQ0Q7RUFDRSxXQUFVLEVBQ1g7QUFDRDtFQUNFLFlBQVcsRUFDWjtBQUNEO0VBQ0UsWUFBVyxFQUNaO0FBQ0Q7RUFDRSxhQUFZLEVBQ2I7QUFDRDtFQUdFLDJDQUEwQyxFQUMzQztBQUNEO0VBQ0UsYUFBWTtFQUdaLDJDQUEwQyxFQUMzQztBQUNEO0VBQ0UsYUFBWSxFQUNiO0FBQ0Q7RUFDRSxXQUFVLEVBQ1g7QUFDRDtFQUNFLFlBQVcsRUFDWjtBQUNEO0VBQ0UseUJBQXdCLEVBQ3pCO0FBQ0Q7RUFDRSx5QkFBd0IsRUFDekI7QUFDRDtFQUNFLGVBQWMsRUFDZjtBQUNEO0VBQ0UsZUFBYyxFQUNmO0FBQ0Q7RUFDRSwwQkFBeUIsRUFDMUI7QUFDRDtFQUNFLG1CQUFrQjtFQUNsQixhQUFZLEVBQ2I7QUFDRDtFQUNFLGNBQWE7RUFDYixtQkFBa0I7RUFDbEIsV0FBVTtFQUNWLE9BQU07RUFDTixhQUFZO0VBQ1osYUFBWTtFQUNaLGtCQUFpQjtFQUNqQiwwQkFBeUI7RUFDekIsYUFBWTtFQUNaLG1CQUFrQjtFQUdsQiwySEFBMEgsRUFDM0g7QUFDRDtFQUNFLGNBQWEsRUFDZDtBQUNEO0VBR0UsaUJBQWdCLEVBQ2pCO0FBQ0Q7RUFDRSxVQUFTO0VBQ1QsT0FBTTtFQUNOLFdBQVU7RUFDVixhQUFZO0VBQ1osaUNBQWdDO0VBR2hDLGlCQUFnQixFQUNqQjtBQUNEO0VBQ0UsMEJBQXlCLEVBQzFCO0FBQ0Q7RUFDRSxvQkFBbUI7RUFDbkIsbUJBQWtCO0VBQ2xCLGFBQVk7RUFDWixXQUFVO0VBQ1YsT0FBTTtFQUNOLGFBQVk7RUFHWixpQkFBZ0I7RUFDaEIsa0JBQWlCO0VBQ2pCLGNBQWE7RUFDYiwrQkFBOEI7RUFHOUIsMkhBQTBILEVBQzNIO0FBQ0Q7RUFDRSxlQUFjO0VBQ2QsbUJBQWtCLEVBQ25CO0FBQ0Q7RUFDRSxlQUFjO0VBQ2QsUUFBTztFQUNQLG1CQUFrQjtFQUdsQixpQkFBZ0IsRUFDakI7QUFDRDtFQUNFLGNBQWE7RUFDYixpQkFBZ0I7RUFDaEIsVUFBUztFQUNULFdBQVU7RUFDVixtQkFBa0IsRUFDbkI7QUFDRDtFQUNFLDBCQUF5QixFQUMxQjtBQUNEO0VBQ0UsZUFBYztFQUNkLFFBQU8sRUFDUjtBQUNEO0VBQ0UsUUFBTyxFQUNSO0FBQ0Q7RUFDRSxjQUFhLEVBQ2Q7QUFDRDtFQUdFLDRCQUEyQixFQUM1QjtBQUNEO0VBQ0UsY0FBYSxFQUNkO0FBQ0Q7RUFDRTtJQUNFLGNBQWEsRUFDZDtFQUNEO0lBQ0UsY0FBYTtJQUNiLFlBQVcsRUFDWjtFQUNEO0lBQ0UsbUJBQWtCLEVBQ25CO0VBQ0Q7SUFDRSxtQkFBa0IsRUFDbkIsRUFBQTtBQUVIO0VBQ0U7SUFDRSwwQkFBeUIsRUFDMUI7RUFDRDtJQUNFLDBCQUF5QixFQUMxQjtFQUNEO0lBQ0UsOEJBQTZCLEVBQzlCO0VBQ0Q7SUFDRSx1QkFBc0IsRUFDdkI7RUFDRDtJQUNFLHVCQUFzQixFQUN2QjtFQUNEO0lBQ0UsZUFBYyxFQUNmO0VBQ0Q7SUFDRSxRQUFPLEVBQ1I7RUFDRDtJQUNFLFFBQU8sRUFDUjtFQUNEO0lBQ0UsNkJBQTRCLEVBQzdCO0VBQ0Q7SUFDRSxzQkFBcUIsRUFDdEI7RUFDRDtJQUNFLHNCQUFxQixFQUN0QixFQUFBO0FBRUg7RUFDRTtJQUNFLGNBQWEsRUFDZDtFQUNEOztJQUVFLGNBQWEsRUFDZDtFQUNEOztJQUVFLHNCQUFxQixFQUN0QixFQUFBO0FBRUgsc0JBQXNCIiwiZmlsZSI6InNyYy9hcHAvZGVtby1mdWxsL2xheW91dC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKiNyZWdpb24gU2lkZWJhciovXG4ucGFnZS1zaWRlYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAyMjRweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGxlZnQ6IDA7IH1cblxuLnBhZ2Utc2lkZWJhci5zaWRlYmFyLWZpeGVkIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBmbG9hdDogbm9uZSAhaW1wb3J0YW50O1xuICB6LWluZGV4OiAxMDAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG92ZXJmbG93LXg6IGhpZGRlbjsgfVxuXG4ucGFnZS1zaWRlYmFyLnNpZGViYXItZml4ZWQ6YmVmb3JlIHtcbiAgdG9wOiA0NXB4O1xuICBib3R0b206IDA7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNDVweCk7XG4gIG1pbi1oZWlnaHQ6IGluaGVyaXQ7IH1cblxuLnBhZ2Utc2lkZWJhci5oaWRlIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XG5cbi5wYWdlLXNpZGViYXIuaGlkZTpiZWZvcmUge1xuICBkaXNwbGF5OiBub25lOyB9XG5cbi5wYWdlLXNpZGViYXIuaGlkZSB+IC5wYWdlLWNvbnRlbnQge1xuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50OyB9XG5cbi5wYWdlLXNpZGViYXIuaGlkZSB+IC5wYWdlLWNvbnRlbnQgLmJyZWFkY3J1bWJzLWZpeGVkIHtcbiAgbGVmdDogMCAhaW1wb3J0YW50OyB9XG5cbi5wYWdlLXNpZGViYXIuaGlkZSB+IC5wYWdlLWNvbnRlbnQgLnBhZ2UtaGVhZGVyLWZpeGVkIHtcbiAgbGVmdDogMCAhaW1wb3J0YW50OyB9XG5cbi5wYWdlLXNpZGViYXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDIxOXB4O1xuICBib3R0b206IDA7XG4gIHRvcDogMDtcbiAgbGVmdDogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAtbW96LWJveC1zaGFkb3c6IDAgMCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgei1pbmRleDogMTtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICBtaW4taGVpZ2h0OiAxMDB2aDsgfVxuXG4ucGFnZS1zaWRlYmFyIC5zaWRlYmFyLWhlYWRlci13cmFwcGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cblxuLnBhZ2Utc2lkZWJhciAuc2lkZWJhci1oZWFkZXItd3JhcHBlciAuc2VhcmNoaW5wdXQge1xuICBoZWlnaHQ6IDQxcHg7XG4gIHotaW5kZXg6IDI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICB3aWR0aDogMTAwJTsgfVxuXG4ucGFnZS1zaWRlYmFyIC5zaWRlYmFyLWhlYWRlci13cmFwcGVyIC5zZWFyY2hpbnB1dDpmb2N1cyB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgLW1vei1ib3gtc2hhZG93OiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXItY29sb3I6ICNmZmZmZmY7IH1cblxuLnBhZ2Utc2lkZWJhciAuc2lkZWJhci1oZWFkZXItd3JhcHBlciAuc2VhcmNoaW5wdXQ6Zm9jdXMgfiAuc2VhcmNoaGVscGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHotaW5kZXg6IDEyNDsgfVxuXG4ucGFnZS1zaWRlYmFyIC5zaWRlYmFyLWhlYWRlci13cmFwcGVyIC5zZWFyY2hpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjZDBkMGQwO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LWZhbWlseTogXCJOb3Rvc2Fuc1wiLCBcIk9wZW4gU2Fuc1wiLCBcIlNlZ29lIFVJXCI7IH1cblxuLnBhZ2Utc2lkZWJhciAuc2lkZWJhci1oZWFkZXItd3JhcHBlciAuc2VhcmNoaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAvKiBGaXJlZm94IDE5KyAqL1xuICBjb2xvcjogI2QwZDBkMDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1mYW1pbHk6IFwiTm90b3NhbnNcIiwgXCJPcGVuIFNhbnNcIiwgXCJTZWdvZSBVSVwiOyB9XG5cbi5wYWdlLXNpZGViYXIgLnNpZGViYXItaGVhZGVyLXdyYXBwZXIgLnNlYXJjaGlucHV0Oi1tb3otcGxhY2Vob2xkZXIge1xuICAvKiBGaXJlZm94IDE5KyAqL1xuICBjb2xvcjogI2QwZDBkMDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1mYW1pbHk6IFwiTm90b3NhbnNcIiwgXCJPcGVuIFNhbnNcIiwgXCJTZWdvZSBVSVwiOyB9XG5cbi5wYWdlLXNpZGViYXIgLnNpZGViYXItaGVhZGVyLXdyYXBwZXIgLnNlYXJjaGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjZDBkMGQwO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LWZhbWlseTogXCJOb3Rvc2Fuc1wiLCBcIk9wZW4gU2Fuc1wiLCBcIlNlZ29lIFVJXCI7IH1cblxuLnBhZ2Utc2lkZWJhciAuc2lkZWJhci1oZWFkZXItd3JhcHBlciAuc2VhcmNoaWNvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDEycHg7XG4gIGxlZnQ6IDIwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNHB4O1xuICB3aWR0aDogMTJweDtcbiAgY29sb3I6ICMyZGMzZTg7XG4gIHotaW5kZXg6IDEyNDsgfVxuXG4ucGFnZS1zaWRlYmFyIC5zaWRlYmFyLWhlYWRlci13cmFwcGVyIC5zZWFyY2hoZWxwZXIge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTBweCA0MHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDEwcHggNDBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIGJveC1zaGFkb3c6IDAgMTBweCA0MHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICM5OTk7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG9wYWNpdHk6IDE7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIHRvcDogNDBweDtcbiAgei1pbmRleDogNDsgfVxuXG4ucGFnZS1zaWRlYmFyIC5zaWRlYmFyLW1lbnUge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7IH1cblxuLnBhZ2Utc2lkZWJhciAuc2lkZWJhci1tZW51IGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAzOHB4O1xuICBsaW5lLWhlaWdodDogMzZweDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwIDE2cHggMCA3cHg7XG4gIC13ZWJraXQtdGV4dC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgdGV4dC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjNzM3MzczO1xuICB6LWluZGV4OiAxMjM7IH1cblxuLnBhZ2Utc2lkZWJhciAuc2lkZWJhci1tZW51IGE6aG92ZXIge1xuICBjb2xvcjogIzI2MjYyNjsgfVxuXG4ucGFnZS1zaWRlYmFyIC5zaWRlYmFyLW1lbnUgYTpob3ZlcjpiZWZvcmUge1xuICBkaXNwbGF5OiBibG9jazsgfVxuXG4ucGFnZS1zaWRlYmFyIC5zaWRlYmFyLW1lbnUgYSAubWVudS1pY29uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtaW4td2lkdGg6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIG1hcmdpbi10b3A6IC0zcHg7IH1cblxuLnBhZ2Utc2lkZWJhciAuc2lkZWJhci1tZW51IGEgLm1lbnUtZXhwYW5kIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgd2lkdGg6IDEwcHg7XG4gIHJpZ2h0OiAxMnB4O1xuICB0b3A6IDE1cHg7XG4gIG1hcmdpbjogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xuICAtd2Via2l0LXRleHQtc2hhZG93OiBub25lO1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgY29sb3I6ICM2NjY2NjY7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbi1vdXQ7XG4gIGZvbnQtZmFtaWx5OiAnRm9udEF3ZXNvbWUnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7IH1cblxuLnBhZ2Utc2lkZWJhciAuc2lkZWJhci1tZW51IGEgLm1lbnUtZXhwYW5kOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74SFXCI7IH1cblxuLnBhZ2Utc2lkZWJhciAuc2lkZWJhci1tZW51IGxpIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cblxuLnBhZ2Utc2lkZWJhciAuc2lkZWJhci1tZW51IGxpOmJlZm9yZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IC00cHg7XG4gIHdpZHRoOiA0cHg7XG4gIG1heC13aWR0aDogNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmI2ZTUyOyB9XG5cbi5wYWdlLXNpZGViYXIgLnNpZGViYXItbWVudSBsaS5vcGVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsgfVxuXG4ucGFnZS1zaWRlYmFyIC5zaWRlYmFyLW1lbnUgbGkub3BlbiA+IGEge1xuICBjb2xvcjogIzI2MjYyNjsgfVxuXG4ucGFnZS1zaWRlYmFyIC5zaWRlYmFyLW1lbnUgbGkub3BlbiA+IGEgLm1lbnUtZXhwYW5kIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTsgfVxuXG4ucGFnZS1zaWRlYmFyIC5zaWRlYmFyLW1lbnUgbGkub3BlbiA+IC5zdWJtZW51IHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDsgfVxuXG4ucGFnZS1zaWRlYmFyIC5zaWRlYmFyLW1lbnUgbGkuYWN0aXZlOm5vdCgub3Blbik6YmVmb3JlIHtcbiAgZGlzcGxheTogYmxvY2s7IH1cblxuLnBhZ2Utc2lkZWJhciAuc2lkZWJhci1tZW51IGxpLmFjdGl2ZSA+IGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29udGVudDogXCJcIjtcbiAgY29sb3I6ICMyNjI2MjY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7IH1cblxuLnBhZ2Utc2lkZWJhciAuc2lkZWJhci1tZW51IGxpOm5vdCgub3Blbik6aG92ZXI6YmVmb3JlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZGMzZTg7IH1cblxuLnBhZ2Utc2lkZWJhciAuc2lkZWJhci1tZW51ID4gbGkgPiBhIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmM2YzZjM7IH1cblxuLnBhZ2Utc2lkZWJhciAuc2lkZWJhci1tZW51ID4gbGkgPiBhOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjZjNmM2YzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJmYmZiOyB9XG5cbi5wYWdlLXNpZGViYXIgLnNpZGViYXItbWVudSA+IGxpOmxhc3QtY2hpbGQgPiBhIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmM2YzZjM7IH1cblxuLnBhZ2Utc2lkZWJhciAuc2lkZWJhci1tZW51ID4gbGkgPiAuc3VibWVudSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYmZiZmI7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCA0cHggNHB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjE1KSwgaW5zZXQgMCAtNHB4IDRweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMCA0cHggNHB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjE1KSwgaW5zZXQgMCAtNHB4IDRweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgNHB4IDRweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSksIGluc2V0IDAgLTRweCA0cHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMTUpOyB9XG5cbi5wYWdlLXNpZGViYXIgLnNpZGViYXItbWVudSA+IGxpID4gLnN1Ym1lbnU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgbGVmdDogMjNweDtcbiAgdG9wOiAwO1xuICBib3R0b206IDE5cHg7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2UyZTJlMjsgfVxuXG4ucGFnZS1zaWRlYmFyIC5zaWRlYmFyLW1lbnUgPiBsaSA+IC5zdWJtZW51ID4gbGkgPiBhOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNXB4O1xuICBoZWlnaHQ6IDVweDtcbiAgbGVmdDogMjFweDtcbiAgdG9wOiAxN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlMmUyO1xuICB6LWluZGV4OiAyOyB9XG5cbi5wYWdlLXNpZGViYXIgLnNpZGViYXItbWVudSA+IGxpID4gLnN1Ym1lbnUgPiBsaS5hY3RpdmUgPiBhOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmUyZTI7IH1cblxuLnBhZ2Utc2lkZWJhciAuc2lkZWJhci1tZW51ID4gbGkgPiAuc3VibWVudSA+IGxpLmFjdGl2ZTpmaXJzdC1jaGlsZCA+IGEge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgNHB4IDRweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMCA0cHggNHB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCA0cHggNHB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjE1KTsgfVxuXG4ucGFnZS1zaWRlYmFyIC5zaWRlYmFyLW1lbnUgPiBsaSA+IC5zdWJtZW51ID4gbGkuYWN0aXZlOmxhc3QtY2hpbGQgYSB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAtNHB4IDRweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMCAtNHB4IDRweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgLTRweCA0cHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMTUpOyB9XG5cbi5wYWdlLXNpZGViYXIgLnNpZGViYXItbWVudSA+IGxpLm9wZW4gPiBhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsgfVxuXG4ucGFnZS1zaWRlYmFyIC5zaWRlYmFyLW1lbnUgLnN1Ym1lbnUge1xuICBkaXNwbGF5OiBub25lO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZmJmYjtcbiAgYm9yZGVyLXRvcDogMDtcbiAgei1pbmRleDogMTIzOyB9XG5cbi5wYWdlLXNpZGViYXIgLnNpZGViYXItbWVudSAuc3VibWVudSBsaSB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cblxuLnBhZ2Utc2lkZWJhciAuc2lkZWJhci1tZW51IC5zdWJtZW51IGxpLm9wZW46YmVmb3JlIHtcbiAgZGlzcGxheTogbm9uZTsgfVxuXG4ucGFnZS1zaWRlYmFyIC5zaWRlYmFyLW1lbnUgLnN1Ym1lbnUgbGkuYWN0aXZlID4gYSB7XG4gIGNvbG9yOiAjMjYyNjI2O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1OyB9XG5cbi5wYWdlLXNpZGViYXIgLnNpZGViYXItbWVudSAuc3VibWVudSBsaS5hY3RpdmUgPiAuc3VibWVudSB7XG4gIGRpc3BsYXk6IGJsb2NrOyB9XG5cbi5wYWdlLXNpZGViYXIgLnNpZGViYXItbWVudSAuc3VibWVudSA+IGxpID4gYSB7XG4gIHBhZGRpbmctbGVmdDogNDBweDsgfVxuXG4ucGFnZS1zaWRlYmFyIC5zaWRlYmFyLW1lbnUgLnN1Ym1lbnUgPiBsaS5vcGVuID4gYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYmZiZmI7IH1cblxuLnBhZ2Utc2lkZWJhciAuc2lkZWJhci1tZW51IC5zdWJtZW51ID4gbGkgLnN1Ym1lbnUge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZWVlZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWVlZWU7IH1cblxuLnBhZ2Utc2lkZWJhciAuc2lkZWJhci1tZW51IC5zdWJtZW51ID4gbGkgLnN1Ym1lbnUgPiBsaSA+IGEge1xuICBwYWRkaW5nLWxlZnQ6IDUwcHg7IH1cblxuLnBhZ2Utc2lkZWJhciAuc2lkZWJhci1tZW51IC5zdWJtZW51ID4gbGkgLnN1Ym1lbnUgPiBsaSAuc3VibWVudSA+IGxpID4gYSB7XG4gIHBhZGRpbmctbGVmdDogNzBweDsgfVxuXG4ucGFnZS1zaWRlYmFyLm1lbnUtY29tcGFjdCB7XG4gIHdpZHRoOiA0MnB4OyB9XG5cbi5wYWdlLXNpZGViYXIubWVudS1jb21wYWN0IH4gLnBhZ2UtY29udGVudCB7XG4gIG1hcmdpbi1sZWZ0OiA0M3B4OyB9XG5cbi5wYWdlLXNpZGViYXIubWVudS1jb21wYWN0IH4gLnBhZ2UtY29udGVudCAuYnJlYWRjcnVtYnMtZml4ZWQge1xuICBsZWZ0OiA0N3B4OyB9XG5cbi5wYWdlLXNpZGViYXIubWVudS1jb21wYWN0IH4gLnBhZ2UtY29udGVudCAucGFnZS1oZWFkZXItZml4ZWQge1xuICBsZWZ0OiA0N3B4OyB9XG5cbi5wYWdlLXNpZGViYXIubWVudS1jb21wYWN0OmJlZm9yZSB7XG4gIHdpZHRoOiA0MnB4OyB9XG5cbi5wYWdlLXNpZGViYXIubWVudS1jb21wYWN0IC5zaWRlYmFyLWhlYWRlci13cmFwcGVyIHtcbiAgd2lkdGg6IDQycHg7IH1cblxuLnBhZ2Utc2lkZWJhci5tZW51LWNvbXBhY3QgLnNpZGViYXItaGVhZGVyLXdyYXBwZXI6aG92ZXIge1xuICB3aWR0aDogMjM4cHg7IH1cblxuLnBhZ2Utc2lkZWJhci5tZW51LWNvbXBhY3QgLnNpZGViYXItaGVhZGVyLXdyYXBwZXI6aG92ZXIgLnNlYXJjaGlucHV0IHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDEwcHggNDBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIC1tb3otYm94LXNoYWRvdzogMCAxMHB4IDQwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBib3gtc2hhZG93OiAwIDEwcHggNDBweCByZ2JhKDAsIDAsIDAsIDAuNCk7IH1cblxuLnBhZ2Utc2lkZWJhci5tZW51LWNvbXBhY3QgLnNpZGViYXItaGVhZGVyLXdyYXBwZXIgLnNlYXJjaGlucHV0OmZvY3VzIHtcbiAgd2lkdGg6IDIzOHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTBweCA0MHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDEwcHggNDBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIGJveC1zaGFkb3c6IDAgMTBweCA0MHB4IHJnYmEoMCwgMCwgMCwgMC40KTsgfVxuXG4ucGFnZS1zaWRlYmFyLm1lbnUtY29tcGFjdCAuc2lkZWJhci1oZWFkZXItd3JhcHBlciAuc2VhcmNoaW5wdXQ6Zm9jdXMgfiAuc2VhcmNoaGVscGVyIHtcbiAgd2lkdGg6IDIzOHB4OyB9XG5cbi5wYWdlLXNpZGViYXIubWVudS1jb21wYWN0IC5zaWRlYmFyLWhlYWRlci13cmFwcGVyIC5zZWFyY2hpY29uIHtcbiAgbGVmdDogMTVweDsgfVxuXG4ucGFnZS1zaWRlYmFyLm1lbnUtY29tcGFjdCAuc2lkZWJhci1tZW51IHtcbiAgd2lkdGg6IDQycHg7IH1cblxuLnBhZ2Utc2lkZWJhci5tZW51LWNvbXBhY3QgLnNpZGViYXItbWVudSA+IGxpLm9wZW4gPiAubWVudS10ZXh0IHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XG5cbi5wYWdlLXNpZGViYXIubWVudS1jb21wYWN0IC5zaWRlYmFyLW1lbnUgPiBsaS5vcGVuID4gLnN1Ym1lbnUge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cblxuLnBhZ2Utc2lkZWJhci5tZW51LWNvbXBhY3QgLnNpZGViYXItbWVudSA+IGxpOmhvdmVyID4gYSB7XG4gIGNvbG9yOiAjMjYyNjI2OyB9XG5cbi5wYWdlLXNpZGViYXIubWVudS1jb21wYWN0IC5zaWRlYmFyLW1lbnUgPiBsaTpob3ZlciA+IGEgPiAubWVudS10ZXh0IHtcbiAgZGlzcGxheTogYmxvY2s7IH1cblxuLnBhZ2Utc2lkZWJhci5tZW51LWNvbXBhY3QgLnNpZGViYXItbWVudSA+IGxpOmhvdmVyID4gLnN1Ym1lbnUge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50OyB9XG5cbi5wYWdlLXNpZGViYXIubWVudS1jb21wYWN0IC5zaWRlYmFyLW1lbnUgPiBsaSA+IGEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDEyMzsgfVxuXG4ucGFnZS1zaWRlYmFyLm1lbnUtY29tcGFjdCAuc2lkZWJhci1tZW51ID4gbGkgPiBhIC5tZW51LXRleHQge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDQycHg7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDE5NXB4O1xuICBoZWlnaHQ6IDM4cHg7XG4gIGxpbmUtaGVpZ2h0OiAzOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB6LWluZGV4OiAxMjE7XG4gIHBhZGRpbmctbGVmdDogMjVweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiA1cHggNXB4IDVweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4zKSwgNXB4IDVweCA1cHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMyksIDVweCAtNXB4IDVweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgLW1vei1ib3gtc2hhZG93OiA1cHggNXB4IDVweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4zKSwgNXB4IDVweCA1cHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMyksIDVweCAtNXB4IDVweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMyksIDVweCA1cHggNXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjMpLCA1cHggLTVweCA1cHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7IH1cblxuLnBhZ2Utc2lkZWJhci5tZW51LWNvbXBhY3QgLnNpZGViYXItbWVudSA+IGxpID4gYSAubWVudS1leHBhbmQge1xuICBkaXNwbGF5OiBub25lOyB9XG5cbi5wYWdlLXNpZGViYXIubWVudS1jb21wYWN0IC5zaWRlYmFyLW1lbnUgPiBsaSA+IGEubWVudS1kcm9wZG93biB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgLW1vei1ib3gtc2hhZG93OiBub25lO1xuICBib3gtc2hhZG93OiBub25lOyB9XG5cbi5wYWdlLXNpZGViYXIubWVudS1jb21wYWN0IC5zaWRlYmFyLW1lbnUgPiBsaSA+IGEubWVudS1kcm9wZG93biA+IC5tZW51LXRleHQge1xuICBib3JkZXI6IDA7XG4gIHRvcDogMDtcbiAgbGVmdDogNDJweDtcbiAgd2lkdGg6IDE5NXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YzZjNmMztcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7IH1cblxuLnBhZ2Utc2lkZWJhci5tZW51LWNvbXBhY3QgLnNpZGViYXItbWVudSA+IGxpID4gYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7IH1cblxuLnBhZ2Utc2lkZWJhci5tZW51LWNvbXBhY3QgLnNpZGViYXItbWVudSA+IGxpID4gLnN1Ym1lbnUge1xuICBiYWNrZ3JvdW5kOiAjZmJmYmZiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEyMDtcbiAgbGVmdDogNDJweDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTk1cHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgLW1vei1ib3gtc2hhZG93OiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICBwYWRkaW5nLXRvcDogMzhweDtcbiAgZGlzcGxheTogbm9uZTtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZjNmM2YzO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDVweCA1cHggNXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjMpLCA1cHggNXB4IDVweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4zKSwgNXB4IC01cHggNXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAtbW96LWJveC1zaGFkb3c6IDVweCA1cHggNXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjMpLCA1cHggNXB4IDVweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4zKSwgNXB4IC01cHggNXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBib3gtc2hhZG93OiA1cHggNXB4IDVweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4zKSwgNXB4IDVweCA1cHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMyksIDVweCAtNXB4IDVweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTsgfVxuXG4ucGFnZS1zaWRlYmFyLm1lbnUtY29tcGFjdCAuc2lkZWJhci1tZW51ID4gbGkgPiAuc3VibWVudSBsaSA+IGEge1xuICBtYXJnaW4tbGVmdDogMDtcbiAgcGFkZGluZy1sZWZ0OiAyNHB4OyB9XG5cbi5wYWdlLXNpZGViYXIubWVudS1jb21wYWN0IC5zaWRlYmFyLW1lbnUgPiBsaSA+IC5zdWJtZW51IGxpLm9wZW4gPiAuc3VibWVudSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgLW1vei1ib3gtc2hhZG93OiBub25lO1xuICBib3gtc2hhZG93OiBub25lOyB9XG5cbi5wYWdlLXNpZGViYXIubWVudS1jb21wYWN0IC5zaWRlYmFyLW1lbnUgPiBsaSA+IC5zdWJtZW51IGxpIC5zdWJtZW51IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cblxuLnBhZ2Utc2lkZWJhci5tZW51LWNvbXBhY3QgLnNpZGViYXItbWVudSA+IGxpID4gLnN1Ym1lbnUgbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyB9XG5cbi5wYWdlLXNpZGViYXIubWVudS1jb21wYWN0IC5zaWRlYmFyLW1lbnUgPiBsaSA+IC5zdWJtZW51IGxpOmhvdmVyOmJlZm9yZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsZWZ0OiAwOyB9XG5cbi5wYWdlLXNpZGViYXIubWVudS1jb21wYWN0IC5zaWRlYmFyLW1lbnUgPiBsaSA+IC5zdWJtZW51IGxpLmFjdGl2ZTpub3QoLm9wZW4pOmJlZm9yZSB7XG4gIGxlZnQ6IDA7IH1cblxuLnBhZ2Utc2lkZWJhci5tZW51LWNvbXBhY3QgLnNpZGViYXItbWVudSA+IGxpID4gLnN1Ym1lbnU6YmVmb3JlIHtcbiAgZGlzcGxheTogbm9uZTsgfVxuXG4ucGFnZS1zaWRlYmFyLm1lbnUtY29tcGFjdCAuc2lkZWJhci1tZW51ID4gbGkgPiAuc3VibWVudSA+IGxpID4gYSB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAtbW96LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50OyB9XG5cbi5wYWdlLXNpZGViYXIubWVudS1jb21wYWN0IC5zaWRlYmFyLW1lbnUgPiBsaSA+IC5zdWJtZW51ID4gbGkgPiBhOmJlZm9yZSB7XG4gIGRpc3BsYXk6IG5vbmU7IH1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4ODBweCkge1xuICAucGFnZS1zaWRlYmFyOmJlZm9yZSB7XG4gICAgZGlzcGxheTogbm9uZTsgfVxuICAucGFnZS1zaWRlYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGZsb2F0OiBub25lOyB9XG4gIC5icmVhZGNydW1icy1maXhlZCB7XG4gICAgbGVmdDogMCAhaW1wb3J0YW50OyB9XG4gIC5wYWdlLWhlYWRlci1maXhlZCB7XG4gICAgbGVmdDogMCAhaW1wb3J0YW50OyB9IH1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDg4MHB4KSB7XG4gIC5wYWdlLXNpZGViYXIuaGlkZSB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDsgfVxuICAucGFnZS1zaWRlYmFyLmhpZGU6YmVmb3JlIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50OyB9XG4gIC5wYWdlLXNpZGViYXIuaGlkZSB+IC5wYWdlLWNvbnRlbnQge1xuICAgIG1hcmdpbi1sZWZ0OiAyMjRweCAhaW1wb3J0YW50OyB9XG4gIC5wYWdlLXNpZGViYXIuaGlkZSB+IC5wYWdlLWNvbnRlbnQgLmJyZWFkY3J1bWJzLWZpeGVkIHtcbiAgICBsZWZ0OiAyMjRweCAhaW1wb3J0YW50OyB9XG4gIC5wYWdlLXNpZGViYXIuaGlkZSB+IC5wYWdlLWNvbnRlbnQgLnBhZ2UtaGVhZGVyLWZpeGVkIHtcbiAgICBsZWZ0OiAyMjRweCAhaW1wb3J0YW50OyB9XG4gIC5wYWdlLXNpZGViYXIubWVudS1jb21wYWN0IH4gLnBhZ2UtY29udGVudCB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7IH1cbiAgLnBhZ2Utc2lkZWJhci5tZW51LWNvbXBhY3QgfiAucGFnZS1jb250ZW50IC5icmVhZGNydW1icy1maXhlZCB7XG4gICAgbGVmdDogMDsgfVxuICAucGFnZS1zaWRlYmFyLm1lbnUtY29tcGFjdCB+IC5wYWdlLWNvbnRlbnQgLnBhZ2UtaGVhZGVyLWZpeGVkIHtcbiAgICBsZWZ0OiAwOyB9XG4gIC5wYWdlLXNpZGViYXIubWVudS1jb21wYWN0LmhpZGUgfiAucGFnZS1jb250ZW50IHtcbiAgICBtYXJnaW4tbGVmdDogNDZweCAhaW1wb3J0YW50OyB9XG4gIC5wYWdlLXNpZGViYXIubWVudS1jb21wYWN0LmhpZGUgfiAucGFnZS1jb250ZW50IC5icmVhZGNydW1icy1maXhlZCB7XG4gICAgbGVmdDogNDZweCAhaW1wb3J0YW50OyB9XG4gIC5wYWdlLXNpZGViYXIubWVudS1jb21wYWN0LmhpZGUgfiAucGFnZS1jb250ZW50IC5wYWdlLWhlYWRlci1maXhlZCB7XG4gICAgbGVmdDogNDZweCAhaW1wb3J0YW50OyB9IH1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5wYWdlLXNpZGViYXIuaGlkZSB+IC5wYWdlLWNvbnRlbnQgLnBhZ2UtaGVhZGVyIC5oZWFkZXItdGl0bGUge1xuICAgIGRpc3BsYXk6IG5vbmU7IH1cbiAgLnBhZ2Utc2lkZWJhci5oaWRlIH4gLnBhZ2UtY29udGVudCAucGFnZS1oZWFkZXIgLmhlYWRlci1idXR0b25zIC5yZWZyZXNoLFxuICAucGFnZS1zaWRlYmFyLmhpZGUgfiAucGFnZS1jb250ZW50IC5wYWdlLWhlYWRlciAuaGVhZGVyLWJ1dHRvbnMgLmZ1bGxzY3JlZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7IH1cbiAgLnBhZ2Utc2lkZWJhci5tZW51LWNvbXBhY3QuaGlkZSB+IC5wYWdlLWNvbnRlbnQgLnBhZ2UtaGVhZGVyIC5oZWFkZXItYnV0dG9ucyAucmVmcmVzaCxcbiAgLnBhZ2Utc2lkZWJhci5tZW51LWNvbXBhY3QuaGlkZSB+IC5wYWdlLWNvbnRlbnQgLnBhZ2UtaGVhZGVyIC5oZWFkZXItYnV0dG9ucyAuZnVsbHNjcmVlbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9IH1cblxuLyojZW5kcmVnaW9uIFNpZGViYXIqL1xuIiwiLyojcmVnaW9uIFNpZGViYXIqL1xyXG4ucGFnZS1zaWRlYmFyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIC8vIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiAyMjRweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbGVmdDowO1xyXG4gIH1cclxuICAucGFnZS1zaWRlYmFyLnNpZGViYXItZml4ZWQge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgLy8gdG9wOiA0NXB4O1xyXG4gICAgZmxvYXQ6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIH1cclxuICAucGFnZS1zaWRlYmFyLnNpZGViYXItZml4ZWQ6YmVmb3JlIHtcclxuICAgIC8vIGhlaWdodDogNTAwMHB4O1xyXG4gICAgdG9wOiA0NXB4O1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0NXB4KTtcclxuICAgIG1pbi1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgfVxyXG4gIC5wYWdlLXNpZGViYXIuaGlkZSB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5wYWdlLXNpZGViYXIuaGlkZTpiZWZvcmUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLnBhZ2Utc2lkZWJhci5oaWRlIH4gLnBhZ2UtY29udGVudCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAucGFnZS1zaWRlYmFyLmhpZGUgfiAucGFnZS1jb250ZW50IC5icmVhZGNydW1icy1maXhlZCB7XHJcbiAgICBsZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5wYWdlLXNpZGViYXIuaGlkZSB+IC5wYWdlLWNvbnRlbnQgLnBhZ2UtaGVhZGVyLWZpeGVkIHtcclxuICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnBhZ2Utc2lkZWJhcjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDIxOXB4O1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgfVxyXG4gIC5wYWdlLXNpZGViYXIgLnNpZGViYXItaGVhZGVyLXdyYXBwZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIC5wYWdlLXNpZGViYXIgLnNpZGViYXItaGVhZGVyLXdyYXBwZXIgLnNlYXJjaGlucHV0IHtcclxuICAgIGhlaWdodDogNDFweDtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcclxuICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAucGFnZS1zaWRlYmFyIC5zaWRlYmFyLWhlYWRlci13cmFwcGVyIC5zZWFyY2hpbnB1dDpmb2N1cyB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuICAucGFnZS1zaWRlYmFyIC5zaWRlYmFyLWhlYWRlci13cmFwcGVyIC5zZWFyY2hpbnB1dDpmb2N1cyB+IC5zZWFyY2hoZWxwZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB6LWluZGV4OiAxMjQ7XHJcbiAgfVxyXG4gIC5wYWdlLXNpZGViYXIgLnNpZGViYXItaGVhZGVyLXdyYXBwZXIgLnNlYXJjaGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjZDBkMGQwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTm90b3NhbnMnLCAnT3BlbiBTYW5zJywgJ1NlZ29lIFVJJyAvKnJ0bDpcIkRyb2lkIEFyYWJpYyBLdWZpXCIsIFwiV1lla2FuXCIqLztcclxuICB9XHJcbiAgLnBhZ2Utc2lkZWJhciAuc2lkZWJhci1oZWFkZXItd3JhcHBlciAuc2VhcmNoaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgLyogRmlyZWZveCAxOSsgKi9cclxuICAgIGNvbG9yOiAjZDBkMGQwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTm90b3NhbnMnLCAnT3BlbiBTYW5zJywgJ1NlZ29lIFVJJyAvKnJ0bDpcIkRyb2lkIEFyYWJpYyBLdWZpXCIsIFwiV1lla2FuXCIqLztcclxuICB9XHJcbiAgLnBhZ2Utc2lkZWJhciAuc2lkZWJhci1oZWFkZXItd3JhcHBlciAuc2VhcmNoaW5wdXQ6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICAvKiBGaXJlZm94IDE5KyAqL1xyXG4gICAgY29sb3I6ICNkMGQwZDA7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdOb3Rvc2FucycsICdPcGVuIFNhbnMnLCAnU2Vnb2UgVUknIC8qcnRsOlwiRHJvaWQgQXJhYmljIEt1ZmlcIiwgXCJXWWVrYW5cIiovO1xyXG4gIH1cclxuICAucGFnZS1zaWRlYmFyIC5zaWRlYmFyLWhlYWRlci13cmFwcGVyIC5zZWFyY2hpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICNkMGQwZDA7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdOb3Rvc2FucycsICdPcGVuIFNhbnMnLCAnU2Vnb2UgVUknIC8qcnRsOlwiRHJvaWQgQXJhYmljIEt1ZmlcIiwgXCJXWWVrYW5cIiovO1xyXG4gIH1cclxuICAucGFnZS1zaWRlYmFyIC5zaWRlYmFyLWhlYWRlci13cmFwcGVyIC5zZWFyY2hpY29uIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGhlaWdodDogMTJweDtcclxuICAgIGxlZnQ6IDIwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE0cHg7XHJcbiAgICB3aWR0aDogMTJweDtcclxuICAgIGNvbG9yOiAjMmRjM2U4O1xyXG4gICAgei1pbmRleDogMTI0O1xyXG4gIH1cclxuICAucGFnZS1zaWRlYmFyIC5zaWRlYmFyLWhlYWRlci13cmFwcGVyIC5zZWFyY2hoZWxwZXIge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDEwcHggNDBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMTBweCA0MHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCA0MHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBjb2xvcjogIzk5OTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogNDBweDtcclxuICAgIHotaW5kZXg6IDQ7XHJcbiAgfVxyXG4gIC5wYWdlLXNpZGViYXIgLnNpZGViYXItbWVudSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgfVxyXG4gIC5wYWdlLXNpZGViYXIgLnNpZGViYXItbWVudSBhIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwIDE2cHggMCA3cHg7XHJcbiAgICAtd2Via2l0LXRleHQtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICM3MzczNzM7XHJcbiAgICB6LWluZGV4OiAxMjM7XHJcbiAgfVxyXG4gIC5wYWdlLXNpZGViYXIgLnNpZGViYXItbWVudSBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMjYyNjI2O1xyXG4gIH1cclxuICAucGFnZS1zaWRlYmFyIC5zaWRlYmFyLW1lbnUgYTpob3ZlcjpiZWZvcmUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIC5wYWdlLXNpZGViYXIgLnNpZGViYXItbWVudSBhIC5tZW51LWljb24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIG1pbi13aWR0aDogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBtYXJnaW4tdG9wOiAtM3B4O1xyXG4gIH1cclxuICAucGFnZS1zaWRlYmFyIC5zaWRlYmFyLW1lbnUgYSAubWVudS1leHBhbmQge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIHJpZ2h0OiAxMnB4O1xyXG4gICAgdG9wOiAxNXB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIC13ZWJraXQtdGV4dC1zaGFkb3c6IG5vbmU7XHJcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICAgIGNvbG9yOiAjNjY2NjY2O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlLWluLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlLWluLW91dDtcclxuICAgIGZvbnQtZmFtaWx5OiAnRm9udEF3ZXNvbWUnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICB9XHJcbiAgLnBhZ2Utc2lkZWJhciAuc2lkZWJhci1tZW51IGEgLm1lbnUtZXhwYW5kOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlxcZjEwNVwiIC8qcnRsOlwiXFxmMTA0XCIqLztcclxuICB9XHJcbiAgLnBhZ2Utc2lkZWJhciAuc2lkZWJhci1tZW51IGxpIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgLnBhZ2Utc2lkZWJhciAuc2lkZWJhci1tZW51IGxpOmJlZm9yZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IC00cHg7XHJcbiAgICB3aWR0aDogNHB4O1xyXG4gICAgbWF4LXdpZHRoOiA0cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiNmU1MjtcclxuICB9XHJcbiAgLnBhZ2Utc2lkZWJhciAuc2lkZWJhci1tZW51IGxpLm9wZW4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcbiAgLnBhZ2Utc2lkZWJhciAuc2lkZWJhci1tZW51IGxpLm9wZW4gPiBhIHtcclxuICAgIGNvbG9yOiAjMjYyNjI2O1xyXG4gIH1cclxuICAucGFnZS1zaWRlYmFyIC5zaWRlYmFyLW1lbnUgbGkub3BlbiA+IGEgLm1lbnUtZXhwYW5kIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gIH1cclxuICAucGFnZS1zaWRlYmFyIC5zaWRlYmFyLW1lbnUgbGkub3BlbiA+IC5zdWJtZW51IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5wYWdlLXNpZGViYXIgLnNpZGViYXItbWVudSBsaS5hY3RpdmU6bm90KC5vcGVuKTpiZWZvcmUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIC5wYWdlLXNpZGViYXIgLnNpZGViYXItbWVudSBsaS5hY3RpdmUgPiBhIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGNvbG9yOiAjMjYyNjI2O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICB9XHJcbiAgLnBhZ2Utc2lkZWJhciAuc2lkZWJhci1tZW51IGxpOm5vdCgub3Blbik6aG92ZXI6YmVmb3JlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJkYzNlODtcclxuICB9XHJcbiAgLnBhZ2Utc2lkZWJhciAuc2lkZWJhci1tZW51ID4gbGkgPiBhIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjNmM2YzO1xyXG4gIH1cclxuICAucGFnZS1zaWRlYmFyIC5zaWRlYmFyLW1lbnUgPiBsaSA+IGE6aG92ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZjNmM2YzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZmJmYjtcclxuICB9XHJcbiAgLnBhZ2Utc2lkZWJhciAuc2lkZWJhci1tZW51ID4gbGk6bGFzdC1jaGlsZCA+IGEge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmM2YzZjM7XHJcbiAgfVxyXG4gIC5wYWdlLXNpZGViYXIgLnNpZGViYXItbWVudSA+IGxpID4gLnN1Ym1lbnUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZmJmYjtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCA0cHggNHB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjE1KSwgaW5zZXQgMCAtNHB4IDRweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDAgNHB4IDRweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSksIGluc2V0IDAgLTRweCA0cHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCA0cHggNHB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjE1KSwgaW5zZXQgMCAtNHB4IDRweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgfVxyXG4gIC5wYWdlLXNpZGViYXIgLnNpZGViYXItbWVudSA+IGxpID4gLnN1Ym1lbnU6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBsZWZ0OiAyM3B4O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAxOXB4O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZTJlMmUyO1xyXG4gIH1cclxuICAucGFnZS1zaWRlYmFyIC5zaWRlYmFyLW1lbnUgPiBsaSA+IC5zdWJtZW51ID4gbGkgPiBhOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDVweDtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgbGVmdDogMjFweDtcclxuICAgIHRvcDogMTdweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTJlMmUyO1xyXG4gICAgei1pbmRleDogMjtcclxuICB9XHJcbiAgLnBhZ2Utc2lkZWJhciAuc2lkZWJhci1tZW51ID4gbGkgPiAuc3VibWVudSA+IGxpLmFjdGl2ZSA+IGE6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMmUyZTI7XHJcbiAgfVxyXG4gIC5wYWdlLXNpZGViYXIgLnNpZGViYXItbWVudSA+IGxpID4gLnN1Ym1lbnUgPiBsaS5hY3RpdmU6Zmlyc3QtY2hpbGQgPiBhIHtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCA0cHggNHB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMCA0cHggNHB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgNHB4IDRweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgfVxyXG4gIC5wYWdlLXNpZGViYXIgLnNpZGViYXItbWVudSA+IGxpID4gLnN1Ym1lbnUgPiBsaS5hY3RpdmU6bGFzdC1jaGlsZCBhIHtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAtNHB4IDRweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDAgLTRweCA0cHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAtNHB4IDRweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgfVxyXG4gIC5wYWdlLXNpZGViYXIgLnNpZGViYXItbWVudSA+IGxpLm9wZW4gPiBhIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG4gIC5wYWdlLXNpZGViYXIgLnNpZGViYXItbWVudSAuc3VibWVudSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJmYmZiO1xyXG4gICAgYm9yZGVyLXRvcDogMDtcclxuICAgIHotaW5kZXg6IDEyMztcclxuICB9XHJcbiAgLnBhZ2Utc2lkZWJhciAuc2lkZWJhci1tZW51IC5zdWJtZW51IGxpIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICAucGFnZS1zaWRlYmFyIC5zaWRlYmFyLW1lbnUgLnN1Ym1lbnUgbGkub3BlbjpiZWZvcmUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLnBhZ2Utc2lkZWJhciAuc2lkZWJhci1tZW51IC5zdWJtZW51IGxpLmFjdGl2ZSA+IGEge1xyXG4gICAgY29sb3I6ICMyNjI2MjY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gIH1cclxuICAucGFnZS1zaWRlYmFyIC5zaWRlYmFyLW1lbnUgLnN1Ym1lbnUgbGkuYWN0aXZlID4gLnN1Ym1lbnUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIC5wYWdlLXNpZGViYXIgLnNpZGViYXItbWVudSAuc3VibWVudSA+IGxpID4gYSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgfVxyXG4gIC5wYWdlLXNpZGViYXIgLnNpZGViYXItbWVudSAuc3VibWVudSA+IGxpLm9wZW4gPiBhIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmZiZmI7XHJcbiAgfVxyXG4gIC5wYWdlLXNpZGViYXIgLnNpZGViYXItbWVudSAuc3VibWVudSA+IGxpIC5zdWJtZW51IHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlZWVlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWVlZWU7XHJcbiAgfVxyXG4gIC5wYWdlLXNpZGViYXIgLnNpZGViYXItbWVudSAuc3VibWVudSA+IGxpIC5zdWJtZW51ID4gbGkgPiBhIHtcclxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcclxuICB9XHJcbiAgLnBhZ2Utc2lkZWJhciAuc2lkZWJhci1tZW51IC5zdWJtZW51ID4gbGkgLnN1Ym1lbnUgPiBsaSAuc3VibWVudSA+IGxpID4gYSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDcwcHg7XHJcbiAgfVxyXG4gIC5wYWdlLXNpZGViYXIubWVudS1jb21wYWN0IHtcclxuICAgIHdpZHRoOiA0MnB4O1xyXG4gIH1cclxuICAucGFnZS1zaWRlYmFyLm1lbnUtY29tcGFjdCB+IC5wYWdlLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQzcHg7XHJcbiAgfVxyXG4gIC5wYWdlLXNpZGViYXIubWVudS1jb21wYWN0IH4gLnBhZ2UtY29udGVudCAuYnJlYWRjcnVtYnMtZml4ZWQge1xyXG4gICAgbGVmdDogNDdweDtcclxuICB9XHJcbiAgLnBhZ2Utc2lkZWJhci5tZW51LWNvbXBhY3QgfiAucGFnZS1jb250ZW50IC5wYWdlLWhlYWRlci1maXhlZCB7XHJcbiAgICBsZWZ0OiA0N3B4O1xyXG4gIH1cclxuICAucGFnZS1zaWRlYmFyLm1lbnUtY29tcGFjdDpiZWZvcmUge1xyXG4gICAgd2lkdGg6IDQycHg7XHJcbiAgfVxyXG4gIC5wYWdlLXNpZGViYXIubWVudS1jb21wYWN0IC5zaWRlYmFyLWhlYWRlci13cmFwcGVyIHtcclxuICAgIHdpZHRoOiA0MnB4O1xyXG4gIH1cclxuICAucGFnZS1zaWRlYmFyLm1lbnUtY29tcGFjdCAuc2lkZWJhci1oZWFkZXItd3JhcHBlcjpob3ZlciB7XHJcbiAgICB3aWR0aDogMjM4cHg7XHJcbiAgfVxyXG4gIC5wYWdlLXNpZGViYXIubWVudS1jb21wYWN0IC5zaWRlYmFyLWhlYWRlci13cmFwcGVyOmhvdmVyIC5zZWFyY2hpbnB1dCB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTBweCA0MHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMCAxMHB4IDQwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDQwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gIH1cclxuICAucGFnZS1zaWRlYmFyLm1lbnUtY29tcGFjdCAuc2lkZWJhci1oZWFkZXItd3JhcHBlciAuc2VhcmNoaW5wdXQ6Zm9jdXMge1xyXG4gICAgd2lkdGg6IDIzOHB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDEwcHggNDBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMTBweCA0MHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCA0MHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICB9XHJcbiAgLnBhZ2Utc2lkZWJhci5tZW51LWNvbXBhY3QgLnNpZGViYXItaGVhZGVyLXdyYXBwZXIgLnNlYXJjaGlucHV0OmZvY3VzIH4gLnNlYXJjaGhlbHBlciB7XHJcbiAgICB3aWR0aDogMjM4cHg7XHJcbiAgfVxyXG4gIC5wYWdlLXNpZGViYXIubWVudS1jb21wYWN0IC5zaWRlYmFyLWhlYWRlci13cmFwcGVyIC5zZWFyY2hpY29uIHtcclxuICAgIGxlZnQ6IDE1cHg7XHJcbiAgfVxyXG4gIC5wYWdlLXNpZGViYXIubWVudS1jb21wYWN0IC5zaWRlYmFyLW1lbnUge1xyXG4gICAgd2lkdGg6IDQycHg7XHJcbiAgfVxyXG4gIC5wYWdlLXNpZGViYXIubWVudS1jb21wYWN0IC5zaWRlYmFyLW1lbnUgPiBsaS5vcGVuID4gLm1lbnUtdGV4dCB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5wYWdlLXNpZGViYXIubWVudS1jb21wYWN0IC5zaWRlYmFyLW1lbnUgPiBsaS5vcGVuID4gLnN1Ym1lbnUge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAucGFnZS1zaWRlYmFyLm1lbnUtY29tcGFjdCAuc2lkZWJhci1tZW51ID4gbGk6aG92ZXIgPiBhIHtcclxuICAgIGNvbG9yOiAjMjYyNjI2O1xyXG4gIH1cclxuICAucGFnZS1zaWRlYmFyLm1lbnUtY29tcGFjdCAuc2lkZWJhci1tZW51ID4gbGk6aG92ZXIgPiBhID4gLm1lbnUtdGV4dCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLnBhZ2Utc2lkZWJhci5tZW51LWNvbXBhY3QgLnNpZGViYXItbWVudSA+IGxpOmhvdmVyID4gLnN1Ym1lbnUge1xyXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnBhZ2Utc2lkZWJhci5tZW51LWNvbXBhY3QgLnNpZGViYXItbWVudSA+IGxpID4gYSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxMjM7XHJcbiAgfVxyXG4gIC5wYWdlLXNpZGViYXIubWVudS1jb21wYWN0IC5zaWRlYmFyLW1lbnUgPiBsaSA+IGEgLm1lbnUtdGV4dCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNDJweDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxOTVweDtcclxuICAgIGhlaWdodDogMzhweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIHotaW5kZXg6IDEyMTtcclxuICAgIHBhZGRpbmctbGVmdDogMjVweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogNXB4IDVweCA1cHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMyksIDVweCA1cHggNXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjMpLCA1cHggLTVweCA1cHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDVweCA1cHggNXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjMpLCA1cHggNXB4IDVweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4zKSwgNXB4IC01cHggNXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMyksIDVweCA1cHggNXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjMpLCA1cHggLTVweCA1cHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgfVxyXG4gIC5wYWdlLXNpZGViYXIubWVudS1jb21wYWN0IC5zaWRlYmFyLW1lbnUgPiBsaSA+IGEgLm1lbnUtZXhwYW5kIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5wYWdlLXNpZGViYXIubWVudS1jb21wYWN0IC5zaWRlYmFyLW1lbnUgPiBsaSA+IGEubWVudS1kcm9wZG93biB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxuICAucGFnZS1zaWRlYmFyLm1lbnUtY29tcGFjdCAuc2lkZWJhci1tZW51ID4gbGkgPiBhLm1lbnUtZHJvcGRvd24gPiAubWVudS10ZXh0IHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDQycHg7XHJcbiAgICB3aWR0aDogMTk1cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YzZjNmMztcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG4gIC5wYWdlLXNpZGViYXIubWVudS1jb21wYWN0IC5zaWRlYmFyLW1lbnUgPiBsaSA+IGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcbiAgLnBhZ2Utc2lkZWJhci5tZW51LWNvbXBhY3QgLnNpZGViYXItbWVudSA+IGxpID4gLnN1Ym1lbnUge1xyXG4gICAgYmFja2dyb3VuZDogI2ZiZmJmYjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDEyMDtcclxuICAgIGxlZnQ6IDQycHg7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTk1cHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgcGFkZGluZy10b3A6IDM4cHg7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZjNmM2YzO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiA1cHggNXB4IDVweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4zKSwgNXB4IDVweCA1cHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMyksIDVweCAtNXB4IDVweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogNXB4IDVweCA1cHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMyksIDVweCA1cHggNXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjMpLCA1cHggLTVweCA1cHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDVweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4zKSwgNXB4IDVweCA1cHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMyksIDVweCAtNXB4IDVweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICB9XHJcbiAgLnBhZ2Utc2lkZWJhci5tZW51LWNvbXBhY3QgLnNpZGViYXItbWVudSA+IGxpID4gLnN1Ym1lbnUgbGkgPiBhIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xyXG4gIH1cclxuICAucGFnZS1zaWRlYmFyLm1lbnUtY29tcGFjdCAuc2lkZWJhci1tZW51ID4gbGkgPiAuc3VibWVudSBsaS5vcGVuID4gLnN1Ym1lbnUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcbiAgLnBhZ2Utc2lkZWJhci5tZW51LWNvbXBhY3QgLnNpZGViYXItbWVudSA+IGxpID4gLnN1Ym1lbnUgbGkgLnN1Ym1lbnUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICAucGFnZS1zaWRlYmFyLm1lbnUtY29tcGFjdCAuc2lkZWJhci1tZW51ID4gbGkgPiAuc3VibWVudSBsaTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuICAucGFnZS1zaWRlYmFyLm1lbnUtY29tcGFjdCAuc2lkZWJhci1tZW51ID4gbGkgPiAuc3VibWVudSBsaTpob3ZlcjpiZWZvcmUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBsZWZ0OiAwO1xyXG4gIH1cclxuICAucGFnZS1zaWRlYmFyLm1lbnUtY29tcGFjdCAuc2lkZWJhci1tZW51ID4gbGkgPiAuc3VibWVudSBsaS5hY3RpdmU6bm90KC5vcGVuKTpiZWZvcmUge1xyXG4gICAgbGVmdDogMDtcclxuICB9XHJcbiAgLnBhZ2Utc2lkZWJhci5tZW51LWNvbXBhY3QgLnNpZGViYXItbWVudSA+IGxpID4gLnN1Ym1lbnU6YmVmb3JlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5wYWdlLXNpZGViYXIubWVudS1jb21wYWN0IC5zaWRlYmFyLW1lbnUgPiBsaSA+IC5zdWJtZW51ID4gbGkgPiBhIHtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5wYWdlLXNpZGViYXIubWVudS1jb21wYWN0IC5zaWRlYmFyLW1lbnUgPiBsaSA+IC5zdWJtZW51ID4gbGkgPiBhOmJlZm9yZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg4MHB4KSB7XHJcbiAgICAucGFnZS1zaWRlYmFyOmJlZm9yZSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAucGFnZS1zaWRlYmFyIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuYnJlYWRjcnVtYnMtZml4ZWQge1xyXG4gICAgICBsZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAucGFnZS1oZWFkZXItZml4ZWQge1xyXG4gICAgICBsZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA4ODBweCkge1xyXG4gICAgLnBhZ2Utc2lkZWJhci5oaWRlIHtcclxuICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5wYWdlLXNpZGViYXIuaGlkZTpiZWZvcmUge1xyXG4gICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnBhZ2Utc2lkZWJhci5oaWRlIH4gLnBhZ2UtY29udGVudCB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMjRweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnBhZ2Utc2lkZWJhci5oaWRlIH4gLnBhZ2UtY29udGVudCAuYnJlYWRjcnVtYnMtZml4ZWQge1xyXG4gICAgICBsZWZ0OiAyMjRweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnBhZ2Utc2lkZWJhci5oaWRlIH4gLnBhZ2UtY29udGVudCAucGFnZS1oZWFkZXItZml4ZWQge1xyXG4gICAgICBsZWZ0OiAyMjRweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnBhZ2Utc2lkZWJhci5tZW51LWNvbXBhY3QgfiAucGFnZS1jb250ZW50IHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICB9XHJcbiAgICAucGFnZS1zaWRlYmFyLm1lbnUtY29tcGFjdCB+IC5wYWdlLWNvbnRlbnQgLmJyZWFkY3J1bWJzLWZpeGVkIHtcclxuICAgICAgbGVmdDogMDtcclxuICAgIH1cclxuICAgIC5wYWdlLXNpZGViYXIubWVudS1jb21wYWN0IH4gLnBhZ2UtY29udGVudCAucGFnZS1oZWFkZXItZml4ZWQge1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgfVxyXG4gICAgLnBhZ2Utc2lkZWJhci5tZW51LWNvbXBhY3QuaGlkZSB+IC5wYWdlLWNvbnRlbnQge1xyXG4gICAgICBtYXJnaW4tbGVmdDogNDZweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnBhZ2Utc2lkZWJhci5tZW51LWNvbXBhY3QuaGlkZSB+IC5wYWdlLWNvbnRlbnQgLmJyZWFkY3J1bWJzLWZpeGVkIHtcclxuICAgICAgbGVmdDogNDZweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnBhZ2Utc2lkZWJhci5tZW51LWNvbXBhY3QuaGlkZSB+IC5wYWdlLWNvbnRlbnQgLnBhZ2UtaGVhZGVyLWZpeGVkIHtcclxuICAgICAgbGVmdDogNDZweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgIC5wYWdlLXNpZGViYXIuaGlkZSB+IC5wYWdlLWNvbnRlbnQgLnBhZ2UtaGVhZGVyIC5oZWFkZXItdGl0bGUge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLnBhZ2Utc2lkZWJhci5oaWRlIH4gLnBhZ2UtY29udGVudCAucGFnZS1oZWFkZXIgLmhlYWRlci1idXR0b25zIC5yZWZyZXNoLFxyXG4gICAgLnBhZ2Utc2lkZWJhci5oaWRlIH4gLnBhZ2UtY29udGVudCAucGFnZS1oZWFkZXIgLmhlYWRlci1idXR0b25zIC5mdWxsc2NyZWVuIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5wYWdlLXNpZGViYXIubWVudS1jb21wYWN0LmhpZGUgfiAucGFnZS1jb250ZW50IC5wYWdlLWhlYWRlciAuaGVhZGVyLWJ1dHRvbnMgLnJlZnJlc2gsXHJcbiAgICAucGFnZS1zaWRlYmFyLm1lbnUtY29tcGFjdC5oaWRlIH4gLnBhZ2UtY29udGVudCAucGFnZS1oZWFkZXIgLmhlYWRlci1idXR0b25zIC5mdWxsc2NyZWVuIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG4gIH1cclxuICAvKiNlbmRyZWdpb24gU2lkZWJhciovIl19 */"

/***/ }),

/***/ "./src/app/demo-full/layout/sidebar/sidebar.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/demo-full/layout/sidebar/sidebar.component.ts ***!
  \***************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared.service */ "./src/app/demo-full/shared.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(viewportScroller, appSharedService, router, route) {
        this.viewportScroller = viewportScroller;
        this.appSharedService = appSharedService;
        this.router = router;
        this.route = route;
        this.currentFragment = '';
        this.activeFragment = this.route.fragment.pipe();
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.fragment.subscribe(function (fragment) {
            if (fragment && document.getElementById(fragment) != null) {
                setTimeout(function () {
                    _this.currentFragment = fragment;
                }, 0);
            }
        });
    };
    SidebarComponent.prototype.onClick = function (elementId) {
        // this.viewportScroller.setOffset([0, 48]);
        // this.viewportScroller.scrollToAnchor(elementId);
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/demo-full/layout/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/demo-full/layout/sidebar/sidebar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["ViewportScroller"],
            _shared_service__WEBPACK_IMPORTED_MODULE_3__["AppSharedService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/demo-full/shared.service.ts":
/*!*********************************************!*\
  !*** ./src/app/demo-full/shared.service.ts ***!
  \*********************************************/
/*! exports provided: AppSharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSharedService", function() { return AppSharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var AppSharedService = /** @class */ (function () {
    function AppSharedService() {
        this.sideBarVisible = true;
        this.sideBarEvent = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.sideBarEventEmitted$ = this.sideBarEvent.asObservable();
    }
    AppSharedService.prototype.sideMenuItemEvents = function ($event) {
        this.sideBarEvent.next(this.sideBarVisible);
    };
    AppSharedService.prototype.toggleMenu = function () {
        this.sideBarVisible = !this.sideBarVisible;
    };
    AppSharedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppSharedService);
    return AppSharedService;
}());



/***/ })

}]);
//# sourceMappingURL=demo-full-demo-full-module.js.map