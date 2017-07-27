describe ('Basic karma testing', function(){
    it('should add two numbers correctly', function(){
        expect(4 + 5).toEqual(9);
        console.log("spec1");
    });
});

describe('controller scope testing', function() {

    beforeEach(module('myApp'));

    var myController;
    var scope;

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        myController = $controller('myController', {
            $scope: scope
        });
    }));
    it('says Hello from ng jasmin karma app', function () {
        expect(scope.msg).toEqual('Hello from ng jasmin karma app');
        console.log("spec2");
    });

});

//1. Test service myService
describe('myService testing', function() {
    var myService;
    //2.
    beforeEach(function(){
        //3. Load the module
        module('myApp'); // It requires angular-mocks module

        //4. Get your service
        inject(function(_myService_){
            myService = _myService_;
        });
    });
    
    //5. Test service data
    it('ServiceTestSpec', function(){
        var servData;

        //6. Make the call to service
        var servResponse = myService.getData();
        //7. Get service data in result to test
        var result = servResponse.data;
        
        //8. Check the result
        expect(result).toEqual('myService response data');
        console.log("spec3");
    });

});