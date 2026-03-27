import { expect, Locator, Page } from "@playwright/test";

export class ProductCard {
    readonly cardProduct : Locator;
    readonly cardImage : Locator;
    readonly cardTitle : Locator;
    readonly cardFooter : Locator;

    constructor (readonly page : Page) {
        this.cardProduct = page.locator('.card');
        this.cardImage = page.locator('.card-img-top');
        this.cardTitle = page.locator('.card-title');
        this.cardFooter = page.locator('.card-footer');
    }

    async choseProduct (index : number) : Promise<void> {
        await expect(this.cardImage.first()).toBeVisible();
        await this.cardProduct.nth(index).click();
    }
}