import { $ } from '@wdio/globals';
import Page from './page.js';

class HomePage extends Page {
    get shopByCategory() {
        return $('#gh-shop-a');
    }

    get cellphoneAccessories() {
        return $('//a[normalize-space()="Cell phones & accessories"]');
    }

    get searchBar() {
        return $('//input[@id="gh-ac"]');
    }

    get searchButton() {
        return $('//input[@id="gh-btn"]');
    }

    get categoryDropdown() {
        return $('//select[@id="gh-cat"]');
    }

    async openCellphoneAccessories() {
        await this.shopByCategory.waitForClickable();
        await this.shopByCategory.click();
        await this.cellphoneAccessories.waitForClickable();
        await this.cellphoneAccessories.click();
    }

    async searchItem(item) {
        await this.searchBar.waitForDisplayed();
        await this.searchBar.addValue(item);
    }

    async selectCategory(category) {
        await this.categoryDropdown.waitForDisplayed();
        await this.categoryDropdown.selectByVisibleText(category);
    }

    async clickSearchButton() {
        await this.searchButton.waitForClickable();
        await this.searchButton.click();
    }

    open() {
        return super.open('');
    }
}

export default new HomePage();
