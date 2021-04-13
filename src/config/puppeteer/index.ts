import puppeteer, { Browser } from 'puppeteer';

class Puppeteer {
  public browser!: Browser;

  public async init(): Promise<void> {
    this.browser = await puppeteer.launch({ headless: true });
  }
}

export default Puppeteer;
