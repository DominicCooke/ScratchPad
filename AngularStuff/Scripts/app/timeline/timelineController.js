timelineController = function ($scope, viewService) {
    var init = function () {
        viewService.gotoView($scope, views.container);
    };
    alert("hewfhwhef");
    init();
};
timelineController.$inject = ['$scope', 'viewService'];
