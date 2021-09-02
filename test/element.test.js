const internetPage = require('.../pages/internet.page')

describe('Interacting with elements', function (){
    it('Get text for element',()=>{
        browser.url('/')
        let text = $('h1').getText()
        console.log(text)

        internetPage.getLiText()
        internetPage.getSpecificElementText(3)
    })
})