import { MyGitServicePage } from './app.po';

describe('my-git-service App', () => {
  let page: MyGitServicePage;

  beforeEach(() => {
    page = new MyGitServicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
