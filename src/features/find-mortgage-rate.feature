Feature: Find a mortgage rate
  As a new customer
  I want to find the mortgage rates available
  So that I can decide whether to switch my mortgage to Nationwide


  Scenario: Find mortgage rates
    Given I open the url "https://www.nationwide.co.uk"
    And I am on the new mortgage rates page
    When I search for a mortgage with search terms:
    | Nationwide mortgage | Type of mortgage | Property value | Mortgage amount | Term |
    | No                  | Changing lender  | 300000         | 150000          | 30   |
    Then I am shown the different mortgage rates
    And I filter results by fixed mortgage type with product fee
    Then the filtered results should contain below:
      | Expected Results |
      | 2 yr Fixed       |
      | 3 yr Fixed       |
      | 5 yr Fixed       |
      | 10 yr Fixed      |
    When I apply for product type "5 yr  Fixed "
    Then I should progress to the Ready to Apply page
