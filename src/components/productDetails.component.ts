import { Page, Locator } from "@playwright/test";

export class ProductDetails {
    readonly productName : Locator;
    readonly productPrice : Locator;
    readonly productDescrfiption : Locator;
    readonly productQuantity : Locator;
    readonly btnAddToCart : Locator;
    readonly btnAddToFavorites : Locator;
    
    constructor (readonly page : Page) {
        this.productName = page.getByTestId('product-name');
        this.productPrice = page.getByTestId('unit-price');
        this.productDescrfiption = page.getByTestId('product-description');
        this.productQuantity = page.getByTestId('quantity');
        this.btnAddToCart = page.getByRole('button', {name: 'Add to cart'});
        this.btnAddToFavorites = page.getByRole('button', {name: 'Add to favourites'});
    }

    async addToFavorites () : Promise<void> {
        await this.btnAddToFavorites.click();
    }
}