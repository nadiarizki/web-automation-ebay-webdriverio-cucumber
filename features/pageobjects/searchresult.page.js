import { $ } from '@wdio/globals';
import Page from './page.js';

class SearchResultPage extends Page {
    get firstItem() {
        return $('a.s-item__link span.BOLD');
    }

    async validateSearchResult(searchString) {
        await expect(browser).toHaveUrl(expect.stringContaining(searchString));

        await expect(this.firstItem).toBeDisplayed();

        const firstItemText = await this.firstItem.getText();
        console.log('First Item Text:', firstItemText);
        console.log('Search String:', searchString);

        // Convert both to lowercase for case-insensitive comparison
        await expect(firstItemText.toLowerCase()).toContain(searchString.toLowerCase());
    }
}

export default new SearchResultPage();
