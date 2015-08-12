describe('when clicking the load stuff button', function (){
    it('should display staff in a list', function(){
        
        browser.get('http://127.0.0.1:49446/ScratchPad/HelloAngular/part14.5-End-to-end-tests.html'); // arrange
        
        element(by.id('loadStaff')).click(); // act
        
        var items = element.all(by.repeater('staff in staffList')); // assert
        expect(items.count()).toEqual(5);
        expect(items.get(0).getText()).toEqual('Miller');
    })
})