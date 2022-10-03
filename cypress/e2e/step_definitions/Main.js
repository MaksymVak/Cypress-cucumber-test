import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor"
  const cookieReset = require("../../helper/cookie")
  const generalPage = require("../../pages/Page")
  
  Given("Opens the web browser of the home page of the site", () => {
    generalPage.startPage("/")
  })
  Given("Reset the cookie window", () => {
    cookieReset.cookieWindowReset()
  })