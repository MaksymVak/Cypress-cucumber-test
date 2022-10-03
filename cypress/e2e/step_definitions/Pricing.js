import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor"
const trunkPricingPage = require("../../pages/Pricing.page")
const generalPage = require("../../pages/Page")


When("Go to the page Elastic SIP Trunking pricing", () => {
  trunkPricingPage.goTrunkPricing()
})

When("Choose a country Ukraine", () => {
    trunkPricingPage.selectDropMenu()
})
Then("The page title contains the {string} and url contains {string}", (contry, urlUa) => {
    trunkPricingPage.validatMessageExpect().should('include.text', contry)
    generalPage.getUrl().should('include', urlUa)

})
