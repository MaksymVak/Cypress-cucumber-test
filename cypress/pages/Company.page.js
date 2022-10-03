const generalPage = require("./Page")

const aboutLink = 'footer [href="/company/about"]'
const dataPrivacyLink = 'footer [href="/company/data-privacy"]'
const reportAbuseLink = 'footer [href="/report-abuse"]'
const privatPoliceLink = 'footer [href="/privacy-policy"]'
const validatMessage = 'header h1'
const validatCity = 'h4 div span'
const validatLink = 'ul li a'
const validatTitle = 'div h2'
const subjectField = '[label="Subject"]'
const phoneField = '[label="Phone Number (Abusive)"]'
const phoneRecField = '[label="Phone Number (Received Abuse)"]'
const fullNameField = '[label="Full Name (optional)"]'
const voicetButton = '[for="serviceAbusedVoice"]'
const submitButton = '[type="submit"]'
const errorMessage = '[role="alert"] [type="danger"]'
const validateMainTitle = 'main h2'

class CompanyPage {

    fillRepForm (subject, phone, phonRecAbus, fullName) {
        generalPage.typeValue(subjectField, subject)
        generalPage.typeValue(phoneField, phone)
        generalPage.typeValue(phoneRecField, phonRecAbus)
        generalPage.typeValue(fullNameField, fullName)
        generalPage.clickElement(voicetButton)
        generalPage.clickElement(submitButton)
    }
    goAboutUs () {
        generalPage.clickElement(aboutLink)
    }
    goReportAbuse () {
        generalPage.clickElement(reportAbuseLink)
        generalPage.waitSeconds(1500)
    }
    goDataPrivacy () {
        generalPage.clickElement(dataPrivacyLink)
        generalPage.waitSeconds(1500)
    }
    goPrivatePolice () {
        generalPage.clickElement(privatPoliceLink)
        generalPage.waitSeconds(1500)
    }
    checkLink (link) {
        generalPage.clickElementContains(validatLink, link)
    }
    validatTitleText(link){
        return generalPage.getElementContains(validatTitle, link)
    }
    validatMessageExpect(){
        return generalPage.getElement(validatMessage)
    }
    validatErrorMessage(){
        return generalPage.getElement(errorMessage)
    }
    visibleCity(city){
        return generalPage.getElementContains(validatCity, city)
    }
    validateTextMainTitle(value){
        return generalPage.getElementContains(validateMainTitle, value)
    }
}
module.exports = new CompanyPage()