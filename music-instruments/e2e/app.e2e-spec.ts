import { MusicInstrumentsPage } from './app.po';

describe('music-instruments App', () => {
  let page: MusicInstrumentsPage;

  beforeEach(() => {
    page = new MusicInstrumentsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
