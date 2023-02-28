const { search } = require('jest')
const {Builder, Capabilities, By} = require('selenium-webdriver')
require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()


beforeAll(async () => {
    await (await driver).get("http://127.0.0.1:5501/movieList/index.html")
})

afterAll(async () => {
    await (await driver).quit()
})

test('I can cross off a movie', async ()=>{
    await ( await driver).findElement(By.xpath('(//input)')).sendKeys('the trumanshow\n')
    await driver.sleep(2000)
    await (await driver).findElement(By.xpath('(//span)')).click()
    await driver.sleep(2000)

})

test('I can delete a movie', async () => {
    await (await driver).findElement(By.xpath('//li/button')).click()
    await driver.sleep(5000)
})

