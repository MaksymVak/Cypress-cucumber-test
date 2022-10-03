import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor"
const callUsPage = require("../../pages/Callus.page")


When("Open menu Call Us and go to the page Calling from overseas", () => {
  callUsPage.openCallUsMenu()
})


Then("The section title should be {string}", (title) => {
  callUsPage.validatTitleText().should('have.text', title)
})

Then("Phone numbers of the respective countries must be present", (table) => {
  table.hashes().forEach((row) => {
    callUsPage.validatCountryPhon(row.country).should('be.visible')
  })
})