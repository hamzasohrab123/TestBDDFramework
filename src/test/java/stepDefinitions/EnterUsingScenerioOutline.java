package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import objects.ActivityPage;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import static stepDefinitions.SetUp.driver;

public class EnterUsingScenerioOutline{

    ActivityPage activityPage = PageFactory.initElements(driver, ActivityPage.class);

    @Given("^User has to be on activity information page$")
    public void user_has_to_be_on_activity_information_page()  {
        driver.get("http://54.172.98.170:443/");
        activityPage.logIn();

    }

    @When("^Try entering values \"([^\"]*)\" and \"([^\"]*)\"$")
    public void try_entering_values_user_and_status(String status, String name) {
        activityPage.activityStatus(status, name);
        activityPage.save();
    }

    @Then("^Values are entered without any error$")
    public void given_values_are_entered_without_any_error()  {
        String actual = activityPage.num();
        Assert.assertEquals(actual, "1");

    }
}
