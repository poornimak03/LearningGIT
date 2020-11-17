package com.qa.stepdefination;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
public class step_XeroSignUp extends XeroBrowserUtility {

	@Given("^Click on FREE TRIAL icon$")
	public void click_on_FREE_TRIAL_icon(){
		launchBrowser("ch");
		System.out.println("Chrome Browser Launched ! ");
		Login();
		System.out.println("Login to Xero Successful ! ");
	}

	@Then("^enter \"(.*)\" and \"(.*)\" and \"(.*)\" and \"(.*)\"$")
	public void enter_and_and_and(String FirstName, String LastName, String EmailAddress, String Phonenumber) throws Exception {
		driver.findElement(By.xpath("//input[@name='FirstName']")).sendKeys(FirstName);
		Thread.sleep(500);
		driver.findElement(By.xpath("//input[@name='LastName']")).sendKeys(LastName);
		Thread.sleep(500);
		driver.findElement(By.xpath("//input[@name='EmailAddress']")).sendKeys(EmailAddress);
		Thread.sleep(500);
		driver.findElement(By.xpath("//input[@name='PhoneNumber']")).sendKeys(Phonenumber);
		Thread.sleep(500);
	}

	@Then("^select Country from the List Box$")
	public void select_Country_from_the_List_Box() throws Exception {
		WebElement eleselectCountry=driver.findElement(By.xpath("//select[@name='LocationCode']"));
		selectByVisibleText(eleselectCountry,"Togo");
		Thread.sleep(500);
		}

	@Then("^check on captcha$")
	public void select_on_captcha() throws Exception {
	/*WebElement eleiframe=driver.findElement(By.xpath("//div[@class='rc-anchor-center-item rc-anchor-checkbox-holder']"));
		driver.switchTo().frame("eleiframe");
		System.out.println("iframe selectd ! ");*/
		driver.findElement(By.xpath("//div//span[@id='recaptcha-anchor']")).click();
		driver.switchTo().defaultContent();
		Thread.sleep(500);
	}
	
	@Then("^select Terms and policy in the check box$")
	public void select_Terms_and_policy_in_the_check_box() throws Exception {
	driver.findElement(By.xpath("//input[@value='true']")).click();
		Thread.sleep(500);
	}

	@Then("^Click on Get started Button$")
	public void click_on_Get_started_Button() {
		driver.findElement(By.xpath("//span[@class='g-recaptcha-submit']")).click();
	}

}
