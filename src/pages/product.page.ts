import { Page } from "@playwright/test";
import { BasePage } from "./base.page";
import { ProductDetails } from "../components/productDetails.component";


export class ProductPage extends BasePage {
    readonly productDetails : ProductDetails;

    constructor (readonly page : Page) {
        super(page);
        this.productDetails = new ProductDetails (page);
    }
}