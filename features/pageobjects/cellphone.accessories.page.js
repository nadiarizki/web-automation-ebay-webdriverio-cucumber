import { $ } from '@wdio/globals';
import Page from './page.js';

class CellphoneAccessoriesPage extends Page {
    get shopByCategory() {
        return $('#gh-shop-a');
    }

    get cellphoneAccessories() {
        return $('//a[normalize-space()="Cell phones & accessories"]');        
    }

    get smartphonesBanner() {
        return $('//h1[normalize-space()="Smartphones & Smartwatches"]');        
    }

    get cellphoneSmartphone() {
        return $('//a[contains(text(),"Cell Phones & Smartphones")]');
    }

    async validateOnCellphoneAccessoriesPage() {
        await browser.waitUntil(async () => await browser.getUrl() === 'https://www.ebay.com/b/Cell-Phones-Smart-Watches-Accessories/15032/bn_1865441', {
            timeout: 5000,
            timeoutMsg: 'Expected to be on Cell Phones & Accessories page'
        });
        await expect(this.smartphonesBanner).toBeExisting();
    }

    async openCellphoneSmartphone() {
        await this.cellphoneSmartphone.click(); 
    }
}

export default new CellphoneAccessoriesPage();
