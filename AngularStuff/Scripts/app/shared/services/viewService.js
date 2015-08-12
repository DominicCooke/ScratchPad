viewService = function (templateService) {
    return {
        gotoView: function ($scope, view, target, callback) {
            if (!target || target.length == 0)
                target = 'div.timelineController';
            templateService.addTemplate(view, target, $scope, callback);
        }
    };
}
