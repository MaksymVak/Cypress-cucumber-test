import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor"
const waitlistPage = require("../../pages/Waitlist.page")
import randomData from '../../helper/randomdata'


When("Go to the page Waitlist and go to the form Waitlist", () => {
  waitlistPage.goJoinWaitlistLink()
})

When("Enter random values in all fields", () => {
  waitlistPage.fillField(randomData.randomstring(10), randomData.randomstring(10), randomData.makeEmail())
})


Then("The title of the page must match {string}", (title) => {
  waitlistPage.validatTitleText().should('have.text', title)
})