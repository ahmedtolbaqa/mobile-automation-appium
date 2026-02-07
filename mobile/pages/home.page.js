const { remote } = require('webdriverio');

class HomePage {
    constructor() { this.driver = null }

    async launchApp() {
        this.driver = await remote({
            protocol: 'http',
            hostname: 'localhost',
            port: 4723,
            path: '/',
            capabilities: {
                platformName: 'Android',
                'appium:automationName': 'UiAutomator2',
                'appium:deviceName': 'Pixel_6_API_33',
                'appium:app': '/Users/ahmed.moahmedtolba/apps/Store-test-app.apk',
                'appium:appPackage': 'io.selendroid.testapp',
                'appium:appActivity': 'io.selendroid.testapp.HomeScreenActivity',
                'appium:noReset': true,
                'appium:autoGrantPermissions': true
            }
        })
        await this.waitForHomeScreenActivity()
    }

    async closeApp() {
        if (this.driver) { await this.driver.deleteSession(); this.driver = null }
    }

    async waitForHomeScreenActivity(timeout = 10000) {
        let activity
        const start = Date.now()
        do {
            activity = await this.driver.execute('mobile: getCurrentActivity')
            if (activity.includes('HomeScreenActivity')) return true
            await new Promise(res => setTimeout(res, 500))
        } while (Date.now() - start < timeout)
        throw new Error(`HomeScreenActivity did not appear after ${timeout}ms, current activity: ${activity}`)
    }

    async tapStart() {
        const startBtn = await this.driver.$('id=io.selendroid.testapp:id/startUserRegistration')
        await startBtn.waitForExist({ timeout: 5000 })
        await startBtn.click()
    }

    async waitForRegistrationPage() {
        const registerTitle = await this.driver.$('id=io.selendroid.testapp:id/register_title')
        await registerTitle.waitForExist({ timeout: 5000 })
        return registerTitle
    }
}

module.exports = new HomePage()
