import { Page } from "@playwright/test";
import { BasePage } from "./base.page";
import { SideBar } from "../components/sideBar.component";
import { ProductCard } from "../components/productCard.component";


export class HomePage extends BasePage {
    readonly sideBar : SideBar;
    readonly productCard : ProductCard;

    constructor (readonly page : Page) {
        super(page);
        this.sideBar = new SideBar (page);
        this.productCard = new ProductCard (page);
    }
}