describe('Quick Start Mobile Browser Demo', function() {

	it('Quick Start Mobile Browser Demo',
			function() {
				browser.ignoreSynchronization = true;
				browser.get('https://www.google.com');
				var searchBar = element(by.name('q'));
				browser.wait(protractor.ExpectedConditions.presenceOf(searchBar), 5000);
				searchBar.sendKeys("Experitest");
				var searchBtn = element(by.xpath("//*[@css='BUTTON.Tg7LZd']"));
				browser.wait(protractor.ExpectedConditions.presenceOf(searchBtn), 5000);
				searchBtn.click();
			});

	browser.getCapabilities().then(function(capabilities) {
		console.log(capabilities.get('reportUrl'));
	});
});