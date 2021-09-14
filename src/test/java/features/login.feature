  @SmokeTest
  Feature: Login feature

    Scenario: Log in with valid credentials
      Given User need to be on the signin page
      When Login with valid email and password
      Then User shall be allowed to login no error message shown