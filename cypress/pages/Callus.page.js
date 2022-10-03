const generalPage = require("./Page")

const callUsLink = 'button'
const callUsLinkText = 'Call Us'
const callingLink = '[href="/contact-us#intl-tel-list"]'
const validatTitle = '#intl-tel-list h2'
const countryPhon = '#intl-tel-list ul li'

class CallUsPage {

    openCallUsMenu () {
        generalPage.clickElementContains(callUsLink, callUsLinkText)
        generalPage.clickElement(callingLink)
    }

    validatTitleText(){
        return generalPage.getElement(validatTitle)
    }
    validatCountryPhon(){
        return generalPage.getElement(countryPhon)
    }
}
module.exports = new CallUsPage()