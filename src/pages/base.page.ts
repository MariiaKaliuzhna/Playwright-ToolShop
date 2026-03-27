import { Page } from "@playwright/test";
import { Header } from "../components/header.component";
import { Toast } from "../components/toast.component";


export abstract class BasePage {
    readonly header : Header;
    readonly toast : Toast;

    constructor (readonly page : Page) {
        this.header = new Header (page);
        this.toast = new Toast (page);
    }

    async goToURL (url : string) {
        await this.page.goto(url);
    }
}