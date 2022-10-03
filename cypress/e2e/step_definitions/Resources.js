import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor"
const resourcesPage = require("../../pages/Resources.page")
const generalPage = require("../../pages/Page")


When("Go to the page Blog", () => {
  resourcesPage.goResources()
})

When("Select Voice API and select {string}", (value) => {
  resourcesPage.selectResourcesProduct()
  resourcesPage.selectResourcesContent(value)
})
When("Go to the page Resource Hub", () => {
  resourcesPage.goResourcesHub()
})
When("Go to the page Release Notes", () => {
  resourcesPage.goReleaseNotes()
})


Then("Headers must contain {string}", (title) => {
  resourcesPage.validatTitleText().should('have.text', title)
})

Then("Page titles must match the text", (table) => {
  table.hashes().forEach((row) => {
    resourcesPage.validatHubTitleText(row.title).should('have.text', row.title)
  })
})

Then("The url must match {string}", (urlNotes) => {
  generalPage.getUrl().should('include', urlNotes)
})

Then("The page title should be {string} and the filter menu should be visible", (title) => {
  resourcesPage.releaseNotesTitleIext().should('have.text', title)
  resourcesPage.visibleReleaseNotesFilter().should('be.visible')
})