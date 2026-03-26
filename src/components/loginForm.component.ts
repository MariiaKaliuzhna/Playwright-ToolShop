import { Page, Locator } from "@playwright/test";

export class LoginForm {
    readonly page : Page;
    readonly inputEmail : Locator;
    readonly inputPassword : Locator;
    readonly btnSubmit : Locator;
    
    constructor (page : Page) {
        this.page = page;
        this.inputEmail = page.locator('#email');
        this.inputPassword = page.locator('#password');
        this.btnSubmit = page.locator('.btnSubmit');
    }

    async login (email : string, password : string) {
        await this.inputEmail.fill(email);
        await this.inputPassword.fill(password);
        await this.btnSubmit.click();
    }
}