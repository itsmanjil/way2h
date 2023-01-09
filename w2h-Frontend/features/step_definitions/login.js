require('chromedriver');
const {Builder, By, Key, until} = require('selenium-webdriver');
const webdriver = require("selenium-webdriver");
const assert = require('assert');
const { Given, When, Then} = require('@cucumber/cucumber');
let driver = new webdriver.Builder().forBrowser("chrome").build();

Given('I am on the login page',{timeout:1000*1000},  async ()=> {
  // this.driver = await new Builder().forBrowser('chrome').build();
  await driver.get('http://localhost:3000/register');
});

When('I enter my username and password', async function() {
  await driver.findElement(By.id('logemail')).sendKeys('avishek@gmail.com');
  await driver.findElement(By.id('logpass')).sendKeys('Soft@1234');
});

Then('I click the login button', async function() {
  await driver.findElement(By.className('button123')).click();
});

Then('I should be redirected to the dashboard', async function() {
  let url = await driver.getCurrentUrl();
  assert(url.includes('/'));
});

// Then('I should see a welcome message', async function() {
//   let alert = await driver.findElement(By.css('.alert-success')).getText();
//   assert(alert.includes('Welcome, testuser!'));
// });


