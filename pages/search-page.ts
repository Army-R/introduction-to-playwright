import {expect, Locator, Page} from '@playwright/test'

export class SearchPage {
    readonly page: Page;
    readonly getSearchButton: Locator;
    //readonly docSearchModal: Locator;
    readonly docSearchInput: Locator;

    constructor(page: Page) {
        this.page = page;
        this.getSearchButton = page.getByRole('button', {name: 'Search'})
        //this.docSearchModal = page.locator('.DocSearch-Modal');
        this.docSearchInput = page.locator('#docsearch-input')
    }

    async clickSearchButton() {
        await this.getSearchButton.click();
        await expect(this.docSearchInput).toBeVisible();
    }

    async searchActions(){
        await this.docSearchInput.fill('Actions');
    }

    async assertSearch() {
        await this.docSearchInput.press('Enter');
        await expect(this.page).toHaveURL('https://playwright.dev/docs/input')
    }
}

export default SearchPage