exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'https://sales.experitest.com/wd/hub',
  specs: ['webbrowser.js'],
  jasmineNodeOpts: {
      defaultTimeoutInterval: 4000000
    },
capabilities: {
	'browserName': 'chrome',
	'browserVersion': '72',
    'platformName': 'MAC',
	'testName' : 'Quick Start Chrome Browser Demo',
	'accessKey': '<ACCESS_KEY>'
    }
}