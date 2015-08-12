var app = angular.module("my11App", []);



app.controller("SampleCtrl", function ($scope, $q) {
    $scope.fail = false;
    $scope.test = function () {
        var deferred = $q.defer();
        var promise = deferred.promise;
        promise.then(function (result) {
            alert('Success: ' + result);
        }, function (reason) {
            alert('Error: ' + reason);
        });

        if ($scope.fail)
            deferred.reject('Sorry');
        else
            deferred.resolve('Cool');
    };


    $scope.fail2 = false;
    $scope.test2 = function () {
        var deferred = $q.defer();
        var promise = deferred.promise;
        promise.then(function (result) {
                $scope.status2 = 'success pass 1 - ' + result;
                // need to propagate result to following promises
                return result + ' hussa! ';
            }, function (reason) {
                $scope.status2 = 'failure pass 1';
                return reason;
            })
            .then(function (result) {
                alert('Success: ' + result);
            }, function (reason) {
                alert('Error: ' + reason);
            });

        if ($scope.fail2)
            deferred.reject('Bad luck');
        else
            deferred.resolve('Hurray');
    };

    var deferred = $q.defer();
    var promise = deferred.promise;
    promise.then(function (result) {
        alert('Success: ' + result);
    }, function (reason) {
        alert('Error: ' + reason);
    });
    setTimeout(function () {
        deferred.resolve('Some value');
    }, 20000000000000000000000000000000000000000000000000000);

});

app.controller("TestCtrl", function ($scope, $q) {
    $scope.loadData = function () {
        loadUser()
            .then(loadStaff)
            .then(function (result) {
                alert(JSON.stringify(result));
            });
    };

    function loadUser() {
        var deferred = $q.defer();
        setTimeout(function () {
            deferred.resolve({
                userId: 1,
                staffId: 1,
                userName: 'jdoe'
            });
        }, 100);
        return deferred.promise;
    };

    function loadStaff(user) {
        var deferred = $q.defer();
        setTimeout(function () {
            deferred.resolve({
                staffId: 1,
                firstName: 'John',
                lastName: 'Doe'
            });
        }, 200);
        return deferred.promise;
    };
});
/*
app.controller("ParallelCtrl", function ($scope, $q) {

    $scope.loadTest = function () {
        $q.all([promise1, promise2, promise3])
            .then(function (result) {
                alert("woo");
            }, function (reason) {
                alert("boo");
            });

        var deferred1 = $q.defer();
        var promise1 = deferred1.promise;
        promise1.then(function (result1) {
            alert('Success: ' + result1);
        }, function (reason1) {
            alert('Error: ' + reason1);
        });
        
        if ($scope.fail3)
            deferred1.reject('Sorry');
        else
            deferred1.resolve('Cool');

        var deferred2 = $q.defer();
        var promise2 = deferred2.promise;
        promise2.then(function (result2) {
            alert('Success: ' + result2);
        }, function (reason2) {
            alert('Error: ' + reason2);
        });

        if ($scope.fail4)
            deferred2.reject('Sorry');
        else
            deferred2.resolve('Cool');

        var deferred3 = $q.defer();
        var promise3 = deferred3.promise;
        promise3.then(function (result3) {
            alert('Success: ' + result3);
        }, function (reason3) {
            alert('Error: ' + reason3);
        });

        if ($scope.fail5)
            deferred3.reject('Sorry');
        else
            deferred3.resolve('Cool');

    };
});
*/
