import { Page, Locator } from "@playwright/test";
import BasePage from "./basepage";

export class LoginPage extends BasePage{
    private readonly usernameTextbox:Locator;
    private readonly passwordTexbox:Locator;
    private readonly loginButton:Locator;

    constructor(page:Page){
        super(page);
        this.usernameTextbox = page.locator('[name="username"]');
        this.passwordTexbox = page.locator('[name="password"]');
        this.loginButton = page.locator('[type="submit"]');
    }

    async enterUsername(usernameText:string){
        await this.b_fillField(this.usernameTextbox,usernameText)
    }

    async enterPassword(passwordText:string){
        await this.b_fillField(this.passwordTexbox,passwordText);
    }

    async clickLogin(){
        await this.b_clickElement(this.loginButton);
    }
} 
