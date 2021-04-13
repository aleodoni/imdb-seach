import { Browser } from 'puppeteer';

class IMDbScrapper {
  private browser!: Browser;

  constructor(browser: Browser) {
    this.browser = browser;
  }

  public async scrap(urlPage: string): Promise<any[]> {
    const page = await this.browser.newPage();

    page.setViewport({ width: 1280, height: 926 });

    await page.goto(urlPage, { waitUntil: 'networkidle2', timeout: 0 });

    // const result = await page.evaluate(() => document.querySelectorAll('.lister-item'));
    const movies = await page.$$eval('.lister-item-content', (el) => {
      const results = [];
      for (let i = 0; i < el.length; i += 1) {
        const data = {
          title: el[i].querySelector('h3.lister-item-header')?.querySelector('a')?.innerHTML,
          year: el[i].querySelector('h3.lister-item-header')?.querySelector('span.lister-item-year.text-muted.unbold')?.innerHTML,
          genre: (el[i].querySelector('p.text-muted')?.querySelector('span.genre')?.innerHTML)?.trim(),
          rating: el[i].querySelector('div.ratings-bar')?.querySelector('div.inline-block.ratings-imdb-rating')?.getAttribute('data-value'),
          director: ((el[i].getElementsByTagName('p')[2].innerText).split('|')[0]).replace('Director:', '').replace('Directors:', '').trim(),
          stars: ((el[i].getElementsByTagName('p')[2].innerText).split('|')[1]).replace('Stars:', '').trim(),
        };
        results.push(data);
      }
      return results;
    });

    return movies;
  }
}

export default IMDbScrapper;
