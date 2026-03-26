import { expect, Locator, Page } from "@playwright/test";

export class ProductCard {
    readonly page : Page;
    readonly cardProduct : Locator;
    readonly cardImage : Locator;
    readonly cardTitle : Locator;
    readonly cardFooter : Locator;

    constructor (page : Page) {
        this.page = page;
        this.cardProduct = page.locator('.card');
        this.cardImage = page.locator('.card-img-top');
        this.cardTitle = page.locator('.card-title');
        this.cardFooter = page.locator('.card-footer');
    }

    async choseProduct (index : number) {
        await expect(this.cardImage.first()).toBeVisible();
        await this.cardProduct.nth(index).click();
    }

    async validateCardName (name : string, index : number) {
        await expect(this.cardTitle.nth(index)).toHaveText(name);
    }
}