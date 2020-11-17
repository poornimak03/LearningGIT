package com.qa.runner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import com.cucumber.listener.Reporter;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@RunWith(Cucumber.class)
@CucumberOptions(features="Features",
glue= {"com.qa.stepdefination"},
monochrome=true,
dryRun=false,
plugin= {
	"com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.html",
	"pretty", "html:target/cucumber", "json:target/cucumber.json"}
)
public class runner extends AbstractTestNGCucumberTests{
	@AfterClass
	public static void writeExtentReport() {
		Reporter.loadXMLConfig("features/extent-config.xml");
	}
}