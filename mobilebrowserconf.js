exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'https://qacloud.experitest.com/wd/hub',
  specs: ['mobilebrowser.js'],
  jasmineNodeOpts: {
      defaultTimeoutInterval: 4000000
    },
capabilities: {
	'browserName': 'safari',
	'testName' : 'Quick Start safari Mobile Browser Demo',
	'platformName' : 'ios',
	'deviceQuery' : "@os='ios' and @category='PHONE'",
	'accessKey': '<ACCESS_KEY'
    }
}