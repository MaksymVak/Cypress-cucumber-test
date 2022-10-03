const generalPage = require("./Page")

const sipTrunksLink = 'footer [href="/products/sip-trunks"]'
const voiceApiLink = 'footer [href="/products/voice-api"]'
const numberLookupLink = 'footer [href="/number-lookup"]'
const allProductLink = 'footer [href="/products"]'
const whateverLinks = 'a h3'
const validatTitle = 'header h1'
const selectCase = '[aria-label="Use cases"]'
const selectTitle = '[role="tabpanel"] h4'
const faxApi = 'main [href="/products/fax-api"]'
const titleFaxApi = 'main h1'


class ProductPage {

    gosipTrunks () {
        generalPage.clickElement(sipTrunksLink)
        generalPage.waitSeconds(1500)
    }
    goVoiseApi () {
        generalPage.clickElement(voiceApiLink)
        generalPage.waitSeconds(1500)
    }
    goNumberLookup () {
        generalPage.clickElement(numberLookupLink)
        generalPage.waitSeconds(1500)
    }
    goFaxApi () {
        generalPage.clickElement(allProductLink)
        generalPage.waitSeconds(1500)
        generalPage.clickElement(faxApi)
        generalPage.waitSeconds(1500)
    }
    selectCaseLink (value){
        generalPage.clickElementContains(selectCase, value)
    }
    validateSelectTitle (value){
        return generalPage.getElementContains(selectTitle, value)
    }

    linkPage(value) {
        generalPage.clickElementContains(whateverLinks, value)
    }

    validatTitleText(){
        return generalPage.getElement(validatTitle)
    }
    validatTitleFaxApiText(){
        return generalPage.getElement(titleFaxApi)
    }
}
module.exports = new ProductPage()