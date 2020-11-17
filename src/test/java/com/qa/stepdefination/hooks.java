package com.qa.stepdefination;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.testng.ITestResult;
import com.relevantcodes.extentreports.LogStatus;
import com.relevantcodes.extentreports.ExtentTest;

public class hooks extends XeroBrowserUtility{
	static ExtentTest extentTest;
	static ExtentTest logger;
	
	public static String screenshotforfailure(WebDriver driver,String screenshotName) throws Exception {
		int count =0;
		String dateName = new SimpleDateFormat("yyyMMddhhmmss").format(new Date());
		TakesScreenshot ts = (TakesScreenshot) driver; //screenshot setup will be done
		File source = ts.getScreenshotAs(OutputType.FILE);//Takes the screenshot and saving it to surce object
		//source which we saved is not physically saved. but it is there in the object
		String sPathOFScreenshot = System.getProperty("user.dir")+"//screenshot/screnshot_"+""+count+screenshotName+dateName+".png";
		File dest = new File(sPathOFScreenshot);
		FileUtils.copyFile(source, dest);
		
		logger.log(LogStatus.INFO, "Test case is passed");
		logger.log(LogStatus.PASS, logger.addScreenCapture(sPathOFScreenshot));
		return sPathOFScreenshot;
		}
	
	public void tearDown(ITestResult result) throws Exception {
		if(result.getStatus()==ITestResult.FAILURE)
			extentTest.log(LogStatus.FAIL, "TEST CASE FAILED IS "+result.getName());
			extentTest.log(LogStatus.FAIL, "TEST CASE FAILED IS "+result.getThrowable());
			
			String sPathOFScreenshot=hooks.screenshotforfailure(driver,result.getName());
			extentTest.log(LogStatus.FAIL, extentTest.addScreencast(sPathOFScreenshot));
		}
}