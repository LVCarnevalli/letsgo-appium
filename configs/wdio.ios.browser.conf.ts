import config from "./wdio.shared.local.appium.conf";

config.specs = ["../tests/specs/**/browser*.spec.ts"];

config.capabilities = [
  {
    platformName: "iOS",
    browserName: "Safari",
    maxInstances: 1,
    "appium:deviceName": "iPhone Simulator",
    "appium:platformVersion": "16.4",
    "appium:orientation": "PORTRAIT",
    "appium:automationName": "XCUITest",
    "appium:newCommandTimeout": 240,
  },
];

exports.config = config;
