// Generate a random email
const randomNumber = Math.floor(Math.random() * 100);
const userEmail = 'navydoe';
const randomEmail = `${userEmail}${randomNumber}@yopmail.com`;

Cypress.Commands.add('launchWebsite',()=>{
    cy.visit('/')
})

Cypress.Commands.add('ClickSearchBar',()=>{
    cy.fixture("selectors").then((sel) =>{
        cy.get(sel.searchBar).should('be.visible');
    })
})

Cypress.Commands.add('SearchPhone',()=>{
    cy.fixture("selectors").then((sel) =>{
        cy.get(sel.searchBar).should('be.visible').type(sel.itemName);
    })
})

Cypress.Commands.add('ClickSearchButton',()=>{
    cy.fixture("selectors").then((sel) =>{
        cy.get(sel.SearchButton).should('be.visible').click({ force: true });
    })
})

Cypress.Commands.add('HoverOnProduct',()=>{
   cy.fixture("selectors").then((sel) =>{
       cy.get(sel.product).should('be.visible');
       cy.get(sel.product).first().trigger("mouseover");
    })
})

Cypress.Commands.add('ClickCartIcon',()=>{
    cy.fixture("selectors").then((sel) =>{
        cy.get(sel.cartIcon).should('be.visible').click({ force: true });
    })
})

Cypress.Commands.add('ClickCheckout',()=>{
    cy.fixture("selectors").then((sel) =>{
        cy.get(sel.checkoutButton).should('be.visible').click()
    })

})

Cypress.Commands.add('InsertFirstname',()=>{
    cy.fixture("selectors").then((sel) =>{
        cy.get(sel.firstNameField).should('be.visible').type(sel.firstName)
    })

})

Cypress.Commands.add('InsertLastname',()=>{
    cy.fixture("selectors").then((sel) =>{
        cy.get(sel.lastNameField).should('be.visible').type(sel.lastname)    
 })

})

Cypress.Commands.add('InsertEmail',()=>{
    cy.fixture("selectors").then((sel) =>{
        cy.get(sel.emailField).should('be.visible').type(randomEmail)
    })

})

Cypress.Commands.add('InsertTelephone',()=>{
    cy.fixture("selectors").then((sel) =>{
        cy.get(sel.telephoneField).should('be.visible').type(sel.telephone)
    })

})

Cypress.Commands.add('InsertPassword',()=>{
    cy.fixture("selectors").then((sel) =>{
        cy.get(sel.passwordField).should('be.visible').type(sel.password)
    })

})

Cypress.Commands.add('InsertConfirmPassword',()=>{
    cy.fixture("selectors").then((sel) =>{
        cy.get(sel.comfirmPasswordField).should('be.visible').type(sel.password)
    })

})

Cypress.Commands.add('InsertCompany',()=>{
    cy.fixture("selectors").then((sel) =>{
        cy.get(sel.companyField).should('be.visible').type(sel.company)
    })

})

Cypress.Commands.add('InsertAddress',()=>{
    cy.fixture("selectors").then((sel) =>{
        cy.get(sel.addressField).should('be.visible').type(sel.address)
    })

})

Cypress.Commands.add('InsertCity',()=>{
    cy.fixture("selectors").then((sel) =>{
        cy.get(sel.cityField).should('be.visible').type(sel.city)
    })

})

Cypress.Commands.add('InsertCity',()=>{
    cy.fixture("selectors").then((sel) =>{
        cy.get(sel.cityField).should('be.visible').type(sel.city)
    })

})

Cypress.Commands.add('InsertPostcode',()=>{
    cy.fixture("selectors").then((sel) =>{
        cy.get(sel.postCodeField).should('be.visible').type(sel.postCode)
    })

})

Cypress.Commands.add('InsertCountry',()=>{
    cy.fixture("selectors").then((sel) =>{
        cy.get(sel.countryField).should('be.visible').type(sel.country)
    })

})

Cypress.Commands.add('InsertRegion',()=>{
    cy.fixture("selectors").then((sel) =>{
        cy.get(sel.regionField).should('be.visible').type(sel.region)
    })

})


Cypress.Commands.add('UncheckNewsLetterBox',()=>{
    cy.fixture("selectors").then((sel) =>{
        cy.get(sel.newsletter_checkbox).should('be.visible').click();
    })

})

Cypress.Commands.add('CheckTermsConditionBox',()=>{
    cy.fixture("selectors").then((sel) =>{
        cy.get(sel.termsCondition_checkboc).should('be.visible').click();
    })

})

Cypress.Commands.add('CheckPrivacyPolicyBox',()=>{
    cy.fixture("selectors").then((sel) =>{
        cy.get(sel.privacyPolicy_checkbox).should('be.visible').click();
    })

})

Cypress.Commands.add('ClickContinueButton',()=>{
    cy.fixture("selectors").then((sel) =>{
        cy.get(sel.continueButton).should('be.visible').click();
    })

})

Cypress.Commands.add('ConfirmOrderDetails',()=>{
    cy.fixture("selectors").then((sel) =>{
        cy.contains(sel.confirmOrderPageTitle).should('be.visible');
        cy.contains(sel.address).should('be.visible');
        cy.contains(sel.firstName).should('be.visible');

    })
})

Cypress.Commands.add('ClickConfirmOrderButton',()=>{
    cy.fixture("selectors").then((sel) =>{
        cy.get(sel.confirmOrderButton).should('be.visible').click();
    })

})

Cypress.Commands.add('VerifySucessMessage',()=>{
    cy.fixture("selectors").then((sel) =>{
        cy.contains(sel.successMessage).should('be.visible');
 
    })

})

  