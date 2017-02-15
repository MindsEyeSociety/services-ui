import { ServicesUiPage } from './app.po';

describe('services-ui App', function() {
  let page: ServicesUiPage;

  beforeEach(() => {
    page = new ServicesUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
