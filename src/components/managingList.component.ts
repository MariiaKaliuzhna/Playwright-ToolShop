import { Locator, Page } from "@playwright/test";

export class ManagingList {
    readonly lnkFavorites: Locator;
    readonly lnkProfile: Locator;
    readonly lnkInvoices: Locator;
    readonly lnkMessages: Locator;

    constructor (readonly page : Page) {
        this.lnkFavorites = page.getByRole('button', {name: 'Favorites'});
        this.lnkProfile = page.getByRole('button', {name: 'Profile'});
        this.lnkInvoices = page.getByRole('button', {name: 'Invoices'});
        this.lnkMessages = page.getByRole('button', {name: 'Messages'});
    }

    async clickToProfile () : Promise<void> {
        await this.lnkProfile.click();
    }
}