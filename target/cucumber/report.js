$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("signup.feature");
formatter.feature({
  "line": 1,
  "name": "Sign Up to XDC",
  "description": "",
  "id": "sign-up-to-xdc",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "ID02-A:Sign Up to XD",
  "description": "",
  "id": "sign-up-to-xdc;id02-a:sign-up-to-xd",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Click on FREE TRIAL icon",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "enter \"\u003cFirstName\u003e\" and \"\u003cLastName\u003e\" and \"\u003cEmailAddress\u003e\" and \"\u003cPhonenumber\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "select Country from the List Box",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "check on captcha",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "select Terms and policy in the check box",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Click on Get started Button",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "sign-up-to-xdc;id02-a:sign-up-to-xd;",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "EmailAddress",
        "Phonenumber"
      ],
      "line": 11,
      "id": "sign-up-to-xdc;id02-a:sign-up-to-xd;;1"
    },
    {
      "cells": [
        "Poornima",
        "Kaa",
        "poornimakatti03@gmail.com",
        "4083389845"
      ],
      "line": 12,
      "id": "sign-up-to-xdc;id02-a:sign-up-to-xd;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "ID02-A:Sign Up to XD",
  "description": "",
  "id": "sign-up-to-xdc;id02-a:sign-up-to-xd;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Click on FREE TRIAL icon",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "enter \"Poornima\" and \"Kaa\" and \"poornimakatti03@gmail.com\" and \"4083389845\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "select Country from the List Box",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "check on captcha",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "select Terms and policy in the check box",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Click on Get started Button",
  "keyword": "Then "
});
formatter.match({
  "location": "step_XeroSignUp.click_on_FREE_TRIAL_icon()"
});
formatter.result({
  "duration": 17623436021,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Poornima",
      "offset": 7
    },
    {
      "val": "Kaa",
      "offset": 22
    },
    {
      "val": "poornimakatti03@gmail.com",
      "offset": 32
    },
    {
      "val": "4083389845",
      "offset": 64
    }
  ],
  "location": "step_XeroSignUp.enter_and_and_and(String,String,String,String)"
});
formatter.result({
  "duration": 3842871913,
  "status": "passed"
});
formatter.match({
  "location": "step_XeroSignUp.select_Country_from_the_List_Box()"
});
formatter.result({
  "duration": 680250019,
  "status": "passed"
});
formatter.match({
  "location": "step_XeroSignUp.select_on_captcha()"
});
formatter.result({
  "duration": 56873488,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div//span[@id\u003d\u0027recaptcha-anchor\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.111)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:14c5:3209:2c7b:a8cb%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.5\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.111, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: /var/folders/x8/kk6n2vjn1k1...}, goog:chromeOptions: {debuggerAddress: localhost:58328}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 979498fa3408fe999bf36b2c1587a00c\n*** Element info: {Using\u003dxpath, value\u003d//div//span[@id\u003d\u0027recaptcha-anchor\u0027]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat com.qa.stepdefination.step_XeroSignUp.select_on_captcha(step_XeroSignUp.java:42)\n\tat ✽.Then check on captcha(signup.feature:6)\n",
  "status": "failed"
});
formatter.match({
  "location": "step_XeroSignUp.select_Terms_and_policy_in_the_check_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "step_XeroSignUp.click_on_Get_started_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("xero.feature");
formatter.feature({
  "line": 1,
  "name": "Xero TestCases Login Feature",
  "description": "",
  "id": "xero-testcases-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "TD01ABC:Verify Login with valid username and password",
  "description": "",
  "id": "xero-testcases-login-feature;td01abc:verify-login-with-valid-username-and-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Navigate to the url",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Click on Login Button",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "xero-testcases-login-feature;td01abc:verify-login-with-valid-username-and-password;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 9,
      "id": "xero-testcases-login-feature;td01abc:verify-login-with-valid-username-and-password;;1"
    },
    {
      "cells": [
        "poornimakatti03@gmail.com",
        "Test123"
      ],
      "line": 10,
      "id": "xero-testcases-login-feature;td01abc:verify-login-with-valid-username-and-password;;2"
    },
    {
      "cells": [
        "poornimakatti3@gmail.com",
        "Test12345"
      ],
      "line": 11,
      "id": "xero-testcases-login-feature;td01abc:verify-login-with-valid-username-and-password;;3"
    },
    {
      "cells": [
        "poornimakatti03@gmail.com",
        "Test12345"
      ],
      "line": 12,
      "id": "xero-testcases-login-feature;td01abc:verify-login-with-valid-username-and-password;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "TD01ABC:Verify Login with valid username and password",
  "description": "",
  "id": "xero-testcases-login-feature;td01abc:verify-login-with-valid-username-and-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Navigate to the url",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Click on Login Button",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "enters \"poornimakatti03@gmail.com\" and \"Test123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "step_XeroLogin.navigate_to_the_url()"
});
formatter.result({
  "duration": 11425463899,
  "status": "passed"
});
formatter.match({
  "location": "step_XeroLogin.click_on_Login_Button()"
});
formatter.result({
  "duration": 4110967383,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "poornimakatti03@gmail.com",
      "offset": 8
    },
    {
      "val": "Test123",
      "offset": 40
    }
  ],
  "location": "step_XeroLogin.enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 1269739636,
  "status": "passed"
});
formatter.match({
  "location": "step_XeroLogin.click_on_login_button()"
});
formatter.result({
  "duration": 1501321801,
  "status": "passed"
});
formatter.match({
  "location": "step_XeroLogin.user_is_on_home_page()"
});
formatter.result({
  "duration": 22273974,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Xero | Dashboard | poornima]\u003e but was:\u003c[Login | Xero Accounting Software]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:117)\n\tat org.junit.Assert.assertEquals(Assert.java:146)\n\tat com.qa.stepdefination.XeroBrowserUtility.home_page(XeroBrowserUtility.java:65)\n\tat com.qa.stepdefination.step_XeroLogin.user_is_on_home_page(step_XeroLogin.java:47)\n\tat ✽.Then user is on home page(xero.feature:7)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 11,
  "name": "TD01ABC:Verify Login with valid username and password",
  "description": "",
  "id": "xero-testcases-login-feature;td01abc:verify-login-with-valid-username-and-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Navigate to the url",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Click on Login Button",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "enters \"poornimakatti3@gmail.com\" and \"Test12345\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "step_XeroLogin.navigate_to_the_url()"
});
formatter.result({
  "duration": 11678488548,
  "status": "passed"
});
formatter.match({
  "location": "step_XeroLogin.click_on_Login_Button()"
});
formatter.result({
  "duration": 4206027004,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "poornimakatti3@gmail.com",
      "offset": 8
    },
    {
      "val": "Test12345",
      "offset": 39
    }
  ],
  "location": "step_XeroLogin.enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 1258126894,
  "status": "passed"
});
formatter.match({
  "location": "step_XeroLogin.click_on_login_button()"
});
formatter.result({
  "duration": 1064269496,
  "status": "passed"
});
formatter.match({
  "location": "step_XeroLogin.user_is_on_home_page()"
});
formatter.result({
  "duration": 569197889,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Xero | Dashboard | poornima]\u003e but was:\u003c[Login | Xero Accounting Software]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:117)\n\tat org.junit.Assert.assertEquals(Assert.java:146)\n\tat com.qa.stepdefination.XeroBrowserUtility.home_page(XeroBrowserUtility.java:65)\n\tat com.qa.stepdefination.step_XeroLogin.user_is_on_home_page(step_XeroLogin.java:47)\n\tat ✽.Then user is on home page(xero.feature:7)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 12,
  "name": "TD01ABC:Verify Login with valid username and password",
  "description": "",
  "id": "xero-testcases-login-feature;td01abc:verify-login-with-valid-username-and-password;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Navigate to the url",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Click on Login Button",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "enters \"poornimakatti03@gmail.com\" and \"Test12345\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "step_XeroLogin.navigate_to_the_url()"
});
formatter.result({
  "duration": 9807430123,
  "status": "passed"
});
formatter.match({
  "location": "step_XeroLogin.click_on_Login_Button()"
});
formatter.result({
  "duration": 6667835088,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "poornimakatti03@gmail.com",
      "offset": 8
    },
    {
      "val": "Test12345",
      "offset": 40
    }
  ],
  "location": "step_XeroLogin.enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 1273975410,
  "status": "passed"
});
formatter.match({
  "location": "step_XeroLogin.click_on_login_button()"
});
formatter.result({
  "duration": 6068842174,
  "status": "passed"
});
formatter.match({
  "location": "step_XeroLogin.user_is_on_home_page()"
});
formatter.result({
  "duration": 6455357,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Xero | Dashboard | poornima]\u003e but was:\u003c[My Xero | Home]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:117)\n\tat org.junit.Assert.assertEquals(Assert.java:146)\n\tat com.qa.stepdefination.XeroBrowserUtility.home_page(XeroBrowserUtility.java:65)\n\tat com.qa.stepdefination.step_XeroLogin.user_is_on_home_page(step_XeroLogin.java:47)\n\tat ✽.Then user is on home page(xero.feature:7)\n",
  "status": "failed"
});
});