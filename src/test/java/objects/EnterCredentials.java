package objects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class EnterCredentials {

    @FindBy(how = How.ID, using = "exampleInputEmail")
    WebElement email;
    @FindBy(how = How.ID, using = "exampleInputPassword")
    WebElement password;
    @FindBy(how = How.CSS, using = "body > div > div > div > div > div > div > div > div > form > button")
    WebElement login;
    @FindBy(how = How.XPATH, using = "/html/body/div/div/div/div/div/div/div/div/form/div[1]/ul/li")
    WebElement error;

    public EnterCredentials logIn(String em, String pass){

        email.sendKeys(em);
        password.sendKeys(pass);
        login.click();
        return new EnterCredentials();

    }

    public String errorMessage(){
        String actval = error.getText();
        return actval;

    }

}
