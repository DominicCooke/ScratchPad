angular.module('gettext').run(['gettextCatalog', function (gettextCatalog) {
/* jshint -W100 */
    gettextCatalog.setStrings('de', {"We want to test globalizaiton and localization.":"Wir wollen globalizaiton und Lokalisierung zu testen.","Welcome ladies and gentlemen!":"Willkommen meine Damen und Herren!"});
/* jshint +W100 */
}]);