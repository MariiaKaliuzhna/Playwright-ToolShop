import { Page } from "@playwright/test";
import { Header } from "../components/header.component";
import { Toast } from "../components/toast.component";


export abstract class BasePage {
    readonly page : Page;
    readonly header : Header;
    readonly toast : Toast;

    constructor (page : Page) {
        this.page = page;
        this.header = new Header (page);
        this.toast = new Toast (page);
    }

    async waitForPageReady() {
        await this.page.waitForLoadState('domcontentloaded');
        await this.page.waitForTimeout(3000);
    }
}