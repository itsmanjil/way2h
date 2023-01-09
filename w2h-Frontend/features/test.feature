
Feature: login to go on the login page
  As a user
  I want to be able to log in to the application
  So that I can access my account information

  Scenario: Successful login
    Given I am on the login page
    When I enter my username and password
    Then I click the login button
    Then I should be redirected to the dashboard
    # And I should see a welcome message
    
  