import { HomePage } from './home.po';
import { NewPage } from './new.po';

describe('angular-web-template App', () => {
  let page: HomePage;
  let newPage: NewPage;

  beforeEach(() => {
    page = new HomePage();
    newPage = new NewPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Hola.');
  });

  it('should create a new operation', () => {
    newPage.navigateTo();
    newPage.createOperation();
    newPage.isFormValid().then(r => expect(r).toEqual('true'));
  });
});
