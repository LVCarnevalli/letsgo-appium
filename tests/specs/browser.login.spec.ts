import { expect } from "@wdio/globals";
import LoginPage from "../pages/login.page";
import SecurePage from "../pages/secure.page";

describe("Browser Login", () => {
  it("should login with valid credentials", async () => {
    await LoginPage.open();

    await LoginPage.login("tomsmith", "SuperSecretPassword!");
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining("You logged into a secure area!");
  });
});
