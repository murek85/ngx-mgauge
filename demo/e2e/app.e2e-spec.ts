import { NgxMgaugeDemoPage } from './app.po';

describe('ngx-mgauge-demo App', () => {
  let page: NgxMgaugeDemoPage;

  beforeEach(() => {
    page = new NgxMgaugeDemoPage ();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
