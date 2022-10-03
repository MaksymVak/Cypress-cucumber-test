const generalPage = require("./Page")

const menuLocator = 'button span svg'
const trunkPLink = 'footer [href="/pricing/elastic-sip"] span span'
const dropMenuIndex = '[href="/pricing/elastic-sip/ua"]'
const validatMessage = 'h1 span'

class TrunkPricingPage {

    goTrunkPricing () {
        generalPage.clickElement(trunkPLink)
        generalPage.waitSeconds(1500)
    }

    selectDropMenu (){
        generalPage.selectDropmenu(menuLocator, dropMenuIndex)
    }
    validatMessageExpect(){
        return generalPage.getElement(validatMessage)
    }
}
module.exports = new TrunkPricingPage()