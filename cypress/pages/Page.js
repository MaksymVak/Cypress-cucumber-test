/* import "cypress-real-events/support" */

const header = 'header'

class GeneralPage {

startPage(element){
    return cy.visit(element)
}

getElement(element){
    return cy.get(element)
}
getElementContains(element, value){
    return cy.get(element).contains(value)
}
getElementTimeOut(element){
    return cy.get(element, { timeout: 20000 })
}
getUrl(){
    return cy.url()
}
clickElement(element){
    this.getElement(element).click()
}
clickElementContains(element, value){
    this.getElementContains(element, value).click()
}
clickFirstElement(element){
    this.getElement(element).first().click()
}
clickLastElement(element){
    this.getElement(element).last().click()
}
checkElement(element){
    this.getElement(element).check()
}
typeValue(element, value){
    this.getElement(element).type(value)
}
typeWithClearValue(element, value){
    this.getElement(element).clear().type(value)
}
selectElement(element, value){
    this.getElement(element).select(value)
}
selectDropmenu (element, index) {
    this.getElement(element).click().get(index).click()
}
selectContainsDropmenu (element, value, index) {
    this.getElementContains(element, value).click().get(index).click()
}
scrollingToElement (element) {
    this.getElement(element).scrollTo('center')
}
waitSeconds(seconds){
    cy.wait(seconds)
}
backPage (){
    cy.go('back')
}

}
module.exports = new GeneralPage()