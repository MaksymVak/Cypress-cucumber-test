const generalPage = require("./Page")

const callUsLink = 'button'
const callUsLinkText = 'Call Us'
const callingLink = '[href="/contact-us#intl-tel-list"]'
const validatTitle = '#intl-tel-list h2'
const countryPhon = '#intl-tel-list ul li'

class CallUsPage {

    openCallUsMenu () {
        generalPage.clickElementContains(callUsLink, callUsLinkText)
        generalPage.waitSeconds(1500)
        generalPage.clickElement(callingLink)
        generalPage.waitSeconds(1500)
    }

    validatTitleText(){
        return generalPage.getElement(validatTitle)
    }
    validatCountryPhon(){
        return generalPage.getElement(countryPhon)
    }
}
module.exports = new CallUsPage()