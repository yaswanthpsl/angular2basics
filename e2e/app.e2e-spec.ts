import { Y0worldPage } from './app.po';

describe('y0world App', function() {
  let page: Y0worldPage;

  beforeEach(() => {
    page = new Y0worldPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
