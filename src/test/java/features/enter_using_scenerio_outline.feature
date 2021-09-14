#Outline will get all the values in table


  @IntegrationTest
    Feature: Enter All Values

      Scenario Outline: Enter Given data
        Given User has to be on activity information page
        When Try entering values "<status>" and "<name>"
        Then Values are entered without any error
        Examples:
          |status   |name|
          |active   |admin|
          |away     |student1|
          |sleep    |student2|
