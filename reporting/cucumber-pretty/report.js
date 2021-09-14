$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("enter_data_table.feature");
formatter.feature({
  "line": 2,
  "name": "Enter Only One Data",
  "description": "",
  "id": "enter-only-one-data",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.before({
  "duration": 3756652952,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Login with invalid credentials",
  "description": "",
  "id": "enter-only-one-data;login-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter invalid email and password from Data Table",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 7
    },
    {
      "cells": [
        "danish.bangash05@gmail.com",
        "123456"
      ],
      "line": 8
    },
    {
      "cells": [
        "hamzasohrab72@gmail.com",
        "12345"
      ],
      "line": 9
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Error message appears",
  "keyword": "Then "
});
formatter.match({
  "location": "EnterUsingDataTable.user_is_on_login_page()"
});
formatter.result({
  "duration": 746013744,
  "status": "passed"
});
formatter.match({
  "location": "EnterUsingDataTable.enter_invalid_email_and_password_from_Data_Table(DataTable)"
});
formatter.result({
  "duration": 779503058,
  "status": "passed"
});
formatter.match({
  "location": "EnterUsingDataTable.error_message_appear()"
});
formatter.result({
  "duration": 46156382,
  "status": "passed"
});
formatter.after({
  "duration": 166940072,
  "status": "passed"
});
formatter.uri("enter_using_scenerio_outline.feature");
formatter.feature({
  "line": 2,
  "name": "Enter All Values",
  "description": "",
  "id": "enter-all-values",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@IntegrationTest"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Enter Given data",
  "description": "",
  "id": "enter-all-values;enter-given-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User has to be on activity information page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Try entering values \"\u003cstatus\u003e\" and \"\u003cname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Values are entered without any error",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "enter-all-values;enter-given-data;",
  "rows": [
    {
      "cells": [
        "status",
        "name"
      ],
      "line": 9,
      "id": "enter-all-values;enter-given-data;;1"
    },
    {
      "cells": [
        "active",
        "admin"
      ],
      "line": 10,
      "id": "enter-all-values;enter-given-data;;2"
    },
    {
      "cells": [
        "away",
        "student1"
      ],
      "line": 11,
      "id": "enter-all-values;enter-given-data;;3"
    },
    {
      "cells": [
        "sleep",
        "student2"
      ],
      "line": 12,
      "id": "enter-all-values;enter-given-data;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2114159088,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Enter Given data",
  "description": "",
  "id": "enter-all-values;enter-given-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@IntegrationTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User has to be on activity information page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Try entering values \"active\" and \"admin\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Values are entered without any error",
  "keyword": "Then "
});
formatter.match({
  "location": "EnterUsingScenerioOutline.user_has_to_be_on_activity_information_page()"
});
formatter.result({
  "duration": 9582937616,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "active",
      "offset": 21
    },
    {
      "val": "admin",
      "offset": 34
    }
  ],
  "location": "EnterUsingScenerioOutline.try_entering_values_user_and_status(String,String)"
});
formatter.result({
  "duration": 1335801175,
  "status": "passed"
});
formatter.match({
  "location": "EnterUsingScenerioOutline.given_values_are_entered_without_any_error()"
});
formatter.result({
  "duration": 116001111,
  "status": "passed"
});
formatter.after({
  "duration": 160810294,
  "status": "passed"
});
formatter.before({
  "duration": 2214101816,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Enter Given data",
  "description": "",
  "id": "enter-all-values;enter-given-data;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@IntegrationTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User has to be on activity information page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Try entering values \"away\" and \"student1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Values are entered without any error",
  "keyword": "Then "
});
formatter.match({
  "location": "EnterUsingScenerioOutline.user_has_to_be_on_activity_information_page()"
});
formatter.result({
  "duration": 3440757418,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "away",
      "offset": 21
    },
    {
      "val": "student1",
      "offset": 32
    }
  ],
  "location": "EnterUsingScenerioOutline.try_entering_values_user_and_status(String,String)"
});
formatter.result({
  "duration": 1069706145,
  "status": "passed"
});
formatter.match({
  "location": "EnterUsingScenerioOutline.given_values_are_entered_without_any_error()"
});
formatter.result({
  "duration": 261637996,
  "status": "passed"
});
formatter.after({
  "duration": 155667240,
  "status": "passed"
});
formatter.before({
  "duration": 2099889894,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Enter Given data",
  "description": "",
  "id": "enter-all-values;enter-given-data;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@IntegrationTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User has to be on activity information page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Try entering values \"sleep\" and \"student2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Values are entered without any error",
  "keyword": "Then "
});
formatter.match({
  "location": "EnterUsingScenerioOutline.user_has_to_be_on_activity_information_page()"
});
formatter.result({
  "duration": 3479625344,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sleep",
      "offset": 21
    },
    {
      "val": "student2",
      "offset": 33
    }
  ],
  "location": "EnterUsingScenerioOutline.try_entering_values_user_and_status(String,String)"
});
formatter.result({
  "duration": 1435318513,
  "status": "passed"
});
formatter.match({
  "location": "EnterUsingScenerioOutline.given_values_are_entered_without_any_error()"
});
formatter.result({
  "duration": 105170260,
  "status": "passed"
});
formatter.after({
  "duration": 160923819,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Login feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.before({
  "duration": 2189339169,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Log in with valid credentials",
  "description": "",
  "id": "login-feature;log-in-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User need to be on the signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Login with valid email and password",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User shall be allowed to login no error message shown",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_need_to_be_on_the_signin_page()"
});
formatter.result({
  "duration": 725008078,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.login_with_valid_email_and_password()"
});
formatter.result({
  "duration": 2215909354,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_shall_be_allowed_to_login_no_error_message_shown()"
});
formatter.result({
  "duration": 57641397,
  "status": "passed"
});
formatter.after({
  "duration": 157323008,
  "status": "passed"
});
});