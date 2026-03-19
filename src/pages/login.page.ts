import { Page } from "@playwright/test";
import { LoginForm } from "../components/loginForm.component";
import { BasePage } from "./base.page";


export class LoginPage extends BasePage {
    readonly loginForm : LoginForm;

    constructor (page : Page) {
        super(page);
        this.loginForm = new LoginForm(page);
    }

    async goToURL() {
        await this.page.goto('/auth/login');
    }
}