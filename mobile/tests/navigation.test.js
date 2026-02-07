const { expect } = require('chai')
const HomePage = require('../pages/home.page')

describe('Selendroid TestApp Navigation', function () {
    this.timeout(60000)

    before(async () => { await HomePage.launchApp() })
    after(async () => { await HomePage.closeApp() })

    it('should navigate to registration page when tapping "Start"', async () => {
        await HomePage.tapStart()
        const registerTitle = await HomePage.waitForRegistrationPage()
        const isDisplayed = await registerTitle.isDisplayed()
        expect(isDisplayed).to.be.true
    })
})
