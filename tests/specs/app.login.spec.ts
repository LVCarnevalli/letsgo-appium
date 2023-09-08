import TabBar from "../screens/components/tab-bar";
import LoginScreen from "../screens/login.screen";
import NativeAlert from "../screens/components/native-alert";

describe("App Login", () => {
  beforeEach(async () => {
    await TabBar.waitForTabBarShown();
    await TabBar.openLogin();
    await LoginScreen.waitForIsShown(true);
  });

  it("should be able login successfully", async () => {
    // Always make sure you are on the right tab
    await LoginScreen.tapOnLoginContainerButton();
    // Submit the data
    await LoginScreen.submitLoginForm({ username: "test@webdriver.io", password: "Test1234!" });
    // Wait for the alert and validate it
    await NativeAlert.waitForIsShown();
    await expect(await NativeAlert.text()).toEqual("Success\nYou are logged in!");

    // Close the alert
    await NativeAlert.topOnButtonWithText("OK");
    await NativeAlert.waitForIsShown(false);
  });

  it("should be able sign up successfully", async () => {
    // Always make sure you are on the right tab
    await LoginScreen.tapOnSignUpContainerButton();
    // Submit the data
    await LoginScreen.submitSignUpForm({ username: "test@webdriver.io", password: "Test1234!" });
    // Wait for the alert and validate it
    await NativeAlert.waitForIsShown();
    await expect(await NativeAlert.text()).toEqual("Signed Up!\nYou successfully signed up!");

    // Close the alert
    await NativeAlert.topOnButtonWithText("OK");
    await NativeAlert.waitForIsShown(false);
  });
});
