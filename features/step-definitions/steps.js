import { Given, When, Then } from '@wdio/cucumber-framework';
import HomePage from '../pageobjects/home.page.js';
import CellphoneAccessoriesPage from '../pageobjects/cellphone.accessories.page.js';
import CellphoneSmartphonesPage from '../pageobjects/cellphone.smartphones.page.js';
import SearchResultPage from '../pageobjects/searchresult.page.js';
import FilterResultPage from '../pageobjects/filterresult.page.js';


Given('user is on the Homepage', async () => {
    await browser.maximizeWindow();
    await HomePage.open();
    
});

When('user clicks Cell Phones & Accessories category', async () => {
    await HomePage.openCellphoneAccessories();
});

Then('user should be redirected to the Cellphone & Accessories page', async () => {
    await CellphoneAccessoriesPage.validateOnCellphoneAccessoriesPage();
});

When('user clicks Cell Phones & Smartphones category', async () => {
    await CellphoneAccessoriesPage.openCellphoneSmartphone();
});

Then('user should be redirected to the Cell Phones & Smartphones page', async () => {
    await CellphoneSmartphonesPage.validateOnCellphonesSmartphonesPage();    
});

When('user clicks All Filters', async () => {
    await CellphoneSmartphonesPage.clickAllFilters();
});

When('user adds Condition filter', async () => {
    await CellphoneSmartphonesPage.addConditionFilter();
});


Then('user should see button displaying selected condition', async () => {
    await CellphoneSmartphonesPage.validateConditionFilterAdded();
});


When('user adds Price filter', async () => {
    await CellphoneSmartphonesPage.addPriceFilter();
});

Then('user should see button displaying selected price range', async () => {
    await CellphoneSmartphonesPage.validateConditionFilterAdded();
});

When('user adds Item Location filter', async () => {
    await CellphoneSmartphonesPage.addItemLocationFilter();
});

Then('user should see button displaying selected location', async () => {
    await CellphoneSmartphonesPage.validateItemLocationFilterAdded();
});

Then('user should see number of selected filters', async () => {
    await CellphoneSmartphonesPage.validateNumberOfFiltersAdded();
}); 

When('user clicks Apply button', async () => {
    await CellphoneSmartphonesPage.applyFilters();
});

Then('user should see the filter tags are applied', async () => {
    await FilterResultPage.validateFilterResult();
});

When('user types {string} in the search bar', async (item) => {
    await HomePage.searchItem(item);
});

When('user selects {string} category from dropdown', async (category) => {
    await HomePage.selectCategory(category);
});

When('user clicks Search button', async () => {
    await HomePage.clickSearchButton();
});

Then('user should see search results for {string}', async (searchString) => {
    await SearchResultPage.validateSearchResult(searchString);
});
