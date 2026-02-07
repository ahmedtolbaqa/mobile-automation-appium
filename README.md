# Mobile Automation — Part 4

This project is a simple mobile automation setup for a sample Android app using **Appium** and **Mocha**.  
The goal of the test is to launch the app, tap a button, and verify that the app navigates to the correct page.

---

## Project Structure

mobile-automation-appium
mobile/pages/home.page.js  → Page object for Home screen
mobile/tests/navigation.test.js  → Mocha test for navigation
package.json  → Node.js dependencies and scripts
README.md  → This README file
-----------------
## Requirements

- Node.js
- Appium server installed
- Android Emulator or real device
------------------------------------
## Setup

1. Clone the repository:
   git clone https://github.com/AhmedTolba2022/mobile-automation-appium.git
   cd mobile-automation-appium

2. Install dependencies:
   npm install

3. Start Appium server and make sure your emulator/device is running:
   appium
------------------------------------
## Running Tests

Run the test with Mocha:
npx mocha mobile/tests/navigation.test.js

The test will:
1. Launch the app.
2. Tap the "Start" button on the Home screen.
3. Assert navigation to the registration page.
