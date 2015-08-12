exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    
    capabilities: {
        'browserName': 'chrome'
    },
    
    specs: ['part14-testCtrl_spec.js'],
    
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    }
};