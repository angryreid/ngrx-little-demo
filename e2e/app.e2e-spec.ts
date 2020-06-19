import { PetsTagPage } from './app.po';

describe('pets-tag App', () => {
  let page: PetsTagPage;

  beforeEach(() => {
    page = new PetsTagPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
