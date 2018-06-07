// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'app should work': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .waitForElementVisible('p.loading', 5000)
      .waitForElementNotPresent('p.loading', 5000)
      .waitForElementVisible('#app .search-input', 5000)
      .waitForElementVisible('#app .search-button', 5000)
      .waitForElementVisible('#app li', 10000)
      .waitForElementVisible('#app li img', 10000)
      .setValue('#app .search-input', 'Amber Heard')
      .click('#app .search-button')
      .waitForElementVisible('p.loading', 5000)
      .waitForElementNotPresent('p.loading', 10000)
      .assert.containsText('#app', 'amber')
      .end()
  }
}
