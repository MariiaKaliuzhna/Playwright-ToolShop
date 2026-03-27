import { Locator, Page } from "@playwright/test";

export class Toast {
    readonly msgToast : Locator;

    constructor (readonly page : Page) {
        this.msgToast = page.getByRole('alert');
    }
}