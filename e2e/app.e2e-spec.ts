import { Angular2FormalPage } from './app.po';

describe('angular2-formal App', function() {
  let page: Angular2FormalPage;

  beforeEach(() => {
    page = new Angular2FormalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
