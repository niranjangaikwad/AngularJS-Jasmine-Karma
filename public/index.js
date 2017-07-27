var app = angular.module('myApp', []);

app.service('myService', function(){
    this.getData = function() {
        var result = { data: 'myService response data' }
        return result; //deferrer
    }
});

app.controller('myController', ['$scope', 'myService', function($scope, myService) {
    $scope.msg = "Hello from ng jasmin karma app";
    var returnedData = myService.getData();
    $scope.servResult = returnedData.data;
}]);


