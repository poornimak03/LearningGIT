package com.qa.stepdefination;


import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.safari.SafariDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import io.github.bonigarcia.wdm.WebDriverManager;

public class XeroBrowserUtility {
	public static WebDriver driver = null;

	public static WebDriver launchBrowser(String sBrowserName) {

		switch (sBrowserName) {
		case "ch":
			WebDriverManager.chromedriver().setup();
			driver = new ChromeDriver();
			break;

		case "ff":
			WebDriverManager.firefoxdriver().setup();
			driver = new FirefoxDriver();
			break;

		case "s":
			driver = new SafariDriver(); /*
											 * SafariDriver is a class which is implementing WebDriver interface.driver
											 * is the instance of WebDriver. ALSO WE NEED TO GO SAFARI
											 * BROWSER->DROVELOPER -> CHECK THE "ALLOW REMOTE AUTOMATION"
										 */
			break;
		}
		return driver;
	}

	public static void Login() {
		driver.get("https://www.xero.com/us/");
		driver.manage().window().maximize();
	}

	public static void loginbutton() {
		driver.findElement(By.xpath("//a[contains(text(),'Login')]")).click();
	}
		
	public static void clickonlogin() {
		driver.findElement(By.xpath("//button[@id='xl-form-submit']")).click();	
	}
	
	public static void home_page() {
		String title=driver.getTitle();
		System.out.println("Home Page Title is :"+title);
		Assert.assertEquals("Xero | Dashboard | poornima", title);
	}
	public void closebrowser() {
		driver.close();
	}

	public static void pagescrolldown(WebElement ele) {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("window.scrollTo(0, document.body.scrollHeight)");
		ele.click();
	}
	
	public static void logout() {
		driver.findElement(By.xpath("//abbr[@class='xrh-avatar xrh-avatar-color-10']")).click();
		WebElement elelogout=driver.findElement(By.cssSelector("li.xrh-verticalmenuitem.xrh-verticalmenuitem-lefticon:nth-child(5) > a"));
		elelogout.click();
	}
	
	public static void selectByVisibleText(WebElement ele,String value) {
		Select seltext= new Select(ele);
		seltext.selectByVisibleText(value);
	}
	
	
	public static void SFMyProfile() {
		WebElement EleProfileButton = driver.findElement(By.xpath("//span[@id='userNavLabel']"));
		explicitWaitFunc(EleProfileButton);
		EleProfileButton.click();
	}

	
	public static void Accounts() {
		WebElement EleAccountButton = driver.findElement(By.xpath("//a[contains(text(),'Accounts')]"));
		explicitWaitFunc(EleAccountButton);
		EleAccountButton.click();
	}

	public static void Opty() {
		WebElement EleOpp = driver.findElement(By.xpath("//li[@id='Opportunity_Tab']"));
		explicitWaitFunc(EleOpp);
		EleOpp.click();
	}

	public static void Lead() {
		WebElement EleLead = driver.findElement(By.xpath("//li[@id='Lead_Tab']"));
		explicitWaitFunc(EleLead);
		EleLead.click();
	}

	public static void Contacts() {
		WebElement EleContactsButton = driver.findElement(By.id("Contact_Tab"));
		explicitWaitFunc(EleContactsButton);
		EleContactsButton.click();
	}
	public static void AllTab() {
		WebElement EleAllTabButton = driver.findElement(By.xpath("//li[@id='AllTab_Tab']//a"));
		explicitWaitFunc(EleAllTabButton);
		EleAllTabButton.click();
	}
	public static void CustomizeMyTabs() {
		WebElement EleAllTabButton = driver.findElement(By.xpath("//input[@class='btnImportant']"));
		explicitWaitFunc(EleAllTabButton);
		EleAllTabButton.click();
	}
	public static void SFMyProfileDevCon() {
		WebElement EleSFMyProfileDevCon = driver.findElement(By.xpath("//a[@title='Developer Console (New Window)']"));
		explicitWaitFunc(EleSFMyProfileDevCon);
		EleSFMyProfileDevCon.click();
	}

	public static void SFMyProfileMySetting() {
		WebElement EleSFMyProfileMySetting = driver.findElement(By.xpath("//a[contains(text(),'My Settings')]"));
		explicitWaitFunc(EleSFMyProfileMySetting);
		EleSFMyProfileMySetting.click();
	}

	public static void SFLogout() {
		WebElement EleProfileLogoutButton = driver.findElement(By.xpath("//a[@title='Logout']"));
		explicitWaitFunc(EleProfileLogoutButton);
		EleProfileLogoutButton.click();
	}

	// Runtime Prompt 
	public static void PromptClose() {
		WebElement PromptClose = driver.findElement(By.xpath("//div//a[@id='tryLexDialogX']"));
		PromptClose.click();
		System.out.println("Prompt Window Closed");
	}

	public static void explicitWaitFunc(WebElement ele, int iTime) {
		// WebDriver driver=null;
		WebDriverWait wait = new WebDriverWait(driver, iTime);
		wait.until(ExpectedConditions.visibilityOf(ele));
	}

	public static void explicitWaitFunc(WebElement ele) {
		// WebDriver driver=null;
		WebDriverWait wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.visibilityOf(ele));
	}

	public static void selectValueFromDropDown(WebElement ele, String value) {
		Select select = new Select(ele);
		select.selectByVisibleText(value);
	}
}