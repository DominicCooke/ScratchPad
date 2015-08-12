var app = angular.module("my14.5App", []);

app.controller("TestCtrl", function ($scope) {
    $scope.loadStaff = function () {
        $scope.staffList = [
            {
                firstname: 'Ann',
                lastName: 'Miller'
            },
            {
                firstname: 'Bert',
                lastName: 'Buster'
            },
            {
                firstname: 'Kurt',
                lastName: 'Denham'
            },
            {
                firstname: 'Sue',
                lastName: 'Kazakov'
            },
            {
                firstname: 'Bell',
                lastName: 'Labs'
            },
            ];
    }
});
