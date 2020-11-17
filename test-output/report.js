$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("xero.feature");
formatter.feature({
  "line": 1,
  "name": "Xero TestCases Login Feature",
  "description": "",
  "id": "xero-testcases-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "TD01A:Verify Login with valid username and password",
  "description": "",
  "id": "xero-testcases-login-feature;td01a:verify-login-with-valid-username-and-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Navigate to the url",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Click on Login Button",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "xero-testcases-login-feature;td01a:verify-login-with-valid-username-and-password;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 11,
      "id": "xero-testcases-login-feature;td01a:verify-login-with-valid-username-and-password;;1"
    },
    {
      "cells": [
        "poornimakatti03@gmail.com",
        "Test123"
      ],
      "line": 12,
      "id": "xero-testcases-login-feature;td01a:verify-login-with-valid-username-and-password;;2"
    },
    {
      "cells": [
        "poornimakatti3@gmail.com",
        "Test12345"
      ],
      "line": 13,
      "id": "xero-testcases-login-feature;td01a:verify-login-with-valid-username-and-password;;3"
    },
    {
      "cells": [
        "poornimakatti03@gmail.com",
        "Test12345"
      ],
      "line": 14,
      "id": "xero-testcases-login-feature;td01a:verify-login-with-valid-username-and-password;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "TD01A:Verify Login with valid username and password",
  "description": "",
  "id": "xero-testcases-login-feature;td01a:verify-login-with-valid-username-and-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Navigate to the url",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Click on Login Button",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters \"poornimakatti03@gmail.com\" and \"Test123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "step_XeroLogin.navigate_to_the_url()"
});
formatter.result({
  "duration": 12534823544,
  "status": "passed"
});
formatter.match({
  "location": "step_XeroLogin.click_on_Login_Button()"
});
formatter.result({
  "duration": 3754474904,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "poornimakatti03@gmail.com",
      "offset": 13
    },
    {
      "val": "Test123",
      "offset": 45
    }
  ],
  "location": "step_XeroLogin.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 1996944126,
  "status": "passed"
});
formatter.match({
  "location": "step_XeroLogin.click_on_login_button()"
});
formatter.result({
  "duration": 1088070689,
  "status": "passed"
});
formatter.match({
  "location": "step_XeroLogin.user_is_on_home_page()"
});
formatter.result({
  "duration": 391738301,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Xero | Dashboard | poornima]\u003e but was:\u003c[Login | Xero Accounting Software]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat com.qa.stepdefination.XeroBrowserUtility.home_page(XeroBrowserUtility.java:59)\n\tat com.qa.stepdefination.step_XeroLogin.user_is_on_home_page(step_XeroLogin.java:40)\n\tat ✽.Then user is on home page(xero.feature:8)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 13,
  "name": "TD01A:Verify Login with valid username and password",
  "description": "",
  "id": "xero-testcases-login-feature;td01a:verify-login-with-valid-username-and-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Navigate to the url",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Click on Login Button",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters \"poornimakatti3@gmail.com\" and \"Test12345\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "step_XeroLogin.navigate_to_the_url()"
});
formatter.result({
  "duration": 9530163738,
  "status": "passed"
});
formatter.match({
  "location": "step_XeroLogin.click_on_Login_Button()"
});
formatter.result({
  "duration": 7324496494,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "poornimakatti3@gmail.com",
      "offset": 13
    },
    {
      "val": "Test12345",
      "offset": 44
    }
  ],
  "location": "step_XeroLogin.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 1773990861,
  "status": "passed"
});
formatter.match({
  "location": "step_XeroLogin.click_on_login_button()"
});
formatter.result({
  "duration": 1396296603,
  "status": "passed"
});
formatter.match({
  "location": "step_XeroLogin.user_is_on_home_page()"
});
formatter.result({
  "duration": 875003387,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Xero | Dashboard | poornima]\u003e but was:\u003c[Login | Xero Accounting Software]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat com.qa.stepdefination.XeroBrowserUtility.home_page(XeroBrowserUtility.java:59)\n\tat com.qa.stepdefination.step_XeroLogin.user_is_on_home_page(step_XeroLogin.java:40)\n\tat ✽.Then user is on home page(xero.feature:8)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 14,
  "name": "TD01A:Verify Login with valid username and password",
  "description": "",
  "id": "xero-testcases-login-feature;td01a:verify-login-with-valid-username-and-password;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Navigate to the url",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Click on Login Button",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters \"poornimakatti03@gmail.com\" and \"Test12345\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "step_XeroLogin.navigate_to_the_url()"
});
formatter.result({
  "duration": 12121574110,
  "status": "passed"
});
formatter.match({
  "location": "step_XeroLogin.click_on_Login_Button()"
});
formatter.result({
  "duration": 8228674797,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "poornimakatti03@gmail.com",
      "offset": 13
    },
    {
      "val": "Test12345",
      "offset": 45
    }
  ],
  "location": "step_XeroLogin.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 1461804346,
  "status": "passed"
});
formatter.match({
  "location": "step_XeroLogin.click_on_login_button()"
});
formatter.result({
  "duration": 6735047475,
  "status": "passed"
});
formatter.match({
  "location": "step_XeroLogin.user_is_on_home_page()"
});
formatter.result({
  "duration": 62887177,
  "status": "passed"
});
});