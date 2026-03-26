import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";
import { SideBar } from "../components/sideBar.component";
import { ProductCardsContainer } from "../components/productCardsContainer.component";


export class HomePage extends BasePage {
    readonly sideBar : SideBar;
    readonly productCardContainer : ProductCardsContainer;

    constructor (page : Page) {
        super(page);
        this.sideBar = new SideBar (page);
        this.productCardContainer = new ProductCardsContainer (page);
    }

    async goToURL() {
        await this.page.goto('/');
    }
}