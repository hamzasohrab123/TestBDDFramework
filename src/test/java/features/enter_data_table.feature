#DataTable will get only that value which user needs

  @FunctionalTest
  Feature: Enter Only One Data

    Scenario: Login with invalid credentials
      Given User is on login page
      When Enter invalid email and password from Data Table
        |email                       |password|
        |danish.bangash05@gmail.com  |123456|
        |hamzasohrab72@gmail.com     |12345|

      Then Error message appears
