import {expect, Locator, Page} from '@playwright/test'

export class SearchPage {
    readonly page: Page;
    readonly getSearchButton: Locator;
    readonly docSearchModal: Locator;

    constructor(page: Page) {
        this.page = page;
        this.getSearchButton = page.getByRole('button', {name: 'Search'})
        this.docSearchModal = page.locator('.DocSearch-Modal');
    }

    async clickSearchButton() {
        await this.getSearchButton.click();
    }

    async assertSearchModal() {
        await expect(this.docSearchModal).toBeVisible();
    }

}

export default SearchPage