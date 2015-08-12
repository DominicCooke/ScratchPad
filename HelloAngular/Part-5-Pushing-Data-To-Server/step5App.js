var app = angular.module("my5App", []);



app.controller("TaskListCtrl", function ($scope, $http) {
    loadData();

    $scope.refresh = function () {
        loadData();
    };

    function loadData() {
        $http.get("http://localhost:64322/api/api/tasks").success(function (data) {
            $scope.tasks = data;
        }).error(function () {
            alert("ahhhhhhhhhh 1");
        });
    };
});


app.controller("NewTaskCtrl", function ($scope, $http) {
    $scope.taskName = null;
    $scope.createTask = function () {
        var data = { Name: $scope.taskName };
        $http.post("http://localhost:64322/api/api/tasks", '"' + data +'"', []).success(function (data, status, headers) {
            alert("task added");
            $http.get(headers("location")).success(function (data) {
                $scope.tasks.push(data);
            });
        });
    };
});
