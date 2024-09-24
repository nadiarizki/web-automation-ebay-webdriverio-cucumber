import { Given, When, Then } from '@wdio/cucumber-framework';
import HomePage from '../pageobjects/home.page.js';
import cellphoneAccessoriesPage from '../pageobjects/cellphone.accessories.page.js';
import cellphoneSmartphonesPage from '../pageobjects/cellphone.smartphones.page.js';
import homePage from '../pageobjects/home.page.js';
import searchResultPage from '../pageobjects/searchresult.page.js';
import filterResultPage from '../pageobjects/filterresult.page.js';


Given('user is on the Homepage', async () => {
    await browser.maximizeWindow()
    await HomePage.open();
    await browser.pause(3000);
});

When('user clicks Cell Phones & Accessories category', async () => {
    await HomePage.openCellphoneAccessories();
});

Then('user should be redirected to the Cellphone & Accessories page', async () => {
    await cellphoneAccessoriesPage.validateOnCellphoneAccessoriesPage();
});

When('user clicks Cell Phones & Smartphones category', async () => {
    await cellphoneAccessoriesPage.openCellphoneSmartphone();
});

Then('user should be redirected to the Cell Phones & Smartphones page', async () => {
    await cellphoneSmartphonesPage.validateOnCellphonesSmartphonesPage();    
});

When('user clicks All Filters', async () => {
    await cellphoneSmartphonesPage.clickAllFilters();
});

When('user adds multiple filters', async () => {
    await cellphoneSmartphonesPage.addMultipleFilters();
});

Then('user should see selected filters', async () => {
    await filterResultPage.validateFilterResult();
}); 

When('user clicks Apply button', async () => {
    await cellphoneSmartphonesPage.applyFilters();
});

Then('user should see the filter tags are applied', async () => {
    await filterResultPage.validateFilterResult();
});

When('user types {string} in the search bar', async (item) => {
    await HomePage.searchItem(item);
});

When('user selects {string} category from dropdown', async (category) => {
    await HomePage.selectCategory(category);
});

When('user clicks Search button', async () => {
    await homePage.clickSearchButton();
});

Then('user should see search results for {string}', async (searchString) => {
    await searchResultPage.validateSearchResult(searchString);
});
