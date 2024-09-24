import { $ } from '@wdio/globals';
import Page from './page.js';

class filterResultPage extends Page {

    get pageHeader() {
        return $('//span[@class="b-pageheader__text"][text()="Cell Phones & Smartphones between IDR0.00 and IDR10,000,000.00"]');
    }
    
    get appliedFilter() {
        return $('.x-flyout__button[aria-controls="s0-28-9-0-1[0]-0-1-6-9-4[0]-flyout"]');
    }

    async validateFilterResult() {
    //     await this.pageHeader.waitForDisplayed({ timeout: 5000 });
    //     const pageHeaderText = await this.pageHeader.getText();
    //     console.log('Page Header Text:', pageHeaderText);
    //     //await expect(pageHeaderText).toEqual("Cell Phones & Smartphones between IDR0.00 and IDR10,000,000.00");

    //     await this.appliedFilter.waitForDisplayed({ timeout: 5000 });
    //     const appliedFilterText = (await this.appliedFilter.getText()).trim(); // Get and trim the text of the button
        
    //     // Log the applied filter text for debugging
    //     console.log('Applied Filter Text:', appliedFilterText);
        
    //     // Compare text with the expected value
    //     //await expect(appliedFilterText).toEqual("3 filters applied");
    }
    
}

export default new filterResultPage();
