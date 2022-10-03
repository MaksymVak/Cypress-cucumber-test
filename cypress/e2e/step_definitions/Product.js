import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor"
const productPage = require("../../pages/Product.page")
const generalPage = require("../../pages/Page")


When("Go to the page Elastic SIP Trunking", () => {
  productPage.gosipTrunks()
})

When("Go to the page Voice Api", () => {
  productPage.goVoiseApi()
})

When("Go to the page Number Lookup", () => {
  productPage.goNumberLookup()
})

When("Go to the page Fax Api through the menu See all Products", () => {
  productPage.goFaxApi()
})



Then("Clicking on a link should open the corresponding page", (table) => {
  table.hashes().forEach((row) => {
    productPage.linkPage(row.link),
    productPage.validatTitleText(row.link).should('include.text', row.link)
    generalPage.backPage()
  })
})

Then("Clicking on a link should open the corresponding section", (table) => {
  table.hashes().forEach((row) => {
    productPage.selectCaseLink(row.link),
    productPage.validateSelectTitle(row.link).should('include.text', row.link)
  })
})

Then("The page address must contain {string}", (urlNotes) => {
  generalPage.getUrl().should('include', urlNotes)
})

Then("The page title should be {string}", (title) => {
  productPage.validatTitleFaxApiText().should('have.text', title)
})