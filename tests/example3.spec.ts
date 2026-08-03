import test from '@playwright/test';
import {SearchPage} from '../pages/search-page';

const URL = 'https://playwright.dev/';
let searchPage: SearchPage;

test.beforeEach(async ({page}) => {
    await page.goto(URL);
    searchPage = new SearchPage(page);
});

test.describe('Playwright website search', () => {
    test('search test case', async () => {
       
        await searchPage.clickSearchButton();

        await searchPage.searchActions();

        await searchPage.assertSearch();
    })
})