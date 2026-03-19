import { Page, Locator, expect } from "@playwright/test";

export class ProductDetails {
    readonly page : Page;
    readonly productName : Locator;
    readonly productPrice : Locator;
    readonly productDescrfiption : Locator;
    readonly productQuantity : Locator;
    readonly btnAddToCart : Locator;
    readonly btnAddToFavorites : Locator;
    
    constructor (page : Page) {
        this.page = page;
        this.productName = page.locator('[data-test="product-name"]');
        this.productPrice = page.locator('.price-section');
        this.productDescrfiption = page.locator('#description');
        this.productQuantity = page.locator('#quantity-input');
        this.btnAddToCart = page.locator('#btn-add-to-cart');
        this.btnAddToFavorites = page.locator('#btn-add-to-favorites');
    }

    async addToFavorites () {
        await this.btnAddToFavorites.click();
    }
}