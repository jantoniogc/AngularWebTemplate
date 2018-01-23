import { browser, by, element } from 'protractor';

export class NewPage {

  navigateTo() {
    return browser.get('/cash');
  }

  createOperation() {
    // element(by.css("app-input>mat-form-field>input"));
    element(by.css('app-inpu[name="description"]')).sendKeys('testing');
    element(by.css('button[type="submit"')).click();
  }

  isFormValid() {
    return element(by.css('p[name="form-valid"]')).getText();
  }

}
