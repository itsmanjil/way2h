require('chromedriver');
const {Builder, By, Key, until} = require('selenium-webdriver');
const webdriver = require("selenium-webdriver");
const assert = require('assert');
const { Given, When, Then} = require('@cucumber/cucumber');
let driver = new webdriver.Builder().forBrowser("chrome").build();

Given('I am on the admin login page',{timeout:1000*1000},  async ()=> {
  // this.driver = await new Builder().forBrowser('chrome').build();
  await driver.get('http://localhost:3000/admin');
});

When('I enter my username1 and password1', async function() {
  await driver.findElement(By.id('user1')).sendKeys('admin');
  await driver.findElement(By.id('pass1')).sendKeys('admin');
});

Then('I click the login button1', async function() {
  await driver.findElement(By.className('a123')).click();
});

Then('I click the travel package button1', async function() {
    await driver.findElement(By.id('travelpackage')).click();
  });

  Then('I click the add button1', async function() {
    await driver.findElement(By.id('add')).click();
  });

// Then('I should be redirected to the dashboard', async function() {
//   let url = await driver.getCurrentUrl();
//   assert(url.includes('/'));
// });



