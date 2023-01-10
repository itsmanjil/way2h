require('chromedriver');
const {Builder, By, Key, until} = require('selenium-webdriver');
const webdriver = require("selenium-webdriver");
const assert = require('assert');
const { Given, When, Then} = require('@cucumber/cucumber');
let driver = new webdriver.Builder().forBrowser("chrome").build();

Given('I am on the logins page', {timeout:1000*1000}, async function() {
  await driver.get('http://localhost:3000/register');
});

When('I click signup button', async function() {
  await driver.findElement(By.className('button123 ghost ')).click();
});

Then('I am on the registration page', async function() {
  await driver.get('http://localhost:3000/register');
});

Then('I fill up the given details', async function() {
  await driver.findElement(By.id('Name')).sendKeys('pradip111');
  await driver.findElement(By.id('Email')).sendKeys('pradip@gmail.com');
  await driver.findElement(By.id('Number')).sendKeys(9867685643);
  await driver.findElement(By.id('Password')).sendKeys('pradip12345');
  await driver.findElement(By.id('Password1')).sendKeys('pradip12345');
});

Then('I should be registered succesfully', async function() {
  await driver.findElement(By.id('sig')).click();
});


