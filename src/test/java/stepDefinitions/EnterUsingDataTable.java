package stepDefinitions;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import objects.EnterCredentials;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import java.util.List;
import java.util.Map;

import static stepDefinitions.SetUp.driver;

public class EnterUsingDataTable {

    EnterCredentials enterCredentials = PageFactory.initElements(driver, EnterCredentials.class);

    @Given("^User is on login page$")
    public void user_is_on_login_page()  {
            driver.get("http://54.172.98.170:443/");
    }

    @When("^Enter invalid email and password from Data Table$")
    public void enter_invalid_email_and_password_from_Data_Table(DataTable dataTable) {
        // Write code here that turns the phrase above into concrete actions
        // For automatic transformation, change DataTable to one of
        // List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
        // E,K,V must be a scalar (String, Integer, Date, enum etc)
        List<Map<String, String>> testDataTable = dataTable.asMaps(String.class, String.class);
        enterCredentials.logIn(testDataTable.get(1).get("email"), testDataTable.get(1).get("password"));

    }

    @Then("^Error message appears$")
    public void error_message_appear() throws Throwable{
        String actual = enterCredentials.errorMessage();
        Assert.assertEquals(actual, "Invalid login attempt.");

    }

}

