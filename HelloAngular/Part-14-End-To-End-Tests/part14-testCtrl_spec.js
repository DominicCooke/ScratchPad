describe('Sample Hello App', function(){
    it('should greet the named user', function(){
        browser.get('http://127.0.0.1:49446/ScratchPad/HelloAngular/part14-End-to-end-tests.html');
        element(by.model('firstName')).sendKeys('John');
        var greeting = element(by.binding('firstName'));
        expect(greeting.getText()).toEqual('Hello John!');
    });
});