import { Page, Locator } from "@playwright/test";

export class LoginForm {
    readonly inputEmail : Locator;
    readonly inputPassword : Locator;
    readonly btnSubmit : Locator;
    
    constructor (readonly page : Page) {
        this.inputEmail = page.getByPlaceholder('Your email');
        this.inputPassword = page.getByPlaceholder('Your password');
        this.btnSubmit = page.getByRole('button', {name: 'Login'});
    }

    async login (email : string, password : string) : Promise<void> {
        await this.inputEmail.fill(email);
        await this.inputPassword.fill(password);
        await this.btnSubmit.click();
    }
}