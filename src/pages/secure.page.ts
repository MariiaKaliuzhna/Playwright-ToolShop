import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";
import { ManagingList } from "../components/managingList.component";


export class SecurePage extends BasePage {
    readonly title : Locator;
    readonly managingList : ManagingList;

    constructor (readonly page : Page) {
        super(page);
        this.managingList = new ManagingList (page);
        this.title = page.getByRole('heading', { name: 'My account' });
    }
}