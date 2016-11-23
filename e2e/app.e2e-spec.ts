import { AngularMoodjarPage } from './app.po';

describe('angular-moodjar App', function() {
  let page: AngularMoodjarPage;

  beforeEach(() => {
    page = new AngularMoodjarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
