
Feature: register to the website
  As a user
  I want to be able to register in to the application
  So that I can login into the website.

  Scenario: Successful register
    Given I am on the logins page
    When I click signup button
    Then I am on the registration page
    Then I fill up the given details
    Then I should be registered successfully
    # And I should see a welcome message
    
  