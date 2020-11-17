Feature: Xero TestCases Login Feature
Scenario Outline: TD01ABC:Verify Login with valid username and password 
Given Navigate to the url
Given Click on Login Button
Then  enters "<username>" and "<password>"
Then click on login button
Then user is on home page
Examples:
	| username | password |
	| poornimakatti03@gmail.com | Test123|
	| poornimakatti3@gmail.com | Test12345|
	| poornimakatti03@gmail.com | Test12345| 	
	
#Scenario: TD01D: Test Forgot Password
#Given Navigate to the url
#Given Click on Login Button
#Given click on the forgot password link
#Then user enters "<username>"
#| poornimakatti03@gmail.com |
#Then user clicks on send link 
#Then password reset message page is displayed
#Scenario: TD02-CDE Sign Up to XDC
#Given Navigate to the url
#Given click on the FreeTrail link
#Then click on the terms link
#Then click on the privacy link
#Then click on the offers link
#Then click on the accountant or bookkeeper link

#Scenario: ID06-Test Upload profile image
#Given Navigate to the url
#Given Click on Login Button
#Then user details "<username>" and "<password>"
#| poornimakatti03@gmail.com | Test12345| 
#Then click on login button 
#Given click on the user name
#Given click on the profile link
#Then click on the upload image
#Then click on the browse button
#Then click on the upload button
#Then click on the save button

#Scenario: TD04- Logout 
#Given logout from the app