import { $ } from '@wdio/globals';
import Page from './page.js';

class searchResultPage extends Page {
    get firstItem() {
        return $('a.s-item__link span.BOLD');
    }

    async validateSearchResult(searchString) {
        // Wait for the page to load and check the URL
        await expect(browser).toHaveUrl(expect.stringContaining(searchString));
    
        // Verify the first item is displayed
        await expect(this.firstItem).toBeDisplayed();
    
        // Get the text of the first item
        const firstItemText = await this.firstItem.getText();
        console.log('First Item Text:', firstItemText);
        console.log('Search String:', searchString);
    
        // Convert both to lowercase for case-insensitive comparison
        await expect(firstItemText.toLowerCase()).toContain(searchString.toLowerCase());
    }
    
}

export default new searchResultPage();
