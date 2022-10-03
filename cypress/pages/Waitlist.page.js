const generalPage = require("./Page")

const waitlistLink = 'header span [href="/products/storage"]'
const firstNameField = '#FirstName'
const lastNameField = '#LastName'
const emailField = '#Email'
const submitButton = '[type="submit"]'
const validatTitle = 'main h1'
const waitlistForm = '#__next div.sc-2e7b2fa9-0.eiIMbO main div.sc-31a8cefb-0.gFMACo div div.sc-31a8cefb-9.fJEUzb div.sc-31a8cefb-10.jnwLUb div a'

class WaitlistPage {

    goJoinWaitlistLink () {
        generalPage.clickElement(waitlistLink)
        generalPage.waitSeconds(2000)
        generalPage.clickElement(waitlistForm)
        generalPage.waitSeconds(2000)
    }

    fillField (firstName, lastName, email) {
        generalPage.typeValue(firstNameField, firstName)
        generalPage.typeValue(lastNameField, lastName)
        generalPage.typeValue(emailField, email)
        generalPage.clickElement(submitButton)
    }

    validatTitleText(){
        return generalPage.getElement(validatTitle)
    }
}
module.exports = new WaitlistPage()