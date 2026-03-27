import { Locator, Page } from "@playwright/test";

export class Header {
    readonly title : Locator;
    readonly lnkHome: Locator;
    readonly lnkCategories: Locator;
    readonly lnkLanguage: Locator;
    readonly lnkProfile: Locator;
    readonly lnkContact: Locator;

    constructor (private readonly page : Page) {
        this.title = page.locator('#Layer_1');
        this.lnkHome = page.getByRole('link', {name: 'Home'});
        this.lnkCategories = page.getByRole('button', {name: 'Categories'});
        this.lnkContact = page.getByRole('link', {name: 'Contact'});
        this.lnkProfile = page.getByTestId('nav-menu');
        this.lnkLanguage = page.getByTestId('language-select');
    }
}