Feature: Sign Up to XDC
Scenario Outline: ID02-A:Sign Up to XD
Given Click on FREE TRIAL icon
Then enter "<FirstName>" and "<LastName>" and "<EmailAddress>" and "<Phonenumber>"
Then select Country from the List Box
Then check on captcha 
Then select Terms and policy in the check box
Then Click on Get started Button

Examples:
	| FirstName | LastName | EmailAddress | Phonenumber |
	| Poornima | Kaa | poornimakatti03@gmail.com | 4083389845 |