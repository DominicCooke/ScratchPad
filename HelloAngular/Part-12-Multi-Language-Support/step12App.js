var app = angular.module("my12App", ["gettext"]);

app.controller("TestCtrl", function (gettextCatalog) {
    gettextCatalog.currentLanguage = 'de';
    gettextCatalog.debug = true;
});
