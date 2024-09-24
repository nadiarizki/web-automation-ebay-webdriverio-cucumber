
import { $ } from '@wdio/globals'
import Page from './page.js';

class cellphoneAccessoriesPage extends Page {
    /**
     * define selectors using getter methods
     */
    get shopByCategory () {
        return $('#gh-shop-a');
    }

    get cellphoneAccessories () {
        return $('//a[normalize-space()="Cell phones & accessories"]');        
    }

    get smartphonesBanner () {

        return $('//h1[normalize-space()="Smartphones & Smartwatches"]');        
        

    }

    get cellphoneSmartphone() {
        return $('//a[contains(text(),"Cell Phones & Smartphones")]')
    }


    async validateOnCellphoneAccessoriesPage () {
        await expect(browser).toHaveUrl('https://www.ebay.com/b/Cell-Phones-Smart-Watches-Accessories/15032/bn_1865441');
        await expect(this.smartphonesBanner).toBeExisting();
        var title = browser.getTitle()
        console.log(title);
        //await expect(browser).toHaveTitle('Swag Labs');

        
    }

    async openCellphoneSmartphone () {
        await this.cellphoneSmartphone.click();
    }

    

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}

export default new cellphoneAccessoriesPage();

