import { Locator, Page } from "@playwright/test";


export class ManagingList {
    readonly page : Page;
    readonly lnkFavorites: Locator;
    readonly lnkProfile: Locator;
    readonly lnkInvoices: Locator;
    readonly lnkMessages: Locator;

    constructor (page : Page) {
        this.page = page;
        this.lnkFavorites = page.locator('[data-test="nav-favorites"]');
        this.lnkProfile = page.locator('[data-test="nav-profile"]');
        this.lnkInvoices = page.locator('[data-test="nav-invoices"]');
        this.lnkMessages = page.locator('[data-test="language-messages"]');
    }

    async clickButton () : Promise<void> {
        await this.lnkProfile.click();
    }
}