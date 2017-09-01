import { AplikasiFrontendPage } from './app.po';

describe('aplikasi-frontend App', () => {
  let page: AplikasiFrontendPage;

  beforeEach(() => {
    page = new AplikasiFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
