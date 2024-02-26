Feature: Testing The Search and checkout Process for a product.

  Scenario: A user should be able to search for a product(phone),add product to cart and complete the checkout process.

    Given I launch the Lambatest Shopping website
    When  I click on the Search bar
    Then  I search for a phone
    Then  I click on the search button
    Then  I hover over the phone
    Then  I click the cart icon
    When  I proceed to checkout from the pop-up displayed
    Then  I fill in my personal details
    Then  I fill in my billing address
    Then  I uncheck the store newsletter
    Then  I check the privacy policy
    Then  I check the terms and condition
    When  I click on the continue button
    Then  I verify my order details
    Then  I click on confirm order button
    Then  I should see the success message
