
Feature: register to the website
  As a user
  I want to be able to login to admin in to the application
  So that I can add package

  Scenario: Successful register
    Given I am on the admin login page
    When I enter my username1 and password1
    Then I click the login button1
    Then I click the travel package button1
    Then I click the add button1
    # Then I fill up the given details
    # Then I should be registered successfully
    # And I should see a welcome message
    
  