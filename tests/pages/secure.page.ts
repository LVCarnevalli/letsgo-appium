import { $ } from "@wdio/globals";
import CommonPage from "./common.page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends CommonPage {
  /**
   * define selectors using getter methods
   */
  public get flashAlert() {
    return $("#flash");
  }
}

export default new SecurePage();
