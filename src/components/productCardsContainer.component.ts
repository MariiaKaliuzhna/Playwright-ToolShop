import { Locator, Page } from "@playwright/test";
import { ProductCard } from "./productCard.component";

export class ProductCardsContainer {
    readonly page : Page;
    readonly productCard : ProductCard;

    constructor (page : Page) {
        this.page = page;
        this.productCard = new ProductCard (page);
    }

}