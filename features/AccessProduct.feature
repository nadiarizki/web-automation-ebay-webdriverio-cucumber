@accessProduct
Feature: Access Product

  Background: User opens Ebay Homepage
    Given user is on the Homepage

  @positive
  Scenario: Access a Product via Search 
    When user types "Macbook" in the search bar
    And user selects "Computers/Tablets & Networking" category from dropdown
    And user clicks Search button
    Then user should see search results for "Macbook"

  @positive @runthis
  Scenario: Access a Product via category after applying multiple filters
    When user clicks Cell Phones & Accessories category
    Then user should be redirected to the Cellphone & Accessories page
    When user clicks Cell Phones & Smartphones category
    Then user should be redirected to the Cell Phones & Smartphones page
    When user clicks All Filters
    And user adds Condition filter
    Then user should see button displaying selected condition
    And user adds Price filter
    Then user should see button displaying selected price range
    When user adds Item Location filter
    Then user should see button displaying selected location
    And user should see number of selected filters
    When user clicks Apply button
    Then user should see the filter tags are applied
