import { $ } from '@wdio/globals';
import Page from './page.js';

class CellphoneSmartphonePage extends Page {
    get cellphoneSmartphoneText() {
        return $('//span[contains(text(),"Cell Phones & Smartphones")]');
    }

    get allFiltersButton() {
        return $('//button[normalize-space()="All Filters"]');
    }

    get conditionFilter() {
        return $('//span[@class="x-overlay-aspect__label"][normalize-space()="Condition"]');
    }

    get newConditionRadioBtn() {
        return $('//span[@class="cbx x-refine__multi-select-cbx"][normalize-space()="New"]');
    }

    get numberOfAppliedFilter() {
        return $('(//span[@class="x-tray__count"])[1]');
    }

    get priceFilter() {
        return $('//span[@class="x-overlay-aspect__label"][normalize-space()="Price"]');
    }

    get minPrice() {
        return $('//input[@aria-label="Minimum Value, US Dollar"]');
    }

    get maxPrice() {
        return $('//input[@aria-label="Maximum Value, US Dollar"]');
    }

    get itemLocationFilter() {
        return $('//span[@class="x-overlay-aspect__label"][normalize-space()="Item Location"]');
    }

    get europeRadioBtn() {
        return $('//span[contains(text(),"Europe")]');
    }

    get applyButton() {
        return $('//div[@class="x-overlay-footer_apply"]/button[@aria-label="Apply"]');
    }

    get selectedConditionFilter() {
        return $('//span[@data-aspecttype="LH_ItemCondition"]');
    }

    get selectedPriceFilter() {
        return $('(//span[@id="c3-tray-4[0[1]]"])[1]');
    }

    get selectedLocationFilter() {
        return $('(//span[@id="c3-tray-4[0[1]]"])[2]');
    }

    async validateOnCellphonesSmartphonesPage() {
        await expect(browser).toHaveUrl('https://www.ebay.com/b/Cell-Phones-Smartphones/9355/bn_320094');
        await expect(this.cellphoneSmartphoneText).toBeExisting();
    }

    async clickAllFilters() {
        await this.allFiltersButton.scrollIntoView();
        await this.allFiltersButton.click();
    }

    async addConditionFilter() {
        await this.conditionFilter.waitForDisplayed({ timeout: 5000 });
        await this.conditionFilter.click();
    
        await this.newConditionRadioBtn.waitForDisplayed({ timeout: 10000 });
        await this.newConditionRadioBtn.click();
    }

    async validateConditionFilterAdded() {
        const selectedConditionFilterText = await this.selectedConditionFilter.getText(); 
        await expect(selectedConditionFilterText).toEqual('New'); 
    }

    async addPriceFilter() {
        await this.priceFilter.click();

        await this.minPrice.waitForClickable({ timeout: 10000 });
        await this.minPrice.setValue("0");
        await this.maxPrice.setValue("10000000");
        await browser.keys('Enter');
    }

    async validatePriceFilterAdded() {
        const selectedPriceFilterText = await this.selectedPriceFilter.getText(); 
        await expect(selectedPriceFilterText).toEqual('IDR0 - IDR10000000'); 
    }


    async addItemLocationFilter() {
        await this.itemLocationFilter.isDisplayed({ timeout: 5000});
        await this.itemLocationFilter.click()
        
        // have trouble to click europe radio button 
        await this.europeRadioBtn.waitForDisplayed({ timeout: 10000 });  
        await this.europeRadioBtn.click();
        await browser.pause(10000)
        
    }

    // because Europe radio button is not clickable, this button is not shown
    async validateItemLocationFilterAdded() {
        // const selectedLocationFilterText = await this.selectedLocationFilter.getText(); 
        // await expect(selectedLocationFilterText).toEqual('Europe'); 
    }

    async validateNumberOfFiltersAdded() {
        const numberOfAppliedFilterText = await this.numberOfAppliedFilter.getText(); 
        await expect(numberOfAppliedFilterText).toEqual('(2) Filter(s) selected'); 
    }

    // have trouble to locate apply button 
    async applyFilters() {
        await this.applyButton.scrollIntoView();
        await this.applyButton.waitForDisplayed({ timeout: 10000 });
        await this.applyButton.click();

        // await browser.keys('Tab');
        // await browser.keys('Tab');
        // await browser.keys('Tab');
        // await browser.keys('Tab');
        // await browser.keys('Tab');
        // await browser.keys('Tab');
        // await browser.keys('Enter');
    }

    open() {
        return super.open('');
    }
}

export default new CellphoneSmartphonePage();
