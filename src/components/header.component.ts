import { Locator, Page } from "@playwright/test";


export class Header {
    readonly page : Page;
    readonly title : Locator;
    readonly lnkHome: Locator;
    readonly lnkCategories: Locator;
    readonly lnkLanguage: Locator;
    readonly lnkProfile: Locator;
    readonly lnkContact: Locator;

    constructor (page : Page) {
        this.page = page;
        this.title = page.locator('#Layer_1');
        this.lnkHome = page.locator('[data-test="nav-home"]');
        this.lnkCategories = page.locator('[data-test="nav-categories"]');
        this.lnkContact = page.locator('[data-test="nav-contact"]');
        this.lnkProfile = page.locator('[data-test="nav-menu"]');
        this.lnkLanguage = page.locator('[data-test="language-select"]');
    }
}