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

    get newConditionCheckbox() {
        return $('//span[@class="cbx x-refine__multi-select-cbx"][normalize-space()="New"]');
    }

    get numberOfSelectedFilter() {
        return $('//span[text()="(1) Filter(s) selected"]');
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

    get asiaCheckbox() {
        return $('//span[@class="cbx x-refine__multi-select-cbx"][normalize-space()="Asia"]');
    }

    get applyButton() {
        return $('//button[normalize-space()="Apply"]');
    }

    get numberOfAppliedFilter() {
        return $('//span[@class="x-tray__count"]');
    }

    get selectedConditionFilter() {
        return $('(//span[@id="c3-tray-4[0[0]]"])[1]');
    }

    get selectedPriceFilter() {
        return $('(//span[@id="c3-tray-4[0[1]]""])[1]');
    }

    get selectedLocationFilter() {
        return $('(//span[@id="c3-tray-4[0[1]]""])[2]');
    }



    async validateOnCellphonesSmartphonesPage() {
        await expect(browser).toHaveUrl('https://www.ebay.com/b/Cell-Phones-Smartphones/9355/bn_320094');
        await expect(this.cellphoneSmartphoneText).toBeExisting();
    }

    async clickAllFilters() {
        await this.allFiltersButton.scrollIntoView();
        await this.allFiltersButton.click();
    }

    async addMultipleFilters() {
        await this.conditionFilter.waitForDisplayed({ timeout: 5000 });
        await this.conditionFilter.click();

        await this.newConditionCheckbox.waitForDisplayed({ timeout: 5000 });
        await this.newConditionCheckbox.click();

        await this.priceFilter.click();        
        await this.minPrice.waitForDisplayed();
        await this.minPrice.setValue("0");

        await this.maxPrice.waitForDisplayed();
        await this.maxPrice.setValue("10000000");

        await this.itemLocationFilter.waitForDisplayed();
        await this.itemLocationFilter.click();

        await this.asiaCheckbox.waitForDisplayed();
        await this.asiaCheckbox.click();
    }

    async validateFiltersAdded() {
        const numberOfAppliedFilterText = await this.numberOfAppliedFilter.getText(); 
        await expect(numberOfAppliedFilter).toEqual('(3) Filter(s) selected'); 
        const selectedConditionFilterText = await this.selectedConditionFilter.getText(); 
        await expect(selectedConditionFilter).toEqual('New'); 
        const selectedPriceFilterText = await this.selectedPriceFilter.getText(); 
        await expect(selectedPriceFilter).toEqual('IDR0 - IDR10000000'); 
        const selectedLocationFilterText = await this.selectedPriceFilter.getText(); 
        await expect(selectedLocationFilterText).toEqual('Asia'); 
    }

    
    async applyFilters() {
        await this.applyButton.waitForClickable();
        await this.applyButton.click();
    }


    open() {
        return super.open('');
    }
}

export default new CellphoneSmartphonePage();
