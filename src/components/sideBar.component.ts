import { expect, Locator, Page } from "@playwright/test";

export class SideBar {
    readonly page : Page;
    readonly inputSearch: Locator;
    readonly rangePrice : Locator;
    readonly btnSearch : Locator;

    constructor (page : Page) {
        this.page = page;
        this.inputSearch = page.locator('#search-query');
        this.rangePrice = page.locator('[role=slider]');
        this.btnSearch = page.locator('[data-test="search-submit"]');
    }

    async lookForProduct (product : string) {
        await this.inputSearch.fill(product);
        await this.btnSearch.click();
    }
}