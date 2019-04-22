describe('Quick Start Browser Demo', function() {

	it('Quick Start Browser Demo', function() {
		browser.ignoreSynchronization = true;
		for (var i = 0; i < 20; i++) {
			browser.get('https://www.google.com');
			var searchBar = element(by.name('q'));
			searchBar.click();
			searchBar.sendKeys("Experitest");
			searchBar.click();
			searchBar.sendKeys(protractor.Key.ENTER);
		}
	});

	browser.getCapabilities().then(function(capabilities) {
		console.log(capabilities.get('reportUrl'));
	});
});