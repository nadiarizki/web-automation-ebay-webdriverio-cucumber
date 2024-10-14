import { $ } from '@wdio/globals';
import Page from './page.js';

class FilterResultPage extends Page {
    get pageHeader() {
        return $('//span[@class="b-pageheader__text"]');
    }

    get numberOfAppliedFilter() {
        return $('//li[@class="brm__item brm__item--applied"]//button[@type="button"]');
    }

    async validateFilterResult() {
        await this.pageHeader.waitForDisplayed({ timeout: 5000 });
    
        const pageHeaderText = await this.pageHeader.getText();
        console.log('Page Header Text:', pageHeaderText);
        await expect(pageHeaderText).toEqual("Cell Phones & Smartphones between IDR0.00 and IDR10,000,000.00");
        
        const numberOfAppliedFilter = (await this.numberOfAppliedFilter.getText());
        await expect(numberOfAppliedFilter).toEqual("2 filters applied");
    }
    
}

export default new FilterResultPage();
