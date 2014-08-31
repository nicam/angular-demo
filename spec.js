// spec.js
describe('simple list', function() {
  var name = element(by.model('name'));
  var location = element(by.model('location'));
  var addButton = element(by.id('addButton'));
  var listElements = element.all(by.css('li span'));

  beforeEach(function() {
    browser.get('http://angular.lo');
  });

  it('should add a user', function() {
    name.sendKeys("Hugo");
    location.sendKeys("Zürich");

    addButton.click();
    expect(listElements.count()).toEqual(4);
    expect(listElements.first().getText()).toEqual('Hans - Ebenalp');
    expect(listElements.get(1).getText()).toEqual('Hugo - Zürich');
    expect(listElements.last().getText()).toEqual('Peter - St. Gallen');
  });

  it('should remove a user', function () {
    element.all(by.css('li button')).first().click();
    expect(listElements.count()).toEqual(2);
    expect(listElements.first().getText()).toEqual('Pascal - Wil');
    expect(listElements.last().getText()).toEqual('Peter - St. Gallen');
  });

});