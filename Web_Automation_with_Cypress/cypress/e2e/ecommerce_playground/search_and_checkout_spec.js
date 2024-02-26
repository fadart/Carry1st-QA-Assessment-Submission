import { When,Then, Given, And } from '@badeball/cypress-cucumber-preprocessor';

Given(/^I launch the Lambatest Shopping website$/, () => {
    cy.launchWebsite()
});

When(/^I click on the Search bar$/, () => {
    cy.ClickSearchBar()
});
  
Then(/^I search for a phone$/, () => {
    cy.SearchPhone()
});

Then(/^I click on the search button$/, () => {
    cy.ClickSearchButton()
});  
Then(/^I hover over the phone$/, () => {
    cy.HoverOnProduct()
});

Then(/^I click the cart icon$/, () => {
    cy.ClickCartIcon()
});

Then(/^I proceed to checkout from the pop-up displayed$/, () => {
    cy.ClickCheckout()
});
  
Then(/^I fill in my personal details$/, () => {
    cy.InsertFirstname()
    cy.InsertLastname()
    cy.InsertEmail()
    cy.InsertTelephone()
    cy.InsertPassword()
    cy.InsertConfirmPassword()

}); 

    Then(/^I fill in my billing address$/, () => {  
    cy.InsertCompany()
    cy.InsertAddress()
    cy.InsertCity()
    cy.InsertPostcode()
    cy.InsertCountry()
    cy.InsertRegion()

});  

Then(/^I uncheck the store newsletter$/, () => {
    cy.UncheckNewsLetterBox()
});   

Then(/^I check the terms and condition$/, () => {
    cy.CheckTermsConditionBox()

}); 

Then(/^I check the privacy policy$/, () => {
    cy.CheckPrivacyPolicyBox()
}); 

When(/^I click on the continue button$/, () => {
    cy.ClickContinueButton()
}); 

Then(/^I verify my order details$/, () => {
    cy.ConfirmOrderDetails()
});   
Then(/^I click on confirm order button$/, () => {
    cy.ClickConfirmOrderButton()
}); 

Then(/^I should see the success message$/, () => {
    cy.VerifySucessMessage()
}); 