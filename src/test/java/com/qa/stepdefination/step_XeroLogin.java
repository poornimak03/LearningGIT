package com.qa.stepdefination;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class step_XeroLogin extends XeroBrowserUtility {

	@Given("^Navigate to the url$")
	public void navigate_to_the_url() throws Throwable {
		launchBrowser("ch");
		System.out.println("Chrome Browser Launched ! ");
		Login();
		System.out.println("Login to Xero Successful ! ");
	}

	@Given("^Click on Login Button$")
	public void click_on_Login_Button() throws Exception {
		loginbutton();
		Thread.sleep(1000);
	}

	@Then("^enters \"(.*)\" and \"(.*)\"$")
	public void enters_username_and_password(String username,String password) throws Exception{
		driver.findElement(By.xpath("//input[@id='xl-form-email']")).sendKeys(username);
		driver.findElement(By.xpath("//input[@id='xl-form-password']")).sendKeys(password);
		Thread.sleep(1000);
	}
	
	@Then("^click on login button$")
	public void click_on_login_button() {
		clickonlogin();
	}
	
	@Then("^close browser$")
	public void close_browser(){
		closebrowser();
	}
	@Then("^user is on home page$")
	public void user_is_on_home_page(){
		home_page();
	}	
	//TD01D:Forgot Password

	@Given("^click on the forgot password link$")
	public void click_on_the_forgot_password_link() throws Exception {
		driver.findElement(By.xpath("//a[contains(text(),'Forgot password')]")).click();
	    Thread.sleep(1000);
	}
	
	@Then("^user enters \"(.*)\"$")
	public void user_enters(String username,DataTable credentials){
	    List<List<String>>data = credentials.raw();
	    driver.findElement(By.tagName("input")).sendKeys(data.get(0).get(0));
	}
	
	@Then("^user clicks on send link$")
	public void user_clicks_on_send_link() {
		driver.findElement(By.id("submit-reset-password")).click();
	}
	
	@Then("^password reset message page is displayed$")
	public void password_reset_message_page_is_displayed() {
		
		System.out.println("Current URL : " +driver.getCurrentUrl());
		WebElement eleResetMsg=driver.findElement(By.xpath("//div[@class='xui-text-secondary']"));
		eleResetMsg.isDisplayed();
		System.out.println("Is Reset Message display :" +eleResetMsg.isDisplayed());
		System.out.println(eleResetMsg.getText());
	}

	// TD02-CDE Sign Up to XDC
	
	@Given("^click on the FreeTrail link$")
	public void click_on_the_FreeTrail_link() {
		driver.findElement(By.linkText("Free trial")).click();
	}

	@Then("^click on the terms link$")
	public void click_on_the_terms_link() {
		
		WebElement Eleterms=driver.findElement(By.linkText("terms"));
		pagescrolldown(Eleterms);
		
		/*JavascriptExecutor js = (JavascriptExecutor) driver;
		WebElement Eleterms=driver.findElement(By.linkText("terms"));
		js.executeScript("window.scrollTo(0, document.body.scrollHeight)");
		Eleterms.click();
		System.out.println("Term link selected ! ");*/
	}

	@Then("^click on the privacy link$")
	public void click_on_the_privacy_link() {
		driver.findElement(By.linkText("privacy")).click();
		System.out.println("Privacy link selected ! ");
	}

	@Then("^click on the offers link$")
	public void click_on_the_offers_link() {
		driver.findElement(By.linkText("offer details")).click();
		System.out.println("Offers link selected ! ");
	}

	@Then("^click on the accountant or bookkeeper link$")
	public void click_on_the_accountant_or_bookkeeper_link() {
		driver.findElement(By.partialLinkText("accountant or bookke")).click();
		System.out.println("accountant or bookkeeper link selected ! ");
	}

	//ID06-Test Upload profile image
	@Then("^user details \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_details_and(String username, String password, DataTable credentials) {
		List<List<String>>data = credentials.raw();
	    driver.findElement(By.id("xl-form-email")).sendKeys(data.get(0).get(0));
	    driver.findElement(By.id("xl-form-password")).sendKeys(data.get(0).get(1));
	}
	@Given("^click on the user name$")
	public void click_on_the_user_name() throws Exception {
		driver.findElement(By.xpath("//button[@title='User Info']")).click();
		Thread.sleep(500);
	}

	@Given("^click on the profile link$")
	public void click_on_the_profile_link() {
		driver.findElement(By.xpath("//a[@data-event-action='Clicked ADDON: profile']")).click();
	}

	@Given("^click on the upload image$")
	public void click_on_the_upload_image() {
		WebElement Eleuploadbutton=driver.findElement(By.id("button-1041"));
		Eleuploadbutton.click();
		}

	@Given("^click on the browse button$")
	public void click_on_the_browse_button() {
		
		WebElement EleBrowseButton = driver.findElement(By.xpath("//input[@name='file']"));
		Actions action = new Actions(driver);
		action.moveToElement(EleBrowseButton).perform();
		EleBrowseButton.sendKeys("/Users/kiran/Desktop/cucumber.png");
		System.out.println("Selected image from the system");
	}

	@Given("^click on the upload button$")
	public void click_on_the_upload_button() {
		driver.findElement(By.xpath("//div[@id='button-1178-btnWrap']")).click();
		System.out.println("Selected upload button");
	}
	@Then("^click on the save button$")
	public void click_on_the_save_button() {
		WebElement Eleterms=driver.findElement(By.id("button-1164-btnEl"));
		pagescrolldown(Eleterms);
		System.out.println("Image saved successfully ! ");
	}
	// TD04 -Logout 
	@Given("^logout from the app$")
	public void logout_from_the_app() {
		logout();
	}	
}