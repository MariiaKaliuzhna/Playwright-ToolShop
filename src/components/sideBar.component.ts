import { Locator, Page } from "@playwright/test";

export class SideBar {
    readonly inputSearch: Locator;
    readonly rangePrice : Locator;
    readonly btnSearch : Locator;

    constructor (readonly page : Page) {
        this.inputSearch = page.getByRole('textbox', {name: 'Search'});
        this.rangePrice = page.getByRole('slider');
        this.btnSearch = page.getByRole('button', {name: 'Search'});
    }

    async lookForProduct (product : string) : Promise<void> {
        await this.inputSearch.fill(product);
        await this.btnSearch.click();
    }
}