import { expect, Locator, Page } from "@playwright/test";

export class Toast {
    readonly page : Page;
    readonly msgToast : Locator;

    constructor (page : Page) {
        this.page = page;
        this.msgToast = page.locator('[role=alert]');
    }

    async validateAddingToFavorite (msg : string) {
        await expect(this.msgToast).toHaveText(msg);
    }
}