package stepDefinitions;

import cucumber.api.java.en.*;
import objects.HomePage;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import static stepDefinitions.SetUp.driver;

public class LoginSteps{

    HomePage homePage = PageFactory.initElements(driver, HomePage.class);

    @Given("^User need to be on the signin page$")
    public void user_need_to_be_on_the_signin_page() {
        // Write code here that turns the phrase above into concrete actions
            driver.get("http://54.172.98.170:443/");
    }

    @When("^Login with valid email and password$")
    public void login_with_valid_email_and_password()  {
        // Write code here that turns the phrase above into concrete actions
            homePage.logIn();
    }

    @Then("^User shall be allowed to login no error message shown$")
    public void user_shall_be_allowed_to_login_no_error_message_shown() {
        // Write code here that turns the phrase above into concrete actions
        String actualVal = homePage.findBanner();
        String expectedValue = "Izaan Human Resource Management System";
        Assert.assertEquals(actualVal, expectedValue);

    }
}
