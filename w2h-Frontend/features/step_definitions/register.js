const {Builder, By, Key, until} = require('selenium-webdriver');
const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

Given('I am on the registration page', async function() {
  this.driver = await new Builder().forBrowser('chrome').build();
  await this.driver.get('http://localhost:3000/register');
});

When('I enter my name, email, and password', async function() {
  await this.driver.findElement(By.id('name')).sendKeys('Test User');
  await this.driver.findElement(By.id('email')).sendKeys('testuser@example.com');
  await this.driver.findElement(By.id('password')).sendKeys('testpass');
});

When('I click the register button', async function() {
  await this.driver.findElement(By.css('button')).click();
});

Then('I should be redirected to the dashboard', async function() {
  let url = await this.driver.getCurrentUrl();
  assert(url.includes('/dashboard'));
});

Then('I should see a welcome message', async function() {
  let alert = await this.driver.findElement(By.css('.alert-success')).getText();
  assert(alert.includes('Welcome, Test User!'));
});

Given('I am on the registration page', async function() {
  this.driver = await new Builder().forBrowser('chrome').build();
  await this.driver.get('http://localhost:3000/register');
});

When('I enter my name, email, and an incorrect password', async function() {
  await this.driver.findElement(By.id('name')).sendKeys('Test User');
  await this.driver.findElement(By.id('email')).sendKeys('testuser@example.com');
  await this.driver.findElement(By.id('password')).sendKeys('incorrectpass');
});

When('I click the register button', async function() {
  await this.driver.findElement(By.css('button')).click();
});

Then('I should see an error message', async function() {
  let alert = await this.driver.findElement(By.css('.alert-danger')).
  getText();
  assert(alert.includes('Invalid password'));
});

Then('I should not be registered', async function() {
  // Verify that the user is not registered, e.g. by checking the database
});
