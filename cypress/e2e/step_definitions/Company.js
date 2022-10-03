import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor"
const companyPage = require("../../pages/Company.page")
const generalPage = require("../../pages/Page")


When("Go to the page About Us", () => {
  companyPage.goAboutUs()
})

When("Go to the page Data & Privacy", () => {
  companyPage.goDataPrivacy()
})

When("Go to the page Report Abuse", () => {
  companyPage.goReportAbuse()
})

When("Let's follow the link", (table) => {
  table.hashes().forEach((row) => {
    companyPage.checkLink(row.link)
  })
})

When("Fill out the report form and click the submit button", (table) => {
  table.hashes().forEach((row) => {
    companyPage.fillRepForm(row.subject, row.phone, row.phonRecAbus, row.fullName)
  })
})

When("Go to the page Privacy Policy", () => {
  companyPage.goPrivatePolice()
})



Then("The title of the page will be {string}", (title) => {
  companyPage.validatMessageExpect().should('have.text', title)
})

Then("An error message should appear", () => {
  companyPage.validatErrorMessage().should('be.visible')
})

Then("An address in the city must be available", (table) => {
  table.hashes().forEach((row) => {
    companyPage.visibleCity(row.city).should('be.visible')
  })
})

Then("Section heading must match", (table) => {
  table.hashes().forEach((row) => {
    companyPage.validatTitleText(row.link).should('have.text', row.link)
  })
})

Then("Page url must contain {string}", (urlNotes) => {
  generalPage.getUrl().should('include', urlNotes)
})

Then("Page titles should contain relevant text", (table) => {
  table.hashes().forEach((row) => {
    companyPage.validateTextMainTitle(row.title).should('have.text', row.title)
  })
})