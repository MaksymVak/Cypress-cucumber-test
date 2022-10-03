const generalPage = require("./Page")

const resourcesLink = 'footer [href="/resources"]'
const resourcesHubLink = 'footer [href="/learn"]'
const releaseNotesLink = 'footer [href="/release-notes"]'
const linkFilter = 'button'
const buttonFilterProduct = 'Verify API'
const validatTitle = '#articles a:nth-child(1) header span span'
const validatTitleText = 'a h3'
const releaseNotesTitle = 'header h1'
const releaseNotesFilter = 'aside'
const releaseFilterTitle = 'Filter Release Notes by Product'



class ResourcesPage {

    goResources () {
        generalPage.clickElement(resourcesLink)
        generalPage.waitSeconds(1500)
    }
    goResourcesHub () {
        generalPage.clickElement(resourcesHubLink)
        generalPage.waitSeconds(1500)
    }
    goReleaseNotes () {
        generalPage.clickElement(releaseNotesLink)
        generalPage.waitSeconds(1500)
    }
    selectResourcesProduct () {
        generalPage.clickElementContains(linkFilter, buttonFilterProduct)
    }
    selectResourcesContent (value) {
        generalPage.clickElementContains(linkFilter, value)
        generalPage.waitSeconds(1500)
    }
    validatTitleText(){
        return generalPage.getElement(validatTitle)
    }
    validatHubTitleText(value){
        return generalPage.getElementContains(validatTitleText, value)
    }
    releaseNotesTitleIext(){
        return generalPage.getElement(releaseNotesTitle)
    }
    visibleReleaseNotesFilter(){
        return generalPage.getElementContains(releaseNotesFilter, releaseFilterTitle)
    }

}
module.exports = new ResourcesPage()