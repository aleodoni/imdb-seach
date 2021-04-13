import Puppeteer from './config/puppeteer';
import app from './app';
import IMDb from './scrapper/imdb';
import allMovies from './persist';

async function scrap(): Promise<void> {
  const link = 'https://www.imdb.com/search/title/?groups=top_1000&sort=user_rating&count=100';
  console.log('Start IMDb scrapping...');

  const puppeteer = new Puppeteer();

  await puppeteer.init();

  const imdb = new IMDb(puppeteer.browser);

  console.log('Scrapping 0 to 100 movies...');
  allMovies.push(...await imdb.scrap(`${link}`));
  console.log('Scrapping 101 to 200 movies...');
  allMovies.push(...await imdb.scrap(`${link}&start=101&ref_=adv_nxt`));
  console.log('Scrapping 201 to 300 movies...');
  allMovies.push(...await imdb.scrap(`${link}&start=201&ref_=adv_nxt`));
  console.log('Scrapping 301 to 400 movies...');
  allMovies.push(...await imdb.scrap(`${link}&start=301&ref_=adv_nxt`));
  console.log('Scrapping 401 to 500 movies...');
  allMovies.push(...await imdb.scrap(`${link}&start=401&ref_=adv_nxt`));
  console.log('Scrapping 501 to 600 movies...');
  allMovies.push(...await imdb.scrap(`${link}&start=501&ref_=adv_nxt`));
  console.log('Scrapping 601 to 700 movies...');
  allMovies.push(...await imdb.scrap(`${link}&start=601&ref_=adv_nxt`));
  console.log('Scrapping 701 to 800 movies...');
  allMovies.push(...await imdb.scrap(`${link}&start=701&ref_=adv_nxt`));
  console.log('Scrapping 801 to 900 movies...');
  allMovies.push(...await imdb.scrap(`${link}&start=801&ref_=adv_nxt`));
  console.log('Scrapping 901 to 1000 movies...');
  allMovies.push(...await imdb.scrap(`${link}&start=901&ref_=adv_nxt`));

  await puppeteer.browser.close();

  console.log('IMDb scrapping finished.');
}

scrap()
  .then(() => {
    app.listen(3333, () => {
      console.log('Server started on port 3333');
    });
  })
  .catch((error) => console.log(error));
