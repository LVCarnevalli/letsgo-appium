import config from "./wdio.shared.local.appium.conf";

config.specs = ["../tests/specs/**/browser*.spec.ts"];

config.capabilities = [
  {
    platformName: "Android",
    browserName: "Chrome",
    maxInstances: 1,
    "appium:avd": "Pixel_3a_API_34_extension_level_7_x86_64",
    "appium:deviceName": "Pixel_3a_API_34_extension_level_7_x86_64",
    "appium:platformVersion": "12.0",
    "appium:orientation": "PORTRAIT",
    "appium:automationName": "UiAutomator2",
    "appium:newCommandTimeout": 240,
  },
];

exports.config = config;
